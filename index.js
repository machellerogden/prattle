'use strict';

const buildResponse = require('./lib/buildResponse');
const buildSpeechletResponse = require('./lib/buildSpeechletResponse');
const onSessionStarted = require('./lib/onSessionStarted');
const onSessionEnded = require('./lib/onSessionEnded');
const intentMap = require('./lib/intent');
const getWelcomeResponse = require('./lib/getWelcomeResponse');

exports.handler = handler;

function handler(event, context, callback) {

    function buildResponseCallback(options) {
        const sessionAttributes = options.sessionAttributes;
        const cardTitle = options.cardTitle;
        const speechOutput = options.speechOutput;
        const repromptText = options.repromptText;
        const shouldEndSession = options.shouldEndSession;
        const speechletResponse = buildSpeechletResponse({ cardTitle, speechOutput, repromptText, shouldEndSession });
        console.log(`buildResponseCallback sessionAttributes=${sessionAttributes} speechletResponse=${speechletResponse}`);
        callback(null, buildResponse({ sessionAttributes, speechletResponse }));
    }

    try {
        console.log(`event.session.application.applicationId=${event.session.application.applicationId}`);

        if (event.session.application.applicationId !== 'amzn1.ask.skill.b0598249-62b9-4853-ab9f-f822568647f8') {
            return callback('Invalid Application ID');
        }

        if (event.session.new) {
            onSessionStarted({ requestId: event.request.requestId }, event.session);
        }

        if (event.request.type === 'LaunchRequest') {
            console.log(`LaunchRequest requestId=${event.request.requestId}, sessionId=${event.session.sessionId}`);

            getWelcomeResponse(buildResponseCallback);

        } else if (event.request.type === 'IntentRequest') {
            const intent = event.request.intent;
            const session = event.session;
            const intentName = intent.name;

            console.log(`IntentRequest requestId=${event.request.requestId}, sessionId=${event.session.sessionId} intentName=${intentName} intentMap[intentName]=${intentMap[intentName]}`);

            try {
                intentMap[intentName]({ intent, session }, buildResponseCallback);
            } catch (err) {
                throw new Error('Invalid intent');
            }

        } else if (event.request.type === 'SessionEndedRequest') {
            onSessionEnded(event.request, event.session);
            return callback();
        }
    } catch (err) {
        return callback(err);
    }

    return null;
}
