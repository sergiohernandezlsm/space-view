import { useCallback, useState } from "react";
import axios from "axios";

const useHttpGetAssets = () => {
  const [assets, setAssets] = useState([]);
  const [formValues, setFormValues] = useState({
    keyWord: "",
    image: false,
    audio: false,
  });

  const sendRequest = useCallback(async () => {
    const url = new URL("https://images-api.nasa.gov/search");
    let mediaTypeValues = [];

    if (formValues.keyWord !== "") {
      url.searchParams.set("q", `${formValues.keyWord}`);
    }
    if (formValues.image !== false) {
      mediaTypeValues.push("image");
    }
    if (formValues.audio !== false) {
      mediaTypeValues.push("audio");
    }
    if (mediaTypeValues.length) {
      url.searchParams.set("media_type", `${mediaTypeValues.toString()}`);
    }

    try {
      const response = await axios.get(`${url}`);
      const data = response.data.collection.items.map((item: any) => {
        if (item.data[0].media_type === "image") {
          return {
            nasaId: item.data[0].nasa_id,
            image: item.links[0].href,
          };
        }
        return {
          nasaId: item.data[0].nasa_id,
          image: "http://via.placeholder.com/640x360",
        };
      });
      setAssets(data);
    } catch (error) {
      console.error(error);
    }
  }, [formValues]);

  const inputOnChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues((prevState: any) => {
      return {
        ...prevState,
        [e.target.name]:
          e.target.name === "keyWord" ? e.target.value : e.target.checked,
      };
    });
  };

  return {
    assets,
    sendRequest,
    inputOnChangeHandler,
  };
};

export default useHttpGetAssets;
