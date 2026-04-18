export default function ReturnPolicyPage() {
  return (
    <div className="bg-gray-50 min-h-screen py-8 px-4 flex items-center justify-center">
      <div className="w-full max-w-6xl bg-white p-6 sm:p-8 md:p-10 rounded-lg shadow-lg">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 text-center uppercase">
          Customer Return Policy
        </h1>

        <p className="text-gray-800 mb-4 leading-relaxed text-base sm:text-lg capitalize">
          All service purchases are final. Refunds or exchanges cannot be
          provided once a transaction is completed. You are responsible for
          entering the correct recharge details. Mirpur Tech cannot take
          responsibility for recharges sent to the wrong account number.
        </p>

        <p className="text-gray-800 mb-4 leading-relaxed text-base sm:text-lg">
          If you completed a transaction and the money has been deducted, but
          the service was not delivered within 24 hours, please contact us at{" "}
          <a
            href="mailto:info@mirpurtech.com"
            className="text-blue-600 underline"
          >
            info@mirpurtech.com
          </a>{" "}
          or message our support team.
        </p>

        <p className="text-gray-800 mb-4 leading-relaxed text-base sm:text-lg">
          Include the following information for quick assistance:
        </p>

        <ul className="list-disc list-inside text-gray-800 mb-4 text-base sm:text-lg">
          <li>Recharge value</li>
          <li>Transaction date</li>
          <li>Order number</li>
        </ul>

        <p className="text-gray-800 mb-4 leading-relaxed text-base sm:text-lg">
          If our investigation confirms that the payment was deducted but no
          service was delivered, we will issue a full refund within 15 working
          days.
        </p>

        <p className="text-gray-800 mb-4 leading-relaxed text-center text-base sm:text-lg">
          Thank you for choosing Mirpur Tech. We strive to provide reliable and
          timely services to all our customers.
        </p>
      </div>
    </div>
  );
}
