import React, { useEffect, useState } from "react";

const ProtectedRouteHook = () => {
  
  const [userData, setUserData] = useState( JSON.parse(localStorage.getItem("user")))
  
  const [isUser, setIsUser] = useState();
  const [isAdmin, setIsAdmin] = useState();

  useEffect(() => {
    if (userData !== null) {
      if (userData.role==='user') {
      

        setIsAdmin(false);
        setIsUser(true);
           } else {
            setIsAdmin(true);
            setIsUser(false);
      }
    } 
    else 
    {
        setIsAdmin(false);
        setIsUser(false);
    }
  }, []);


 


   

  return [userData,isAdmin,isUser];
};

export default ProtectedRouteHook;
