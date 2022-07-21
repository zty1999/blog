import store from '@/store';
import request from './request';

interface Pointer {
  __type: string;
  className: string;
  objectId: string;
}
export interface EntifyPost {
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
type Point = { [x: number]: number; y: string };
type P = keyof Point;
// type P:"x" | "y";
let ddd: P = 777;

interface Attributes {
  [key: string]: any;
}
interface BaseAttributes {
  createdAt: Date;
  objectId: string;
  updatedAt: Date;
}

export class Post implements EntifyPost {
  public objectId: string = '';
  public createdAt?: Date = undefined;
  public updatedAt?: Date = undefined;
  title?: string;
  desc?: string;
  content?: string;
  category?: Pointer | undefined;
  // tags?: Array<string> | string;
  tags?: any;
  enabled?: boolean;
  views?: number;
  constructor() {}
}

export class TPost extends Post {
  public objectId: string = '';
  super() {}
  public equalTo<K extends keyof Attributes | keyof BaseAttributes>(
    key: K,
    val:
      | String
      | Boolean
      | Number
      | Object
      | Array<any>
      | Pointer
      | null
      | undefined
  ): this {
    // this._where[key] = (0, _encode.default)(value, false, true);
    // this => 当前class  Post
    return this;
  }
  public find<K extends keyof Attributes | keyof BaseAttributes>(): this {
    // this._where[key] = (0, _encode.default)(value, false, true);
    // this => 当前class  Post
    return this;
  }
}
export interface restrict  {
  limit: number,
  skip:number,
  current:number
}
/* 
* count 是否分页  1 分页
*/
export async function getPostList(restrict?:restrict): Promise<any[] | []> {
  let params: any = {};
  if(restrict){
    params.limit = restrict.limit?restrict.limit:10;
    params.skip = restrict.skip?restrict.current * restrict.limit:0;
    params.skip = restrict.skip?restrict.current * restrict.limit:0;
  }
  params.count=1
  let resp: any = await request.get('parse/classes/Post', { params });
  if (!resp.error) {
    console.log(resp);
    
    return [resp.results,resp.count];
  } else {
    return [];
  }
}
export async function getPostListByTitle(title?: string): Promise<Post[] | []> {
  let params: any = {};
  if (title) {
    params.where = {
      title: {
        // $regex: `^${title}` // 正则匹配 模糊匹配
        "$text":{"$search":{"$term":title}}
      }
    };
  }
  let resp: any = await request.get('parse/classes/Post', { params });
  if (!resp.error) {
    return resp.results;
  } else {
    return [];
  }
}
export async function getPostListByCate(cateId?: string): Promise<Post[] | []> {
  let params: any = {};
  if (cateId) {
    params.where = {
      category: cateId
    };
  }
  let resp: any = await request.get('parse/classes/Post', { params });
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
  delete post.createdAt;
  delete post.updatedAt;
  let resp: any = await request.put(
    `parse/classes/Post/${post.objectId}`,
    post
  );
  return resp;
}

export async function getCateList(type: string): Promise<any[]> {
  let where = {
    type: type
  };
  let resp: any = await request.get('parse/classes/Category', {
    params: { where }
  });
  if (!resp.error) {
    return resp.results;
  } else {
    return [];
  }
}

export async function getArchiveList(): Promise<any[]> {
  let resp: any = await request.get('api/post/archive-count', {
    params: { company: store.state.company }
  });
  if (!resp.error) {
    return resp.data;
  } else {
    return [];
  }
}

export async function getArchivePosts(
  year: string,
  month: string
): Promise<any[]> {
  let resp: any = await request.get('api/post/posts-archive', {
    params: { company: store.state.company, year, month }
  });
  if (!resp.error) {
    return resp.data;
  } else {
    return [];
  }
}


export async function getTimelinePosts(): Promise<any[]> {
  let resp: any = await request.get('api/post/posts-timeline', {
    params: { company: store.state.company }
  });
  if (!resp.error) {
    console.log(resp);
    
    return resp.data;
  } else {
    return [];
  }
}



