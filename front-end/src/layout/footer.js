import Link from "next/link";
import Image from "next/image";
// internal
import logo from '@assets/img/logo/sunesta-logo-white.png';
import payment from '@assets/img/footer/footer-payment.png';
import SocialLinks from "@components/social";
import CopyrightText from "./copyright-text";

// single widget
function SingleWidget({ col, col_2, col_3, title, contents }) {
  return (
    <div
      className={`col-xxl-${col} col-xl-${col} col-lg-3 col-md-${col_2} col-sm-6"`}
    >
      <div className={`footer__widget mb-50 footer-col-11-${col_3}`}>
        <h3 className="footer__widget-title">{title}</h3>
        <div className="footer__widget-content">
          <ul>
            {contents.map((l, i) => (
              <li key={i}>
                <Link href={`/${l.url}`}>{l.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

const Footer = () => {
  return (
    <>
      <footer>
        <div
          className="footer__area footer__style-4"
          data-bg-color="footer-bg-white"
        >
          <div className="footer__top">
            <div className="container">
              <div className="row">
                <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-5 col-sm-6">
                  <div className="footer__widget footer__widget-11 mb-50 footer-col-11-1">
                    <div className="footer__logo">
                      <Link href="/">
                        <Image src={logo} alt="logo" />
                      </Link>
                    </div>

                    <div className="footer__widget-content">
                      <div className="footer__info">
                        <p>
                          Maathrey Wellness provides trusted pharmaceutical and nutraceutical products to support everyday health and wellness. 
                        </p>
                        <div className="footer__social footer__social-11">
                          <SocialLinks/>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <SingleWidget
                  col="2"
                  col_2="4"
                  col_3="2"
                  title="Company"
                  contents={[
                    { url: "#", title: "Home" },
                    { url: "about", title: "About us" },
        
                    { url: "shop", title: "Shop" },
                    { url: "faq", title: "FAQs" },
                    { url: "contact", title: "Contact Us" },
                    
                  ]}
                />
                <SingleWidget
                  col="3"
                  col_2="3"
                  col_3="3"
                  title="Categories"
                  contents={[
                    { url: "#", title: "Women Health" },
                    { url: "#", title: "Men health" },
                    { url: "#", title: "Liver & Pancreas" },
                    { url: "#", title: "Diabetic" },
                    { url: "#", title: "Obesity" },
                     { url: "#", title: "Sex Health" },
                        { url: "#", title: "Joints" },
                  ]}
                />
                <SingleWidget
                  col="1"
                  col_2="3"
                  col_3="4"
                  title=""
                  contents={[
                    { url: "", title: "Sleep" },
                    { url: "", title: "Piles & Constipate" },
                    { url: "", title: "Psoriasis" },
                    { url: "", title: "Dental" },
                    { url: "", title: "Hair Care" },
                        { url: "", title: "Protein Biscuits" },
                  ]}
                />

                <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-5 col-sm-6">
                  <div className="footer__widget mb-50 footer-col-11-5">
                    <h3 className="footer__widget-title">Talk To Us</h3>

                    <div className="footer__widget-content">
                     <p className="footer__text">
  <b>Maathrey Wellness</b>
</p>
<p className="footer__text">
  Plot No. 629, Road No.15,<br />
  Weavers Colony, Bhavana Nagar,<br />
  Kapra, Hyderabad – 500083,<br />
  Telangana State.
</p>
                      <div className="footer__contact">
                        <div className="footer__contact-call">
                          <span>
                            <a href="tel:9381328833">+91 9381328833</a>
                          </span>
                        </div>
                        <div className="footer__contact-mail">
                          <span>
                            <a href="mailto:info@maathreypharmaceuticals.com">
                              info@maathreypharmaceuticals.com
                            </a>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer__bottom">
            <div className="container">
              <div className="footer__bottom-inner">
                <div className="row">
                  <div className="col-sm-6">
                    <div className="footer__copyright">
                      <CopyrightText />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="footer__payment text-sm-end">
                      <Image src={payment} alt="payment" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
