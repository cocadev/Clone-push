import React, { useEffect, useState } from 'react';
import Footer from '../components/footer';
import { createGlobalStyle } from 'styled-components';
import { useMoralis } from 'react-moralis';
import { toast } from 'react-toastify';

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

const Login = () => {

  const { login, isAuthenticated, user, authError } = useMoralis();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  // const [isLoading, setIsLoading] = useState(false);

  console.log('+ username +', user?.get('username'));
  console.log('+ address +', user?.get('ethAddress'));
  console.log('+ isAuthenticated +', isAuthenticated);

  const onLogin = async () => {
    if(userName && password){
      // setIsLoading(true);
        await login(userName, password);
        // setIsLoading(false)
        // navigate('/profile')
    }else {
      toast.error('Validation error!');
    }
  }

  useEffect(()=> {
    if(authError){
      toast.error(authError.message);
    }
  },[authError])

  return (
    <div>
      <GlobalStyles />

      <section className='jumbotron breadcumb no-bg' style={{ backgroundImage: `url(${'./img/background/subheader.jpg'})` }}>
        <div className='mainbreadcumb'>
          <div className='container'>
            <div className='row align-items-center'>
              <div className="col-lg-5 text-light wow fadeInRight" data-wow-delay=".5s">
                <div className="spacer-10"></div>
                <h1>Create, sell or collect digital items.</h1>
                <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.</p>
              </div>
              <div className="col-lg-4 offset-lg-2 wow fadeIn" data-wow-delay=".5s">
                <div className="box-login">
                  <h3 className="mb10">Sign In</h3>
                  <p>Login using an existing account or create a new account <span>here</span>.</p>

                    <div className="field-set">
                      <input type='text' name='userName' className="form-control" placeholder="username"
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)} />
                    </div>

                    <div className="field-set">
                      <input type='password' name='password' className="form-control" placeholder="password" value={password}
                        onChange={(e) => setPassword(e.target.value)} />
                    </div>

                    <div className="field-set">
                      <div className="btn-main btn-fullwidth color-2" onClick={onLogin}>
                        Submit
                      </div>
                    </div>

                    <div className="clearfix"></div>

                    <div className="spacer-single"></div>
                    <ul className="list s3">
                      <li>Login with:</li>
                      <li><span >Facebook</span></li>
                      <li><span >Google</span></li>
                    </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
};

export default Login;