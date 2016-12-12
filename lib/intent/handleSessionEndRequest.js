'use strict';
module.exports = handleSessionEndRequest;

function handleSessionEndRequest(options, callback) {
    const cardTitle = 'Session Ended';
    const speechOutput = 'Thank you for trying this skills. Have a nice day!';
    const shouldEndSession = true;

    const sessionAttributes = {};
    const repromptText = null;
    callback({ sessionAttributes, cardTitle, speechOutput, repromptText, shouldEndSession });
}
