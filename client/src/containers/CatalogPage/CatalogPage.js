import React from "react";
import {useDispatch, useSelector} from "react-redux";
import PictureCardComponent from "../../components/PictureCardComponent/PictureCardComponent";

function CatalogPage() {
    const dispatch = useDispatch()
    const {pictures} = useSelector(store => store.pictures)

    return (
        <div className={"row ms-5 me-5"}>
            <h1>Галерея</h1>
            <h3>Картин в галереї - {pictures.length}</h3>
            {
                pictures.length ? pictures.map(picture => {
                    return (
                        <div className={"col-12 col-sm-6 col-md-4 col-lg-3 col-xxl-2"} key={picture.id}>
                            <PictureCardComponent picture={picture}/>
                        </div>
                    )
                }) : <></>
            }
        </div>
    );
}

export default CatalogPage;