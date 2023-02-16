import React from "react";
import {render} from 'react-dom';
import App from "./App";
import getFacts from "./facts";

getFacts().then(fatcs=> {
    render(<App fatcs={fatcs}/>, document.querySelector('#root'))
})

