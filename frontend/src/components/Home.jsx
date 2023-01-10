import React from "react";
import { toast } from 'react-toastify';

export default function Home() {

    const toasterTest = () => toast.success("This is a test");

    return (
        <div>
            <h1>HOME</h1>
            <button onClick={toasterTest}>Toaster test</button>
        </div>
    )
}