import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 border-t border-gray-200 py-4 text-center mt-10">
      <p>© {year} GridPixels. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
