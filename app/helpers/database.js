import mongoose from 'mongoose';
import { database as db } from '../../config';

class Database {
	
	constructor(){
		this.connectionStr = `mongodb://${db.user}:${db.password}@${db.host}:${db.port}/${db.name}`
	}

	connect(){
		mongoose.connect(this.connectionStr);
	}
}

export default new Database;