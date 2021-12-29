import React, { memo } from 'react';
import styled from "styled-components";

const Outer = styled.div`
  width: 200px;
  height: 300px;
  border: 1px solid #bbb;
  border-radius: 8px;
  margin: 12px 8px;
  &:hover {
    cursor: pointer;
    background: linear-gradient(rgba(229, 232, 235, 0.392) 0%, rgb(255, 255, 255) 20%);
  }
`;

const NftCard = ({ nft }) => {

  return (
    <Outer>
      <div style={{ width: 200, height: 200, overflow: 'hidden', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <img src={nft.preview_image_url} alt={'nft'} style={{ width: 'auto', height: 200, borderTopRightRadius: 8, borderTopLeftRadius: 8 }} />
      </div>
      <div style={{ padding: 12 }}>
        <div className='d-row justify-betwen f-14'>
          <div style={{ whiteSpace: 'nowrap',  overflow: 'hidden', maxWidth: 130}}>{nft.title}</div>
          <div>Price</div>
        </div>
        <div className='d-row justify-betwen f-14' style={{ marginTop: -2, fontWeight: '600' }}>
          <div>I'am Frank</div>
          <div> <img src={'https://storage.opensea.io/files/6f8e2979d428180222796ff4a33ab929.svg'} alt='eth' style={{ width: 7, marginRight: 3, marginTop: -2 }} />{nft.price}</div>
        </div>
        <div className='d-row justify-betwen f-14' style={{ marginTop: -2, }}>
          <div></div>
          <div>a day left</div>
        </div>
        <div className='d-row justify-betwen f-14' style={{ marginTop: 5, }}>
          <div></div>
          <div className="icon_heart_alt">
            <span></span>
          </div>
        </div>

      </div>

    </Outer>
  );
};

export default memo(NftCard);