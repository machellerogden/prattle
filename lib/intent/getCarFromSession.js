'use strict';
module.exports = getCarFromSession;

function getCarFromSession(intent, session, callback) {
    let favoriteCar;
    const repromptText = null;
    const sessionAttributes = {};
    const cardTitle = intent.name;
    let shouldEndSession = false;
    let speechOutput = '';

    if (session.attributes) {
        favoriteCar = session.attributes.favoriteCar;
    }

    if (favoriteCar) {
        speechOutput = `Your favorite car is ${favoriteCar}. Goodbye.`;
        shouldEndSession = true;
    } else {
        speechOutput = "I'm not sure what your favorite car is, you can say, my favorite car is Ford";
    }

    callback({ sessionAttributes, cardTitle, speechOutput, repromptText, shouldEndSession });
}
