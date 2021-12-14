import { HttpClient, HttpEventType } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { map } from "rxjs/operators";
import { Post } from "./post.module";
import { PostService } from "./post.service";

@Component({
    selector: 'app-post',
    templateUrl: './post.component.html',
    styleUrls: ['./post.component.scss']
  })
export class PostComponent implements OnInit{
    name="";
    posts: Post[] = [];
    // selectFile: any=null;
    // fileSelected: any;
    fileData: any = null;
    previewUrl:any = null;
    fileUploadProgress: any= null;
    uploadedFilePath: any = null;
    constructor(private postService:PostService, private http:HttpClient) { }
  
    ngOnInit(): void {
    }
  
    //createPost
  onCreatePost(postData: Post){
    console.log(postData);
    this.postService.sentPost(postData);
  }

  
fileProgress(event: any) {
      this.fileData = event.target.files[0];
      // this.fileData = <File>fileInput.target.files[0];
      // this.preview();
}
 
preview() {
    // Show preview 
    var mimeType = this.fileData.type;
    if (mimeType.match(/image\/*/) == null) {
      return;
    }
 
    var reader = new FileReader();      
    reader.readAsDataURL(this.fileData); 
    reader.onload = (_event) => { 
      this.previewUrl = reader.result; 
    }
}
 
// onUpload() {
//   console.log(this.fileData);
//   this.postService.fileUpload(this.fileData);
  


//     // const formData = new FormData();
//     //   formData.append('image', this.fileData);
//     //   this.http.post('https://new-project-faaab-default-rtdb.firebaseio.com/post.json', formData)
//     //     .subscribe(res => {
//     //       console.log(res);
//     //       // this.uploadedFilePath = res.data.filePath;
//     //       alert('SUCCESS !!');
//     //     })
// }
// onSubmit() {
//   const formData = new FormData();
//   formData.append('files', this.fileData);
   
//   this.fileUploadProgress = '0%';

//   this.http.post('https://us-central1-tutorial-e6ea7.cloudfunctions.net/fileUpload', formData, {
//     reportProgress: true,
//     observe: 'events'   
//   })
//   .subscribe(events => {
//     if(events.type === HttpEventType.UploadProgress) {
//       this.fileUploadProgress = Math.round(events.loaded / 100) + '%';
//       console.log(this.fileUploadProgress);
//     } else if(events.type === HttpEventType.Response) {
//       this.fileUploadProgress = '';
//       console.log(events.body);          
//       alert('SUCCESS !!');
//     }
       
//   }) 
// }

}