import './styles.css';

type Props = {

    name_button: string;
}

export default function Button({ name_button }: Props) {

    return (
        <div className="button-container">
            <button>
                {name_button}
            </button>
        </div>
    );
}