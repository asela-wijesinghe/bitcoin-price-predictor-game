import { gql } from "@apollo/client";

const GET_BTC_PRICE = gql`
	query {
		getPrice {
			price
		}
	}
`;

export { GET_BTC_PRICE };
