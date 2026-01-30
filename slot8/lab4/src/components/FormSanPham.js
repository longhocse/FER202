import { useReducer, useState } from "react";
import { Button, Form } from "react-bootstrap";

const initialState = {
  name: "",
  price: "",
  category: "",
};

function formReducer(state, action) {
  switch (action.type) {
    case "CHANGE_INPUT":
      return { ...state, [action.field]: action.value };
    case "RESET_FORM":
      return initialState;
    default:
      return state;
  }
}

function FormSanPham() {
  const [form, dispatch] = useReducer(formReducer, initialState);
  const [errors, setErrors] = useState({});
  const [savedData, setSavedData] = useState(null); // chỉ dùng để hiển thị output sau khi lưu

  const handleChange = (e) => {
    dispatch({
      type: "CHANGE_INPUT",
      field: e.target.name,
      value: e.target.value,
    });
  };

  const validate = () => {
    let newErrors = {};
    if (!form.name.trim()) newErrors.name = "Chưa nhập tên sản phẩm";
    if (!form.price) newErrors.price = "Chưa nhập giá";
    if (!form.category) newErrors.category = "Chưa chọn danh mục";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    alert("Lưu sản phẩm thành công!");
    setSavedData(form); // 👉 chỉ lúc này mới có output
    dispatch({ type: "RESET_FORM" });
    setErrors({});
  };

  return (
    <div>
      <h3>Exercise 3 - Form sản phẩm (useReducer)</h3>

      <Form onSubmit={handleSubmit} style={{ maxWidth: 520 }}>
        <Form.Group className="mb-3">
          <Form.Label>Tên sản phẩm</Form.Label>
          <Form.Control
            name="name"
            value={form.name}
            onChange={handleChange}
            isInvalid={!!errors.name}
          />
          <Form.Control.Feedback type="invalid">
            {errors.name}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Giá</Form.Label>
          <Form.Control
            name="price"
            type="number"
            value={form.price}
            onChange={handleChange}
            isInvalid={!!errors.price}
          />
          <Form.Control.Feedback type="invalid">
            {errors.price}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Danh mục</Form.Label>
          <Form.Select
            name="category"
            value={form.category}
            onChange={handleChange}
            isInvalid={!!errors.category}
          >
            <option value="">-- Chọn danh mục --</option>
            <option value="food">Food</option>
            <option value="drink">Drink</option>
            <option value="other">Other</option>
          </Form.Select>
          <Form.Control.Feedback type="invalid">
            {errors.category}
          </Form.Control.Feedback>
        </Form.Group>

        <Button type="submit" variant="primary">
          Lưu
        </Button>
      </Form>

      {/* OUTPUT chỉ hiện sau khi bấm Lưu thành công */}
      {savedData && (
        <pre className="mt-3 bg-light p-3 rounded">
          {JSON.stringify(savedData, null, 2)}
        </pre>
      )}
    </div>
  );
}

export default FormSanPham;
