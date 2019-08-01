import React, {useEffect, useState} from "react";
import Axios from "axios";
import { Link } from "react-router-dom";

function Index(){
    const [blogs, setBlogs] = useState([]);

    useEffect(()=>{
        Axios.get("/api/blogs")
        .then(result => setBlogs(result.data))
        .catch(err => console.error(err));
    },[]);

    return (
        <div className="container">
            <header>
                <h1>All Blogs</h1>
            </header>
            <div>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Status</th>
                            <th>Author</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {blogs.map(blog => (
                            <tr key={blog._id}>
                                <td>
                                    <Link to={`/blogs/${blog._id}`}>{blog.title}</Link>
                                </td>
                                <td>{blog.status}</td>
                                <td>{blog.author && blog.author.firstName} {blog.author && blog.author.lastName}</td>
                                <td>
                                    <Link to={`/blogs/${blog._id}/edit`}>edit</Link>|
                                    <Link to={`/blogs/${blog._id}/destroy`}>delete</Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

        </div>
    );
}

export default Index;