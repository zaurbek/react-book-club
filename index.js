const express = require('express');
const app = express();
const path = require('path');
const request = require('request');
const queryString = require('query-string');

const config = require('./config.js')

const PORT = process.env.PORT || 8080;

app.use('/',express.static(`${__dirname}/public`))


app.get('/auth/github', (req, res) => {
  if (req.query.error) {
    res.redirect('/');
  }
  const initialCode = req.query.code;


  const headers = {
    'User-Agent': 'Super Agent/0.0.1',
    'Content-Type': 'application/json',
  };

  const options = {
    url: 'https://github.com/login/oauth/access_token',
    method: 'POST',
    headers,
    form: { client_id: config.github.id, client_secret: config.github.secret, code: initialCode },
  };

  request(options, (error, response, body) => {
    if (!error && response.statusCode == 200) {
      const accessToken = queryString.parse(body).access_token;
      const options = {
        maxAge: 1000 * 60 * 60 * 24 * 180, 
      };
      res.cookie('token', accessToken, options);
      res.redirect('/');
    }
  });
});








app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});


app.listen(PORT, () => {
  console.log('====================================');
  console.log(`Server started at: ${PORT}`);
  console.log('====================================');
});



