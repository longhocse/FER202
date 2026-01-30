
import { useState } from "react"; 
import { Button, Form, InputGroup } from "react-bootstrap";

function CapNhatSoLuong() {

  const [soLuong, setSoLuong] = useState(0);

  const giamSoLuong = () => {
    setSoLuong((prev) => Math.max(0, prev - 1));
  };

  const tangSoLuong = () => {
    setSoLuong((prev) => prev + 1);
  };

  const nhapSoLuong = (e) => {
    const value = Number(e.target.value);
    if (!isNaN(value)) {
      setSoLuong(Math.max(0, value));
    }
  };

  return (
    <div>
      <h3>Exercise 1 - Cập nhật số lượng</h3>

      <InputGroup style={{ maxWidth: "260px" }}>
        <Button variant="secondary" onClick={giamSoLuong}>
          -
        </Button>

        <Form.Control
          type="number"
          value={soLuong}
          onChange={nhapSoLuong}
        />

        <Button variant="primary" onClick={tangSoLuong}>
          +
        </Button>
      </InputGroup>
    </div>
  );
}

export default CapNhatSoLuong;
