import baseURL from "../Api/baseUrl";

export const useUpdateDataWithImage=async(url,params)=>{
    const config = {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      };    const res = await baseURL.put(url,params,config);
    console.log("resssss",res)
   return res

}


export const useUpdateData=async(url,params)=>{
    const config = {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      };
     const res = await baseURL.put(url,params,config);
    return res

}


