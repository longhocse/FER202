import React from "react";

export default function Footer() {
  return (
    <footer style={styles.footer}>
      <div style={styles.links}>
        <a href="#" style={styles.link}>Trang chủ</a>
        <a href="#" style={styles.link}>Giới thiệu</a>
        <a href="#" style={styles.link}>Liên hệ</a>
      </div>

      <div style={styles.copy}>
        © 2026 Long Nguyễn. All rights reserved.
      </div>
    </footer>
  );
}

const styles = {
  footer: {
    background: "#222",
    color: "#fff",
    padding: "20px 0",
    textAlign: "center",
    marginTop: "auto"
  },
  links: {
    marginBottom: "8px"
  },
  link: {
    color: "#4fc3f7",
    textDecoration: "none",
    margin: "0 10px"
  },
  copy: {
    fontSize: "14px",
    color: "#ccc"
  }
};
