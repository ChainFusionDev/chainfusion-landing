import Head from 'next/head';
import React, { useEffect } from 'react';

/* eslint-disable */

export default function Home() {
  useEffect(() => {
    document.body.dataset.spy = 'scroll';
    document.body.dataset.target = '.navbar';
    document.body.dataset.offset = '35';
  });

  return (
    <div>
      <Head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>ChainFusion | Revolutionizing Cross-Chain Communication</title>
        <meta name="keywords" content="" />
        <meta name="description" content="ChainFusion | Revolutionizing Cross-Chain Communication" />
        <link rel="icon" href="/img/favicon.svg" sizes="any" type="image/svg+xml" />
      </Head>

      <main>
        <nav className="navmenu navbar navbar-expand-lg mobile-nav">
          <div className="container">
            <a className="navbar-brand get-link" href="#home">
              <img src="/img/logo-white.svg" className="logo-nav" />
              <img src="/img/logo.svg" className="logo-mobile" />
            </a>
            <div
              className="hamburger-menu navbar-toggler"
              data-toggle="collapse"
              data-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="line"></span>
              <span className="line"></span>
              <span className="line"></span>
            </div>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <a className="nav-link get-link" href="#home">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link get-link" href="#features">
                    Features
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link get-link" href="#roadmap">
                    Roadmap
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link get-link" href="#aboutus">
                    About Us
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link get-link" href="#howitworks">
                    How Bridge Works
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-get-btn" href="https://app.chainfusion.org">
                    Make Transfer <i className="fa-light fa-shuffle"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <header id="home">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-12 col-lg-5 order-1 order-lg-0 align-items-lg-center text-center text-lg-left">
                <h1 className="header__title">
                  <span>Revolutionizing</span>
                  <br />
                  Cross-Chain
                  <br />
                  Communication
                </h1>
                <a href="#features" className="btn-transparent get-link">
                  Learn More <i className="fa-light fa-arrow-right"></i>
                </a>
              </div>
              <div className="col-12 col-lg-7 order-0 order-lg-1 d-flex">
                <div className="circle-wrap">
                  <div className="circle-item"></div>
                  <div className="circle-item circle-item--2"></div>
                  <div className="circle-item circle-item--3"></div>
                  <div className="circle-item circle-item--4"></div>
                  <div className="circle-item circle-item--5"></div>
                </div>
                <img
                  src="/img/img-home.png"
                  className="img-home d-block mx-auto"
                  draggable="false"
                  alt="Revolutionizing Cross-Chain Communication"
                />
              </div>
            </div>
          </div>
        </header>

        <section id="features" className="features">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="title">Key Features</div>
                <div className="bottom-line"></div>
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-sm-6">
                <div className="media features-block">
                  <img
                    src="/img/icon/features/1.svg"
                    className="icon-features"
                    draggable="false"
                    alt="Decentralization"
                  />
                  <div className="media-body">
                    <h4 className="mt-0">Decentralization</h4>
                    <p>
                      Bridge validators use threshold ECDSA signatures in order to achieve cross-chain communication decentralization.
                      Anyone can become a validator to make ChainFusion even more decentralized.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-sm-6">
                <div className="media features-block">
                  <img src="/img/icon/features/2.svg" className="icon-features" draggable="false" alt="Security" />
                  <div className="media-body">
                    <h4 className="mt-0">Security</h4>
                    <p>
                      Project is built with security in mind. Validators collectively decide on all changes to the propocol.
                      All the changes carefully tested using Test Networks, audited and shipped to Main Network.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-sm-6">
                <div className="media features-block">
                  <img src="/img/icon/features/3.svg" className="icon-features" draggable="false" alt="Low fees" />
                  <div className="media-body">
                    <h4 className="mt-0">Low Fees</h4>
                    <p>
                      Validators don't need to spend native currency on any of the supported blockchains.
                      When making cross-chain data transfer only one collective transaction is created which makes bridge fees low.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-sm-6">
                <div className="media features-block">
                  <img src="/img/icon/features/4.svg" className="icon-features" draggable="false" alt="Speed" />
                  <div className="media-body">
                    <h4 className="mt-0">Speed</h4>
                    <p>
                      Once transaction is sent to the blockchain, validators immediately start the process of verification.
                      Verified transactions are signed then by validators using peer-to-peer network with sub second delay.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="roadmap" className="roadmap-section">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="title">Roadmap</div>
                <div className="bottom-line"></div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12">
                <ul className="roadmap">
                  <li className="roadmap-card complete">
                    <div className="roadmap-timestamp">
                      <span className="name-timeline">Prototype</span>
                      <span className="status-timeline">
                        <i className="fa-regular fa-check"></i> Done
                      </span>
                    </div>
                    <div className="datestamp">
                      <h4>Q2 2022</h4>
                      <p>
                        Implement working propotype of decentralized cross-chain bridge
                      </p>
                    </div>
                  </li>
                  <li className="roadmap-card complete">
                    <div className="roadmap-timestamp">
                      <span className="name-timeline">ERC-20 Bridge</span>
                      <span className="status-timeline">
                        <i className="fa-regular fa-check"></i> Done
                      </span>
                    </div>
                    <div className="datestamp">
                      <h4>Q3 2022</h4>
                      <p>
                        Implement ERC-20 Bridge with Web UI allowing to make cross-chain token transfers
                      </p>
                    </div>
                  </li>
                  <li className="roadmap-card">
                    <div className="roadmap-timestamp">
                      <span className="name-timeline">Public Testnet</span>
                      <span className="status-timeline">Next</span>
                    </div>
                    <div className="datestamp">
                      <h4>Q4 2022</h4>
                      <p>
                        Launch public test network connected to testnets of popular EVM compatible chains
                      </p>
                    </div>
                  </li>
                  <li className="roadmap-card">
                    <div className="roadmap-timestamp">
                      <span className="name-timeline">Security Audits</span>
                      <span className="status-timeline">Next</span>
                    </div>
                    <div className="datestamp">
                      <h4>Q2 2023</h4>
                      <p>
                        Audit validator node codebase and on-chain solidity smart contracts
                      </p>
                    </div>
                  </li>
                  <li className="roadmap-card">
                    <div className="roadmap-timestamp">
                      <span className="name-timeline">Mainnet Launch</span>
                      <span className="status-timeline">Next</span>
                    </div>
                    <div className="datestamp">
                      <h4>Q3 2023</h4>
                      <p>
                        Launch ChainFusion Mainnet on Ethereum, BSC and Polygon
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="svg-one-block">
            <img src="/img/svg-left.svg" draggable="false" />
          </div>
        </section>

        <section id="aboutus" className="aboutus">
          <div className="container">
            <div className="row">
              <div className="col-12 col-lg-6 order-1 order-lg-0">
                <img
                  src="/img/about-us.png"
                  className="img-fluid d-block mx-auto img-about"
                  draggable="false"
                  alt="About Us"
                />
              </div>
              <div className="col-12 col-lg-6 order-0 order-lg-1">
                <div className="title">About Us</div>
                <div className="bottom-line"></div>
                <div className="about-text">
                  <p>
                    We believe that cross-chain is a future.
                    There is already a lot of blockchains live and this is one of the reasons why this industry is decentralized.
                    But most of the bridges are currently highly centralized, often due to technical limitations and lack of innovations.
                    Centralization is the core reason why recently there were a lot of hacks of bridges.
                  </p>
                  <p>
                    Our goal is to break this tendency and build decentralization and security first cross-chain solution.
                    This is what ChainFusion Network achieves and improves on.
                  </p>
                  <p>
                    Let's bring this future together!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="faq" className="faq">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="title">Frequently Asked Questions</div>
                <div className="bottom-line"></div>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <div className="accordion" id="faq-accordion">
                  <div className="card">
                    <a
                      href="#"
                      data-toggle="collapse"
                      data-target="#faq1"
                      aria-expanded="false"
                      aria-controls="faq1"
                      className="accordion-head"
                    >
                      <div className="accordion-card card-header" id="faqhead1">
                        <div className="title-accordion">How to make a transfer?</div>
                        <div className="icon-accordion"></div>
                      </div>
                    </a>

                    <div id="faq1" className="collapse" aria-labelledby="faqhead1" data-parent="#faq-accordion">
                      <div className="card-body">
                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.
                        3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt
                        laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin
                        coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes
                        anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings
                        occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard
                        of them accusamus labore sustainable VHS.
                      </div>
                    </div>
                  </div>

                  <div className="card">
                    <a
                      href="#"
                      data-toggle="collapse"
                      data-target="#faq2"
                      aria-expanded="false"
                      aria-controls="faq2"
                      className="accordion-head"
                    >
                      <div className="accordion-card card-header" id="faqhead2">
                        <div className="title-accordion">What's the last book you gave up on and stopped reading?</div>
                        <div className="icon-accordion"></div>
                      </div>
                    </a>

                    <div id="faq2" className="collapse" aria-labelledby="faqhead2" data-parent="#faq-accordion">
                      <div className="card-body">
                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.
                        3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt
                        laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin
                        coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes
                        anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings
                        occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard
                        of them accusamus labore sustainable VHS.
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <a
                      href="#"
                      data-toggle="collapse"
                      data-target="#faq3"
                      aria-expanded="false"
                      aria-controls="faq3"
                      className="accordion-head"
                    >
                      <div className="accordion-card card-header" id="faqhead3">
                        <div className="title-accordion">What story does your family always tell about you?</div>
                        <div className="icon-accordion"></div>
                      </div>
                    </a>

                    <div id="faq3" className="collapse" aria-labelledby="faqhead3" data-parent="#faq-accordion">
                      <div className="card-body">
                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.
                        3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt
                        laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin
                        coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes
                        anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings
                        occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard
                        of them accusamus labore sustainable VHS.
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <a
                      href="#"
                      data-toggle="collapse"
                      data-target="#faq4"
                      aria-expanded="false"
                      aria-controls="faq4"
                      className="accordion-head"
                    >
                      <div className="accordion-card card-header" id="faqhead4">
                        <div className="title-accordion">If you were a vegetable, what vegetable would you be?</div>
                        <div className="icon-accordion"></div>
                      </div>
                    </a>

                    <div id="faq4" className="collapse" aria-labelledby="faqhead4" data-parent="#faq-accordion">
                      <div className="card-body">
                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.
                        3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt
                        laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin
                        coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes
                        anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings
                        occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard
                        of them accusamus labore sustainable VHS.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="tokenandblockchain">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="title">Supported Tokens and Blockchains</div>
                <div className="bottom-line"></div>
              </div>
            </div>

            <div className="row">
              <div className="col-12 col-lg-6">
                <div className="token-title">Tokens</div>
                <div className="row tokens-list">
                  <div className="col-6 col-sm-4">
                    <div className="token-logo">
                      <img src="/img/tokens/01.svg" draggable="false" alt="BTC" />
                      <h4>BTC</h4>
                    </div>
                  </div>
                  <div className="col-6 col-sm-4">
                    <div className="token-logo">
                      <img src="/img/tokens/02.svg" draggable="false" alt="ETH" />
                      <h4>ETH</h4>
                    </div>
                  </div>
                  <div className="col-6 col-sm-4">
                    <div className="token-logo">
                      <img src="/img/tokens/03.svg" draggable="false" alt="USDT" />
                      <h4>USDT</h4>
                    </div>
                  </div>
                  <div className="col-6 col-sm-4">
                    <div className="token-logo">
                      <img src="/img/tokens/04.svg" draggable="false" alt="USDC" />
                      <h4>USDC</h4>
                    </div>
                  </div>
                  <div className="col-6 col-sm-4">
                    <div className="token-logo">
                      <img src="/img/tokens/05.svg" draggable="false" alt="DAI" />
                      <h4>DAI</h4>
                    </div>
                  </div>
                  <div className="col-6 col-sm-4">
                    <div className="token-logo">
                      <img src="/img/tokens/06.svg" draggable="false" alt="XMR" />
                      <h4>XMR</h4>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-12 col-lg-6">
                <div className="blockchain-title">Blockchains</div>
                <div className="row blockchains-list">
                  <div className="col-6 col-sm-4">
                    <div className="blockchain-logo">
                      <img src="/img/blockchains/01.svg" draggable="false" alt="Ethereum" />
                      <h4>Ethereum</h4>
                    </div>
                  </div>
                  <div className="col-6 col-sm-4">
                    <div className="blockchain-logo">
                      <img src="/img/blockchains/02.svg" draggable="false" alt="Avalanche" />
                      <h4>Avalanche</h4>
                    </div>
                  </div>
                  <div className="col-6 col-sm-4">
                    <div className="blockchain-logo">
                      <img src="/img/blockchains/03.svg" draggable="false" alt="BNB Chain" />
                      <h4>BNB Chain</h4>
                    </div>
                  </div>
                  <div className="col-6 col-sm-4">
                    <div className="blockchain-logo">
                      <img src="/img/blockchains/04.svg" draggable="false" alt="Polygon" />
                      <h4>Polygon</h4>
                    </div>
                  </div>
                  <div className="col-6 col-sm-4">
                    <div className="blockchain-logo">
                      <img src="/img/blockchains/05.svg" draggable="false" alt="Aurora" />
                      <h4>Aurora</h4>
                    </div>
                  </div>
                  <div className="col-6 col-sm-4">
                    <div className="blockchain-logo">
                      <img src="/img/blockchains/06.svg" draggable="false" alt="Moonriver" />
                      <h4>Moonriver</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="svg-two-block">
            <img src="/img/svg-right.svg" draggable="false" />
          </div>
        </section>

        <section id="howitworks" className="howitworks">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="title">How Bridge Works</div>
                <div className="bottom-line"></div>
                <div className="text-bridgeworks">
                  <p>
                    To confirm bridge transfers, validators use distributed key.
                    During distributed key generation process validators come up with individual secret key shares,
                    which later allows them to create signatures from mutual account. No one has access to full private key,
                    from which signatures are created.
                  </p>
                  <p>
                    Validators constantly monitor bridge transactions on all supported blockchains. Once they see a transfer event on source chain,
                    they start the process of 6 rounds of transaction signing on destination chain.
                    This transaction confirms that all the validators seen this event and transfer really took place.
                    After transaction is executed, data is transferred on a destination chain.
                  </p>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-sm-12">
                <img
                  src="/img/how-it-works.svg"
                  className="img-fluid mx-auto d-none d-sm-none d-md-block illustration-bridge"
                  draggable="false"
                  alt="How Bridge Works"
                />
                <img
                  src="/img/how-it-works-mobile.svg"
                  className="img-fluid mx-auto d-block d-md-none illustration-bridge"
                  draggable="false"
                  alt="How Bridge Works"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="blockquestions">
          <div className="container">
            <div className="row d-flex align-items-center">
              <div className="col-12 col-lg-1">
                <div className="icon-chat-questions"></div>
              </div>
              <div className="col-12 col-lg-8">
                <div className="title-questions">
                  Having Any Questions?
                  <p>Contact us and we will help you with your questions</p>
                </div>
              </div>
              <div className="col-12 col-lg-3">
                <div className="btn-questions">
                  <a href="#" className="btn-transparent" data-toggle="modal" data-target="#contactModal">
                    Contacts Us <i className="fa-light fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer>
          <div className="container">
            <div className="row d-flex align-items-center">
              <div className="col-12 col-sm-12 col-md-12 col-lg-6 footer-block">
                <img src="/img/logo.svg" className="logo-footer" />
                <p className="copyright-text">Copyright ChainFusion 2022, All Right Reserved</p>
                <ul className="social-footer">
                  <li>
                    <a href="https://twitter.com/chain_fusion" target="_blank">
                      <img src="/img/icon/social/twitter.svg" />
                    </a>
                  </li>
                  <li>
                    <a href="#" target="_blank">
                      <img src="/img/icon/social/telegram.svg" />
                    </a>
                  </li>
                  <li>
                    <a href="#" target="_blank">
                      <img src="/img/icon/social/medium.svg" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/company/chainfusion" target="_blank">
                      <img src="/img/icon/social/linkedin.svg" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-12 col-sm-4 col-lg-2">
                <div className="title-link-footer">App</div>
                <ul className="link-footer">
                  <li>
                    <a href="https://app.chainfusion.org">Bridge</a>
                  </li>
                  <li>
                    <a href="https://app.chainfusion.org/staking">Stake</a>
                  </li>
                  <li>
                    <a href="https://app.chainfusion.org/slashing">Slash</a>
                  </li>
                  <li>
                    <a href="https://app.chainfusion.org/liquidity">Liquidity</a>
                  </li>
                </ul>
              </div>
              <div className="col-12 col-sm-4 col-lg-2">
                <div className="title-link-footer">Developers</div>
                <ul className="link-footer">
                  <li>
                    <a href="https://docs.chainfusion.org">Documentation</a>
                  </li>
                  <li>
                    <a href="https://gitlab.com/chainfusion">GitLab</a>
                  </li>
                  <li>
                    <a href="https://explorer.chainfusion.org">Explorer</a>
                  </li>
                  <li>
                    <a href="/">&nbsp;</a>
                  </li>
                </ul>
              </div>
              <div className="col-12 col-sm-4 col-lg-2">
                <div className="title-link-footer">Pages</div>
                <ul className="link-footer">
                  <li>
                    <a className="get-link" href="#home">Home</a>
                  </li>
                  <li>
                    <a className="get-link" href="#features">Features</a>
                  </li>
                  <li>
                    <a className="get-link" href="#roadmap">Roadmap</a>
                  </li>
                  <li>
                    <a className="get-link" href="#aboutus">About Us</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>

        <div className="modal fade contactmodal" id="contactModal">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal">
                  <i className="fa-light fa-xmark-large"></i>
                </button>
              </div>

              <div className="modal-body">
                <h4 className="title-contact-form">Do you want to contact us?</h4>

                <div className="row">
                  <div className="col-md-12">
                    <div className="contact-form-block">
                      <div id="msgSubmit" className="text-center hidden"></div>

                      <form role="form" id="contactForm" className="contact-form" data-toggle="validator">
                        <div className="form-group">
                          <div className="controls">
                            <input
                              type="text"
                              id="name"
                              className="form-control"
                              placeholder="Your name*"
                              required
                              data-error="Please enter your name"
                            />
                          </div>
                        </div>
                        <div className="form-group">
                          <div className="controls">
                            <input
                              type="email"
                              className="email form-control"
                              id="email"
                              placeholder="Email*"
                              required
                              data-error="Please enter your email"
                            />
                          </div>
                        </div>
                        <div className="form-group">
                          <div className="controls">
                            <textarea
                              id="message"
                              rows={5}
                              placeholder="Write your message.."
                              className="form-control"
                            ></textarea>
                          </div>
                        </div>

                        <button type="submit" id="submit" className="btn btn-effect">
                          <i className="fa-light fa-paper-plane"></i> Send Message
                        </button>
                        <div className="clearfix"></div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
