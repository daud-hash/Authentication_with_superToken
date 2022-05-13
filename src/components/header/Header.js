export const Header = ({onLogout}) => {
    return (
      <div className="header">
        <ul>
          <li>Home</li>
          <li className="logout" onClick={onLogout}>Logout</li>
        </ul>
      </div>
    );
  }