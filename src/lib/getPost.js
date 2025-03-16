"use server";

import connectDb from "./connectdb";

export const getAllPost = async (query) => {
  const db = await connectDb();
  const posts = await db.collection("posts").find().toArray();
  return posts;
};

export const seachPost = async (query) => {
  const db = await connectDb();
  const posts = await db
    .collection("posts")
    .find({ $or: [{ name: query }, { category: query }] })
    .toArray();
  return posts;
};
