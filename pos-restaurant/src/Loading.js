// Loading.js
import React from 'react';
import './Loading.css';

export default function Loading() {
  return (
    <div className="loader-container">
      <div className="custom-loader"></div>
      <p>กำลังโหลดข้อมูล...</p>
    </div>
  );
}
