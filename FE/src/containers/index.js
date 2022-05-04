import { useLocalStorage } from "../services/useLocalStorage";
import MainContainer from "./main.container";

const Home = () => {
	// const { loading, error, data } = useQuery(GET_BTC_PRICE);
	const [storedValue, setValue] = useLocalStorage("user");
	const isUserEmpty = Object.keys(storedValue).length === 0;

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
