import { LoginService } from "../service/LoginService";
import { useEffect, useState } from "react";

export const useLoginForm = ({ history }) => {
  const [users, setUsers] = useState([]);
  const [isAuth, setIsAuth] = useState(false);

  const getUsers = async () => {
    try {
      const data = await LoginService();
      setUsers(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  const searchUserAuth = (user) => {
    const userAuth = users.filter(
      (item) => item.email === user.email && item.password === user.password
    );

    return userAuth;
  };

  const onSubmit = async (values, actions) => {
    const user = searchUserAuth(values);
    if (user.length > 0) {
      setIsAuth(true);
      history.push("/store");
    } else {
      console.error("usuario no existe")
    }
  };

  return { users, isAuth, onSubmit };
};
