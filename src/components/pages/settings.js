import React, { useState } from "react";
import Footer from '../components/footer';
import { createGlobalStyle } from 'styled-components';
import { navigate } from "@reach/router";

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

const SettingsPage = () => {

  // const [file1, setFile1] = useState();
  const [baseFile1, setBaseFile1] = useState();

  // const [file2, setFile2] = useState();
  const [baseFile2, setBaseFile2] = useState();

  const onChangeFile1 = async (e) => {
    var file = e.target.files[0];
    if (file) {
      const base64 = await convertBase64(file);
      setBaseFile1(base64);
      // setFile1(file);
    }
  };

  const onChangeFile2 = async (e) => {
    var file = e.target.files[0];
    if (file) {
      const base64 = await convertBase64(file);
      setBaseFile2(base64);
      // setFile2(file);
    }
  };

  return (
    <div>
      <GlobalStyles />

      <section className='container mt-50'>

        <div className="row">
          <div className="col-lg-7 offset-lg-1 mb-5">
            <form id="form-create-item" className="form-border" action="#">
              <div className="field-set">
                <h1>Profile Settings</h1>

                <div className="spacer-single"></div>

                <h5>Username</h5>
                <input type="text" name="item_title" id="item_title" className="form-control" placeholder="Enter username" />

                <div className="spacer-10"></div>

                <h5>Bio</h5>
                <textarea data-autoresize name="item_desc" id="item_desc" className="form-control" placeholder="Tell the world your story!"></textarea>

                <div className="spacer-10"></div>

                <h5>Email Address</h5>
                <input type="number" name="item_price" id="item_price" className="form-control" placeholder="Enter email" />

                <div className="spacer-10"></div>

                <h5>Links</h5>
                <div>
                  <div className="profile-links">
                    <span aria-hidden="true" className="social_twitter"></span>
                    <input name="item_royalties" id="item_royalties" className="form-control" placeholder="YourTwitterHandle" />
                  </div>
                  <div className="profile-links" style={{ marginTop: -20 }}>
                    <span aria-hidden="true" className="social_instagram"></span>
                    <input name="item_royalties" id="item_royalties" className="form-control" placeholder="YourInstagramHandle" />
                  </div>
                  <div className="profile-links" style={{ marginTop: -20 }}>
                    <span aria-hidden="true" className="icon_archive_alt"></span>
                    <input name="item_royalties" id="item_royalties" className="form-control" placeholder="yoursite.io" />
                  </div>
                </div>

                <div className="spacer-10"></div>

                <h5>Wallet Address</h5>
                <input name="item_price" id="item_price" className="form-control" placeholder="Enter email" />

                <div className="spacer-10"></div>

                <input type="button" id="submit" className="btn-main" value="Save" />
              </div>
            </form>
          </div>

          <div className="col-lg-3 col-sm-6 col-xs-12">
            <h5 className="text-center mt-50">Profile Image</h5>

            <div className="d-create-file" style={{ border: 'none', marginTop: -46 }}>

              <div className='browse'>
                <img className='profile-avatar' type="button" id="get_file" style={{ marginTop: 0, }} src={baseFile1 || 'https://storage.googleapis.com/opensea-static/opensea-profile/15.png'} alt='avatar' /><br />
                <input id='upload_file' type="file" multiple onChange={onChangeFile1} style={{ cursor: 'pointer' }} />
              </div>

            </div>

            <h5 className="text-center">Profile Banner</h5>

            <div className="d-create-file" style={{ border: 'none', marginTop: -46 }}>

              <div className='browse'>
                <div id="get_file" className="profile-banner" style={{ backgroundImage: `url(${baseFile2})`}}>
                  <input id='upload_file' type="file" multiple onChange={onChangeFile2} style={{ cursor: 'pointer' }} />
                  <span aria-hidden="true" className="icon_pencil"></span>
                </div>
              </div>

            </div>
            <br />

            <div className="d-center">
              <div className="text-center btn-custom" onClick={()=>navigate('/finance')}>Finance</div>
            </div>

          </div>
        </div>

      </section>

      <Footer />
    </div>
  );
}

export default SettingsPage;

function convertBase64(file) {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = () => {
      resolve(fileReader.result);
    };
    fileReader.onerror = (error) => {
      reject(error);
    };
  });
}