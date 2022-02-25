// import React from 'react'

// export default function setup() {
  
//   useFetch
  
  
//     return (
//     <BigList products={products}/>
//   )
// }



// const BigList = ({ products }) => {
//     return (
//        <section className='products'>
//         {products.map((product) => {
//            return <SingleProduct key={product.id} {...product}>
//            </SingleProduct>;
//         }) }
//       </section>
//     );
//   };



// const SingleProduct = ({ fields }) => {
//     let { name, price } = fields;
//     price = price / 100;
//     const image = fields.image [0].url;
           
//     return (
//       <article className='product'>
//          <img src={image} alt={name} />
//          <h4>{name}</h4>
//          <p>${price}</p>
//       </article>
//     );}