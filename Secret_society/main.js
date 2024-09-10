const express = require('express');
const path = require('path');
const fs = require('fs');


const app = express();
app.use(express.static(path.join(__dirname, 'public')));
app.get('*', (req, res) => {
    let filePath;

    switch (req.url) {
        case '/':
            filePath = path.join(__dirname, 'public', 'index.html');
            break;
        case '/puzzle1':
            filePath = path.join(__dirname, 'public', 'puzzle1.html');
            break;
        case '/hiddentreasure':
            filePath = path.join(__dirname, 'public', 'puzzle2.html');
            break;
        case '/baseball':
            filePath = path.join(__dirname, 'public', 'puzzle3.html');
            break;
        case '/catch-22':
            filePath = path.join(__dirname, 'public', 'puzzle4.html');
            break;
        case '/keyboard':
            filePath = path.join(__dirname, 'public', 'puzzle5.html');
            break;
        case '/footsteps':
            filePath = path.join(__dirname, 'public', 'puzzle6.html');
            break;
        case '/answers':
            filePath = path.join(__dirname, 'public', 'answers.html');
            break;
        case '/hints':
            filePath = path.join(__dirname, 'public', 'hints.html');
            break;
        case '/clouds':
            filePath = path.join(__dirname, 'public', 'secret.html');
            break;
        default:
            filePath = path.join(__dirname, 'public', '404.html');
            break;
    }

    fs.readFile(filePath, (err, content) => {
        if (err) {
            res.status(500).send('Error loading the page.');
        } else {
            res.status(200).send(content);
        }
    });
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});