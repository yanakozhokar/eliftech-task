import { IoClose } from 'react-icons/io5';
import { Modal } from 'components/Modal/Modal';

export const ModalTermsOfUse = ({ togglePrivacyPolicy }) => {
  return (
    <Modal>
      <div className="modal__top">
        <h2 className="modal__top-title">Terms of use</h2>
        <button
          type="button"
          className="modal__top-close-btn"
          onClick={togglePrivacyPolicy}
        >
          <IoClose className="modal__top-close-icon" />
        </button>
      </div>
      <div className="modal__main">
        <p className="modal__document-text">
          <span className="bold">RESTBURGER</span> ONLINE ORDERING TERMS AND
          CONDITIONS
        </p>
        <p className="modal__document-text">
          <span className="bold">Company Name, RestBurger,</span> located in{' '}
          <span className="bold">Address, Postcode, Phone</span>
          (hereinafter referred to as the “Restaurant”)
        </p>
        <p className="modal__document-text">
          Please read carefully. If you do not wish to be bound by these Terms
          and Conditions then you shouldn’t access or use online ordering
          (hereinafter named “online ordering platform”). Access or use of the
          online ordering by you shall be deemed to be your acceptance of these
          Terms and Conditions.
        </p>
        <p className="modal__document-text">
          Subject to applicable legal regulations in force, Restaurant may, in
          our discretion, from time to time amend modify these Terms and
          Conditions.
        </p>
        <p className="modal__document-text">
          These Terms and Conditions describe the general online ordering terms
          and conditions between Restaurant and Customer and different rights
          and obligations of the Parties.
        </p>
        <p className="modal__document-text">
          For the sake of clarity, these Terms and Conditions apply (also) in
          case of online ordering through the platform (hereinafter referred to
          as the “online ordering platform” or the “platform“; the platform is
          the online ordering platform used by the Customer to place its order
          for different products and/or services (hereinafter referred to as the
          “products” and/or “services”).
        </p>
        <p className="modal__document-text">
          Restaurant shall make all the necessary diligences to ensure that the
          information in relation with the online ordering is accurate and
          reliable. However, this cannot be infallible and errors may sometimes
          occur. You should take appropriate steps to verify all information in
          relation with the online ordering before using it. To the maximum
          extent permitted according to the applicable law, the Restaurant
          disclaims any warranty or representation of any kind, whether express
          or implied, as to any matter whatsoever relating to the online
          ordering, including without limitation the availability of the online
          ordering platform.
        </p>
        <p className="modal__document-text">
          Restaurant may from time to time revise the information in relation
          with the online ordering platform and/or process and reserves the
          right to make such changes without any obligation to notify any past,
          current or prospective customers. In no event shall the Restaurant be
          liable for any indirect, special, incidental or consequential damages
          arising out of any use of the information contained herein and/or in
          relation with the online ordering process.
        </p>
        <p className="modal__document-text">
          By ordering online, you acknowledge and agree that the use of the
          online ordering platform and/or processes at your own risk and the
          maximum extent permitted according to the applicable law, in no
          circumstances, shall Restaurant be liable for any direct, indirect,
          incidental, special, consequential, or punitive damages, losses, costs
          or expenses nor for any loss of profit that results from the use of,
          or inability to use this online ordering and/or any platform and/or
          material on any site linked to this online ordering platform
          (including but not limited to any viruses or any other errors or
          defects or failures in computer transmissions or network
          communications) even if Restaurant have been advised of the
          possibility of such damage. In addition, no liability can be accepted
          by Restaurant in respect of any changes made to the content of the
          online ordering platform and/or process by unauthorized third parties.
          All express or implied warranties or representations are excluded to
          the maximum extent permitted according to the applicable law.
        </p>
        <p className="modal__document-text">
          The online ordering platform and/or process may include content,
          information or links to third parties or third party sites. Restaurant
          is not responsible for the content of any such sites or neither for
          the content of any third party advertising or sponsorship nor for
          compliance of such with any regulations. The links may be accessed at
          the customer's own risk and the Restaurant makes no representations or
          warranties about the content, completeness, or accuracy of these links
          or the sites hyperlinked to this ordering online platform. You agree
          to hold harmless and relieve the Restaurant from any liability
          whatsoever arising from your use of information from a third party or
          your use of any third-party website.
        </p>
        <p className="modal__document-text">
          Except otherwise expressly mentioned, all the information in relation
          with the online ordering platform (including without limitation the
          images, buttons and text) are property and/or available with the
          permission of the Platform service provider regarding the use of the
          platform in order to order online and holds usage rights over them
          and, may not be copied, distributed, or reproduced or transmitted in
          any form or by any mean, electronic, mechanical, photocopying,
          recording or otherwise, without its prior written permission.
        </p>
        <p className="modal__document-text">
          The content referring to specific products (e.g. food items),
          arrangement and texts layout of the online ordering platform and/or
          process, the trademarks, and any other content, are proprietary and
          are protected according with the legal regulations in force and cannot
          be used in any way without the express written permission of the
          Restaurant. The Customer does not obtain any license or right
          regarding the information in relation with the online ordering and/or
          platform.
        </p>
        <p className="modal__document-text">
          If you decide to order online using the online ordering platform, you
          may be asked to provide full contact details and/or to create an
          account and you may need to accept cookies. You must keep your data
          confidential and must not disclose it to anyone. Restaurant reserves
          the right to suspend the use of the online ordering platform and/or
          process if you breach the Terms and Conditions.
        </p>
        <p className="modal__document-text">
          You acknowledge and agree that all orders are treated as an express
          intention to purchase the nominated products and/or services for the
          agreed online prices and Restaurant will treat this as an binding
          offer from you to purchase such products and services. Any variations
          must be in writing, otherwise they will not be binding on either
          party.
        </p>
        <p className="modal__document-text">
          The acceptance of any order for any of the products and/or services
          shall be at the entire discretion of the Restaurant. Our acceptance of
          an order may occur when you receive an email notification and/or an
          SMS, confirming your order.
        </p>
        <p className="modal__document-text">
          The Restaurant reserves the right to refuse any service, terminate
          your access to the online ordering platform and/or process, remove or
          edit any content or accept your order/s in its sole discretion and
          without prior notice to you. The Restaurant's online ordering platform
          must only be used by persons over the age of eighteen (18) years, or
          the minimum legal age as permitted by the law or otherwise under the
          supervision of an adult or guardian.
        </p>
        <p className="modal__document-text">
          Any products and/or services provided through the online ordering
          platform are done so on an "as is" and "if available" basis and the
          Restaurant expressly excludes any warranties, conditions,
          representations or other terms with respect to the online ordering or
          the content or products displayed on it, whether express or implied,
          unless expressly stated to the contrary.
        </p>
        <p className="modal__document-text">
          The pictures of the products are for presentation only. The ordered
          products may have differences (e.g. color, form, etc.) towards the
          photos existing on the site. The Restaurant is not liable in any way
          if the description of products is missing.
        </p>
        <p className="modal__document-text">
          Delivery orders are also subject to: A) Your address falling in the
          defined delivery area of the Restaurant; B) Availability of the
          restaurant being online for accepting online orders; C) Your Order may
          be subject to a minimum amount per order; You can pay by any of the
          methods listed in our checkout screen. Please make sure that if your
          order is placed using a credit or debit card, the card is valid on the
          date of your order placement. The Restaurant may provide no refunds to
          the orders paid online. Contact Restaurant directly to settle any
          payment dispute or refund claim.
        </p>
        <p className="modal__document-text">
          You may be automatically directed to an online listing referring to
          Your nearby Restaurant service location. Please note that prices,
          minimum spend restrictions and maximum cash spend restrictions vary
          from location to location. In addition, if you order on-line, the
          price charged may be different to the price for the Products had they
          been ordered in-store or by telephone.
        </p>
        <p className="modal__document-text">
          The online order once placed cannot be modified or cancelled either
          through the website or offline by calling the restaurant. Anyhow, if
          you wish to cancel or complain about your order, please call
          Restaurant location, details of which will be included in the
          confirmatory e-mail sent to you upon placing your order and Restaurant
          staff will try to help you.
        </p>
        <p className="modal__document-text">
          Restaurant will aim to provide you with your ordered products as close
          as possible to your requested delivery/collection time but restaurant
          cannot guarantee the delivery time in all the cases. Delivery time may
          be affected due to bad weather or traffic conditions. This is to
          ensure the safety of our riders. Delivery service may be temporarily
          unavailable in selected areas due to bad weather or unforeseen
          circumstances.
        </p>
        <p className="modal__document-text">
          The Customer agrees to accept delivery of the Products at the agreed
          time and place of delivery. If you have chosen for the Products to be
          delivered, the Restaurant will deliver the order to the main entrance
          of the delivery address but any deliveries carried into the delivery
          address will only be made if the driver and you consent to this. If
          you are not present to take delivery of the goods at the address given
          in your order, then Restaurant will not refund you the price for your
          order and will charge you for the full amount of your order.
        </p>
        <p className="modal__document-text">
          Risk in the Products shall pass to the Customer on delivery. Any
          software service/software is used and/or downloaded at your own risk.
          If you are in any doubt as to the suitability of the software
          service/software to be used and/or downloaded for your computer it is
          recommended that you obtain specialist advice before using and/or
          downloading it.
        </p>
        <p className="modal__document-text">
          You are responsible for maintaining the confidentiality of your
          personal details, password and payment details. You agree to accept
          full responsibility for all your activities in relation with the
          online ordering platform.
        </p>
        <p className="modal__document-text">
          You can’t assign, sub-license or otherwise transfer any of your rights
          under these terms and conditions. In case any provision of this
          agreement is and/or becomes void, illegal, invalid or inapplicable, it
          shan’t affect the validity or the applicability of the other
          contractual clauses, which shall continue to be in force and to
          produce legal effects as if the void, illegal, invalid or inapplicable
          clause wasn’t part of this agreement.
        </p>
        <p className="modal__document-text">
          These Terms and Conditions do not affect your statutory rights.
        </p>
        <p className="modal__document-text">
          Restaurant trademarks, as well as the related trademarks of others and
          related proprietary property are protected from copying and simulation
          under national and international laws and are not to be reproduced or
          copied without the express written permission of the Restaurant.
        </p>
        <p className="modal__document-text">
          To the fullest extent permitted by law, the Restaurant excludes all
          liability arising out of its supply of the Products and in particular
          shan’t be responsible for any loss or damage, arising directly or
          indirectly out of or in connection with delay beyond the estimated
          delivery or pickup time; any circumstances over which the Restaurant
          had no control of the consequences and which the Restaurant could not
          avoid by the exercise of reasonable care, or any indirect or
          unforeseeable loss suffered or incurred by the Customer or others. In
          any event, the Restaurant's liability to the Customer shan’t exceed
          the total price charged for the relevant products/and or services.
        </p>
        <p className="modal__document-text">
          This terms and Conditions shall be governed by and construed in
          accordance with the laws of the country in which the Restaurant is
          headquartered and the Restaurant and any dispute arising out of or in
          connection with these shall be settled by the competent courts from
          the headquarter of the Restaurant, excluding the possibility of
          reference to conflict of laws.
        </p>
        <div className="modal__back-container">
          <button
            type="button"
            className="modal__back-btn"
            onClick={togglePrivacyPolicy}
          >
            Back
          </button>
        </div>
      </div>
    </Modal>
  );
};
