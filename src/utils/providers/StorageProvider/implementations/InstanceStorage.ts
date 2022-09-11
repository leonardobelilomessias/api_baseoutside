import { IStorageProvider } from "../IStorageProvide";
import { LocalStorageProvider } from "./LocalStorageProvider";
import { S3StorageProvider } from "./S3StorageProvider";
  
  const Storage = { local:LocalStorageProvider,
  s3: S3StorageProvider}

  export{Storage }