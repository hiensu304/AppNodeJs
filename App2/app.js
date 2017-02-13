//require the mongoClient from mongodb module
var MongoClient = require('mongodb').MongoClient;

//mongodb configs
var connectionUrl = 'mongodb://localhost:27017/connectmongodb', sampleCollection = 'chapters';
// We need to insert these chapters into mongodb
var chapters = [{
    'Title': 'Harry Potter',
    'Author': 'Rowling'
},{
    'Title': 'Cho tôi một vé đi tuổi thơ',
    'Author': 'Nguyễn Nhật Ánh'
}];

MongoClient.connect(connectionUrl, function(err, db){

     console.log("Connected correctly to server");
    // Get some collection
    var collection = db.collection(sampleCollection);
    collection.insert(chapters,function(error, result)
    {
         //here result will contain an array of records inserted
        if(!error) {
            console.log("Success :"+result.ops.length+" chapters inserted!");
        } else {
            console.log("Some error was encountered!");
        }
        db.close();
    });
});
