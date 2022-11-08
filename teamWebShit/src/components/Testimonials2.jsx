const Testimonials2 = ({ image , head  , content , name }) => {
   return (
   <div className="Container2">
    <img className="image" src = {image}  alt={image} />
    
    <h1><center>
        {head}</center>
        </h1>
        <h5><center>
            {content}
            </center>
        </h5>
    <div className="Name" style={{display:"flex" , flexDirection:"row"}}>
        <img className="a" src= "https://spesialis1.orthopaedi.fk.unair.ac.id/wp-content/uploads/2021/02/depositphotos_39258143-stock-illustration-businessman-avatar-profile-picture.jpg" alt="" />
        <h3 >
            {name}
            </h3>
    </div>
    
   </div>
   )
}
export default Testimonials2