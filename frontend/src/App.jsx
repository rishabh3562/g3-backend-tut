import React, { useEffect, useState } from "react";
import axios from "axios";
const App = () => {
  const [data, setdata] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        let res = await axios.get("http://localhost:8000/users");
        setdata(res.data);
        console.log("data fetched", res);
      } catch (error) {
        console.log("some error occurred", error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <div>hi</div>
    </>
  );
};

export default App;
