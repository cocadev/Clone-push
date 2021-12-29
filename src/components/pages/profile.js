import React, { useState } from "react";
import Footer from '../components/footer';
import { createGlobalStyle } from 'styled-components';
import { useMoralis } from "react-moralis";

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
  .mainside{
    .connect-wal{
      display: none;
    }
    .logout{
      display: flex;
      align-items: center;
    }
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

export const ProfilePage = () => {

  const { user, account } = useMoralis();
  const [email, setEmail] = useState();

  return (
    <div>
      <GlobalStyles />

      <section className='jumbotron breadcumb no-bg' style={{ backgroundImage: `url(${'./img/background/subheader.jpg'})` }}>
        <div className='mainbreadcumb'>
          <div className='container'>
            <div className='row m-10-hor'>
              <div className='col-12'>
                <h1 className='text-center'>Edit Profile</h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='container'>

        <div className="row">
          <div className="col-lg-7 offset-lg-1 mb-5">
            <form id="form-create-item" className="form-border" action="#">
              <div className="field-set">

                <h5>Email</h5>
                <input type="text" name="emal" className="form-control" placeholder="Email" 
                  value={email || (user && user.get('email'))} 
                  onChange={(e) => setEmail(e.target.value)}
                />

                <div className="spacer-10"></div>

                <h5>Username</h5>
                <input type="text" name="item_price" id="item_price" className="form-control" placeholder="Username" disabled value={user && user.get('username')} />

                <div className="spacer-10"></div>

                <h5>Address</h5>
                <input type="text" name="item_royalties" id="item_royalties" className="form-control" placeholder="Address" disabled value={account} />

                <div className="spacer-10"></div>

                {/* <input type="button" id="submit" className="btn-main" value="Create Item"/> */}

                {!account && <div className="alert alert-danger" role="alert">
                  Sign up Metamask to transact and mint NFTs!
                </div>}
              </div>
            </form>
          </div>

          <div className="col-lg-3 col-sm-6 col-xs-12">
            <h5>Profile Image</h5>
            <div className="nft__item m-0">
              <div className="nft__item_wrap">
                <span>
                  <img src="./img/author/author-11.jpg" id="get_file_2" className="lazy nft__item_preview" alt="" />
                  <div className="btn-center mt-3">Upload</div>
                </span>
              </div>
            </div>
          </div>
        </div>

      </section>

      <Footer />
    </div>
  );
}