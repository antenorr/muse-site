const express = require('express');
const path = require('path');
//const generatePassword = require('password-generator');

const app = express();

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

app.get('/api', (req, res) => {
    res.json([
        {answer: "one"},
        {answer: "Two"},
        {answer: "three"}
    ])
})


app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log(`Your application is launched on ${port}`);