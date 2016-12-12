'use strict';

module.exports = buildResponse;

function buildResponse(options) {
    const { sessionAttributes, speechletResponse } = options;
    return {
        version: '1.0',
        sessionAttributes,
        response: speechletResponse
    };
}
