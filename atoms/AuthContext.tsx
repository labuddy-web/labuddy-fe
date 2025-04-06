"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import Cookie from "js-cookie";

interface AuthContextType {
  isLoggedIn: boolean;
  login: () => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // 초기 로그인 상태 확인
  useEffect(() => {
    const accessToken = Cookie.get("access_token");
    const refreshToken = Cookie.get("refresh_token");
    setIsLoggedIn(!!(accessToken && refreshToken));
  }, []);

  const login = () => setIsLoggedIn(true);
  const logout = () => {
    Cookie.remove("access_token");
    Cookie.remove("refresh_token");
    localStorage.clear();
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
