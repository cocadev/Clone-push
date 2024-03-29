import React from 'react';
import Footer from '../components/footer';
import { createGlobalStyle } from 'styled-components';
import { HOT_COLLECTIONS } from '../components/constants/hotCollections';
import CollectionCard from '../components/CollectionCard';
import { COLLECTION_LISTS } from '../components/constants/collectionLists';
import { redirectTo } from '@reach/router';

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

const Collection = () => {


  const pathname = window.location.pathname.split('/');
  const art = pathname[pathname.length - 1]

  const artCol = COLLECTION_LISTS.find((item) => item.category === art)
  if (!artCol) {
    redirectTo('/')
  }

  const { banner, title, description, category } = artCol;

  return (
    <div>
      <GlobalStyles />

      <section
        className='jumbotron breadcumb no-bg mt-90'
        style={banner ? { backgroundImage: `url(${banner})`, backgroundPosition: 'center' } : { background: '#e5e8eb' }}
      >
        <div className='mainbreadcumb' style={{ height: 60 }}>

        </div>
      </section>

      <section>

        <div className='d-center'>
          <h1>{title}</h1>
          <div className='text-center' style={{ maxWidth: 700 }}>{description}</div>
        </div>

        <h3 className='text-center mt-90'>Trending collections in {category}</h3>


        <div className='flex flex-wrap center mt-10' style={{ alignItems: 'center', justifyContent: 'center' }}>

          {
            HOT_COLLECTIONS
              .filter((item) => item.category === category)
              .map((item, index) => (
                <CollectionCard
                  key={index}
                  index={index + 1}
                  avatar={item.avatar_url}
                  banner={item.banner_url}
                  username={item.name}
                  uniqueId={item.unique_id}
                  collectionId={item.id}
                />
              ))}
        </div>
      </section>
      <Footer />
    </div>
  )
};

export default Collection;