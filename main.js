const { default: axios } = require("axios");
const fs = require("fs");
var timestamp = Math.round(new Date().getTime() / 1000);
const cloudinary = require("cloudinary").v2;

var sign = cloudinary.utils.api_sign_request(
  {
    timestamp: timestamp,
    // eager: "w_400,h_300,c_pad|w_260,h_200,c_crop",
    public_id: "yash_public_key",
  },
  "2hxzHabRYnJUlxtwhvOFK-ETcds"
);
console.log(sign);
console.log(timestamp);
const upload_image = async () => {
  const imageData = fs.readFileSync("5-string.jpg");
  const blob = new Blob([imageData.buffer], { type: 'image/jpeg' });
  const formData = new FormData();
  formData.append("file", blob,'yash.jpg');
  formData.append("api_key", "746616798749978");
  formData.append("public_id", "yash_public_key");
  formData.append("signature", sign);
  formData.append("timestamp", timestamp);
  let res = await axios.post(
    "https://api.cloudinary.com/v1_1/daspcmlg7/image/upload",
    formData
  );

  console.log(res.data);
};
upload_image();

