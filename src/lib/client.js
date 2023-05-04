import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

// import dotenv from "dotenv";
// dotenv.config();

export const client = createClient({
  projectId: "krmm2tu7",
  dataset: "production",
  apiVersion: "2023-05-03",
  useCdn: true,
  token: import.meta.env.VITE_SOME_KEY,
  withCredentials: true,
  cors: {
    credentials: "same-origin", // set this to the appropriate value based on your use case
  },
});
// console.log(import.meta.env.VITE_SOME_KEY);

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
