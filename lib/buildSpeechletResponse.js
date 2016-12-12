'use strict';

module.exports = buildSpeechletResponse;

function buildSpeechletResponse(options) {
    const cardTitle = options.cardTitle;
    const speechOutput = options.speechOutput;
    const repromptText = options.repromptText;
    const shouldEndSession = options.shouldEndSession;
    return {
        outputSpeech: {
            type: 'PlainText',
            text: speechOutput,
        },
        card: {
            type: 'Simple',
            title: `SessionSpeechlet - ${cardTitle}`,
            content: `SessionSpeechlet - ${speechOutput}`,
        },
        reprompt: {
            outputSpeech: {
                type: 'PlainText',
                text: repromptText,
            },
        },
        shouldEndSession
    };
}
