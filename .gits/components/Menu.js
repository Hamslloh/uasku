import Link from 'next/link';

function Menu(){
  return(
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item" href="#">
            <img src="/"/>
        </a>
        <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-end">
          <Link href="/"><a className="navbar-item"><i className="fas fa-home fa-fw"></i>Home</a></Link>
          <Link href="/profile"><a className="navbar-item"><i className="fas fa-home fa-fw"></i>Profile</a></Link>
          <div className="navbar-item has-dropdown is-hoverable">
          <Link href="/proyek"><a className="navbar-item"><i className="fas fa-home fa-fw"></i>Proyek</a></Link>
          <div className="navbar-dropdown">
            <Link href="/proyek/web-app"><a className="navbar-item"><i className="fas fa-home fa-fw"></i>Web App</a></Link>
            <Link href="/proyek/mobile-app"><a className="navbar-item"><i className="fas fa-home fa-fw"></i>Mobile App</a></Link>
          </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Menu;