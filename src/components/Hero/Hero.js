import React from "react";

import { Section, SectionText, SectionTitle } from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
    <Section row nopadding>
        <LeftSection>
            <SectionTitle main center>
                Welcome To <br />
                My Personal Portfolio
            </SectionTitle>
            <SectionText>
                Adrian is a student at Texas A&M in the Computer Science Honors program. He is very passionate about
                developing meaningful software. Feel free to contact him for any internship, or full time opportunities.
            </SectionText>
            <Button>
                <a href="boyishi_resume.pdf" download style={{ color: "white" }}>
                    Resume
                </a>
            </Button>
        </LeftSection>
    </Section>
);

export default Hero;
