import './styles.css';

function Cover({movie}) {

  const coverUrl = "https://image.tmdb.org/t/p/";

  let largura = window.innerWidth 
    || document.documentElement.clientWidth
    || document.body.clientWidth;
    let capa = {}
    if(largura<800){
        capa = `w500${movie.poster_path}`;
    }
    else{
        capa = `original${movie.backdrop_path}`;
  }

  return (
    <section className="featured" style={{
            backgroudSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center top',
            backgroundImage: `url(${coverUrl + capa})`
        }}>
            <div className="featured--vertical">
                <div className="featured--horizontal">
                </div>
            </div>
    </section>
  )
}

export default Cover