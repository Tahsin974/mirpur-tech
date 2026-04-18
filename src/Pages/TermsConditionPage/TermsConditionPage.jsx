export default function TermsConditionPage() {
  return (
    <div className="bg-gray-50 min-h-screen py-8 px-4 flex items-center justify-center">
      <div className="w-full max-w-6xl bg-white p-6 sm:p-8 md:p-10 rounded-lg shadow-lg mx-auto">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 text-center uppercase">
          Terms and Conditions
        </h1>

        <p className="text-gray-800 mb-4 leading-relaxed text-base sm:text-lg">
          Welcome to <strong>Mirpur Tech</strong>. By accessing or using our
          website and services, you agree to comply with and be bound by the
          following terms and conditions. Please read them carefully.
        </p>

        <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mt-6 mb-3">
          1. Acceptance of Terms
        </h2>
        <p className="text-gray-800 mb-4 leading-relaxed text-base sm:text-lg">
          By using Mirpur Tech services, you acknowledge that you have read,
          understood, and agree to be bound by these Terms and Conditions. If
          you do not agree, you must not use our services.
        </p>

        <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mt-6 mb-3">
          2. Services
        </h2>
        <p className="text-gray-800 mb-4 leading-relaxed text-base sm:text-lg">
          Mirpur Tech provides online recharge services. All services are
          subject to availability and may be modified, updated, or discontinued
          at our discretion without prior notice.
        </p>

        <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mt-6 mb-3">
          3. User Responsibilities
        </h2>
        <ul className="list-disc list-inside text-gray-800 mb-4 text-base sm:text-lg">
          <li>
            You are responsible for providing accurate information when making
            transactions, including account numbers and personal details.
          </li>
          <li>
            You must ensure that all payments and recharge requests are made for
            the correct account. Mirpur Tech is <strong>not responsible</strong>{" "}
            for incorrect or incomplete information entered by users.
          </li>
          <li>
            You must comply with all applicable laws and regulations while using
            our services.
          </li>
        </ul>

        <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mt-6 mb-3">
          4. Payments and Refunds
        </h2>
        <p className="text-gray-800 mb-4 leading-relaxed text-base sm:text-lg">
          All service purchases are <strong>final</strong>, and refunds or
          exchanges cannot be provided once a transaction is completed.
        </p>
        <p className="text-gray-800 mb-4 leading-relaxed text-base sm:text-lg">
          If a payment is deducted but the service is{" "}
          <strong>not delivered within 24 hours</strong>, you may contact us at{" "}
          <a
            href="mailto:info@mirpurtech.com"
            className="text-blue-600 underline"
          >
            info@mirpurtech.com
          </a>
          . Include the following information for quick assistance:
        </p>
        <ul className="list-disc list-inside text-gray-800 mb-4 text-base sm:text-lg">
          <li>Recharge value</li>
          <li>Transaction date</li>
          <li>Order number</li>
        </ul>
        <p className="text-gray-800 mb-4 leading-relaxed text-base sm:text-lg">
          If our investigation confirms that a payment was deducted but no
          service was delivered, a <strong>full refund</strong> will be
          processed within 15 working days.
        </p>

        <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mt-6 mb-3">
          5. Limitation of Liability
        </h2>
        <p className="text-gray-800 mb-4 leading-relaxed text-base sm:text-lg">
          Mirpur Tech will not be liable for any indirect, incidental, or
          consequential damages arising from the use of our services. We are not
          responsible for recharges sent to an incorrect account number provided
          by users.
        </p>

        <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mt-6 mb-3">
          6. Intellectual Property
        </h2>
        <p className="text-gray-800 mb-4 leading-relaxed text-base sm:text-lg">
          All content on the Mirpur Tech website, including text, graphics,
          logos, and software, is the property of Mirpur Tech and protected by
          applicable intellectual property laws. Users may not reproduce,
          modify, or distribute any content without prior written permission.
        </p>

        <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mt-6 mb-3">
          7. Privacy
        </h2>
        <p className="text-gray-800 mb-4 leading-relaxed text-base sm:text-lg">
          Your personal information will be collected and used in accordance
          with our <strong>Privacy Policy</strong>. By using our services, you
          consent to our data practices.
        </p>

        <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mt-6 mb-3">
          8. Termination
        </h2>
        <p className="text-gray-800 mb-4 leading-relaxed text-base sm:text-lg">
          Mirpur Tech reserves the right to suspend or terminate your account
          and access to services at our sole discretion, including for
          violations of these Terms and Conditions.
        </p>

        <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mt-6 mb-3">
          9. Changes to Terms
        </h2>
        <p className="text-gray-800 mb-4 leading-relaxed text-base sm:text-lg">
          We may update these Terms and Conditions from time to time. Updated
          versions will be posted on our website with the effective date. Your
          continued use of the services constitutes acceptance of the revised
          terms.
        </p>

        <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mt-6 mb-3">
          10. Governing Law
        </h2>
        <p className="text-gray-800 mb-4 leading-relaxed text-base sm:text-lg">
          These Terms and Conditions are governed by the laws of Bangladesh. Any
          disputes arising out of or in connection with these terms shall be
          subject to the jurisdiction of the courts of Bangladesh.
        </p>

        <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mt-6 mb-3">
          11. Contact Information
        </h2>
        <p className="text-gray-800 mb-4 leading-relaxed text-base sm:text-lg">
          For any questions or concerns regarding these Terms and Conditions,
          please contact us at{" "}
          <a
            href="mailto:info@mirpurtech.com"
            className="text-blue-600 underline"
          >
            info@mirpurtech.com
          </a>
          .
        </p>
      </div>
    </div>
  );
}
