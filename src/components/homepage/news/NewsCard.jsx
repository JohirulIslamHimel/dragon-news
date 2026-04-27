import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CiBookmark, CiShare2 } from "react-icons/ci";
import { FaEye } from "react-icons/fa";
import { IoMdStar } from "react-icons/io";

const NewsCard = ({ news }) => {
  return (
    <div className="card bg-base-100  shadow-sm">
      <div className="card-body p-4 sm:p-6">
        {/* Author info */}
        <div className="flex justify-between items-center p-4 bg-slate-200 rounded-t-lg mb-4">
          <div className="flex gap-1 items-center">
            <Image
              src={news.author?.img}
              alt={news.author?.name}
              height={45}
              width={45}
              className="rounded-full object-cover"
            ></Image>
            <div className="">
              <h2 className="font-semibold text-sm sm:text-base">
                {news.author?.name}
              </h2>
              <p className="text-[10px] sm:text-xs text-gray-500">
                {news.author?.published_date}
              </p>
            </div>
          </div>
          <div className="flex justify-between items-center gap-2">
            <CiShare2 className="text-xl cursor-pointer hover:text-purple-500" />
            <CiBookmark className="text-xl cursor-pointer hover:text-purple-500" />
          </div>
        </div>

        <h2 className="card-title text-lg sm:text-xl mb-3 leading-tight">
          {news.title}
        </h2>

        <figure className="relative w-full overflow-hidden rounded-lg">
          <Image
            src={news.image_url}
            alt={news.title}
            width={300}
            height={300}
            className="w-full h-auto object-cover aspect-video transition-transform duration-300 hover:scale-105"
          />
        </figure>

        <p className="line-clamp-3 text-sm sm:text-base text-gray-600 my-4">
          {news.details}
        </p>
        <div className="divider my-1"></div>
        <div className="flex items-center justify-between gap-2 mt-2">
          <div className="flex items-center gap-4">
            <h2 className="flex items-center gap-2">
              <IoMdStar className="text-lg text-yellow-500" />
              <span className="font-medium text-sm sm:text-base">
                {news.rating.number}
              </span>
            </h2>
            <h2 className="flex items-center gap-2">
              <FaEye />
              <span className="text-sm sm:text-base">{news.total_view}</span>
            </h2>
          </div>
          <Link href={`/news/${news._id}`}>
            <button className="btn btn-sm sm:btn-md btn-ghost text-purple-600 font-bold hover:bg-purple-50">
              See details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
