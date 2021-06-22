import React from "react";

function HomePage() {
    return (
        <div className="row ms-5 me-5">
            <h1>Gallery</h1>
            <img src="/images/homeImg.jpg" className="col-sm-10 col-md-6 mt-3 mb-3" alt=""/>
            <p className="fs-3">Програму розроблено в рамках курсового проекту з використанням бібліотеки React.</p>
        </div>
    );
}

export default HomePage;