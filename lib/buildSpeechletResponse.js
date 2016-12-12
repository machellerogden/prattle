'use strict';

module.exports = buildSpeechletResponse;

function buildSpeechletResponse(options) {
    const { cardTitle, speechOutput, repromptText, shouldEndSession } = options;
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
