import Button from './Button'

const Header = (props) => {
 
    return (
        <header className='header'>
            <div className="div1">
                <h1>Task Tracker</h1>
                <Button 
                    styles='btn-add' 
                    bgColor={props.showAdd ? 'crimson': 'green'}
                    onClick={props.onAdd}>
                    {props.showAdd ? 'Close':'Add'}
                </Button>
            </div>
        </header>
    )
}

export default Header;
