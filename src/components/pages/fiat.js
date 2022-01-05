import React from 'react';
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
  #onramper-widget {
    height: 100%;
    width: 100%;
    margin: 0;
    min-height: 800px;
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

const Fiat = () => {

  return (
    <div>
      <GlobalStyles />
      <section className='jumbotron breadcumb no-bg' style={{ backgroundImage: `url(${'./img/background/subheader.jpg'})` }}>
        <div className='mainbreadcumb'>
          <div className='container'>
            <div className='row m-10-hor'>
              <div className='col-12 text-center'>
                <h1>Fiat</h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      <iframe
        id="onramper-widget"
        title="Onramper widget"
        frameborder="no"
        allow="accelerometer; autoplay; camera; gyroscope; payment;"
        src="https://widget.onramper.com?color=266678&apiKey=pk_test_jWCXCkJiKkFktEIitty3O160jc7OHEj2l0Hq93ngofw0">
      </iframe>
    

      <Footer />
    </div>
  )
}
export default Fiat;