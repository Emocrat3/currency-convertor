import React from 'react';
import { team } from "../../utils/constants";
import { GithubIcon, LinkedinIcon } from "../icons/Icons";

const DeveloperInfo = () => {
  const redirectTo = (value) => {
    window.open(value, '_blank');
  };

  return (
    <div className="bg-white py-4 mb-12 rounded-lg ring-1 ring-indigo-600 m-5">
      <div className="mx-auto grid max-w-7xl px-6 lg:px-8">
        <ul className="grid gap-x-8 gap-y-1 sm:gap-y-12 sm:grid-cols-2 xl:col-span-2">
          {team.map((person) => (
            <li key={person.name}>
              <div className="flex items-center gap-x-2 justify-center">
                <img className="h-16 w-16 rounded-full" src={person.imageUrl} alt="Profile" />
                <div className="">
                  <h3 className="text-base font-semibold leading-7 tracking-tight bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 text-transparent bg-clip-text bg-300% animate-gradient">{person.name}</h3>
                  <p className="text-sm font-semibold leading-6 text-indigo-600">{person.role}</p>
                </div>
                <div className="sm:flex">
                  <div className="cursor-pointer" onClick={() => redirectTo('https://github.com/Emocrat3/currency-convertor')}>
                    <GithubIcon />
                  </div>
                  <div className="cursor-pointer" onClick={() => redirectTo('https://www.linkedin.com/in/arthurogomez')}>
                    <LinkedinIcon />
                  </div>
                </div>
              </div>
            </li>
          ))}
          <div className="flex items-center text-sm sm:text-2xl font-bold bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 text-transparent bg-clip-text bg-300% animate-gradient">
            You can achieve anything you set your mind to.
          </div> 
        </ul>
      </div>
    </div>
  )
}

export default DeveloperInfo;
