import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import heroImg from "../public/hero-img.jpg";

const HeroContainer = styled.div`
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  width: 100vw;
  height: 100vh;
  img {
    filter: brightness(0.7);
  }
  @media (${(props) => props.theme.breakpoints.md}) {
    justify-content: center;
  }
`;

const HeroTitle = styled.h1`
  font-size: 10rem;
  color: ${(props) => props.theme.gold};
  position: relative;
  margin: 0 1rem;
  transition: all 0.5s ease-in-out;
  &.hide {
    transform: translateY(2rem);
    opacity: 0;
  }
  @media (${(props) => props.theme.breakpoints.md}) {
    font-size: 15rem;
  }
`;

const Hero = () => {
  const [show, setShow] = useState(false);
  const titleRef = useRef<HTMLElement>(null);

  const handleScroll = () => {
    if (titleRef.current!.getBoundingClientRect().top < 100) {
      console.log("change color");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", () => handleScroll());

    return () => window.removeEventListener("scroll", () => handleScroll());
  }, []);

  return (
    <HeroContainer>
      <Image
        src={heroImg}
        layout="fill"
        objectFit="cover"
        placeholder="blur"
        onLoadingComplete={() => setShow(true)}
      />

      <HeroTitle ref={titleRef} className={show ? "" : "hide"}>
        SLON STORE
      </HeroTitle>
    </HeroContainer>
  );
};

export default Hero;
