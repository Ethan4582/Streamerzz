import React from "react";
import {  FOOTER_CONTENT} from "../constants";

const Footer = () => {
  return (
    <footer className="mt-20 bg-neutral-950 text-neutral-400 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {FOOTER_CONTENT.sections.map((section, index) => (
            <div key={index}>
              <h3 className="text-white font-medium mb-4">{section.title}</h3>
              <div className="space-y-2 text-sm">
                {section.links.map((link, idx) => (
                  <li key={idx}>
                     <a href={link.url}>{link.text}</a>
                  </li>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="my-12 border-t border-neutral-800 pt-8 text-center text-sm text-neutral-500">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-xs">
            <p>  {FOOTER_CONTENT.platformsText}</p>
            </div>
            <div className="text-xs">
              <p>  {FOOTER_CONTENT.platformsText}</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
