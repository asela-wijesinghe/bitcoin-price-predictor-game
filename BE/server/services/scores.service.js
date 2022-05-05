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


	async updateScore(scoreInput) {
		return ScoresSchema.findOneAndUpdate(
      { user: scoreInput.user },
      { score: scoreInput.score },
      {
        new: true
      }
    );
	}
}

export default new ScoreService();
