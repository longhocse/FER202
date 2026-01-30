import { useReducer } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";

// 1️⃣ State ban đầu
const initialState = { quantity: 1 };

// 2️⃣ Reducer xử lý action
function reducerQuantity(state, action) {
  switch (action.type) {
    case "INCREASE":
      return { quantity: state.quantity + 1 };

    case "DECREASE":
      return { quantity: state.quantity > 1 ? state.quantity - 1 : 1 };

    case "SET_INPUT":
      return { quantity: action.payload >= 1 ? action.payload : 1 };

    default:
      throw new Error("Unknown action type");
  }
}

function CapNhatSoLuong() {
  // 3️⃣ Dùng reducer
  const [state, dispatch] = useReducer(reducerQuantity, initialState);

  return (
    <div>
      <h3>Exercise 1 - Cập nhật số lượng (useReducer)</h3>

      <InputGroup style={{ maxWidth: "260px" }}>
        <Button
          variant="secondary"
          onClick={() => dispatch({ type: "DECREASE" })}
        >
          -
        </Button>

        <Form.Control
          type="number"
          value={state.quantity}
          onChange={(e) =>
            dispatch({
              type: "SET_INPUT",
              payload: Number(e.target.value),
            })
          }
        />

        <Button
          variant="primary"
          onClick={() => dispatch({ type: "INCREASE" })}
        >
          +
        </Button>
      </InputGroup>
    </div>
  );
}

export default CapNhatSoLuong;
