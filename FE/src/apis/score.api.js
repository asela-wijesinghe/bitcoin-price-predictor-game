import { gql } from "@apollo/client";

const GET_USERS = gql`
	query {
		getScores {
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


export { SAVE_USER, GET_USERS, UPDATE_SCORE, GET_SCORE };
