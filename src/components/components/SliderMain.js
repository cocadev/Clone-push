import React from 'react';
import Reveal from 'react-awesome-reveal';
import { keyframes } from "@emotion/react";
import { navigate } from '@reach/router';

const fadeInUp = keyframes`
  0% {
    opacity: 0;
    -webkit-transform: translateY(40px);
    transform: translateY(40px);
  }
  100% {
    opacity: 1;
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
`;
const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const slidermain = () => (
  <div className="container">
    <div className="row align-items-center">
      <div className="col-md-6">
        <div className="spacer-single"></div>
        <Reveal className='onStep' keyframes={fadeInUp} delay={0} duration={600} triggerOnce>
          <h6 className=""><span className="text-uppercase color">create buy sell</span></h6>
        </Reveal>
        <div className="spacer-10"></div>
        <Reveal className='onStep' keyframes={fadeInUp} delay={300} duration={600} triggerOnce>
          <h1 className="">Real World NFTs in the Metaverse</h1>
        </Reveal>
        <Reveal className='onStep' keyframes={fadeInUp} delay={600} duration={600} triggerOnce>
          <p className=" lead">
            Go beyond digital art. Upload a pic of your real world object, add a description, and prove ownership. Mint an NFT on the blockchain in seconds. Then, promote, buy, or sell using METASALT tokens. Connect social media, grow your fanbase, and make money. 
          </p>
        </Reveal>
        <div className="spacer-10"></div>
        <Reveal className='onStep' keyframes={fadeInUp} delay={800} duration={900} triggerOnce>
          <div className='flex row'>
            <span onClick={() => window.open("/explore")} className="btn-main lead">Explore</span>
            <span onClick={() => navigate('/create')} className="btn-main ml-10">Create</span>
          </div>
          <div className="mb-sm-30"></div>
        </Reveal>
      </div>
      <div className="col-md-6 xs-hide">
        <Reveal className='onStep' keyframes={fadeIn} delay={900} duration={1500} triggerOnce>
          <img src="./img/misc/nft.png" className="lazy img-fluid" alt="" />
        </Reveal>
      </div>
    </div>
  </div>
);
export default slidermain;