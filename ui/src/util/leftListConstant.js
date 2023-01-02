import {
  FcHome,
  FcTodoList,
  FcPodiumWithSpeaker,
  FcVideoCall,
  FcLock,
  FcFaq,
  FcElectroDevices,
  FcContacts,
} from "react-icons/fc";
import { BiPurchaseTag } from "react-icons/bi";
import { BsHeartFill } from "react-icons/bs";
import { FiBookOpen } from "react-icons/fi";
const LeftConstant = {
  list: [
    { icon: <FcHome />, name: "Home" },
    { icon: <FcTodoList />, name: "Listings" },
    { icon: <FcPodiumWithSpeaker />, name: "Podcasts" },
    { icon: <FcVideoCall />, name: "Videos" },
    { icon: <BiPurchaseTag />, name: "Tags" },
    { icon: <FcFaq />, name: "FAQ" },
    { icon: <FcLock />, name: "Forem Shop" },
    { icon: <BsHeartFill className="text-red-500" />, name: "Sponsors" },
    { icon: <FcElectroDevices />, name: "About" },
    { icon: <FcContacts />, name: "Contact" },
    { icon: <FiBookOpen className="text-yellow-500" />, name: "Guides" },
    { icon: "😒", name: "Software comparisons" },
  ],
  other: [
    { icon: "👍", name: "Code of Conduct" },
    { icon: "🤗", name: "Privacy Policy" },
    { icon: "👀", name: "Terms of use" },
  ],
};

export default LeftConstant;
