import { useContext, useEffect, useState } from 'react'

import { ThemeContext } from '../context'

function ShoppingCart() {

    const { shoppingCart, setshoppingCart } = useContext(ThemeContext)
    const [total, settotal] = useState(0)

    const deleteProductHandler = (id) => {

        const index = shoppingCart.indexOf(shoppingCart[id])

        if (index > -1) { // only splice array when item is found
            shoppingCart.splice(index, 1)
            setshoppingCart([...shoppingCart])
        }

    }

    const setTotal = () => {
        var totalPrice = 0
        shoppingCart.map((product) => {
            totalPrice += product.price
        })

        settotal(totalPrice.toFixed(2))
    }

    useEffect(() => {
        // setshoppingCart(prev => [...prev, cart])
        setTotal()
        console.log(shoppingCart)
    }, [shoppingCart]);

    return (
        <section className="h-full bg-gray-100 text-gray-600 antialiased w-[40vw]">
            <div className="flex h-full flex-col justify-center">
                {/* <!-- Table --> */}
                <div className="mx-auto w-full rounded-sm border border-gray-200 bg-white shadow-lg">
                    <header className="border-b border-gray-100 px-5 py-4">
                        <div className="font-semibold text-gray-800">Manage Carts</div>
                    </header>

                    <div className="overflow-x-auto p-3">
                        <table className="w-full table-auto">
                            <thead className="bg-gray-50 text-xs font-semibold uppercase text-gray-400">
                                <tr>
                                    <th></th>
                                    <th className="p-2">
                                        <div className="text-left font-semibold">Product Name</div>
                                    </th>
                                    <th className="p-2">
                                        <div className="text-left font-semibold">Quantity</div>
                                    </th>
                                    <th className="p-2">
                                        <div className="text-left font-semibold">Total</div>
                                    </th>
                                    <th className="p-2">
                                        <div className="text-center font-semibold">Action</div>
                                    </th>
                                </tr>
                            </thead>

                            <tbody className="divide-y divide-gray-100 text-sm">
                                {/* <!-- record 1 --> */}
                                {shoppingCart.map((product, index) => (
                                    <tr key={product.id}>
                                        <td className="p-2 w-[10rem]">
                                            <img src={product.image} className="h-5 w-5"></img>
                                        </td>
                                        <td className="p-2 w-[30vw]">
                                            <div className="font-medium text-gray-800 overflow-scroll">{product.title}</div>
                                        </td>
                                        <td className="p-2">
                                            <div className="text-left">1</div>
                                        </td>
                                        <td className="p-2">
                                            <div className="text-left font-medium text-green-500">{'$'}{product.price}</div>
                                        </td>
                                        <td className="p-2">
                                            <div className="flex justify-center">
                                                <button onClick={() => deleteProductHandler(index)}>
                                                    <svg className="h-8 w-8 rounded-full p-1 hover:bg-gray-100 hover:text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                                                    </svg>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* <!-- total amount --> */}
                    <div className="flex justify-end space-x-4 border-t border-gray-100 px-5 py-4 text-xl font-bold">
                        <div>Total:</div>
                        <div className="text-black"><span>${total}</span></div>
                    </div>

                    <div className="flex justify-end">
                        {/* <!-- send this data to backend (note: use className 'hidden' to hide this input) --> */}
                        <input type="hidden" className="border border-black bg-gray-50" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ShoppingCart