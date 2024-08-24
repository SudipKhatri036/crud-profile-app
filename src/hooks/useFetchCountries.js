import { useState, useEffect } from "react";
import axios from "axios";

function useFetchCountries(url) {
  const [countries, setCountries] = useState([]);
  const [error, setError] = useState(null);

  useEffect(
    function () {
      async function getCountries() {
        try {
          const response = await axios.get(url);
          setCountries(response.data);
        } catch (error) {
          setError(error.response.data.message);
        }
      }

      getCountries();
    },
    [url]
  );
  return { countries, error };
}

export default useFetchCountries;
