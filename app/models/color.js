import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const colorSchema = new Schema({
	red: String,
	green: String,
	blue: String
});

export default mongoose.model('Color', colorSchema);