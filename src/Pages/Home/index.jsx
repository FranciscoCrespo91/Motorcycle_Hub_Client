import "./styles.css"

function HomePage() {

  return (
  
    <div> 

  <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img  src="public/images/Carousel1.jpg" class="d-block w-100"></img>
      
        <div class="carousel-caption d-none d-md-block">
        <h3>First slide label</h3>
        <p>Some representative placeholder content for the first slide.</p>
        </div>
      </div>
    
    <div class="carousel-item">
      <img  src="public/images/motorcycles.jpg" class="d-block w-100"></img>
      <div class="carousel-caption d-none d-md-block">
        <h3>Brands</h3>
        <p>Want to learn more about motorcycles and their makers ?!.</p>
        <a href="/motorcycles">Check our list of brands here!!</a>
      </div>
    </div>
    <div class="carousel-item">
      <img  src="public/images/marketplace.jpg" class="d-block w-100"></img>
      <div class="carousel-caption d-none d-md-block">
        <h3>Marketplace</h3>
        <p> Looking for riding gear?? Or just that perfect part for your motorcycle??</p>
        <a href="/marketplace">Check out our user based Marketplace</a>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

</div>

)
}

export default HomePage