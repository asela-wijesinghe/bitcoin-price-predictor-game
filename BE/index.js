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
});

server.listen().then(({ url }) => {
	Logger.info(`Apollo Server ready at ${url}`);
});
