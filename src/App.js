import Footer from './components/Footer.jsx';
import Landing from './components/Landing.jsx';
import Nav from './components/Nav.jsx';
import Search from './components/Search.jsx';
import Trending from './components/Trending.jsx';
import AnimeInfo from './components/AnimeInfo.jsx';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';



function App() {
  return (
    <Router>
      <>
        <Nav />
        <Landing />
        <Trending />
        <Switch>
          <Route exact path="/AnimeInfo" render={() => <AnimeInfo/>} />
        </Switch>
        <Search />
        <Footer />
      </>
    </Router>
  );
}

export default App;
