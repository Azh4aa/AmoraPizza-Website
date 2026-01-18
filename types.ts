import { LucideIcon } from 'lucide-react';

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price?: string;
  tags: string[];
  image: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: LucideIcon;
}