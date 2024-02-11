export default function Singer({singer}){
    return (
        <div>
            <h3>{singer.name}</h3>
            <p>{singer.age}</p>
        </div>
    )
}