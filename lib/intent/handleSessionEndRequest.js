'use strict';
const buildSpeechletResponse = require('../buildSpeechletResponse');

module.exports = handleSessionEndRequest;

function handleSessionEndRequest(callback) {
    const cardTitle = 'Session Ended';
    const speechOutput = 'Thank you for trying the Alexa Skills Kit sample. Have a nice day!';
    const shouldEndSession = true;

    const sessionAttributes = {};
    const repromptText = null;
    callback({ sessionAttributes, cardTitle, speechOutput, repromptText, shouldEndSession });
}
