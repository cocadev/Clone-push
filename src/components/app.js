import React from 'react';
import { Router, Location, Redirect } from '@reach/router';
import ScrollToTopBtn from './menu/ScrollToTop';
import Header from './menu/header';
import Home from './pages/home';
import Explore from './pages/explore';
import RankingRedux from './pages/RankingRedux';
import Auction from './pages/Auction';
import Helpcenter from './pages/helpcenter';
import Colection from './pages/colection';
import ItemDetailRedux from './pages/ItemDetailRedux';
import Author from './pages/Author';
import Wallet from './pages/wallet';
import Login from './pages/login';
import Register from './pages/register';
import Price from './pages/price';
import Works from './pages/works';
import News from './pages/news';
import NewsSingle from './pages/newsSingle';
import Create from './pages/create';
import Createoption from './pages/createOptions';
import Activity from './pages/activity';
import Contact from './pages/contact';

import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    scroll-behavior: unset;
  }
`;

export const ScrollTop = ({ children, location }) => {
  React.useEffect(() => window.scrollTo(0,0), [location])
  return children
}

const PosedRouter = ({ children }) => (
  <Location>
    {({ location }) => (
      <div id='routerhang'>
        <div key={location.key}>
          <Router location={location}>
            {children}
          </Router>
        </div>
      </div>
    )}
  </Location>
);

const app= () => (
  <div className="wraper">
  <GlobalStyles />
    <Header/>
      <PosedRouter>
      <ScrollTop path="/">
        <Home exact path="/">
          <Redirect to="/home" />
        </Home>
        <Explore path="/explore" />
        <Colection path="/colection/:collectionId" />
        <Auction path="/Auction" />
        <ItemDetailRedux path="/ItemDetail/:nftId" />
        <Helpcenter path="/helpcenter" />
        <Author path="/Author/:authorId" />
        <Works path="/works" />
        <Wallet path="/wallet" />
        <Login path="/login" />
        <Register path="/register" />
        <Contact path="/contact" />
        <Activity path="/activity" />
        <RankingRedux path="/rangking" />

        <Price path="/price" />
        <News path="/news" />
        <NewsSingle path="/news/:postId" />
        <Create path="/create" />
        <Createoption path="/createOptions" />

        </ScrollTop>
      </PosedRouter>
    <ScrollToTopBtn />
  </div>
);
export default app;