import { Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { Post } from '../../models/post.model';
import { SearchPipe } from '../../pipes/search.pipe';
import { PostComponent } from '../post/post.component';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss'],
})
export class FeedComponent {
  posts = [
    {
      id: 1,
      title: 'Breaking news!',
      text: 'Voluptate labore veniam sit exercitation nisi fugiat voluptate laboris',
      likes: 2,
      isLiked: false
    },
    {
      id: 2,
      title: 'Meows news!',
      text: 'Laborum minim sit incididunt exercitation laborum commodo laborum.',
      likes: 42,
      isLiked: false
    }
  ];
  filteredPosts = this.posts;

  constructor(private searchPipe: SearchPipe) {}

  @ViewChildren(PostComponent) postCards!: QueryList<PostComponent>;

  likePost(targetPost: Post) {
    const postIdx = this.posts.findIndex((post) => post.id === targetPost.id);
    this.posts[postIdx].isLiked = true;
    this.posts[postIdx].likes = this.posts[postIdx].likes + 1;
  }

  unlikePost(targetPost: Post) {
    const postIdx = this.posts.findIndex((post) => post.id === targetPost.id);
    this.posts[postIdx].isLiked = false;
    this.posts[postIdx].likes = this.posts[postIdx].likes - 1;
  }

  onSearch(criteria: string) {
    this.filteredPosts = this.searchPipe.transform(this.posts, criteria);
  }

  addPost(newPost: Post): void {
    this.posts.push(newPost);
  }

  likeAllPosts() {
    this.postCards.forEach(card => card.likePost());
  }

}
