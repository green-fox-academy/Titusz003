const express = require('express');
const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
if(Object.keys(req.query).length===0){
        res.render('home', {
            greetings: `Welcome back, Guest!`
        
})}
  res.render('home', {
      greetings: `Welcome back, ${req.query.name}!`
  })
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});