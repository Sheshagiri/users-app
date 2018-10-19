import { Component, OnInit, EventEmitter, Output, Input} from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import { Post } from '../../models/Posts';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {
  @Output() newPost: EventEmitter<Post> = new EventEmitter();
  @Output() updatedPost: EventEmitter<Post> = new EventEmitter();
  @Input() currentPost: Post;
  @Input() isEdit: boolean;
  constructor(private postService: PostService) { }

  ngOnInit() {
  }

  addPost(title,body){
    if(!title || !body){
      alert("Please add post")
    } else{
      this.postService.savePost({title,body} as Post).subscribe(post => {
        console.log(post);
        this.newPost.emit(post);
      })
      console.log(title,body);
    }
  }

  updatePost(post: Post){
    console.log('inside updatePost');
    this.postService.updatePost(this.currentPost).subscribe(post => {
      console.log('updated the current post.');
      console.log(post);
      this.isEdit = false;
      this.updatedPost.emit(post);
    });
  }

}
