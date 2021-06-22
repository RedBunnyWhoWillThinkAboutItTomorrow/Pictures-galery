module.exports = {
    url: 'http://localhost:3000/',
    elements: {
        searchField: {
            selector: 'input[type=search]'
        },
        searchButton: {
            selector: 'a.btn.btn-outline-success'
        },
        homeButton:{
            selector: 'a#home-button'
        },
        homeButtonActive:{
            selector: 'a#home-button.active'
        },
        galleryButton:{
            selector: 'a#gallery-button'
        },
        galleryButtonActive:{
            selector: 'a#gallery-button.active'
        },
        pictureInfoButton:{
            selector: 'a.btn.btn-light'
        },
        searchResultHeader:{
            selector: 'h1#search-result-header'
        },
        notFoundHeader:{
            selector: 'h1#not-found-header'
        },
        itemImg:{
            selector: 'img.img-thumbnail'
        }
    }
}
