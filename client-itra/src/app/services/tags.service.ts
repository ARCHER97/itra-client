import { Injectable } from '@angular/core';

import { Tag } from '../model/tag';

@Injectable()
export class TagsService {

  constructor() { }

  getTags(): Array<Tag> {
    let tags: Array<Tag> = new Array();
    tags.push(new Tag('sasha'))
    tags.push(new Tag('gray'))
    tags.push(new Tag('hohoho'))
    tags.push(new Tag('Weight'))
    tags.push(new Tag('10'))
    tags.push(new Tag('link'))
    return tags;
  }

}
