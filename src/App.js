import harvardArt from "./data/harvardArt";
import GalleryNavigation from "./components/GalleryNavigation/index";
import GalleryView from "./components/GalleryView/index";
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <div className="page-wrapper">
      <BrowserRouter>
        <GalleryNavigation galleries={harvardArt.records} />
        <Route path="/galleries/:galleryId">
          <GalleryView galleries={harvardArt.records} />
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
