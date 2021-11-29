import { shallow } from "enzyme";
import SearchPage from "./SearchPage";

describe("SearchPage", () => {
  it("should render SearchPage", () => {
    const wrapper = shallow(<SearchPage />);
    expect(wrapper).toMatchSnapshot();
  });
});
