import '../style/cart.css'

export default function Cart(props) {

    return (
        <div className="container">
            <img className='img' src={props.url} alt="heroes" />
            <div className="container_description">
                <div>Имя</div>
                <div className="container_text">{props.name}</div>
                <div>Описание</div>
                <div className="container_text">{props.character}</div>
                <div>Суперсила</div>
                <div className="container_text">{props.abilites}</div>
            </div>

        </div>

    );
}


