import { BookOpen, Users, FolderOpen, Cog, Target, Mail } from "lucide-react";

export const links = [
  {
    name: "Research",
    hash: "#research",
    icon: BookOpen,
  },
  {
    name: "Scope",
    hash: "#scope",
    icon: Target,
  },
  {
    name: "Resources",
    hash: "#resources",
    icon: FolderOpen,
  },
  {
    name: "About",
    hash: "#about",
    icon: Users,
  },
  {
    name: "Product",
    hash: "#product",
    icon: Cog,
  },
  {
    name: "Contact",
    hash: "#contact",
    icon: Mail,
  },
] as const;
