"use client";

import { useEffect, useState } from "react";
import Cookie from "js-cookie";

export function useIsLoggedInByCookie() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const accessToken = Cookie.get("access_token");
    const refreshToken = Cookie.get("refresh_token");
    setIsLoggedIn(!!(accessToken && refreshToken));
  }, []);

  return isLoggedIn;
}
