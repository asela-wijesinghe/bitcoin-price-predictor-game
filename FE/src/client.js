import { ApolloClient, InMemoryCache } from "@apollo/client";

const defaultOptions = {
	watchQuery: {
		fetchPolicy: 'no-cache',
		errorPolicy: 'ignore',
	},
	query: {
		fetchPolicy: 'no-cache',
		errorPolicy: 'all',
	},
};

const client = new ApolloClient({
	cache: new InMemoryCache(),
	defaultOptions: defaultOptions,
	uri: "http://13.233.238.12:4000",
});

export { client };
