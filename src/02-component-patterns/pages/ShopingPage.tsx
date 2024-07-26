
import { ProductButtons, ProductCard, ProductImage, ProductTitle } from "../components";
import { products } from "../data/products";

const product = products[0];



export const ShopingPage = () => {

    return (
        <div>
            <h1>Shoping Store</h1>
            <hr />



            <ProductCard
                key={product.id}
                product={product}                
                initialValues = {{
                    count: 4,
                    maxCount: 10
                }}
            >
                {
                    ({ reset, count, increaseBy, isMaxCountReached }) => (
                        <>
                            <ProductImage />
                            <ProductTitle />
                            <ProductButtons />                                    
                        </>
                    )
                }
            </ProductCard>


        </div>
    )
}
