import React from "react";
import { useParams } from "react-router-dom";

export default function ArticleUpdate() {
    const { id } = useParams()

    return (
        <div>
            <p>UPDATE</p>
            <p>ID: {id}</p>
        </div>
    )
}