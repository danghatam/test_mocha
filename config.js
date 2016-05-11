const database = {
	name		: "test_mocha",
	host		: process.env.MONGO_HOST || "localhost",
	port		: 27017,
	username: "",
	password: ""
};

const token = {
	secret	 : "test mocha",
	api_keys : "123456789"
};

export { database, token };