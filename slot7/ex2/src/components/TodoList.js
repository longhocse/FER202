// ============================================
// 4. Trình bày bài Exercise 4
// 4.1. Tạo component TodoList
// ============================================

import { useState } from "react";
import { Button, Card, Col, Container, Form, ListGroup, Row } from "react-bootstrap";

function TodoList() {
  // --------------------------------------------
  // Bước 1: Khai báo useState
  // --------------------------------------------
  // task: lưu nội dung đang nhập
  // todos: danh sách công việc
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  // --------------------------------------------
  // Bước 2: Xử lý sự kiện
  // --------------------------------------------

  // Thêm công việc mới
  const addTodo = () => {
    const trimmed = task.trim();
    if (trimmed === "") return;

    const newTodo = {
      id: Date.now(),     // tạo id đơn giản
      title: trimmed,
    };

    setTodos([newTodo, ...todos]);
    setTask("");
  };

  // Xóa công việc theo id
  const deleteTodo = (id) => {
    setTodos(todos.filter((t) => t.id !== id));
  };

  // Nhấn Enter để thêm
  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo();
  };

  // --------------------------------------------
  // Bước 3: Giao diện component (React-Bootstrap)
  // --------------------------------------------
  return (
    <div
      style={{
        background: "#2f343c",   // nền tối giống ảnh
        padding: "60px 0",
        minHeight: "360px",
      }}
    >
      <Container>
        <Row className="align-items-start">
          {/* Cột trái: Input + Button */}
          <Col md={7} className="mb-4">
            <Form onSubmit={handleSubmit} className="d-flex gap-3">
              <Form.Control
                placeholder="Please input a Task"
                value={task}
                onChange={(e) => setTask(e.target.value)}
                style={{ maxWidth: 420 }}
              />
              <Button variant="danger" type="submit">
                Add Todo
              </Button>
            </Form>
          </Col>

          {/* Cột phải: Todo List */}
          <Col md={5}>
            <Card style={{ maxWidth: 360 }} className="ms-md-auto">
              <Card.Header className="text-center fw-bold">Todo List</Card.Header>

              <ListGroup variant="flush">
                {todos.length === 0 ? (
                  <ListGroup.Item className="text-muted">
                    Chưa có công việc nào.
                  </ListGroup.Item>
                ) : (
                  todos.map((t) => (
                    <ListGroup.Item
                      key={t.id}
                      className="d-flex justify-content-between align-items-center"
                    >
                      <span>{t.title}</span>
                      <Button
                        variant="danger"
                        size="sm"
                        onClick={() => deleteTodo(t.id)}
                      >
                        Delete
                      </Button>
                    </ListGroup.Item>
                  ))
                )}
              </ListGroup>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default TodoList;
