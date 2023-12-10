import Footer from "./components/Footer.jsx";
import Landing from "./components/Landing.jsx";
import Nav from "./components/Nav.jsx";
import Search from "./components/Search.jsx";
import Trending from "./components/Trending.jsx";
import AnimeInfo from "./components/pages/AnimeInfo.jsx";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function App() {
  return (
    <Router>
      <>
        <Nav />
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <>
                <Landing />
                <Trending />
                <Search />
              </>
            )}
          />
          <Route path="/animeinfo/:id" render={() => <AnimeInfo />} />
        </Switch>
        <Footer />
      </>
    </Router>
  );
}

export default App;
