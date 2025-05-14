'use client';

import { poppins } from '@/utils/fonts';
import "./about.scss";

// Removed unused sliderSettings to resolve the error

export default function About() {
    return (
        <>
            <div className="aboutC" style={{ marginBottom: "60px" }}>
                <div className="title">     ABOUT 🫥</div>
                <div className="titleGap" />
                <div className="titleSmall">Who am I?</div>
                <div className="containerGap" />

                <div className={`container ${poppins.className}`}>
                    <div className="leftC">
                        <div className="text">Hi, I&apos;m Omar Al-Shammary!</div>
                        <br />
                        <div className="textMain">
                            I&apos;m a Software Engineer, Data Scientist, and Cloud Architect passionate about building scalable systems and solving real-world problems. I specialize in designing solutions using AWS, Python, TypeScript, and various data science libraries like TensorFlow, Pandas, and scikit-learn. My focus is on leveraging data and cloud technologies to create meaningful impact in the tech industry.
                        </div>
                        <br />
                        <div className="textMain">
                            I work with cloud technologies such as AWS Lambda, EC2, and S3, along with DevOps tools like Docker, Kubernetes, and Terraform. I’ve also built real-time systems using GraphQL, AppSync, and Neo4j, and applied machine learning to healthcare data to improve public health outcomes.
                        </div>
                    </div>

                    <div className="rightC">
                        <div className="text">Tech Stack:</div>
                        <br />
                        <div className="textMain" style={{ marginBottom: '20px' }}>
                            <strong>Technical Skills:</strong>
                            <ul className="skillsList" style={{ listStyleType: 'none', paddingLeft: 0, marginTop: '25px' }}>
                                <li style={{ marginBottom: '10px' }}>
                                    <span className="tech-badge css">CSS</span>
                                    <span className="tech-badge html">HTML</span>
                                    <span className="tech-badge javascript">JavaScript</span>
                                    <span className="tech-badge python">Python</span>
                                    <span className="tech-badge r">R</span>
                                    <span className="tech-badge typescript">TypeScript</span>
                                    <span className="tech-badge sql">SQL</span>
                                </li>

                                <li style={{ marginBottom: '20px' }}>
                                    <span className="tech-badge databricks">Databricks</span>
                                    <span className="tech-badge dynamodb">DynamoDB</span>
                                    <span className="tech-badge hadoop">Hadoop</span>
                                    <span className="tech-badge mongodb">MongoDB</span>
                                    <span className="tech-badge neo4j">Neo4j</span>
                                    <span className="tech-badge oracle">Oracle</span>
                                    <span className="tech-badge postgres">PostgreSQL</span>
                                    <span className="tech-badge redis">Redis</span>
                                    <span className="tech-badge redshift">Redshift</span>
                                    <span className="tech-badge snowflake">Snowflake</span>
                                    <span className="tech-badge teradata">Teradata</span>
                                </li>

                                <li style={{ marginBottom: '20px' }}>
                                    <span className="tech-badge aws">AWS</span>
                                    <span className="tech-badge alb">ALB</span>
                                    <span className="tech-badge ec2">EC2</span>
                                    <span className="tech-badge ecr">ECR</span>
                                    <span className="tech-badge eks">EKS</span>
                                    <span className="tech-badge glue">Glue</span>
                                    <span className="tech-badge graphql">GraphQL</span>
                                    <span className="tech-badge iam">IAM</span>
                                    <span className="tech-badge lambda">Lambda</span>
                                    <span className="tech-badge mwaa">MWAA</span>
                                    <span className="tech-badge rds">RDS</span>
                                    <span className="tech-badge route53">Route53</span>
                                    <span className="tech-badge s3">S3</span>
                                    <span className="tech-badge sagemaker">SageMaker</span>
                                    <span className="tech-badge stepfunction">Step Function</span>
                                </li>

                                <li style={{ marginBottom: '20px' }}>
                                    <span className="tech-badge devops">DevOps</span>
                                    <span className="tech-badge cloudbees">CloudBees</span>
                                    <span className="tech-badge docker">Docker</span>
                                    <span className="tech-badge github">GitHub</span>
                                    <span className="tech-badge gitlab">GitLab</span>
                                    <span className="tech-badge actions">GitHub Actions</span>
                                    <span className="tech-badge jenkins">Jenkins</span>
                                    <span className="tech-badge kubernetes">Kubernetes</span>
                                    <span className="tech-badge terraform">Terraform</span>
                                    <span className="tech-badge terragrunt">Terragrunt</span>
                                </li>

                                <li style={{ marginBottom: '20px' }}>
                                    <span className="tech-badge keras">Keras</span>
                                    <span className="tech-badge matplotlib">Matplotlib</span>
                                    <span className="tech-badge numpy">NumPy</span>
                                    <span className="tech-badge pandas">Pandas</span>
                                    <span className="tech-badge pytorch">PyTorch</span>
                                    <span className="tech-badge sklearn">scikit-learn</span>
                                    <span className="tech-badge seaborn">Seaborn</span>
                                    <span className="tech-badge tensorflow">TensorFlow</span>
                                </li>

                                <li style={{ marginBottom: '20px' }}>
                                    <span className="tech-badge spark">Apache Spark</span>
                                    <span className="tech-badge kafka">Kafka</span>
                                    <span className="tech-badge react">React</span>
                                    <span className="tech-badge nextjs">Next.js</span>
                                    <span className="tech-badge powerbi">Power BI</span>
                                    <span className="tech-badge splunk">Splunk</span>
                                    <span className="tech-badge tableau">Tableau</span>
                                    <span className="tech-badge xgboost">XGBoost</span>
                                </li>
                            </ul>
                        </div>

                        <br />
                        <div className="textMain" style={{ marginBottom: '20px' }}>
                            <strong>Key Projects:</strong><br />
                            <div className="projects-list">
                                <div className="project-card">
                                    <div className="project-icon">🔧</div>
                                    <div className="project-details">
                                        <strong>Provider Inquiry Tool</strong> (600+ daily users)
                                        <p>A scalable tool that simplifies provider lookup in a large healthcare system.</p>
                                    </div>
                                </div>
                                <div className="project-card">
                                    <div className="project-icon">🤖</div>
                                    <div className="project-details">
                                        <strong>Metagenai AI Project</strong> (Secured $2M funding)
                                        <p>Developed AI models to predict disease outbreaks based on genomic data.</p>
                                    </div>
                                </div>
                                <div className="project-card">
                                    <div className="project-icon">📱</div>
                                    <div className="project-details">
                                        <strong>WorkFlow</strong> (React Native mobile app)
                                        <p>A productivity app helping teams manage projects, tasks, and timelines.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="btnC">
                            <a
                                className="btn btn-custom btn-lg btn-about a"
                                href="#projects"
                            >
                                <span className="btn-text">View My Projects</span>
                                <i className="ri-arrow-right-line" style={{ fontSize: 24 }} />
                            </a>
                            &nbsp;
                            <a
                                className="btn btn-custom-nopadding btn-about btn-resume b"
                                style={{ height: 60 }}
                                href="/resume.pdf"
                            >
                                <i className="ri-file-download-line" style={{ fontSize: 24 }} />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Optional placeholder if you want to keep the section visible */}
                <div className="photo-section">
                    <h3 className="section-header">A Look Through My Lens 📷</h3>
                    <p style={{ padding: "20px", fontStyle: "italic" }}>Gallery coming soon!</p>
                </div>
            </div>
        </>
    );
}
