import React, { useState, createContext, useContext, useEffect } from "react";
import avatar1 from "../assets/avatar1.png";
import avatar4 from "../assets/avatar4.png";
import avatar3 from "../assets/avatar3.png";
const TabContext = createContext();

export const TabProvider = ({ children }) => {
  // post array
  const BlogArr = [
    {
      id: 1,
      author: "john techson",
      image: avatar1,
      categories: "quantum computing",
      createdAt: "september 21 2025",
      title: "the quantom leap in computing",
      sub_title:
        "explore the revolution in quantom computing, its application and its potential impact on various industries.",
      likes: 24.4 + "k",
      comment: 50,
      shares: 20,
    },
    {
      id: 2,
      author: "sarah ethicist",
      image: avatar4,
      categories: "Ai ethics",
      createdAt: "march 4 2025",
      title: "the ethical dilemmas of AI",
      sub_title:
        "A deep dive into ethical challenges posed by AI, including bias, privacy, and transparency.",
      likes: 32 + "k",
      comment: 72,
      shares: 18,
    },
    {
      id: 3,
      author: "astronomer x",
      image: avatar3,
      categories: "space exploration",
      createdAt: "december 10 2024",
      title: "the mars colonization challenge",
      sub_title:
        "exploring the technical and logical challenges of human colonization on mars",
      likes: 20 + "k",
      comment: 31,
      shares: 12,
    },
  ];
  // for the new array
  const NewsArr = [
    {
      id: 1,
      author: "john techson",
      image: avatar1,
      categories: "technology",
      createdAt: "september 15 2025",
      title: "tech giants announce new product line",
      sub_title:
        "Explore the latest innovations from tech industry leaders, unveiling new products that promise to transform the digital landscape",
      likes: 24.5 + "k",
      comment: 50,
      shares: 20,
    },
    {
      id: 2,
      author: "sarah ethicist",
      image: avatar4,
      categories: "technology",
      createdAt: "august 11 2025",
      title: "the future of autonomous vehicles",
      sub_title:
        "An in-depth analysis of the rapid advancements in autonomous vehicle technology and their impact on transportation.",
      likes: 32 + "k",
      comment: 72,
      shares: 18,
    },
    {
      id: 3,
      author: "astronomer x",
      image: avatar3,
      categories: "technology",
      createdAt: "december 10 2024",
      title: "tech startups secure record funding",
      sub_title:
        "An overview of the recent surge in funding for tech startups, shaping the entrepreneurial landscape.",
      likes: 20 + "k",
      comment: 31,
      shares: 12,
    },
  ];
  // for the active tabs
  const [activeTab, setActiveTab] = useState("all");
  return (
    <TabContext.Provider value={{ activeTab, setActiveTab, BlogArr, NewsArr }}>
      {children}
    </TabContext.Provider>
  );
};
export const useTab = () => {
  return useContext(TabContext);
};
