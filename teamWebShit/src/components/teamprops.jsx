const Teamprops = ({header , content , button , image1 , image2 , image3}) => {
   return(
    <div className="Textbox">
            <div className="Garchig" style={{margin:40}}>{header}</div>
            <div className="Content"style={{margin:40}}>{content}</div>
            <div style={{margin:40 , color:"Blue"}}>{button}</div>
            <div className="image1">{image1}</div>
    </div>
   )
}
export default Teamprops