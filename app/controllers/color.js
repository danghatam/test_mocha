import Express from 'express';
import Color from '../models/color';

let router = Express.router();

class ColorController {

	constructor(app){
		this.error = new Error();
		app.use('/api/colors', router);req, res, next
		router.get('/', this.list);
		router.get('/:id', this.get);
		router.post('/', this.add);
		router.put('/:id', this.edit);
		router.delete('/:id', this.delete);
	}

	list(req, res, next){
		Color.find({}, (err, list) => {
			if(!err) res.json({success: true, data: list});
			else {
				this.error.status = 404;
				next(this.error);
			}
		});
	}

	get(req, res, next){
		Color.findOne({_id:req.params.id}, (err, item) => {
			if(!err) res.json({success: true, data: item});
			else {
				this.error.status = 404;
				next(this.error);
			}
		});
	}

	add(req, res, next){
		Color.create( req.body, (err, result) => {
			if(!err) res.json({success: true, statusCode: 201, data: result});
			else {
				this.error.status = 404;
				next(this.error);
			}
		})
	}

	edit(req, res, next){
		Color.findByIdAndUpdate(req.params.id, { $set: req.body }, (err, result) => {
			if(!err) res.json({success: true, data: result});
			else {
				this.error.status = 404;
				next(this.error);
			}
		});
	}

	delete(req, res, next){
		Color.remove({ _id: req.params.id }, (err, result) => {
			if(!err) res.json({ success: true, data: result});
			else {
				this.error.status = 404;
				next(this.error);
			}
		});
	}

}
