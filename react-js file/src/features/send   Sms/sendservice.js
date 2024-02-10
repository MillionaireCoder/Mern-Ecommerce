import axios from "axios";
import { base_url } from "../../utils/baseUrl";
import { config } from "../../utils/axiosconfig";

const sendsms = async (data) => {
  console.log(data)
  const response = await axios.post(`${base_url}send/`,data,config);

   console.log(response.data)
  return response.data;
};

const sizeService = {
  sendsms,

};

export default sizeService;
