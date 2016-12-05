'use strict';
const setCarInSession = require('./setCarInSession');
const getCarFromSession = require('./getCarFromSession');
const handleSessionEndRequest = require('./handleSessionEndRequest');

exports['MyCarIsIntent'] = setCarInSession;
exports['WhatsMyCarIntent'] = getCarFromSession;
exports['AMAZON.StopIntent'] = handleSessionEndRequest;
exports['AMAZON.CancelIntent'] = handleSessionEndRequest;
