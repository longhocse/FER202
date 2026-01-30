// ============================================
// 2. Trình bày bài Exercise 2
// 2.1. Tạo component XuLyDonHangModal
// ============================================

import { useState } from "react";
import { Button, Modal } from "react-bootstrap";

function XuLyDonHangModal() {

  const [isShowModal, setIsShowModal] = useState(false);

  const openModal = () => {
    setIsShowModal(true);
  };

  const closeModal = () => {
    setIsShowModal(false);
  };

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
