import './navbar.css'

const Navbar = (props) => {
    return (
        <>
            <nav className={`main navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`} >
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">Demo Project</a>

                    <div className={`custom-control custom-switch mx-1 text-${props.mode === 'dark' ? '#042743' : 'dark'}`}>
                        <input
                            type="checkbox"
                            onClick={props.toggleMode}
                            className="custom-control-input"
                            id="customSwitch1"
                            htmlFor="customSwitch1"
                        />
                    </div>
                </div>
            </nav>
        </>
    )
}


export default Navbar