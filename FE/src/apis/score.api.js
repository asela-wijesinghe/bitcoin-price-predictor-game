import { gql } from "@apollo/client";

const GET_ALL_SCORES = gql`
	query {
		getAllScores {
			user
			score
		}
	}
`;

const GET_SCORE = gql`
	query ($user: String) {
		getScore(user: $user) {
			user
			score
		}
	}
`;

const SAVE_USER = gql`
	mutation addNewScore($newScore: ScoreInput!) {
		addNewScore(newScore: $newScore) {
			status
      message
		}
	}
`;

const UPDATE_SCORE = gql`
	mutation updateScore($scoreInput: ScoreInput!) {
		updateScore(scoreInput: $scoreInput) {
			status
      message
		}
	}
`;


export { SAVE_USER, GET_ALL_SCORES, UPDATE_SCORE, GET_SCORE };
