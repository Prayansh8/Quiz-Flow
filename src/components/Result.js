// src/components/Result.jsx

import React, { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { GamificationContext } from '../context/GamificationContext';
import { Container, Row, Col, Button, Card, Badge } from 'react-bootstrap';

const Result = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { score, total } = location.state || { score: 0, total: 0 };
  const { points, badges } = useContext(GamificationContext);

  const retakeQuiz = () => {
    navigate('/quiz/60'); // Restart the quiz
  };

  const returnHome = () => {
    navigate('/');
  };

  const percentage = ((score / (total * 4)) * 100).toFixed(2);

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={8}>
          <Card className="text-center shadow mt-5 p-2">
            <Card.Body>
              <Card.Title className="display-4">Quiz Completed!</Card.Title>
              <Card.Text className="fs-5 mt-4">
                Your Score: <strong>{score}</strong> / {total * 4}
              </Card.Text>
              <Card.Text className="fs-5">
                Percentage: <strong>{percentage}%</strong>
              </Card.Text>
              <Card.Text className="fs-5">
                Total Points: <strong>{points}</strong>
              </Card.Text>
              <h3 className="mt-4">Your Badges</h3>
              {badges.length > 0 ? (
                <div className="d-flex flex-wrap justify-content-center mt-3">
                  {badges.map((badge, index) => (
                    <Badge key={index} bg="warning" text="dark" className="m-1 fs-6">
                      {badge}
                    </Badge>
                  ))}
                </div>
              ) : (
                <p className="mt-3">You haven't earned any badges yet.</p>
              )}
              <div className="d-flex justify-content-center mt-4">
                <Button variant="success" className="me-3" onClick={retakeQuiz}>
                  Retake Quiz
                </Button>
                <Button variant="primary" onClick={returnHome}>
                  Home
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Result;