
        // Delayed the timing of the prompt by 5 seconds so you could read the page.
        setTimeout( function() {
            let tweet = prompt("Enter your tweet!").length;
            let charactersLeft = 140 - tweet;
            alert("You have written " + tweet + " characters and have " + charactersLeft + " characters left");
            }, 5000);
    