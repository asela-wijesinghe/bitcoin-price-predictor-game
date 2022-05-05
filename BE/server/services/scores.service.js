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

	async registerUser(newScore) {
		let dbScore = new ScoresSchema();
    dbScore.user = newScore.user;
    dbScore.score = newScore.score;
    await dbScore.save();
    return dbScore;
	}
}

export default new ScoreService();
