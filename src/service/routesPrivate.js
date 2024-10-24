const PrivateRoute = ({ children }) => {
  const { user } = useAuth(); // Acesse o usuário do contexto
  const location = useLocation();

  if (!user) {
    return <Navigate to="/cadastro" state={{ from: location }} replace />;
  }

  return children;
};