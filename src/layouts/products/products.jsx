import { useState ,useContext, useEffect } from 'react'
import Card from '../../components/card'
import { ThemeContext } from '../../context'



function Products() {

    const { products } = useContext(ThemeContext)
    const [productsHandler, setproductsHandler] = useState([]);

    useEffect(() => {
        setproductsHandler(products)
    }, [products]);

    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="container px-6 py-10 mx-auto">

                <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 sm:grid-cols-2 xl:grid-cols-4 lg:grid-cols-3">
                    {
                    productsHandler.map((product) => (
                        <div className="w-full " key={product.id}>
                            <Card product={product} />
                        </div>
                    ))
                    }
                </div>
            </div>
        </section>
    )
}

export default Products