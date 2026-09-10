//Здесь описываем структуру товара и структуру ответа API.

export type ShopProduct = {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
};

export type ProductsResponse = {
  products: ShopProduct[];
};
