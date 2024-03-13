import './styles.css';
import { Link } from "react-router-dom";
import Button from "../../components/Button";
import HomePage from "../../components/HomePage";


export default function Enrollment() {

    return (
        <section id="section-home-page">
            <div className="title-enrollment">
                <h2>Faça sua inscrição!</h2>
            </div>
            <main>
                <HomePage name_promotion="Página de inscrição" />
            </main>
            <div>
                <Link to="/promotion">
                    <Button name_button="Ver promoção" />
                </Link>
            </div>
        </section>
    );
}