import React from 'react'

const AddProduct =()=>{
    const [name,setName]=React.useState('');
    const [price,setPrice]=React.useState('');
    const [category,setcategory]=React.useState('');
    const [company,setcompany]=React.useState('');
    const [error,setError]= React.useState(false)

    const addProduct=async()=>{

        
        console.warn(!name);
        if(!name || !price || !category || !company)
        {
            setError(true)
            return false;
        }
        console.warn(name,price,category,company);
        const userId=JSON.parse(localStorage.getItem('user'))._id;
        let result=await fetch("http://127.0.0.1:5000/add-product",{
            method:'post',
            body:JSON.stringify({name,price,category,company,userId}),
            headers:{
                "Content-Type":"application/json"
            }
        });
        result= await result.json();
        console.warn(result)
    }


    return(
        <div className='product'>
            <h1>AddProduct</h1>
            <input type="text" placeholder='Enter Product Name' className='inputBox' 
            value={name} onChange={(e)=>{setName(e.target.value)}}/>
            {error && !name && <span className=' invalid-input'>Enter valid name</span>}
            <input type="text" placeholder='Enter Product category' className='inputBox' 
            value={category} onChange={(e)=>{setcategory(e.target.value)}}/>
            {error && !category && <span className='invalid-input'>Enter valid category</span>}
            <input type="text" placeholder='Enter Product price' className='inputBox' 
            value={price} onChange={(e)=>{setPrice(e.target.value)}}/>
            {error && !price && <span className='invalid-input'>Enter valid price</span>}
            <input type="text" placeholder='Enter Product company' className='inputBox' 
            value={company} onChange={(e)=>{setcompany(e.target.value)}}/>
            {error && !company && <span className='invalid-input'>Enter valid company</span>}
            <button onClick={addProduct} className='appButton'>AddProduct</button>
        </div>
           )
    
    
}
export default AddProduct;