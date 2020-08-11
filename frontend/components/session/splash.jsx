import React from 'react';
import NavBarContainer from '../navbar/nav_bar_container'
import FooterContainer from '../footer/footer_container'
import { Link } from 'react-router-dom';


class Splash extends React.Component {
  constructor(props) {
    super(props)

  
  }

  // componentDidMount() {
  //   this.props.requestAlbums()
  
  // }




  render() {

    // const albums = this.props.albums

    // const albumKeys = Object.keys(albums)

    // const sixAlbumKeys = albumKeys.slice(12, 18)
    
    // const sixAlbums = sixAlbumKeys.map(key => {
    //   return albums[key]
    // })

    // const sixAlbumsGallery = sixAlbums.map((album, id) => {
    //   return (
    //     <li key={id}><Link to ={`/albums/${album['id']}`}><img src={album['coverArtUrl']} /></Link></li>
    //   )
    // })

    const history = this.props.history

    const historyDup = history.slice()

   console.log(historyDup)

    const historyLi = 
      historyDup.length > 5
        ?
          <ul>
            {historyDup.reverse().slice(0, 6).map((song, id) => {
              return(
                <li>
                  <div className="splash-song-div" key={id}><Link to ={`/albums/${song['album']['id']}`}><img src={song['coverArtUrl']} /></Link>
                    <Link to ={`/albums/${song['album']['id']}`}>
                      <div className="splash-song-name-div">
                        <svg width="30" height="30" viewBox="0 0 130 130">
                          <g>
                            <circle fill="none" stroke="#b3b3b3" stroke-width="4" cx="64" cy="64" r="62" />
                            <polygon fill="#fff" points="45,38 90,64 45,90" />
                          </g>
                        </svg>
                        <h1>{song['song_name']}</h1>
                        <p>{song['artist']['artist_name']}</p>
                      </div>
                    </Link>
                  </div>
                </li>
              )
            })}
          </ul>
        : <ul>
            <li><img src={window.img1URL} /></li>
            <li><img src={window.img2URL} /></li>
            <li><img src={window.img3URL} /></li>
            <li><img src={window.img4URL} /></li>
            <li><img src={window.img5URL} /></li>
            <li><img src={window.img6URL} /></li>
          </ul>
          

    console.log(historyLi)

    // const sixCoverArtUrls = []
    // for(const entry in six) {
    //   sixCoverArtUrls.push(entry['coverArtUrl'])
    // }

    // const sixAlbumsGallery2 = sixCoverArtUrls.map((url, id) => {
    //   return (
    //     <li key={id}><Link to ={`/albums/${album['id']}`}><img src={album['coverArtUrl']} /></Link></li>
    //   )
    // }) 


    return (
      <div>
        <NavBarContainer />

        <section className="section1">
          <div className="section1-div">
            <div className="section1-div1">
              <h1>Jump back in</h1>
              <h2>Pick up your music right where you left off.</h2>
              <div className="web-player-btn-div"><a href="/" className="web-player-btn">OPEN WEB PLAYER</a></div>
            </div>
            <div className="section1-div2">
              {/* <ul> */}
                {historyLi}
               
                
                {/* {sixAlbumsGallery} */}

                {/* {console.log(this.props.history)} */}

                {/* <li><Link to="/albums/1"><img src={window.img1URL} /></Link></li>
                <li><Link to="/albums/2"><img src={window.img2URL} /></Link></li>
                <li><Link to="/albums/3"><img src={window.img3URL} /></Link></li>
                <li><Link to="/albums/4"><img src={window.img4URL} /></Link></li>
                <li><Link to="/albums/5"><img src={window.img5URL} /></Link></li>
                <li><Link to="/albums/6"><img src={window.img6URL} /></Link></li> */}
              {/* </ul> */}

            </div>
          </div>
        </section>

        {/* section 2 and 3 don't have content yet */}
        {/* <section className="section2">
        </section>

        <section className="section3">
        </section> */}

        <FooterContainer />
      </div>
    )
  }
}

export default Splash;


