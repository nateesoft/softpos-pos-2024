// src/components/Layout/Sidebar.jsx
import React from 'react';
import { 
  Users, 
  ShoppingCart, 
  Package, 
  BarChart3, 
  LogOut,
  Home,
  ChevronDown,
  ChevronRight,
  Settings
} from 'lucide-react';
import { getThemeClasses, themes } from '../../utils/themes';
import { MENU_GROUPS } from '../../utils/constants';

const Sidebar = ({ 
  user,
  currentTheme,
  currentPage,
  setCurrentPage,
  setSidebarOpen,
  setShowLogoutConfirm,
  expandedMenus,
  setExpandedMenus,
  sidebarOpen
}) => {
  const iconMap = {
    dashboard: Home,
    sales: ShoppingCart,
    reports: BarChart3,
    products: Package,
    customers: Users,
    settings: Settings
  };

  const menuGroups = MENU_GROUPS.map(group => ({
    ...group,
    icon: iconMap[group.id]
  }));

  const toggleMenu = (menuId) => {
    console.log('Toggle menu clicked:', menuId);
    setExpandedMenus(prev => ({
      ...prev,
      [menuId]: !prev[menuId]
    }));
  };

  const handleMenuClick = (item) => {
    console.log('Menu clicked:', item);
    if (item.page) {
      setCurrentPage(item.page);
      setSidebarOpen(false);
    } else if (item.items) {
      toggleMenu(item.id);
    }
  };

  const handleSubmenuClick = (page) => {
    console.log('Submenu clicked:', page);
    setCurrentPage(page);
    setSidebarOpen(false);
  };

  return (
    <div className={`fixed inset-y-0 left-0 z-50 w-64 shadow-lg transform ${
      sidebarOpen ? 'translate-x-0' : '-translate-x-full'
    } transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0 ${getThemeClasses('sidebarBg', currentTheme)}`}>
      {/* Header */}
      <div className={`flex items-center justify-center h-16 px-4 ${getThemeClasses('sidebarHeader', currentTheme)}`}>
        <ShoppingCart className="w-8 h-8 text-white mr-3" />
        <h1 className="text-xl font-bold text-white">ระบบขาย</h1>
      </div>
      
      {/* Navigation */}
      <nav className="mt-8 h-full overflow-y-auto pb-20">
        {/* User Info */}
        <div className="px-4 mb-6">
          <div className="flex items-center">
            <div className={`w-8 h-8 bg-${themes[currentTheme].accent} rounded-full flex items-center justify-center`}>
              <span className="text-white text-sm font-medium">
                {user?.fullName?.charAt(0)}
              </span>
            </div>
            <div className="ml-3">
              <p className={`text-sm font-medium ${getThemeClasses('textPrimary', currentTheme)}`}>
                {user?.fullName}
              </p>
              <p className={`text-xs ${getThemeClasses('textMuted', currentTheme)}`}>
                {user?.role}
              </p>
            </div>
          </div>
        </div>
        
        {/* Menu Items */}
        <div className="space-y-1">
          {menuGroups.map((group) => {
            const Icon = group.icon;
            const isExpanded = expandedMenus[group.id];
            const hasSubmenu = group.items && group.items.length > 0;
            
            return (
              <div key={group.id}>
                <button
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    console.log('Main menu button clicked:', group.id);
                    handleMenuClick(group);
                  }}
                  style={{ 
                    pointerEvents: 'auto',
                    cursor: 'pointer',
                    userSelect: 'none',
                    WebkitUserSelect: 'none',
                    MozUserSelect: 'none',
                    msUserSelect: 'none'
                  }}
                  className={`w-full flex items-center justify-between px-6 py-3 text-sm font-medium text-left transition-colors ${getThemeClasses('sidebarHover', currentTheme)} ${
                    (!hasSubmenu && currentPage === group.page) ||
                    (hasSubmenu && group.items?.some(item => item.page === currentPage))
                      ? getThemeClasses('sidebarActive', currentTheme)
                      : getThemeClasses('sidebarText', currentTheme)
                  }`}
                >
                  <div className="flex items-center pointer-events-none">
                    <Icon className="w-5 h-5 mr-3" />
                    {group.label}
                  </div>
                  {hasSubmenu && (
                    <div className="flex items-center pointer-events-none">
                      {isExpanded ? (
                        <ChevronDown className="w-4 h-4" />
                      ) : (
                        <ChevronRight className="w-4 h-4" />
                      )}
                    </div>
                  )}
                </button>
                
                {hasSubmenu && isExpanded && (
                  <div className={currentTheme === 'dark' ? 'bg-gray-700' : 'bg-gray-50'}>
                    {group.items.map((item) => (
                      <button
                        key={item.id}
                        type="button"
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          console.log('Submenu button clicked:', item.page);
                          handleSubmenuClick(item.page);
                        }}
                        style={{ 
                          pointerEvents: 'auto',
                          cursor: 'pointer',
                          userSelect: 'none',
                          WebkitUserSelect: 'none',
                          MozUserSelect: 'none',
                          msUserSelect: 'none'
                        }}
                        className={`w-full flex items-center px-12 py-2 text-sm text-left transition-colors ${
                          currentTheme === 'dark' ? 'hover:bg-gray-600' : 'hover:bg-gray-100'
                        } ${
                          currentPage === item.page
                            ? currentTheme === 'dark' 
                              ? 'bg-gray-600 text-blue-400 font-medium' 
                              : `bg-${themes[currentTheme].primary}-100 text-${themes[currentTheme].accent} font-medium`
                            : getThemeClasses('textSecondary', currentTheme)
                        }`}
                      >
                        <span className="pointer-events-none">{item.label}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </nav>
      
      {/* Logout Button */}
      <div className={`absolute bottom-0 w-full p-4 border-t ${getThemeClasses('cardBorder', currentTheme)} ${getThemeClasses('sidebarBg', currentTheme)}`}>
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            console.log('Logout button clicked');
            setShowLogoutConfirm(true);
          }}
          style={{ 
            pointerEvents: 'auto',
            cursor: 'pointer',
            userSelect: 'none'
          }}
          className={`w-full flex items-center px-4 py-2 text-sm font-medium rounded-lg transition-colors ${getThemeClasses('sidebarText', currentTheme)} ${getThemeClasses('sidebarHover', currentTheme)} ${getThemeClasses('transition', currentTheme)} hover:shadow-md`}
        >
          <LogOut className="w-4 h-4 mr-3 pointer-events-none" />
          <span className="pointer-events-none">ออกจากระบบ</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;