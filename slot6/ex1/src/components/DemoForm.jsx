import { useState } from "react";

export default function DemoForm() {
  const [fullName, setFullName] = useState("");
  const [address, setAddress] = useState("");
  const [from, setFrom] = useState("Hà Nội");
  const [to, setTo] = useState("Hà Nội");
  const [go, setGo] = useState(false);
  const [back, setBack] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (fullName.length < 5 || address.length < 5) {
      setError("Họ tên và địa chỉ phải có ít nhất 5 ký tự");
      return;
    }

    if (from === to) {
      setError("Đi từ và Đến không được trùng nhau");
      return;
    }

    if (!go && !back) {
      setError("Phải chọn ít nhất 1 chiều (Đi hoặc Về)");
      return;
    }

    setError("");
    alert(`Đặt vé thành công!\nHọ tên: ${fullName}`);
  };

  return (
    <div className="container d-flex justify-content-center mt-5">
      <div className="col-md-6">
        <div className="card shadow">
          <div className="card-body">
            <h3 className="mb-4 text-center">
              Form đặt vé máy bay
            </h3>

            {error && (
              <div className="alert alert-danger">{error}</div>
            )}

            <form onSubmit={handleSubmit}>
              {/* Họ tên */}
              <div className="mb-3">
                <label className="form-label">Họ tên</label>
                <input
                  className="form-control"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                />
                <small className="text-muted">
                  Phải nhập ít nhất 5 ký tự
                </small>
              </div>

              {/* Địa chỉ */}
              <div className="mb-3">
                <label className="form-label">Địa chỉ</label>
                <input
                  className="form-control"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
                <small className="text-muted">
                  Phải nhập ít nhất 5 ký tự
                </small>
              </div>

              {/* Đi từ - Đến */}
              <div className="row mb-3">
                <div className="col">
                  <label className="form-label">Đi từ</label>
                  <select
                    className="form-select"
                    value={from}
                    onChange={(e) => setFrom(e.target.value)}
                  >
                    <option>Hà Nội</option>
                    <option>Đà Nẵng</option>
                    <option>TP.HCM</option>
                  </select>
                </div>

                <div className="col">
                  <label className="form-label">Đến</label>
                  <select
                    className="form-select"
                    value={to}
                    onChange={(e) => setTo(e.target.value)}
                  >
                    <option>Hà Nội</option>
                    <option>Đà Nẵng</option>
                    <option>TP.HCM</option>
                  </select>
                </div>
              </div>

              {/* Checkbox */}
              <div className="mb-3">
                <label className="form-label">
                  Chọn chiều đi (Khứ hồi)
                </label>

                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    checked={go}
                    onChange={(e) => setGo(e.target.checked)}
                  />
                  <label className="form-check-label">Đi</label>
                </div>

                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    checked={back}
                    onChange={(e) => setBack(e.target.checked)}
                  />
                  <label className="form-check-label">Về</label>
                </div>
              </div>

              <button className="btn btn-primary w-100">
                Đặt vé
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
