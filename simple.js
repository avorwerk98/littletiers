var low     = require('lowdb');
var fs      = require('lowdb/adapters/FileSync');
var adapter = new fs('db.json');
var db      = low(adapter);

// init the data store
// ---------------------------
db.defaults({ posts: []}).write();

console.log(db.get('posts').value());

// add post
// ----------------------------

db.get('posts')
    .push({ id: 2, title: 'great', published: true})
    .write()

db.get('posts')
    .push({ id: 3, title: 'new', published: false})
    .write()

db.get('posts')
    .push({ id: 4, title: 'book', published: false})
    .write()


// count posts
// ----------------------------
console.log(db.get('posts').countBy());

// find all posts ids
// ----------------------------


// all matches of published false
// ----------------------------
// YOUR CODE

// find post with published false
// ----------------------------
// YOUR CODE
