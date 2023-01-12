interface PostDTO {
  title: String;
  createdAt: any;
  tags: Array<Number>;
  likes: number;
  author?: Object;
  authorImg?: String;
  authorName?: String;
  slug?: string;
}
export default PostDTO;

export type PostDTOS = Pick<
  PostDTO,
  | "title"
  | "createdAt"
  | "tags"
  | "likes"
  | "author"
  | "authorImg"
  | "authorName"
  | "slug"
>;
