import { useState } from "react";
import { Button, Form, Alert, Stack } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import bg from "../assets/login-bg.jpg";
import "./LoginForm.css";

export default function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (!username.trim() || !password.trim()) {
      setMsg("Vui lòng nhập username và password.");
      return;
    }
    navigate("/users");
  };

  const handleCancel = () => {
    setUsername("");
    setPassword("");
    setMsg("");
  };

  return (
    <div
      className="login-page"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="login-card">
        <h3 className="mb-3 text-center">Login</h3>

        {msg && <Alert variant="danger">{msg}</Alert>}

        <Form onSubmit={handleLogin}>
          <Form.Group className="mb-3">
            <Form.Label>Username</Form.Label>
            <Form.Control
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter username"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
            />
          </Form.Group>

          <Stack direction="horizontal" gap={2}>
            <Button type="submit">Login</Button>
            <Button variant="secondary" onClick={handleCancel}>
              Cancel
            </Button>
          </Stack>
        </Form>
      </div>
    </div>
  );
}
