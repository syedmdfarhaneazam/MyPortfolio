import PageWrapper from "@/components/PageWrapper";
import AnimatedText from "@/components/AnimatedText";
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  Instagram,
  Code,
  ArrowRight,
} from "lucide-react";

const contactLinks = [
  {
    name: "GitHub",
    icon: Github,
    user: "syedmdfarhaneazam",
    url: "https://github.com/syedmdfarhaneazam",
    color: "bg-[#333]",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    user: "syedmdfarhaneazam",
    url: "https://www.linkedin.com/in/syed-md-farhan-e-azam/",
    color: "bg-[#0077b5]",
  },
  {
    name: "Email",
    icon: Mail,
    user: "syedmdfarhaneazam@gmail.com",
    url: "mailto:syedmdfarhaneazam@gmail.com",
    color: "bg-[#c71610]",
  },
  {
    name: "Instagram",
    icon: Instagram,
    user: "@syed_md_farhan_e_azam",
    url: "https://www.instagram.com/syed_md_farhan_e_azam/",
    color: "bg-gradient-to-r from-purple-400 via-pink-500 to-red-500",
  },
  {
    name: "LeetCode",
    icon: Code,
    user: "SYED_MD_FARHAN_E_AZAM",
    url: "https://leetcode.com/u/SYED_MD_FARHAN_E_AZAM/",
    color: "bg-[#f89f1b]",
  },
];

const ContactCard = ({ name, icon: Icon, user, url, color, index }) => (
  <motion.a
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    className={`p-4 sm:p-6 rounded-2xl flex flex-col justify-between text-white ${color} group relative overflow-hidden min-h-[140px] sm:min-h-[160px]`}
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.5 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    whileHover={{ y: -5, boxShadow: `0 20px 25px -5px rgba(0,0,0,0.3)` }}
  >
    <div className="z-10">
      <Icon className="w-8 h-8 sm:w-12 sm:h-12 mb-3 sm:mb-4" />
      <h3 className="text-lg sm:text-2xl font-bold">{name}</h3>
      <p className="text-sm sm:text-lg opacity-80 break-all">{user}</p>
    </div>
    <div className="z-10 flex items-center justify-end text-white/70 group-hover:text-white transition-colors mt-2">
      <span className="mr-2 text-sm sm:text-base">Visit</span>
      <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 transform group-hover:translate-x-1 transition-transform" />
    </div>
    <div className="absolute top-0 right-0 w-16 h-16 sm:w-24 sm:h-24 opacity-20 group-hover:opacity-30 group-hover:scale-125 transition-all duration-300 z-0">
      <Icon className="w-full h-full" />
    </div>
  </motion.a>
);

const Contact = () => {
  return (
    <PageWrapper title="Contact" description="Get in touch with me.">
      <AnimatedText
        text="Let's Connect"
        as="h1"
        className="text-4xl sm:text-5xl font-bold text-center mb-4 text-glow"
      />
      <p className="text-center text-base sm:text-lg text-foreground/70 mb-8 sm:mb-12 max-w-2xl mx-auto px-4">
        I'm always open to discussing new projects, creative ideas, or
        opportunities to be part of an amazing team. Feel free to reach out!
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8 max-w-6xl mx-auto">
        {contactLinks.map((link, index) => (
          <ContactCard key={link.name} {...link} index={index} />
        ))}
      </div>
    </PageWrapper>
  );
};

export default Contact;
