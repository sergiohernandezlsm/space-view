import { useCallback, useState } from "react";
import axios from "axios";

const useGetAssetData = () => {
  const [assetData, setAssetData] = useState({
    url: "",
    mediaType: "",
  });

  const getAssetData = useCallback(async (url, mediaType) => {
    try {
      const response = await axios.get(`${url}`);
      setAssetData({
        url: response.data[0],
        mediaType: mediaType,
      });
    } catch (error) {
      console.error(error);
    }
  }, []);

  return {
    assetData,
    getAssetData,
  };
};

export default useGetAssetData;
