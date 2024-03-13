import './styles.css';

type Props = {
    name_promotion: string;
}

export default function HomePage({ name_promotion }: Props) {

    return (

        <main className="home-page-container">
            <div className="home-page">
                <h3>{name_promotion}</h3>
            </div>
        </main>


    );
}