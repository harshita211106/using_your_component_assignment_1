// write the book component code here

const Bookcard=({image,name,genre,author})=>{
    return(
        <div style={{border:"1px solid #ccc",padding:"10px",margin:"10px",width:"250px"}}>
            <h1>{name}</h1>
            <img src={image} alt={name} style={{width:"100px",height:"150px",objectFit:"cover"}} />
            <p><strong>Genre: {genre}</strong></p>
            <p><strong>Author: {author}</strong></p>
        </div>
    )

}

export default Bookcard;