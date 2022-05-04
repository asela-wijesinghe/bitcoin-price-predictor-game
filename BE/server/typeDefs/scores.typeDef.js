import { gql } from "apollo-server";

const scoresTypeDef = gql`
	type Score {
		user: String
		score: Int
	}

	input ScoreInput {
		user: String
		score: Int
	}


	extend type Mutation {
    addNewScore(newScore: ScoreInput!): Response!
	}

	extend type Query {
		getAllScores: [Score]
		getScore(user: String): Score
	}
`;

export default scoresTypeDef;
