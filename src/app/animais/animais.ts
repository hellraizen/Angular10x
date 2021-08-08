export interface Animal {
  id: number;
  postDate: Date;
  url: string;
  description: string;
  allowComments: boolean;
  likes: number;
  commentes: number;
  userId: number;
}

export type Animais = Array<Animal>;
