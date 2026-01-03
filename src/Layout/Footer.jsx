import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';



const Footer = () => {
  return (
    <div>
      <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content p-10">
        <aside>
          <div>
            <a className="liner-text font-bold text-3xl shadow-sm">SDEP</a>
          </div>
          <p>
            ACME Industries Ltd.
            <br />
            Providing reliable tech since 1992
          </p>
        </aside>
        <nav>
          <h6 className="text-xl font-bold">Social</h6>
          <div className="grid grid-flow-col gap-4">
            <a href="https://www.linkedin.com/in/polokkumar" target="_blank">
              {' '}
              <FaLinkedin size={30} />
            </a>
            <a href="https://github.com/polokrf" target="_blank">
              {' '}
              <FaGithub size={30} />
            </a>
          </div>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;