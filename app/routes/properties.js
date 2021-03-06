'use strict';

module.exports = function(app) {
	var users = require('../../app/controllers/users');
	var properties = require('../../app/controllers/properties');

	// Article Routes
	app.get('/properties', properties.list);
	app.post('/properties', users.requiresLogin, properties.create);
    app.get('/properties/user/:userID', properties.read);
	app.get('/properties/:propertyId', properties.read);
	app.put('/properties/:propertyId', users.requiresLogin, properties.update);
    app.get('/users/properties', properties.list);
    app.post('/users/properties', users.requiresLogin, properties.create);
    app.get('/users/properties/:propertyId', properties.read);
    app.put('/users/properties/:propertyId', users.requiresLogin, properties.hasAuthorization, properties.update);
    app.put('/properties/tickets/:propertyId', users.requiresLogin, properties.update);
	app.del('/properties/:propertyId', users.requiresLogin, properties.hasAuthorization, properties.delete);

	// Finish by binding the article middleware
	app.param('propertyId', properties.propertyByID);
    app.param('userID', properties.propertyByUserID);
};