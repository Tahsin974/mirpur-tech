export default function PrivacyPolicyPage() {
  return (
    <div className="bg-gray-50 min-h-screen py-8 px-4 flex items-center justify-center">
      <div className="w-full max-w-3xl bg-white p-6 sm:p-8 md:p-10 rounded-lg shadow-lg">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 text-center uppercase">
          Customer Privacy Policy
        </h1>

        <p className="text-gray-800 mb-4 leading-relaxed text-center text-base sm:text-lg">
          At <strong>Mirpur Tech</strong>, we are committed to protecting your
          privacy and ensuring the security of your personal information. This
          Privacy Policy explains how we collect, use, and safeguard your data
          when you use our services.
        </p>

        <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mt-6 mb-3">
          1. Information We Collect
        </h2>
        <p className="text-gray-800 mb-4 leading-relaxed text-base sm:text-lg">
          We may collect the following types of information from you:
        </p>
        <ul className="list-disc list-inside text-gray-800 mb-4 text-base sm:text-lg">
          <li>Personal Information (e.g., name, email, phone number)</li>
          <li>
            Service-Related Information (e.g., recharge details, transaction
            history)
          </li>
          <li>Device and Usage Information (e.g., IP address, browser type)</li>
        </ul>

        <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mt-6 mb-3">
          2. How We Use Your Information
        </h2>
        <p className="text-gray-800 mb-4 leading-relaxed text-base sm:text-lg">
          Your information is used solely to provide and improve our services,
          including:
        </p>
        <ul className="list-disc list-inside text-gray-800 mb-4 text-base sm:text-lg">
          <li>Processing transactions and delivering services</li>
          <li>Providing customer support</li>
          <li>
            Communicating updates and promotional information (if you have opted
            in)
          </li>
          <li>Improving website functionality and user experience</li>
        </ul>

        <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mt-6 mb-3">
          3. Data Sharing
        </h2>
        <p className="text-gray-800 mb-4 leading-relaxed text-base sm:text-lg">
          Mirpur Tech will never sell, rent, or share your personal information
          with third parties without your consent, except where required by law
          or to provide services you requested.
        </p>

        <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mt-6 mb-3">
          4. Data Security
        </h2>
        <p className="text-gray-800 mb-4 leading-relaxed text-base sm:text-lg">
          We take all reasonable steps to protect your information from
          unauthorized access, alteration, disclosure, or destruction. This
          includes using secure servers and encryption for sensitive data.
        </p>

        <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mt-6 mb-3">
          5. Data Retention
        </h2>
        <p className="text-gray-800 mb-4 leading-relaxed text-base sm:text-lg">
          We retain your data only for as long as necessary to provide our
          services, comply with legal obligations, resolve disputes, and enforce
          agreements.
        </p>

        <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mt-6 mb-3">
          6. Your Rights
        </h2>
        <p className="text-gray-800 mb-4 leading-relaxed text-base sm:text-lg">
          You have the right to access, update, or request deletion of your
          personal information. For any inquiries regarding your data, please
          contact us at{" "}
          <a
            href="mailto:info@mirpurtech.com"
            className="text-blue-600 underline"
          >
            info@mirpurtech.com
          </a>
          .
        </p>

        <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mt-6 mb-3">
          7. Changes to This Policy
        </h2>
        <p className="text-gray-800 mb-4 leading-relaxed text-base sm:text-lg">
          Mirpur Tech may update this Privacy Policy from time to time. Updated
          versions will be posted on our website with the effective date.
        </p>

        <p className="text-gray-800 mb-4 leading-relaxed text-center text-base sm:text-lg">
          Thank you for trusting <strong>Mirpur Tech</strong>. We are committed
          to keeping your information safe and secure.
        </p>
      </div>
    </div>
  );
}
