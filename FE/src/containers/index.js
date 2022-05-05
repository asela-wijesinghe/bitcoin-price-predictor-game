import { useLocalStorage } from "../custom-hooks/useLocalStorage";
import MainContainer from "./main.container";

const Home = () => {
	const [storedValue, setValue] = useLocalStorage("user");
	const isUserEmpty = storedValue && Object.keys(storedValue).length === 0;

	return (
		<div className="container">
			<MainContainer isUserEmpty={isUserEmpty} />
		</div>
	);
};
export default Home;
