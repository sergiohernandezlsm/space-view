import React from "react";
import useGetAssets from "../hook/useGetAssets";
import useGetAssetMetaData from "../hook/useGetAssetMetaData";
import useGetAssetData from "../hook/useGetAssetData";

const AssetsContext = React.createContext({
  assets: [],
  assetData: {
    href: "",
    mediaType: "",
  },
  assetMetaData: {
    title: "",
    description: "",
    mediaType: "",
  },
  sendRequest: () => {},
  getMetaData: (_id: any) => {},
  getAssetData: (_url: any, _mediaType: string | undefined) => {},
  inputOnChangeHandler: (_e: React.ChangeEvent<HTMLInputElement>) => {},
});

export const AssetsContextProvider: React.FC = ({ children }) => {
  const { assets, sendRequest, inputOnChangeHandler } = useGetAssets();
  const { metaData, getMetaData } = useGetAssetMetaData();
  const { assetData, getAssetData } = useGetAssetData();

  return (
    <AssetsContext.Provider
      value={{
        assets: assets,
        assetData: {
          href: assetData.url,
          mediaType: assetData.mediaType,
        },
        assetMetaData: {
          title: metaData.title,
          description: metaData.description,
          mediaType: metaData.mediaType,
        },
        sendRequest,
        inputOnChangeHandler,
        getMetaData,
        getAssetData,
      }}
    >
      {children}
    </AssetsContext.Provider>
  );
};

export default AssetsContext;
