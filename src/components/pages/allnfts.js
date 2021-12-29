import React, { useState, useEffect } from 'react';
import Footer from '../components/footer';
import { createGlobalStyle } from 'styled-components';
import { useMoralisWeb3Api } from 'react-moralis';
import { ALL_NFT_CONTRACT_ADDRESS } from '../components/constants/keys';
import NftCard from '../components/NftCard';

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
    color: rgba(255, 255, 255, .5);;
  }
  header#myHeader .logo .d-block{
    display: none !important;
  }
  header#myHeader .logo .d-none{
    display: block !important;
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

const AllNFTs = () => {

  const [isLoading, setIsLoading] = useState(false);
  const [allData, setAllData] = useState([]);
  const Web3Api = useMoralisWeb3Api();

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
    setAllData(nftOwners?.result)
    setIsLoading(false)
  }

  return (
    <div>
      <GlobalStyles />

      <section className='jumbotron breadcumb no-bg' style={{ backgroundImage: `url(${'./img/background/subheader.jpg'})` }}>
        <div className='mainbreadcumb'>
          <div className='container'>
            <div className='row m-10-hor'>
              <div className='col-12'>
                <h1 className='text-center'>All NFTs</h1>
              </div>
            </div>
          </div>
        </div>
      </section>
      {isLoading && <div className='d-center mt-10'>Loading...</div>}
      <section className='container'>
        <div className='flex flex-wrap center mt-30' style={{ alignItems: 'center', justifyContent: 'center' }}>
          {
            allData.map((item, index) => {
              if(!item.metadata){
                return null
              }
              const { name, image, price } = JSON.parse(item.metadata)
              return (
                <div key={index}>
                  <NftCard
                    nft={{
                      preview_image_url: image,
                      title: name,
                      price: price,
                      priceover: '',
                      status: '',
                      likes: '',
                      nft_link: '',
                      id: ''
                    }}
                  />
                </div>)
            })
          }
        </div>
      </section>
      <Footer />
    </div>
  )
};

export default AllNFTs;