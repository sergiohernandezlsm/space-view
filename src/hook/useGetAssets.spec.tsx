import { shallow } from "enzyme";
import useHttpGetAssets from "./useGetAssets";

const mockAssets = ["test"] as any;
const mockSetAssets = jest.fn();

jest.mock("axios");
jest.mock("react", () => ({
  ...jest.requireActual("react"),
  useState: () => [mockAssets, mockSetAssets],
  useCallback: () => jest.fn(),
}));

const renderHook = (hook: any) => {
  let wrapper = {
    assets: mockAssets,
    sendRequest: jest.fn(),
    inputOnChangeHandler: jest.fn(),
  };
  const HookWrapper = (): any => {
    wrapper = hook();
    return null;
  };
  shallow(<HookWrapper />);
  return wrapper;
};
beforeEach(() => {
  jest.clearAllMocks();
});

describe("useHttpGetAssets", () => {
  it("should render useHttpGetAssets hook with properties", () => {
    const customHook = renderHook(useHttpGetAssets);
    expect(customHook).toMatchSnapshot();
  });

  it("should check windowSize initial state", () => {
    const customHook = renderHook(useHttpGetAssets);
    expect(customHook.assets).toEqual(["test"]);
    expect(customHook.inputOnChangeHandler).toEqual(expect.any(Function));
    expect(customHook.sendRequest.mockImplementation).toEqual(
      expect.any(Function)
    );
  });
});
