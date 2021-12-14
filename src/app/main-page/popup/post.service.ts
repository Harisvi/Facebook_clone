import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Post } from "./post.module";
import { map } from "rxjs/operators";


@Injectable({providedIn:'root'})
export class PostService{
    constructor(private http: HttpClient){}
    posts: Post[] = [];
    // fileSelected: any;
    // baseApiUrl="https://new-project-faaab.appspot.com/post.json";
    // baseApiUrl="https://new-project-faaab-default-rtdb.firebaseio.com/post.json";



    sentPost(postData:Post){
        return this.http.post('https://project-c354c-default-rtdb.firebaseio.com/post.json',postData)
        .subscribe(response=>{
            console.log(response)
        })
    }

    getPost(){
        return this.http.get<{[Key:string]: Post}>('https://project-c354c-default-rtdb.firebaseio.com/post.json')
        .pipe(map(response=>{
            let posts:Post[]=[];
            for(let key in response){
                posts.push({...response[key]});
            }
            return posts;
        }))
    }
    // fileUpload(file:File){
    //      const fd= new FormData();
    //     fd.append("file", file, file.name);
    //     return this.http.post<File>(this.baseApiUrl,fd)  
    //   }
}
    // fileUpload(post:any){
    //      const fd= new FormData();
    //     fd.append('image',this.fileSelected, this.fileSelected.name);
    //     return this.http.post('https://new-project-faaab-default-rtdb.firebaseio.com/post.json',post)  
    //   }
