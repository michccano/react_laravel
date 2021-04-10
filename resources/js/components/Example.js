import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import App from "./App.js"

function Example() {
    return (
        <>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </>
    );
}

export default Example;

if (document.getElementById('root')) {
    ReactDOM.render(<Example />, document.getElementById('root'));
}
