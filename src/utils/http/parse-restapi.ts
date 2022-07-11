import request from './request';

interface Pointer {
  __type: string;
  className: string;
  objectId: string;
}
export interface Post {
  objectId: string;
  createdAt?: Date;
  updatedAt?: Date;
  title?: string;
  desc?: string;
  content?: string;
  category?: Pointer | undefined;
  // tags?: Array<string> | string;
  tags?: any;
  enabled?: boolean;
  views?: number;
}
export class Post implements Post {
  constructor() {}
}
export async function getPostList(): Promise<Post[] | []> {
  let resp: any = await request.get('parse/classes/Post');
  if (!resp.error) {
    return resp.results;
  } else {
    return [];
  }
}
export async function getPost(objectId: string): Promise<any> {
  let resp: any = await request.get(`parse/classes/Post/${objectId}`);
  if (!resp.error) {
    return resp;
  } else {
    return null;
  }
}
export async function savePost(post: Post) {
  let resp: any = await request.post('parse/classes/Post', post);
  return resp;
}

export async function destoryPost(objectId: string) {
  let resp: any = await request.delete(`parse/classes/Post/${objectId}`);
  return resp;
}
export async function editPost(post: Post) {
  console.log(post.desc);
  delete post.createdAt;
  delete post.updatedAt;
  let resp: any = await request.put(
    `parse/classes/Post/${post.objectId}`,
    post
  );
  console.log(resp);

  return resp;
}

export async function getCateList(type: string): Promise<any[]> {
  let where = {
    type: type
  };
  let resp: any = await request.get('parse/classes/Category', {
    data: { where }
  });
  if (!resp.error) {
    return resp.results;
  } else {
    return [];
  }
}
