// Header
function Header() {
  return (
    <nav className="nav">
      <img src="React-logo.png" alt="Raect logo"></img>
      <h3 className="nav--logo-text">ReactsFacts</h3>
      <h4 className="nav--title">React first project</h4>
    </nav>
  );
}

// Main
function Main() {
  return (
    <main>
      <h1 className="main--title">Fun Facts About React</h1>
      <ul className="main--facts">
        <li>Was first released in 2013</li>
        <li>Was originally created by Jordan Walke</li>
        <li>Well has over 100k stars on Github</li>
        <li>Is maintained by Facebook</li>
        <li>Powers thousands of enterprise app,including mobile apps</li>
      </ul>
    </main>
  );
}
const date = new Date().getFullYear();

function Footer() {
  return (
    <footer>
      <small>Simple React single Page created by Basith Abdul {date} </small>
    </footer>
  );
}

ReactDOM.render(
  <div className="container">
    <Header />
    <Main />
    <Footer />
  </div>,
  document.getElementById("root")
);
