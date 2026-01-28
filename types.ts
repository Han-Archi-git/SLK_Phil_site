export enum ProjectCategory {
  PLAN = '계획안',
  CONSTRUCTION = '공사중',
  COMPLETED = '완공',
}

export interface BlogPost {
  id: string;
  title: string;
  summary: string;
  content: string; // HTML or Markdown content simulation
  thumbnailUrl: string;
  images: string[];
  date: string;
  category: ProjectCategory;
  naverUrl: string; // Link to the actual Naver blog post
  tags: string[];
}

export interface InquiryFormData {
  name: string;
  contact: string;
  message: string;
}
