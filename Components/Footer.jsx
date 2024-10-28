import React from 'react'
import {Fot1,Fot2} from "../Components/index";
import images from "@/Images/index"
import Images from "next/image"

function Footer() {

  const footerNavs = [
    {
      href: "javascript:void()",
      name: "Terms",
    },
    {
      href: "javascript:void()",
      name: "License",
    },
    {
      href: "javascript:void()",
      name: "Privacy",
    },
    {
      href: "javascript:void()",
      name: "About us",
    },
  ];

  return (
    <footer className='pt-10'>
      <div className='max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8'>
        <div className='justify-between sm:flex'>
          <div className='space-y-6'>
            <Images src={images.logo} width={150}/>
            <p className='max-w-md'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat magnam doloribus nulla, deleniti eveniet similique commodi id consequatur unde quasi veritatis culpa quo placeat, quas explicabo? Ullam recusandae consequatur tempora!
            </p>
            <ul className='flex flwx-wrap items-center gap-4 text-sm sm:text-base'>
              {footerNavs.map((item, idx) => {
                <li className='text-gray-800 hover:text-gray-500 duration-150'>
                  <a href={item.href} key={idx} >
                    {item.name}
                  </a>
                </li>
              })}
            </ul>
          </div>
          <div className='mt-6'>
            <p className='text-gray-700 font-semibold'>Get the app</p>
            <div className='flex items-center gap-3 mt-3 sm:block'>
              <a href="javascript:void()">
                <Fot1/>
              </a>
              <a href="javascript:void()" className='mt-0 block sm:mt-3'>
                <Fot2/>
              </a>
            </div>
          </div>
        </div>
        <div className='mt-10 py-10 border-t md:text-center'>
              <p>2024 Swaraj Madhavi. All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer