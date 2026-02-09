import React from "react";
import useAuthUser from "../hooks/useAuthUser";
import { useLocation, Link } from "react-router-dom";
import { MessageCircleHeart, BellIcon, LogOutIcon } from "lucide-react";
import ThemeSelector from "./ThemeSelector.jsx";
import useLogout from "../hooks/useLogout";

const Navbar = () => {
  const { authUser } = useAuthUser();
  const location = useLocation();
  const isChatPage = location.pathname?.startsWith("/chat");
  const { logoutMutation } = useLogout();

  const fallbackAvatar = `https://api.dicebear.com/7.x/thumbs/png?seed=${
    authUser?._id || authUser?.id || authUser?.email || "guest"
  }`;

  React.useEffect(() => {
    if (!authUser?.profilePic) return;
    const img = new Image();
    img.src = authUser.profilePic;
  }, [authUser?.profilePic]);

  return (
    <nav className="bg-base-200 border-b border-base-300 sticky top-0 z-30 h-16 flex items-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-end w-full">
          {isChatPage && (
            <div className="pl-5">
              <Link to="/" className="flex items-center gap-2.5">
                <MessageCircleHeart className="size-9 text-primary" />
                <span className="text-3xl font-bold font-mono bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary tracking-wider">
                  My Chats
                </span>
              </Link>
            </div>
          )}

          <div className="flex items-center gap-3 sm:gap-4 ml-auto">
            <Link to="/notifications">
              <button className="btn btn-ghost btn-circle">
                <BellIcon className="h-6 w-6 text-base-content opacity-70" />
              </button>
            </Link>
          </div>

          <ThemeSelector />

          <div className="avatar">
            <div className="w-9 rounded-full overflow-hidden bg-base-300">
              <img
                src={authUser?.profilePic || fallbackAvatar}
                alt="User Avatar"
                loading="lazy"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = fallbackAvatar;
                }}
              />
            </div>
          </div>

          <button
            className="btn btn-ghost btn-circle"
            onClick={() => logoutMutation()}
          >
            <LogOutIcon className="h-6 w-6 text-base-content opacity-70" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
