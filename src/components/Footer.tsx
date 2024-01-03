const Footer = () => {
  return (
    <footer className="footer navbar-static-bottom">
      <div className="container">
        <a rel="noreferrer" href="#top" className="back-to-top">
          <i className="fa fa-angle-up fa-2x" aria-hidden="true"></i>
        </a>
        <div className="social-links">
          <a rel="noreferrer" href="#!" target="_blank">
            <i className="fa fa-twitter fa-inverse"></i>
          </a>
          <a rel="noreferrer" href="#!" target="_blank">
            <i className="fa fa-linkedin fa-inverse"></i>
          </a>
          <a rel="noreferrer" href="#!" target="_blank">
            <i className="fa fa-github fa-inverse"></i>
          </a>
        </div>

        <hr />

        <p className="footer__text">
          © 2021 - Template developed by
          <a
            rel="noreferrer"
            href="https://github.com/cobiwave"
            target="_blank"
          >
            Jacobo Martínez
          </a>
        </p>

        <p className="mt-3 pt-3">
          <a
            rel="noreferrer"
            className="github-button"
            href="https://github.com/cobiwave/simplefolio/fork"
            data-icon="octicon-repo-forked"
            data-size="large"
            data-show-count="true"
            aria-label="Fork ntkme/github-buttons on GitHub"
          >
            Fork
          </a>
          <a
            rel="noreferrer"
            className="github-button"
            href="https://github.com/cobiwave/simplefolio"
            data-icon="octicon-star"
            data-size="large"
            data-show-count="true"
            aria-label="Star cobiwave/simplefolio on GitHub"
          >
            Star
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
