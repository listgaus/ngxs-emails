export interface Category {
  id: string;
  name:string;
  parentId: string | number;
}

export interface User {
  id: string;
  name: string;
  email: string
  avatar: string;
}

export interface Email {
  id: string;
  categoryId: string;
  from: string;
  title: string;
  body: string;
}
