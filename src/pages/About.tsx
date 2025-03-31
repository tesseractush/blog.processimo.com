
import { Link } from "react-router-dom";

const AboutPage = () => {
  return (
    <div className="py-24 px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-serif font-medium mb-6 text-balance">
            About Processimo
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Building intelligent AI agents and automation tools to transform your business workflows.
          </p>
        </div>
        
        <div className="prose prose-lg dark:prose-invert max-w-none animate-slide-in">
          <p>
            At Processimo, we specialize in developing cutting-edge AI agents and automation solutions that streamline complex business processes. Our mission is to help organizations harness the power of artificial intelligence to achieve unprecedented levels of efficiency and innovation.
          </p>
          
          <h2>Our AI Solutions</h2>
          
          <p>
            We build custom AI agents designed to address specific business challenges across industries. From intelligent document processing to advanced customer support systems, our solutions are tailored to integrate seamlessly with your existing workflows while dramatically enhancing their capabilities.
          </p>
          
          <p>
            Our team combines deep expertise in machine learning, natural language processing, and business process automation to create intelligent systems that learn and improve over time, delivering increasing value to your organization.
          </p>
          
          <h2>Automation Platform</h2>
          
          <p>
            Our enterprise-grade automation platform empowers businesses to identify, design, and implement automated workflows that reduce manual effort and minimize errors. We focus on creating user-friendly interfaces that make advanced automation accessible to team members across your organization.
          </p>
          
          <p>
            Whether you're looking to automate routine tasks or complex multi-step processes, our platform provides the flexibility and reliability needed for successful digital transformation initiatives.
          </p>
          
          <h2>AI Agent Marketplace</h2>
          
          <p>
            Explore our marketplace of pre-built AI agents ready for immediate deployment. These battle-tested solutions cover common business needs and can be implemented quickly to deliver rapid ROI:
          </p>
          
          <ul>
            <li>Intelligent document processing and data extraction</li>
            <li>Customer support and engagement automation</li>
            <li>Sales and marketing AI assistants</li>
            <li>Financial analysis and reporting agents</li>
            <li>HR and recruitment process automation</li>
            <li>Supply chain and logistics optimization</li>
          </ul>
          
          <p>
            Each agent in our marketplace can be customized to meet your specific requirements or used as-is for standard implementations.
          </p>
          
          <div className="my-10 flex justify-center">
            <Link
              to="/blogs"
              className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              Explore Our Insights
            </Link>
          </div>
          
          <h2>Our Approach</h2>
          
          <p>
            We believe in a collaborative approach, working closely with our clients to understand their unique challenges and design solutions that deliver measurable business value. Our implementation process includes:
          </p>
          
          <ol>
            <li>In-depth process analysis and opportunity identification</li>
            <li>Custom solution design aligned with business objectives</li>
            <li>Agile development and iterative refinement</li>
            <li>Comprehensive training and change management support</li>
            <li>Ongoing optimization and performance monitoring</li>
          </ol>
          
          <p>
            Ready to transform your business with intelligent automation? Contact our team at team@processimo.com to discuss your specific needs and explore how our AI agents and automation tools can drive your success.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
