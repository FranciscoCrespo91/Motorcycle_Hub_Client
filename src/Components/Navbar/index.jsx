import {Link} from 'react-router-dom';


function Navbar() {

  return (

    <div>
        <Link to = '/'>
            Home
        </Link>

        <Link to = '/marketplace'>
            Marketplace
        </Link>

        {/* <Link to = '/events'>
            Events
        </Link> */} {/* BONUS */}

        {/* <Link to = '/plantrip'>
            Plan Trip
        </Link> */} {/* BONUS */}

    </div>
  )
}

export default Navbar