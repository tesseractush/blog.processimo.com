
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
            A luxury blog platform publishing thought-provoking content on technology, design, and business.
          </p>
        </div>
        
        <div className="prose prose-lg dark:prose-invert max-w-none animate-slide-in">
          <p>
            Processimo was founded with a simple yet ambitious mission: to create a premium space for thoughtful discourse on the ideas shaping our digital future. In a world of fleeting content and diminishing attention spans, we believe in the value of deep, considered writing that respects the reader's intelligence.
          </p>
          
          <h2>Our Philosophy</h2>
          
          <p>
            We believe that the best content comes from a place of genuine curiosity and expertise. Our contributors aren't just writers—they're practitioners, researchers, and innovators in their fields. They bring firsthand experience and nuanced perspectives to complex topics.
          </p>
          
          <p>
            While we embrace technology and innovation, we maintain that human insight and critical thinking remain irreplaceable. Our platform balances cutting-edge technical capabilities with thoughtful human curation.
          </p>
          
          <h2>The Reading Experience</h2>
          
          <p>
            We've designed Processimo with the reader experience as our highest priority. From typography choices to subtle animations, every element has been carefully considered to create an immersive, distraction-free environment for engaging with ideas.
          </p>
          
          <p>
            Our commitment to a superior reading experience extends beyond aesthetics—we invest in performance optimization to ensure content loads quickly and responsively across all devices.
          </p>
          
          <h2>Join Our Community</h2>
          
          <p>
            Processimo is more than a publication—it's a community of curious minds. We invite you to join the conversation by subscribing to our newsletter, engaging with our content, and connecting with our contributors.
          </p>
          
          <div className="my-10 flex justify-center">
            <Link
              to="/blog"
              className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              Explore Our Blog
            </Link>
          </div>
          
          <h2>Our Team</h2>
          
          <p>
            Processimo is made possible by a dedicated team passionate about quality content and exceptional user experiences. Our editors, designers, and developers work together to create a platform that serves both readers and writers.
          </p>
          
          <p>
            We're always looking for talented contributors and team members who share our values. If you're interested in joining us, please reach out at team@processimo.com.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
