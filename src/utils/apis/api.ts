import axiosWithConfig from "../axiosWithConfig";

export const getAllProducts = async () => {
  try {
    const response = await axiosWithConfig.get("/products");
    return response.data;
    console.log("response :", response);
  } catch (error: any) {
    throw Error(error.response.data.message);
  }
};

export const getDetailProducts = async (id: number) => {
  try {
    const response = await axiosWithConfig.get(`/products/${id}`);
    return response.data;
  } catch (error: any) {
    throw Error(error.response.data.message);
  }
};
