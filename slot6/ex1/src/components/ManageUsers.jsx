import { useMemo, useState } from "react";
import { Button, Card, Form, Modal, Table, Badge, Image, Stack } from "react-bootstrap";
import ListOfUsers from "../data/ListOfUsers";
import { useNavigate } from "react-router-dom";

export default function ManageUsers() {
    const navigate = useNavigate();

  const [users, setUsers] = useState(ListOfUsers);

  // Modal edit
  const [show, setShow] = useState(false);
  const [editing, setEditing] = useState(null);

  const openEdit = (u) => {
    setEditing({ ...u }); // copy để sửa
    setShow(true);
  };

  const closeEdit = () => {
    setShow(false);
    setEditing(null);
  };

  const saveEdit = () => {
    setUsers((prev) =>
      prev.map((u) => (u.id === editing.id ? { ...editing } : u))
    );
    closeEdit();
  };

  const toggleLock = (id) => {
    setUsers((prev) =>
      prev.map((u) =>
        u.id === id
          ? {
              ...u,
              locked: !u.locked,
              status: !u.locked ? "Locked" : "Active",
            }
          : u
      )
    );
  };

  const statusBadge = useMemo(
    () => (status) => {
      if (status === "Active") return <Badge bg="success">Active</Badge>;
      if (status === "Inactive") return <Badge bg="secondary">Inactive</Badge>;
      return <Badge bg="danger">Locked</Badge>;
    },
    []
  );

  return (
    <Card className="shadow-sm">
      <Card.Body>
        <Card.Title className="d-flex justify-content-between align-items-center">
  <span>Manage Users</span>
  <Button
    variant="secondary"
    size="sm"
    onClick={() => navigate("/login")}
  >
    Back to Login
  </Button>
</Card.Title>

        <Card.Title className="mb-3">Manage Users</Card.Title>

        <Table bordered hover responsive className="align-middle">
          <thead>
            <tr>
              <th style={{ width: 70 }}>ID</th>
              <th style={{ width: 90 }}>Avatar</th>
              <th>UserName</th>
              <th style={{ width: 120 }}>Status</th>
              <th style={{ width: 160 }}>Password</th>
              <th style={{ width: 180 }}>Action</th>
            </tr>
          </thead>

          <tbody>
            {users.map((u) => (
              <tr key={u.id}>
                <td>{u.id}</td>
                <td>
                  <Image src={u.avatar} roundedCircle width={48} height={48} alt="avatar" />
                </td>
                <td className="fw-semibold">{u.username}</td>
                <td>{statusBadge(u.status)}</td>
                <td>
                  <code>{u.password}</code>
                </td>
                <td>
                  <Stack direction="horizontal" gap={2}>
                    <Button
                      size="sm"
                      variant="warning"
                      onClick={() => openEdit(u)}
                      disabled={u.locked}
                    >
                      Edit
                    </Button>

                    <Button
                      size="sm"
                      variant={u.locked ? "success" : "danger"}
                      onClick={() => toggleLock(u.id)}
                    >
                      {u.locked ? "Unlock" : "Lock"}
                    </Button>
                  </Stack>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>

        {/* Edit Modal */}
        <Modal show={show} onHide={closeEdit} centered>
          <Modal.Header closeButton>
            <Modal.Title>Edit User</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            {editing && (
              <>
                <Form.Group className="mb-3">
                  <Form.Label>UserName</Form.Label>
                  <Form.Control
                    value={editing.username}
                    onChange={(e) =>
                      setEditing((p) => ({ ...p, username: e.target.value }))
                    }
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    value={editing.password}
                    onChange={(e) =>
                      setEditing((p) => ({ ...p, password: e.target.value }))
                    }
                  />
                </Form.Group>

                <Form.Group className="mb-1">
                  <Form.Label>Status</Form.Label>
                  <Form.Select
                    value={editing.status}
                    onChange={(e) =>
                      setEditing((p) => ({ ...p, status: e.target.value }))
                    }
                    disabled={editing.locked}
                  >
                    <option value="Active">Active</option>
                    <option value="Inactive">Inactive</option>
                    <option value="Locked">Locked</option>
                  </Form.Select>
                </Form.Group>

                {editing.locked && (
                  <div className="text-danger small mt-2">
                    User đang bị khóa nên không chỉnh sửa status.
                  </div>
                )}
              </>
            )}
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={closeEdit}>
              Cancel
            </Button>
            <Button variant="primary" onClick={saveEdit} disabled={!editing}>
              Save
            </Button>
          </Modal.Footer>
        </Modal>
      </Card.Body>
    </Card>
  );
}
