import React, { Component } from "react";
import Footer from '../components/footer';
import { createGlobalStyle } from 'styled-components';

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

export default class Createpage extends Component {

  constructor() {
    super();
    this.onChange = this.onChange.bind(this);
    this.state = {
      files: [],
    };
  }

  onChange(e) {
    var files = e.target.files;
    console.log(files);
    var filesArr = Array.prototype.slice.call(files);
    console.log(filesArr);
    document.getElementById("file_name").style.display = "none";
    this.setState({ files: [...this.state.files, ...filesArr] });
  }

  render() {
    return (
      <div>
        <GlobalStyles />

        <section className='jumbotron breadcumb no-bg' style={{ backgroundImage: `url(${'./img/background/7.jpg'})` }}>
          <div className='mainbreadcumb'>
            <div className='container'>
              <div className='row m-10-hor'>
                <div className='col-12'>
                  <h1 className='text-center'>Create-to-Earn</h1>
                  <p className='text-center'>Get 100 METASALT tokens for each NFT you mint</p>
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
                  <h5>Upload file</h5>

                  <div className="d-create-file">
                    <p id="file_name">PNG, JPG, GIF, WEBP or MP4. Max 200mb.</p>
                    {this.state.files.map(x =>
                      <p key="{index}">PNG, JPG, GIF, WEBP or MP4. Max 200mb.{x.name}</p>
                    )}
                    <div className='browse'>
                      <input type="button" id="get_file" className="btn-main" value="Browse" />
                      <input id='upload_file' type="file" multiple onChange={this.onChange} />
                    </div>

                  </div>

                  <div className="spacer-single"></div>

                  <h5>Title</h5>
                  <input type="text" name="item_title" id="item_title" className="form-control" placeholder="e.g. 'Ferrari California'" />

                  <div className="spacer-10"></div>

                  <h5>Description</h5>
                  <textarea data-autoresize name="item_desc" id="item_desc" className="form-control" placeholder="e.g. 'Red, Type F149, bought in 2021, Santa Monica. VIN TRTRO7XJA9H01257600'"></textarea>

                  <input type="button" id="submit" className="btn-main" value="Confirmed Purchase" />
                  
                  <div className="spacer-50"></div>

                  <h5>Price</h5>
                  <input type="number" name="item_price" id="item_price" className="form-control" placeholder="Enter price for one item (MST)" />

                  <div className="spacer-10"></div>

                  <h5>Royalties</h5>
                  <input type="number" name="item_royalties" id="item_royalties" className="form-control" placeholder="Suggested 3.0%" />

                  <div className="spacer-10"></div>

                  <input type="button" id="submit" className="btn-main" value="MINT NFT" />
                </div>
              </form>
            </div>

            <div className="col-lg-3 col-sm-6 col-xs-12">
              <h5>Preview item</h5>
              <div className="nft__item m-0">

                <div className="author_list_pp">
                  <span>
                    <img className="lazy" src="./img/author/author-1.jpg" alt="" />
                    <i className="fa fa-check"></i>
                  </span>
                </div>
                <div className="nft__item_wrap">
                  <span>
                    <img src="./img/collections/rolex.jpg" id="get_file_2" className="lazy nft__item_preview" alt="" />
                  </span>
                </div>
                <div className="nft__item_info">
                  <span >
                    <h4>Rolex Datejust</h4>
                  </span>
                  <div className="nft__item_price">
                    26,500 MST<span>1/20</span>
                  </div>
                  <div className="nft__item_action">
                    <span>Place a bid</span>
                  </div>
                  <div className="nft__item_like">
                    <i className="fa fa-heart"></i><span>50</span>
                  </div>
                </div>
              </div>
              <br />
      
            </div>
          </div>

        </section>

        <Footer />
      </div>
    );
  }
}