import React, { useEffect, useState } from "react";
import Breakpoint, { BreakpointProvider, setDefaultBreakpoints } from "react-socks";
import { Link } from '@reach/router';
import useOnclickOutside from "react-cool-onclickoutside";
import { useMoralis } from "react-moralis";
import { toast } from "react-toastify";

setDefaultBreakpoints([
  { xs: 0 },
  { l: 1199 },
  { xl: 1200 }
]);

const NavLink = props => (
  <Link
    {...props}
    getProps={({ isCurrent }) => {
      // the object returned here is passed to the
      // anchor element's props
      return {
        className: isCurrent ? 'active' : 'non-active',
      };
    }}
  />
);

const Header = function () {

  const { isAuthenticated, logout } = useMoralis();
  const [openMenu, setOpenMenu] = useState(false);
  const [openMenu1, setOpenMenu1] = useState(false);
  const [openMenu2, setOpenMenu2] = useState(false);
  const [openMenu3, setOpenMenu3] = useState(false);
  const [openMenu4, setOpenMenu4] = useState(false);

  const handleBtnClick = () => {
    setOpenMenu(!openMenu);
  };
  const handleBtnClick1 = () => {
    setOpenMenu1(!openMenu1);
  };
  const handleBtnClick2 = () => {
    setOpenMenu2(!openMenu2);
  };
  const handleBtnClick3 = () => {
    setOpenMenu3(!openMenu3);
  };
  const handleBtnClick4 = () => {
    setOpenMenu4(!openMenu4);
  };
  const closeMenu = () => {
    setOpenMenu(false);
  };
  const closeMenu1 = () => {
    setOpenMenu1(false);
  };
  const closeMenu2 = () => {
    setOpenMenu2(false);
  };
  const closeMenu3 = () => {
    setOpenMenu3(false);
  };
  const closeMenu4 = () => {
    setOpenMenu4(false);
  };
  const ref = useOnclickOutside(() => {
    closeMenu();
  });
  const ref1 = useOnclickOutside(() => {
    closeMenu1();
  });
  const ref2 = useOnclickOutside(() => {
    closeMenu2();
  });
  const ref3 = useOnclickOutside(() => {
    closeMenu3();
  });
  const ref4 = useOnclickOutside(() => {
    closeMenu4();
  });
  const [showmenu, btn_icon] = useState(false);

  useEffect(() => {
    const header = document.getElementById("myHeader");
    const totop = document.getElementById("scroll-to-top");
    const sticky = header.offsetTop;
    const scrollCallBack = window.addEventListener("scroll", () => {
      btn_icon(false);
      if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
        totop.classList.add("show");

      } else {
        header.classList.remove("sticky");
        totop.classList.remove("show");
      } if (window.pageYOffset > sticky) {
        closeMenu();
      }
    });
    return () => {
      window.removeEventListener("scroll", scrollCallBack);
    };
  }, []);

  const onLogout = () => {
    logout();
    toast.info('You have been logged out successfully.')
  }

  return (
    <header id="myHeader" className='navbar white'>
      <div className='container'>
        <div className='row w-100-nav'>
          <div className='logo px-0'>
            <div className='navbar-title navbar-item'>
              <NavLink to="/">
                <img
                  src="/img/logo.png"
                  className="img-fluid d-block"
                  alt="#"
                  style={{ width: 200 }}
                />
                <img
                  src="/img/logo-2.png"
                  className="img-fluid d-3"
                  alt="#"
                />
                <img
                  src="/img/logo-3.png"
                  className="img-fluid d-4"
                  alt="#"
                />
                <img
                  src="/img/logo-light.png"
                  className="img-fluid d-none"
                  alt="#"
                />
              </NavLink>
            </div>
          </div>

          <div className='search'>
            <input id="quick_search" className="xs-hide" name="quick_search" placeholder="search item here..." type="text" />
          </div>

          <BreakpointProvider>
            <Breakpoint l down>
              {showmenu &&
                <div className='menu'>

                  <div className='navbar-item'>
                    <div ref={ref}>
                    <div className="dropdown-custom dropdown-toggle btn"
                        onClick={handleBtnClick}
                      >
                        Create
                      </div>
                      {openMenu && (
                        <div className='item-dropdown'>
                          <div className="dropdown" onClick={closeMenu}>
                            <NavLink to="/avatar" onClick={() => btn_icon(!showmenu)}>Avatar</NavLink>
                            <NavLink to={isAuthenticated ? "/create" : "/wallet"} onClick={() => btn_icon(!showmenu)}>NFTs</NavLink>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>


                  <div className='navbar-item'>
                    <div ref={ref1}>
                      <div className="dropdown-custom dropdown-toggle btn"
                        onClick={handleBtnClick1}
                      >
                        Buy/Sell
                      </div>
                      {openMenu1 && (
                        <div className='item-dropdown'>
                          <div className="dropdown" onClick={closeMenu1}>
                            <NavLink to="/explore" onClick={() => btn_icon(!showmenu)}>METASALT </NavLink>
                            <NavLink to="/art" onClick={() => btn_icon(!showmenu)}>Art</NavLink>
                            <NavLink to="/boats" onClick={() => btn_icon(!showmenu)}>Boats</NavLink>
                            <NavLink to="/cars" onClick={() => btn_icon(!showmenu)}>Cars</NavLink>
                            <NavLink to="/fashion" onClick={() => btn_icon(!showmenu)}>Fashion</NavLink>
                            <NavLink to="/jewelery" onClick={() => btn_icon(!showmenu)}>Jewelry</NavLink>
                            <NavLink to="/planes" onClick={() => btn_icon(!showmenu)}>Planes</NavLink>
                            <NavLink to="/realEstate" onClick={() => btn_icon(!showmenu)}>Real Estate</NavLink>
                            <NavLink to="/watches" onClick={() => btn_icon(!showmenu)}>Watches</NavLink>
                            <NavLink to="/explore" onClick={() => btn_icon(!showmenu)}>Wine</NavLink>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className='navbar-item'>
                    <div ref={ref2}>
                      <div className="dropdown-custom dropdown-toggle btn"
                        onClick={handleBtnClick2}
                      >
                        Community
                      </div>
                      {openMenu2 && (
                        <div className='item-dropdown'>
                          <div className="dropdown" onClick={closeMenu2}>
                            <NavLink to="/ranking" onClick={() => btn_icon(!showmenu)}>Ranking</NavLink>
                            <NavLink to="/activity" onClick={() => btn_icon(!showmenu)}>Activity</NavLink>
                            <NavLink to="/forum" onClick={() => btn_icon(!showmenu)}>Forum</NavLink>
                            <NavLink to="/live" onClick={() => btn_icon(!showmenu)}>Live Auction</NavLink>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className='navbar-item'>
                    <div ref={ref3}>
                      <div className="dropdown-custom dropdown-toggle btn"
                        onClick={handleBtnClick3}
                      >
                        Resources
                      </div>
                      {openMenu3 && (
                        <div className='item-dropdown'>
                          <div className="dropdown" onClick={closeMenu3}>
                            <NavLink to="/resources" onClick={() => btn_icon(!showmenu)}>Resources</NavLink>
                            <NavLink to="/helpcenter" onClick={() => btn_icon(!showmenu)}>Help Center</NavLink>
                            <NavLink to="/submitaTicket" onClick={() => btn_icon(!showmenu)}>Submit a Ticket</NavLink>
                            <NavLink to="/news" onClick={() => btn_icon(!showmenu)}>Newsletter</NavLink>
                            <NavLink to="/contact" onClick={() => btn_icon(!showmenu)}>Contact</NavLink>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>


                  <div className='navbar-item'>
                    <div ref={ref4}>
                      <div className="dropdown-custom dropdown-toggle btn"
                        onClick={handleBtnClick4}
                      >
                        Profile
                      </div>
                      {openMenu4 && (
                        <div className='item-dropdown'>
                          <div className="dropdown" onClick={closeMenu4}>
                            <NavLink to={isAuthenticated ? "/profile" : "/auth"} onClick={() => btn_icon(!showmenu)}>Profile</NavLink>
                            <NavLink to="/Author/1" onClick={() => btn_icon(!showmenu)}>My Collections</NavLink>
                            {isAuthenticated && <a href="/" onClick={onLogout}>Log Out</a>}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              }
            </Breakpoint>

            {/* Full Desktop */}
            <Breakpoint xl>
              <div className='menu'>


              <div className='navbar-item'>
                  <div ref={ref}>
                   
                      <div className="dropdown-custom dropdown-toggle btn"
                        onMouseEnter={handleBtnClick} onMouseLeave={closeMenu}>
                        Create
                        <span className='lines'></span>
                        {openMenu && (
                        <div className='item-dropdown'>
                          <div className="dropdown" onClick={closeMenu}>
                            <NavLink to="/avatar">Avatar</NavLink>
                            <NavLink to={isAuthenticated ? "/create" : "/wallet"}>NFTs</NavLink>
                          </div>
                      </div>
                        )}
                    </div>
                  </div>
                </div>

                <div className='navbar-item'>
                  <div ref={ref1}>
                    <div className="dropdown-custom dropdown-toggle btn"
                      onMouseEnter={handleBtnClick1} onMouseLeave={closeMenu1}>
                      Buy/Sell
                      <span className='lines'></span>
                      {openMenu1 && (
                        <div className='item-dropdown'>
                          <div className="dropdown" onClick={closeMenu1}>
                            <NavLink to="/metasaltTokens">METASALT Tokens</NavLink>
                            <NavLink to="/explore">Art</NavLink>
                            <NavLink to="/explore">Boats</NavLink>
                            <NavLink to="/carexplores">Cars</NavLink>
                            <NavLink to="/fashion">Fashion</NavLink>
                            <NavLink to="/jewelry">Jewelry</NavLink>
                            <NavLink to="/planes">Planes</NavLink>
                            <NavLink to="/realEstate">Real Estate</NavLink>
                            <NavLink to="/watches">Watches</NavLink>
                            <NavLink to="/wine">Wine</NavLink>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <div className='navbar-item'>
                  <div ref={ref2}>
                    <div className="dropdown-custom dropdown-toggle btn"
                      onMouseEnter={handleBtnClick2} onMouseLeave={closeMenu2}>
                      Community
                      <span className='lines'></span>
                      {openMenu2 && (
                        <div className='item-dropdown'>
                          <div className="dropdown" onClick={closeMenu2}>
                            <NavLink to="/ranking">Ranking</NavLink>
                            <NavLink to="/activity">Activity</NavLink>
                            <NavLink to="/forum">Forum</NavLink>
                            <NavLink to="/live">Live Auction</NavLink>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <div className='navbar-item'>
                  <div ref={ref3}>
                    <div className="dropdown-custom dropdown-toggle btn"
                      onMouseEnter={handleBtnClick3} onMouseLeave={closeMenu3}>
                      Resources
                      <span className='lines'></span>
                      {openMenu3 && (
                        <div className='item-dropdown'>
                          <div className="dropdown" onClick={closeMenu3}>
                            <NavLink to="/resources">Resources</NavLink>
                            <NavLink to="/helpcenter">Help Center</NavLink>
                            <NavLink to="/submitaticket">Submit a Ticket</NavLink>
                            <NavLink to="/news">Newsletter</NavLink>
                           <NavLink to="/contact">Contact Us</NavLink>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <div className='navbar-item' style={{marginTop: 3, marginLeft: 10}}>
                  <div ref={ref4}>
                    <div className="dropdown-custom btn"
                      onMouseEnter={handleBtnClick4} onMouseLeave={closeMenu4}>
                      <div className="demo-icon-wrap-s2">
                        <span aria-hidden="true" className="icon_profile"></span>
                      </div>
                      {openMenu4 && (
                        <div className='item-dropdown'>
                          <div className="dropdown" onClick={closeMenu4}>
                            <NavLink to={isAuthenticated ? "/profile" : "/auth"}>Profile</NavLink>
                            <NavLink to="/Author/1">My Collections</NavLink>
                            {isAuthenticated && <a onClick={onLogout} href="/">Log Out</a>}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

              </div>
            </Breakpoint>
          </BreakpointProvider>

        </div>

        <button className="nav-icon" onClick={() => btn_icon(!showmenu)}>
          <div className="menu-line white"></div>
          <div className="menu-line1 white"></div>
          <div className="menu-line2 white"></div>
        </button>

      </div>
    </header>
  );
}
export default Header;