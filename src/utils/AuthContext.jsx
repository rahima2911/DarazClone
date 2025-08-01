import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  // Load current user from localStorage on app load
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("authUser"));
    if (storedUser) setCurrentUser(storedUser);
  }, []);

  // Signup: Save user to localStorage
  const signup = (userData) => {
    const users = JSON.parse(localStorage.getItem("users")) || [];

    const existing = users.find((u) => u.email === userData.email);
    if (existing) {
      return { success: false, message: "Email already registered." };
    }

    users.push(userData);
    localStorage.setItem("users", JSON.stringify(users));
    return { success: true };
  };

  // Login: Match email and password
  const login = (email, password) => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find((u) => u.email === email && u.password === password);

    if (!user) {
      return { success: false, message: "Invalid email or password." };
    }

    localStorage.setItem("authUser", JSON.stringify(user));
    setCurrentUser(user);
    return { success: true };
  };

  // Logout: Clear user from state and localStorage
  const logout = () => {
    localStorage.removeItem("authUser");
    setCurrentUser(null);
  };

  return (
    <AuthContext.Provider value={{ signup, login, logout, currentUser }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to access AuthContext
export const useAuth = () => useContext(AuthContext);
