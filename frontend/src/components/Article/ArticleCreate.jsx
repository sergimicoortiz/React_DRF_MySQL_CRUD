import React, { useState, useEffect } from "react";
import ArticleForm from "./ArticleForm";

export default function ArticleCreate() {

    const [formData, setFromData] = useState({});

    useEffect(() => {
        console.log(formData)
    }, [formData]);

    return (
        <div>
            <p>ARTICLE CREATE</p>
            <ArticleForm SendData={setFromData} />
        </div>
    )
}