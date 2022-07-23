

function Input(props) {
    let id = props.id
    let type = props.type

    return (
        <div className="input-wrapper">
            <label htmlFor={id}>{id}</label>
            <input type={type} id={id} />
        </div>
    )
}

export default Input