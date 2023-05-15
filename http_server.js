const express = require('express');
const app   = express();

var low     = require('lowdb');
var fs      = require('lowdb/adapters/FileSync');
var adapter = new fs('db.json');
var db      = low(adapter);

app.use(express.static('public'));

// init the data store
db.defaults({ posts: []}).write();

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// list posts
app.get('/data', function(req, res){     

    res.send(db.get('posts').value());

});

// post route
app.post('/test', function(req, res){
    console.log(req.body.username, req.body.password);
});

// add user
app.post('/add', function(req, res){
    var user = {
        'name'              :req.body.name,
        'dob'               :req.body.dob,
        'email'             :req.body.email,
        'username'          :req.body.username,
        'password'          :req.body.password,
        'phone'             :req.body.phone,
        'streetaddress'     :req.body.streetaddress,
        'citystatezip'      :req.body.citystatezip ,
        'latitude'          :req.body.latitude,
        'longitude'         :req.body.longitude,
        'avatar'            :req.body.avatar
    }
    db.get('users').push(user).write();
    console.log(db.get('users').value());
    res.send(db.get('users').value());
});

// ----------------------------------------------------
// add post - test using:
//      curl http://localhost:3000/posts/ping/1/false
// ----------------------------------------------------
app.get('/posts/:title/:id/:published', function(req, res){

    const post = {
        'id' : req.params.id,
        'title' : req.params.title,
        'published': req.params.published,
    }
    db.get('posts').push(post).write();
    console.log(db.get('posts').value());
    res.send(db.get('posts').value())

});

// ----------------------------------------------------
// filter by published state - test using:
//      curl http://localhost:3000/published/true
// ----------------------------------------------------
app.get('/published/:boolean', function(req, res){

    let published = db.get("posts").filter({ published: true }).value;
    console.log("published", published);

});

// ----------------------------------------------------
// update published value - test using:
//      curl http://localhost:3000/published/1/true
// ----------------------------------------------------
app.get('/published/:id/:boolean', function(req, res){

    // YOUR CODE

});

// ----------------------------------------------------
// delete entry by id - test using:
//      curl http://localhost:3000/delete/5
// ----------------------------------------------------
app.get('/delete/:id/', function(req, res){

    db.get(posts).id.delete().write();

});

app.listen(3000, function(){
    console.log('running on port 3000')
})

