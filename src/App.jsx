import Sidebar from "./components/layout/Sidebar";
import Header from "./components/layout/Header.jsx";
import PlayerBar from "./components/layout/PlayerBar.jsx";
import PlaylistGrid from "./components/music/PlaylistGrid.jsx";
import SongTable from "./components/music/SongTable";
import "./App.css";

function App(){
  return (
    <div className="app-root">
      <Sidebar/>
      <div className="main-area">
        <Header/>
        <main className="content">
          <h2>Playlists</h2>
          <PlaylistGrid/>
          <h2>Songs</h2>
          <SongTable/>
        </main>
      </div>
      <PlayerBar/>
    </div>
  )
}
export default App;