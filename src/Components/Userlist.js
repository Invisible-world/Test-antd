const Userlist = ({ item }) => {
    console.log(item)
    return (
        <>
           
               
               <p><strong style={{marginRight:'1rem',color:'red'}}>{item.id}</strong>
                   {item.title}
                   </p>
               
        
               
           
        </>
    )
}

export default Userlist
