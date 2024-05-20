import baseURL from "../Api/baseUrl";
export const useDeleteData=async(url,params)=>{
  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };
      // console.log("token",`Bearer ${localStorage.getItem("token")}`)
     const res = await baseURL.delete(url,config,params);
    return res.data

}


