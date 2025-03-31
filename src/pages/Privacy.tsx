
import React from "react";
import { Helmet } from "react-helmet";

const PrivacyPage = () => {
  return (
    <div className="container mx-auto px-6 py-12">
      <Helmet>
        <title>Privacy Policy | Processimo</title>
        <meta name="description" content="Processimo privacy policy and data handling practices" />
      </Helmet>
      
      <div className="max-w-3xl mx-auto">
        <h1 className="font-serif text-4xl md:text-5xl mb-6">Privacy Policy</h1>
        <div className="prose prose-lg max-w-none">
          <p className="text-muted-foreground mb-8">Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
          
          <h2 className="text-2xl font-medium mt-8 mb-4">1. Introduction</h2>
          <p>
            At Processimo, we respect your privacy and are committed to protecting your personal data. 
            This privacy policy explains how we collect, use, process, and store your personal information 
            when you visit our website or use our automation services.
          </p>
          
          <h2 className="text-2xl font-medium mt-8 mb-4">2. Information We Collect</h2>
          <p>
            We may collect the following types of information:
          </p>
          <ul className="list-disc pl-6 mt-4 space-y-2">
            <li><strong>Personal Information:</strong> Name, email address, and contact details when you subscribe to our newsletter or contact us.</li>
            <li><strong>Technical Data:</strong> IP address, browser type and version, time zone setting, browser plug-in types and versions, operating system and platform.</li>
            <li><strong>Usage Data:</strong> Information about how you use our website, products, and services.</li>
            <li><strong>Cookies and Tracking Data:</strong> We use cookies and similar tracking technologies to track activity on our website and store certain information.</li>
          </ul>

          <h2 className="text-2xl font-medium mt-8 mb-4">3. How We Use Your Information</h2>
          <p>
            We use your information to:
          </p>
          <ul className="list-disc pl-6 mt-4 space-y-2">
            <li>Provide, operate, and maintain our website and services</li>
            <li>Improve, personalize, and expand our website and services</li>
            <li>Understand and analyze how you use our website</li>
            <li>Develop new products, services, features, and functionality</li>
            <li>Communicate with you about updates, security alerts, and support</li>
            <li>Send you marketing and promotional communications (only with your consent)</li>
          </ul>

          <h2 className="text-2xl font-medium mt-8 mb-4">4. Data Security</h2>
          <p>
            We implement appropriate security measures to protect your personal data against unauthorized access, 
            alteration, disclosure, or destruction. However, no method of transmission over the Internet or method 
            of electronic storage is 100% secure, and we cannot guarantee absolute security.
          </p>

          <h2 className="text-2xl font-medium mt-8 mb-4">5. Your Rights</h2>
          <p>
            Depending on your location, you may have the following rights regarding your personal data:
          </p>
          <ul className="list-disc pl-6 mt-4 space-y-2">
            <li>The right to access your personal data</li>
            <li>The right to rectification if your data is inaccurate or incomplete</li>
            <li>The right to erasure (the "right to be forgotten")</li>
            <li>The right to restrict processing of your personal data</li>
            <li>The right to data portability</li>
            <li>The right to object to processing of your personal data</li>
          </ul>

          <h2 className="text-2xl font-medium mt-8 mb-4">6. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us at:
          </p>
          <p className="mt-2">
            <strong>Email:</strong> privacy@processimo.com<br />
            <strong>Address:</strong> 123 Automation Avenue, Tech City, 94123
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPage;
