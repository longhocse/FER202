import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import QuizForm from "../components/QuizForm";
import QuizList from "../components/QuizList";
import { quizData } from "../data/quizData";
console.log("QuizForm =", QuizForm);
console.log("QuizList =", QuizList);

export default function QuizPage() {
  const [questions, setQuestions] = useState(quizData);

  const handleAdd = (newQ) => {
    setQuestions((prev) => [newQ, ...prev]);
  };

  return (
    <Container className="py-4">
      <Row className="g-3">
        <Col lg={5}>
          <QuizForm onAdd={handleAdd} />
        </Col>
        <Col lg={7}>
          <QuizList questions={questions} />
        </Col>
      </Row>
    </Container>
  );
}
