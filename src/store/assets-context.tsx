import React from "react";
import useGetAssets from "../hook/useGetAssets";
import useGetAssetData from "../hook/useGetAssetData";

const AssetsContext = React.createContext({
  assets: [],
  assetData: {
    href: "",
    mediaType: "",
  },
  sendRequest: () => {},
  getAssetData: (_url: any, _mediaType: string | undefined) => {},
  inputOnChangeHandler: (_e: React.ChangeEvent<HTMLInputElement>) => {},
});

export const AssetsContextProvider: React.FC = ({ children }) => {
  const { assets, sendRequest, inputOnChangeHandler } = useGetAssets();
  const { assetData, getAssetData } = useGetAssetData();

  return (
    <AssetsContext.Provider
      value={{
        assets: assets,
        assetData: {
          href: assetData.url,
          mediaType: assetData.mediaType,
        },
        sendRequest,
        inputOnChangeHandler,
        getAssetData,
      }}
    >
      {children}
    </AssetsContext.Provider>
  );
};

export default AssetsContext;
