import React, { memo } from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { settings } from "./constants";
import CustomSlide from "./CustomSlide";
import { HOT_COLLECTIONS } from "./constants/hotCollections";

const CarouselCollectionRedux = () => {

  return (
      <div className='nft'>
        <Slider {...settings}>
          { HOT_COLLECTIONS.map((item, index) => (
            <CustomSlide
              key={index}
              index={index + 1}
              avatar={item.avatar_url}
              banner={item.banner_url}
              username={item.name}
              uniqueId={item.unique_id}
              collectionId={item.id}
            />
          ))}
        </Slider>
      </div>
  );
}

export default memo(CarouselCollectionRedux);
