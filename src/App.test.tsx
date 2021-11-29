import { shallow } from "enzyme";
import App from "./App";

test("should render page", () => {
  const wrapper = shallow(<App />);
  expect(wrapper).toMatchSnapshot();
});
