import { LoginService } from "../service/LoginService";
import { useEffect, useState, useContext } from "react";
import Swal from "sweetalert2";
import Context from "../Context";

export const useLoginForm = ({ history }) => {
  const [users, setUsers] = useState([]);
  const { isAuth, setIsAuth } = useContext(Context);

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

  const onSubmit = async (values) => {
    const user = searchUserAuth(values);
    if (user.length > 0) {
      setIsAuth("authenticated");
      window.sessionStorage.setItem("isAuth", "authenticated");
      history.push("/store");
    } else {
      Swal.fire({
        title: "No es posible ingresar",
        text: "Los datos ingresados son incorrectos.",
        icon: "warning",
      });
    }
  };

  const handleCloseSession = () => {
    setIsAuth(false);
    sessionStorage.removeItem("isAuth");
  };

  return { users, isAuth, onSubmit, searchUserAuth, handleCloseSession };
};
