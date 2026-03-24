
import ShopDetailsMainArea from "@components/product-details/product-details-area-main";


export const metadata = {
  title: "Product Details - Maathrey Wellness",
};

const ProductDetailsPage = async ({ params }) => {
  const { id } = await params;
  return <ShopDetailsMainArea id={id} />;
};

export default ProductDetailsPage;
