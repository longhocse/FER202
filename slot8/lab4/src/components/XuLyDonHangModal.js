import { useReducer } from "react";
import { Button, Modal } from "react-bootstrap";

// 1️⃣ State ban đầu
const initialState = { isShowModal: false };

// 2️⃣ Reducer xử lý action
function modalReducer(state, action) {
  switch (action.type) {
    case "OPEN_MODAL":
      return { isShowModal: true };

    case "CLOSE_MODAL":
      return { isShowModal: false };

    default:
      throw new Error("Unknown action type");
  }
}

function XuLyDonHangModal() {
  // 3️⃣ Dùng reducer
  const [state, dispatch] = useReducer(modalReducer, initialState);

  const handleConfirm = () => {
    alert("Duyệt đơn hàng thành công!");
    dispatch({ type: "CLOSE_MODAL" });
  };

  return (
    <div>
      <h3>Exercise 2 - Xử lý đơn hàng (useReducer)</h3>

      <Button
        variant="warning"
        onClick={() => dispatch({ type: "OPEN_MODAL" })}
      >
        Xử lý đơn hàng
      </Button>

      <Modal
        show={state.isShowModal}
        onHide={() => dispatch({ type: "CLOSE_MODAL" })}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Xác nhận xử lý</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          Bạn có chắc chắn muốn duyệt đơn hàng này để chuyển sang bộ phận kho không?
        </Modal.Body>

        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={() => dispatch({ type: "CLOSE_MODAL" })}
          >
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
