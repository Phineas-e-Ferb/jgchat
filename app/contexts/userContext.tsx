import React, { createContext, useEffect, useState } from "react";
import { User } from "firebase/auth";
import { auth, observerMessage } from "../firebase-config";

type UserContextType = {
  user: User | null;
  setUser: (user: User | null) => void;
};

type UserProviderType = {
  children: React.ReactNode;
};

export const UserContext = createContext<UserContextType>(
  {} as UserContextType
);

export function UserProvider({ children }: UserProviderType) {
  const [user, setUser] = useState<User | null>(null);
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUser(user);
    });
  }, []);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}
