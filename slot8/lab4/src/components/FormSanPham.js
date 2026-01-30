import { useReducer } from "react";
import { Button, Form } from "react-bootstrap";

// 1️⃣ State ban đầu
const initialState = {
  draft: {
    name: "",
    price: "",
    category: "",
  },
  product: null, // chỉ lưu khi bấm Lưu
  errors: {},
};

// 2️⃣ Reducer
function formReducer(state, action) {
  switch (action.type) {
    case "UPDATE_FIELD":
      return {
        ...state,
        draft: { ...state.draft, [action.field]: action.value },
      };

    case "SET_ERRORS":
      return { ...state, errors: action.payload };

    case "SAVE_PRODUCT":
      return {
        ...state,
        product: state.draft,
        errors: {},
      };

    default:
      throw new Error("Unknown action");
  }
}

function FormSanPham() {
  const [state, dispatch] = useReducer(formReducer, initialState);

  // 3️⃣ Validate khi bấm lưu
  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, price, category } = state.draft;
    const errors = {};

    if (!name.trim()) errors.name = "Vui lòng nhập tên sản phẩm";
    if (!price || Number(price) <= 0) errors.price = "Giá phải lớn hơn 0";
    if (!category) errors.category = "Vui lòng chọn danh mục";

    if (Object.keys(errors).length > 0) {
      dispatch({ type: "SET_ERRORS", payload: errors });
      return;
    }

    dispatch({ type: "SAVE_PRODUCT" });
    alert("Lưu sản phẩm thành công!");
  };

  return (
    <div>
      <h3>Exercise 3 - Form sản phẩm (useReducer)</h3>

      <Form onSubmit={handleSubmit} style={{ maxWidth: 520 }}>
        <Form.Group className="mb-3">
          <Form.Label>Tên sản phẩm</Form.Label>
          <Form.Control
            value={state.draft.name}
            onChange={(e) =>
              dispatch({
                type: "UPDATE_FIELD",
                field: "name",
                value: e.target.value,
              })
            }
            isInvalid={!!state.errors.name}
            placeholder="Nhập tên sản phẩm..."
          />
          <Form.Control.Feedback type="invalid">
            {state.errors.name}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Giá</Form.Label>
          <Form.Control
            type="number"
            value={state.draft.price}
            onChange={(e) =>
              dispatch({
                type: "UPDATE_FIELD",
                field: "price",
                value: e.target.value,
              })
            }
            isInvalid={!!state.errors.price}
            placeholder="Nhập giá..."
          />
          <Form.Control.Feedback type="invalid">
            {state.errors.price}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Danh mục</Form.Label>
          <Form.Select
            value={state.draft.category}
            onChange={(e) =>
              dispatch({
                type: "UPDATE_FIELD",
                field: "category",
                value: e.target.value,
              })
            }
            isInvalid={!!state.errors.category}
          >
            <option value="">-- Chọn danh mục --</option>
            <option value="food">Food</option>
            <option value="drink">Drink</option>
            <option value="other">Other</option>
          </Form.Select>
          <Form.Control.Feedback type="invalid">
            {state.errors.category}
          </Form.Control.Feedback>
        </Form.Group>

        <Button type="submit" variant="primary">
          Lưu
        </Button>
      </Form>

      {state.product && (
        <pre className="mt-3 bg-light p-3 rounded">
          {JSON.stringify(state.product, null, 2)}
        </pre>
      )}
    </div>
  );
}

export default FormSanPham;
