import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord, faGithub, faTelegram, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { FollowOnLens } from '@lens-protocol/widgets-react';

const Footer = () => {
  return (
    <ul className="social-icon">
      <li className="social-icon__item">
        <a className="social-icon__link" href={'https://twitter.com/VeraxRegistry'} target={'_blank'} rel="noreferrer">
          <FontAwesomeIcon icon={faXTwitter} />
        </a>
      </li>

      <li className="social-icon__item">
        <a className="social-icon__link" href={'https://discord.gg/Sq4EmYdBEk'} target={'_blank'} rel="noreferrer">
          <FontAwesomeIcon icon={faDiscord} />
        </a>
      </li>

      <li className="social-icon__item">
        <a className="social-icon__link" href={'https://t.me/+C94-EJOoVjVhM2U0'} target={'_blank'} rel="noreferrer">
          <FontAwesomeIcon icon={faTelegram} />
        </a>
      </li>

      <li className="social-icon__item">
        <a
          className="social-icon__link"
          href={'https://github.com/Consensys/linea-attestation-registry'}
          target={'_blank'}
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </li>

      <li className="social-icon__item social-icon__link lens">
        <FollowOnLens handle="verax" title={'Follow us on Lens'} />
      </li>
    </ul>
  );
};

export default Footer;
