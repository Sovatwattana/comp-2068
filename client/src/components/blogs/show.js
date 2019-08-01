import React, { useState, useEffect } from "react";
import Axios from "axios";

function Show(props) {
  const [blog, setBlog] = useState([]);

  useEffect(() => {
    Axios.get(`/api/blogs/${props.match.params.id}`)
      .then(result => {
        console.log(result);
        setBlog(result.data);
      })
      .catch(err => console.error(err));
  }, [props]);

  return (
    <div className="container">
      <header>
        <h1>{blog && blog.title}</h1>
      </header>

      <div>
        {blog && blog.content}
      </div>
    </div>
  );
}

export default Show;