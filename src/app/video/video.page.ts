import { Component, OnInit } from '@angular/core';
import {
  MediaCapture,
  MediaFile,
  CaptureError
} from '@ionic-native/media-capture/ngx';
import { ActionSheetController, Platform } from '@ionic/angular';
import { File, FileEntry } from '@ionic-native/File/ngx';
import { Media, MediaObject } from '@ionic-native/media/ngx';
import { StreamingMedia } from '@ionic-native/streaming-media/ngx';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import { AuthService } from '../auth.service';
import * as firebase from 'firebase';
import * as aws from "aws-sdk";
//AWS.config = new AWS.Config();
    
const MEDIA_FOLDER_NAME = 'appointment';
//const fileTransfer: FileTransferObject;
//const fileTransfer: FileTransferObject = new FileTransferObject();
//const fileTransfer = "";
@Component({
  selector: 'app-video',
  templateUrl: './video.page.html',
  styleUrls: ['./video.page.scss'],
})
export class VideoPage implements OnInit {

  constructor(private mediaCapture: MediaCapture,private file: File,
    private media: Media,
    private streamingMedia: StreamingMedia,private plt: Platform,private ft : FileTransfer,private auth : AuthService) {

      
     }
    files = [];
    path:any;
    
    //fileTransfer = this.ft.create();
  ngOnInit() {
    
//     AWS.config.accessKeyId = "AKIARH5747A24LWHRWKT";
// AWS.config.secretAccessKey = "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";
// AWS.config.region = "east1";
    this.plt.ready().then(() => {
      this.path = this.file.dataDirectory;
      this.file.checkDir(this.path, MEDIA_FOLDER_NAME).then(
        () => {
          //this.loadFiles();
        },
        err => {
          this.file.createDir(this.path, MEDIA_FOLDER_NAME, false);
        }
      );
    });
  }

  video(){
    //let path = this.file.documentsDirectory;
    const transfer = this.ft.create();
    var contentType = '';
    var sliceSize = 512;
   this.file.copyFile(this.file.applicationDirectory + "www/assets/", 'vd.mov', this.path, '425.mov')
   .then((entries) => {
     console.log(entries);
     let dirpath = entries.nativeURL;
     let dirpathsegment = dirpath.split('/');
     dirpathsegment.pop();
     dirpath = dirpathsegment.join('/');
  //    this.file.readAsDataURL(dirpath,entries.name).then((res)=>{
  //      console.log(res);
  //      var parts = res.split(";base64,");
  //      var contentType = parts[0].replace("data:", "");
  //      var base64 = parts[1];
  //      var byteArray = this.base64ToByteArray(base64);
  //      console.log(byteArray);
  //  })
  //    })
     this.file.readAsArrayBuffer(dirpath,entries.name).then(async (buffer)=>{
       //console.log(buffer);
      await this.upload(buffer,entries.name);
       // this.streamingMedia.playVideo(res.Location);
     // }))
     })
    })
  //    let options: FileUploadOptions = {
  //     fileKey: 'filellk',
  //     fileName: entries.name,
  //     headers: {Connection: "close"},
  //     mimeType: 'image/jpeg',
  //     chunkedMode: false
                  
  //  }
  //   transfer.upload(entries.nativeURL, "http://appointmentapiprod.itsguru.com/Images",options)
  //   .then((data) => {
  //     //console.log(data);
  //   }, (err) => {
  //     console.log(err);
  //     // error
  //   })
   //})
  
    // this.mediaCapture.captureVideo().then(
    //   (data: MediaFile[]) => {
    //     if (data.length > 0) {
    //       console.log(data[0].fullPath);
    //      // this.copyFileToLocalDir(data[0].fullPath);
          
    //       this.streamingMedia.playVideo("file://"+data[0].fullPath);
    //     }
    //   },
    //   (err: CaptureError) => console.error(err)
    // );
  }
   base64ToByteArray(base64String) {
    try {            
        var sliceSize = 1024;
        var byteCharacters = atob(base64String);
        var bytesLength = byteCharacters.length;
        var slicesCount = Math.ceil(bytesLength / sliceSize);
        var byteArrays = new Array(slicesCount);

        for (var sliceIndex = 0; sliceIndex < slicesCount; ++sliceIndex) {
            var begin = sliceIndex * sliceSize;
            var end = Math.min(begin + sliceSize, bytesLength);

            var bytes = new Array(end - begin);
            for (var offset = begin, i = 0; offset < end; ++i, ++offset) {
                bytes[i] = byteCharacters[offset].charCodeAt(0);
            }
            byteArrays[sliceIndex] = new Uint8Array(bytes);
        }
        return byteArrays;
    } catch (e) {
        console.log("Couldn't convert to byte array: " + e);
        return undefined;
    }
}

upload(image, imageName) {
   //aws.config.region = "USEast1";
  //   aws.config.update({region: 'us-east-1',accessKeyId :'xGaFO3+0K1ksSFhxdty/lURsOWqI9VUKOB5MWIzH',secretAccessKey : 'AKIARH5747A24LWHRWKT'});
  //   // aws.config.accessKeyId = 'AKIARH5747A24LWHRWKT';
  //   // aws.config.secretAccessKey = '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';
  //   // aws.config.region = 'us-east-1';
  //   // aws.config.signatureVersion = 'v4';
  //   let s3 = new aws.S3();
  //   let blob = new Blob([image],{type:"video/mov"});
  //   const params = {
  //     Body: blob,
  //     Bucket: 'appointmentids',
  //     Key: "Video/"+imageName,
  //     ACL: "public-read",
  //   };
    
  //   s3.putObject(params, (err, data) => {
  //     console.log("Response is", data)
  //     if(err) {
  //       reject(err);
  //     } else { 
  //       resolve(imageName); }
  //   });
  // })
  return new Promise((resolve, reject) => {
  let time = new Date();
    let bucket = new aws.S3(
      {
        accessKeyId: 'AKIARH5747A23AQBWOPR',// AKIARH5747A24LWHRWKT xGaFO3+0K1ksSFhxdty/lURsOWqI9VUKOB5MWIzH
        secretAccessKey: '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',//
        region: 'us-east-1'
      }
    );

    const params = {
      Bucket: 'testdoc0101',
      Key:  time.getTime() + ".mp4",
      Body: image,
      ContentType: "video/mp4"
    };

    console.log("params", params);

    bucket.upload(params, (err, data) => {
          console.log("Response is", data)
          if(err) {
            reject(err);
          } else { 

            this.streamingMedia.playVideo(data.Location);
           // resolve(imageName); 
          }
        });
      })
    // bucket.upload(params, function (err, data) {

    //   console.log("err", err);
    //   console.log("data", data);

    //   if (err) {
    //     console.log('There was an error uploading your file: ', err);
    //     return false;
    //   }

    //   console.log('Successfully uploaded file.', data);
      
    // // return data;
    // });
  //})
}


  // async upload(buffer,name){
  //   //AWS.config = new AWS.Config();
   
  //   // let bucket = new AWS.S3();
  //    let blob = new Blob([new Uint8Array (buffer)],{type:"video/mov"});
  //    console.log(blob);
  //   // bucket.createBucket(function () {
  //   //   var params = {
  //   //     Bucket: 'appointmentids',
  //   //     Key: name+'.png',
  //   //     Body:  blob ,
  //   //     ContentType: 'image/png',
  //   //     ACL: 'public-read'
  //   //   };
  //   //   bucket.upload(params, function (err, data) {
  //   //     if (err) {
  //   //       console.log('error in callback');
  //   //       console.log(err);
  //   //     }
  //   //     console.log('success');
  //   //     console.log(data);
  //   //   });
  //   // });
  //   let storage = firebase.storage();
  //   storage.ref('videos/'+name).put(blob).then((d)=>{
  //     storage.ref('videos/'+name).getDownloadURL().then((res)=>{
  //       console.log(res);
  //       //this.streamingMedia.playVideo(res);
  //     })
  //    // this.streamingMedia.playVideo(d.downloadURL);
  //   },
  //   err => alert(err)
  //   )
  // }

//   copyFileToLocalDir(fullPath) {
//     let myPath = fullPath;
//     // Make sure we copy from the right location
//     if (fullPath.indexOf('file://') < 0) {
//       myPath = 'file://' + fullPath;
//     }
 
//     const ext = myPath.split('.').pop();
//     const d = Date.now();
//     const newName = `${d}.${ext}`;
    
//     const name = myPath.substr(myPath.lastIndexOf('/') + 1);
//     //this.streamingMedia.playVideo(name);
//     const copyFrom = myPath.substr(0, myPath.lastIndexOf('/') + 1);
//     const copyTo = this.file.dataDirectory + MEDIA_FOLDER_NAME;
 
//     this.file.copyFile(copyFrom, name, copyTo, newName).then(
//       success => {
//         // this.file.listDir(this.file.dataDirectory, MEDIA_FOLDER_NAME).then(
//         //   res => {
//         //     this.files = res;
//         //     console.log(this.files);
//         //     //this.streamingMedia.playVideo(this.files[0].nativeURL);

//         //   },
//         //   err => console.log('error loading files: ', err)
//         // );
//         this.loadFiles();
//       },
//       error => {
//         console.log('error: ', error);
//       }
//     );

// }
// loadFiles() {
//   this.file.listDir(this.file.dataDirectory, MEDIA_FOLDER_NAME).then(
//     res => {
//       this.files = res;
//       console.log(this.files);
//       this.streamingMedia.playVideo(this.files[0].nativeURL);
//     },
//     err => console.log('error loading files: ', err)
//   );
// }
}
