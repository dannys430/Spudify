// import React from 'react';


// class SongDiv extends React.Component {
//   constructor(props) {
//     super(props)

//     this.state = {
//       selectedTrack: null
//     };
//   }

//   componentDidUpdate(prevProps, prevState) {
//     if (this.state.selectedTrack !== prevState.selectedTrack) {
//       let track;
//       switch (this.state.selectedTrack) {
//         case "Campfire Story":
//           track = this.props.song.songUrl
//           break;
//         // case "Booting Up":
//         //   track = bootingUp
//         //   break;
//         default:
//           break;
//       }
//       if (track) {
//         this.player.src = track;
//         this.player.play()
//       }
//     }
//   }
  
//   render() {

//      const list = [{ id: 1, title: "Campfire Story" }, { id: 2, title: "Booting Up" }].map(item => {
//       return (
//         <li
//           key={item.id}
//           onDoubleClick={() => this.setState({ selectedTrack: item.title })}
//         >
//           {item.title}
//         </li>
//       );
//     });

//     return (
//       <div>
//         {/* {this.props.song.song_name}
//         <br/>
//         {this.props.song.artist.artist_name}
//         {this.props.song.album.album_name} */}
//         {/* {console.log(this.props.song.songUrl)} */}
//         {/* <audio controls>
//           <source src={this.props.song.songUrl}/>
//         </audio> */}

//         <h1>Audio Player</h1>
//         <ul>{list}</ul>
//         <audio ref={ref => this.player = ref}/>
        
      

//       </div>
//     )
//   }
// }

// export default SongDiv;