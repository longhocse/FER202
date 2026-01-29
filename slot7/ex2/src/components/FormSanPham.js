
import { useState } from "react";
import { Button, Form } from "react-bootstrap";

function FormSanPham() {

  const [form, setForm] = useState({
    name: "",
    price: "",
    category: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Lưu sản phẩm thành công!");
  };

  return (
    <div>
      <h3>Exercise 3 - Form sản phẩm</h3>

      <Form onSubmit={handleSubmit} style={{ maxWidth: 520 }}>
        <Form.Group className="mb-3">
          <Form.Label>Tên sản phẩm</Form.Label>
          <Form.Control
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Nhập tên sản phẩm..."
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Giá</Form.Label>
          <Form.Control
            name="price"
            type="number"
            value={form.price}
            onChange={handleChange}
            placeholder="Nhập giá..."
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Danh mục</Form.Label>
          <Form.Select
            name="category"
            value={form.category}
            onChange={handleChange}
          >
            <option value="">-- Chọn danh mục --</option>
            <option value="food">Food</option>
            <option value="drink">Drink</option>
            <option value="other">Other</option>
          </Form.Select>
        </Form.Group>

        <Button type="submit" variant="primary">
          Lưu
        </Button>
      </Form>

      <pre className="mt-3 bg-light p-3 rounded">
        {JSON.stringify(form, null, 2)}
      </pre>
    </div>
  );
}

export default FormSanPham;
