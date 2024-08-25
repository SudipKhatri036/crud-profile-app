import { useEffect, useState } from "react";

function useLocalStorage(initialState, key) {
  const [data, setData] = useState(function () {
    const profileArr = localStorage.getItem(key);
    return profileArr ? JSON.parse(profileArr) : initialState;
  });
  useEffect(
    function () {
      localStorage.setItem("profile-lists", JSON.stringify(data));
    },
    [data]
  );

  return [data, setData];
}

export default useLocalStorage;
