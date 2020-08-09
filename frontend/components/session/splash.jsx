import React from 'react';
import NavBarContainer from '../navbar/nav_bar_container'
import FooterContainer from '../footer/footer_container'
import { Link } from 'react-router-dom';


class Splash extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.requestAlbums()
  }

  

  render() {

    const albums = this.props.albums;

    const albumIds = Object.keys(albums)

    // const albumIds = [3, 25, 34, 33, 2, 6, 4, 8, 55, 47, 40, 32, 39]

    const sixAlbumIds = [];
    while (sixAlbumIds.length < 6) {
      const random = Math.floor(Math.random() * albumIds.length) + 1;
      if (sixAlbumIds.indexOf(random) === -1) {
        sixAlbumIds.push(random);
      }
    }
    // console.log(arr);

    const sixAlbums = []    
    sixAlbumIds.map(id => {
      sixAlbums.push(albums[id])
    })

    const sixAlbumsGallery = sixAlbums.map(album => {
      return (
        <li><Link to={`/albums/${album.id}`}><img src={album.coverArtUrl} /></Link></li>
      )
    })
    
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
              <ul>
                {sixAlbumsGallery}
                {/* <li><Link to="/albums/1"><img src={window.img1URL} /></Link></li>
                <li><Link to="/albums/2"><img src={window.img2URL} /></Link></li>
                <li><Link to="/albums/3"><img src={window.img3URL} /></Link></li>
                <li><Link to="/albums/4"><img src={window.img4URL} /></Link></li>
                <li><Link to="/albums/5"><img src={window.img5URL} /></Link></li>
                <li><Link to="/albums/6"><img src={window.img6URL} /></Link></li> */}
              </ul>
              
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


