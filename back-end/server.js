var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors')

var app = express();

var questions_answers = require('./data/questions_answers.json');
var caracters = require('./data/caracters.json');

app.use(bodyParser.json());
app.use(cors());

app.listen(4000, function () {
  console.log('Serveur running on port 4000!');
});

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

app.post('/get-question-answers', function (req, res) {
    if (req.body.question_number == undefined) {
      res.status(400).json({ success: false, message: 'Question number is undefined' });
    } else if (req.body.question_number < 1 || req.body.question_number > questions_answers.questions.length) {
      res.status(400).json({ success: false, message: 'Question number is too high' });
    } else {
      res.status(200).json({
        question: questions_answers.questions[req.body.question_number - 1].question,
        answers: questions_answers.questions[req.body.question_number - 1].answers
      });
    }
  });

app.post('/get-result', function (req, res) {
    res.status(200).json({
        caracter: [
            caracters.caracters[getRandomInt(caracters.caracters.length)]
        ]
    });
});

app.post('/answer-question', function (req, res) {
    console.log(req.body)
    if (req.body.question_number == undefined) {
        res.status(400).json({success: false, message: 'Question number is undefined'});
    } else if (req.body.answer_number == undefined) {
        res.status(400).json({success: false, message: 'Answer number is undefined'});
    } else if (req.body.question_number < 1 || req.body.question_number > questions_answers.questions.length) {
        res.status(400).json({success: false, message: 'Question number is too high'});
    } else if (req.body.answer_number < 1 || req.body.answer_number > 3) {
        res.status(400).json({success: false, message: 'Answer number is too high'});
    } else {
        res.status(200).json({success: true, message: 'Answer collected'});
    }
});

app.post('/', function (req, res) {
    res.status(200).json({success: true, message: 'Server is running'});
});
