import {Link, useLocation} from 'react-router-dom'
import React, {useState} from "react";

function HeaderComponent() {

    let homeButton = <a id="home-button" className="nav-link" aria-current="page" href="/">Головна</a>;

    let galleryButton = <a id="gallery-button" className="nav-link" href="/gallery">Галерея</a>;

    let path = useLocation().pathname;

    if (path === '/'){
        homeButton = <a id="home-button" className="nav-link active" aria-current="page" href="/">Головна</a>;
    } else if (path === '/gallery'){
        galleryButton = <a id="gallery-button" className="nav-link active" href="/gallery">Галерея</a>;
    }

    const [searchString, setSearchString] = useState("")

    return (
        <div>
            <nav className="navbar navbar-expand-md navbar-light fixed-top">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">Gallery</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false"
                            aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <ul className="navbar-nav me-auto mb-2 mb-md-0">
                            <li className="nav-item">{homeButton}</li>
                            <li className="nav-item">{galleryButton}</li>
                        </ul>
                        <div className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Введіть запит..." aria-label="Search" onChange={event => setSearchString(event.target.value)}/>
                            <Link className="btn btn-outline-success" to={`/search/${searchString}`}>Пошук</Link>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default HeaderComponent;