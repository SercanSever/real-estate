import apiRequest from "./api-request";

export const singlePageLoader = async ({ params }) => {
  const response = await apiRequest.get(`/posts/${params.id}`);
  return response.data;
};

export const listPageLoader = async ({ request }) => {
  const query = request.url.split("?")[1];
  const postPromise = apiRequest.get("/posts?" + query);

  return {
    postPromise,
  };
};

export const profilePageLoader = async ({ request, params }) => {
  const postPromise = apiRequest.get("/user/profilePosts");
  return {
    postPromise,
  };
};
