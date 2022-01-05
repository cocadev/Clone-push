import React, { memo } from 'react';
import clsx from 'clsx';

const NftCard = ({ nft, mine, auction, big }) => {

  const height = mine ? big ? 380 : 280 : big ? 400 : 300;
  const maxWidth = big ? 230 : 130;

  return (
    <div className={clsx(big ? 'nft-card-big' : 'nft-card')} style={{ height }}>
      <div className={clsx(big ? 'nft-card-header-big' : 'nft-card-header')}>
        <img src={nft.preview_image_url} alt={'nft'} />
      </div>
      <div style={{ padding: 12 }}>
        <div className='d-row justify-betwen f-14'>
          <div style={{ whiteSpace: 'nowrap', overflow: 'hidden', maxWidth }}>{nft.title}</div>
          <div>Price</div>
        </div>
        <div className='d-row justify-betwen f-14' style={{ marginTop: -2, fontWeight: '600' }}>
          <div>I'am Frank</div>
          <div> <img src={'https://storage.opensea.io/files/6f8e2979d428180222796ff4a33ab929.svg'} alt='eth' style={{ width: 7, marginRight: 3, marginTop: -2 }} />{nft.price}</div>
        </div>
        {!mine && <div className='d-row justify-betwen f-14' style={{ marginTop: -2, }}>
          <div>{auction ? '': 'My NFT'}</div>
          <div><span aria-hidden="true" className="icon_clock_alt" style={{ fontSize: 11}}></span>&nbsp;{auction ? 'a day left': ''}</div>
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