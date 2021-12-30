import React, { useState, useEffect } from "react";
import Footer from '../components/footer';
import { createGlobalStyle } from 'styled-components';
import { ALL_NFT_CONTRACT_ADDRESS } from "../components/constants/keys";
import { useMoralisWeb3Api } from "react-moralis";
import { SmallLoading } from "../components/loading";

const GlobalStyles = createGlobalStyle`
  header#myHeader.navbar.white {
    background: #fff;
    border-bottom: solid 1px #dddddd;
  }
  @media only screen and (max-width: 1199px) {
    .navbar{
      background: #403f83;
    }
    .navbar .menu-line, .navbar .menu-line1, .navbar .menu-line2{
      background: #111;
    }
    .item-dropdown .dropdown a{
      color: #111 !important;
    }
  }
`;

const NftDetail = function () {

  const [openMenu, setOpenMenu] = useState(true);
  const [openMenu1, setOpenMenu1] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [myNFT, setMyNFT] = useState();

  const Web3Api = useMoralisWeb3Api();
  const pathname = window.location.pathname.split('/')

  useEffect(() => {
    setTimeout(() => {
      Web3Api && onFetch()
    }, 1000)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const onFetch = async () => {
    setIsLoading(true)
    const c1 = { address: ALL_NFT_CONTRACT_ADDRESS, chain: "mumbai" };
    const nftOwners = await Web3Api.token.getNFTOwners(c1);
    // console.log('nftOwners', nftOwners)
    setMyNFT(nftOwners?.result.find((item) => item.token_id === pathname[pathname.length - 1]))

    setIsLoading(false)
  }

  const handleBtnClick = () => {
    setOpenMenu(!openMenu);
    setOpenMenu1(false);
    document.getElementById("Mainbtn").classList.add("active");
    document.getElementById("Mainbtn1").classList.remove("active");
  };

  const handleBtnClick1 = () => {
    setOpenMenu1(!openMenu1);
    setOpenMenu(false);
    document.getElementById("Mainbtn1").classList.add("active");
    document.getElementById("Mainbtn").classList.remove("active");
  };

  const video = myNFT?.metadata && JSON.parse(myNFT?.metadata)?.video;
  const image = myNFT?.metadata && JSON.parse(myNFT?.metadata)?.image;
  const name = myNFT?.metadata && JSON.parse(myNFT?.metadata)?.name;
  const description = myNFT?.metadata && JSON.parse(myNFT?.metadata)?.description;
  const authorName = myNFT?.metadata && JSON.parse(myNFT?.metadata)?.authorName;

  return (
    <div>
      <GlobalStyles />

      <section className='container'>
        <div className='row mt-md-5 pt-md-4'>

          <div className="col-md-6 text-center">
            {!video && <img src={image} className="img-fluid img-rounded mb-sm-30" alt="" />}
            {isLoading && <SmallLoading />}
          </div>
          <div className="col-md-6">
            <div className="item_info">
              {/* Auctions ends in
              <div className="de_countdown">
                <Clock deadline="December, 30, 2021" />
              </div> */}
              <h2>{name || '-'}</h2>
              <p>Owned by <span style={{ color: '#2082e1'}}>{authorName || 'unknown'}</span></p>

              <div className="item_info_counts">
                <div className="item_info_type"><i className="fa fa-image"></i>Art</div>
                <div className="item_info_views"><i className="fa fa-eye"></i>250</div>
                <div className="item_info_like"><i className="fa fa-heart"></i>18</div>
              </div>
              <p>{description || '-'}</p>


              <div className="spacer-40"></div>

              <div className="de_tab">

                <ul className="de_nav">
                  <li id='Mainbtn' className="active"><span onClick={handleBtnClick}>Bids</span></li>
                  <li id='Mainbtn1' className=''><span onClick={handleBtnClick1}>History</span></li>
                </ul>

                <div className="de_tab_content">
                  {openMenu && (
                    <div className="tab-1 onStep fadeIn">
                      <div className="p_list">
                        <div className="p_list_info">
                          Bid accepted <b>0.005 ETH</b>
                          <span>by <b>Monica Lucas</b> at 6/15/2021, 3:20 AM</span>
                        </div>
                      </div>

                      <div className="p_list">
                        
                        <div className="p_list_info">
                          Bid <b>0.005 ETH</b>
                          <span>by <b>Mamie Barnett</b> at 6/14/2021, 5:40 AM</span>
                        </div>
                      </div>

                      <div className="p_list">
                       
                        <div className="p_list_info">
                          Bid <b>0.004 ETH</b>
                          <span>by <b>Nicholas Daniels</b> at 6/13/2021, 5:03 AM</span>
                        </div>
                      </div>

                      <div className="p_list">
                        
                        <div className="p_list_info">
                          Bid <b>0.003 ETH</b>
                          <span>by <b>Lori Hart</b> at 6/12/2021, 12:57 AM</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {openMenu1 && (
                    <div className="tab-2 onStep fadeIn">
                      <div className="p_list">
                   
                        <div className="p_list_info">
                          Bid <b>0.005 ETH</b>
                          <span>by <b>Jimmy Wright</b> at 6/14/2021, 6:40 AM</span>
                        </div>
                      </div>

                      <div className="p_list">
                       
                        <div className="p_list_info">
                          Bid accepted <b>0.005 ETH</b>
                          <span>by <b>Monica Lucas</b> at 6/15/2021, 3:20 AM</span>
                        </div>
                      </div>

                      <div className="p_list">
                       
                        <div className="p_list_info">
                          Bid <b>0.005 ETH</b>
                          <span>by <b>Mamie Barnett</b> at 6/14/2021, 5:40 AM</span>
                        </div>
                      </div>

                      <div className="p_list">
                       
                        <div className="p_list_info">
                          Bid <b>0.004 ETH</b>
                          <span>by <b>Nicholas Daniels</b> at 6/13/2021, 5:03 AM</span>
                        </div>
                      </div>

                      <div className="p_list">
                      
                        <div className="p_list_info">
                          Bid <b>0.003 ETH</b>
                          <span>by <b>Lori Hart</b> at 6/12/2021, 12:57 AM</span>
                        </div>
                      </div>
                    </div>
                  )}

                </div>

              </div>

            </div>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}
export default NftDetail;