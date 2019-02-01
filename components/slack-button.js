import { FaSlack } from "react-icons/fa";

export default () => (
  <button
    onclick="location.href='https://slack.dev-night.io'"
    className="btn btn-primary"
  >
    Join the community
    <span>
      <FaSlack />
    </span>
    <style jsx>{`
      span {
        font-size: 2em;
        font-weight: 400;
        padding-left: 7px;
      }
      button {
        color: #fff;
        background-color: #2196f3;
        border: 1px solid #2196f3;
        font-size: 1.3rem;
        font-weight: 700;
        border-radius: 5px;
      }
    `}</style>
  </button>
);
