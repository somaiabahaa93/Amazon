import baseURL from "../Api/baseUrl";

export const useInsertDataeWithImage = async (url, params) => {
  const config = {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };
  const res = await baseURL.post(url, params, config);
  console.log("resssss", res);
  return res;
};

export const useInsertData = async (url, params) => {
    const config = {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      };
      console.log("toooken",config)
  const res = await baseURL.post(url, params,config);
  return res;
};
