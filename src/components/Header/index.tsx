import { Link } from 'react-router-dom';
import './styles.css'

export default function Header() {

    return (

        <header>
            <div className="title-name text-align">
                <Link to="/">
                    <h1>MeuSite</h1>
                </Link>
            </div>
        </header>

    );
}