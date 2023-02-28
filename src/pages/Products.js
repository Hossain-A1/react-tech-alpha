import Card from "../components/Card";

const productsData = [
  {
    id: 1,
    title: 'LG 65" Smart TV',
    description: "A smart TV is a digital television that is, essentially, an Internet-connected.",
    price: 5449,
    image:
      "https://www.jarir.com/cdn-cgi/image/fit=contain,width=700,height=auto,quality=100,metadata=none/https://ak-asset.jarir.com/akeneo-prod/asset/d/2/9/5/d2950e942c98be64c45905cd73aa32670ceb71a9_604185.jpg",
    reviews: 740,
    category: "TV",
  },
  {
    id: 2,
    title: 'Android power bank',
    description: "A Power Bank is a portable charger designed to recharge your electronic devices when you're on the move.",
    price: 2449,
    image:
      "https://media.istockphoto.com/id/1164679045/photo/power-bank-with-cable-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=4DIQEpPISCej6B0s4LMC8Ws-ndd6FuWJ9V6UGLK5Kf0=",
    reviews: 940,
    category: "power bank",
  },
  {
    id: 3,
    title: 'Smart Headphonse',
    description: 'Headphones are a pair of small loudspeaker drivers worn on or around the head over a user',
    image:
      "https://media.istockphoto.com/id/1199428668/photo/wireless-headphones-isolated-on-white-background-side-view-of-silver-color-stereo-headset.jpg?s=612x612&w=0&k=20&c=XB58mTPLXS_kkK8qc4w3xPiBF8ewUULFtvx6DgxdDvc=",
    price: 549,
    reviews: 1740,
    category: "headphonse",
  },
  {
    id: 4,
    title: "Apple MacBook Pro 13,Touch Bar Laptop",
    description: "The MacBook is a brand of Mac notebook computers designed and marketed by Apple Inc.",
    price: 6449,
    image:
      "https://www.jarir.com/cdn-cgi/image/fit=contain,width=auto,height=auto,quality=100,metadata=none/https://ak-asset.jarir.com/akeneo-prod/asset/0/f/3/b/0f3bf30bcb9a5d97cd8e62a71ca58eb5401047df_589228.jpg",
    reviews: 2740,
    category: "Laptop",
  },
  {
    id: 5,
    title: "Apple MacBook Pro Laptop",
    description: 'The MacBook is a brand of Mac notebook computers designed and marketed by Apple Inc.',
    price: 15449,
    image:
      "https://www.jarir.com/cdn-cgi/image/fit=contain,width=auto,height=auto,quality=100,metadata=none/https://ak-asset.jarir.com/akeneo-prod/asset/m1/delta/571622.jpg",
    reviews: 3740,
    category: "Laptop",
  },
  {
    id: 6,
    title: 'Wireless headphones',
    description: 'eadphones are a pair of small loudspeaker drivers worn on or around the head over a user',
    image:
      "https://media.istockphoto.com/id/1372906882/photo/modern-blue-wireless-headphones-isolated-on-white-background-with-clipping-path.jpg?s=612x612&w=0&k=20&c=0k-2JFElEQ0QTvXsgtLx3i2JotQo_Eb8aEwyN-BOZjA=",
    price: 5449,
    reviews: 740,
    category: "headphonse",
  },
  {
    id: 7,
    title: "Apple iPhone 14",
    description: "The iPhone is a smartphone made by Apple that combines a computer, ",
    price: 3449,
    image:
      "https://www.jarir.com/cdn-cgi/image/fit=contain,width=auto,height=auto,quality=100,metadata=none/https://ak-asset.jarir.com/akeneo-prod/asset/6/2/2/0/62202b8a5a579d4f2a5e5f3a7db851b953065d6a_595133.jpg",
    reviews: 340,
    category: "iphone",
  },
  {
    id: 8,
    title: "TP-Link Archer AX90 Wireless Router",
    description: "Wi-Fi is a wireless technology used to connect computers, tablets, smartphones and other devices to the internet",
    price: 1449,
    image:
      "https://www.jarir.com/cdn-cgi/image/fit=contain,width=auto,height=auto,quality=100,metadata=none/https://ak-asset.jarir.com/akeneo-prod/asset/m1/delta/566248.jpg",
    reviews: 4740,
    category: "wifi",
  },
  {
    id: 9,
    title: "JBL PartyBox 310 Music System",
    description: ' sound box or sounding box (sometimes written soundbox) is an open chamber in the body of a musical instrument.',
    price: 849,
    image:
      "https://www.jarir.com/cdn-cgi/image/fit=contain,width=auto,height=auto,quality=100,metadata=none/https://ak-asset.jarir.com/akeneo-prod/asset/2/6/b/9/26b9000d34828cefdff8b421a9f51d6395da117b_557885.jpg",
    reviews: 7140,
    category: "soundBox",
  },
  {
    id: 10,
    title: "Microsoft Xbox Series S Digital controller",
    description: "an electronic device used to operate another device from a distance, usually wirelessly",
    price: 5449,
    image:
      "https://www.jarir.com/cdn-cgi/image/fit=contain,width=auto,height=auto,quality=100,metadata=none/https://ak-asset.jarir.com/akeneo-prod/asset/m1/delta/555331.jpg",
    reviews: 743,
    category: "controller",
  },
];

const Products = () => {
  return (
    <div className="products-section container mx-auto py-5">
      <h2 className="section-title uppercase text-xl font-bold mb-5 text-center">
        Browse all products
      </h2>
      <div className="products wrapper grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-5 ">
        {productsData.map((product) => [
          <Card key={product.id} product={product}/>
        ])}
      </div>
    </div>
  );
};

export default Products;
