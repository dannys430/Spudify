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



    // THIS WORKS
    // const albums = Object.keys(this.props.albums)
    // var arr = [];
    // for(let i = arr.length; arr.length < 2; i++) {
    //   var r = Math.floor(Math.random() * albums.length);
    //   if (!arr.includes(r)) arr.push(r);
    // }
    // console.log(arr);

    const albums = this.props.albums;
    const albumIds = Object.keys(albums)

    // const albumIds = [26, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]
    // const albums = {1:'apple', 2:'orange', 3:'nectarine', 4:'mango', 5:'plum', 6:'lemon'}
    // const albumIds = [1, 2, 3, 4, 5, 6]

    
    let sixIds = []
    while(sixIds.length < 5) {
      let rand = Math.floor(Math.random() * albumIds.length)
      if(albumIds.includes(rand) && !sixIds.includes(rand)) {
        sixIds.push(rand)
      }
    }
    const sixAlbums = sixIds.map(id => {
      return albums[id]
    })

    const albumsGallery = sixAlbums.map((album, id) => {
      return (
        <li key={id}><Link to={`/albums/${album.id}`}><img src={album.coverArtUrl} /></Link></li>
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
                {albumsGallery}
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


