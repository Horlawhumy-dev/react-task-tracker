import Button from './Button'

const Header = () => {
    const onClick = (e) => {
        console.log(e);
    }
    return (
        <header className='header'>
            <div className="div1">
                <h1>Task Tracker</h1>
            </div>
            <div className="div2">
                <Button text=' Add' onClick={onClick}/>
            </div>
        </header>
    )
}

export default Header;
