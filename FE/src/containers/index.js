import MainContainer from "./main.container";

const Home = () => {

	// const { loading, error, data } = useQuery(GET_BTC_PRICE);
	const data =[];
	const loading = false;

	return (
		<div className="container">
			<MainContainer
				loading={loading}
				data={data && data.getAllBlocks}
			/>
		</div>
	);
};
export default Home;
