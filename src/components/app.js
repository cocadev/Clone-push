import React, { useEffect } from 'react';
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
import Auth from './pages/auth';
import AllNFTs from './pages/allnfts';


import { useMoralis } from 'react-moralis';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { createGlobalStyle } from 'styled-components';
import Minter from './pages/Minter';
import ProfilePage from './pages/profile';
import NftDetail from './pages/ItemDetail';
import Resources from './pages/resources';

const GlobalStyles = createGlobalStyle`
  :root {
    scroll-behavior: unset;
  }
`;

export const ScrollTop = ({ children, location }) => {
  React.useEffect(() => window.scrollTo(0, 0), [location])
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

const App = () => {
  const { isWeb3Enabled, enableWeb3, isAuthenticated, isWeb3EnableLoading } = useMoralis();

  useEffect(() => {
    if (isAuthenticated && !isWeb3Enabled && !isWeb3EnableLoading) enableWeb3();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated, isWeb3Enabled]);

  return (
    <div className="wraper">
      <GlobalStyles />
      <Header />
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
          <Resources path="/resources" />
          <Author path="/Author/:authorId" />
          <Works path="/works" />
          <Wallet path="/wallet" />
          <Login path="/login" />
          <Register path="/register" />
          <Contact path="/contact" />
          <Activity path="/activity" />
          <RankingRedux path="/rangking" />
          <Minter path="/minter" />
          <Auth path="/auth" />
          <AllNFTs path="/allnfts" />
          <NftDetail path="/allnfts/:id" />

          <Price path="/price" />
          <News path="/news" />
          <NewsSingle path="/news/:postId" />
          <Create path="/create" />
          <Createoption path="/createOptions" />
          <ProfilePage path="/profile" />

        </ScrollTop>
      </PosedRouter>
      <ScrollToTopBtn />
      <ToastContainer />
    </div>
  )
};

export default App;