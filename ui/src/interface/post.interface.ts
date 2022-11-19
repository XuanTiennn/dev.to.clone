interface PostDTO {
  title: String;
  createdAt: any;
  tags: Array<Number>;
  likes: number;
  author?: Object;
  authorImg?: String;
  authorName?: String;
}
export default PostDTO;
