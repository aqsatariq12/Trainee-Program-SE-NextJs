const products = [
  {
    id: 1,
    name: "Laptop"
  },
  {
    id: 2,
    name: "Mouse"
  },
  {
    id: 3,
    name: "Keyboard"
  },
  {
    id: 4,
    name: "Monitor"
  },
  {
    id: 5,
    name: "Laptop Bag"
  },
  {
    id: 6,
    name: "Headphones"
  }
];


export async function GET(request) {

    const {searchParams} = new URL(request.url);
    const keyword = searchParams.get("q");

    if(!keyword){
        return Response.json(products);
    }

    const result = products.filter(product => product.name.toLocaleLowerCase().includes(keyword.toLocaleLowerCase()));

    return Response.json(result);

}
