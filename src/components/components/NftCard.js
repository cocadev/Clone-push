import React, { memo } from 'react';

const NftCard = ({ nft, mine }) => {

  return (
    <div className='nft-card' style={{ height: mine ? 280 : 300}}>
      <div className='nft-card-header'>
        <img src={nft.preview_image_url} alt={'nft'} />
      </div>
      <div style={{ padding: 12 }}>
        <div className='d-row justify-betwen f-14'>
          <div style={{ whiteSpace: 'nowrap', overflow: 'hidden', maxWidth: 130 }}>{nft.title}</div>
          <div>Price</div>
        </div>
        <div className='d-row justify-betwen f-14' style={{ marginTop: -2, fontWeight: '600' }}>
          <div>I'am Frank</div>
          <div> <img src={'https://storage.opensea.io/files/6f8e2979d428180222796ff4a33ab929.svg'} alt='eth' style={{ width: 7, marginRight: 3, marginTop: -2 }} />{nft.price}</div>
        </div>
        {!mine && <div className='d-row justify-betwen f-14' style={{ marginTop: -2, }}>
          <div></div>
          <div>a day left</div>
        </div>}
        <div className='d-row justify-betwen f-14' style={{ marginTop: 5, }}>
          {!mine && <div className='buy-now'></div>}
          <div className="icon_heart_alt">
            <span></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(NftCard);