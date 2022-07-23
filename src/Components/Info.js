
import '../Style/Info.css'

function Info(props) {

    let image = props.image
    let text = props.text
    let title = props.title

    return (
        <div className="feature-item">
            <img src={image} alt="Chat Icon" className="feature-icon" />
            <h3 className="feature-item-title">{title}</h3>
            <p>{text}</p>
        </div>
    )
}

export default Info