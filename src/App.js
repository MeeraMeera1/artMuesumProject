import harvardArt from "./data/harvardArt";
import GalleryNavigation from "./components/GalleryNavigation/index";
import GalleryView from "./components/GalleryView/index";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="page-wrapper">
      <BrowserRouter>
        <GalleryNavigation galleries={harvardArt.records} />
        <Switch>
          <Route path="/" exact>
            <h2>Harvard Art Museum</h2>
            <p>
              LOOK, but DON'T TOUCH. Please select a Gallery in the navigation
              bar.
            </p>
          </Route>
          <Route path="/galleries/:galleryId">
            <GalleryView galleries={harvardArt.records} />
          </Route>
          <Route>
            <h2>Page Not Found</h2>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
