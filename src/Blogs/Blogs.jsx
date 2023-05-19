import { useEffect, useState } from "react";
import QusAns from "./QusAns";
import '../Pages/Login/Login.css'

const Blogs = () => {
    const [blogs,setBlogs] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/blog")
          .then(res => res.json())
          .then(data => setBlogs(data));
      }, [])
    return (

        <div className="grid md:grid-cols-2 justify-center gap-5 back background-img p-5">
            {
                blogs.map(blog =><QusAns
                key={blog._id}
                blog={blog}
                ></QusAns>)
            }
        </div>
    );
};

export default Blogs;