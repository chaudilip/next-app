import { ISidebarHeaderItem } from "@/types/sidebar-type/sidebar-header-type";

export const sidebarConfig: ISidebarHeaderItem[] = [
  {
    name: "Menu",
    icon: "Menu",
    path: "",
    action: "OPEN_SIDEBAR1",
    shortcut: "/",
  },
  {
    name: "Notice",
    icon: "Megaphone",
    path: "",
    action: "NOTICE",
    shortcut: "",
  },
  {
    name: "Teleport",
    icon: "MapPin",
    path: "",
    action: "OPEN_LOCATIONS",
    shortcut: "",
  },
  {
    name: "Link",
    icon: "Link",
    path: "",
    action: "OPEN_LINKS",
    shortcut: "",
  },
];
