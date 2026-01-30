// ============================================
// 5.2. Sử dụng Routing trong App.js
// ============================================

import { Routes, Route, Navigate } from "react-router-dom";

import AppNavbar from "./components/AppNavbar";
import CapNhatSoLuong from "./components/CapNhatSoLuong";
import XuLyDonHangModal from "./components/XuLyDonHangModal";
import FormSanPham from "./components/FormSanPham";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div>
      {/* NavBar */}
      <AppNavbar />

      <div className="container mt-3">
        <Routes>
          {/* Route mặc định */}
          <Route path="/" element={<Navigate to="/ex1" />} />

          {/* Các route cho từng bài */}
          <Route path="/ex1" element={<CapNhatSoLuong />} />
          <Route path="/ex2" element={<XuLyDonHangModal />} />
          <Route path="/ex3" element={<FormSanPham />} />
          <Route path="/ex4" element={<TodoList />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
