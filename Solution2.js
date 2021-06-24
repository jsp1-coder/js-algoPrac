var brown = 8;
var yellow = 1;

var x = 0;
var y = 0;
var answer1 = 0;
var answer2 = 0;



if (yellow > 1) {

    for (var i = 1; i < yellow; i++) {
        if (yellow % i == 0) {
            x = yellow / i;
            y = yellow / x;
            if ((2 * (x + y)) + 4 == brown) {
                answer1 = x + 2;
                answer2 = y + 2;
                break;
            }
        }
    }


    var answer = [answer1, answer2];

} else if (yellow == 1) {

    answer1 = yellow + 2;
    answer2 = yellow + 2;
    var answer = [answer1, answer2];

}