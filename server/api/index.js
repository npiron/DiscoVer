import { Router } from 'express';
import facets from './facets';
import db from '../db';

export default function(db) {
	var api = Router();

	// mount the facets resource
	//api.use('/facets', facets(db));
  
	// perhaps expose some API metadata at the root
	api.get('/search/:query', (req, res) => {
    db.search(req.params.query)
			.then(function(release) {
				res.json({
					version: '1.0',
					...release
				});
			})
	});
	return api;
}
