'use client'
import React, { useState, useEffect } from 'react';

import HomePage from "./home/page";
import SideNav from "../components/sidenav/page";

const Main = () => {
  const [selectedPage, setSelectedPage] = useState('home');
  
  useEffect(() => {
    const savedPage = localStorage.getItem('currentPage');
    if (savedPage) {
      setSelectedPage(savedPage);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('currentPage', selectedPage);
  }, [selectedPage]);
  
  return (
    <div className="grid grid-cols-6 sm:grid-cols-8 md:grid-cols-10 lg:grid-cols-12">
      <div className="col-span-1 md:col-span-1">
        <SideNav setPage={setSelectedPage} />
      </div>
      <div className="bg-pink-200 ml-3 md:ml-1 col-span-5 sm:col-span-6 md:col-span-8 lg:col-span-10">
        <HomePage selectedPage={selectedPage} />
      </div>
    </div>
  );
};

export default Main;
