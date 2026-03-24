import Header from "@layout/header";
import Wrapper from "@layout/wrapper";
import SectionTop from "@components/terms-policy/section-top-bar";
import Footer from "@layout/footer";
import TermsArea from "@components/terms-policy/terms-area";

export const metadata = {
  title: "Terms & Conditions - Maathrey Wellness",
};

export default function Terms() {
  return (
    <Wrapper>
      <Header style_2={true} />
      <SectionTop
        title="Terms and Conditions"
        subtitle="Please read these terms carefully before using our website and services."
      />
      <TermsArea />
      <Footer />
    </Wrapper>
  );
}
