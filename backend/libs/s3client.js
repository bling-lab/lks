import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import { storage } from "./env.js";
const s3 = new S3Client({
  credentials: {
    accessKeyId: storage.accessKeyId,
    secretAccessKey: storage.secretAccessKey,
  },
  region: storage.region,
});

const sendImage = async (name, image) => {
  const command = new PutObjectCommand({
    Bucket: storage.bucket,
    Key: name,
    Body: image.buffer,
    ContentType: image.mimetype,
  });

  const result = await s3.send(command);

  return result;
};

export default sendImage;
