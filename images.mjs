import { getJson } from "serpapi";

getJson({
  engine: "google_images",
  q: "government polytechnic mumbai",
  location: "Austin, TX, Texas, United States",
  api_key: "c35279d213745d147b8a3401bf47e49bbca3d221bc5f51407c9e1ccb5c27c53b"
}, (json) => {
  console.log(json);
});
