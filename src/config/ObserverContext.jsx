import { useState,useContext,createContext,useRef,useEffect } from "react";
import React from "react";

const ObserverContext = createContext();

export const ObserverProvider = ({ children }) => {
  const [visible, setVisible] = useState(false);
  const observerRef = useRef(null);
      useEffect(() => {
        const observer = new IntersectionObserver(
          ([entry]) => {
            setVisible(entry.isIntersecting);
          },
          { threshold: 0.3 }
        );

        if (observerRef.current) {
          observer.observe(observerRef.current);
        }

        return () => {
          if (observerRef.current) {
            observer.unobserve(observerRef.current);
          }
        };
      }, []);

  return (
    <ObserverContext.Provider value={{ visible, setVisible, observerRef }}>
      {children}
    </ObserverContext.Provider>
  );
};

export const useObserver = () => {
  return useContext(ObserverContext);
};