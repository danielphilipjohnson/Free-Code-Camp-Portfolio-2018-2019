/**
 * Free Code camp Random Quote Machine.
 * Changes to the API required the App to remove type of quotes
 * @summary A concise summary.
 * @module MODULE
 * @version 2.0.0
 * @author UndreamtMayhem <undreamtmayhem@gmail.com>
 */

var MODULE = MODULE || {};


/**
 * Calls
 * setBackgroundColor()
 * getQuoteType(): (no longer functioning )
 * getQuoteAndSetDom() : get quote from api and update the dom with it
 * displayTimeAndDayToDom()
 * @module MODULE
 * @method initApp
 */

MODULE.initApp = function() {
    MODULE.setBackgroundColor();

    quoteType = MODULE.getQuoteType();

    MODULE.getQuoteAndSetDom(quoteType);

    MODULE.displayTimeAndDayToDom();
    MODULE.setRetweetCount(MODULE.helperMethods.generateRandomNumberUpTo("1200"));
    MODULE.setCommentCount(MODULE.helperMethods.generateRandomNumberUpTo("1500"));
    MODULE.setLikesCount(MODULE.helperMethods.generateRandomNumberUpTo("1500"));

};

// Add array of colors to this property

MODULE.colours = [
    "#6BCC65",
    "#6B65CC",
    "#CC6B65",
    "#CC656B",
    "#656BCC",
    "#65CC6B",
    "#aa0000",
    "#16a085",
    "#27ae60",
    "#2c3e50",
    "#f39c12",
    "#e74c3c",
    "#9b59b6",
    "#FB6964",
    "#342224",
    "#472E32",
    "#BDBB99",
    "#77B1A9",
    "#73A857"
];

/**
 * Generates a hex color value
 * from the MODULE.colours array
 * @module MODULE
 * @method generateColor
 * @return {string} HEX color
 */
MODULE.generateColor = function() {
    var colours = MODULE.colours;
    colourslen = colours.length - 1;
    var selectedColourindex = Math.floor(Math.random() * colourslen);
    var selectedColour = colours[selectedColourindex];
    return selectedColour;
};

/**
 * Sets the backgroundColor based on the result of
 * the colorGeneratorFunc
 * @module MODULE
 * @method setBackgroundColor
 */
MODULE.setBackgroundColor = function() {
    var selectedColour = MODULE.generateColor();
    $("#bg-change").css({
        backgroundColor: selectedColour,
        color: "#fff"
    });
    $("footer").css({
        backgroundColor: selectedColour,
        color: "#fff"
    });
};

/**
 * Get the types of quote
 * api no longer allows for this
 * looking for an alternative method
 * @method getQuoteType
 * @return {string} famous or movies
 * @deprecated
 */
MODULE.getQuoteType = function() {
    var famousQuoteSelected = $("#famous-quote").attr("class");
    var movieQuoteSelected = $("#movie-quote").attr("class");

    if (famousQuoteSelected == "active") {
        return (quoteCategory = "famous");
    } else if (movieQuoteSelected == "active") {
        return (quoteCategory = "movies");
    } else {
        // possible throw error
        return (quoteCategory = "");
    }
};

/**
 * Gets quote and author from a predefined API
 * and sets the dom elements required.
 * As well as updating the timestamp
 * quoteCategory is no longer required due to API
 * not allowing to select via quote type.
 *
 * Future version will pass in elements to be populated with the data
 * instead of determined ones.
 * Make it more flexible
 * @method getQuoteAndSetDom
 * @param {string} quoteCategory Movie or Famous
 */
MODULE.getQuoteAndSetDom = function(quoteCategory) {
    $.ajax({
        headers: {
            Accept: "application/json"
        },
        url: "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json",
        success: function(response) {
            var selectedIndex = Math.floor(Math.random() * 100);
            var cleanedData = JSON.parse(response);
            $("#author").text(cleanedData.quotes[selectedIndex].author);
            $("#text").text(cleanedData.quotes[selectedIndex].quote);
        },
        fail: function(err) {
            console.log("fail");
        }
    });
    MODULE.displayTimeAndDayToDom();
};

/**
 * Display time and day to the Quote box
 * @module MODULE
 * @method displayTimeAndDayToDom
 */
MODULE.displayTimeAndDayToDom = function() {
    /**
     * Desired output
     * 5:13 am - 16 May 2017
     */

    // Make a Date
    var d = new Date();

    /**
     * Formats the time
     * 5:13 am
     * @module MODULE/FormatTime
     * @method FormatTime
     * @param {Date} date
     */
    var FormatTime = function(date) {
        // Get hours and minutes
        var time = d.getUTCHours() + ":" + d.getUTCMinutes();

        /**
         * if hour is over 12  add pm
         * else add am
         */

        if (d.getUTCHours() >= 12) {
            time += " pm";
        } else {
            time + " am";
        }
        return time;
    };

    /**
     * Formats date
     * 16 May 2017
     * @param {Date} date
     */
    var formatDate = function(date) {
        // Turn Month number into name
        var MonthNames = [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "June",
            "July",
            "Aug",
            "Sept",
            "Nov",
            "Oct",
            "Dec"
        ];

        var day = date.getDay() + 1;
        var month = date.getMonth();
        var year = date.getFullYear();
        var dateString = day + " " + MonthNames[month] + " " + year;
        return dateString;
    };

    var time = FormatTime(d);
    var date = formatDate(d);

    $("#timestamp").text(time + " - " + date);
};

/**
 * setRetweetCount
 * @module MODULE
 * @method setRetweetCount
 * @param {Number} count
 */
MODULE.setRetweetCount = function(count) {
    $("#retweets").text(count);
};


/**
 * setCommentCount
 * @module MODULE
 * @method setCommentCount
 * @param {Number} count
 */
MODULE.setCommentCount = function(count) {
    $("#comments").text(count);
};


/**
 * setLikesCount
 * @module MODULE
 * @method setLikesCount
 * @param {Number} count
 */
MODULE.setLikesCount = function(count) {
    $("#likes").text(count);
};




/**
 * Helper methods for various tasks
 *  @module helperMethods
 */
MODULE.helperMethods = {
    /**
     * generating random number from 0 - 1000
     * @module helperMethods/generateRandomNumberUpTo
     * @method generateRandomNumberUpTo
     * @param {number} maxVal
     * @return {number} generated number
     */
    generateRandomNumberUpTo: function(maxVal) {
        if (isNaN(maxVal)) {
            throw Error("Has to be an integer");
        } else {
            return Math.floor(Math.random() * maxVal);
        }
    }
};





/**
 * @module MODULE/buttonLogic
 */
MODULE.buttonLogic = {};

/**
 * Opens up twitter share page with text and author from the quote
 * Next version refactor and pass in text and author.
 * @module MODULE/buttonLogic
 * @event shareQuoteClick
 */
MODULE.buttonLogic.shareQuoteClick = function() {
    var text = $("#text").text();
    var author = $("#author").text();
    window.open(
        "https://twitter.com/intent/tweet?text=" + text + " :" + author,
        "_blank"
    );

};

/**
 * Opens up twitter page of User to follow
 * Next version refactor and allow link to be passed in.
 * @module MODULE/buttonLogic/
 * @event followButtonClick
 */
MODULE.buttonLogic.followButtonClick = function() {
    var url = "https://twitter.com/danielp_johnson";
    window.open(url, "_blank");
};



/**
 * Starts App
 * setRetweetCount by a random number .
 * setLikesCount by a random number.
 * Add events to newquote button
 * twitter share button and follow button
 * gets quote type
 */

$(document).ready(function() {
    MODULE.initApp();
    
    // Refactor this
    $("#new-quote").on("click", MODULE.initApp);
    $("#twitter-share-button").on("click", MODULE.buttonLogic.shareQuoteClick);

    // allow user to select what is the follow button
    $("#twitter-follow-button").on("click", MODULE.buttonLogic.followButtonClick);

    /*    Linked for removal */
    $("#famous-quote").on("click", function() {
        $("#famous-quote").addClass("active");
        $("#movie-quote").removeClass("active");
    });
    /*    Linked for removal */
    $("#movie-quote").on("click", function() {
        $("#movie-quote").addClass("active");
        $("#famous-quote").removeClass("active");
    });
});