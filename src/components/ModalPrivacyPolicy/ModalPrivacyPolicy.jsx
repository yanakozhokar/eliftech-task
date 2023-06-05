import { IoClose } from 'react-icons/io5';
import { Modal } from 'components/Modal/Modal';
import './ModalPrivacyPolicy.css';

export const ModalPrivacyPolicy = ({ togglePrivacyPolicy }) => {
  return (
    <Modal>
      <div className="modal__top">
        <h2 className="modal__top-title">Privacy policy</h2>
        <button
          type="button"
          className="modal__top-close-btn"
          onClick={togglePrivacyPolicy}
        >
          <IoClose className="modal__top-close-icon" />
        </button>
      </div>
      <div className="modal__document">
        <p className="modal__document-text">
          RESTBURGER ("Restaurant") is committed to protecting the privacy of
          all users of Restaurant’s website, or mobile applications (together,
          the "Platform"). Please read the following privacy policy that
          explains how Restaurant use and protect your information. Restaurant
          will be the "data controller" of the information you provide to
          Restaurant.
        </p>
        <ol className="modal__document-paragraph-list-primary">
          <li className="modal__document-paragraph-item-primary">
            How restaurant collect your information
            <ol className="modal__document-paragraph-list-secondary">
              <li className="modal__document-paragraph-item-secondary">
                Restaurant collect your personal information when you interact
                with Restaurant or use Restaurant’s services, such as when you
                use Restaurant’s Platform to place an order. We also look at how
                visitors use Restaurant’s Platform, to help us improve
                Restaurant’s services and optimise customer experience.
              </li>
              <li className="modal__document-paragraph-item-secondary">
                We collect information:
                <ul className="modal__document-paragraph-list-thirdly">
                  <li className="modal__document-paragraph-item-thirdly">
                    When you create an account with Restaurant or you change
                    your account settings;
                  </li>
                  <li className="modal__document-paragraph-item-thirdly">
                    When you place an order with Restaurant and during the order
                    process (including for payment and order delivery);
                  </li>
                  <li className="modal__document-paragraph-item-thirdly">
                    When you place a reservation with Restaurant;
                  </li>
                  <li className="modal__document-paragraph-item-thirdly">
                    When you contact Restaurant directly via email, phone, post,
                    message or via Restaurant’s chat function;
                  </li>
                  <li className="modal__document-paragraph-item-thirdly">
                    When you browse and use Restaurant’s Platform (before and
                    after you create an account with Restaurant).
                  </li>
                </ul>
              </li>
              <li className="modal__document-paragraph-item-secondary">
                We also collect information from third party sites, such as
                advertising platforms and Restaurant’s fraud detection provider
                before processing orders or creating accounts.
              </li>
            </ol>
          </li>
          <li className="modal__document-paragraph-item-primary">
            Information that we collect from you
            <ol className="modal__document-paragraph-list-secondary">
              <li className="modal__document-paragraph-item-secondary">
                As part of Restaurant’s commitment to the privacy of
                Restaurant’s customers and visitors to Restaurant’s Platform
                more generally, we want to be clear about the sorts of
                information we will collect from you.
              </li>
              <li className="modal__document-paragraph-item-secondary">
                When you visit the Platform or make a Restaurant order through
                the Platform, you are asked to provide information about
                yourself including your name, contact details, delivery address,
                order details and payment information such as credit or debit
                card information.
              </li>
              <li className="modal__document-paragraph-item-secondary">
                We also collect information about your usage of the Platform and
                information about you from any messages you post to the Platform
                or when you contact Restaurant or provide Restaurant with
                feedback, including via e-mail, letter, phone or chat function.
                If you contact Restaurant by phone, we record the call for
                training and service improvement purposes, and make notes in
                relation to your call.
              </li>
              <li className="modal__document-paragraph-item-secondary">
                We collect technical information from your mobile device or
                computer, such as its operating system, language, the device and
                connection type and the IP address from which you are accessing
                Restaurant’s Platform.
              </li>
              <li className="modal__document-paragraph-item-secondary">
                We also collect technical information about your use of
                Restaurant’s services through a mobile device, for example,
                carrier, location data and performance data such as mobile
                payment methods. Unless you have elected to remain anonymous
                through your device and/or platform settings, this information
                may be collected and used by Restaurant automatically if you use
                the service through your mobile device(s) via any Restaurant
                mobile application, through your mobile's browser or otherwise.
              </li>
              <li className="modal__document-paragraph-item-secondary">
                We collect your order, loyalty earnings, spendings and
                reservations history from Restaurant.
              </li>
              <li className="modal__document-paragraph-item-secondary">
                We process health information about you only where you volunteer
                and consent to this, for example if you specify any food
                allergies.
              </li>
            </ol>
          </li>
          <li className="modal__document-paragraph-item-primary">
            Use of your information
            <ol className="modal__document-paragraph-list-secondary">
              <li className="modal__document-paragraph-item-secondary">
                We will only process the data we collect about you if there is a
                reason for doing so, and if that reason is permitted under data
                protection law. We will have a lawful basis for processing your
                information: if we need to process your information in order to
                provide you with the service you have requested or to enter into
                a contract; we have your consent; we have a justifiable reason
                for processing your data; or we are under a legal obligation to
                do so.
              </li>
              <li className="modal__document-paragraph-item-secondary">
                Where we need to in order to provide you with the service you
                have requested or to enter into a contract, we use your
                information:
                <ul className="modal__document-paragraph-list-thirdly">
                  <li className="modal__document-paragraph-item-thirdly">
                    to enable Restaurant to provide you with access to the
                    relevant parts of the Platform;
                  </li>
                  <li className="modal__document-paragraph-item-thirdly">
                    to supply the services you have requested;
                  </li>
                  <li className="modal__document-paragraph-item-thirdly">
                    to enable Restaurant to collect payment from you;
                  </li>
                  <li className="modal__document-paragraph-item-thirdly">
                    to contact you where necessary concerning Restaurant’s
                    services, such as to resolve issues you may have with your
                    order or reservation.
                  </li>
                </ul>
              </li>
              <li className="modal__document-paragraph-item-secondary">
                We also process your data where we have a justifiable reason for
                doing so— for example personalisation of Restaurant’s service,
                including processing data to make it easier and faster for you
                to place orders. We have listed these reasons below:
                <ul className="modal__document-paragraph-list-thirdly">
                  <li className="modal__document-paragraph-item-thirdly">
                    to improve the effectiveness and quality of service that
                    Restaurant’s customers can expect from Restaurant in the
                    future;
                  </li>
                  <li className="modal__document-paragraph-item-thirdly">
                    to enable Restaurant’s customer support team to help you
                    with any enquiries or complaints in the most efficient way
                    possible;
                  </li>
                  <li className="modal__document-paragraph-item-thirdly">
                    to contact you for your views and feedback on Restaurant’s
                    services and to notify you if there are any important
                    changes or developments to the Platform or Restaurant’s
                    services, including letting you know that Restaurant’s
                    services are operating in a new area, where you have asked
                    Restaurant to do so;
                  </li>
                  <li className="modal__document-paragraph-item-thirdly">
                    to analyse your activity on the Platform so that we can
                    administer, improve and develop statistical and analytical
                    purposes to prevent fraud;
                  </li>
                  <li className="modal__document-paragraph-item-thirdly">
                    if you submit comments and feedback regarding the Platform
                    and the services, we may use such comments and feedback on
                    the Platform and in any marketing or advertising materials.
                    We will only identify you for this purpose by your first
                    name and the city in which you live.
                  </li>
                </ul>
              </li>
              <li className="modal__document-paragraph-item-secondary">
                We will also analyse data about your use of Restaurant’s
                services from your location data to create profiles relating to
                you and for you. This means that we may make certain assumptions
                about what you may be interested in and use this, for example,
                to send you more tailored marketing communications, to let you
                know about special offers or products which we think you may be
                interested in. This activity is referred to as profiling. You
                have certain rights in relation to this type of processing.
                Please see 'Your Rights' section below for more information.
              </li>
              <li className="modal__document-paragraph-item-secondary">
                Where we are under a legal obligation to do so we may use your
                information to:
                <ul className="modal__document-paragraph-list-thirdly">
                  <li className="modal__document-paragraph-item-thirdly">
                    create a record of your order(s);
                  </li>
                  <li className="modal__document-paragraph-item-thirdly">
                    comply with any legal obligation or regulatory requirement
                    to which we are subject.
                  </li>
                </ul>
              </li>
            </ol>
          </li>
          <li className="modal__document-paragraph-item-primary">
            How restaurant collect your information
            <ol className="modal__document-paragraph-list-secondary">
              <li className="modal__document-paragraph-item-secondary">
                Restaurant’s Platform may use “cookies.” You can set your
                browser to refuse all or some browser cookies, or to alert you
                when websites set or access cookies. If you disable or refuse
                cookies, please note that some parts of the Site may become
                inaccessible or not function properly.
              </li>
              <li className="modal__document-paragraph-item-secondary">
                Cookies are text files containing small amounts of information
                which are downloaded to your device when you visit and use the
                Platform. Cookies are then sent back to the originating URL on
                each subsequent visit, or to another URL that recognises that
                cookie. Cookies are useful because they allow a website to
                recognise a user’s device. You can find more information about
                cookies at: www.allaboutcookies.org and www.youronlinechoices.eu
                . For a video about cookies visit
                www.google.co.uk/goodtoknow/data-on-the-web/cookies.
              </li>
              <li className="modal__document-paragraph-item-secondary">
                Cookies do lots of different jobs, like letting you navigate
                between pages efficiently, remembering your preferences, and
                generally improve the user experience. They can also help to
                ensure that adverts you see online are more relevant to you and
                your interests.
              </li>
              <li className="modal__document-paragraph-item-secondary">
                You may set and/or adjust your (browser) settings and
                preferences regarding cookies at any time, and you may disable
                cookies. Disabling them may prevent you from using certain
                parts/functionalities of the Controller’s web application.
              </li>
              <li className="modal__document-paragraph-item-secondary">
                Restaurant’s Platform may use “cookies.” You can set your
                browser to refuse all or some browser cookies, or to alert you
                when websites set or access cookies. If you disable or refuse
                cookies, please note that some parts of the Site may become
                inaccessible or not function properly.
              </li>
              <li className="modal__document-paragraph-item-secondary">
                Restaurant may collect anonymous information, including for
                statistical or research purposes.
              </li>
              <li className="modal__document-paragraph-item-secondary">
                Restaurant uses the following categories on Platform:
                <dl className="modal__document-description-list">
                  <dt className="modal__document-description-title">
                    <span className="bold">Category 1</span> — Strictly
                    Necessary Cookies
                  </dt>
                  <dd className="modal__document-description-definition">
                    These cookies are essential in order to enable you to move
                    around Platform and use its features, such as accessing
                    secure areas. Without these cookies services like order list
                    and billing cannot be provided.
                  </dd>
                  <dt className="modal__document-description-title">
                    <span className="bold">Category 2</span> — Performance
                    Cookies
                  </dt>
                  <dd className="modal__document-description-definition">
                    These cookies collect information about how you use the
                    Platform — for instance, which pages you go to most, and if
                    they get error messages from web pages and/or the web
                    application. These cookies don’t collect information that
                    identifies a visitor. All information these cookies collect
                    is aggregated and therefore anonymous. It is only used to
                    improve how the Restaurant’s website(s) and/or the
                    application works. As 3rd party cookies in this category we
                    use Google Analytics, a service which transmits website
                    traffic data to Google servers in the United States. The
                    reports provided by Google Analytics help us understand
                    website traffic and webpage usage. Google Analytics does not
                    identify individual users or associate your IP address with
                    any other data held by Google.
                  </dd>
                  <dt className="modal__document-description-title">
                    <span className="bold">Category 3</span> — Functionality
                    Cookies
                  </dt>
                  <dd className="modal__document-description-definition">
                    These cookies allow the Platform to remember choices you
                    make while browsing and/or using the application (such as
                    your user name, language or the region you are in) and
                    provide enhanced, more personal features. These cookies can
                    also be used to remember changes you have made to text size,
                    language and other parts of web pages that you can
                    customize. The information these cookies collect will not
                    personally identify you, and they cannot track your browsing
                    activity on non- Controller’s websites. For reliable review
                    of your order status, on-screen on the application, in
                    real-time, and also for easy reordering, your data may be
                    saved on your device, serving a cookie locally.
                  </dd>
                  <dt className="modal__document-description-title">
                    <span className="bold">Category 4</span> — Targeting cookies
                    or advertising cookies
                  </dt>
                  <dd className="modal__document-description-definition">
                    These cookies will usually be third-party cookies, although
                    if a user is visiting the advertising network’s own website
                    it is technically possible these could be first party. They
                    will always be persistent but time-limited cookies. These
                    cookies can be associated with services provided by the
                    third party but this is not always the case. These cookies
                    contain a unique key that is able to distinguish individual
                    users’ browsing habits or that can be translated into a set
                    of browsing habits or preferences using information stored
                    elsewhere. Generally speaking, the privacy statement should
                    indicate if the cookie is being used as part of an
                    advertising network. Cookies may also be used to limit the
                    number times a user sees a particular ad on a website and to
                    measure the effectiveness of a particular campaign.
                  </dd>
                </dl>
              </li>
              <li className="modal__document-paragraph-item-secondary">
                By default, Platform and its originating website URL is not
                serving category 4 cookies. However, it may be possible to order
                online from other websites that frame-in or facilitate access to
                the online menu and web application. Therefore, please always
                check the cookie policy of the visited website from which you
                initiated an online ordering session in order to find out if any
                category 4 cookies are served and which is the way to opt-out or
                opt-in for them, as the legal case may be.
              </li>
            </ol>
          </li>
          <li className="modal__document-paragraph-item-primary">
            Direct marketing
            <ol className="modal__document-paragraph-list-secondary">
              <li className="modal__document-paragraph-item-secondary">
                Where you have given your consent or where we have a justifiable
                reason for doing so (and are permitted to do so by law) we will
                use your information to let you know about Restaurant’s other
                products and services that may be of interest to you and we may
                contact you to do so by email or phone. You can control your
                email marketing preferences by:
                <ul className="modal__document-paragraph-list-thirdly">
                  <li className="modal__document-paragraph-item-thirdly">
                    visiting Restaurant’s website, or mobile application;
                  </li>
                  <li className="modal__document-paragraph-item-thirdly">
                    clicking on "Account" (for Restaurant’s website this is
                    under the drop-down menu);
                  </li>
                  <li className="modal__document-paragraph-item-thirdly">
                    scrolling down to "Marketing Preferences".
                  </li>
                </ul>
              </li>
            </ol>
          </li>
          <li className="modal__document-paragraph-item-primary">
            Automated decision making
            <ol className="modal__document-paragraph-list-secondary">
              <li className="modal__document-paragraph-item-secondary">
                We conduct fraud checks on all customers. Where we believe we
                may detect fraudulent activity we may block you from placing an
                order and using Restaurant’s Platform.
              </li>
              <li className="modal__document-paragraph-item-secondary">
                We use automated systems including a third party fraud detection
                provider, which analyses your order data in order to make
                automated decisions as to whether or not we will accept an
                order. We find this is a fairer, more accurate and more
                efficient way of conducting fraud checks since human checks
                would simply not be possible.
              </li>
              <li className="modal__document-paragraph-item-secondary">
                You have certain rights in respect of this activity - please see
                'Your Rights' section below for more information. Our fraud
                detection is in place to protect all of Restaurant’s customers
                as well as Restaurant. You have the right to contest any fraud
                decision made about you and to be given more information about
                why any such decision was made by contacting Restaurant as set
                out in section 12 below.
              </li>
            </ol>
          </li>
          <li className="modal__document-paragraph-item-primary">
            Retention of your information
            <ol className="modal__document-paragraph-list-secondary">
              <li className="modal__document-paragraph-item-secondary">
                We will not retain your information for any longer than we think
                is necessary.
              </li>
              <li className="modal__document-paragraph-item-secondary">
                Information that we collect will be retained for as long as
                needed to fulfil the purposes outlined in the ‘Use of my
                information’ section above, in line with Restaurant’s legitimate
                interest or for a period specifically required by applicable
                regulations or laws, such as retaining the information for
                regulatory reporting purposes.
              </li>
              <li className="modal__document-paragraph-item-secondary">
                When determining the relevant retention periods, we will take
                into account factors including:
                <ul className="modal__document-paragraph-list-thirdly">
                  <li className="modal__document-paragraph-item-thirdly">
                    Restaurant’s contractual obligations and rights in relation
                    to the information involved;
                  </li>
                  <li className="modal__document-paragraph-item-thirdly">
                    legal obligation(s) under applicable law to retain data for
                    a certain period of time;
                  </li>
                  <li className="modal__document-paragraph-item-thirdly">
                    statute of limitations under applicable law(s);
                  </li>
                  <li className="modal__document-paragraph-item-thirdly">
                    potential disputes;
                  </li>
                  <li className="modal__document-paragraph-item-thirdly">
                    guidelines issued by relevant data protection authorities.
                  </li>
                </ul>
              </li>
              <li className="modal__document-paragraph-item-secondary">
                Otherwise, we securely erase your information where we no longer
                require your information for the purposes collected.
              </li>
            </ol>
          </li>
          <li className="modal__document-paragraph-item-primary">
            Disclosuare of your information
            <ol className="modal__document-paragraph-list-secondary">
              <li className="modal__document-paragraph-item-secondary">
                The information we collect about you will be transferred to and
                stored on Restaurant’s service providers servers located within
                the UK. We are very careful and transparent about who else your
                information is shared with.
              </li>
              <li className="modal__document-paragraph-item-secondary">
                Sharing your information internally.
              </li>
              <li className="modal__document-paragraph-item-secondary">
                We share your information with our other service locations only
                where necessary.
              </li>
              <li className="modal__document-paragraph-item-secondary">
                Sharing your information with third parties.
              </li>
              <li className="modal__document-paragraph-item-secondary">
                We share your information with third party service providers.
                The types of third party service providers whom we share your
                information with includes:
                <ul className="modal__document-paragraph-list-thirdly">
                  <li className="modal__document-paragraph-item-thirdly">
                    Payment providers (including online payment providers and
                    fraud detection providers): for the purposes of providing
                    services to Restaurant, for example when they process
                    information such as credit card payments for Restaurant,
                    provide support services to you or carry out fraud checks
                    for Restaurant;
                  </li>
                  <li className="modal__document-paragraph-item-thirdly">
                    IT service providers (including cloud providers): for the
                    purposes of data storage and analysis;
                  </li>
                  <li className="modal__document-paragraph-item-thirdly">
                    Riders: so they can deliver your order to you;
                  </li>
                  <li className="modal__document-paragraph-item-thirdly">
                    Marketing and advertising partners: so that they can ensure
                    that you see advertising which is more relevant to you and
                    send you email marketing on Restaurant’s behalf.
                  </li>
                </ul>
              </li>
              <li className="modal__document-paragraph-item-secondary">
                Restaurant will take all steps reasonably necessary to ensure
                that your data is treated securely and in accordance with this
                privacy policy when it is transferred to third parties.
              </li>
              <li className="modal__document-paragraph-item-secondary">
                If Restaurant’s business enters into a joint venture with,
                purchases or is sold to or merged with another business entity,
                your information may be disclosed or transferred to the target
                company, Restaurant’s new business partners or owners or their
                advisors.
              </li>
              <li className="modal__document-paragraph-item-secondary">
                We may also share your information:
                <ul className="modal__document-paragraph-list-thirdly">
                  <li className="modal__document-paragraph-item-thirdly">
                    if we are under a duty to disclose or share your information
                    in order to comply with (and/or where we believe we are
                    under a duty to comply with) any legal obligation or
                    regulatory requirement. This includes exchanging information
                    with other companies and other organisations for the
                    purposes of fraud protection and prevention;
                  </li>
                  <li className="modal__document-paragraph-item-thirdly">
                    in order to enforce Restaurant’s contractual terms with you
                    and any other agreement;
                  </li>
                  <li className="modal__document-paragraph-item-thirdly">
                    to protect the rights of Restaurant, restaurant partners,
                    riders, or others, including to prevent fraud;
                  </li>
                  <li className="modal__document-paragraph-item-thirdly">
                    with such third parties as we reasonably consider necessary
                    in order to prevent crime, e.g. the police.
                  </li>
                </ul>
              </li>
              <li className="modal__document-paragraph-item-secondary">
                In some cases the personal data we collect from you might be
                processed outside the European Economic Area ("EEA"), such as
                Turkey, United States and the countries in which Restaurant’s
                service provider operates. These countries may not have the same
                protections for your personal data as the EEA has. However, we
                are obliged to ensure that the personal data that is processed
                by Restaurant and Restaurant’s suppliers outside of the EEA is
                protected in the same ways as it would be if it was processed
                within the EEA. There are therefore certain safeguards in place
                when your data is processed outside of the EEA.
              </li>
              <li className="modal__document-paragraph-item-secondary">
                We ensure a similar degree of protection is afforded to it by
                ensuring at least one of the following safeguards is
                implemented:
                <ul className="modal__document-paragraph-list-thirdly">
                  <li className="modal__document-paragraph-item-thirdly">
                    your personal data is transferred to countries that have
                    been deemed to provide an adequate level of protection for
                    personal data by the European Commission;
                  </li>
                  <li className="modal__document-paragraph-item-thirdly">
                    we use the EU approved Standard Contractual Clauses;
                  </li>
                  <li className="modal__document-paragraph-item-thirdly">
                    where your personal data is transferred to third party
                    providers based in the US, data may be transferred to them
                    if they have self-certified under the Privacy Shield
                    framework in relation to the type of data being transferred,
                    which requires them to provide similar protection to
                    personal data shared between the EU and the US. Please
                    contact us using the contact details above if you want
                    further information on the countries to which personal data
                    may be transferred and the specific mechanism used by
                    Restaurant when transferring your personal data out of the
                    EEA.
                  </li>
                </ul>
              </li>
            </ol>
          </li>
          <li className="modal__document-paragraph-item-primary">
            Security
            <ol className="modal__document-paragraph-list-secondary">
              <li className="modal__document-paragraph-item-secondary">
                We adopt robust technologies and policies to ensure the personal
                information we hold about you is suitably protected.
              </li>
              <li className="modal__document-paragraph-item-secondary">
                We take steps to protect your information from unauthorised
                access and against unlawful processing, accidental loss,
                destruction and damage.
              </li>
              <li className="modal__document-paragraph-item-secondary">
                Where you have chosen a password that allows you to access
                certain parts of the Platform, you are responsible for keeping
                this password confidential. We advise you not to share your
                password with anyone.
              </li>
              <li className="modal__document-paragraph-item-secondary">
                Unfortunately, the transmission of information via the internet
                is not completely secure. Although we will take steps to protect
                your information, we cannot guarantee the security of your data
                transmitted to the Platform; any transmission is at your own
                risk. Once we have received your information, we will use strict
                procedures and security features to try to prevent unauthorised
                access.
              </li>
            </ol>
          </li>
          <li className="modal__document-paragraph-item-primary">
            Your rights
            <ol className="modal__document-paragraph-list-secondary">
              <li className="modal__document-paragraph-item-secondary">
                Under data protection law, you may have a number of rights
                concerning the data we hold about you. If you wish to exercise
                any of these rights, please contact Restaurant’s Data Protection
                Officer using the contact details set out above. For additional
                information on your rights please contact your data protection
                authority and see below.
              </li>
              <li className="modal__document-paragraph-item-secondary">
                The right to be informed. You have the right to be provided with
                clear, transparent and easily understandable information about
                how we use your information and your rights. This is why we’re
                providing you with the information in this policy.
              </li>
              <li className="modal__document-paragraph-item-secondary">
                The right of access. You have the right to obtain access to your
                information (if we’re processing it). This will enable you, for
                example, to check that we’re using your information in
                accordance with data protection law. If you wish to access the
                information we hold about you in this way, please get in touch
                (see Contact Details).
              </li>
              <li className="modal__document-paragraph-item-secondary">
                The right to rectification. You are entitled to have your
                information corrected if it is inaccurate or incomplete. You can
                request that we rectify any errors in information that we hold
                by contacting Restaurant (see Contact Details).
              </li>
              <li className="modal__document-paragraph-item-secondary">
                The right to erasure. This is also known as ‘the right to be
                forgotten’ and, in simple terms, enables you to request the
                deletion or removal of certain of the information that we hold
                about you by contacting Restaurant (see Contact Details).
              </li>
              <li className="modal__document-paragraph-item-secondary">
                The right to restrict processing. You have rights to 'block' or
                'suppress' further use of your information. When processing is
                restricted, we can still store your information, but will not
                use it further.
              </li>
              <li className="modal__document-paragraph-item-secondary">
                The right to data portability. You have the right to obtain your
                personal information in an accessible and transferrable format
                so that you can re-use it for your own purposes across different
                service providers. This is not a general right however and there
                are exceptions. To learn more please get in touch (see Contact
                Details).
              </li>
              <li className="modal__document-paragraph-item-secondary">
                The right to lodge a complaint. You have the right to lodge a
                complaint about the way we handle or process your information
                with the national data protection authority.
              </li>
              <li className="modal__document-paragraph-item-secondary">
                The right to withdraw consent. If you have given your consent to
                anything we do with your information (i.e. we rely on consent as
                a legal basis for processing your information), you have the
                right to withdraw that consent at any time. You can do this by
                contacting Restaurant (see Contact Details). Withdrawing consent
                will not however make unlawful Restaurant’s use of your
                information while consent had been apparent.
              </li>
              <li className="modal__document-paragraph-item-secondary">
                The right to object to processing. You have the right to object
                to certain types of processing, including processing for direct
                marketing and profiling. You can object by changing your
                marketing preferences or disabling cookies as set out in
                sections 7 and 8 above.
              </li>
            </ol>
          </li>
          <li className="modal__document-paragraph-item-primary">
            Changes to our privacy policy
            <ol className="modal__document-paragraph-list-secondary">
              <li className="modal__document-paragraph-item-secondary">
                Any changes to Restaurant’s privacy policy will be posted to the
                Platform and, where appropriate, we will notify you of the
                changes for example by email or push notification. This privacy
                policy was last updated: 19/01/2022
              </li>
            </ol>
          </li>
          <li className="modal__document-paragraph-item-primary">
            Contact us
            <ol className="modal__document-paragraph-list-secondary">
              <li className="modal__document-paragraph-item-secondary">
                Any questions regarding this Privacy Policy should be directed
                to Restaurant at RESTAURANT MAIL or RESTAURANT ADDRESS. You also
                may: Contact our data protection officer at dpo@restapp.com with
                any questions about this Privacy Policy.
              </li>
            </ol>
          </li>
        </ol>
      </div>
    </Modal>
  );
};
