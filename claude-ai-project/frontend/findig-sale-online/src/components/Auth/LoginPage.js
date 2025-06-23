// src/components/Auth/LoginPage.jsx
import React, { useState } from 'react';
import { ShoppingCart } from 'lucide-react';
import { themes, getThemeClasses } from '../../utils/themes';

const LoginPage = ({ 
  currentTheme, 
  setCurrentTheme, 
  setUser, 
  setCurrentPage 
}) => {
  const [loginData, setLoginData] = useState({ username: '', password: '' });
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      if (loginData.username === 'admin' && loginData.password === 'password') {
        setUser({
          id: 1,
          username: 'admin',
          fullName: 'ผู้ดูแลระบบ',
          role: 'admin'
        });
        setCurrentPage('dashboard');
      } else {
        alert('ชื่อผู้ใช้งานหรือรหัสผ่านไม่ถูกต้อง');
      }
      setLoading(false);
    }, 1000);
  };

  const loginThemeClasses = currentTheme === 'sunset' ? 'bg-gradient-to-br from-orange-100 via-pink-100 to-red-100' :
                            currentTheme === 'ocean' ? 'bg-gradient-to-br from-cyan-100 via-blue-100 to-indigo-100' :
                            currentTheme === 'dark' ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900' :
                            currentTheme === 'contrast' ? 'bg-white' :
                            `bg-gradient-to-br from-${themes[currentTheme].primary}-50 to-${themes[currentTheme].primary}-100`;

  return (
    <div className={`min-h-screen ${loginThemeClasses} flex items-center justify-center p-4 relative overflow-hidden`}>
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className={`absolute top-1/4 left-1/4 w-64 h-64 ${currentTheme === 'sunset' ? 'bg-orange-300' : currentTheme === 'ocean' ? 'bg-cyan-300' : `bg-${themes[currentTheme].primary}-300`} rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse`}></div>
        <div className={`absolute top-3/4 right-1/4 w-64 h-64 ${currentTheme === 'sunset' ? 'bg-pink-300' : currentTheme === 'ocean' ? 'bg-blue-300' : `bg-${themes[currentTheme].primary}-200`} rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-1000`}></div>
        <div className={`absolute bottom-1/4 left-1/3 w-64 h-64 ${currentTheme === 'sunset' ? 'bg-red-300' : currentTheme === 'ocean' ? 'bg-indigo-300' : `bg-${themes[currentTheme].primary}-400`} rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-2000`}></div>
      </div>

      {/* Login Form */}
      <div className={`relative ${getThemeClasses('cardBg', currentTheme)} rounded-2xl shadow-2xl w-full max-w-md p-8 backdrop-blur-sm ${currentTheme !== 'contrast' ? 'bg-opacity-90' : ''} border ${getThemeClasses('cardBorder', currentTheme)}`}>
        {/* Theme Selector for Login */}
        <div className="absolute top-4 right-4">
          <select 
            value={currentTheme}
            onChange={(e) => setCurrentTheme(e.target.value)}
            className={`text-xs px-2 py-1 border rounded ${getThemeClasses('input', currentTheme)} bg-opacity-90`}
          >
            {Object.entries(themes).map(([key, theme]) => (
              <option key={key} value={key}>{theme.name}</option>
            ))}
          </select>
        </div>

        <div className="text-center mb-8">
          <div className={`mx-auto w-16 h-16 bg-gradient-to-r ${themes[currentTheme].gradient} rounded-full flex items-center justify-center mb-4 shadow-lg ${getThemeClasses('transition', currentTheme)}`}>
            <ShoppingCart className="w-8 h-8 text-white" />
          </div>
          <h1 className={`text-3xl font-bold ${getThemeClasses('textPrimary', currentTheme)} mb-2`}>ระบบบันทึกการขาย</h1>
          <p className={`${getThemeClasses('textSecondary', currentTheme)} mt-2`}>กรุณาเข้าสู่ระบบเพื่อดำเนินการต่อ</p>
          <div className={`text-xs ${getThemeClasses('textMuted', currentTheme)} mt-2 flex items-center justify-center space-x-1`}>
            <span>🎨</span>
            <span>ธีมปัจจุบัน: {themes[currentTheme].name}</span>
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <label className={`block text-sm font-medium ${getThemeClasses('textSecondary', currentTheme)} mb-2`}>
              ชื่อผู้ใช้งาน
            </label>
            <input
              type="text"
              value={loginData.username}
              onChange={(e) => setLoginData({...loginData, username: e.target.value})}
              className={`w-full px-4 py-3 border rounded-lg ${getThemeClasses('input', currentTheme)} ${getThemeClasses('transition', currentTheme)}`}
              placeholder="admin"
              onKeyPress={(e) => e.key === 'Enter' && handleLogin(e)}
            />
          </div>

          <div>
            <label className={`block text-sm font-medium ${getThemeClasses('textSecondary', currentTheme)} mb-2`}>
              รหัสผ่าน
            </label>
            <input
              type="password"
              value={loginData.password}
              onChange={(e) => setLoginData({...loginData, password: e.target.value})}
              className={`w-full px-4 py-3 border rounded-lg ${getThemeClasses('input', currentTheme)} ${getThemeClasses('transition', currentTheme)}`}
              placeholder="password"
              onKeyPress={(e) => e.key === 'Enter' && handleLogin(e)}
            />
          </div>

          <button
            onClick={handleLogin}
            disabled={loading}
            className={`w-full text-white py-3 rounded-lg font-medium ${getThemeClasses('primaryBtn', currentTheme)} ${getThemeClasses('transition', currentTheme)} disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none shadow-lg`}
          >
            {loading ? (
              <div className="flex items-center justify-center space-x-2">
                <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"></div>
                <span>กำลังเข้าสู่ระบบ...</span>
              </div>
            ) : (
              'เข้าสู่ระบบ'
            )}
          </button>
        </div>

        <div className="mt-6 text-center">
          <div className={`text-sm ${getThemeClasses('textMuted', currentTheme)} bg-opacity-80 p-3 rounded-lg ${getThemeClasses('cardBg', currentTheme)} border ${getThemeClasses('cardBorder', currentTheme)}`}>
            <div className="font-medium mb-2">🔑 ข้อมูลสำหรับทดสอบ</div>
            <div className="space-y-1 text-xs">
              <div>👤 ชื่อผู้ใช้: <code className={`px-1 py-0.5 rounded ${getThemeClasses('info', currentTheme)}`}>admin</code></div>
              <div>🔒 รหัสผ่าน: <code className={`px-1 py-0.5 rounded ${getThemeClasses('info', currentTheme)}`}>password</code></div>
            </div>
          </div>
        </div>

        <div className="mt-4 text-center">
          <div className={`text-xs ${getThemeClasses('textMuted', currentTheme)} p-3 rounded-lg ${currentTheme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'} border ${getThemeClasses('cardBorder', currentTheme)}`}>
            <div className="font-medium mb-2 flex items-center justify-center space-x-1">
              <span>🔐</span>
              <span>ความปลอดภัยของระบบ</span>
            </div>
            <div className="space-y-1 text-xs">
              <div>⏰ ออกจากระบบอัตโนมัติภายใน 5 นาทีหากไม่มีการใช้งาน</div>
              <div>⚠️ เตือนล่วงหน้า 1 นาทีก่อนออกจากระบบ</div>
              <div>🔄 สามารถต่ออายุเซสชันได้จากแจ้งเตือน</div>
            </div>
          </div>
        </div>

        <div className="mt-4 text-center">
          <div className={`text-xs ${getThemeClasses('textMuted', currentTheme)}`}>
            💡 ลองเปลี่ยนธีมด้านบนขวาเพื่อดูการเปลี่ยนแปลง
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;