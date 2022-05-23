import { ApolloServer } from "apollo-server";
import dotenv from "dotenv";
import mongoose from "mongoose";
import resolvers from "server/resolvers/index.js";
import typeDefs from "server/typeDefs/index.js";
import Logger from "shared/util/logger.js";
dotenv.config();




mongoose.connect(process.env.MONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const server = new ApolloServer({
	typeDefs: typeDefs,
	resolvers: resolvers,
	cors: {
		origin: (origin, callback) => {
			const whitelist = [
				"http://localhost:3000", //dev env
				"http://15.206.171.139" //prod env
			];

			if (!origin || whitelist.indexOf(origin) !== -1) {
				callback(null, true);
			} else {
				callback(new Error("Not allowed by CORS"));
			}
		},
		credentials: false
	},
});

server.listen().then(({ url }) => {
	Logger.info(`Apollo Server ready at ${url}`);
});
