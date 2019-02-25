const cors = require('cors');
const express    = require('express')
const serveIndex = require('serve-index');
const bodyParser = require('body-parser')
const fs = require('fs');
var app = express();

app.use(cors());
app.options('*', cors());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'DELETE, PUT, GET, POST');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


app.use('/content/blog', express.static('content/blog'))
app.use('/content/blog', serveIndex('content/blog'))


var urlencodedParser = bodyParser.urlencoded({extended: false});
app.post('/receive', urlencodedParser, function(req,res)  {
  
  console.log('you posted to /receive'); //appears in console as expected
  console.log(req.body); // {} -- always empty? cant figre out why
  console.log(typeof req.body); //"object"
  console.log(req.method); // "POST"


  let body = '';

  filePath = '/Users/rodmacleod/Design/gatsby/gatsby-blog-rod/content/blog/introduction.md';

  body = req.body.md;

  console.log(filePath); // "POST"

  fs.writeFile(filePath, body, (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
  });



});



app.listen(8080, () => ( 
console.log('Gator app listening on port 8080!'),
console.log(__dirname)
));
