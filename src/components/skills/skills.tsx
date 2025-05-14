import { AWSGlue, Snowflake, DynamoDB, Python } from '@/components/ui/icons';

import "./skills.css";

export default function Skills() {
    return (
        <>
            <div id="skills"       style={{ marginBottom: "60px" }}
            />
            <div className="skillsC">
                <div className="title">     SKILLS 😎</div>
                <div className="titleGap" />
                <div className="titleGap" />
                <div className="titleSmall">What I Know</div>
                <div className="containerGap" />
                <div className="titleGap" />
                <div className="titleGap" />
                <div className="container">
                    <div className="boxes">
                        <div className="left">
                            <DynamoDB />
                        </div>
                        <div className="right">FULLSTACK DEVELOPMENT</div>
                    </div>
                    <div className="boxes">
                        <div className="left">
                            <Python />
                        </div>
                        <div className="right">DATA SCIENCE (ML/AI)</div>
                    </div>
                    <div className="boxes">
                        <div className="left">
                            <AWSGlue />
                        </div>
                        <div className="right">DATA INGESTION </div>
                    </div>
                    <div className="boxes">
                        <div className="left">
                            <Snowflake />
                        </div>
                        <div className="right">CLOUD ARCHITECTURE</div>
                    </div>
                    <div className="buttonCont">
                        <a
                            className="btn btn-custom btn-lg btn-skills"
                            href="https://github.com/Omizzy24"
                            target="_blank"
                        >
                            {' '}
                            View more{' '}
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}
