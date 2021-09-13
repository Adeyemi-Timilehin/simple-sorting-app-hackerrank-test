import React, { useState } from 'react';
import './App.css';
// import 'h8k-components';

import Articles from './components/Articles';

const title = "Sorting Articles";

function App({articles}) {

    const [myarticle, setArticle]=useState(articles);
    function handleVoted(){
     
        const sorted = [...articles].sort((a, b) => b.upvotes - a.upvotes);
         setArticle(sorted)
    }
    function handledate(){
        const sorted = [...articles].sort( (a, b) => a.date - b.date );
        setArticle(sorted);
    }
    return (
        <div className="App">
            <h1>{title}</h1>
            <div className="layout-row align-items-center justify-content-center my-20 navigation">
                <label className="form-hint mb-0 text-uppercase font-weight-light">Sort By</label>
                <button onClick={handleVoted} data-testid="most-upvoted-link" className="small">Most Upvoted</button>
                <button onClick={handledate} data-testid="most-recent-link" className="small">Most Recent</button>
            </div>
            <Articles articles={myarticle} />
        </div>
    );

}

export default App;
