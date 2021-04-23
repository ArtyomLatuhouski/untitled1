// outer
import React from 'react';
import './App.css';


// local
import Head_UI from "./components/head/Head_UI";
import BodySection from "./components/body/BodySection";


function App() {
    return (
        <div>
            <Head_UI/>
            <BodySection/>
        </div>
    );
}

export default App;
