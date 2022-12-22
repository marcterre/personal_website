import styled from "styled-components";

import GithubIcon from "../../assets/github.svg";
import LinkedInIcon from "../../assets/linkedin.svg";
import XingIcon from "../../assets/xing.svg";

const githubURL = "https://github.com/marcterre";
const linkedInURL = "https://www.linkedin.com/in/marcterre/";
const xingURL = "xing.com";

export default function Footer() {
  return (
    <StyledFooter>
      <section>
        <h2>Useful Links</h2>
        <ul>
          <StyledList>
            <Link href="google.com">About me</Link>
          </StyledList>
          <StyledList>
            <Link href="google.com">My Projects</Link>
          </StyledList>
          <lStyledListi>
            <Link href="google.com">Contact</Link>
          </lStyledListi>
        </ul>
      </section>
      <section>
        <ul>
          <StyledList>
            <a href={githubURL}>
              <FooterIcons src={GithubIcon} alt="Github icon"></FooterIcons>
            </a>
          </StyledList>
          <StyledList>
            <a href={linkedInURL}>
              <FooterIcons src={LinkedInIcon} alt="LinkedIn Icon"></FooterIcons>
            </a>
          </StyledList>
          <StyledList>
            <a href={xingURL}>
              <FooterIcons src={XingIcon} alt="Xing Icon"></FooterIcons>
            </a>
          </StyledList>
        </ul>
      </section>
    </StyledFooter>
  );
}

const FooterIcons = styled.img`
  width: 2rem;
`;

const StyledFooter = styled.footer`
  background-color: darkgrey;
  color: white;
`;

const Link = styled.a`
  text-decoration: none;
`;

const StyledList = styled.li`
  list-style: none;
`;
