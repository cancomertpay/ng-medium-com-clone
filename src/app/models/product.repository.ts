import { Product } from './product.model';
export class ProductRepository {
    private productList: Product[] = [
        {
          id: 1,
          authorImgUrl: "https://picsum.photos/id/30//200/300",
          author: "Yesim Cimcoz",
          title: "Product Title 1",
          description: " ipsum dolor sit, amet consectetur adipisicing elit. Impedit magni accusantium possimus similique errLoremor eius itaque, illo, qui id, iusto quae. Nulla exercitationem reprehenderit cum dolorem sunt debitis, ex expedita!",
          postImgUrl: "https://picsum.photos/id/31/200/300",
          postDate: "Feb 10",
          topic: "",
          isMember: true,
          isActive: true
        }
    ];

    

    getProductList(): Product[] {
        return this.productList.filter(p=>p.isActive)
    }

    getProductById(id: number): Product | undefined {
        return this.productList.find(p=>p.id == id);
    }
}