import ImageKit from "imagekit";

if (!process.env.IK_URL_ENDPOINT) {
  throw new Error("Missing ImageKit URL endpoint configuration");
}

if (!process.env.IK_PUBLIC_KEY) {
  throw new Error("Missing ImageKit public key configuration");
}

if (!process.env.IK_PRIVATE_KEY) {
  throw new Error("Missing ImageKit private key configuration");
}

const imagekit = new ImageKit({
  urlEndpoint: process.env.IK_URL_ENDPOINT,
  publicKey: process.env.IK_PUBLIC_KEY,
  privateKey: process.env.IK_PRIVATE_KEY,
});

export default imagekit; 