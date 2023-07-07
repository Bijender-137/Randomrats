import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import MyNav from "./MyNav";
import Tree_img from "../assets/img/png/tree_img_1.png";
import Cartoon_img from "../assets/img/png/cartoon_img.png";
import Wallet_img from "../assets/img/png/gif1.gif";
import Cartoon_3 from "../assets/img/png/cartton_3.png";
import left_elips from "../assets/img/png/left_elips.png";
import Right_elips from "../assets/img/png/right_elips.png";
import Img_icon_top from "../assets/img/png/top_img_set.png";
import Tree_icon from "../assets/img/png/tree_icon.png"
const HeroSection = () => {
  return (
    <>
      <section className="d-flex flex-column min_h_100_lg position-relative z-1">
        <img
          className="position-absolute left-0 bottom-0"
          src={left_elips}
          alt="left_elips"
        />
        <img
          className="position-absolute right-0 bottom-0"
          src={Right_elips}
          alt="Right_elips"
        />
        <MyNav />
        <div className=" hero_sec_custopm_container d-flex flex-column justify-content-center flex-grow-1 position-relative z-5">
          <div className="text-center">
            <p className="ff_mono text-white fw-medium fs_2x8l line_h_146 text_line">
              TANSTAAFL : There ain’t no such thing as a free lunch
            </p>
            <h2 className="ff_press clr_orange fw-normal fs_8x5l">FREE MINT</h2>
            <p className="ff_mono fw-medium fs_2xl text-white">
              ...sounds Cheesy... Nom Nom
            </p>
          </div>
          <div className="mt-3 mt-lg-5 pt-2">
            <p className="text-white ff_press fs_1x5l fw-normal line_h_189">
              Proof: Randomrats <span>&#62;</span> Nuclear Blast{" "}
              <span>&#62;</span> Moonbirds & Moonrunners
            </p>
          </div>
          <Row className=" mt-4 py-2 justify-content-between flex-column-reverse flex-xl-row">
            <Col xl={5} className="mt-5 mt-xl-0">
              <div className="ps-xl-4">
                <Row className="align-items-center">
                  <Col xs={3}>
                    <div className="d-flex align-items-center justify-content-between">
                      <p className="fw-semibold ff_mono text-white fs_2xl mb-0">
                        Moonbirds
                      </p>
                      <p className="text-white ff_press fs_3x7l fw-normal mb-0 ps-4 ps-sm-5">
                        +
                      </p>
                    </div>
                  </Col>
                  <Col xs={9}>
                    <div className="d-flex align-items-center justify-content-between ps-5">
                      <div className="ps-sm-4 ps-md-5">
                        
                        <img
                          className="tree_img_w border-0"
                          src={Tree_img}
                          alt="Tree_img"
                        />
                      </div>
                      <p className="text-white ff_press fs_3x7l fw-normal mb-0 ps-3 ps-sm-5">
                        =
                      </p>
                      <div className="ps-sm-5">
                        <img
                          className="tree_img_w"
                          src={Cartoon_img}
                          alt="Cartoon_img"
                        />
                      </div>
                    </div>
                  </Col>
                </Row>
                <Row className="align-items-center mt-3 pt-2">
                  <Col xs={3}>
                    <div className="d-flex align-items-center justify-content-between">
                      <p className="fw-semibold ff_mono text-white fs_2xl mb-0">
                        Moonrunners
                      </p>
                      <p className="text-white ff_press fs_3x7l fw-normal mb-0 ps-2 ps-sm-4">
                        +
                      </p>
                    </div>
                  </Col>
                  <Col xs={9}>
                    <div className="d-flex align-items-center justify-content-between ps-5">
                      <div className="ps-sm-4 ps-md-5">
                        <img
                          className="tree_img_w"
                          src={Tree_img}
                          alt="Tree_img"
                        />
                      </div>
                      <p className="text-white ff_press fs_3x7l fw-normal mb-0 ps-3 ps-sm-5">
                        =
                      </p>
                      <div className="ps-sm-5">
                        <img
                          className="tree_img_w"
                          src={Cartoon_img}
                          alt="Cartoon_img"
                        />
                      </div>
                    </div>
                  </Col>
                </Row>
                <Row className="align-items-center mt-3 pt-2">
                  <Col xs={3}>
                    <div className="d-flex align-items-center justify-content-between">
                      <p className="fw-semibold ff_mono text-white fs_2xl mb-0">
                        Randomrats
                      </p>
                      <p className="text-white ff_press fs_3x7l fw-normal mb-0 ps-3 ps-sm-4 ms-sm-2">
                        +
                      </p>
                    </div>
                  </Col>
                  <Col xs={9}>
                    <div className="d-flex align-items-center ps-5 justify-content-between">
                      <div className="ps-sm-4 ps-md-5">
                        <img
                          className="tree_img_w"
                          src={Tree_img}
                          alt="Tree_img"
                        />
                      </div>
                      <p className="text-white ff_press fs_3x7l fw-normal mb-0 ps-3 ps-sm-5">
                        =
                      </p>
                      <div className="ps-sm-5">
                        <img
                          className="tree_img_w"
                          src={Cartoon_3}
                          alt="Cartoon_3"
                        />
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col xs={10} sm={8} lg={6} xl={4} className="d-xl-flex justify-content-end mx-auto mx-xl-0">
              <div className="text-center ps-xl-5 mt-4 mt-xl-0">
                <p className="fw-normal ff_press fs_2xl text-white mb-0">
                  FREE MINT
                </p>
                <p className="ff_mono fs_1x6l fw-normal text-white pt-2">
                  First come First serve
                </p>
                <div className="walllet_img_w mx-auto position-relative">
                  <img className="position-absolute gif_img" src={Img_icon_top} alt="Img_icon_top" />
                  <img className="w-100" src={Wallet_img} alt="Wallet_img" />
                </div>
                <button className="fw-normal ff_press fs_1x4l text-white border-0 btn_wallet mt-4">
                  Connect Wallet
                </button>
                <p className="ff_mono fs_1x6l text-white fw-normal mt-2 mb-0">
                  4000 / 5000 Minted
                </p>
              </div>
            </Col>
          </Row>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
