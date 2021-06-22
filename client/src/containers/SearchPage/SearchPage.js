import {useParams} from "react-router-dom";
import React from "react";
import {useSelector} from "react-redux";
import PictureCardComponent from "../../components/PictureCardComponent/PictureCardComponent";

function SearchPage() {

    const searchString = useParams().searchString.toLowerCase();

    const {pictures} = useSelector(store => store.pictures);

    const picturesResult = pictures.filter(picture => picture.name.toLowerCase().includes(searchString)
        || picture.authorName.toLowerCase().includes(searchString) || picture.genre.toLowerCase().includes(searchString)
        || picture.year.toLowerCase().includes(searchString));

    return (
        <div className={"row ms-5 me-5"}>
            <h1 id="search-result-header">По запиту "{searchString}" знайдено картин - {picturesResult.length}</h1>
            <h3>Результати пошуку:</h3>
            {
                picturesResult.length ? picturesResult.map(picture => {
                        return <div className={"col-12 col-sm-6 col-md-4 col-lg-3 col-xxl-2"} key={picture.id}>
                            <PictureCardComponent picture={picture}/>
                        </div>
                }) : <></>
            }
        </div>
    );
}

export default SearchPage;