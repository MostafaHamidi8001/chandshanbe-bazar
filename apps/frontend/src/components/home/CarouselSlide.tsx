import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowLeftLong, FaStar, FaCheck, FaStarHalf } from "react-icons/fa6";

type h2Type = {
  firstSpan: string;
  colorSpan: string;
  moreSpan?: string | string[];
};

export type CarouselType = {
  order: number;
  label: string;
  h2list: h2Type;
  describe: string;
  checkList?: string[];
  buttonLinksList: { link: string; content: string };
  image: { src: string; alt: string };
  discount?: number | string;
  feature?: string;
  price: {
    realPrice: string | number;
    discountPrice?: string | number;
    moneyMethod?: string;
  };
  comment?: { userName: string; text: string; score: number; link: string };
};

const CarouselSlide = ({
  order,
  label,
  h2list,
  describe,
  checkList,
  buttonLinksList,
  image,
  discount,
  feature,
  price,
  comment,
}: CarouselType) => {
  return (
    <div
      className={`absolute inset-0 flex items-center justify-center animate-fade${order}`}
    >
      <div className="max-w-[1200px] w-full flex flex-col lg:flex-row gap-12 lg:gap-0">
        <div className="flex h-[500px] lg:h-full flex-col items-center gap-10 lg:items-start justify-between">
          <p className="w-fit px-5 py-3 text-base bg-pink-200 rounded-full text-primary-100 text-center flex items-center justify-center">
            {label}
          </p>
          <h2 className="text-primary-300">
            <span>{h2list.firstSpan} </span>
            <strong className="text-primary-100">{h2list.colorSpan} </strong>
            {h2list.moreSpan && <span>{h2list.moreSpan}</span>}
          </h2>
          <p className="font-light text-lg ">{describe}</p>
          {checkList &&
            checkList.map((label, index) => (
              <p key={index} className="flex gap-3 items-center ">
                <span className="size-5 bg-primary-100 flex justify-center items-center text-sm text-primary-50 rounded-full">
                  <FaCheck />
                </span>
                <span>{label}</span>
              </p>
            ))}
          <Link
            className="w-fit px-5 py-3 rounded-full bg-primary-100 text-primary-50 flex justify-between items-center gap-2 cursor-pointer hover:opacity-90"
            href={buttonLinksList.link}
          >
            <span>{buttonLinksList.content}</span>
            <span>
              <FaArrowLeftLong />
            </span>
          </Link>
        </div>
        <figure className="relative w-full h-[500px]">
          <Image
            src={image.src}
            className="object-cover size-full"
            alt={image.alt}
            fill
          />
          <figcaption className="size-full absolute z-10 text-black flex flex-col justify-between p-3">
            <div className="flex justify-between items-start text-white">
              {discount && (
                <div className="size-20 rounded-full bg-primary-100 flex flex-col justify-center items-center">
                  <span>{discount}%</span>
                  <span>تخفیف</span>
                </div>
              )}
              {feature && (
                <div className="rounded-full bg-primary-100 flex justify-between items-center w-fit px-5 py-3 gap-2 text-lg">
                  <span>{feature}</span>
                  <span>
                    <FaStar />
                  </span>
                </div>
              )}
            </div>
            <div className="flex justify-between items-end">
              {price && (
                <div className="flex flex-col justify-between items-start h-24 w-fit rounded-lg shadow-lg px-4 py-2 bg-white">
                  <p className="text-base font-semibold">بر فروشترین</p>
                  <p className="flex justify-between items-center gap-4">
                    {price.discountPrice && (
                      <span className="text-base text-gray-400 line-through">
                        {price.discountPrice}
                      </span>
                    )}
                    <span className="text-primary-100 font-extrabold text-2xl">
                      {price.realPrice}
                    </span>
                    {price.moneyMethod && <span>{price.moneyMethod}</span>}
                    <span>تومان</span>
                  </p>
                </div>
              )}
              {comment && (
                <Link
                  href={comment.link}
                  className="flex flex-col shadow-lg gap-1.5 rounded-lg bg-white"
                >
                  <p className="text-base font-semibold">{comment.userName}</p>
                  <div className="flex flex-row-reverse gap-1.5 justify-end text-yellow-500">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStarHalf />
                  </div>
                  <p className="text-sm font-light max-w-60 overflow-hidden whitespace-nowrap text-ellipsis ">
                    {comment.text}
                  </p>
                </Link>
              )}
            </div>
          </figcaption>
        </figure>
      </div>
    </div>
  );
};

export default CarouselSlide;
