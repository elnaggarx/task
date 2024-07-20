import "./HeaderStyles.css";
function Header(){
    return <div className="header">
        <nav>
            <ul className="menu-list">
                <li className="menu-item"><a>Wallet</a></li>
                <li className="menu-item"><a>Balance</a></li>
                <li className="menu-item"><a>Trades</a></li>
                <li className="menu-item "><a className="highlight">Withdrawals</a></li>
                <li className="menu-item"><a>Activities</a></li>
                <li className="menu-item"><a>Documents</a></li>
                <li className="menu-item"><a>Notes</a></li>
                <li className="menu-item"><a>Mail</a></li>
            </ul>
        </nav>
    </div>
}
export default Header;