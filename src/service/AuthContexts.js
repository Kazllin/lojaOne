import React, { createContext, useContext, useState } from 'react';

// Cria o contexto
const AuthContext = createContext();

// Provedor de autenticação
export const AuthProvider = ({ children }) => {
  const [user, setUser ] = useState(null); // Estado do usuário

  const login = (userData) => {
    setUser (userData); // Define o usuário logado
  };

  const logout = () => {
    setUser (null); // Remove o usuário logado
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook para usar o contexto
export const useAuth = () => {
  return useContext(AuthContext);
};