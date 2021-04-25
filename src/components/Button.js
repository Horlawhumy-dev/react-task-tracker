import PropTypes from 'prop-types';

// Button Function Component
const Button = (props) => {
    return (
        <button className="btn" onClick={props.onClick}>
            <i className="fa fa-plus" aria-hidden="true"></i>
             {props.text}
        </button>
    )
}  

// Button.defaultProps = {
//     color: 'steelblue'
// }

Button.propTypes = {
    text: PropTypes.string,
    onClick: PropTypes.func
//    color: PropTypes.string
}

export default Button;
