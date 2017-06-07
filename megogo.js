var google = require('googleapis');
var books = google.books('v1');

var express = require('express');
var app = express();


app.get('*',(req,res)=>{

  books.volumes.list({q: 'Mein Kampf'}, (err,respond)=>{
  if (err) console.log(err);
   console.log('====================================');
   console.log(typeof res);
   console.log('====================================');
   res.json(respond);
 })

})


app.listen(3000);