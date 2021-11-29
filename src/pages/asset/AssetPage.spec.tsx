import { useEffect } from "react";
import { shallow } from "enzyme";
import AssetPage from "./AssetPage";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: () => ({
    id: "test",
  }),
}));

jest.mock("react", () => ({
  ...jest.requireActual("react"),
  useContext: () => ({
    assetData: {
      href: "test",
      mediaType: "audio",
    },
  }),
  useEffect: jest.fn(),
}));

describe("AssetPage", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    (useEffect as jest.Mock).mockImplementation((f) => f());
  });
  it("should render AssetPage", () => {
    const wrapper = shallow(<AssetPage />);
    expect(wrapper).toMatchSnapshot();
  });
});
