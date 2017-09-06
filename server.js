var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));


var articles={
    'article-one': {
        title: 'Article One | Pooja',
        heading: 'ARTICLE ONE',
        date: '6 sept, 2016',
        content:`
          <p>
               'This the content for my first article. I love to write a lot. So do read me and allow me to spread words and love.
           </p>
            <p>
               This the content for my first article. I love to write a lot. So do read me and allow me to spread words and love.
           </p>` 
                },
    'article-two': {
         title: 'Article Two | Pooja',
        heading: 'ARTICLE TWO',
        date: '18 sept, 2016',
        content:`
          <p>
           This the content for my second article. I love to write a lot. So do read me and allow me to spread words and love. Now in this article i'll tell you something about myself and how i co=ame to this lebel of life leaving behind all frustration and problems.
       </p>
       
        <p>
           Writing back to you is something more important then anything. So do wait for me guys with some interesting stoy down the lane.....
       </p>` 
    },
    'article-three': {
         title: 'Article Three | Pooja',
        heading: 'ARTICLE THREE',
        date: '20 sept, 2016',
        content:`
            <p>
           This the content for my Third article. Here, I'll narrate you a story of a girl and a boy who used to be best friends but somehow circumstances made them a bit apart.
       </p>
       
        <p>
           Writing back to you is something more important then anything. So do wait for me guys with some interesting stoy down the lane.....
       </p>` 
    }
   
};


function createTemplate(data)
{

var title=data.title;
var date=data.date;
var heading=data.heading;
var content=data.content;

var htmlTemplate= `
          <html>

<head>
    <title>
        ${title}
    </title>
    
    <meta name="viewport" content="width=device-width, initial-salce=1">
        <link href="/ui/style.css" rel="stylesheet" />

   
</head>

<body>
    <div class="container">
        <div>
            <a href="/">home</a>
        </div>
        
        <hr/>
        
       <h3>
          ${heading}
       </h3>
       
       <div>
           ${date}
       </div>
       
       <div>
          ${content}
           
       </div>
   </div>
</body>

</html>`

return htmlTemplate;
}


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:articleName',function(req,res)
{
    var articleName=req.params.articleName;
    res.send(createTemplate(articles[articleName]));
  res.sendFile(path.join(__dirname, 'ui', 'article-one.html'));
});


app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
