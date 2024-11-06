export const getPosts = (req, res) => {
  res.json({ message: "Post List" });
};

export const createPost = (req, res) => {
  res.json({ message: "Post Created" });
};

export const updatePost = (req, res) => {
  res.json({ message: "Post Updated" });
};

export const deletePost = (req, res) => {
  res.json({ message: "Post Deleted" });
};
