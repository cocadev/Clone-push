import React, { useState } from 'react';
import Footer from '../components/footer';
import { createGlobalStyle } from 'styled-components';
import clsx from 'clsx';

const GlobalStyles = createGlobalStyle`
  header#myHeader.navbar.sticky.white {
    background: #403f83;
    border-bottom: solid 1px #403f83;
  }
  header#myHeader.navbar .search #quick_search{
    color: #fff;
    background: rgba(255, 255, 255, .1);
  }
  header#myHeader.navbar.white .btn, .navbar.white a, .navbar.sticky.white a{
    color: #fff;
  }
  header#myHeader .dropdown-toggle::after{
    color: rgba(255, 255, 255, .5);
  }
  header#myHeader .logo .d-block{
    display: none !important;
  }
  header#myHeader .logo .d-none{
    display: block !important;
  }
  .demo-icon-wrap-s2 span {
    color: #fff;
  }
  @media only screen and (max-width: 1199px) {
    .navbar{
      background: #403f83;
    }
    .navbar .menu-line, .navbar .menu-line1, .navbar .menu-line2{
      background: #fff;
    }
    .item-dropdown .dropdown a{
      color: #fff !important;
    }
  }
`;

const Resources = () => {

  const [active, setActive] = useState(1);

  return (
    <div>
      <GlobalStyles />

      <section className='jumbotron breadcumb no-bg' style={{ backgroundImage: `url(${'./img/background/subheader.jpg'})` }}>
        <div className='mainbreadcumb'>
          <div className='container'>
            <div className='row'>
              <div className="col-md-8 offset-md-2 text-center">
                <h1>Resources</h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='container'>
        <div className="row">
          <div className='col-md-12 mt-3'>
            <div className='row'>
              <div className='col-md-3 mt-3'>
                <h3>Articles in this section</h3>
                <div>
                  <p className={clsx('resource-btn', active === 1 && 'border-active')} onClick={()=>setActive(1)}>How do I create an Metasalt account?</p>
                  <p className={clsx('resource-btn', active === 2 && 'border-active')} onClick={()=>setActive(2)}>Which blockchains does Metasalt support?</p>
                  <p className={clsx('resource-btn', active === 3 && 'border-active')} onClick={()=>setActive(3)}>What is a crypto?</p>
                  <p className={clsx('resource-btn', active === 4 && 'border-active')} onClick={()=>setActive(4)}>What crypto wallets can I use with Metasalt?</p>
                </div>
              </div>
              <div className='col-md-9 mt-3'>
                {active === 1 && <ResourceItem1 />}
                {active === 2 && <ResourceItem2 />}
                {active === 3 && <ResourceItem3 />}
                {active === 4 && <ResourceItem4 />}
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
};

function ResourceItem1(){
  return(
    <div>
      <h2>How do I create an Metasalt account?</h2>
      This guide explains the three things you'll need in place to open your account and start buying or selling NFTs on OpenSea.
    </div>
  )
}

function ResourceItem2(){
  return(
    <div>
      <h2>Which blockchains does Metasalt support?</h2>
      You can get ETH, the digital currency that fuels transactions on the Ethereum blockchain, from a digital currency exchange like Coinbase. You will need ETH to "mint" an NFT, purchase an NFT, and for gas fees to complete transactions. Gas fees are a bit of a tricky concept, but we simplify the basics here.  If you’re interested in the technical details of gas, read Jeff Coleman’s Stack Exchange post. 
    </div>
  )
}

function ResourceItem3(){
  return(
    <div>
      <h2>What is a crypto?</h2>
      A crypto wallet, such as MetaMask, stores your ETH and processes transactions on the Ethereum blockchain. A unique wallet address will be generated and you will use this address to complete transactions. 
    </div>
  )
}

function ResourceItem4(){
  return(
    <div>
      <h2>What crypto wallets can I use with Metasalt?</h2>
      Watch our tutorial to learn how to install a crypto wallet to connect with OpenSea. <br/><br/>

      All transactions connected to your wallet address can be found on etherscan.io. It's always a good idea to check Etherscan after completing each transaction.<br/><br/>

      Why do you need a wallet before buying and selling on Metasalt? <br/><br/>

      <img src='https://support.opensea.io/hc/article_attachments/4412872829075/Screen_Shot_2021-12-16_at_5.36.21_AM.png' alt='' style={{ width: 400}}/>
    </div>
  )
}

export default Resources;
