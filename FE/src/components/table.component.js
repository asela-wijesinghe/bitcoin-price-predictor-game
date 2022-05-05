import MaterialTable from "material-table";
import React from "react";

const Table = ({ data, loading }) => {
	if (data) {
		const editable = data.map((o) => ({ ...o }));
		return (
			<div className="table-container animate__animated animate__fadeInUp">
				<div style={{ maxWidth: "100%" }}>
					<MaterialTable
						columns={[
							{ title: "Player", field: "user" },

							{ title: "Score", field: "score" },

						]}
						options={{
							rowStyle: {
								fontSize: 12,
							},
						}}
						data={editable}
						title="Leaderboard"

					/>
				</div>
			</div>
		);
	} else {
		return <div>Loading...</div>;
	}
};

export default Table;
