import ScoreService from "server/services/scores.service.js";
import CustomErrorMessage from "shared/util/customErrorMessage.js";
import Logger from "shared/util/logger.js";

const ScoreResolver = {
	Query: {
		getAllScores: async (_, args) => {
			try {
				Logger.info("===============getAllScores===============");
				const response = await ScoreService.getAllScores();
				return response.data;
			} catch (error) {
				Logger.error(error);
				throw new CustomErrorMessage(
					error.message,
					error.extensions && error.extensions.code
				);
			}
		},
		getScore: async (_, args) => {
			try {
				Logger.info("===============getScore===============");
				const { user } = args;
				const response = await ScoreService.getScore(user);
				return response.data;
			} catch (error) {
				Logger.error(error);
				throw new CustomErrorMessage(
					error.message,
					error.extensions && error.extensions.code
				);
			}
		},
	},
	Mutation: {
		addNewScore: async (_, args) => {
			try {
				Logger.info("===============addNewScore===============");
				const { newUser } = args;
				const response = await ScoreService.registerUser(newUser);
				return response.data;
			} catch (error) {
				Logger.error(error);
				throw new CustomErrorMessage(
					error.message,
					error.extensions && error.extensions.code
				);
			}
		},
	},
};

export default ScoreResolver;
