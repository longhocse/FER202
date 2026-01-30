import { useReducer, useEffect } from "react";
import { Button, Modal } from "react-bootstrap";

// =======================
// 1️⃣ State ban đầu
// =======================
const initialState = {
  isShowModal: false,
  isConfirmed: false,
};

// =======================
// 2️⃣ Reducer xử lý action
// =======================
function reducer(state, action) {
  switch (action.type) {
    case "OPEN_MODAL":
      return { ...state, isShowModal: true, isConfirmed: false };

    case "CLOSE_MODAL":
      return { ...state, isShowModal: false };

    case "CONFIRM_ORDER":
      return { ...state, isConfirmed: true };

    default:
      throw new Error("Unknown action type");
  }
}

// =======================
// 3️⃣ Component
// =======================
function XuLyDonHangModal() {
  const [state, dispatch] = useReducer(reducer, initialState);

  // Xử lý khi xác nhận thành công
  useEffect(() => {
    if (state.isConfirmed) {
      alert("Duyệt đơn hàng thành công!");
      dispatch({ type: "CLOSE_MODAL" });
    }
  }, [state.isConfirmed]);

  return (
    <div>
      <h3>Exercise 2 - Modal xác nhận đơn hàng</h3>

      <Button variant="warning" onClick={() => dispatch({ type: "OPEN_MODAL" })}>
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
          <Button
            variant="success"
            onClick={() => dispatch({ type: "CONFIRM_ORDER" })}
          >
            Xác nhận
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default XuLyDonHangModal;
