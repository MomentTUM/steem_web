import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Autoplay, Pagination } from "swiper";
import { useNavigate } from "react-router-dom";
import useGameInfo from "../hooks/useGameInfo";
import ArrowL from "../assets/icons/ArrowL";
import ArrowR from "../assets/icons/ArrowR";

export default function SpecialOffersCarousel(props) {
  const { title } = props;
  const gameInfo = useGameInfo();
  const navigate = useNavigate();
  const [discountGame, setDiscountGame] = useState();
  const [mySwiper, setMySwiper] = useState(0);

  useEffect(() => {
    if (gameInfo.length > 0)
      setDiscountGame(
        gameInfo
          .filter((el) => "priceOverview" in el)
          .filter((el) => el?.priceOverview?.discount_percent ?? 0 > 0),
      );
  }, [gameInfo]);
  const handleClick = (el) => {
    navigate(
      "/app/" + el?.steamAppid + "/" + el?.name.replace(/[\W_]+/g, "_"),
    ); window.scrollTo({top:0});
  };
  return (
    <>
      <div className="pt-5 pb-5">{title}</div>
      <div className="max-w-5xl relative cursor-pointer select-none">
        <div
          onClick={() => {
            mySwiper.slideNext();
          }}
          className="absolute z-10 w-14 h-52 -right-16 top-14 rounded-md backdrop-blur-md backdrop-brightness-75"
        >
          <div className="absolute top-20 right-2">
            <ArrowR />
          </div>
        </div>
        <div
          onClick={() => {
            mySwiper.slidePrev();
          }}
          className="absolute z-10 w-14 h-52 -left-16 top-14 rounded-md backdrop-blur-md backdrop-brightness-75"
        >
          <div className="absolute top-20 left-2">
            <ArrowL />
          </div>
        </div>
      </div>
      <Swiper
        onSwiper={(swiper) => setMySwiper(swiper)}
        slidesPerView={3}
        slidesPerGroup={3}
        grabCursor={true}
        // loop={true}
        spaceBetween={0}
        navigation={false}
        pagination={false}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, navigate, Pagination]}
        className="mySwiper"
      >
        {discountGame?.map((el) => (
          <SwiperSlide key={el.steamAppid}>
            <div
              onClick={() => handleClick(el)}
              className="w-[306px] h-[310px] mx-4 flex justify-evenly cursor-pointer select-none"
            >
              <div className="w-[306px] h-[200px] overflow-hidden">
                <img
                  className="w-full h-full object-right"
                  value={el?.headerImage}
                  key={el?.headerImage}
                  src={el?.headerImage}
                />
              </div>
              <div className=" absolute w-[306px] h-[113px] bottom-0 bg-[radial-gradient(at_left_top,_#19587b,_#1c6a90,_#267fa7)]">
                <div className="text-left pl-2 pt-2 text-base font-medium">
                  {el?.name}
                  <div className="text-left text-xs pl-2 font-thin">
                    {el?.release_date?.date}
                  </div>
                  <div className="relative">
                    <div className="absolute flex w-36 h-10 right-3 top-4">
                      <div className="w-1/2 px-2 font-extrabold text-2xl text-[#98d21a] bg-[#4c6b22]">
                        -{el?.priceOverview?.discount_percent}%
                      </div>
                      <span className="absolute w-fit h-fit -top-1 right-5 text-[10px] text-gray-400 price--line-through">
                        {el?.priceOverview?.initial_formatted}
                      </span>
                      <div className="w-1/2 pr-2 pt-3 font-medium text-base text-right text-[#98d21a] bg-[#344654]">
                        {el?.priceOverview?.final_formatted}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
