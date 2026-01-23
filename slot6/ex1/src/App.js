import { Container } from "react-bootstrap";
import { Routes, Route, Navigate } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import ManageUsers from "./components/ManageUsers";

export default function App() {
  return (
    <Container className="py-4" style={{ maxWidth: 900 }}>
      <Routes>
        {/* Trang login */}
        <Route path="/login" element={<LoginForm />} />

        {/* Trang manage users */}
        <Route path="/users" element={<ManageUsers />} />

        {/* Mặc định chuyển về login */}
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Container>
  );
}
