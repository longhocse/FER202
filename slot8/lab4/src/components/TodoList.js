import { useReducer } from "react";
import { Button, Card, Col, Container, Form, ListGroup, Row } from "react-bootstrap";

// 1️⃣ State ban đầu
const initialState = {
  task: "",
  todos: [],
};

// 2️⃣ Reducer xử lý action
function todoReducer(state, action) {
  switch (action.type) {
    case "SET_TASK":
      return { ...state, task: action.payload };

    case "ADD_TODO":
      if (state.task.trim() === "") return state;

      const newTodo = {
        id: Date.now(),
        title: state.task.trim(),
      };

      return {
        ...state,
        todos: [newTodo, ...state.todos],
        task: "",
      };

    case "DELETE_TODO":
      return {
        ...state,
        todos: state.todos.filter((t) => t.id !== action.payload),
      };

    default:
      throw new Error("Unknown action type");
  }
}

function TodoList() {
  // 3️⃣ Dùng reducer
  const [state, dispatch] = useReducer(todoReducer, initialState);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "ADD_TODO" });
  };

  return (
    <div
      style={{
        background: "#2f343c",
        minHeight: "360px",
      }}
    >
      <Container>
        <Row className="align-items-start">
          <Col md={7} className="mb-4">
            <Form onSubmit={handleSubmit} className="d-flex gap-3">
              <Form.Control
                placeholder="Please input a Task"
                value={state.task}
                onChange={(e) =>
                  dispatch({ type: "SET_TASK", payload: e.target.value })
                }
                style={{ maxWidth: 420 }}
              />
              <Button variant="danger" type="submit">
                Add Todo
              </Button>
            </Form>
          </Col>

          <Col md={5}>
            <Card style={{ maxWidth: 360 }} className="ms-md-auto">
              <Card.Header className="text-center fw-bold">Todo List</Card.Header>

              <ListGroup variant="flush">
                {state.todos.length === 0 ? (
                  <ListGroup.Item className="text-muted">
                    Chưa có công việc nào.
                  </ListGroup.Item>
                ) : (
                  state.todos.map((t) => (
                    <ListGroup.Item
                      key={t.id}
                      className="d-flex justify-content-between align-items-center"
                    >
                      <span>{t.title}</span>
                      <Button
                        variant="danger"
                        size="sm"
                        onClick={() =>
                          dispatch({ type: "DELETE_TODO", payload: t.id })
                        }
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
