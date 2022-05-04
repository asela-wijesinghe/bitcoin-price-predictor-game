import { useLocalStorage } from "../custom-hooks/useLocalStorage";
import MainContainer from "./main.container";

const Home = () => {

	const [storedValue, setValue] = useLocalStorage("user");
	const isUserEmpty = Object.keys(storedValue).length === 0;


	// const { loading, error, data } = useQuery(GET_BLOCK_DETAILS, {
	// 	variables: {
	// 		blockId,
	// 	},
	// });

	const data = [];
	const loading = false;

	return (
		<div className="container">
			<MainContainer
				loading={loading}
				data={data && data.getAllBlocks}
				isUserEmpty={isUserEmpty}
			/>
		</div>
	);
};
export default Home;
