import { BarChart3Icon, LaptopMinimal, PaintBucket } from "lucide-react";
import "./services.css";

export default function Services() {
  return (
    <div className="servicesC" id="services" style={{ marginBottom: "60px" }}>
      <div className="title">     SERVICES 🛠️</div>
      <div className="titleGap" />
      <div className="titleGap" />
      <div className="titleSmall">What I Offer</div>
      <div className="containerGap" />
      <div className="titleGap" />
      <div className="container">
        <div className="serviceItem">
          <div className="serviceIcon">
            <LaptopMinimal size={40} />
          </div>
          <div className="serviceText">
            <div className="text">Web Dev</div>
            <div className="textMain">
              Building responsive and high-quality websites. Expertise in
              modern frameworks such as React.js, Next.js, and Node.js. I also
              integrate backend services using GraphQL, AWS Lambda, and database
              solutions like MongoDB, PostgreSQL, and Redis to ensure seamless
              and scalable architectures.
            </div>
          </div>
        </div>
        <div className="serviceItem">
          <div className="serviceIcon">
            <PaintBucket size={40} />
          </div>
          <div className="serviceText">
            <div className="text">UI/UX Design</div>
            <div className="textMain">
              Designing user-friendly interfaces and experiences. I craft
              intuitive, modern designs using tools like Figma, React, and
              Material-UI. Whether it is creating a fluid user journey or
              optimizing web apps for high engagement, I ensure accessibility,
              responsiveness, and sleek aesthetics are at the forefront.
            </div>
          </div>
        </div>
        <div className="serviceItem">
          <div className="serviceIcon">
            <BarChart3Icon size={40} />
          </div>
          <div className="serviceText">
            <div className="text">SEO Expert</div>
            <div className="textMain">
              Optimizing websites for better search engine ranking. I use
              cutting-edge tools and strategies, from keyword analysis to
              implementing structured data and improving load speeds. My goal is
              to enhance visibility and user acquisition by implementing SEO
              best practices and leveraging technologies such as AWS S3, CloudFront, and Lambda for optimization.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


