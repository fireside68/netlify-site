import React from 'react';

const Privacy: React.FC = () => {
  return (
    <div className="dark bg-slate-900 text-white font-sans min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Privacy Policy</h1>
          <p className="text-gray-400">Last Updated: August 28, 2025</p>
        </div>

        <div className="prose prose-invert prose-lg max-w-none text-gray-300 space-y-6">
          <p>
            This Privacy Policy describes how Unaffiliated Studios ("we", "us", or "our") collects, uses, and
            discloses your information when you use our website.
          </p>

          <h2 className="text-2xl font-semibold text-primary-400">1. Information We Collect</h2>
          <p>
            We collect information that you provide directly to us when you use our contact form or otherwise
            communicate with us. This may include your name, email address, and any other information you choose
            to provide.
          </p>

          <h2 className="text-2xl font-semibold text-primary-400">2. How We Use Your Information</h2>
          <p>
            We use the information we collect primarily to respond to your questions, comments, and requests.
            We also use it to operate, maintain, and protect our website from spam and abuse.
          </p>

          <h2 className="text-2xl font-semibold text-primary-400">3. Information Sharing</h2>
          <p>
            We do not sell your personal information. We may share your information with third-party service
            providers who perform services on our behalf, such as email delivery (Sinch Mailgun) and website
            hosting (Fly.io, Netlify). These providers are obligated not to disclose or use your information
            for any other purpose.
          </p>

          <h2 className="text-2xl font-semibold text-primary-400">4. Data Security</h2>
          <p>
            We take reasonable measures to help protect your personal information from loss, theft, misuse,
            and unauthorized access.
          </p>

          <h2 className="text-2xl font-semibold text-primary-400">5. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify you of any changes by posting
            the new Privacy Policy on this page.
          </p>

          <h2 className="text-2xl font-semibold text-primary-400">6. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us at{' '}
            <a href="mailto:contact@unaffiliatedstudios.com" className="text-primary-400 hover:underline">
              contact@unaffiliatedstudios.com
            </a>{' '}
            or through our website's contact form.
          </p>
        </div>

        <div className="text-center mt-12">
          <a href="/" className="text-primary-400 hover:underline font-semibold">
            ← Back to Main Site
          </a>
        </div>
      </div>
    </div>
  );
};

export default Privacy;