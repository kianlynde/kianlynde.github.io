import { useState, useEffect } from "react"


function Search(){
    const [filtered, setFiltered] = useState([])
    function fetch(){
        fetch("https://fakestoreapi.com/products")
        .then(response => response.json())
        .then(products => {
            const currentfilt = products.map((product, index) => {
                return(<div>
                    <p>{product.title}</p>
                    <p>{product.price}</p>   
                    <p>{product.image}</p>
                </div>)
            })
            setFiltered(currentfilt)
        })

    }
    useEffect(fetch, [])
    return(
        <div>
            <p>Fake store api</p>
            <div>{filtered}</div>
        </div>
    )
}
export default Search
