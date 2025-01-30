import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';

const StartScreen = () => {
  const navigate = useNavigate();

  const startQuiz = () => {
    navigate('/quiz/60'); // Navigate to the quiz route
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={8} className='mt-5'>
          <Card className="text-center shadow mt-5 p-3">
            <Card.Body>
              <Card.Title className="display-4 fw-bold">Genetics Quiz</Card.Title>
              <Card.Text className="lead my-4">
                Test your knowledge on Genetics and Evolution.
              </Card.Text>
              <Button variant="primary" size="lg" onClick={startQuiz}>
                Start Quiz
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default StartScreen;