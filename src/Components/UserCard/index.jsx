import "./styles.css"

function UserCard(props) {
    const {email, img, bio,_id} = props.userData

  return (  
    <div className="user-card">
        <img className="user-img" src={img}></img>
        
        <div className="user-card-right">
          <a href={`/profile/edit/${_id}`}>✏️</a>
          
          <div className="user-card-info">
              <strong>Bio:</strong>
              <p> {bio}</p>
              <strong>Email:</strong>
              <p> {email}</p>
          </div>
        </div>

    </div>
  )
}

export default UserCard