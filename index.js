'use strict';
const buildResponse = require('./lib/buildResponse');
const onSessionStarted = require('./lib/onSessionStarted');
const onSessionEnded = require('./lib/onSessionEnded');
const intent = require('./lib/intent');
const getWelcomeResponse = require('./lib/getWelcomeResponse');

exports.handler = (event, context, callback) => {

    const buildResponseCallback = (sessionAttributes, speechletResponse) => {
        console.log(`buildResponseCallback sessionAttributes=${sessionAttributes} speechletResponse=${speechletResponse}`);
        callback(null, buildResponse(sessionAttributes, speechletResponse));
    }

    try {
        console.log(`event.session.application.applicationId=${event.session.application.applicationId}`);

        if (event.session.application.applicationId !== 'amzn1.ask.skill.b0598249-62b9-4853-ab9f-f822568647f8') {
             callback('Invalid Application ID');
        }

        if (event.session.new) {
            onSessionStarted({ requestId: event.request.requestId }, event.session);
        }

        if (event.request.type === 'LaunchRequest') {
            console.log(`LaunchRequest requestId=${event.request.requestId}, sessionId=${event.session.sessionId}`);

            getWelcomeResponse(buildResponseCallback);

        } else if (event.request.type === 'IntentRequest') {
            const intentName = event.request.intent.name;

            console.log(`IntentRequest requestId=${event.request.requestId}, sessionId=${event.session.sessionId} intentName=${intentName}`);

            try {
                intent[intentName](event.request.intent, session, buildResponseCallback);
            } catch (e) {
                throw new Error('Invalid intent');
            }

        } else if (event.request.type === 'SessionEndedRequest') {
            onSessionEnded(event.request, event.session);
            callback();
        }
    } catch (err) {
        callback(err);
    }

};
