import React from "react";
import {Link, useParams} from "react-router-dom"
import {useSelector} from "react-redux";
import NotFoundPage from "../../components/NotFoundPage/NotFoundPage";

function PicturePage() {
    const {pictureId} = useParams()

    const {pictures} = useSelector(store => store.pictures)

    const selectedPicture = pictures.find(item => item.id === pictureId)

    return (
        <div className="ms-5 me-5">
        {
            selectedPicture ? <div>
                    <h1>{selectedPicture.name}</h1>
                    <img src={selectedPicture.imgSrc} className="img-thumbnail" alt="...Image..."/>
                    <div className="card mt-3 mb-3">

                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                <h5>Автор: <Link className="text-reset" to={`/search/${selectedPicture.authorName}`}>{selectedPicture.authorName}</Link></h5>
                            </li>
                            <li className="list-group-item">
                                <h6>Стиль: <Link className="text-reset" to={`/search/${selectedPicture.genre}`}>{selectedPicture.genre}</Link></h6>
                            </li>
                            <li className="list-group-item">
                                <h7>Рік: {selectedPicture.year}</h7>
                            </li>
                        </ul>
                        <div className="card-body">
                            <h5 className="card-title">Опис</h5>
                            <p className="card-text">{selectedPicture.description}</p>
                        </div>
                    </div>
                    <Link className="text-reset ms-5" to={`/gallery`}>Назад до галереї</Link>
                </div>
                 : <NotFoundPage/>
        }
        </div>
    );
}

export default PicturePage;