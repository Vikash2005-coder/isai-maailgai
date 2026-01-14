function PlayerBar(){
    return (
        <div className="player-bar">
            <div className="player-left">
                <div className="cover-square"/>
                <div className="track-info">
                    <div className="track-title">No Song Selected</div>
                    <div className="track-artist">---</div>
                </div>
            </div>
            <div className="player-center">
                <button>{"<<"}</button>
                <button>Play</button>
                <button>{">>"}</button>
            </div>

            <div className="player-right">
                <button>Mute</button>
                <button>Shuffle</button>
                <button>Repeat</button>
                <span>Speed</span>
                <input type="range" min="0" max="100"/>
            </div>
        </div>
    )
}

export default PlayerBar;