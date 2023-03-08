


import React, { createContext, useEffect, useState } from 'react'
import { userObserver } from '../auth/firebase';

export const AuthContext=createContext()


 const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(false)
  useEffect(() => {
    //!sayfa render olduğunda kullanıcı bilgilerini tutmak için firebas de oluşan sessionStorage buraya eklendi
    // setCurrentUser(JSON.parse(sessionStorage.getItem("user")));
    userObserver(setCurrentUser)
  }, [])
  
  return (
    <AuthContext.Provider value={{ currentUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;


// import React, { useEffect } from 'react';
// // import { useContext } from 'react';
// import { useState } from 'react';
// import { createContext } from 'react';
// import { userObserver } from '../auth/firebase';

// export const AuthContext = createContext();
// //* with custom hook
// // export const useAuthContext = () => {
// //   return useContext(AuthContext)
// // }

// const AuthContextProvider = ({ children }) => {
//   const [currentUser, setCurrentUser] = useState(false);

//   useEffect(() => {
//     // setCurrentUser(JSON.parse(sessionStorage.getItem('user')));
//     userObserver(setCurrentUser);
//   }, []);

//   return (
//     <AuthContext.Provider value={{ currentUser }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export default AuthContextProvider;
