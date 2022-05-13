const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
  secure: true,
});

export default async function handler(req, res) {
  try {
    const images = await cloudinary.api.resources({
      type: "upload",
      prefix: "demo",
    });
    res.status(200).json(images.resources);
  } catch (error) {
    res.status(400).json(error);
  }
}
