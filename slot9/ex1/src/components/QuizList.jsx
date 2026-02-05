import React, { useContext, useEffect, useMemo, useState } from "react";
import { Card, Form, Badge, Button, Alert } from "react-bootstrap";
import { QuizContext } from "../context/QuizContext";

export default function QuizList({ questions }) {
  const { selectedAnswers, selectAnswer, resetAnswers } = useContext(QuizContext);

  const [displayQuestions, setDisplayQuestions] = useState([]);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    setDisplayQuestions(questions || []);
    // đổi bộ câu hỏi thì reset trạng thái nộp
    setSubmitted(false);
  }, [questions]);

  const { answeredCount, score, total } = useMemo(() => {
    const total = displayQuestions.length;
    let answered = 0;
    let score = 0;

    displayQuestions.forEach((q, idx) => {
      const picked = selectedAnswers[idx];
      if (picked) {
        answered += 1;
        if (picked === q.correctAnswer) score += 1;
      }
    });

    return { answeredCount: answered, score, total };
  }, [displayQuestions, selectedAnswers]);

  const doneAll = total > 0 && answeredCount === total;
  const showResult = submitted; // ✅ chỉ khi nộp bài mới show điểm/đáp án

  const handleReset = () => {
    resetAnswers();
    setSubmitted(false);
  };

  const handleSubmit = () => {
    if (!doneAll) return;
    setSubmitted(true);
  };

  return (
    <div className="d-grid gap-3">
      <div className="d-flex justify-content-between align-items-center">
        <h4 className="m-0">Danh sách câu hỏi</h4>
        <Button variant="outline-danger" onClick={handleReset}>
          Reset lựa chọn
        </Button>
      </div>

      {/* ✅ Khu vực kết quả chỉ hiện sau khi nộp */}
      {showResult ? (
        <>
          <Card className="shadow-sm">
            <Card.Body className="d-flex justify-content-between align-items-center">
              <div>
                <div>
                  <b>Điểm:</b> {score} / {total}
                </div>
                <small className="text-muted">Đã làm: {answeredCount} / {total}</small>
              </div>
              <Badge bg="success" style={{ fontSize: 14 }}>
                Đã nộp
              </Badge>
            </Card.Body>
          </Card>

          <Alert variant="success" className="mb-0">
            Bạn đã nộp bài! Điểm của bạn: <b>{score}/{total}</b>
          </Alert>
        </>
      ) : (
        <Card className="shadow-sm">
          <Card.Body className="d-flex justify-content-between align-items-center">
            <div>
              <div><b>Tiến độ:</b> {answeredCount} / {total}</div>
              <small className="text-muted">
                Làm xong hết để hiện nút <b>Nộp bài</b>.
              </small>
            </div>
            {doneAll ? (
              <Badge bg="primary" style={{ fontSize: 14 }}>
                Sẵn sàng nộp
              </Badge>
            ) : (
              <Badge bg="secondary" style={{ fontSize: 14 }}>
                Đang làm
              </Badge>
            )}
          </Card.Body>
        </Card>
      )}

      {/* ✅ Render câu hỏi */}
      {displayQuestions.map((q, idx) => {
        const picked = selectedAnswers[idx];
        const isCorrect = picked && picked === q.correctAnswer;

        return (
          <Card key={idx} className="shadow-sm">
            <Card.Body>
              <div className="d-flex justify-content-between align-items-start gap-2">
                <Card.Title className="mb-2">
                  {idx + 1}. {q.question}
                </Card.Title>

                {/* chỉ hiện đúng/sai khi đã nộp */}
                {showResult ? (
                  picked ? (
                    isCorrect ? (
                      <Badge bg="success">Đúng</Badge>
                    ) : (
                      <Badge bg="danger">Sai</Badge>
                    )
                  ) : (
                    <Badge bg="secondary">Chưa chọn</Badge>
                  )
                ) : (
                  <Badge bg={picked ? "secondary" : "secondary"}>
                    {picked ? "Đã chọn" : "Chưa chọn"}
                  </Badge>
                )}
              </div>

              <Form>
                {q.answers.map((ans, aIdx) => (
                  <Form.Check
                    key={`${idx}-${aIdx}`}
                    type="radio"
                    name={`q-${idx}`}
                    label={ans}
                    checked={picked === ans}
                    onChange={() => {
                      // nếu đã nộp rồi thì không cho đổi nữa
                      if (submitted) return;
                      selectAnswer(idx, ans);
                    }}
                    className="mb-1"
                    disabled={submitted} // ✅ nộp xong khóa lại
                  />
                ))}
              </Form>

              {/* ✅ Chỉ hiện đáp án đúng sau khi nộp và câu đó sai */}
              {showResult && picked && !isCorrect && (
                <div className="mt-2">
                  <small>
                    Đáp án đúng: <b>{q.correctAnswer}</b>
                  </small>
                </div>
              )}

              {/* ✅ Nút nộp bài nằm sau câu hỏi cuối (chỉ hiện khi làm đủ và chưa nộp) */}
              {idx === displayQuestions.length - 1 && doneAll && !submitted && (
                <div className="mt-3 d-flex justify-content-end">
                  <Button onClick={handleSubmit}>Nộp bài</Button>
                </div>
              )}
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
}
