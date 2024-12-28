import { getJson } from "serpapi";

async function fetchHotelData() {
  try {
    const params = {
      engine: "google_hotels",
      q: "varanasi",
      check_in_date: "2024-07-08",
      check_out_date: "2024-07-09",
      adults: "2",
      currency: "USD",
      gl: "us",
      hl: "en",
      api_key: "e062225632d0d815a1bd06565669819d3bf6f5a12524f8d5991f6aefd7e18c80"
    };

    const result = await getJson(params);
    console.log(result.properties);
  } catch (error) {
    console.error("Error fetching hotel data:", error);
  }
}

fetchHotelData();
