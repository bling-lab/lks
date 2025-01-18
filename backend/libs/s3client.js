import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";

const s3 = new S3Client({
  credentials: {
    accessKeyId: "AKIAR72PHCQPR3OTAADP",
    secretAccessKey: "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",
  },
  region: "us-east-1",
});

const sendImage = async (bucket, name, image) => {
  const command = new PutObjectCommand({
    Bucket: bucket,
    Key: name,
    Body: image.buffer,
    ContentType: image.mimetype,
  });

  const result = await s3.send(command);

  return result;
};

export default sendImage;
