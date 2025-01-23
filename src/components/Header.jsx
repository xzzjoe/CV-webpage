const Header = ({ setCurrentSection }) => (
    <header>
      <nav>
        <ul>
          <li onClick={() => setCurrentSection("home")}>Home</li>
          <li onClick={() => setCurrentSection("projects")}>Projects</li>
          <li onClick={() => setCurrentSection("about")}>About</li>
          <li onClick={() => setCurrentSection("contact")}>Contact</li>
        </ul>
      </nav>
    </header>
  );

export default Header;