import React from "react";
import Image from "next/image";
import PLACEHOLDER_IMAGE from "@/public/assets/images/placeholder.jpg";
import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({
  id,
  name,
  username,
  email,
  address,
  phone,
  website,
  company,
}) => {
  return (
    <div className="max-w-[20rem] mx-auto my-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border-y-6 border-blue-800">
      <div className="flex pt-6 pb-4 px-6 items-center gap-4 mb-4">
        <div>
          <Image
            src={PLACEHOLDER_IMAGE}
            alt="User Avatar"
            width={70}
            height={100}
            className="rounded-[100%]"
          />
        </div>
        <div className="text-xl">
          <h2 className="text-3xl">{name}</h2>
          <div className="flex justify-between text-sm text-gray-500">
            <span>{username}</span>
            <span>UID: {id}</span>
          </div>
        </div>
      </div>
      <div className="border-t-6 border-blue-800 rounded-t-md">
        <div className="w-full py-5 px-6 mb-2 border-b-[0.1px] flex gap-2 items-center text-sm text-gray-500">
          <p className="w-[30px] h-[30px] font-bold p-[6px] my-[0.5px] rounded-[100%] text-center">
            M
          </p>
          <p className="font-bolder">{email}</p>
        </div>
        <div className="w-full py-1 px-6 mb-2 border-b-[0.1px] flex gap-2 items-center text-sm text-gray-500">
          <p className="w-[30px] h-[30px] font-bold p-[6px] my-[0.5px] rounded-[100%] text-center">
            L
          </p>
          <p className="font-bolder basis-[90%]">
            <span>{address.street}</span>
            <span>{address.suite}</span>
            <span>{address.city}</span>
            <span>{address.zipcode}</span>
            <br />
            <span>{address.geo.lat}</span>
            <span>{address.geo.lng}</span>
          </p>
        </div>
        <var>
          <div className="w-full py-5 px-6 mb-2 border-b-[0.1px] flex gap-2 items-center text-sm text-gray-500">
            <p className="w-[30px] h-[30px] font-bold p-[6px] my-[0.5px] rounded-[100%] text-center">
              P
            </p>
            <p className="font-bolder">{phone}</p>
          </div>

          <div className="w-full py-5 px-6 mb-2 border-b-[0.1px] flex gap-2 items-center text-sm text-gray-500">
            <p className="w-[30px] h-[30px] font-bold p-[6px] my-[0.5px] rounded-[100%] text-center">
              W
            </p>
            <p className="font-bolder">{website}</p>
          </div>

          <div className="w-full py-1 px-6 mb-2 flex gap-2 items-center text-sm text-gray-500">
            <p className="w-[30px] h-[30px] font-bold p-[6px] my-[0.5px] rounded-[100%] text-center">
              H
            </p>
            <p className="font-bolder">
              <span>{company.name}</span>
              <br />
              <span>{company.catchPhrase}</span>
              <br />
              <span>{company.bs}</span>
            </p>
          </div>
        </var>
      </div>
    </div>
  );
};

export default UserCard;
