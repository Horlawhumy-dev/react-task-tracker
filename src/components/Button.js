import PropTypes from 'prop-types';

// Button Function Component
const Button = (props) => {
    return (
        <button 
        type={props.type} 
        style={{ backgroundColor: props.bgColor}}
        className={props.styles} 
        onClick={props.onClick}>
            <i className={props.classes} aria-hidden="true"></i>
             {props.children}
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
