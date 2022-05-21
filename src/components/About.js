import React from "react";
import blogData from "../data/blog";

function About({ image, about = blogData.about }) {
    return (
        <aside>
            {image ? <img src={blogData.image} alt="blog logo" /> : <img src="https://via.placeholder.com/215" alt="blog logo" />}
            <p>{about}</p>
        </aside>
    )
}




export default About;