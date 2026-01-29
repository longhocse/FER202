// ============================================
// 2. Trình bày bài Exercise 2
// 2.1. Tạo component XuLyDonHangModal
// ============================================

import { useState } from "react";
import { Button, Modal } from "react-bootstrap";

function XuLyDonHangModal() {
  // --------------------------------------------
  // Bước 1: Khai báo useState
  // --------------------------------------------
  // isShowModal: trạng thái hiển thị Modal (true/false)
  const [isShowModal, setIsShowModal] = useState(false);

  // --------------------------------------------
  // Bước 2: Xử lý hành động (sự kiện)
  // --------------------------------------------

  // Click nút "Xử lý đơn hàng" -> Mở Modal
  const openModal = () => {
    setIsShowModal(true);
  };

  // Click "Hủy" hoặc (X) -> Đóng Modal
  const closeModal = () => {
    setIsShowModal(false);
  };

  // Click "Xác nhận" -> alert thành công và tự đóng Modal
  const handleConfirm = () => {
    alert("Duyệt đơn hàng thành công!");
    closeModal();
  };

  // --------------------------------------------
  // Bước 3: Giao diện component (React-Bootstrap)
  // --------------------------------------------
  return (
    <div>
      <h3>Exercise 2 - Xử lý đơn hàng</h3>

      <Button variant="warning" onClick={openModal}>
        Xử lý đơn hàng
      </Button>

      <Modal show={isShowModal} onHide={closeModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Xác nhận xử lý</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          Bạn có chắc chắn muốn duyệt đơn hàng này để chuyển sang bộ phận kho không?
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={closeModal}>
            Hủy
          </Button>
          <Button variant="success" onClick={handleConfirm}>
            Xác nhận
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default XuLyDonHangModal;
