import { createContext, useState, type ReactNode } from "react";
import type { User } from "../pages/user-mock.data";

type UserContextProviderProps = {
  children: ReactNode;
};
type AuthStatus = "checking" | "authenticated" | "not-authenticaded";

type UserContextProps = {
  authStatus: AuthStatus;
  user: User | null;
  login: (userId: number) => boolean;
  logout: () => void;
};

export const UserContext = createContext({} as UserContextProps);

export function UserContextProvider({ children }: UserContextProviderProps) {
  const [authStatus, setAuthStatus] = useState<AuthStatus>("checking");
  const [user, setUser] = useState<User | null>(null);

  const handleLogin = (userId: number) => {return true};
  const handleLogout = () => {};

  return (
    <UserContext
      value={{
        authStatus: authStatus,
        user: user,
        login: handleLogin,
        logout: handleLogout,
      }}
    >
      {children}
    </UserContext>
  );
}
