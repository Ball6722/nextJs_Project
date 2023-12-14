// pages/api/example.js
import axios from "axios";
export default async function handler(req, res) {
  const { slug } = req.query
  // Set CORS headers
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET,OPTIONS,PATCH,DELETE,POST,PUT"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept"
  );
  try {
    // Assuming req.body contains the data you want to send to Directus
    const diseaseData = req.body;

    // Make a POST request to the Directus API
    const response = await axios.put(
      `https://name1-directus.mnmlvk.easypanel.host/items/disease?filter[id_disease]=${slug}`,
      diseaseData
    );
    // Return the response from the Directus API
    res.status(response.status).json(response.data);
  } catch (error) {
    // Handle errors
    res
      .status(error.response?.status || 500)
      .json(error.response?.data || { error: "Internal Server Error" });
  }
}