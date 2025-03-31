
import React from "react";
import { Helmet } from "react-helmet";

const TermsPage = () => {
  return (
    <div className="container mx-auto px-6 py-12">
      <Helmet>
        <title>Terms of Service | Processimo</title>
        <meta name="description" content="Terms of service and conditions for using Processimo" />
      </Helmet>
      
      <div className="max-w-3xl mx-auto">
        <h1 className="font-serif text-4xl md:text-5xl mb-6">Terms of Service</h1>
        <div className="prose prose-lg max-w-none">
          <p className="text-muted-foreground mb-8">Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
          
          <h2 className="text-2xl font-medium mt-8 mb-4">1. Acceptance of Terms</h2>
          <p>
            By accessing and using Processimo's website and services, you acknowledge that you have read, 
            understood, and agree to be bound by these Terms of Service. If you do not agree with any part 
            of these terms, you may not use our services.
          </p>
          
          <h2 className="text-2xl font-medium mt-8 mb-4">2. Description of Services</h2>
          <p>
            Processimo provides intelligent automation solutions designed to streamline workflows, increase efficiency, 
            and drive digital transformation for businesses. Our services may include but are not limited to workflow 
            automation, document processing, data analysis, and digital transformation consulting.
          </p>

          <h2 className="text-2xl font-medium mt-8 mb-4">3. User Accounts</h2>
          <p>
            Some of our services may require you to create an account. You are responsible for maintaining 
            the confidentiality of your account information, including your password, and for all activities 
            that occur under your account. You agree to notify us immediately of any unauthorized use of your 
            account or any other breach of security.
          </p>

          <h2 className="text-2xl font-medium mt-8 mb-4">4. Intellectual Property Rights</h2>
          <p>
            The content on our website, including text, graphics, logos, images, audio clips, digital downloads, 
            and data compilations, is the property of Processimo or its content suppliers and is protected by 
            international copyright laws. The compilation of all content on this site is the exclusive property 
            of Processimo and is protected by international copyright laws.
          </p>

          <h2 className="text-2xl font-medium mt-8 mb-4">5. Limitation of Liability</h2>
          <p>
            In no event shall Processimo, its officers, directors, employees, or agents be liable for any indirect, 
            punitive, incidental, special, or consequential damages arising out of, or in any way connected with, 
            your use of or inability to use our services, or for any information, products, or services obtained 
            through our services, or otherwise arising out of the use of our services.
          </p>

          <h2 className="text-2xl font-medium mt-8 mb-4">6. Governing Law</h2>
          <p>
            These Terms shall be governed by and construed in accordance with the laws of the jurisdiction 
            in which Processimo operates, without regard to its conflict of law provisions.
          </p>

          <h2 className="text-2xl font-medium mt-8 mb-4">7. Changes to Terms</h2>
          <p>
            We reserve the right to modify these Terms at any time. We will provide notice of any changes by 
            updating the "Last Updated" date at the top of this page. Your continued use of our services after 
            any such changes constitutes your acceptance of the new Terms.
          </p>

          <h2 className="text-2xl font-medium mt-8 mb-4">8. Contact Us</h2>
          <p>
            If you have any questions about these Terms of Service, please contact us at:
          </p>
          <p className="mt-2">
            <strong>Email:</strong> legal@processimo.com<br />
            <strong>Address:</strong> 123 Automation Avenue, Tech City, 94123
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsPage;
