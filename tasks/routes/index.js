var express = require('express');
var router = express.Router();
const { nanoid } = require('nanoid');

let tasks = [
  {
    id: nanoid(),
    title: 'Work',
    text: 'Do it!',
    done: false,
  },
];

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/tasks', (req, res, next) => {
  res.json({
    status: 'success',
    code: 200,
    data: {
      tasks,
    },
  });
});

module.exports = router;
