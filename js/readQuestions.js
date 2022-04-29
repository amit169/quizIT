$.getJSON('../data/questions.json', function (json) {
    var array = [];
    for (var key in json) {
        if (json.hasOwnProperty(key)) {
            var item = json[key];
            array.push({
                question: item.question,
                choice1: item.choice1,
                choice2: item.choice2,
                choice3: item.choice3,
                choice4: item.choice4,
                correct: item.correct
            });
        }
    }
});