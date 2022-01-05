import React, { useState, useEffect } from 'react';
import Footer from '../components/footer';
import { createGlobalStyle } from 'styled-components';
import { useMoralis, useMoralisWeb3Api } from 'react-moralis';
import { ALL_NFT_CONTRACT_ADDRESS } from '../components/constants/keys';
import NftCard from '../components/NftCard';
import { SmallLoading } from '../components/loading';
import { navigate } from '@reach/router';
import clsx from 'clsx';
import ProfileFilterBar from '../components/ProfileFilterBar';

const GlobalStyles = createGlobalStyle`
  header#myHeader {
    background: #fff!important;
    box-shadow: rgb(4 17 29 / 25%) 0px 0px 8px 0px;
  }
  .navbar .menu-line, .navbar .menu-line1, .navbar .menu-line2{
    background: #000!important;
  }
  header#myHeader.navbar.white .btn, .navbar.white a, .navbar.sticky.white a, .dropdown{
    color: #000;
  }
  @media only screen and (max-width: 1199px) {
    .navbar{
      background: #403f83;
    }
    .navbar .menu-line, .navbar .menu-line1, .navbar .menu-line2{
      background: #000;
    }
    .item-dropdown .dropdown a{
      color: #000 !important;
    }
  }
`;

const ProfilePage = () => {

  const { user } = useMoralis();
  const [isLoading, setIsLoading] = useState(false);
  const [allData, setAllData] = useState([]);
  const [isActive, setIsActive] = useState(1);
  const [isBig, setIsBig] = useState(false);

  const Web3Api = useMoralisWeb3Api();
  const ethAddress = user?.get('ethAddress')
  const myaddress = ethAddress ? (ethAddress.substr(0, 6) + '...' + ethAddress.substr(-4)) : '-';

  const username = user?.get('username') || 'Unnamed';
  const avatar = user?.get('avatar') || 'https://storage.googleapis.com/opensea-static/opensea-profile/15.png'
  const banner = user?.get('banner')

  useEffect(() => {
    setTimeout(() => {
      Web3Api && onFetch()
    }, 1000)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const onFetch = async () => {
    setIsLoading(true)
    const c1 = { address: ALL_NFT_CONTRACT_ADDRESS, chain: "mumbai", };
    const nftOwners = await Web3Api.token.getNFTOwners(c1);
    console.log('nftOwners', nftOwners)
    setAllData(nftOwners?.result)
    // setAllData(nftOwners?.result.filter(item => item.owner_of === '0xBc6f27549a7f3ad4d88C9EFE83e6732b024DFe19'.toLowerCase()))

    setIsLoading(false)
  }

  return (
    <div>
      <GlobalStyles />

      <section
        className='jumbotron breadcumb no-bg mt-90'
        style={banner ? { backgroundImage: `url(${banner})`, backgroundPosition: 'center' } : {background: '#e5e8eb'}}
      >
        <div className='mainbreadcumb' style={{ height: 60 }}>

        </div>
      </section>
      <div className='share-btn'>
        <span aria-hidden="true" className="social_share"></span>
        <span aria-hidden="true" className="icon_cog" onClick={()=>navigate('/settings')}></span>
      </div>
      <section>

        <div className='d-center'>
          <img className='profile-avatar' src={avatar} alt='avatar' /><br />
          <h2>{username}</h2>
          <div style={{ marginTop: -7 }}>{myaddress}</div>
          <div>Joined December 2021</div>
        </div>

        <div className='profile-header'>
          <div className={clsx('profile-header-btn', isActive === 1 && 'pbtn-active')} onClick={() => setIsActive(1)}><i className="wm icon_wallet"></i> &nbsp;&nbsp;&nbsp;Collected&nbsp;&nbsp;&nbsp;34</div>
          <div className={clsx('profile-header-btn', isActive === 2 && 'pbtn-active')} onClick={() => setIsActive(2)}><i className="wm icon_bag_alt"></i>&nbsp;&nbsp;&nbsp;Created&nbsp;&nbsp;&nbsp;0</div>
          <div className={clsx('profile-header-btn', isActive === 3 && 'pbtn-active')} onClick={() => setIsActive(3)}><i className="wm icon_heart_alt"></i>&nbsp;&nbsp;&nbsp;Favorited&nbsp;&nbsp;&nbsp;0</div>
          <div className={clsx('profile-header-btn', isActive === 4 && 'pbtn-active')} onClick={() => setIsActive(4)}><i className="wm icon_search"></i>&nbsp;&nbsp;&nbsp;Hidden&nbsp;&nbsp;&nbsp;0</div>
          <div className={clsx('profile-header-btn', isActive === 5 && 'pbtn-active')} onClick={() => setIsActive(5)}><i className="wm icon_clock_alt"></i>&nbsp;&nbsp;&nbsp;Activity&nbsp;&nbsp;&nbsp;0</div>
          <div className={clsx('profile-header-btn', isActive === 6 && 'pbtn-active')} onClick={() => setIsActive(6)}><i className="wm icon_tag_alt"></i>&nbsp;&nbsp;&nbsp;Offers&nbsp;&nbsp;&nbsp;0</div>
        </div>

        <ProfileFilterBar 
          isBig={isBig}
          onSetBig={(x)=>setIsBig(x)}
        />

        {isLoading && <SmallLoading />}

        <div className='flex flex-wrap center mt-50' style={{ alignItems: 'center', justifyContent: 'center' }}>
          {
            isActive === 1 && allData.map((item, index) => {
              if (!item.metadata) {
                return null
              }
              const { name, image, price } = JSON.parse(item.metadata)
              return (
                <div key={index} onClick={() => navigate(`/metasaltTokens/${item.token_id}`)}>
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
                    mine={true}
                    big={isBig}
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

export default ProfilePage;