import "./styles.css"

function UserCard(props) {
    const {email, img, bio, motorcycles, cards} = props.userData

  return (  
    <div className="user-card">
        <img src={img}></img>
       
        < div className="user-card-info">
            
            <p>Bio: {bio}</p>
            <p>Email: {email}</p>

        </div>

    
     
    </div>
  )
}

export default UserCard