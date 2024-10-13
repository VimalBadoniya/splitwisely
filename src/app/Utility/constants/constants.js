import { HiMiniUserGroup } from "react-icons/hi2";
import { MdOutlinePerson } from "react-icons/md";
import { RxActivityLog } from "react-icons/rx";
import { IoSettings } from "react-icons/io5";

export const HOME_NAVBAR_OPTIONS = [
  { id: "GROUPS", label: "Groups", route: "/", icon: <HiMiniUserGroup /> },
  {
    id: "FRIENDS",
    label: "Friends",
    route: "/friends",
    icon: <MdOutlinePerson />,
  },
  {
    id: "ACTIVITY",
    label: "Activity",
    route: "/activity",
    icon: <RxActivityLog />,
  },
  { id: "ACCOUNT", label: "Account", route: "/account", icon: <IoSettings /> },
];
