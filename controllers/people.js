const express = require('express');
const router = express.Router();
const postgres = require('../postgres.js');

router.get('/', (req, res) => {
    postgres.query('SELECT * FROM quiz ORDER BY random() LIMIT 1;', (err, results) => {
        res.json(results.rows)
    });
});

router.post('/', (req, res) => {
    postgres.query(`INSERT INTO quiz (question, answer, answer_char, point_value) VALUES ('${req.body.question}', '${req.body.answer}', '${req.body.answer_char}',${req.body.point_value})`, (err, results) => {
        postgres.query('SELECT * FROM quiz ORDER BY id ASC;', (err, results) => {
            res.json(results.rows)
        });
    })
});

router.delete('/:id', (req, res) => {
    postgres.query(`DELETE FROM quiz WHERE id = ${req.params.id};`, (err, results) => {
        postgres.query('SELECT * FROM quiz ORDER BY id ASC;', (err, results) => {
            res.json(results.rows)
        });
    });
});

router.put('/:id', (req, res) => {
    postgres.query(`UPDATE quiz SET question = '${req.body.question}', answer = '${req.body.answer}', answer_char = '${req.body.answer_char}', point_value = ${req.body.point_value} WHERE id = ${req.params.id}`, (err, results) => {
        postgres.query('SELECT * FROM quiz ORDER BY id ASC;', (err, results) => {
            res.json(results.rows)
        });
    })
});

module.exports = router;
