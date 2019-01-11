export default () => (
  <div className="logo">
    <img src={require("../assets/img/dev_night.png?resize&size=400")} />

    <style jsx>{`
      .logo {
        margin-top: 2rem;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .logo img {
        height: auto;
        width: auto;
        max-width: 400px;
        filter: drop-shadow(4px 4px 8px rgba(255, 255, 255, 0.15));
        -webkit-filter: drop-shadow(4px 4px 8px rgba(255, 255, 255, 0.15));
      }
    `}</style>
  </div>
);
