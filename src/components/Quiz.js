
import React, { useState, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import quizData from '../data/quizData.json';
import { GamificationContext } from '../context/GamificationContext';
import { Container, Row, Col, Button, ProgressBar as BootstrapProgressBar, Card, Alert } from 'react-bootstrap';

const Quiz = () => {
  const { quizId } = useParams();
  const navigate = useNavigate();
  const { addPoints, deductPoints } = useContext(GamificationContext);

  const quiz = quizData; // Assuming there's only one quiz
  const questions = quiz.questions;

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [score, setScore] = useState(0);
  const [answerFeedback, setAnswerFeedback] = useState(null); // For showing correct/incorrect

  const handleOptionSelect = (isCorrect) => {
    if (isCorrect) {
      const pointsEarned = parseFloat(quiz.correct_answer_marks);
      setScore(score + pointsEarned);
      addPoints(pointsEarned);
      setAnswerFeedback({ variant: 'success', message: 'Correct!' });
    } else {
      const pointsLost = parseFloat(quiz.negative_marks);
      setScore(score - pointsLost);
      deductPoints(pointsLost);
      setAnswerFeedback({ variant: 'danger', message: 'Incorrect!' });
    }

    setSelectedOptions([...selectedOptions, isCorrect]);

    // Delay moving to the next question to show feedback
    setTimeout(() => {
      setAnswerFeedback(null);
      if (currentQuestionIndex + 1 < questions.length) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      } else {
        navigate('/result', { state: { score, total: questions.length } });
      }
    }, 1500); // 1.5-second delay
  };

  if (!quiz.is_published) {
    return (
      <Container className="text-center mt-5">
        <Alert variant="danger">Quiz is not available.</Alert>
      </Container>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={8}>
          <Card className="shadow mt-5 p-3">
            <Card.Body>
              <Card.Title>
                Question {currentQuestionIndex + 1} of {questions.length}
              </Card.Title>
              <Card.Text className="mt-3">
                {currentQuestion.description}
              </Card.Text>
              {currentQuestion.options.map((option) => (
                <Button
                  key={option.id}
                  variant="outline-primary"
                  className="w-100 mb-3 text-start"
                  onClick={() => handleOptionSelect(option.is_correct)}
                  disabled={!!answerFeedback}
                >
                  {option.description}
                </Button>
              ))}
              {answerFeedback && (
                <Alert variant={answerFeedback.variant} className="mt-3">
                  {answerFeedback.message}
                </Alert>
              )}
              <BootstrapProgressBar
                now={((currentQuestionIndex + 1) / questions.length) * 100}
                className="mt-4"
              />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Quiz;