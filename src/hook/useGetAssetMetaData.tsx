import { useCallback, useState } from "react";
import axios from "axios";

const useGetAssetMetaData = () => {
  const [metaData, setMetaData] = useState({
    title: "",
    description: "",
  });

  const getMetaData = useCallback(async (id) => {
    try {
      const response = await axios.get(
        `https://images-assets.nasa.gov/image/${id}/metadata.json`
      );
      setMetaData({
        title: response.data["XMP:Title"],
        description: response.data["XMP:Description"],
      });
    } catch (error) {
      console.error(error);
    }
  }, []);

  return {
    metaData,
    getMetaData,
  };
};

export default useGetAssetMetaData;
