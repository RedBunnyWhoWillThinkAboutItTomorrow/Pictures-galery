import './App.css';
import {Route, Switch} from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import React, {useEffect} from "react";
import CatalogPage from "./containers/CatalogPage/CatalogPage";
import HeaderComponent from "./components/HeaderComponent/HeaderComponent";
import SearchPage from "./containers/SearchPage/SearchPage";
import {useDispatch} from "react-redux";
import {getPictures} from "./store/actions/pictures";
import NotFoundPage from "./components/NotFoundPage/NotFoundPage";
import PicturePage from "./containers/PicturePage/PicturePage";

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPictures())
    }, [])

  return (
      <div className="d-flex flex-column h-100">

          <HeaderComponent/>

          <div className="flex-shrink-0 mt-5 pt-4">
                  <Switch>
                      <Route exact path="/">
                          <HomePage />
                      </Route>
                      <Route exact path="/gallery">
                          <CatalogPage />
                      </Route>
                      <Route exact path="/search/:searchString">
                          <SearchPage />
                      </Route>
                      <Route exact path="/gallery/:pictureId">
                          <PicturePage />
                      </Route>
                      <Route>
                          <NotFoundPage />
                      </Route>
                  </Switch>
          </div>

      </div>
  );
}

export default App;