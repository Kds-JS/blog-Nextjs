import Link from "next/link";



export default function Home() {
  return (
    <div className="container">
      <div>
        <h1>Bienvenue sur Code.io</h1>
        <p>Le blog communautaire des afficianodos de développement web.</p>
      </div>

      <div className="row g-5">

        <div className="col-md-6">

        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Lisez les articles</h5>
            <p className="card-text">Maximixez votre culture web.</p>
            <p className="card-text">
            Chaque auteur tente de vous apporter le plus de valeur possible par article
            </p>
            <Link href="/blog">
              <a>Visitez le blog</a>
            </Link>
          </div>
        </div>

        </div>

        <div className="col-md-6">

        <div className="card ">
          <div className="card-body">
            <h5 className="card-title">Faites un tour vers la liste de membres</h5>
            <p className="card-text">Faites-vous des amis</p>
            <p className="card-text">
              Ajoutez invitez et discutez avec les différentes membres
            </p>
            <Link href="/liste">
              <a>Découvrez la liste de membres</a>
            </Link>
          </div>
        </div>

        </div>


      </div>
      
    </div>
  )
}
