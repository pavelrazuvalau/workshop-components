import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Post } from '../../models/post.model';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss']
})
export class AddPostComponent implements OnInit {
  @Input() lastId!: number;
  @Output() addPost = new EventEmitter<Post>();

  @ViewChild('postForm') postForm!: ElementRef<HTMLFormElement>; // querySelector

  newPost = {
    title: '',
    text: '',
  };

  constructor() { }

  ngOnInit(): void {
  }

  onAddPost() {
    this.addPost.emit({
      ...this.newPost,
      likes: 0,
      isLiked: false,
      id: this.lastId + 1,
    });

    this.postForm?.nativeElement.reset();
  }

}
