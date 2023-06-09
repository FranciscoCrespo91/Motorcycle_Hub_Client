import './styles.css'
function HomePage() {

  return (
  
    <div> 

  <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="images/Carousel2.jpg" className="carousel-img"></img>
      <div className="carousel-caption d-none d-md-block">
        <h3>Welcome to Motorcycle-Hub!</h3>
        <p>Get ready to ride!</p>
        </div>
      </div>
    
    <div className="carousel-item">
      <img src="images/motorcycles.jpg" className="carousel-img"></img>
      <div className="carousel-caption d-none d-md-block">
        <h3>Brands</h3>
        <p>Want to learn more about motorcycles and their makers?</p>
        <a className="links" href="/motorcycles">Check our list of brands here!</a>
      </div>
    </div>
    <div className="carousel-item">
      <img src="images/marketplace.jpg" className="carousel-img"></img>
      <div className="carousel-caption d-none d-md-block">
        <h3>Marketplace</h3>
        <p> Looking for riding gear? Or just that perfect part for your motorcycle?</p>
        <a className="links" href="/marketplace">Check out our user based Marketplace</a>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>

</div>

)
}

export default HomePage