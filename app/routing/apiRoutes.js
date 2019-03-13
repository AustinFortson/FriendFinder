// Dependency
// =============================================================
var friends = require("../data/friends");

//Routing
// =============================================================
module.exports = function (app) {
    //All Friend Entries
    app.get('/api/friends', function (req,res) {
        res.json(friends);
    });

    //Adding New User
    app.post('/api/friends', function (req,res) {
        //Gets the User Input
        var userInput   = req.body;
        //Gets the scores from user input
        var userAnswers = userInput.scores;
        //Best Friend match 
        var matchName       = "";
        var matchImg        = "";
        var totalDifference = 50;
        //Loop for looking through all users 
        for (var i = 0; i < friends.length; i++) {
            //Variable for each question difference
            var diff = 0;
            //Loop for looking through all User Answers
            for (var j = 0; j < userAnswers.length; j++) {
                diff += Math.abs(friends[i].scores[j] - userAnswers)
            }
            // If lowest difference, record the best friend match
			if (diff < totalDifference) {
				totalDifference = diff;
				matchName = friends[i].name;
				matchImg = friends[i].photo;
			}
        }
        //Add new user to friends
        friends.push(userInput);
        // Send appropriate response
	    res.json({status: 'OK', matchName: matchName, matchImg: matchImg});
    });
};