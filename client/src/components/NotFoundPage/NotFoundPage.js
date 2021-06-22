import React from "react";
import {Link} from "react-router-dom";

function NotFoundPage() {
    return (
        <div className="row ms-5 me-5">
            <h1 id="not-found-header">Сторінку не знайдено</h1>
            <h6><Link className="text-reset" to="/library">Повернутись до галереї</Link></h6>
            <img src="/images/notFoundImg.jpg" className="mt-3 col-sm-10 col-md-7 col-lg-3" alt=""/>
        </div>
    );
}

export default NotFoundPage;