import React from "react";
import {Link} from "react-router-dom";

function PictureCardComponent(props) {
    return (
        <div className="card m-3 text-center picture-card-component">
            <img src={props.picture.imgSrc} className="card-img-top" alt="...Image..."/>
            <div className="card-body">
                <h5 className="card-title">{props.picture.name}</h5>
                <p className="card-text"><Link className="text-reset" to={`/search/${props.picture.authorName}`}>{props.picture.authorName}</Link></p>
                <p className="card-text">{props.picture.year}</p>
            </div>
            <Link to={`/gallery/${props.picture.id}`} className="btn btn-light">Докладніше</Link>
        </div>
    );
}

export default PictureCardComponent;