import { useCallback, useState } from "react";
import axios from "axios";

const useGetAssetMetaData = () => {
  const [metaData, setMetaData] = useState({
    title: "",
    description: "",
    mediaType: "",
  });

  const getMetaData = useCallback(async (id, type) => {
    try {
      const response = await axios.get(
        `https://images-assets.nasa.gov/${type}/${id}/metadata.json`
      );
      if (type === "audio") {
        setMetaData({
          title: response.data["AVAIL:Title"],
          description: response.data["AVAIL:Title"],
          mediaType: response.data["AVAIL:MediaType"],
        });
      }
      if (type === "image") {
        setMetaData({
          title: response.data["XMP:Title"],
          description: response.data["XMP:Description"],
          mediaType: response.data["AVAIL:MediaType"],
        });
      }
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
