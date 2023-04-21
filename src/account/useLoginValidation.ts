import React from "react";
import { selectUsersData } from "../common/usersSlice";
import { useAppSelector } from "../common/storeHooks";
import { LoginDetails } from "../common/types";
import { User } from "../common/types";

const useLoginValidation = (loginDetails: LoginDetails) => {
  const [loginStatus, setLoginStatus] = React.useState("");
  const usersData = useAppSelector(selectUsersData);

  const validate = () => {
    const currentUser = usersData.find(
      (user: User) => user.email === loginDetails.email
    );
    if (currentUser === undefined) {
      setLoginStatus("data dismatch");
      return;
    }
    if (currentUser.password === loginDetails.password) {
      setLoginStatus("logged in");
    } else {
      setLoginStatus("data dismatch");
    }
  };

  return { loginStatus, validate };
};

export default useLoginValidation;
