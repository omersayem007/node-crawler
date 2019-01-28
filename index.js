
const express = require('express');
const request = require('request');
const cheerio = require('cheerio');
const app = express();


app.get('/', function(req,res) {
  res.send("hello crawler!");
});

app.get('/crawler', function(req, res) {
  
  request('https://www.prothomalo.com/', (error, response, html) => {
    
  if (!error && response.statusCode == 200) {

   const $ = cheerio.load(html);
    let json ={title:[]};
    let titles = [];
    $('.title_holder > span').each(function (i, e) {
        titles[i] = $(this).text();
    });
    json.title = titles;
    res.send(json);
    //console.log(titles);

  }
    
});

});

app.listen(8080, function() {
  console.log('Your app is listening on port 8080');
});
