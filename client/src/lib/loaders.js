import apiRequest from "./api-request";

export const singlePageLoader = async ({ request, params }) => {
  const response = await apiRequest.get(`/posts/${params.id}`);
  return response.data;
};
