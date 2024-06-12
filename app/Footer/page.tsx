import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-green-200 p-4 mt-4 text-xs italic">
      <div className="container mx-auto flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
        <div className="flex flex-col items-center space-y-2 md:items-start">
          <h3 className="text-sm text-gray-700">Developer Contact:</h3>
          <p className="text-gray-600">
            anyanwuifeanyi3@gmail.com
          </p>
          <p className="text-gray-600">
            08105080543 || 07039899090
          </p>
        </div>
        <div className="flex space-x-4 text-blue-400">
          <a href="https://boni-folio.vercel.app/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-800">
            Portfolio
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
