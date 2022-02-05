import Product from "./Product"

function ProductFeed({products}) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid-flow-row-dense md:-mt-52 mx-auto">
   
    {products.slice(0 , 4).map(({id , title , price , description , category , image}) => (
      <Product
       key={id}
        id={id}
        title={title}
        description={description}
        price={price}
        category={category}
        image={image}
        />        
    ))}
    <img className="md:col-span-full w-full " src="https://news.toyark.com/wp-content/uploads/sites/4/2019/07/Prime-Day-Banner.jpg" alt="" />
    {products.slice(4 , products.length).map(({id , title , price , description , category , image}) => (
      <Product
       key={id}
        id={id}
        title={title}
        description={description}
        price={price}
        category={category}
        image={image}
        />        
    ))}
   
    </div>
  )
}

export default ProductFeed
