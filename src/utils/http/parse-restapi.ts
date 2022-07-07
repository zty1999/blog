import request from './request';

interface Pointer {
  __type: string;
  className: string;
  objectId: string;
}
export interface Post {
  objectId?: string;
  createdAt?: Date;
  updatedAt?: Date;
  title?: string;
  desc?: string;
  content?: string;
  category?: Pointer | undefined;
  tags?: string[];
  enabled?: boolean;
}
export async function getPostList(): Promise<Post[] | []> {
  let resp: any = await request.get('/parse/Post');
  if (!resp.error) {
    return resp.results;
  } else {
    return [];
  }
}
export async function getPost(objectId: string): Promise<any> {
  let resp: any = await request.get(`/parse/Post/${objectId}`);
  if (!resp.error) {
    return resp;
  } else {
    return null;
  }
}
export async function savePost(post: Post) {
  let resp: any = await request.post('/parse/Post', post);
  return resp;
}

export async function destoryPost(objectId: string) {
  let resp: any = await request.delete(`/parse/Post/${objectId}`);
  return resp;
}
export async function editPost(post: Post) {
  console.log(post.desc);
  delete post.createdAt;
  delete post.updatedAt;
  let resp: any = await request.put(`/parse/Post/${post.objectId}`, post);
  console.log(resp);

  return resp;
}