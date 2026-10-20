import { Link } from 'react-router-dom';
import './Layout.css';

export default function Layout({ children }) {
  return (
    <div className="layout">
      <header className="layout__header">
        <strong>Lazy Guy</strong>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/health">Health</Link>
        </nav>
      </header>
      <main className="layout__main">{children}</main>
    </div>
  );
}
