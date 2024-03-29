import React, { memo } from 'react';

const UserTopSeller = ({ user }) => {
    return (
        <>
            <div className="author_list_pp">
              <span onClick={()=> window.open("", "_self")}>
                  <img className="lazy" src={user.avatar_url} alt=""/>
                  <i className="fa fa-check"></i>
              </span>
            </div>                                    
            <div className="author_list_info">
                <span onClick={()=> window.open("", "_self")}>{user.username}</span>
                <span className="bot">{user.sales} ETH</span>
            </div>   
        </>     
    );
};

export default memo(UserTopSeller);