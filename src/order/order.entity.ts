export class Order {
  id: number;
  userId: number; // ID пользователя, связанный с заказом
  items: number[]; // Массив идентификаторов товаров
  totalAmount: number; // Общая сумма заказа
  status: string; // Статус заказа (например, "в ожидании", "доставлен")
  createdAt: Date;
}
