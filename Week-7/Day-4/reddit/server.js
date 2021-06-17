'use strict'

const mysql = require('mysql');
const express = require('express');
const app = express()
app.use(express.json())
app.use(express.static('static'))

const conn = mysql.createConnection({
    host:'localhost',
    user: 'root',
    password: 'password',
    database: 'reddit',
    insecureAuth: true,

});

conn.connect((err) => {
    if(err) {
        console.log('Cannot connect to database')
        return
    }
    else{
        console.log('Connected to the database.')
    }
});

app.get('/',(req,res) => {
    res.sendFile(__dirname + '/static/main.html')
})

app.get('/newPost',(req,res) => {
    res.sendFile(__dirname + '/Static/submit.html')
})

app.get('/modify', (req,res) => {
    res.sendFile(__dirname+ '/static/modify.html')
})

app.get('/posts',(req,res) => {
    conn.query('SELECT * FROM posts;',(err,rows) =>{
        if(err) {
            console.log(err)
            res.status(500).send('SQL error')
            return
        }
        console.log(rows)
        res.json(rows)
    })
});

app.post('/posts',(req,res) => {
    conn.query("INSERT INTO posts (title,url) VALUES (?,?)",[req.body.title,req.body.url,],(err,result) => {
        if(err){
            res.status(500).json(err);
            return
        }
        res.status(200).send('Posted successfully')
    })
});

app.put('/posts/:id/upvote',(req,res) => {
    let score = null
    conn.query(`SELECT score FROM posts WHERE id = ?`,[req.params.id],(err,result) => {
        if(err){
            res.status(500).json(err);
            return
        }
        score=result[0].score+1

        conn.query(`UPDATE posts SET score = ? WHERE id = ?`,[score,req.params.id],(err,result) => {
            if(err){
                res.status(500).json(err);
                return
            }
            res.status(200).send('Upvote updated')
        })

    })
    });

app.put('/posts/:id/downvote',(req,res) => {
    let score = null
    conn.query(`SELECT score FROM posts WHERE id = ?`,[req.params.id],(err,result) => {
        if(err){
            res.status(500).json(err);
            return
        }
        score=result[0].score-1
    
        conn.query(`UPDATE posts SET score = ? WHERE id = ?`,[score,req.params.id],(err,result) => {
            if(err){
                res.status(500).json(err);
                return
            }
            res.status(200).send('Downvote updated')
        })
    })
    });

        app.delete('/posts/:id/', (req,res) => {
            conn.query(`DELETE FROM posts WHERE id = ?`,[req.params.id], (err,result) => {
                if(err){
                    res.status(500).json(err);
                    return
                }
                res.status(200).send('Post deleted')
            })
        });

        app.put('/posts/:id', (req,res) => {
            conn.query(`SELECT title FROM posts WHERE id = ?`,[req.params.id], (err,result) => {
                if(err){
                    res.status(500).json(err);
                    return
                }
            conn.query(`UPDATE posts SET title = ?, url = ? WHERE id = ?`,[req.body.title,req.body.url,req.params.id], (err,result) => {
                if(err){
                    res.status(500).json(err);
                    return
                }
                res.status(200).send("Post's title updated")
            })
        })
        })
app.listen(3000, () => console.log('Server is running'))