import './Header.css'
export const HeaderComponent = ()=>{
    return (
        <div className="header">
            <div className="logo-container">
                <img src="/src/assets/logo.jpg" alt="logo"/>
            </div>
            <div className="header-links">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Login</li>
                    <li>
                      <img src="/src/assets/shopping-cart.png" alt="cart" />
                    </li>
                </ul>
            </div>
          
        </div>
    )
}