import { ApolloServer } from "apollo-server";
import mongoose from "mongoose";
import resolvers from "server/resolvers/index.js";
import typeDefs from "server/typeDefs/index.js";
import { MONGODB_URL } from "shared/util/const.js";
import Logger from "shared/util/logger.js";

mongoose.connect(MONGODB_URL, {
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
