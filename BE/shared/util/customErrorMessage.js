import { ApolloError } from "apollo-server";

class CustomErrorMessage extends ApolloError {
	constructor(message = "Common Error!", code) {
		super(message, code);
		Object.defineProperty(this, "name", {
			value: "CustomErrorMessage",
		});
	}
}

export default CustomErrorMessage;
