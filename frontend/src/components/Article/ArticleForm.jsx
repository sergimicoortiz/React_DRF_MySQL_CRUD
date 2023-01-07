import React, { useState } from "react";
import propTypes from "prop-types";

export default function ArticleForm(SendData) {

    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')

    function handleChange(e) {
        switch (e.target.name) {
            case 'title':
                setTitle(e.target.value)
                break;
            case 'body':
                setBody(e.target.value)
                break;

            default:
                break;
        }
    }//handleChange

    function handleSubmit(e) {
        e.preventDefault();
        console.log({ title, body });
        SendData({ title, body });
    }//handleSubmit

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label >Title:
                    <input type="text" name="title" onChange={handleChange} />
                </label><br />
                <label >Body:
                    <textarea cols="30" rows="10" name="body" onChange={handleChange}></textarea>
                </label><br />
                <button type="submit">SEND</button>
            </form>
        </div>
    )
}

ArticleForm.propTypes = {
    SendData: propTypes.func.isRequired
}