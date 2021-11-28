import React from "react";
import useGetAssets from "../hook/useGetAssets";
import useGetAssetMetaData from "../hook/useGetAssetMetaData";
import useGetAssetImage from "../hook/useGetAssetImage";

const AssetsContext = React.createContext({
  assets: [],
  assetImage: {},
  assetMetaData: {
    title: "",
    description: "",
  },
  sendRequest: () => {},
  getMetaData: (_id: any) => {},
  getAssetImage: (_id: any) => {},
  inputOnChangeHandler: (_e: React.ChangeEvent<HTMLInputElement>) => {},
});

export const AssetsContextProvider: React.FC = ({ children }) => {
  const { assets, sendRequest, inputOnChangeHandler } = useGetAssets();
  const { metaData, getMetaData } = useGetAssetMetaData();
  const { assetImage, getAssetImage } = useGetAssetImage();

  return (
    <AssetsContext.Provider
      value={{
        assets: assets,
        assetImage: assetImage.url,
        assetMetaData: {
          title: metaData.title,
          description: metaData.description,
        },
        sendRequest,
        inputOnChangeHandler,
        getMetaData,
        getAssetImage,
      }}
    >
      {children}
    </AssetsContext.Provider>
  );
};

export default AssetsContext;
