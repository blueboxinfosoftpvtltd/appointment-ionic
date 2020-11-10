import { Injectable } from '@angular/core';
import * as aws from 'aws-sdk';
import { Buffer } from 'buffer';

@Injectable({
  providedIn: 'root'
})
export class AwsService {

  private accessKeyId = "AKIARH5747A24LWHRWKT";
  private secretAccessKey = "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";
  private region = "us-east-1";

  constructor() {}

  // upload video to aws s3 bucket
  public uploadVideo(key: string, data: any) {
    var promise = new Promise((resolve, reject) => {
      // prepare aws s3 instance
      let bucket = new aws.S3({
        accessKeyId: 'AKIARH5747A24LWHRWKT',//  
        secretAccessKey: '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',//
        region: 'us-east-1'
      });

      let buf = new Buffer(data, "base64");

      const params = {
        Bucket: 'appointmentids',
        Key: key,
        Body: buf,
        ContentEncoding: "base64",
        ContentType: "image/jpeg"
      };
      
      bucket.upload(params, (err: any, data: any) => {
        if (err) {
          reject(err);
        }
        resolve(data);
      });
    });
    return promise;
  }
}
