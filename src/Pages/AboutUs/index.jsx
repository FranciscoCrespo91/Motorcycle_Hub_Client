import './styles.css'
import versys from '/images/UserProfile/20221126124035_IMG_0272.jpeg'

function AboutUsPage() {
  return (

    <div>
        <h1>Hello! We are João Madeira and Francisco Crespo</h1>
        <section>
          <article>
            <img src=''></img>
            <h3>João Madeira</h3>
            <p><strong>About:</strong></p>
            <p>I have been riding motorcycles for 4 years now. I love to take trips through the mountains and visit new places</p>
            <p><strong>Motorcycle:</strong></p>
            <p>Kawasaki Versys Gran Tourer</p>
            <img src={versys} style={{width:'200px'}}></img>
            <p><strong>GitHub:</strong><a href='https://github.com/jodmadeira'>  /jodmadeira</a></p>
            <p><strong>LinkedIn:</strong><a href='https://linkedin.com/in/joaoddmadeira'>  /joaoddmadeira</a></p>
          </article>
          <article>
          <img src=''></img>
            <h3>Franciso Crespo</h3>
            <p><strong>About:</strong></p>
            <p>I have been riding motorcycles for 4 years now. I love to take trips through the mountains and visit new places</p>
            <p><strong>Motorcycle:</strong></p>
            <p>Harley-Davidson XL 883 N Iron</p>
            <img src=''></img>
            <p><strong>GitHub:</strong><a href='https://github.com/FranciscoCrespo91'>FranciscoCrespo91</a></p>
            <p><strong>LinkedIn:</strong><a href='https://linkedin.com/in/francisco-crespo-m1991'>  /francisco-crespo-m1991</a></p>
          </article>
        </section>
    </div>
  )
}

export default AboutUsPage