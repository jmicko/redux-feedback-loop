const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 5000;
const pool = require('./modules/pool');

/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.json()); // needed for angular requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('build'));

/** ---------- EXPRESS ROUTES ---------- **/

app.post('/feedback', (req, res) => {
    console.log('In POST route', req.body);
    let newFeedback = req.body; // storing object from client into newFeedback
    console.log(`Adding feedback`, newFeedback); // console logging newFeedback onto server console
    let queryText = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
                    VALUES ($1, $2, $3, $4);`;  // query is a request for data
    pool.query(queryText, [newFeedback.feeling, newFeedback.understanding, newFeedback.support, newFeedback.comments]) // communicating to database, a command to insert new value
        .then(result => { // once database receives data correctly, we receive the updated status
            res.sendStatus(201);
        }).catch(error => {
            console.log(`Error adding new feedback`, error);
            res.sendStatus(500);
        });
})

/** ---------- START SERVER ---------- **/
app.listen(PORT, () => {
    console.log('Listening on port: ', PORT);
});