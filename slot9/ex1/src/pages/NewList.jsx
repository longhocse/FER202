import React from 'react';
import { newList } from '../data/newList';   // ✅ đúng tên
import NewCard from '../components/NewCard';
import { Container, Row, Col } from 'react-bootstrap';

function NewList() {
  return (
    <Container>
      <h2 className="my-4">Latest News</h2>
      <Row>
        {newList.map((newItem) => (            // ✅ dùng newList
          <Col key={newItem.id} sm={12} md={6} lg={4}>
            <NewCard newItem={newItem} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default NewList;
