import React, { useState } from 'react';
import Footer from '../components/footer';
import { createGlobalStyle } from 'styled-components';
import { toast } from 'react-toastify';
import { useMoralis } from 'react-moralis';
// import { navigate } from '@reach/router';
import { Tabs, Tab } from "react-bootstrap";
import Account from '../menu/account';

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

const Auth = () => {

  const { Moralis, user, login, logout, isAuthenticated } = useMoralis();
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  // const [isLoading, setIsLoading] = useState(false);

  const onRegister = async () => {
    if (password === rePassword && password && rePassword && userName && email) {

      // setIsLoading(true);
      const me = new Moralis.User();
      me.set("username", userName);
      me.set("password", password);
      me.set("email", email);

      try {
        await me.signUp();
        toast("Congratulations! The signup Success!");
        // Hooray! Let them use the app now.
      } catch (error) {
        // Show the error message somewhere and let the user try again.
        toast.error("Error: " + error.code + " " + error.message);
      }
      // setIsLoading(false);
    } else {
      console.log('eee')
      toast.error('Validation error!');
    }
  };

  const onLogin = async () => {
    if (userName && password) {
      try {
        await login(userName, password);
        toast("Congratulations! The login Success!");
        // navigate('/profile')
      } catch (error) {
        toast.error("Error: " + error.code + " " + error.message);
      }
    } else {
      toast.error('Validation error!');
    }
  }

  return (
    <div>
      <GlobalStyles />

      <section className='jumbotron breadcumb no-bg' style={{ backgroundImage: `url(${'./img/background/subheader.jpg'})` }}>
        <div className='mainbreadcumb'>
          <div className='container'>
            <div className='row'>
              <div className="col-md-12 text-center">
                <h1>Authentication</h1>
                <p style={{ color: 'greenyellow'}}>Email: {user?.get('email') || '-'}</p>
                <p style={{marginTop: -12, color: 'greenyellow'}}>Username: {user?.get('username') || '-'}</p>
                <p style={{marginTop: -12, color: 'greenyellow'}}>EthAddress: {(user?.get('ethAddress') || '-')}</p>
                {isAuthenticated && <p style={{ color: 'red', cursor: 'pointer'}} onClick={()=>logout()}>Log out</p>}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='container'>
        <div className="row">

          <div className="col-md-10 offset-md-1">

            <div className='col-md-12 mt-3'>
              <div id="tabs2">
                <Tabs fill defaultActiveKey="home">

                  <Tab eventKey="home" title="Sign up Email">
                    <div>
                      <br /><br />
                      <h3>Don't have an account? Register now.</h3>
                      <p>Email is optional, but if you may have trouble recovering your account, so it may be worthwhile.</p>

                      <div className="spacer-10"></div>

                      <div className="row">

                        <div className="col-md-6">
                          <div className="field-set">
                            <label>Email Address:</label>
                            <input type='text' name='email' id='email' className="form-control"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                            />
                          </div>
                        </div>

                        <div className="col-md-6">
                          <div className="field-set">
                            <label>Choose a Username:</label>
                            <input type='text' name='username' id='username' className="form-control"
                              value={userName}
                              onChange={(e) => setUserName(e.target.value)}
                            />
                          </div>
                        </div>

                        <div className="col-md-6">
                          <div className="field-set">
                            <label>Password:</label>
                            <input type='password' name='password' id='password' className="form-control"
                              value={password}
                              onChange={(e) => setPassword(e.target.value)}
                            />
                          </div>
                        </div>

                        <div className="col-md-6">
                          <div className="field-set">
                            <label>Re-enter Password:</label>
                            <input type='password' name='re-password' id='re-password' className="form-control"
                              value={rePassword}
                              onChange={(e) => setRePassword(e.target.value)}
                            />
                          </div>
                        </div>

                        <div className="col-md-12">
                          <div id='submit' className="pull-left" onClick={onRegister}>
                            <div className="btn-main">Register Now</div>
                          </div>

                          <div className="clearfix"></div>
                        </div>

                      </div>
                    </div>
                  </Tab>
                  <Tab eventKey="profile" title="Sign in Email">
                    <br /><br />
                    <div>
                      <div className="">
                        <h3 className="mb10">Sign In</h3>
                        <p>Login using an existing account or create a new account</p>

                        <div className='row'>
                          <div className="col-md-6">
                            <div className="field-set">
                              <label>Username:</label>
                              <input type='text' name='Username' id='Username' className="form-control"
                                value={userName}
                                onChange={(e) => setUserName(e.target.value)}
                              />
                            </div>
                          </div>

                          <div className="col-md-6">
                            <div className="field-set">
                              <label>Password:</label>
                              <input type='password' name='password' id='password' className="form-control"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                              />
                            </div>
                          </div>
                        </div>


                        <div className="col-md-12">
                          <div id='submit' className="pull-left" onClick={onLogin}>
                            <div className="btn-main">Login Now</div>
                          </div>

                          <div className="clearfix"></div>
                        </div>

                        <div className="clearfix"></div>

                        <div className="spacer-single"></div>

                      </div>
                    </div>
                  </Tab>
                  <Tab eventKey="metamask" title="Sign up/in Metamask">
                    <br /><br />
                    <div>
                      <Account />
                    </div>
                  </Tab>
                  <Tab eventKey="welcome" title="Send Welcome Email">
                    <br /><br />
                    <div>
                      <p style={{ textAlign: 'center' }}>
                        Comming Soon!
                      </p>
                    </div>
                  </Tab>
                  <Tab eventKey="reset" title="Reset Password">
                    <br /><br />
                    <div>
                      <p style={{ textAlign: 'center' }}>
                        Comming Soon!
                      </p>
                    </div>
                  </Tab>
                </Tabs>
              </div>
            </div>

          </div>

        </div>
      </section>
      <Footer />
    </div>
  )
};
export default Auth;