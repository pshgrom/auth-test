import axios from "axios";

export const login = async (email, password) => {
  const { data } = await axios.post("/login", {
    email,
    password,
  });
  localStorage.setItem("token", data.token);
  localStorage.setItem("user", JSON.stringify(data.user));
  return data;
};
