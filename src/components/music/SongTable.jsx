const fakeSongs=[
    { id: 1, name: "Song One", artist: "Artist A", year: "2020", duration: "3:30" },
  { id: 2, name: "Song Two", artist: "Artist B", year: "2021", duration: "4:10" },
]

function SongTable(){
    return (
        <table className="song-table">
            <thead>
                <tr>
                    <th>No</th>
                    <th>Name</th>
                    <th>Artist</th>
                    <th>Year</th>
                    <th>Duration</th>
                </tr>
            </thead>
            <tbody>
                {fakeSongs.map((s,index) => (
                    <tr key={s.id}>
                        <td>{index+1}</td>
                        <td>{s.name}</td>
                        <td>{s.artist}</td>
                        <td>{s.year}</td>
                        <td>{s.duration}</td>
                    </tr>
                ))
                }
            </tbody>
        </table>
    )
}

export default SongTable;