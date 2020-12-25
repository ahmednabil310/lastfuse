import React from 'react';
import { FormattedMessage } from 'react-intl';
import yahoofin from '../../../assets/images/yahoofin.png';
import hackernoon from '../../../assets/images/hackernoon.png';
import cointelegraph from '../../../assets/images/cointelegraph.png';
import insider from '@/assets/images/insider.png';
const SectionTwo = () => {
  return (
    <section className="studio__wrapper grid-x align-center">
      <div className="publications">
        <img src={cointelegraph} alt="cointelegraph" />
        <img src={yahoofin} alt="yahoo-finance" />
        <img src={hackernoon} alt="hackernoon" />
        <img src={insider} alt="buisnessinsider" />
      </div>
      <div className="studio">
        <h1 className="studio__title">
          <FormattedMessage defaultMessage="Customize your own wallet and currency" />
        </h1>
        <div className="studio__text">
          <FormattedMessage
            defaultMessage="The Fuse Studio allows you to build your own wallet and mint your own custom branded
        currency for your company/community. We handle all the heavy lifting, allowing you to reward and grow your
        user base by easily integrating a sophisticated payment solution."
          />
        </div>
        <div className="dapp_image">
          <a
            rel="noopener noreferrer"
            href="https://studio.fuse.io"
            target="_blank"
            role="button"
            className="button__wrapper">
            <button data-event="Start now with the studio" className="button">
              <FormattedMessage defaultMessage="Start now with the studio" />
              <img alt="image" src="./images/blue_arrow.svg" />
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default SectionTwo;
