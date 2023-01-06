import React from "react";
import './Header.css';
import { useNavigate } from 'react-router-dom';

export default function Header() {
    const navigate = useNavigate();
    const redirects = {
        home: () => navigate('/home'),
        article: () => navigate('/article'),
    }//redirects

    return (
        <div className="header">
            <button onClick={redirects.home}>HOME</button>
            <button onClick={redirects.article}>ARTICLE</button>
        </div>
    )
}