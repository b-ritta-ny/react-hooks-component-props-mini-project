import React from "react";
import blogData from "../data/blog";
import Article from "./Article";



function ArticleList() {
    const blogPosts = blogData.posts.map(post => <span key={post.id}>{post}</span>);
    return (
        <main>
            {Article(blogPosts)}
            {Article(blogPosts)}
            {Article(blogPosts)}
        </main>
    )
}

export default ArticleList;
