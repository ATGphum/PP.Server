var mongoclient = require('mongodb').MongoClient

MongoClient.connect('mongodb://localhost:27017/ppdatabase', function(err, db)) {
    if(err) throw err

    db.collection('users').insert({
        
    })
}