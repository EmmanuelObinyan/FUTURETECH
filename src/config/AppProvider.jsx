import React from "react";
import { AuthProvider } from "./AuthContext";
import { ProfileProvider } from "./ProfileContext";
import { ObserverProvider } from "./ObserverContext";
import { TabProvider } from "./TabContext";
export const AppProvider=({children})=>{
    return(
      <ProfileProvider>
      <TabProvider>
     <AuthProvider>
      <ObserverProvider>
       {children}
       {/* for the app provider */}
     </ObserverProvider>
     </AuthProvider>
     </TabProvider>
     </ProfileProvider>
    )
}
