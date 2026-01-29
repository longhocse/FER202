// ================================
// 2.1. Tạo component CapNhatSoLuong
// ================================

import { useState } from "react"; 
import { Button, Form, InputGroup } from "react-bootstrap";

function CapNhatSoLuong() {

  // --------------------------------
  // Bước 1: Khai báo useState
  // --------------------------------
  // soLuong: lưu số lượng sản phẩm
  // setSoLuong: cập nhật số lượng
  const [soLuong, setSoLuong] = useState(0);

  // --------------------------------
  // Bước 2: Xử lý sự kiện
  // --------------------------------

  // Giảm số lượng, đảm bảo không nhỏ hơn 0
  const giamSoLuong = () => {
    setSoLuong((prev) => Math.max(0, prev - 1));
  };

  // Tăng số lượng
  const tangSoLuong = () => {
    setSoLuong((prev) => prev + 1);
  };

  // Nhập số lượng trực tiếp từ input
  const nhapSoLuong = (e) => {
    const value = Number(e.target.value);
    if (!isNaN(value)) {
      setSoLuong(Math.max(0, value));
    }
  };

  // --------------------------------
  // Bước 3: Giao diện component
  // --------------------------------
  return (
    <div>
      <h3>Exercise 1 - Cập nhật số lượng</h3>

      <InputGroup style={{ maxWidth: "260px" }}>
        <Button variant="secondary" onClick={giamSoLuong}>
          -
        </Button>

        <Form.Control
          type="number"
          value={soLuong}
          onChange={nhapSoLuong}
        />

        <Button variant="primary" onClick={tangSoLuong}>
          +
        </Button>
      </InputGroup>
    </div>
  );
}

export default CapNhatSoLuong;
