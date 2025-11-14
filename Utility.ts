


type product = {
    id: number;
    name: string;
    price: number;
    stock: number;
    color?: string
};

type productSummary = Pick <product, 'id'|'name' | 'price'>;

type productWithout = Omit<product, 'stock'>

