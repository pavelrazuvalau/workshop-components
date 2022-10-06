import { Pipe, PipeTransform } from '@angular/core';
import { Post } from '../models/post.model';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: Post[], criterion: string): Post[] {
    return value.filter(post => post.title.toLowerCase().includes(criterion.toLowerCase()));
  }

}
