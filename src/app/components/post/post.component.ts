import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Post } from '../../models/post.model';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostComponent {
  @Input() post!: Post;
  @Output() like = new EventEmitter<Post>();
  @Output() unlike = new EventEmitter<Post>();

  likePost() {
    this.like.emit(this.post);
  }

  unlikePost() {
    this.unlike.emit(this.post);
  }
}
