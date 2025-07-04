import React from "react";
import { Github, Linkedin, Mail, Instagram, Code } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    { icon: Github, href: "https://github.com/syedmdfarhaneazam" },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/syed-md-farhan-e-azam/",
    },
    { icon: Mail, href: "mailto:syedmdfarhaneazam@gmail.com" },
    {
      icon: Instagram,
      href: "https://www.instagram.com/syed_md_farhan_e_azam/",
    },
    { icon: Code, href: "https://leetcode.com/u/SYED_MD_FARHAN_E_AZAM/" },
  ];

  return (
    <footer className="bg-card/50 py-8 mt-20">
      <div className="container mx-auto text-center text-foreground">
        <div className="flex justify-center space-x-6 mb-4">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-transform duration-300 hover:scale-125"
            >
              <link.icon className="w-6 h-6" />
            </a>
          ))}
        </div>
        <p className="text-sm text-foreground/70">
          &copy; {new Date().getFullYear()} Syed Md Farhan E Azam. All Rights
          Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
