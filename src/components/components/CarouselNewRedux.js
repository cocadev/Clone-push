import React, { memo, useState } from "react";
import Slider from "react-slick";
import styled from "styled-components";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Clock from "./Clock";
import { carouselNew } from './constants';
import { NEW_ITMES } from "./constants/newItems";

const Outer = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
`;

const CarouselNewRedux = () => {


    const [height, setHeight] = useState(0);

    const onImgLoad = ({target:img}) => {
        let currentHeight = height;
        if(currentHeight < img.offsetHeight) {
            setHeight(img.offsetHeight);
        }
    }

    return (
        <div className='nft'>
          <Slider {...carouselNew}>
          {NEW_ITMES.map( (nft, index) => (
            <div className='itm' index={index + 1} key={index}>
              <div className="d-item">
                <div className="nft__item">
                    { nft.deadline &&
                        <div className="de_countdown">
                            <Clock deadline={nft.deadline} />
                        </div>
                    }
                    <div className="author_list_pp">
                        <span onClick={()=> window.open("/home1", "_self")}>                                    
                            <img className="lazy" src={nft.avatar_url} alt="" />
                            <i className="fa fa-check"></i>
                        </span>
                    </div>
                    <div className="nft__item_wrap" style={{height: `${height}px`}}>
                      <Outer>
                        <img src={nft.preview_image_url} className="lazy" onLoad={onImgLoad} alt="" />
                      </Outer>
                    </div>
                    <div className="nft__item_info">
                        <span onClick={()=> window.open("/#", "_self")}>
                            <h4>{nft.title}</h4>
                        </span>
                        <div className="nft__item_price">
                            {nft.price} ETH<span>{nft.bid}/{nft.max_bid}</span>
                        </div>
                        <div className="nft__item_action">
                            <span onClick={()=> window.open(nft.bid_link, "_self")}>Place a bid</span>
                        </div>
                        <div className="nft__item_like">
                            <i className="fa fa-heart"></i><span>{nft.likes}</span>
                        </div>                                                        
                    </div> 
                </div>
              </div>
            </div>
          ))}
          </Slider>
        </div>
    );
}

export default memo(CarouselNewRedux);
