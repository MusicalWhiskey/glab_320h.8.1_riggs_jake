import { Link } from 'react-router-dom'

export default function Nav () {
    return (
      <div className="nav">
        <Link to="/">
          <div>Main</div>
        </Link>
        <Link to="/profile">
          <div>Profile</div>
        </Link>
        <Link to="/about">
          <div>About</div>
        </Link>
        <Link to="/crypto">
          <div>Crypto</div>
        </Link>
      </div>
    );
  }