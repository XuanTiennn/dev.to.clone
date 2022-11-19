import { BsBookmark } from "react-icons/bs";
import { FaRegComment } from "react-icons/fa";
import { RiHeart2Line } from "react-icons/ri";
import PostDTO from "./../../interface/post.interface";

export function Post({
  title,
  createdAt,
  tags,
  likes,
  authorImg,
  authorName,
}: PostDTO) {
  return (
    <div className="bg-white rounded p-4 mb-3">
      <div className="flex">
        <span
          className="rounded overflow-hidden bg-white"
          style={{ width: "30px", height: "30px" }}
        >
          <img
            className="p-1"
            style={{ width: "30px", height: "30px" }}
            src={
              authorImg
                ? authorImg?.toString()
                : "https://res.cloudinary.com/duxzkjxo5/image/upload/v1668239915/dev.to/resized_logo_UQww2soKuUsjaOGNB38o_v7nn3l.png"
            }
          />
        </span>
        <div className="flex flex-col">
          <span className="text-sm">{authorName}</span>
          <span className="text-xs">{Boolean(createdAt) ? createdAt : ""}</span>
        </div>
      </div>
      <div className="p-4">
        <h4 className="text-xl font-semibold">{title}</h4>
        <div>
          {tags.map((tag: any) => (
            <span
              className={`hover:bg-[#${tag.hashTagColor}] cursor-pointer mr-2 text-text14`}
            >
              <span className={`text-[#${tag.hashTagColor}] text-text14`}>#</span>
              {tag.name}
            </span>
          ))}
          <div className="flex justify-between w-full">
            <div className="flex">
              <div className="flex items-center">
                <RiHeart2Line />
                <span className="mx-2">{likes} reactions</span>
              </div>
              <div className="flex items-center mx-2">
                <FaRegComment />
                <span className="mx-2">Add Comment</span>
              </div>
            </div>
            <div className="flex items-center">
              <span className="mr-2">6 min read</span>
              <button>
                <BsBookmark />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
