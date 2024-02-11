import Image from "next/image";

export default function Home() {
  return (
    <main>
      <header>
        <div className="navbar">
          <a href="#">Your home</a>
          <div className="navbar-buttons">
            <a href="#">Blog</a>
            <a href="#">Projects</a>
            <a href="#">About</a>
            <a href="#">Newsietter</a>
            <p>light/dark</p>
          </div>
        </div>
      </header>
      <hr />
      <h1>INNOGROWTH</h1>
      <hr />
      <h2>titulo #1</h2>
      <img src="#" alt="imagen" />
    </main>
  );
}
