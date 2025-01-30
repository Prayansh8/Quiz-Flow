import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';

const NotFound = () => (
  <Container className="mt-5">
    <Row className="justify-content-center">
      <Col md={8}>
        <Card className="text-center shadow">
          <Card.Body>
            <h1 className="display-1 text-danger">404</h1>
            <h2 className="my-4">Page Not Found</h2>
            <Link to="/">
              <Button variant="primary">Go to Home</Button>
            </Link>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </Container>
);

export default NotFound;