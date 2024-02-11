import './Book.css';

export default function Book({book}) {
    const {name, price} = book;
    return (
        <div className='book'>
            <h3>{name}</h3>
            <p>{price}</p>
        </div>
    )
}