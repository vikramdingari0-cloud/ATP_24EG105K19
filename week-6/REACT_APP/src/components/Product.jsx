function Product(props){
    //state
    const {ProductObj} = props;
    //return a element
    return(
        <div className="m-20">
       <h2 className="text-2xl text-blue-400">{ProductObj.title}</h2>
       
       <p className="">{ProductObj.price}</p>
       <p className="font-mono">{ProductObj.description}</p>
    </div>
        
    )
}
export default Product

