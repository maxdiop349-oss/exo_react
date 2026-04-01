// import React from 'react'
// import { Outlet, useLocation } from 'react-router-dom'
//    const location = useLocation ();

//   const isLoginPage = location.pathname === "/auth/login";
// export default function AuthLayout() {
//   return (
//        <div className="flex h-screen overflow-hidden items-center justify-center">
//       <div className="w-1/2">
//         <img
//           src={
//             isLoginPage
//               ? "https://i.pinimg.com/736x/c9/fe/2d/c9fe2dd9fc248a3d367b3dfc7ff858ff.jpg"
//               : "https://i.pinimg.com/736x/4d/83/61/4d8361d319543e2bf127382ddf3a4005.jpg"
//           }
//           alt=""
//           className="w-full h-full object-cover"
//         />
//       </div>

//       <div className="w-1/2 bg-gray-100  p-10  overflow-y-auto">
//         <Outlet />
//       </div>
//     </div>
//   );
// };
import { Outlet, useLocation } from "react-router-dom";

export default function AuthLayout() {
  const location = useLocation();

  const isLogin = location.pathname === "/login";

  return (
    <div className="flex h-screen">
      
      {/* LEFT IMAGE */}
      <div className="hidden md:block w-1/2">
        <img
          src={
            isLogin
              ? "https://images.unsplash.com/photo-1521336575822-6da63fb45455"
              : "https://images.unsplash.com/photo-1520975922284-9e0fef3c1b4f"
          }
          alt="auth"
          className="w-full h-full object-cover"
        />
      </div>

      {/* RIGHT FORM */}
      <div className="flex items-center justify-center w-full md:w-1/2 bg-gray-100">
        <Outlet />
      </div>

    </div>
  );
};