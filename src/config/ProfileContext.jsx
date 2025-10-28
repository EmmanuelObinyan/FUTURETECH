import React,{useContext,createContext,useState,useEffect} from "react";
import { setDoc,doc,updateDoc } from "firebase/firestore";
import { storageRef,Auth,db } from "./Firebase";
import { ref,deleteObject,uploadBytes,getDownloadURL } from "firebase/storage";
const ProfileContext=createContext()

export const ProfileProvider=({children})=>{
        //  for the profile update
        
      return(
        <ProfileContext.Provider value={undefined}>
             {children}
        </ProfileContext.Provider>
      )
}
  export const useProfile=()=>{
     return useContext(ProfileContext)
  }