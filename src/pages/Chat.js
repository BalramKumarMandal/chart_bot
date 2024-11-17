import React, { useState } from 'react';
import { Box, Button, TextField, Typography, IconButton } from '@mui/material';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';

const mockResponses = require('../data/responses.json');

const Chat = ({ toggleDarkMode }) => {
  const [chat, setChat] = useState([]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    const userMessage = { type: 'user', text: input };
    const aiResponse =
      mockResponses.find(
        (res) => res.question.toLowerCase() === input.toLowerCase(),
      )?.response || "Sorry, I don't know the answer to that.";
    const aiMessage = { type: 'ai', text: aiResponse };

    setChat([...chat, userMessage, aiMessage]);
    setInput('');
  };

  return (
    <Box sx={{ padding: '16px' }}>
      <Button onClick={toggleDarkMode} variant="contained">
        Toggle Theme
      </Button>
      <Box sx={{ marginY: 2 }}>
        {chat.map((message, index) => (
          <Box key={index} sx={{ marginY: 1 }}>
            <Typography
              variant="body1"
              sx={{ fontWeight: message.type === 'user' ? 'bold' : 'normal' }}
            >
              {message.text}
            </Typography>
            {message.type === 'ai' && (
              <Box>
                <IconButton>
                  <ThumbUpIcon />
                </IconButton>
                <IconButton>
                  <ThumbDownIcon />
                </IconButton>
              </Box>
            )}
          </Box>
        ))}
      </Box>
      <Box sx={{ display: 'flex', gap: 1 }}>
        <TextField
          fullWidth
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your question here..."
        />
        <Button onClick={handleSend} variant="contained">
          Send
        </Button>
      </Box>
    </Box>
  );
};

export default Chat;
