import { Link } from "react-router-dom";
import Button from "../../../components/Button";
import HomePage from "../../../components/HomePage";

export default function HomeBody() {

    return (
        <section id="section-home-page">
            <main>
                <HomePage name_promotion="Página inicial" />
            </main>
            <div>
                <Link to="/promotion">
                    <Button name_button="Ver promoção" />
                </Link>
            </div>
        </section>
    );
}