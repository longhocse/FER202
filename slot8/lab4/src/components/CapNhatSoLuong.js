import { useReducer } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";

// 1️⃣ State ban đầu đúng theo đề
const initialState = { count: 0 };

// 2️⃣ Reducer xử lý action đúng tên đề bài
function reducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };

    case "DECREMENT":
      return { count: Math.max(0, state.count - 1) };

    case "SET_INPUT":
      return { count: Math.max(0, action.payload) };

    default:
      throw new Error("Unknown action type");
  }
}

function CapNhatSoLuong() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h3>Exercise 1 - Chỉnh sửa số lượng (useReducer)</h3>

      <InputGroup style={{ maxWidth: "260px" }}>
        <Button
          variant="secondary"
          onClick={() => dispatch({ type: "DECREMENT" })}
        >
          -
        </Button>

        <Form.Control
          type="number"
          value={state.count}
          onChange={(e) =>
            dispatch({
              type: "SET_INPUT",
              payload: Number(e.target.value),
            })
          }
        />

        <Button
          variant="primary"
          onClick={() => dispatch({ type: "INCREMENT" })}
        >
          +
        </Button>
      </InputGroup>
    </div>
  );
}

export default CapNhatSoLuong;
