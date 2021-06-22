module.exports = {
    'Header menu test': function (browser) {
        let gallery = browser.page.gallery();

        gallery.navigate()
            .assert.visible('@homeButtonActive')
            .assert.visible('@galleryButton')
            .assert.visible('@searchField')
            .assert.visible('@searchButton')
    },

    'Header highlighting buttons test': function (browser) {
        let gallery = browser.page.gallery();

        gallery.navigate()
            .assert.visible('@homeButtonActive')
            .assert.visible('@galleryButton')
            .click('@galleryButton')
            .waitForElementPresent('@galleryButtonActive')
            .assert.visible('@galleryButtonActive')
            .assert.visible('@homeButton')
            .click('@pictureInfoButton')
            .waitForElementPresent('@galleryButton')
            .assert.visible('@galleryButton')
            .assert.visible('@homeButton')
    },

    'Search test': function (browser) {
        let gallery = browser.page.gallery();

        gallery.navigate()
            .assert.visible('@searchField')
            .assert.visible('@searchButton')
            .setValue('@searchField', 'Эдуард Мане')
            .click('@searchButton')
            .waitForElementPresent('@searchResultHeader')
            .assert.containsText('@searchResultHeader', 'эдуард мане')
    },

    'Not found test': function (browser) {
        let gallery = browser.page.gallery();

        gallery.url = gallery.url + 'abrakadabra';

        gallery.navigate()
            .assert.visible('@notFoundHeader');
    },

    'Id navigation test': function (browser) {
        let gallery = browser.page.gallery();

        gallery.navigate()
            .click('@galleryButton')
            .waitForElementPresent('@pictureInfoButton')
            .click('@pictureInfoButton')
            .waitForElementPresent('@itemImg')
            .assert.visible('@itemImg')
    },
}
