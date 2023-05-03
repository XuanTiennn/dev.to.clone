interface PostDTO {
  title: String;
  createdAt: any;
  tags: Array<Number>;
  likes: number;
  author?: Object;
  authorImg?: String;
  authorName?: String;
  slug?: string;
  _id?: string;
}
export const defaultPost = {
  title: "",
  createdAt: "",
  tags: [],
  likes: 0,
  author: {},
  authorImg: "",
  authorName: "",
  slug: "",
  _id: "",
};
export default PostDTO;
export type PostDTOS = Pick<PostDTO, keyof PostDTO>;
