/**
 * Created by dell 5110 on 27/11/2016.
 */
$(document).ready(function () {
    score = 0;
    stop = 0;
    $("#test").html("Score: " + score + "<br>Average: 0<br>Start whenever you're ready.");
    $("counting").html("test");

    $("#button").mousedown(function () {
        score = score + 1;
        average = score / 5;
        $("#test").html("Score: " + score + "<br>Average: " + average + " cps.<br>You have 5 seconds to click");
        startTimer();
    });

    function startTimer() {
        if (stop === 0) {
            stop = stop + 1;
            var counter = 0;
            var interval = setInterval(function () {
                counter++;
                display = 5 - counter;
                $("#button").html("CLICK! (" + display + " secs)");
                if (counter == 5) {
                    alert("It's been 5 seconds, stop clicking now.");
                    clearInterval(interval);
                    stop = 0;
                    endscore = score;
                    score = 0;
                    $("#results").html("You clicked " + endscore + " times, in 5 seconds.<br>Your average click speed was " + average + " clicks per second.<br>Start clicking again to retry and get a better score!");
                    $("#button").html("CLICK! (5 secs)");
                }
            }, 1000);
        }
    }
});