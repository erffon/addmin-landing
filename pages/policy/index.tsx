import Footer from "@/features/footer";
import Header from "@/features/header";
import style from "./policy.module.css";

const Policy = () => {
  return (
    <>
      <Header />
      <div className={style.container}>
        <h2>Privacy Policy</h2>
        <p>
          At Addmin.social, we are committed to protecting the privacy and
          security of our users. This Privacy Policy outlines the types of
          information we collect, how we use and protect that information, and
          your rights regarding your personal data.
        </p>
        <h3>Information We Collect</h3>
        <p>
          When you sign up for an account with Addmin.social, we collect certain
          personal information, including your name, email address, and
          Instagram username. We also collect information about the Instagram
          accounts you connect to Addmin.social, as well as any members you add
          to your account.
        </p>
        <h3>How We Use Your Information</h3>
        <p>
          We use the information we collect to provide you with our services,
          including allowing you to manage your Instagram accounts and add
          members to your team. We also use your information to communicate with
          you about our services and to improve our platform. We will not sell,
          rent, or share your personal information with any third parties,
          except as required by law.
        </p>
        <h3>Data Security</h3>
        <p>
          We take the security of your personal data seriously and have
          implemented a range of security measures to protect it. These measures
          include using secure servers and encryption, limiting access to your
          personal data, and regularly monitoring our systems for any
          unauthorized access or breaches.
        </p>
        <h3>Your Rights</h3>
        <p>
          As a user of Addmin.social, you have certain rights regarding your
          personal data. You have the right to access, update, or delete your
          personal information at any time. You can also request that we stop
          using your information for marketing purposes. To exercise these
          rights, please contact us at info@addmin.social.
        </p>
        <h3>Changes to This Privacy Policy</h3>
        <p>
          We may update this Privacy Policy from time to time to reflect changes
          in our practices or in the law. We encourage you to review this
          Privacy Policy periodically to stay informed about how we are
          protecting your personal data.
        </p>
        <h3>Contact Us</h3>
        <p>
          If you have any questions or concerns about our Privacy Policy or the
          way we handle your personal data, please contact us at
          info@addmin.social.
        </p>
      </div>
      <Footer />
    </>
  );
};

export default Policy;
