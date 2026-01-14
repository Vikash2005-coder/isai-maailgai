const fakePlaylists = [
    {id:1, name:"Workout"},
    {id:2, name:"Chill"},
    {id:3, name:"Happy"},
    {id:4, name:"Relaxing"},
    {id:5, name:"Rock"},
]
function PlaylistGrid(){
    return (
        <div className="playlist-grid">
            {fakePlaylists.map((pl)=>(
                <div key={pl.id} className="playlist-card">
                    <div className="playlist-cover"/>
                    <div className="playlist-name">{pl.name}</div>
                </div>
            ))}
        </div>
    )
}
export default PlaylistGrid;