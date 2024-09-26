export interface Book {
    id: number;
    title: string;
    author: string;
    description: string;
    price: number;
    stock: number;
    imageUrl: string | null;
    category: {
      id: number;
      name: string;
    };
  }
  