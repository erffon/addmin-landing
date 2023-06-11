import Footer from "@/features/footer";
import Header from "@/features/header";
import style from "./terms.module.css";

const Terms = () => {
  return (
    <>
      <Header />
      <div className={style.container}>
        <h2>Terms of Service</h2>
        <p>
          These Terms of Service (“Terms”) govern your use of the Addmin.social
          website and services (collectively, the “Services”). By using the
          Services, you agree to be bound by these Terms. If you do not agree to
          these Terms, you may not use the Services.
        </p>
        <h3>Account Registration</h3>
        <p>
          To use the Services, you must create an account with Addmin.social.
          You agree to provide accurate and complete information when creating
          your account, and to keep your account information up-to-date.
        </p>
        <h3>Use of the Services</h3>
        <p>
          You may use the Services only for lawful purposes and in accordance
          with these Terms. You agree not to use the Services in any way that
          violates any applicable federal, state, local, or international law or
          regulation.
        </p>
        <h3>Content</h3>
        <p>
          You are solely responsible for the content you post or upload through
          the Services. You represent and warrant that you have all necessary
          rights to post or upload such content and that it does not infringe
          any third-party rights. Addmin.social reserves the right to remove any
          content that violates these Terms or is otherwise objectionable.
        </p>
        <h3>Instagram Accounts and Access</h3>
        <p>
          You are solely responsible for connecting your Instagram account to
          the Services, and for granting access to other users through the
          Services. You agree not to share your Instagram account password with
          anyone else. Addmin.social is not responsible for any unauthorized
          access to your Instagram account through the Services.
        </p>
        <h3>Payment and Subscription</h3>
        <p>
          Addmin.social offers a free plan that allows you to publish up to 10
          pieces of content on Instagram. For additional features and usage, you
          may subscribe to one of our paid plans. Payment is required to access
          these plans. You may cancel your subscription at any time.
        </p>
        <h3>Termination</h3>
        <p>
          Addmin.social reserves the right to terminate your account and access
          to the Services at any time for any reason, without notice.
        </p>
        <h3>Disclaimer of Warranties</h3>
        <p>
          The Services are provided “as is” and without warranty of any kind,
          whether express or implied. Addmin.social does not warrant that the
          Services will be error-free or uninterrupted, or that any defects will
          be corrected.
        </p>
        <h3>Limitation of Liability</h3>
        <p>
          In no event shall Addmin.social be liable for any direct, indirect,
          incidental, special, consequential, or punitive damages arising out of
          or in connection with the Services or these Terms, even if
          Addmin.social has been advised of the possibility of such damages.
        </p>
        <h3>Indemnification</h3>
        <p>
          You agree to indemnify and hold harmless Addmin.social and its
          officers, directors, employees, and agents from and against any
          claims, actions, or demands, including without limitation reasonable
          legal and accounting fees, arising from or related to your use of the
          Services or your breach of these Terms.
        </p>
        <h3>Governing Law</h3>
        <p>
          These Terms shall be governed by and construed in accordance with the
          laws of the State of California, without giving effect to any
          principles of conflicts of law.
        </p>
        <h3>Entire Agreement</h3>
        <p>
          These Terms constitute the entire agreement between you and
          Addmin.social with respect to the Services, and supersede all prior or
          contemporaneous communications and proposals, whether oral or written,
          between you and Addmin.social.
        </p>
        <h3>Modifications</h3>
        <p>
          Addmin.social may modify these Terms at any time, in its sole
          discretion. Any such modifications will be effective immediately upon
          posting on the Addmin.social website. Your continued use of the
          Services after any such modifications will constitute your acceptance
          of the modified Terms.
        </p>
        <p>
          If you have any questions or concerns about these Terms, please
          contact us at info@addmin.social.
        </p>
      </div>
      <Footer />
    </>
  );
};

export default Terms;
