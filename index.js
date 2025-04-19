// File: server.js
const express = require('express');
const { exec } = require('child_process');

const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Server is running!');
});


app.post('/open-cmd', (req, res) => {
    // Perintah untuk membuka Command Prompt di Windows
    exec('start cmd', (error, stdout, stderr) => {
      if (error) {
        return res.status(500).json({ error: error.message });
      }
      if (stderr) {
        return res.status(400).json({ stderr });
      }
      res.json({ output: stdout });
    });
  });

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
