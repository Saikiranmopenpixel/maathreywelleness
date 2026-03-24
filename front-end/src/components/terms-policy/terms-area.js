import Link from "next/link";

const TermsArea = () => {
  return (
    <section className="policy__area pb-120">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-10">
            <div className="policy__wrapper policy__translate p-relative z-index-1">
              <div className="policy__item mb-35">
                <h4 className="policy__meta">
                  Introduction
                </h4>
                <p>
                  Welcome to Maathrey Wellness. By accessing and using our website, you agree to comply with and be bound by the following terms and conditions. Please read them carefully before using our services.
                </p>
               
              </div>

              <div className="policy__item policy__item-2 mb-35">
                <h3 className="policy__title">Use of Website</h3>
                <p>
                You agree to use this website only for lawful purposes. You must not use our website in any way that may cause damage, disrupt services, or affect other users’ experience.
                </p>
              </div>

              <div className="policy__list mb-35">
                <h3 className="policy__title">
                 Product Information
                </h3>
                <p>We strive to provide accurate product information, including descriptions, pricing, and availability. However, we do not guarantee that all details are error-free, and we reserve the right to correct any errors without prior notice.</p>
               
              </div>
                <div className="policy__list mb-35">
                <h3 className="policy__title">
                 Orders & Payments
                </h3>
                <p>All orders placed through our website are subject to acceptance and availability. We reserve the right to cancel or refuse any order at our discretion. Payments must be made through the available payment methods on the website.</p>
               
              </div>

                 <div className="policy__list mb-35">
                <h3 className="policy__title">
                 Pricing & Availability
                </h3>
                <p>Prices of products are subject to change without notice. We make every effort to ensure product availability, but we cannot guarantee that all items will always be in stock.</p>
               
              </div>
                <div className="policy__list mb-35">
                <h3 className="policy__title">
                Shipping & Delivery
                </h3>
                <p>We aim to deliver products within the estimated time frame. However, delays may occur due to unforeseen circumstances. We are not responsible for delays caused by third-party delivery services.</p>
               
              </div>
               <div className="policy__list mb-35">
                <h3 className="policy__title">
                Returns & Refunds
                </h3>
                <p>Returns and refunds are subject to our return policy. Products must be returned within the specified time and in their original condition to be eligible for a refund or exchange.</p>
               
              </div>
                <div className="policy__list mb-35">
                <h3 className="policy__title">
                Intellectual Property
                </h3>
                <p>All content on this website, including text, images, logos, and graphics, is the property of Maathrey Wellness and is protected by applicable copyright laws. Unauthorized use is strictly prohibited.</p>
               
              </div>
               <div className="policy__list mb-35">
                <h3 className="policy__title">
                Limitation of Liability
                </h3>
                <p>Maathrey Wellness shall not be held liable for any direct, indirect, or incidental damages arising from the use or inability to use our website or products.</p>
               
              </div>
              <div className="policy__list mb-35">
                <h3 className="policy__title">
                Medical Disclaimer
                </h3>
                <p>The products listed on our website are not intended to diagnose, treat, cure, or prevent any disease. Please consult a qualified healthcare professional before using any product.</p>
               
              </div>
               <div className="policy__list mb-35">
                <h3 className="policy__title">
                Changes to Terms
                </h3>
                <p>We reserve the right to update or modify these terms at any time. Continued use of the website after changes indicates your acceptance of the updated terms.</p>
               
              </div>
               
              <div className="policy__contact">
                <h3 className="policy__title policy__title-2">Contact us</h3>
                <p>You may contact us at any time via:</p>

                <ul>
                  <li>
                    Email:{" "}
                    <span>
                      <a href="mailto:support@maathreypharma.com">support@maathreypharma.com</a>
                    </span>
                  </li>
                </ul>

                <div className="policy__address">
                  <p>
                      <a
                      rel="noreferrer"
                      href="https://www.google.com/maps?cid=6880456320936852058&g_mp=CiVnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLkdldFBsYWNlEAEYASAB&hl=en&gl=IN&source=embed"
                      target="_blank"
                    >
                      Maathrey Wellness PVT LTD <br /> Plot No. 629, Road No.15,
Weavers Colony, Bhavana Nagar,
Kapra, Hyderabad – 500083,
Telangana State.
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TermsArea;
