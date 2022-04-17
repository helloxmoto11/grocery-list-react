const Header = () => {
    const headerStyle = {
        backgroundColor: 'mediumblue',
        color: '#fff',
        width: '100%',
        textAlign: 'center'
    }

    return (
        <header className="header" style={headerStyle}>
            <h1>Grocery List</h1>
        </header>
    )
}

export default Header