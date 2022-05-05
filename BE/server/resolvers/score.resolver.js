import ScoreService from "server/services/scores.service.js";
import CustomErrorMessage from "shared/util/customErrorMessage.js";
import Logger from "shared/util/logger.js";
import Response from "shared/util/response.js";

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
				return response;
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
				const { newScore } = args;
				const response = await ScoreService.registerUser(newScore);
			  return new Response(
					"SUCCESS",
					"User creating Successful!"
				);
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
