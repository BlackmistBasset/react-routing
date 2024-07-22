import axios from "axios";
import { useState, useEffect } from "react";

export const useAxios = (requestConfig) => {
  const [response, setResponse] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(true);

  axios.defaults.baseURL = "https://rickandmortyapi.com/api/character";
  useEffect(() => {
    axios
      .request(requestConfig)
      .then((res) => {
        setResponse(res.data);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return { response, error, loading };
};
