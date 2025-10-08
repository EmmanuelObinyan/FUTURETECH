import React from "react";
import { AuthProvider } from "./AuthContext";
import { TabProvider } from "./TabContext";
export const AppProvider=({children})=>{
    return(
      <TabProvider>
     <AuthProvider>
       {children}
       {/* for the app provider */}
     </AuthProvider>
     </TabProvider>
    )
}
