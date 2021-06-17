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
    database: 'url_aliaser',
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

app.post( '/api/links',(req,res) => {

    conn.query("SELECT alias FROM AliasData WHERE alias = ? ",[req.body.alias], (err,rows) => {
        if(err){
            res.status(500).json(err);
            return
        }

        else if ( rows.length === 0) {
            let secretCode = ""

            for(let i =0; i<4;i++){
                let digit = Math.floor(Math.random()*10).toString()
                secretCode= secretCode + digit
            }
    
            conn.query("INSERT INTO AliasData (url,alias,secretcode) VALUES (?,?,?)",[req.body.url,req.body.alias,secretCode,],(err,result) => {
                if(err){
                    res.status(500).json(err);
                    return
                }
        
                conn.query("SELECT * FROM AliasData WHERE id=?", [result.insertId],(err,newAlias) => {
                    if(err){
                        res.status(500).json(err);
                        return
                    }
                    res.status(200).json(newAlias)
                })
            })
        }

        else {
            res.status(400).json("Alias alredy exist")
        }

    })

})

app.get('/api/links',(req,res) => {
    conn.query("SELECT id,alias,url,hitcount FROM AliasData", (err,rows) => {
        if(err){
            res.status(500).json(err);
            return
        }
        res.status(200).json(rows)
    })
})

app.delete('/api/links/:id', (req,res) => {
    let secretcode = ""
    conn.query("SELECT secretcode FROM AliasData WHERE id = ?", [req.params.id], (err,code) => {
        if(err){
            res.status(500).json(err);
            return
        }
        secretcode = code

        conn.query("DELETE FROM AliasData WHERE id = ?", [req.params.id], (err,result) => {
            if(err){
                res.status(500).json(err);
                return
            }
            res.status(200).json(code)
        })
    })

});

app.get('/a/:alias', (req,res) => {
    conn.query("SELECT * FROM AliasData WHERE alias = ?", [req.params.alias], (err,row) => {
        if(err){
            res.status(500).json(err);
            return
        }
        else if (row.length === 0){
            res.status(404).send('Alias dosent exist')
            return
        }
        else{
            let counter = row[0].hitcount
            counter++
            conn.query('UPDATE AliasData SET hitcount = ? WHERE id = ?', [counter,row[0].id], (err,result) => {
                if(err){
                    res.status(500).json(err);
                    return
                }
                res.status(200).redirect(`${row[0].url}`)
            })

        }
})
})
app.listen(3000, () => console.log('Server is running'))