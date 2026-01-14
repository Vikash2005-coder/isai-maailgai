function Sidebar(){
    return (
        <aside className="Sidebar">
            <div className="logo">IsaiMaaligai</div>
            <nav className="sidebar-nav">
                <button>Home</button>
                <button>Search</button>
                <button>My Favourite</button>
            </nav>
            <div className="sidebar-profile">
                <span>Guest</span>
            </div>
        </aside>
    )
}
export default Sidebar;
