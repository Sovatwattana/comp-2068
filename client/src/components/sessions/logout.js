import React, { useEffect } from "react";
import { Redirect } from "react-router-dom";
import Axios from "axios";

function Logout() {
  useEffect(() => {
    Axios.post('/api/logout');
  }, []);

  return <Redirect to="/" />;
}

export default Logout;