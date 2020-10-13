import React from 'react';

export const Header = ()=>{
  return <header className="flex justify-center p-4 bg-ada">
    <img
      src="/ada-logo.png"
      className="mr-3"
      style={{ width: "7rem", height: "3rem", objectFit: "contain" }}
      alt="ADA logo"
    />
  </header>
}