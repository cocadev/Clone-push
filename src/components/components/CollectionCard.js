import React, { memo } from "react";
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  .col-card {
    cursor: pointer;
    width: 450px;
    height: 300px;
    margin: 10px 4px;
  }
  .nft_wrap {
    width: 428px;
    height: 180px;
    background-repeat: no-repeat, repeat;
    background-size: 100% 100%;
    background-position: center;
  }
  .nft_coll{
    &:hover {
      box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px; 
    }
  }
  
`;

const CollectionCard = ({ index, avatar, banner, username, uniqueId, collectionId }) => {
  return (
    <div className="col-card" index={index}>
      <GlobalStyles />

      <div className="nft_coll">
        <div className="nft_wrap" style={{ backgroundImage: `url(${banner})`, }}>
        </div>
        <div className="nft_coll_pp">
          <span onClick={() => window.open("/colection/" + collectionId, "_self")}><img className="lazy" src={avatar} alt="" /></span>
          <i className="fa fa-check"></i>
        </div>
        <div className="nft_coll_info">
          <span onClick={() => window.open("/colection/" + collectionId, "_self")}><h4>{username}</h4></span>
          <span>{uniqueId}</span>
        </div>
      </div>
    </div>
  )
}

export default memo(CollectionCard);