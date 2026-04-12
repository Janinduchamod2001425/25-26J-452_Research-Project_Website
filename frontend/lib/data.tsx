import {
  Home,
  Users,
  FolderOpen,
  Compass,
  Calendar,
  Presentation,
  Mail,
} from "lucide-react";

export const links = [
  {
    name: "Home",
    hash: "#home",
    icon: Home,
  },
  {
    name: "Domain",
    hash: "#domain",
    icon: Compass,
  },
  {
    name: "Milestones",
    hash: "#milestones",
    icon: Calendar,
  },
  {
    name: "Documents",
    hash: "#documents",
    icon: FolderOpen,
  },
  {
    name: "Presentations",
    hash: "#presentations",
    icon: Presentation,
  },
  {
    name: "About",
    hash: "#about",
    icon: Users,
  },
  {
    name: "Contact",
    hash: "#contact",
    icon: Mail,
  },
] as const;
