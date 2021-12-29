import React, { useState } from 'react';
import Footer from '../components/footer';
import { createGlobalStyle } from 'styled-components';
import { toast } from 'react-toastify';
import { useMoralis } from 'react-moralis';
// import { navigate } from '@reach/router';
import { Tabs, Tab } from "react-bootstrap";
import Account from '../menu/account';
import { navigate } from '@reach/router';

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
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [isForgot, setIsForgot] = useState(false);
  // const [isLoading, setIsLoading] = useState(false);

  const onRegister = async () => {
    if (password === rePassword && password && rePassword && username && email) {

      // setIsLoading(true);
      const me = new Moralis.User();
      me.set("username", username);
      me.set("password", password);
      me.set("email", email);

      try {
        console.log('---')
        await me.signUp();
        toast("Congratulations! The signup Success!");
        navigate('/profile')
      } catch (error) {
        toast.error("Error: " + error.code + " " + error.message);
      }
      // setIsLoading(false);
    } else {
      console.log('eee')
      toast.error('Validation error!');
    }
  };

  const onLogin = async () => {
    if (username && password) {
      try {
        await login(username, password);
        toast("Congratulations! The login Success!");
        navigate('/profile')
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

                  <Tab eventKey="home" title="Sign up using Email">
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
                              value={username}
                              onChange={(e) => setUsername(e.target.value)}
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
                          <div className="pull-left" onClick={onRegister}>
                            <div className="btn-main">Register Now</div>
                          </div>

                          <div className="clearfix"></div>
                        </div>

                      </div>
                    </div>
                  </Tab>
                  <Tab eventKey="profile" title="Sign in using Email">
                    <br /><br />
                    {!isForgot && <div>
                        <h3 className="mb10">Sign In</h3>
                        <p>Login using an existing account or create a new account</p>

                        <div className='row'>
                          <div className="col-md-6">
                            <div className="field-set">
                              <label>Username:</label>
                              <input type='text' name='Username' id='Username' className="form-control"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
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

                          <div className='flex-right underline cursor' onClick={()=>setIsForgot(!isForgot)}>Forgot Password</div>
                          <br/>
                        </div>


                        <div className="col-md-12">
                          <div className="pull-left" onClick={onLogin}>
                            <div className="btn-main">Login Now</div>
                          </div>

                          <div className="clearfix"></div>
                        </div>

                        <div className="clearfix"></div>

                        <div className="spacer-single"></div>

                    </div>}
                    {isForgot && <div>
                        <h3 className="mb10">
                        <span aria-hidden="true" className="arrow_left cursor" onClick={()=>setIsForgot(false)}></span> &nbsp;
                        Forgot Password</h3>
                        <p>Enter your email to reset the password</p>

                        <div className='row'>
                          <div className="col-md-6">
                            <div className="field-set">
                              <label>Email:</label>
                              <input type='text' name='email' id='email' className="form-control"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                              />
                            </div>
                          </div>

                          <br/>
                        </div>

                        <div className="col-md-12">
                          <div className="pull-left" onClick={()=>alert('comming soon!')}>
                            <div className="btn-main">Send Request</div>
                          </div>

                          <div className="clearfix"></div>
                        </div>

                        <div className="clearfix"></div>

                        <div className="spacer-single"></div>

                    </div>}
                  </Tab>

                  <Tab eventKey="metamask" title="Sign up/in Metamask">
                    <br /><br />
                    <div style={{display: 'flex', justifyContent: 'center'}}>
                      <Account />
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