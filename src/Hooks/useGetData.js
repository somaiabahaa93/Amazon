import baseURL from "../Api/baseUrl";
export const useGetData=async(url,params)=>{
     const res = await baseURL.get(url);
    return res.data

}


export const useGetDataToken = async (url, parmas) => {
    const config = {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
    }
    const res = await baseURL.get(url, config);
    return res.data;
}

