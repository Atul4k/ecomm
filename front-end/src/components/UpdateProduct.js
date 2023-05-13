import React, { useEffect } from 'react'
import { useParams,useNavigate } from 'react-router-dom';

const UpdateProduct = () => {
    const [name, setName] = React.useState('');
    const [price, setPrice] = React.useState('');
    const [category, setcategory] = React.useState('');
    const [company, setcompany] = React.useState('');
    const [error, setError] = React.useState(false)
    const params = useParams();
    const navigate= useNavigate();

    useEffect(() => {
        getProductDetails();
    }, [])

    const getProductDetails = async () => {

        console.warn(params);
        let result = await fetch(`http://127.0.0.1:5000/product/${params.id}`);
        result = await result.json();
        setName(result.name)
        setPrice(result.price)
        setcategory(result.category)
        setcompany(result.company)
    }
    const updateProduct = async () => {
        console.warn(name, price, category, company)
        let result =  await fetch(`http://127.0.0.1:5000/product/${params.id}`, {
            method: 'Put',
            body: JSON.stringify({ name, price, category, company }),

            headers: {
                'Content-Type': "application/json"
            }
        });
        result = await result.json()
        console.warn(result);
        navigate('/')
    } 


    return (
        <div className='product'>
            <h1>Update Product</h1>
            <input type="text" placeholder='Enter Product Name' className='inputBox'
                value={name} onChange={(e) => { setName(e.target.value) }} />

            {error && !name && <span className=' invalid-input'>Enter valid name</span>}
            <input type="text" placeholder='Enter Product category' className='inputBox'
                value={category} onChange={(e) => { setcategory(e.target.value) }} />
            {error && !category && <span className='invalid-input'>Enter valid category</span>}
            <input type="text" placeholder='Enter Product price' className='inputBox'
                value={price} onChange={(e) => { setPrice(e.target.value) }} />
            {error && !price && <span className='invalid-input'>Enter valid price</span>}
            <input type="text" placeholder='Enter Product company' className='inputBox'
                value={company} onChange={(e) => { setcompany(e.target.value) }} />
            {error && !company && <span className='invalid-input'>Enter valid company</span>}
            <button onClick={updateProduct} className='appButton'>UpdateProduct</button>
        </div>
    )


}
export default UpdateProduct;