import React, { useEffect } from 'react';
import { Router, Location, Redirect } from '@reach/router';
import ScrollToTopBtn from './menu/ScrollToTop';
import Header from './menu/header';
import Home from './pages/home';
import Explore from './pages/explore';
import Ranking from './pages/ranking';
import Helpcenter from './pages/helpcenter';
import Colection from './pages/colection';
import ItemDetailRedux from './pages/ItemDetailRedux';
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
import LiveAuction from './pages/liveAuction';
import SettingsPage from './pages/settings';
import Finance from './pages/finance';
import Fiat from './pages/fiat';
import Avatar from './pages/avatar';
import Forum from './pages/forum';
import SubmitTicket from './pages/submitTicket';
import Collections from './pages/collections';
import Collection from './pages/collection';

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
          <ItemDetailRedux path="/ItemDetail/:nftId" />
          <Helpcenter path="/helpcenter" />
          <Resources path="/resources" />
          <Works path="/works" />
          <Wallet path="/wallet" />
          <Login path="/login" />
          <Register path="/register" />
          <Contact path="/contact" />
          <Activity path="/activity" />
          <Ranking path="/ranking" />
          <Minter path="/minter" />
          <Auth path="/auth" />
          <LiveAuction path="/live" />
          <SettingsPage path="/settings" />
          <Finance path="/finance" />
          <Fiat path="/fiat" />
          <Avatar path="/avatar" />
          <Forum path="/forum" />
          <SubmitTicket path="/submitaticket" />
          <Collections path="/collections" />
          <Collection path="/collection/:id" />

          <AllNFTs path="/metasaltTokens" />
          <NftDetail path="/metasaltTokens/:id" />

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