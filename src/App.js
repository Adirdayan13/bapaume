import React from "react";
import Welcome from "./welcome";
import Intro from "./intro";
import Map from "./map";
import "./App.css";
import { Link } from "react-scroll";
import AOS from "aos";
import LesBastionCarousel from "./carousels/LesBastionCarousel";
import LesTaupesCarousel from "./carousels/LesTaupesCarousel";
import VisiteCarousel from "./carousels/VisiteCarousel";
import MedievalCarousel from "./carousels/MedievalCarousel";
import LesBovesCarousel from "./carousels/LesBovesCarousel";
import NavbarHeader from "./navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";

AOS.init();

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lesBoves: false,
      medieval: false,
      lesBastion: false,
      visite: false,
      lesTaupes: false,
      popup: false
    };
  }

  render() {
    return (
      <>
        <NavbarHeader />
        <section name="welcome" id="welcome">
          <Welcome />
        </section>
        <section id="intro">
          <br />
          <h1 className="section-title">À PROPOS</h1>
          <br />
          <Intro />
        </section>
        <section id="gallery">
          <br />
          <h1 className="section-title">GALERIE PHOTOS</h1>
          <br />
          <div
            data-aos="zoom-in"
            data-aos-duration="1500"
            data-aos-easing="ease"
            data-aos-anchor-placement="top-bottom"
            className="gallery-wrapper"
            id="gallery-wrapper"
          >
            {!this.state.popup && (
              <React.Fragment>
                <div className="gallery-pic-div">
                  <h1>Les Boves</h1>
                  <Link to="gallery-wrapper" duration={1000} offset={-55}>
                    <img
                      onClick={() =>
                        this.setState({
                          lesBoves: !this.state.lesBoves,
                          popup: true
                        })
                      }
                      src="https://i.ibb.co/N9R5Vn0/image17.jpg"
                      className="gallery-pic"
                      alt="gallery"
                    />
                  </Link>
                </div>
                <div className="gallery-pic-div">
                  <h1>Les Bastions</h1>
                  <Link to="gallery-wrapper" duration={1000} offset={-55}>
                    <img
                      src="https://i.ibb.co/mTmdbMS/echele-de-secours-en-1940.jpg"
                      className="gallery-pic"
                      alt="gallery"
                      onClick={() =>
                        this.setState({
                          lesBastion: !this.state.lesBastion,
                          popup: true
                        })
                      }
                    />
                  </Link>
                </div>
                <div className="gallery-pic-div">
                  <h1>Médiéval</h1>

                  <Link to="gallery-wrapper" duration={1000} offset={-55}>
                    <img
                      src="https://i.ibb.co/LkZBC9V/Medieval-la-societe-archeologique.jpg"
                      className="gallery-pic"
                      alt="gallery"
                      onClick={() =>
                        this.setState({
                          medieval: !this.state.medieval,
                          popup: true
                        })
                      }
                    />
                  </Link>
                </div>
                <div className="gallery-pic-div">
                  <h1>Visites</h1>

                  <Link to="gallery-wrapper" duration={1000} offset={-55}>
                    <img
                      src="https://i.ibb.co/LkXfGmC/visite-explication-de-la-citerne.jpg"
                      className="gallery-pic"
                      alt="gallery"
                      onClick={() =>
                        this.setState({
                          visite: !this.state.visite,
                          popup: true
                        })
                      }
                    />
                  </Link>
                </div>
                <div className="gallery-pic-div">
                  <h1>Les taupes</h1>

                  <Link to="gallery-wrapper" duration={1000} offset={-55}>
                    <img
                      src="https://i.ibb.co/RNSCWjX/les-taupes-en-recherche.jpgLesBastionCarousel"
                      className="gallery-pic"
                      alt="gallery"
                      onClick={() =>
                        this.setState({
                          lesTaupes: !this.state.lesTaupes,
                          popup: true
                        })
                      }
                    />
                  </Link>
                </div>
              </React.Fragment>
            )}
          </div>
          {this.state.lesTaupes && (
            <React.Fragment>
              <div className="x-div">
                <button
                  className="x btn btn-outline-dark btn-sm"
                  onClick={() =>
                    this.setState({ lesTaupes: false, popup: false })
                  }
                >
                  Retour à la galerie
                </button>
              </div>
              <div className="carousel-h1">
                <h1>LES TAUPES</h1>
              </div>
              <LesTaupesCarousel />
            </React.Fragment>
          )}
          {this.state.visite && (
            <React.Fragment>
              <div className="x-div">
                <button
                  className="x btn btn-outline-dark btn-sm"
                  onClick={() => this.setState({ visite: false, popup: false })}
                >
                  Retour à la galerie
                </button>
              </div>
              <div className="carousel-h1">
                <h1>VISITES</h1>
              </div>
              <VisiteCarousel />
            </React.Fragment>
          )}
          {this.state.lesBastion && (
            <React.Fragment>
              <div className="x-div">
                <button
                  className="x btn btn-outline-dark btn-sm"
                  onClick={() =>
                    this.setState({ lesBastion: false, popup: false })
                  }
                >
                  Retour à la galerie
                </button>
              </div>
              <div className="carousel-h1">
                <h1>LES BASTIONS</h1>
              </div>
              <LesBastionCarousel />
            </React.Fragment>
          )}
          {this.state.lesBoves && (
            <React.Fragment>
              <div className="x-div">
                <button
                  className="x btn btn-outline-dark btn-sm"
                  onClick={() =>
                    this.setState({ lesBoves: false, popup: false })
                  }
                >
                  Retour à la galerie
                </button>
              </div>
              <div className="carousel-h1">
                <h1>LES BOVES</h1>
              </div>
              <LesBovesCarousel />
            </React.Fragment>
          )}
          {this.state.medieval && (
            <React.Fragment>
              <div className="x-div">
                <button
                  className="x btn btn-outline-dark btn-sm"
                  onClick={() =>
                    this.setState({ medieval: false, popup: false })
                  }
                >
                  Retour à la galerie
                </button>
              </div>
              <div className="carousel-h1">
                <h1>MEDIEVAL</h1>
              </div>
              <MedievalCarousel />
            </React.Fragment>
          )}
        </section>

        <section id="video">
          <br />
          <h1 className="section-title">VIDEOS</h1>
          <br />
          <div
            data-aos="zoom-in-up"
            data-aos-duration="2000"
            data-aos-easing="ease"
            data-aos-once="true"
            data-aos-anchor-placement="top-bottom"
          >
            <div className="videos">
              <br />
              <div className="video">
                <h1>Visite du Bastion du Dauphin</h1>
                <iframe
                  title="video"
                  width="100%"
                  height="400"
                  src="https://www.youtube.com/embed/NoSyssZez3U"
                  frameBorder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <br />
              <div className="video">
                <h1>
                  Bapaume Médiéval: reconstitution par la Société Archéologique
                </h1>
                <iframe
                  title="video"
                  width="100%"
                  height="400"
                  src="https://www.youtube.com/embed/_oiXBphPZgk"
                  frameBorder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <br />
              <div className="video">
                <h1>Exploration de Bastion du Brézé</h1>
                <iframe
                  title="video"
                  width="100%"
                  height="400"
                  src="https://www.youtube.com/embed/y86KElrxChw"
                  frameBorder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <br />
              <div className="video">
                <h1>Visite de Bapaume et du Bastion du Dauphin</h1>
                <iframe
                  title="video"
                  width="100%"
                  height="400"
                  src="https://www.youtube.com/embed/bVJws7yP-cw"
                  frameBorder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </section>
        <section id="map">
          <div
            className="map-div"
            data-aos="zoom-in"
            data-aos-duration="2000"
            data-aos-easing="ease-in"
            data-aos-once="false"
            data-aos-anchor-placement="top-bottom"
          >
            <Map />
            <div className="credit">
              <span>
                Site contruit par{" "}
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://adir-portfolio.herokuapp.com/?bapaume"
                >
                  Adir Dayan
                </a>
              </span>
            </div>
          </div>
        </section>
      </>
    );
  }
}
