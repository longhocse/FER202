import React, { useState } from "react";
import { Form, Button, Container, Toast, ToastContainer } from "react-bootstrap";
import CommonModal from "./CommonModal";

export default function DangKyForm() {
  const [validated, setValidated] = useState(false);

  // data đăng ký
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
  });

  // modal + toast
  const [showModal, setShowModal] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;

    if (form.checkValidity() === false) {
      event.stopPropagation();
      setValidated(true);
      return;
    }

    // ✅ HỢP LỆ -> đăng ký thành công
    setValidated(true);
    setShowModal(true);
    setShowToast(true);
  };

  return (
    <Container className="py-4">
      <h2 className="mb-3">Đăng Ký</h2>

      {/* ✅ Toast */}
      <ToastContainer position="top-end" className="p-3">
        <Toast
          bg="success"
          show={showToast}
          onClose={() => setShowToast(false)}
          delay={2500}
          autohide
        >
          <Toast.Header closeButton={false}>
            <strong className="me-auto">Thông báo</strong>
          </Toast.Header>
          <Toast.Body className="text-white">Đã đăng ký thành công ✅</Toast.Body>
        </Toast>
      </ToastContainer>

      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Họ tên</Form.Label>
          <Form.Control
            required
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Nhập họ tên"
          />
          <Form.Control.Feedback type="invalid">
            Vui lòng nhập họ tên.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            required
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Nhập email"
          />
          <Form.Control.Feedback type="invalid">
            Email không hợp lệ.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Số điện thoại</Form.Label>
          <Form.Control
            required
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Nhập số điện thoại"
          />
          <Form.Control.Feedback type="invalid">
            Vui lòng nhập số điện thoại.
          </Form.Control.Feedback>
        </Form.Group>

        <Button type="submit" variant="primary">
          Đăng ký
        </Button>
      </Form>

      {/* ✅ Modal hiển thị thông tin đã đăng ký */}
      <CommonModal
        show={showModal}
        onHide={() => setShowModal(false)}
        title="Đăng ký thành công"
        body={
          <div>
            <p><b>Họ tên:</b> {formData.fullName}</p>
            <p><b>Email:</b> {formData.email}</p>
            <p><b>SĐT:</b> {formData.phone}</p>
          </div>
        }
      />
    </Container>
  );
}
