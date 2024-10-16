"use client";
import Head from "next/head";
import { useEffect } from "react";
import Link from "next/link";
import Headcss from "./dashboard-profile.module.css";
import CreditsStats from '../../components/Credits/SingleCreditsView';
import BuyCredits from '../../components/Credits/BuyCreditsView';
import InnerHeader from "../../components/Header/Header";
const Credits: React.FC = () => {
  useEffect(() => {
    // Initialize Bootstrap JS and other scripts once the component is mounted
    if (typeof window !== "undefined") {
      import("bootstrap").then((bootstrap) => {
        const tooltipTriggerList = [].slice.call(
          document.querySelectorAll('[data-bs-toggle="tooltip"]')
        );
        tooltipTriggerList.forEach((tooltipTriggerEl: HTMLElement) => {
          new bootstrap.Tooltip(tooltipTriggerEl);
        });
      });
    }
  }, []);

  return (
    <div id="wrapper">
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no" />
        <title>Credits & Free Pages WebRobot Dashboard Profile</title>
        <link rel="canonical" href="https://webrobot.eu/credits.html" />
        <link rel="stylesheet" href="/bootstrap/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/css/Aldrich.css" />
        <link rel="stylesheet" href="/css/Barlow.css" />
        <link rel="stylesheet" href="/css/Bruno%20Ace%20SC.css" />
        <link rel="stylesheet" href="/css/Caveat%20Brush.css" />
        <link rel="stylesheet" href="/css/Coda.css" />
        <link rel="stylesheet" href="/css/Goldman.css" />
        <link rel="stylesheet" href="/css/Nunito.css" />
        <link rel="stylesheet" href="/fonts/fontawesome-all.min.css" />
        <link rel="stylesheet" href="/css/aos.min.css" />
        <link rel="stylesheet" href="/css/Bootstrap-Image-Uploader.css" />
        <link rel="stylesheet" href="/css/Contact-form.css" />
        <link rel="stylesheet" href="/css/dashboard-profile.css" />
        <meta property="og:url" content="https://app.webrobot.eu/Credits" />
        <meta
          name="description"
          content="Manage and buy your WebRobot data credits for the Pay-Per-Use Plan and Free Pages bundle for the Free Trial. See and download usage stats."
        />
      </Head>

      <InnerHeader></InnerHeader>

      <nav
        className="navbar align-content-start sidebar sidebar-dark accordion bg-gradient-primary p-0 navbar-dark"
        data-aos="slide-down"
        data-aos-delay="50"
      >
        <div className="container-fluid d-flex flex-column p-0">
          <ul className="navbar-nav text-light" id="accordionSidebar" style={{ position: "fixed" }}>
            <li className="nav-item d-md-flex d-xl-flex justify-content-md-center justify-content-xl-start align-items-xl-center" id="nav-item">
              <div className="col" data-bs-toggle="tooltip" data-bs-placement="right" id="col-nav-icon" title="General">
                <Link id="nav-icon-link" href="profile.html">
                  <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="1em" viewBox="0 0 24 24" width="1em" fill="currentColor" id="nav-icon">
                    <g>
                      <rect fill="none" height="24" width="24"></rect>
                    </g>
                    <g>
                      <g>
                        <g>
                          <path d="M18.39,14.56C16.71,13.7,14.53,13,12,13c-2.53,0-4.71,0.7-6.39,1.56C4.61,15.07,4,16.1,4,17.22V20h16v-2.78 C20,16.1,19.39,15.07,18.39,14.56z"></path>
                        </g>
                        <g>
                          <path d="M10,12c0.17,0,3.83,0,4,0c1.66,0,3-1.34,3-3c0-0.73-0.27-1.4-0.71-1.92C16.42,6.75,16.5,6.38,16.5,6 c0-1.25-0.77-2.32-1.86-2.77C14,2.48,13.06,2,12,2s-2,0.48-2.64,1.23C8.27,3.68,7.5,4.75,7.5,6c0,0.38,0.08,0.75,0.21,1.08 C7.27,7.6,7,8.27,7,9C7,10.66,8.34,12,10,12z"></path>
                        </g>
                      </g>
                    </g>
                  </svg>
                </Link>
              </div>
              <Link className="nav-link d-md-flex align-items-md-center" id="link-item" href="profile.html" title="General">
                <span id="nav-item-label">General</span>
              </Link>
            </li>
            <li className="nav-item d-md-flex d-xl-flex justify-content-md-center justify-content-xl-start align-items-xl-center" id="nav-item">
              <div className="col" data-bs-toggle="tooltip" data-bs-placement="right" id="col-nav-icon" title="Credits &amp; Free Page">
                <Link id="nav-icon-link" href="credits.html">
                  <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="1em" viewBox="0 0 24 24" width="1em" fill="currentColor" id="nav-icon">
                    <rect fill="none" height="24" width="24"></rect>
                    <path d="M9,4c-4.42,0-8,3.58-8,8c0,4.42,3.58,8,8,8s8-3.58,8-8C17,7.58,13.42,4,9,4z M12,10.5h-2v5H8v-5H6V9h6V10.5z M20.25,3.75 L23,5l-2.75,1.25L19,9l-1.25-2.75L15,5l2.75-1.25L19,1L20.25,3.75z M20.25,17.75L23,19l-2.75,1.25L19,23l-1.25-2.75L15,19l2.75-1.25 L19,15L20.25,17.75z"></path>
                  </svg>
                </Link>
              </div>
              <Link className="nav-link d-md-flex d-xxl-flex align-items-md-center align-items-xxl-center active" id="link-item" href="credits.html" title="Credits &amp; Free Pages">
                <span id="nav-item-label">Credits &amp; Free Pages</span>
              </Link>
            </li>
            {/* Additional nav items here... */}
          </ul>
        </div>
      </nav>
      <div className="d-flex flex-column" id="content-wrapper">
        <div id="content">
          <div className="container-fluid" id="content-container">
            <div id="h-credits" className="mb-4">
              <div className="col d-sm-flex align-items-sm-center" id="col-title">
                <h3 className="text-dark mb-0" id="page-title">Credits &amp; Free Pages</h3>
              </div>
              <div className="col d-flex justify-content-center justify-content-sm-end" id="col-gen-report">
                <button className="btn btn-primary btn-sm" id="btn-gen-report" type="button">
                  <i className="fas fa-download fa-sm text-white-50"></i>&nbsp;Generate Report
                </button>
              </div>
            </div>
            <p id="description">Credits are used in the Pay-Per-Use plan, which offers additional features compared to the Free Trial.</p>
            <p id="description">You must subscribe to the Pay-Per-Use plan when your free trial period ends (or you finish your free pages).</p>
            <p id="description">However, you can activate the Pay-Per-Use plan anytime, even without a Free Trial.</p>
            <div className="row">
              <div className="col-md-6 col-xl-3 mb-4" id="col-counter">
                <div className="card shadow border-start-primary py-2" style={{ paddingLeft: "3px" }}>
                  <div className="card-body">
                    <div className="row align-items-center no-gutters">
                      <div className="col me-2">
                        <div className="text-uppercase text-primary fw-bold text-xs mb-1">
                          <span id="counter-title">credits spent</span>
                        </div>
                        <div className="text-dark fw-bold h5 mb-0">
                          <span>500</span>
                        </div>
                      </div>
                      <div className="col-auto">
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icon-tabler-currency-dollar-off fa-3x text-gray-300">
                          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                          <path d="M16.7 8a3 3 0 0 0 -2.7 -2h-4m-2.557 1.431a3 3 0 0 0 2.557 4.569h2m4.564 4.558a3 3 0 0 1 -2.564 1.442h-4a3 3 0 0 1 -2.7 -2"></path>
                          <path d="M12 3v3m0 12v3"></path>
                          <path d="M3 3l18 18"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-xl-3 mb-4" id="col-counter">
                <div className="card shadow border-start-success py-2" style={{ paddingLeft: "3px" }}>
                  <div className="card-body">
                    <div className="row align-items-center no-gutters">
                      <div className="col me-2">
                        <div className="text-uppercase text-success fw-bold text-xs mb-1">
                          <span id="counter-title" style={{ color: "#53c4f5" }}>credits left</span>
                        </div>
                        <div className="text-dark fw-bold h5 mb-0">
                          <span>250</span>
                        </div>
                      </div>
                      <div className="col-auto">
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icon-tabler-currency-dollar fa-3x text-300">
                          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                          <path d="M16.7 8a3 3 0 0 0 -2.7 -2h-4a3 3 0 0 0 0 6h4a3 3 0 0 1 0 6h-4a3 3 0 0 1 -2.7 -2"></path>
                          <path d="M12 3v3m0 12v3"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-xl-3 mb-4" id="col-counter">
                <div className="card shadow border-start-info py-2" style={{ paddingLeft: "3px" }}>
                  <div className="card-body">
                    <div className="row align-items-center no-gutters">
                      <div className="col me-2">
                        <div className="text-uppercase text-info fw-bold text-xs mb-1">
                          <span id="counter-title" style={{ color: "#50682a" }}>Free pages used</span>
                        </div>
                        <div className="row g-0 align-items-center">
                          <div className="col-auto">
                            <div className="text-dark fw-bold h5 mb-0 me-3">
                              <span>3,000</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-auto">
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icon-tabler-carousel-horizontal fa-3x text-gray-300">
                          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                          <path d="M7 5m0 1a1 1 0 0 1 1 -1h8a1 1 0 0 1 1 1v12a1 1 0 0 1 -1 1h-8a1 1 0 0 1 -1 -1z"></path>
                          <path d="M22 17h-1a1 1 0 0 1 -1 -1v-8a1 1 0 0 1 1 -1h1"></path>
                          <path d="M2 17h1a1 1 0 0 0 1 -1v-8a1 1 0 0 0 -1 -1h-1"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-xl-3 mb-4" id="col-counter">
                <div className="card shadow border-start-warning py-2">
                  <div className="card-body">
                    <div className="row align-items-center no-gutters">
                      <div className="col me-2">
                        <div className="text-uppercase text-warning fw-bold text-xs mb-1">
                          <span id="counter-title" style={{ color: "#65b571" }}>Free pages Left</span>
                        </div>
                        <div className="text-dark fw-bold h5 mb-0">
                          <span>7,000</span>
                        </div>
                      </div>
                      <div className="col-auto">
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icon-tabler-carousel-horizontal-filled fa-3x text-300">
                          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                          <path d="M16 4h-8a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2z" strokeWidth="0" fill="currentColor"></path>
                          <path d="M22 6a1 1 0 0 1 .117 1.993l-.117 .007h-1v8h1a1 1 0 0 1 .117 1.993l-.117 .007h-1a2 2 0 0 1 -1.995 -1.85l-.005 -.15v-8a2 2 0 0 1 1.85 -1.995l.15 -.005h1z" strokeWidth="0" fill="currentColor"></path>
                          <path d="M3 6a2 2 0 0 1 1.995 1.85l.005 .15v8a2 2 0 0 1 -1.85 1.995l-.15 .005h-1a1 1 0 0 1 -.117 -1.993l.117 -.007h1v-8h-1a1 1 0 0 1 -.117 -1.993l.117 -.007h1z" strokeWidth="0" fill="currentColor"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <BuyCredits></BuyCredits>
          
          
          </div>
        </div>
        <footer className="bg-white sticky-footer">
          <div className="container my-auto">
            <div className="text-center my-auto copyright">
              <span style={{ fontSize: "12px" }}>Copyright 2024 © WebRobot Ltd - Dashboard | Profile</span>
            </div>
          </div>
        </footer>
      </div>
      <a className="border rounded d-inline scroll-to-top" href="#page-top">
        <i className="fas fa-angle-up"></i>
      </a>
    </div>
  );
};

export default Credits;