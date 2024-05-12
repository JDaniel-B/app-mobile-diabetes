import { createContext, useEffect, useState, useContext } from "react";
import { getMe } from "../services/patient";

const AuthContext = createContext(null);

const useAuth = (navigation) => {
  const [header, setHeader] = useState();
  const [user, setUser] = useState(null);

  const getPermission = async () => {
    const { userData, error } = await getMe();
    if (error) {
      return navigation.navigate("login");
    }
    setUser(userData);
  };

  useEffect(() => {
    getPermission();
  }, []);

  return { user, header, setHeader };
};

const AuthProvider = ({ children, navigation }) => {
  const auth = useAuth(navigation);
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};

export const useAuthContext = () => useContext(AuthContext);

export default AuthProvider;
