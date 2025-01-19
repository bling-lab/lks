import "dotenv/config";

const database = {

    name: process.env.DATABASE_name,
    host: process.env.DATABASE_host,
    port: process.env.DATABASE_port,
    user: process.env.DATABASE_user,
    pass: process.env.DATABASE_pass,
}

const storage = {
    accessKeyId: process.env.STORAGE_accessKeyId,
    secretAccessKey: process.env.STORAGE_secretAccessKey,
    region: process.env.STORAGE_region,
    bucket: process.env.STORAGE_bucketName,
    baseUrl: process.env.STORAGE_baseUrl
}

const { iface } = process.env.NETWORK_iface

export { database, storage, iface };

