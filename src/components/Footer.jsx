import React from "react";

const Footer = () => {
  return (
    <footer className="footer bg-base-200 text-base-content p-10 flex flex-col md:flex-row justify-center gap-10 md:gap-48 items-center">
      <aside className="flex flex-col items-center md:items-start text-center md:text-left">
        <img src="/paw.svg" alt="PawMart Logo" width="50" height="50" />
        <p>
          <span className="font-bold text-lg">PawMart</span>
          <br />
          PawMart connects local pet owners and buyers for
          <br />
          adoption and pet care products.
          <br />
          <span className="text-sm opacity-70">
            Copyright © {new Date().getFullYear()} - All right reserved
          </span>
        </p>
        <div className="flex gap-4 mt-2">
          {/* X (Twitter) Icon */}
          <a href="https://x.com/" target="_blank" className="link link-hover">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
            </svg>
          </a>
          <a
            href="https://www.youtube.com/"
            target="_blank"
            className="link link-hover"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
            </svg>
          </a>
          <a
            href="https://www.facebook.com/"
            target="_blank"
            className="link link-hover"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
            </svg>
          </a>
        </div>
      </aside>

      <nav className="flex flex-col items-center md:items-start text-center md:text-left">
        <h6 className="footer-title">Useful Links</h6>
        <a href="/" className="link link-hover">
          Home
        </a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Terms of use</a>
      </nav>

      <nav className="flex flex-col items-center md:items-start text-center md:text-left">
        <h6 className="footer-title">Legal</h6>
        <a
          href="https://www.iubenda.com/en/help/2859-terms-and-conditions-when-are-they-needed"
          className="link link-hover"
        >
          Terms of use
        </a>
        <a
          href="https://policies.google.com/privacy?hl=en-US"
          className="link link-hover"
        >
          Privacy policy
        </a>
        <a className="link link-hover">Cookie policy</a>
      </nav>
    </footer>
  );
};

export default Footer;