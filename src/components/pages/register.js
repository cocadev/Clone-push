import React, { useState } from 'react';
import Footer from '../components/footer';
import { createGlobalStyle } from 'styled-components';
import { toast } from 'react-toastify';
import { useMoralis } from 'react-moralis';
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



const Register = () => {

  const { signup, authError, user } = useMoralis();
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  // const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async () => {
    if (password === rePassword && password && rePassword && userName && email) {

      // setIsLoading(true);

      await signup(
        userName, 
        password, 
        email, 
        {ethAddress: (user && user.get("ethAddress")) ? user.get("ethAddress") : null}
      )

      if (authError) {
        toast.error(authError.message);
      } else {
        toast("Congratulations! The signup Success!");
        navigate('/profile')
      }
      // setIsLoading(false);
    } else {
      console.log('eee')
      toast.error('Validation error!');
    }
  };

  return (
    <div>
      <GlobalStyles />

      <section className='jumbotron breadcumb no-bg' style={{ backgroundImage: `url(${'./img/background/subheader.jpg'})` }}>
        <div className='mainbreadcumb'>
          <div className='container'>
            <div className='row'>
              <div className="col-md-12 text-center">
                <h1>Register</h1>
                <p>Anim pariatur cliche reprehenderit</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='container'>
        <div className="row">

          <div className="col-md-8 offset-md-2">
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
                  <div id='submit' className="pull-left" onClick={handleSubmit}>
                    <div className="btn-main">Register Now</div>
                  </div>

                  <div className="clearfix"></div>
                </div>

              </div>
          </div>

        </div>
      </section>
      <Footer />
    </div>
  )
};
export default Register;