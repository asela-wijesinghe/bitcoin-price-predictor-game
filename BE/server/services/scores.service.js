import ScoresSchema from "./../models/scores.model.js";

class ScoreService {
	async getAllScores() {
			return ScoresSchema.find().sort({
        score: -1
      });
	}

	async getScore(user) {
		return ScoresSchema.findOne({
			user: user
		})
	}

	async registerUser(newUser) {
		let dbScore = new ScoresSchema();
    dbScore.name = newUser.user;
    dbScore.wallet = newUser.score;
    await dbScore.save();
    return dbScore;
	}
}

export default new ScoreService();
