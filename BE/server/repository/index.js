import axios from "axios";
import { DATASOURCE_URL } from "shared/util/const.js";
class Datasource {
	async accessDataSource(url) {
		return await axios.get(DATASOURCE_URL + url);
	}
}

export default new Datasource();
