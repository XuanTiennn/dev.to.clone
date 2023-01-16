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
export type PostDTOS = Pick<PostDTO, keyof PostDTO>;
