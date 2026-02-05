import React from 'react';
import { Container, Card } from 'react-bootstrap';
function Home() {
  return (
    <Container className="mt-4">
      <Card className="shadow-sm">
        <Card.Body>
          <Card.Title>1. Thông tin tác giả </Card.Title>
          <Card.Text>
          * <strong>Mã SV:</strong> DE190039 <br/>
          * <strong>Họ tên:</strong> Nguyễn Long <br/>
          * <strong>GitHub:</strong> <a href="https://github.com/longhocse/FER202">Link Github</a>
        </Card.Text>
        <hr />
        <Card.Title>2. Cấu trúc project </Card.Title>
        <p>Long Long Long Long</p>
      </Card.Body>
    </Card>
  </Container>
);
}

export default Home;