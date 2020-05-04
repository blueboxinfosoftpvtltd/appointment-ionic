import { Component, OnInit } from '@angular/core';
import { VideoPlayer } from '@ionic-native/video-player/ngx';
@Component({
  selector: 'app-playvideo',
  templateUrl: './playvideo.page.html',
  styleUrls: ['./playvideo.page.scss'],
})
export class PlayvideoPage implements OnInit {

  constructor(private videoPlayer: VideoPlayer) { 
    this.videoPlayer.play('http://clips.vorwaerts-gmbh.de/VfE_html5.mp4').then(() => {
    console.log('video completed');
    }).catch(err => {
    console.log(err);
    });
  }

  ngOnInit() {
  }

}
