const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
  secure: true,
});

export default async function handler(req, res) {
  try {
    const image = await cloudinary.uploader.upload(
      req.body.img,
      {
        folder: "art-transfer",
      },
      async function (error, result) {
        const response = await cloudinary.image(`${result.public_id}.jpg`, {
          sign_url: true,
          transformation: [
            { height: 700, width: 700, crop: "fill" },
            { overlay: req.body.tempId },
            { effect: "style_transfer", flags: "layer_apply" },
          ],
        });
        res.status(200).json(response);
      }
    );
  } catch (error) {
    res.status(400).json(error);
  }
}

export const config = {
  api: {
    bodyParser: {
      sizeLimit: "4mb",
    },
  },
};
