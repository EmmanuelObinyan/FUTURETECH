import React from "react";
import { AuthProvider } from "./AuthContext";
import { ObserverProvider } from "./ObserverContext";
import { TabProvider } from "./TabContext";
export const AppProvider=({children})=>{
    return(
      <TabProvider>
     <AuthProvider>
      <ObserverProvider>
       {children}
       {/* for the app provider */}
     </ObserverProvider>
     </AuthProvider>
     </TabProvider>
    )
}
