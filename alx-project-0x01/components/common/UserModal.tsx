import React, { useState } from "react";
import { UserProps, UserModalProps, NestedObject } from "@/interfaces";

const UserModal: React.FC<UserModalProps> = ({ onClose, onSubmit }) => {
  const [user, setUser] = useState<UserProps>({
    name: "",
    username: "",
    email: "",
    address: {
      street: "",
      suite: "",
      city: "",
      zipcode: "",
      geo: {
        lat: "",
        lng: "",
      },
    },
    phone: "",
    website: "",
    company: {
      name: "",
      catchPhrase: "",
      bs: "",
    },
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setUser((prevUser: UserProps) => {
      console.log(prevUser);
      const keys: string[] = name.split(".");
      const newUserData: NestedObject = { ...prevUser };
      let current: NestedObject = newUserData;

      for (let i = 0; i < keys.length - 1; i++) {
        current[keys[i]] = { ...current[keys[i]] };
        current = current[keys[i]];
      }

      console.log(current);
      current[keys[keys.length - 1]] = value;
      return newUserData as UserProps;
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(user);
    onSubmit(user);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white rounded-xl py-4 shadow-lg w-full max-w-md border-blue-500 border-y-6">
        <h2 className="text-2xl font-bold mb-2 px-8 text-gray-800">
          Create User
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="flex justify-between mb-2 px-5 pt-2 border-t-1 border-blue-500 rounded-lg">
            <label htmlFor="name" className="basis-[25%] pt-2">
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={user.name}
              onChange={handleChange}
              className="basis-[70%] px-2 py-2 border-[0.25px] border-gray-400 rounded-lg focus:border-none focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
          </div>
          <div className="flex justify-between px-5 py-1">
            <label htmlFor="username" className="basis-[25%] pt-2">
              Username:
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={user.username}
              onChange={handleChange}
              className="basis-[70%] px-2 py-2 border-[0.25px] border-gray-400 rounded-lg focus:border-none focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
          </div>
          <div className="flex justify-between px-5 py-1">
            <label htmlFor="email" className="basis-[25%] pt-2">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={user.email}
              onChange={handleChange}
              className="basis-[70%] px-2 py-2 border-[0.25px] border-gray-400 rounded-lg focus:border-none focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
          </div>
          <div className="flex justify-between px-5 py-1">
            <label htmlFor="phone" className="basis-[25%] pt-2">
              Phone:
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={user.phone}
              onChange={handleChange}
              className="basis-[70%] px-2 py-2 border-[0.25px] border-gray-400 rounded-lg focus:border-none focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
          </div>
          <div className="flex justify-between px-5 py-1">
            <label htmlFor="website" className="basis-[25%] pt-2">
              Website:
            </label>
            <input
              type="url"
              id="website"
              name="website"
              value={user.website}
              onChange={handleChange}
              className="basis-[70%] px-2 py-2 border-[0.25px] border-gray-400 rounded-lg focus:border-none focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
          </div>
          <div className="flex justify-between px-5 py-1">
            <label htmlFor="street" className="basis-[25%] pt-2">
              Street:
            </label>
            <input
              type="text"
              id="street"
              name="address.street"
              value={user.address.street}
              onChange={handleChange}
              className="basis-[70%] px-2 py-2 border-[0.25px] border-gray-400 rounded-lg focus:border-none focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
          </div>
          <div className="flex justify-between px-5 py-1">
            <label htmlFor="suite" className="basis-[25%] pt-2">
              Suite:
            </label>
            <input
              type="text"
              id="suite"
              name="address.suite"
              value={user.address.suite}
              onChange={handleChange}
              className="basis-[70%] px-2 py-2 border-[0.25px] border-gray-400 rounded-lg focus:border-none focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
          </div>
          <div className="flex justify-between px-5 py-1">
            <label htmlFor="city" className="basis-[25%] pt-2">
              City:
            </label>
            <input
              type="text"
              id="city"
              name="address.city"
              value={user.address.city}
              onChange={handleChange}
              className="basis-[70%] px-2 py-2 border-[0.25px] border-gray-400 rounded-lg focus:border-none focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
          </div>
          <div className="flex justify-between px-5 py-1">
            <label htmlFor="zipcode" className="basis-[25%] pt-2">
              Zipcode:
            </label>
            <input
              type="text"
              id="zipcode"
              name="address.zipcode"
              value={user.address.zipcode}
              onChange={handleChange}
              className="basis-[70%] px-2 py-2 border-[0.25px] border-gray-400 rounded-lg focus:border-none focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
          </div>
          <div className="flex justify-between px-5 py-1">
            <label htmlFor="lat" className="basis-[25%] pt-2">
              Latitude:
            </label>
            <input
              type="text"
              id="lat"
              name="address.geo.lat"
              value={user.address.geo.lat}
              onChange={handleChange}
              className="basis-[70%] px-2 py-2 border-[0.25px] border-gray-400 rounded-lg focus:border-none focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
          </div>
          <div className="flex justify-between px-5 py-1">
            <label htmlFor="lng" className="basis-[25%] pt-2">
              Longitude:
            </label>
            <input
              type="text"
              id="lng"
              name="address.geo.lng"
              value={user.address.geo.lng}
              onChange={handleChange}
              className="basis-[70%] px-2 py-2 border-[0.25px] border-gray-400 rounded-lg focus:border-none focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
          </div>
          <div className="flex justify-between px-5 py-1">
            <label htmlFor="company_name" className="basis-[25%] pt-2">
              Company Name:
            </label>
            <input
              type="text"
              id="company_name"
              name="company.name"
              value={user.company.name}
              onChange={handleChange}
              className="basis-[70%] px-2 py-2 border-[0.25px] border-gray-400 rounded-lg focus:border-none focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
          </div>
          <div className="flex justify-between px-5 py-1">
            <label htmlFor="catchPhrase" className="basis-[25%] pt-2">
              Catch Phrase:
            </label>
            <input
              type="text"
              id="catchPhrase"
              name="company.catchPhrase"
              value={user.company.catchPhrase}
              onChange={handleChange}
              className="basis-[70%] px-2 py-2 border-[0.25px] border-gray-400 rounded-lg focus:border-none focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
          </div>
          <div className="flex justify-between px-5 py-1 pb-2 border-b-1 border-blue-500 rounded-lg">
            <label htmlFor="bs" className="basis-[25%] pt-2">
              Business Strategy:
            </label>
            <input
              type="text"
              id="bs"
              name="company.bs"
              value={user.company.bs}
              onChange={handleChange}
              className="basis-[70%] px-2 py-2 border-[0.25px] border-gray-400 rounded-lg focus:border-none focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
          </div>

          <div className="flex justify-between items-center px-5 pt-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-gray-600 hover:text-gray-800 focus:outline-none">
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
              Add Post
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserModal;
