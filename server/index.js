var express = require('express');
var bodyParser = require('body-parser');
let axios = require('axios');

var items = require('../database-mysql');

var app = express();

app.use(express.static(__dirname + '/../react-client/dist'));

app.get('/items', function (req, res) {
  items.selectAll(function(err, data) {
    if(err) {
      res.sendStatus(500);
    } else {
      res.json(data);
    }
  });
});

app.listen(3000, function() {
  console.log('listening on port 3000!');
});


function requestChallenge(){
  axios.get('https://letsrevolutionizetesting.com/challenge.json').then(response => {
    let newUrl = response.data.follow.replace('challenge?', 'challenge.json?')
    axios.get(newUrl).then(response => {
        console.log(response.data)
      }
    )
    
  })

}

requestChallenge();
// const request = require('request');

// const INIT_URL = 'http://letsrevolutionizetesting.com/challenge.json';

// function requestChallenge(url) {
//   return new Promise((resolve, reject) => {
//     request.get(url, { json: true }, (error, response, body) => {
//       if (error) {
//         reject(error);
//       } else {
//         resolve(body);
//       }
//     });
//   });
// }

// function followChallenge(url = INIT_URL) {
//   return requestChallenge(url)
//   .then((challenge) => {
//     if (Object.prototype.hasOwnProperty.call(challenge, 'follow')) {
//       return followChallenge(challenge.follow.replace('challenge?', 'challenge.json?'));
//     }

//     return challenge;
//   });
// }

// followChallenge()
// .then((result) => {
//   console.log('final result is', result);
//   process.exit(0);
// })
// .catch((err) => {
//   console.error('oops an error', err);
//   process.exit(0);
// });
