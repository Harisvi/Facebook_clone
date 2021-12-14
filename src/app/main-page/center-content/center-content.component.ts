import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Post } from '../popup/post.module';
import { PostService } from '../popup/post.service';

@Component({
  selector: 'app-center-content',
  templateUrl: './center-content.component.html',
  styleUrls: ['./center-content.component.scss']
})
export class CenterContentComponent implements OnInit {
  name="";
  posts: Post[] = [];
  fileData: any = null;
  previewUrl:any = null;
  fileUploadProgress: any= null;
  uploadedFilePath: any = null;
  constructor(private postService:PostService, private http:HttpClient) { }

  ngOnInit(): void {
    this.getPost();
  }

  //imageUrl
  url:any=[
    {bg:"/assets/img/bg1.jpg",pp:"/assets/img/pp1.jpg",name:"venki"},
    {bg:"/assets/img/bg2.jpg",pp:"/assets/img/pp2.jpg",name:"hari"},
    {bg:"/assets/img/bg3.jpg",pp:"/assets/img/pp3.jpg",name:"nithi"},
    {bg:"/assets/img/bg4.jpg",pp:"/assets/img/pp4.jpg",name:"nisanth"},
  ]

  //createPost
  onCreatePost(postData: Post){
    console.log(postData);
    this.postService.sentPost(postData);
    // form.reset();
  }
  fileProgress(event:any) {
    this.fileData = <File>event.target.files[0];
    this.preview();
 }
preview(){
  var reader = new FileReader();      
    reader.readAsDataURL(this.fileData); 
    reader.onload = (_event) => { 
      this.previewUrl = reader.result; 
    }
}

// onUpload() {
//   this.postService.fileUpload(this.fileData)
//   .subscribe(File=>{
//     console.log(File);
//   })
// }

  //getpost
  getPost(){
    this.postService.getPost()
      .subscribe((response:any)=>{
          console.log(response);
          this.posts= response;
      })
    
}

}
