import './styles.css'
import versys from '/images/UserProfile/20221126124035_IMG_0272.jpeg'
import harley from '/images/UserProfile/10636099_771266352937771_3555463709050484848_n.jpg'
import joao from '/images/UserProfile/WhatsApp Image 2023-06-08 at 17.21.121.jpeg'
import xico from '/images/UserProfile/WhatsApp Image 2023-06-08 at 17.28.14.jpeg'

function AboutUsPage() {
  return (

    <div className='about-us'>
        <h1>Hello! We are João Madeira and Francisco Crespo</h1>
        <section className='students'>

          <article className='about-card'>
            <img src={joao} className='about-profile-img'></img>
            <h3>João Madeira</h3>
            <p><strong>About:</strong></p>
            <p>I have been riding motorcycles for 4 years now. I love to take trips through the mountains and visit new places</p>
            <p><strong>Motorcycle:</strong></p>
            <p>Kawasaki Versys Gran Tourer</p>
            <img src={versys} style={{width:'300px', borderRadius:'5px'}}></img>
            <br></br>
            <p><strong>GitHub:</strong><a href='https://github.com/jodmadeira'>  /jodmadeira</a></p>
            <p><strong>LinkedIn:</strong><a href='https://linkedin.com/in/joaoddmadeira'>  /joaoddmadeira</a></p>
          </article>

          <article className='about-card'>
            <img src={xico} className='about-profile-img'></img>
            <h3>Franciso Crespo</h3>
            <p><strong>About:</strong></p>
            <p>I have been riding motorcycles for 4 years now. I love to take trips through the mountains and visit new places</p>
            <p><strong>Motorcycle:</strong></p>
            <p>Harley-Davidson XL 883 N Iron</p>
            <img src={harley} style={{width:'300px', borderRadius:'5px'}}></img>
            <br></br>
            <p><strong>GitHub:</strong><a href='https://github.com/FranciscoCrespo91'>FranciscoCrespo91</a></p>
            <p><strong>LinkedIn:</strong><a href='https://linkedin.com/in/francisco-crespo-m1991'>  /francisco-crespo-m1991</a></p>
          </article>
       
        </section>
    </div>
  )
}

export default AboutUsPage