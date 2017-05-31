module.exports = function ( app ) {
    app.get('/register', function(req, res) {
        res.render('register');
    });
    app.post('/register', function (req, res) {
        insert(usersCollection,req,function(){
            res.send(200);
        });
    });
}