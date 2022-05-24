import { ApolloProvider } from "@apollo/client";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import Enzyme, { mount } from "enzyme";
import React from "react";
import { client } from "../client.js";
import PredictComponent from "../components/predict.component.js";

Enzyme.configure({ adapter: new Adapter() });
describe("Predict Component", () => {
	let predictWrapper;
	beforeEach(() => {
		predictWrapper = mount(
			<ApolloProvider client={client}>
				<PredictComponent />
			</ApolloProvider>
		);
	});

	it("should hide the buttons after down button is clicked", () => {
		const downButton = predictWrapper.findWhere((node) => {
			return node.type() === "button" && node.name() && node.text() === "Down";
		});
		downButton.simulate("click");

		const downButtonAfterClick = predictWrapper.findWhere((node) => {
			return node.type() === "button" && node.name() && node.text() === "Down";
		});
		expect(downButtonAfterClick.exists()).toBe(false);
	});

	it("should hide the buttons after up button is clicked", () => {
		const upButton = predictWrapper.findWhere((node) => {
			return node.type() === "button" && node.name() && node.text() === "Up";
		});
		upButton.simulate("click");

		const upButtonAfterClick = predictWrapper.findWhere((node) => {
			return node.type() === "button" && node.name() && node.text() === "up";
		});
		expect(upButtonAfterClick.exists()).toBe(false);
	});
});
