'use strict';
const buildSpeechletResponse = require('./buildSpeechletResponse');

module.exports = getWelcomeResponse;

function getWelcomeResponse(callback) {
    const sessionAttributes = {};
    const cardTitle = 'Welcome';
    const speechOutput = 'Welcome to the Alexa Skills Kit sample. Please tell me your favorite color by saying, my favorite color is red';
    const repromptText = 'Please tell me your favorite color by saying, my favorite color is red';
    const shouldEndSession = false;

    callback({ sessionAttributes, cardTitle, speechOutput, repromptText, shouldEndSession });
}
