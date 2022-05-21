import React from "react";
import ArticleList from "./ArticleList"

function Article({ title, date = "January 1, 1970", preview }) {
    // const title = ArticleList.title;
    // const date = ArticleList.date;
    // const preview = ArticleList.preview;
    return (
        <article>
            <h3>{title}</h3>
            <small>{date}</small>
            <p>{preview}</p>
        </article>
    )
}

export default Article;