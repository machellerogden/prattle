'use strict';

module.exports = setCarInSession;

function setCarInSession(options, callback) {
    const intent = options.intent;
    const cardTitle = intent.name;
    const favoriteCarSlot = intent.slots.Car;
    let repromptText = '';
    let sessionAttributes = {};
    const shouldEndSession = false;
    let speechOutput = '';

    if (favoriteCarSlot) {
        const favoriteCar = favoriteCarSlot.value;
        sessionAttributes = {
            favoriteCar
        };
        speechOutput = "I now know your favorite car is " + favoriteCar + ". You can ask me your favorite car by saying, what's my favorite car?";
        repromptText = "You can ask me your favorite car by saying, what's my favorite car?";
    } else {
        speechOutput = "I'm not sure what your favorite car is. Please try again.";
        repromptText = "I'm not sure what your favorite car is. You can tell me your favorite car by saying, my favorite car is Ford";
    }

    callback({ sessionAttributes, cardTitle, speechOutput, repromptText, shouldEndSession });
}
