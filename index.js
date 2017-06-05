const express = require('express');
const app = express();
const path = require('path');
const request = require('request');
const queryString = require('query-string');
const bodyParser = require('body-parser');


const config = require('./config.js');

const PORT = process.env.PORT || 8080;

const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;


const User = require('./models/user');


app.use('/', express.static(`${__dirname}/public`));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/api/server/new',(req,res)=>{
  const newUserData = {
    id: req.body.id,
    name: req.body.name,
    location: req.body.location
  }

  MongoClient.connect(config.mlab, (err, db) => {
    if (err) {
      console.log(err);
    } else {
      console.log(`connection established with: ${config.mlab}`);

      const users = db.collection('users');

      const MongoAccess = (db, callback) => {
          users.findOneAndUpdate({'id':newUserData.id},{$set: {name: newUserData.name, location: newUserData.location}}).then(singleNode=>{
            console.log('====================================');
            console.log(newUserData);
            console.log('====================================');
            newUserData.avatar_url=singleNode.value.avatar_url;
            if (singleNode) {
              return res.send(newUserData);
            }
          })

      };

      MongoAccess(db, () => {
        db.close();
      });
    }
  });



})

app.post('/api/server/user', (req, res) => {
  const newUser = {
    id: req.body.id,
    name: req.body.name,
    location: req.body.location,
    avatar_url: req.body.avatar_url,
    };



    MongoClient.connect(config.mlab, (err, db) => {
    if (err) {
      console.log(err);
    } else {
      console.log(`connection established with: ${config.mlab}`);

      const users = db.collection('users');

      const MongoAccess = (db, callback) => {
          users.findOne({'id':newUser.id}).then(singleNode=>{
            if (singleNode) {
              return res.send({
                exist: true,
                data: singleNode
              });
            } else {
              users.save(newUser,()=>{
                console.log('====================================');
                console.log('saved user to database');
                console.log('====================================');
              });
              return res.send({
                exist: false,
                data: newUser
              });
            }


          })

      };

      MongoAccess(db, () => {
        db.close();
      });
    }
  });









  
});


app.get('/redirect/github/auth', (req, res) => {
  res.redirect('http://github.com/login/oauth/authorize?client_id=86aff9e326ea4271199d&redirect_uri=http%3A%2F%2F127.0.0.1%3A8080%2Fauth%2Fgithub&scope=user');
});


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

