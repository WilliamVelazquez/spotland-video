import { useState, useEffect } from 'react';

const useInitialState = (API) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(API)
      .then(response => response.json())
      .then(responseData => setData(responseData));
  }, []);
  return data;
};

export default useInitialState;
