import { User } from "../common/types";

const useAddNewUser = (inputs: User) => {
  const addNewUser = () => {
    if (localStorage.getItem("users") === null) {
      localStorage.setItem("users", JSON.stringify([{ ...inputs, id: 11 }]));
    } else {
      const currentUsers = JSON.parse(localStorage.getItem("users") ?? "[]");
      let latestId = currentUsers[0].id;
      for (let i = 0; i < currentUsers.length; i += 1) {
        if (latestId < currentUsers[i].id) {
          latestId = currentUsers[i].id;
        }
      }
      const newUserId = latestId + 1;
      localStorage.setItem(
        "users",
        JSON.stringify([...currentUsers, { ...inputs, id: newUserId }]),
      );
    }
  };
  return addNewUser;
};

export default useAddNewUser;
