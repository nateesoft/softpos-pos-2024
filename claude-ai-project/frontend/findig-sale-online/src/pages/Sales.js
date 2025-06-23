// src/pages/Sales.jsx
import React, { useState, useEffect } from 'react';
import { 
  Plus, 
  Search, 
  Trash2, 
  Eye, 
  Edit,
  X,
  Calendar,
  User,
  FileText,
  CreditCard
} from 'lucide-react';
import { getThemeClasses } from '../utils/themes';
import { mockProducts, mockSales, mockCustomers } from '../data/mockData';

const Sales = ({ 
  currentTheme, 
  searchTerm, 
  setSearchTerm, 
  selectedCustomer, 
  setSelectedCustomer, 
  cart, 
  setCart 
}) => {
  const [saleData, setSaleData] = useState({
    customer: '',
    items: [],
    discount: 0,
    tax: 7,
    paymentMethod: 'cash'
  });
  const [showSaleModal, setShowSaleModal] = useState(false);
  
  // New Sale Modal Data
  const [newSaleData, setNewSaleData] = useState({
    saleNumber: '',
    customerId: '',
    date: new Date().toISOString().split('T')[0],
    notes: '',
    discount: 0,
    paymentMethod: 'cash',
    status: 'pending'
  });

  // Generate sale number
  const generateSaleNumber = () => {
    const now = new Date();
    const timestamp = now.getTime().toString().slice(-6);
    return `SAL${timestamp}`;
  };

  // Reset new sale form
  const resetNewSaleForm = () => {
    setNewSaleData({
      saleNumber: generateSaleNumber(),
      customerId: '',
      date: new Date().toISOString().split('T')[0],
      notes: '',
      discount: 0,
      paymentMethod: 'cash',
      status: 'pending'
    });
  };

  // Handle new sale form submission
  const handleNewSaleSubmit = () => {
    if (!newSaleData.customerId) {
      alert('กรุณาเลือกลูกค้า');
      return;
    }

    const selectedCustomer = mockCustomers.find(c => c.id === parseInt(newSaleData.customerId));
    
    // Simulate saving to database
    alert(`บันทึกใบขายใหม่เรียบร้อย!\n` +
          `เลขที่: ${newSaleData.saleNumber}\n` +
          `ลูกค้า: ${selectedCustomer?.name}\n` +
          `วันที่: ${newSaleData.date}\n` +
          `วิธีชำระ: ${getPaymentMethodLabel(newSaleData.paymentMethod)}`);
    
    // Close modal and reset form
    setShowSaleModal(false);
    resetNewSaleForm();
  };

  // Get payment method label
  const getPaymentMethodLabel = (method) => {
    const methods = {
      'cash': 'เงินสด',
      'transfer': 'โอนเงิน',
      'credit_card': 'บัตรเครดิต',
      'qr_code': 'QR Code'
    };
    return methods[method] || method;
  };

  // Keyboard shortcuts for modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (showSaleModal) {
        if (e.key === 'Escape') {
          setShowSaleModal(false);
        } else if (e.key === 'Enter' && (e.ctrlKey || e.metaKey)) {
          if (newSaleData.customerId) {
            handleNewSaleSubmit();
          }
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [showSaleModal, newSaleData.customerId]);

  // Auto-generate sale number when modal opens
  useEffect(() => {
    if (showSaleModal && !newSaleData.saleNumber) {
      setNewSaleData(prev => ({
        ...prev,
        saleNumber: generateSaleNumber()
      }));
    }
  }, [showSaleModal]);

  const addToCart = (product) => {
    const existingItem = cart.find(item => item.id === product.id);
    if (existingItem) {
      setCart(cart.map(item => 
        item.id === product.id 
          ? {...item, quantity: item.quantity + 1}
          : item
      ));
    } else {
      setCart([...cart, {...product, quantity: 1}]);
    }
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setCart(cart.map(item => 
      item.id === productId 
        ? {...item, quantity: quantity}
        : item
    ));
  };

  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const taxAmount = subtotal * (saleData.tax / 100);
  const total = subtotal + taxAmount - saleData.discount;

  const completeSale = () => {
    if (cart.length === 0) {
      alert('กรุณาเพิ่มสินค้าก่อนทำการขาย');
      return;
    }
    if (!selectedCustomer) {
      alert('กรุณาเลือกลูกค้า');
      return;
    }

    alert(`บันทึกการขายเรียบร้อย\nลูกค้า: ${selectedCustomer.name}\nยอดรวม: ฿${total.toLocaleString()}`);
    setCart([]);
    setSelectedCustomer(null);
    setSaleData({
      customer: '',
      items: [],
      discount: 0,
      tax: 7,
      paymentMethod: 'cash'
    });
  };

  const filteredProducts = mockProducts.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.code.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <h1 className={`text-2xl font-bold ${getThemeClasses('textPrimary', currentTheme)}`}>บันทึกการขาย</h1>
        <button 
          onClick={() => {
            resetNewSaleForm();
            setShowSaleModal(true);
          }}
          className={`mt-4 sm:mt-0 text-white px-4 py-2 rounded-lg font-medium ${getThemeClasses('primaryBtn', currentTheme)} ${getThemeClasses('transition', currentTheme)} flex items-center`}
        >
          <Plus className="w-4 h-4 mr-2" />
          สร้างใบขายใหม่
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Product Selection */}
        <div className="lg:col-span-2 space-y-6">
          <div className={`${getThemeClasses('cardBg', currentTheme)} rounded-lg shadow-sm border ${getThemeClasses('cardBorder', currentTheme)} p-6`}>
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <div className="flex-1">
                <div className="relative">
                  <Search className={`absolute left-3 top-1/2 transform -translate-y-1/2 ${getThemeClasses('textMuted', currentTheme)} w-4 h-4`} />
                  <input
                    type="text"
                    placeholder="ค้นหาสินค้า..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className={`w-full pl-10 pr-4 py-2 border rounded-lg ${getThemeClasses('input', currentTheme)}`}
                  />
                </div>
              </div>
              <select className={`px-4 py-2 border rounded-lg ${getThemeClasses('input', currentTheme)}`}>
                <option>ทุกหมวดหมู่</option>
                <option>อิเล็กทรอนิกส์</option>
                <option>เสื้อผ้า</option>
              </select>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {filteredProducts.map((product) => (
                <div key={product.id} className={`border rounded-lg p-4 hover:shadow-md transition-shadow ${getThemeClasses('cardBorder', currentTheme)}`}>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className={`font-medium ${getThemeClasses('textPrimary', currentTheme)} text-sm`}>{product.name}</h3>
                    <span className={`text-xs px-2 py-1 rounded ${getThemeClasses('info', currentTheme)}`}>
                      {product.code}
                    </span>
                  </div>
                  <p className={`text-sm ${getThemeClasses('textSecondary', currentTheme)} mb-2`}>{product.category}</p>
                  <div className="flex justify-between items-center">
                    <div>
                      <p className={`text-lg font-bold text-${currentTheme === 'dark' ? 'blue-400' : 'blue-600'}`}>฿{product.price.toLocaleString()}</p>
                      <p className={`text-xs ${getThemeClasses('textMuted', currentTheme)}`}>คงเหลือ: {product.stock}</p>
                    </div>
                    <button
                      onClick={() => addToCart(product)}
                      className={`text-white px-3 py-1 rounded text-sm ${getThemeClasses('primaryBtn', currentTheme)} ${getThemeClasses('transition', currentTheme)} flex items-center`}
                    >
                      <Plus className="w-3 h-3 mr-1" />
                      เพิ่ม
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Cart & Checkout */}
        <div className="space-y-6">
          {/* Customer Selection */}
          <div className={`${getThemeClasses('cardBg', currentTheme)} rounded-lg shadow-sm border ${getThemeClasses('cardBorder', currentTheme)} p-6`}>
            <h3 className={`font-semibold ${getThemeClasses('textPrimary', currentTheme)} mb-4`}>เลือกลูกค้า</h3>
            <select 
              value={selectedCustomer?.id || ''}
              onChange={(e) => {
                const customer = mockCustomers.find(c => c.id === parseInt(e.target.value));
                setSelectedCustomer(customer);
              }}
              className={`w-full px-3 py-2 border rounded-lg ${getThemeClasses('input', currentTheme)}`}
            >
              <option value="">เลือกลูกค้า</option>
              {mockCustomers.map((customer) => (
                <option key={customer.id} value={customer.id}>
                  {customer.name} ({customer.code})
                </option>
              ))}
            </select>
            {selectedCustomer && (
              <div className={`mt-3 p-3 rounded-lg ${currentTheme === 'dark' ? 'bg-blue-900 bg-opacity-30' : 'bg-blue-50'}`}>
                <p className={`text-sm font-medium ${currentTheme === 'dark' ? 'text-blue-200' : 'text-blue-900'}`}>{selectedCustomer.name}</p>
                <p className={`text-xs ${currentTheme === 'dark' ? 'text-blue-300' : 'text-blue-600'}`}>{selectedCustomer.phone}</p>
                <p className={`text-xs ${currentTheme === 'dark' ? 'text-blue-300' : 'text-blue-600'}`}>{selectedCustomer.email}</p>
              </div>
            )}
          </div>

          {/* Shopping Cart */}
          <div className={`${getThemeClasses('cardBg', currentTheme)} rounded-lg shadow-sm border ${getThemeClasses('cardBorder', currentTheme)} p-6`}>
            <h3 className={`font-semibold ${getThemeClasses('textPrimary', currentTheme)} mb-4`}>ตรวจสอบรายการ</h3>
            
            {cart.length === 0 ? (
              <p className={`${getThemeClasses('textMuted', currentTheme)} text-center py-4`}>ไม่มีสินค้าในตะกร้า</p>
            ) : (
              <div className="space-y-3">
                {cart.map((item) => (
                  <div key={item.id} className={`flex items-center justify-between p-3 border rounded-lg ${getThemeClasses('cardBorder', currentTheme)}`}>
                    <div className="flex-1">
                      <h4 className={`text-sm font-medium ${getThemeClasses('textPrimary', currentTheme)}`}>{item.name}</h4>
                      <p className={`text-xs ${getThemeClasses('textMuted', currentTheme)}`}>฿{item.price.toLocaleString()}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className={`w-6 h-6 rounded ${getThemeClasses('textMuted', currentTheme)} hover:${getThemeClasses('textSecondary', currentTheme)} flex items-center justify-center text-sm ${currentTheme === 'dark' ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'}`}
                      >
                        -
                      </button>
                      <span className={`w-8 text-center text-sm ${getThemeClasses('textPrimary', currentTheme)}`}>{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className={`w-6 h-6 rounded ${getThemeClasses('textMuted', currentTheme)} hover:${getThemeClasses('textSecondary', currentTheme)} flex items-center justify-center text-sm ${currentTheme === 'dark' ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'}`}
                      >
                        +
                      </button>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className={`w-6 h-6 rounded text-red-600 hover:text-red-800 flex items-center justify-center ${currentTheme === 'dark' ? 'bg-red-900 bg-opacity-30 hover:bg-red-800 hover:bg-opacity-40' : 'bg-red-100 hover:bg-red-200'}`}
                      >
                        <Trash2 className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {cart.length > 0 && (
              <div className={`mt-6 pt-4 border-t ${getThemeClasses('cardBorder', currentTheme)}`}>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>ยอดรวม:</span>
                    <span>฿{subtotal.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>ภาษี ({saleData.tax}%):</span>
                    <span>฿{taxAmount.toLocaleString()}</span>
                  </div>
                  {saleData.discount > 0 && (
                    <div className="flex justify-between text-red-600">
                      <span>ส่วนลด:</span>
                      <span>-฿{saleData.discount.toLocaleString()}</span>
                    </div>
                  )}
                  <div className={`flex justify-between font-bold text-lg pt-2 border-t ${getThemeClasses('cardBorder', currentTheme)}`}>
                    <span>ยอดสุทธิ:</span>
                    <span className={`text-${currentTheme === 'dark' ? 'blue-400' : 'blue-600'}`}>฿{total.toLocaleString()}</span>
                  </div>
                </div>

                <div className="mt-4 space-y-3">
                  <select 
                    value={saleData.paymentMethod}
                    onChange={(e) => setSaleData({...saleData, paymentMethod: e.target.value})}
                    className={`w-full px-3 py-2 border rounded-lg ${getThemeClasses('input', currentTheme)}`}
                  >
                    <option value="cash">เงินสด</option>
                    <option value="transfer">โอนเงิน</option>
                    <option value="credit_card">บัตรเครดิต</option>
                    <option value="qr_code">QR Code</option>
                  </select>

                  <button
                    onClick={completeSale}
                    className={`w-full text-white py-3 rounded-lg font-medium bg-green-500 hover:bg-green-600 transition-colors`}
                  >
                    ยืนยันการขาย
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Sales History */}
      <div className={`${getThemeClasses('cardBg', currentTheme)} rounded-lg shadow-sm border ${getThemeClasses('cardBorder', currentTheme)}`}>
        <div className={`p-6 border-b ${getThemeClasses('cardBorder', currentTheme)}`}>
          <h3 className={`text-lg font-semibold ${getThemeClasses('textPrimary', currentTheme)}`}>ประวัติการขายวันนี้</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className={getThemeClasses('tableHeader', currentTheme)}>
              <tr>
                <th className={`px-6 py-3 text-left text-xs font-medium ${getThemeClasses('textMuted', currentTheme)} uppercase tracking-wider`}>
                  เลขที่
                </th>
                <th className={`px-6 py-3 text-left text-xs font-medium ${getThemeClasses('textMuted', currentTheme)} uppercase tracking-wider`}>
                  ลูกค้า
                </th>
                <th className={`px-6 py-3 text-left text-xs font-medium ${getThemeClasses('textMuted', currentTheme)} uppercase tracking-wider`}>
                  จำนวนรายการ
                </th>
                <th className={`px-6 py-3 text-left text-xs font-medium ${getThemeClasses('textMuted', currentTheme)} uppercase tracking-wider`}>
                  ยอดรวม
                </th>
                <th className={`px-6 py-3 text-left text-xs font-medium ${getThemeClasses('textMuted', currentTheme)} uppercase tracking-wider`}>
                  สถานะ
                </th>
                <th className={`px-6 py-3 text-left text-xs font-medium ${getThemeClasses('textMuted', currentTheme)} uppercase tracking-wider`}>
                  การดำเนินการ
                </th>
              </tr>
            </thead>
            <tbody className={`${getThemeClasses('cardBg', currentTheme)} divide-y ${getThemeClasses('tableBorder', currentTheme)}`}>
              {mockSales.map((sale) => (
                <tr key={sale.id} className={getThemeClasses('tableRow', currentTheme)}>
                  <td className={`px-6 py-4 whitespace-nowrap text-sm font-medium ${getThemeClasses('textPrimary', currentTheme)}`}>
                    {sale.saleNumber}
                  </td>
                  <td className={`px-6 py-4 whitespace-nowrap text-sm ${getThemeClasses('textPrimary', currentTheme)}`}>
                    {sale.customer}
                  </td>
                  <td className={`px-6 py-4 whitespace-nowrap text-sm ${getThemeClasses('textSecondary', currentTheme)}`}>
                    {sale.items} รายการ
                  </td>
                  <td className={`px-6 py-4 whitespace-nowrap text-sm ${getThemeClasses('textPrimary', currentTheme)}`}>
                    ฿{sale.total.toLocaleString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                      sale.status === 'paid' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {sale.status === 'paid' ? 'ชำระแล้ว' : 'รอชำระ'}
                    </span>
                  </td>
                  <td className={`px-6 py-4 whitespace-nowrap text-right text-sm font-medium`}>
                    <button className={`${getThemeClasses('textSecondary', currentTheme)} hover:${getThemeClasses('textPrimary', currentTheme)} mr-3`}>
                      <Eye className="w-4 h-4" />
                    </button>
                    <button className={`${getThemeClasses('textMuted', currentTheme)} hover:${getThemeClasses('textSecondary', currentTheme)}`}>
                      <Edit className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* New Sale Modal */}
      {showSaleModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 animate-fade-in">
          <div 
            className={`${getThemeClasses('cardBg', currentTheme)} rounded-xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto ${getThemeClasses('transition', currentTheme)} transform animate-scale-in`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className={`sticky top-0 ${getThemeClasses('cardBg', currentTheme)} p-6 border-b ${getThemeClasses('cardBorder', currentTheme)} rounded-t-xl`}>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className={`w-12 h-12 bg-gradient-to-r ${getThemeClasses('primaryBtn', currentTheme).includes('gradient') ? getThemeClasses('primaryBtn', currentTheme).split(' ').find(c => c.includes('gradient')) : `from-${currentTheme === 'dark' ? 'blue-500' : 'blue-400'} to-${currentTheme === 'dark' ? 'blue-600' : 'blue-600'}`} rounded-lg flex items-center justify-center`}>
                    <FileText className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className={`text-xl font-bold ${getThemeClasses('textPrimary', currentTheme)}`}>
                      สร้างใบขายใหม่
                    </h3>
                    <p className={`text-sm ${getThemeClasses('textSecondary', currentTheme)}`}>
                      กรอกข้อมูลการขายใหม่
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setShowSaleModal(false)}
                  className={`p-2 rounded-lg ${getThemeClasses('sidebarHover', currentTheme)} ${getThemeClasses('transition', currentTheme)} ${getThemeClasses('textMuted', currentTheme)} hover:${getThemeClasses('textSecondary', currentTheme)}`}
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 space-y-6">
              {/* Sale Info Section */}
              <div className={`p-4 rounded-lg ${currentTheme === 'dark' ? 'bg-blue-900 bg-opacity-20' : 'bg-blue-50'} border ${currentTheme === 'dark' ? 'border-blue-700' : 'border-blue-200'}`}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className={`block text-sm font-medium ${getThemeClasses('textSecondary', currentTheme)} mb-2`}>
                      <FileText className="w-4 h-4 inline mr-2" />
                      เลขที่ใบขาย
                    </label>
                    <input
                      type="text"
                      value={newSaleData.saleNumber || generateSaleNumber()}
                      readOnly
                      className={`w-full px-3 py-2 border rounded-lg ${getThemeClasses('input', currentTheme)} bg-gray-100 cursor-not-allowed`}
                      placeholder="จะสร้างอัตโนมัติ"
                    />
                  </div>
                  <div>
                    <label className={`block text-sm font-medium ${getThemeClasses('textSecondary', currentTheme)} mb-2`}>
                      <Calendar className="w-4 h-4 inline mr-2" />
                      วันที่
                    </label>
                    <input
                      type="date"
                      value={newSaleData.date}
                      onChange={(e) => setNewSaleData({...newSaleData, date: e.target.value})}
                      className={`w-full px-3 py-2 border rounded-lg ${getThemeClasses('input', currentTheme)}`}
                    />
                  </div>
                </div>
              </div>

              {/* Customer Selection */}
              <div>
                <label className={`block text-sm font-medium ${getThemeClasses('textSecondary', currentTheme)} mb-2`}>
                  <User className="w-4 h-4 inline mr-2" />
                  เลือกลูกค้า *
                </label>
                <select
                  value={newSaleData.customerId}
                  onChange={(e) => setNewSaleData({...newSaleData, customerId: e.target.value})}
                  className={`w-full px-3 py-2 border rounded-lg ${getThemeClasses('input', currentTheme)} ${!newSaleData.customerId ? 'border-red-300' : ''}`}
                  required
                >
                  <option value="">-- เลือกลูกค้า --</option>
                  {mockCustomers.map((customer) => (
                    <option key={customer.id} value={customer.id}>
                      {customer.name} ({customer.code}) - {customer.type === 'vip' ? 'VIP' : customer.type === 'wholesale' ? 'ขายส่ง' : 'ทั่วไป'}
                    </option>
                  ))}
                </select>
                {!newSaleData.customerId && (
                  <p className="text-xs text-red-500 mt-1">กรุณาเลือกลูกค้า</p>
                )}
              </div>

              {/* Customer Info Display */}
              {newSaleData.customerId && (
                <div className={`p-4 rounded-lg ${getThemeClasses('cardBg', currentTheme)} border ${getThemeClasses('cardBorder', currentTheme)}`}>
                  {(() => {
                    const selectedCustomer = mockCustomers.find(c => c.id === parseInt(newSaleData.customerId));
                    return selectedCustomer ? (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <p className={`text-sm font-medium ${getThemeClasses('textPrimary', currentTheme)}`}>
                            {selectedCustomer.name}
                          </p>
                          <p className={`text-xs ${getThemeClasses('textSecondary', currentTheme)}`}>
                            รหัส: {selectedCustomer.code}
                          </p>
                        </div>
                        <div>
                          <p className={`text-xs ${getThemeClasses('textSecondary', currentTheme)}`}>
                            โทร: {selectedCustomer.phone}
                          </p>
                          <p className={`text-xs ${getThemeClasses('textSecondary', currentTheme)}`}>
                            อีเมล: {selectedCustomer.email}
                          </p>
                        </div>
                      </div>
                    ) : null;
                  })()}
                </div>
              )}

              {/* Payment and Discount */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className={`block text-sm font-medium ${getThemeClasses('textSecondary', currentTheme)} mb-2`}>
                    <CreditCard className="w-4 h-4 inline mr-2" />
                    วิธีการชำระเงิน
                  </label>
                  <select
                    value={newSaleData.paymentMethod}
                    onChange={(e) => setNewSaleData({...newSaleData, paymentMethod: e.target.value})}
                    className={`w-full px-3 py-2 border rounded-lg ${getThemeClasses('input', currentTheme)}`}
                  >
                    <option value="cash">เงินสด</option>
                    <option value="transfer">โอนเงิน</option>
                    <option value="credit_card">บัตรเครดิต</option>
                    <option value="qr_code">QR Code</option>
                  </select>
                </div>
                <div>
                  <label className={`block text-sm font-medium ${getThemeClasses('textSecondary', currentTheme)} mb-2`}>
                    ส่วนลด (บาท)
                  </label>
                  <input
                    type="number"
                    min="0"
                    value={newSaleData.discount}
                    onChange={(e) => setNewSaleData({...newSaleData, discount: parseFloat(e.target.value) || 0})}
                    className={`w-full px-3 py-2 border rounded-lg ${getThemeClasses('input', currentTheme)}`}
                    placeholder="0"
                  />
                </div>
              </div>

              {/* Notes */}
              <div>
                <label className={`block text-sm font-medium ${getThemeClasses('textSecondary', currentTheme)} mb-2`}>
                  หมายเหตุ
                </label>
                <textarea
                  value={newSaleData.notes}
                  onChange={(e) => setNewSaleData({...newSaleData, notes: e.target.value})}
                  rows={3}
                  className={`w-full px-3 py-2 border rounded-lg ${getThemeClasses('input', currentTheme)}`}
                  placeholder="กรอกหมายเหตุเพิ่มเติม (ถ้ามี)..."
                />
              </div>

              {/* Status */}
              <div>
                <label className={`block text-sm font-medium ${getThemeClasses('textSecondary', currentTheme)} mb-2`}>
                  สถานะ
                </label>
                <select
                  value={newSaleData.status}
                  onChange={(e) => setNewSaleData({...newSaleData, status: e.target.value})}
                  className={`w-full px-3 py-2 border rounded-lg ${getThemeClasses('input', currentTheme)}`}
                >
                  <option value="pending">รอดำเนินการ</option>
                  <option value="confirmed">ยืนยันแล้ว</option>
                  <option value="paid">ชำระแล้ว</option>
                </select>
              </div>

              {/* Form Summary */}
              {newSaleData.customerId && (
                <div className={`p-4 rounded-lg ${currentTheme === 'dark' ? 'bg-green-900 bg-opacity-20' : 'bg-green-50'} border ${currentTheme === 'dark' ? 'border-green-700' : 'border-green-200'}`}>
                  <div className={`text-sm ${getThemeClasses('textPrimary', currentTheme)} space-y-1`}>
                    <div className="flex justify-between">
                      <span>เลขที่ใบขาย:</span>
                      <span className="font-medium">{newSaleData.saleNumber || generateSaleNumber()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>ลูกค้า:</span>
                      <span className="font-medium">
                        {mockCustomers.find(c => c.id === parseInt(newSaleData.customerId))?.name}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>วิธีชำระ:</span>
                      <span className="font-medium">{getPaymentMethodLabel(newSaleData.paymentMethod)}</span>
                    </div>
                    {newSaleData.discount > 0 && (
                      <div className="flex justify-between">
                        <span>ส่วนลด:</span>
                        <span className="font-medium text-red-600">-฿{newSaleData.discount.toLocaleString()}</span>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* Modal Footer */}
            <div className={`sticky bottom-0 ${getThemeClasses('cardBg', currentTheme)} p-6 border-t ${getThemeClasses('cardBorder', currentTheme)} rounded-b-xl`}>
              <div className="flex flex-col sm:flex-row justify-end space-y-2 sm:space-y-0 sm:space-x-3">
                <button
                  onClick={() => setShowSaleModal(false)}
                  className={`px-6 py-2 border rounded-lg font-medium ${getThemeClasses('secondaryBtn', currentTheme)} ${getThemeClasses('transition', currentTheme)} hover:shadow-md flex items-center justify-center`}
                >
                  <X className="w-4 h-4 mr-2" />
                  ยกเลิก
                </button>
                <button
                  onClick={() => {
                    resetNewSaleForm();
                  }}
                  className={`px-6 py-2 border rounded-lg font-medium ${getThemeClasses('secondaryBtn', currentTheme)} ${getThemeClasses('transition', currentTheme)} hover:shadow-md flex items-center justify-center`}
                >
                  <FileText className="w-4 h-4 mr-2" />
                  ล้างข้อมูล
                </button>
                <button
                  onClick={handleNewSaleSubmit}
                  disabled={!newSaleData.customerId}
                  className={`px-6 py-2 text-white rounded-lg font-medium ${getThemeClasses('primaryBtn', currentTheme)} ${getThemeClasses('transition', currentTheme)} hover:shadow-lg transform hover:scale-105 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none`}
                >
                  <Plus className="w-4 h-4 mr-2" />
                  บันทึกใบขาย
                </button>
              </div>
              
              {/* Quick Tips */}
              <div className={`mt-4 text-xs ${getThemeClasses('textMuted', currentTheme)} text-center p-2 rounded ${currentTheme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'}`}>
                <div className="flex items-center justify-center space-x-4">
                  <span>💡 เคล็ดลับ:</span>
                  <span>กด Ctrl+Enter เพื่อบันทึกเร็ว</span>
                  <span>•</span>
                  <span>กด Esc เพื่อยกเลิก</span>
                </div>
              </div>
            </div>
          </div>

          {/* Click outside to close */}
          <div 
            className="absolute inset-0 -z-10"
            onClick={() => setShowSaleModal(false)}
          />
        </div>
      )}
    </div>
  );
};

export default Sales;