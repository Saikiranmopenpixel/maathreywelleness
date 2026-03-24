
import { DotsTwo, General, Support } from "@svg/index";
import FaqThumb from "./faq-thumb";
import SingleFaq from "./single-faq";

// single nav
function NavItem({ active, id, title, icon }) {
  return (
    <button
      className={`nav-link ${active ? "active" : ""}`}
      id={`nav-${id}-tab`}
      data-bs-toggle="tab"
      data-bs-target={`#${id}`}
      type="button"
      role="tab"
      aria-controls={`nav-${id}`}
      aria-selected={active ? "true" : "false"}
      tabIndex="-1"
    >
      <span>{icon}</span>
      {title}
    </button>
  );
}

// TabItem
export function TabItem({ active, id, accordion_items }) {
  return (
    <div
      className={`tab-pane fade ${active ? "show active" : ""}`}
      id={`${id}`}
      role="tabpanel"
      aria-labelledby={`nav-${id}-tab`}
    >
      {/* <!-- faq item one of community question --> */}
      {accordion_items.map((item, i) => (
        <div key={i} className="faq__item pb-95">
          <div className="row">
            <div className="col-xl-3 col-lg-3 col-md-4">
              <div className="faq__content">
                <h3 className="faq__title-2">{item.title}</h3>
              </div>
            </div>
            <div className="col-xl-9 col-lg-9 col-md-8">
              <div className="faq__wrapper faq__style-4 tp-accordion">
                <div className="accordion" id={`${id}-${i + 1}_accordion`}>
                  {item.accordions.map((item) => (
                    <SingleFaq key={item.id} item={item} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}


const FaqArea = ({ element_faq = false }) => {
  // tab item
  return (
    <>
      {/* faq thumb start */}
      {!element_faq && <FaqThumb />}
      {/* faq thumb end */}

      {/* faq area start */}
      <section className="faq__area pt-100 pb-25">
        <div className="container">
          <div className="row">
            <div className="col-xxl-12">
              <div className="faq__tab-2 tp-tab mb-50">
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                  <li className="nav-item" role="presentation">
                    <NavItem
                      active={true}
                      id="general"
                      icon={<General />}
                      title="General Questions"
                    />
                  </li>
                  <li className="nav-item" role="presentation">
                    <NavItem
                      id="community"
                      icon={<DotsTwo />}
                      title="Community"
                    />
                  </li>
                  <li className="nav-item" role="presentation">
                    <NavItem id="support" icon={<Support />} title="Support" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="faq__item-wrapper">
            <div className="tab-content" id="faqTabContent">
              {/* general */}
              <TabItem
                active={true}
                id="general"
                accordion_items={[
                  {
                    title: (
                      <>
                        Orders <br />& Shipping
                      </>
                    ),
                    accordions: [
                      {
                        id: "One",
                        title: "How can I place an order?",
                        show: true,
                        desc: "You can place an order by selecting your desired products, adding them to the cart, and proceeding to checkout.",
                        parent: "general-1_accordion",
                      },
                      {
                        id: "Two",
                        title: "Can I modify or cancel my order?",
                        desc: "Yes, you can modify or cancel your order before it is shipped by contacting our support team.",
                        parent: "general-1_accordion",
                      },
                      {
                        id: "Three",
                        title: "How do I check my order status?",
                        desc: "You can track your order status from your account dashboard under “My Orders”.",
                        parent: "general-1_accordion",
                      },
                     
                    ],
                  },
                  {
                    title: (
                      <>
                        Returns <br />& Exchanges
                      </>
                    ),
                    accordions: [
                      {
                        id: "five",
                        title: "What is your return policy?",
                        show: true,
                        desc: "We accept returns within 7 days of delivery if the product is damaged or incorrect.",
                        parent: "general-2_accordion",
                      },
                      {
                        id: "six",
                        title:
                          "Can I exchange a product?",
                        desc: "Yes, exchanges are allowed for defective or damaged products.",
                        parent: "general-2_accordion",
                      },
                      {
                        id: "seven",
                        title: "How do I request a return?",
                        desc: "You can request a return by contacting customer support or through your account.",
                        parent: "general-2_accordion",
                      },
                    ],
                  },
                  {
                    title: "Discounts",
                    accordions: [
                      {
                        id: "eight",
                        title: "How do I apply a coupon code?",
                        show: true,
                        desc: "Enter your coupon code at checkout to avail the discount.",
                        parent: "general-3_accordion",
                      },
                      {
                        id: "nine",
                        title:
                          "Can I use multiple coupons at once?",
                        desc: "No, only one coupon can be applied per order.",
                        parent: "general-3_accordion",
                      },
                      {
                        id: "ten",
                        title: "Why is my coupon not working?",
                        desc: "Coupons may not work if they are expired or if the minimum order value is not met.",
                        parent: "general-3_accordion",
                      },
                    ],
                  },
                ]}
              />

              {/* community */}
              <TabItem
                id="community"
                accordion_items={[
                  {
                    title: (
                      <>
                        Community <br />& Support
                      </>
                    ),
                    accordions: [
                      {
                        id: "eleven",
                        title: "How can I contact customer support?",
                        show: true,
                        desc: "You can reach our support team via email, phone, or the contact form available on our website",
                        parent: "community-1_accordion",
                      },
                      {
                        id: "twelve",
                        title: "What are your support hours?",
                        desc: "Our customer support team is available Monday to Saturday, 9 AM to 6 PM.",
                        parent: "community-1_accordion",
                      },
                      {
                        id: "thirteen",
                        title: "Do you offer medical advice?",
                        desc: "No, we do not provide medical advice. Please consult a qualified healthcare professional for any medical concerns.",
                        parent: "community-1_accordion",
                      },
                      {
                        id: "fourteen",
                        title: "How can I report an issue with a product?",
                        desc: "You can report any issue by contacting our support team with your order details and product information.",
                        parent: "community-1_accordion",
                      },
                    ],
                  },
                ]}
              />

              {/* support */}
              <TabItem
                id="support"
                accordion_items={[
                  {
                    title: "Support",
                    accordions: [
                      {
                        id: "fifteen",
                        title: "Is there a community or forum for discussions?",
                        show: true,
                        desc: "Currently, we do not have a public forum, but you can follow us on social media for updates and health tips.",
                        parent: "support-1_accordion",
                      },
                      {
                        id: "sixteen",
                        title: "How do I give feedback or suggestions?",
                        desc: "We welcome your feedback! You can share your suggestions through our contact page or email us directly.",
                        parent: "support-1_accordion",
                      },
                      {
                        id: "seventeen",
                        title: "Do you provide bulk or business support?",
                        desc: "Yes, for bulk orders or business inquiries, please contact our support team for assistance",
                        parent: "support-1_accordion",
                      },
                      
                    ],
                  },
                ]}
              />
            </div>
          </div>
        </div>
      </section>
      {/* faq area end */}
    </>
  );
};

export default FaqArea;
