import "./styles.css"

function UserCard(props) {
    const {name, email, img, bio, motorcycles, cards} = props.userData

  return (  
    <div className="user-card">
        <img src={img}></img>
       
        < div className="user-card-info">
            
            <p>{bio}</p>
            <p>{email}</p>

        </div>

        <div>
            <a href="#">Create a Motorcycle</a>
            {motorcycles}
        </div>
        <div>
            {cards}
        </div>
        
    </div>
  )
}

export default UserCard