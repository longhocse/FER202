import React, { useState } from "react";
import { Card, Form, Row, Col, Button } from "react-bootstrap";

export default function QuizForm({ onAdd }) {
  const [question, setQuestion] = useState("");
  const [a1, setA1] = useState("");
  const [a2, setA2] = useState("");
  const [a3, setA3] = useState("");
  const [correct, setCorrect] = useState("");

  const clear = () => {
    setQuestion("");
    setA1("");
    setA2("");
    setA3("");
    setCorrect("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const answers = [a1, a2, a3].map((x) => x.trim()).filter(Boolean);

    if (!question.trim() || answers.length < 2) {
      alert("Nhập câu hỏi và ít nhất 2 đáp án nhé.");
      return;
    }
    if (!correct.trim()) {
      alert("Chọn/nhập đáp án đúng nhé.");
      return;
    }
    if (!answers.includes(correct.trim())) {
      alert("Đáp án đúng phải nằm trong các đáp án đã nhập.");
      return;
    }

    onAdd({
      question: question.trim(),
      answers,
      correctAnswer: correct.trim(),
    });

    clear();
  };

  return (
    <Card className="shadow-sm mb-3">
      <Card.Body>
        <Card.Title>Nhập câu hỏi trắc nghiệm</Card.Title>

        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Câu hỏi</Form.Label>
            <Form.Control
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              placeholder="VD: ReactJS là gì?"
            />
          </Form.Group>

          <Row className="g-2">
            <Col md={4}>
              <Form.Group className="mb-2">
                <Form.Label>Đáp án 1</Form.Label>
                <Form.Control value={a1} onChange={(e) => setA1(e.target.value)} />
              </Form.Group>
            </Col>
            <Col md={4}>
              <Form.Group className="mb-2">
                <Form.Label>Đáp án 2</Form.Label>
                <Form.Control value={a2} onChange={(e) => setA2(e.target.value)} />
              </Form.Group>
            </Col>
            <Col md={4}>
              <Form.Group className="mb-2">
                <Form.Label>Đáp án 3</Form.Label>
                <Form.Control value={a3} onChange={(e) => setA3(e.target.value)} />
              </Form.Group>
            </Col>
          </Row>

          <Form.Group className="mb-3">
            <Form.Label>Đáp án đúng (chọn từ danh sách)</Form.Label>
            <Form.Select value={correct} onChange={(e) => setCorrect(e.target.value)}>
              <option value="">-- chọn đáp án đúng --</option>
              {[a1, a2, a3]
                .map((x) => x.trim())
                .filter(Boolean)
                .map((x) => (
                  <option key={x} value={x}>
                    {x}
                  </option>
                ))}
            </Form.Select>
          </Form.Group>

          <div className="d-flex gap-2">
            <Button type="submit">Thêm câu hỏi</Button>
            <Button variant="secondary" type="button" onClick={clear}>
              Xóa nhập
            </Button>
          </div>
        </Form>
      </Card.Body>
    </Card>
  );
}
