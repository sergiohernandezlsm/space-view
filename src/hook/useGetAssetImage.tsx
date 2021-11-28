import { useCallback, useState } from "react";
import axios from "axios";

const useGetAssetImage = () => {
  const [assetImage, setAssetImage] = useState({
    url: "",
  });

  const getAssetImage = useCallback(async (id) => {
    try {
      const response = await axios.get(
        `https://images-api.nasa.gov/asset/${id}`
      );
      setAssetImage({
        url: response.data.collection.items[0].href,
      });
    } catch (error) {
      console.error(error);
    }
  }, []);

  return {
    assetImage,
    getAssetImage,
  };
};

export default useGetAssetImage;
