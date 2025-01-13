export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 py-16 px-5 lg:px-32">
      <div className="container mx-auto">
        {/* Page Title */}
        <h1 className="text-4xl font-bold text-center text-teal-600 mb-10">
          Terms and Conditions
        </h1>

        {/* Introduction */}
        <p className="text-lg mb-6">
          Welcome to HIT Solutions! These terms and conditions outline the rules
          and regulations for the use of our website and services. By accessing
          our platform, you agree to comply with these terms. If you disagree
          with any part of the terms, you may not use our services.
        </p>

        {/* Table of Contents */}
        <h2 className="text-2xl font-semibold text-teal-500 mb-4">
          Table of Contents
        </h2>
        <ul className="list-decimal list-inside mb-8 text-gray-700">
          <li>Acceptance of Terms</li>
          <li>Modification of Terms</li>
          <li>User Responsibilities</li>
          <li>Intellectual Property</li>
          <li>Privacy Policy</li>
          <li>Limitation of Liability</li>
          <li>Governing Law</li>
          <li>Contact Information</li>
        </ul>

        {/* Terms Content */}
        <div className="space-y-8">
          {/* Acceptance of Terms */}
          <section>
            <h2 className="text-xl font-bold text-teal-600 mb-2">
              1. Acceptance of Terms
            </h2>
            <p>
              By using our website and services, you agree to be bound by these
              Terms and Conditions and our Privacy Policy. If you do not agree
              to these terms, you may not access or use our platform.
            </p>
          </section>

          {/* Modification of Terms */}
          <section>
            <h2 className="text-xl font-bold text-teal-600 mb-2">
              2. Modification of Terms
            </h2>
            <p>
              HIT Solutions reserves the right to revise these terms at any
              time. Any changes will be effective immediately upon posting. Your
              continued use of our platform signifies your acceptance of the
              revised terms.
            </p>
          </section>

          {/* User Responsibilities */}
          <section>
            <h2 className="text-xl font-bold text-teal-600 mb-2">
              3. User Responsibilities
            </h2>
            <p>
              You agree to use our platform only for lawful purposes. You must
              not engage in activities that could harm our platform, services,
              or other users. Unauthorized access, hacking, or misuse of our
              platform is strictly prohibited.
            </p>
          </section>

          {/* Intellectual Property */}
          <section>
            <h2 className="text-xl font-bold text-teal-600 mb-2">
              4. Intellectual Property
            </h2>
            <p>
              All content on our platform, including text, images, logos, and
              software, is the property of HIT Solutions and protected by
              copyright laws. You may not reproduce, distribute, or use any
              content without prior written permission.
            </p>
          </section>

          {/* Privacy Policy */}
          <section>
            <h2 className="text-xl font-bold text-teal-600 mb-2">
              5. Privacy Policy
            </h2>
            <p>
              Please review our Privacy Policy to understand how we collect,
              use, and protect your personal information. By using our platform,
              you consent to the practices described in our Privacy Policy.
            </p>
          </section>

          {/* Limitation of Liability */}
          <section>
            <h2 className="text-xl font-bold text-teal-600 mb-2">
              6. Limitation of Liability
            </h2>
            <p>
              HIT Solutions will not be held liable for any direct, indirect, or
              consequential damages resulting from your use of our platform or
              services.
            </p>
          </section>

          {/* Governing Law */}
          <section>
            <h2 className="text-xl font-bold text-teal-600 mb-2">
              7. Governing Law
            </h2>
            <p>
              These terms are governed by the laws of Bangladesh. Any disputes
              arising from the use of our platform will be subject to the
              jurisdiction of the courts in Dhaka, Bangladesh.
            </p>
          </section>

          {/* Contact Information */}
          <section>
            <h2 className="text-xl font-bold text-teal-600 mb-2">
              8. Contact Information
            </h2>
            <p>
              If you have any questions about these Terms and Conditions, please
              contact us at{" "}
              <a href="mailto:info@hitsolutions.com" className="text-teal-500">
                info@hitsolutions.com
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
