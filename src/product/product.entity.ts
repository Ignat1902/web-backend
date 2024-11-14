export class Product {
  id: number;
  name: string;
  description: string;
  category: string;
  price: number;
  //characteristics: { [key: string]: string | number }; // Характеристики товара как объект с ключами и значениями
  images: string[];
  createdAt: Date;
  updatedAt: Date;
}
