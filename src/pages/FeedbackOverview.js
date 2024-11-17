import React from 'react';
import {
  Box,
  Typography,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from '@mui/material';

const mockFeedback = [
  {
    id: 1,
    question: 'What is React?',
    feedback: 'Thumbs Up',
    rating: 5,
    comment: 'Very informative!',
  },
  {
    id: 2,
    question: 'What is AI?',
    feedback: 'Thumbs Down',
    rating: 3,
    comment: 'Could be better.',
  },
];

const FeedbackOverview = () => {
  return (
    <Box sx={{ padding: '16px' }}>
      <Typography variant="h4" gutterBottom>
        Feedback Overview
      </Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Question</TableCell>
            <TableCell>Feedback</TableCell>
            <TableCell>Rating</TableCell>
            <TableCell>Comments</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {mockFeedback.map((feedback) => (
            <TableRow key={feedback.id}>
              <TableCell>{feedback.question}</TableCell>
              <TableCell>{feedback.feedback}</TableCell>
              <TableCell>{feedback.rating}</TableCell>
              <TableCell>{feedback.comment}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Box>
  );
};

export default FeedbackOverview;
