import React from "react";
import styled from "styled-components";
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTiktok } from '@fortawesome/free-brands-svg-icons';

const FooterBackground = styled.div`
  width: 100%;
  background-color: #000000;
`;

const FooterContent = styled.div`
width: 100%;
max-width: 1200px;
margin: auto;
display:grid;
grid-template-columns: repeat(4, 1fr);
grid-gap:20px;
padding: 15px 0px 0px;

@media (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const FooterContent2 = styled.div`
text-align: center;
justify-content: center;
align-items: center;
text-align: center;
width: 100%;
max-width: 1200px;
margin: auto;
display:block;
grid-gap:50px;
padding: 0px 10px 0px;
`;


const BoxContent = styled.div`
padding: 0;

justify-content: center;
align-items: center;
text-align: center;

@media (max-width: 600px) {

    padding: 0;
    margin:10;
    
    &:hover div {
        border: 2px solid #c8a936;
        max-height: 100px;
        border-radius: 4px;     
    }
    
}
`;

const Content = styled.div`

transition: all 0.5s linear;
@media (max-width: 600px) {
    width:100%;
    max-height: 0px;
    overflow:hidden;
    position:relative;
    top:100%;
    padding:0;
    margin: 0;
    
} 
    
`;

const FooterP = styled.p`
color: #efefef;
text-align: center;
margin-bottom: 10px;
`;

const FooterBox = styled.div`
width: 100%;
height: 100%;
display: block;
justify-content: center;
align-items: center;
text-align: center;
`;

const FooterBox2 = styled(FooterBox)`
width: 100%;
height: 100%;
display:flex;
`;


const FooterH2 = styled.h2`
color: #fff;
margin: 10px 0px;
font-size: 20px;
text-align: center;
`;


const FooterIcon = styled.div`
display:grid;
font-size: 2rem;
color: white;
padding: 0rem 1rem ;

`;


const Footer = () => {
    return (

        <FooterBackground>
            <footer>
                <FooterContent>
                    <FooterBox>
                        <figure>
                            <a href="#">
                                <Image src={"/slon-logo.svg"} width={"100"} height={"100"} />
                            </a>
                        </figure>

                    </FooterBox>
                    <FooterBox>
                        <BoxContent>
                            <FooterH2>Contactanos</FooterH2>
                            <Content>
                                <FooterP>Asesor de Ventas San Diego 0412-000-0000</FooterP>
                                <FooterP>Delivery San Diego 0412-000-0000</FooterP>
                                <FooterP>Delivery Valencia y Naguanagua 0412-000-0000</FooterP>
                            </Content>
                        </BoxContent>

                    </FooterBox>

                    <FooterBox>

                        <BoxContent>
                            <FooterH2>Compra 100% Segura</FooterH2>
                            <Content>
                                <FooterP>Nuestro sitio es seguro para que gastes tu dinero dinero</FooterP>
                                <FooterP>Ven y gasta tu dinero dinero</FooterP>
                                <FooterP>Aprovecha dinero</FooterP>
                            </Content>

                        </BoxContent>

                    </FooterBox>

                    <FooterBox>
                        <BoxContent>
                            <FooterH2>Nuestros Productos</FooterH2>
                            <Content>
                                <FooterP>Blusas</FooterP>
                                <FooterP>Lenceria</FooterP>
                                <FooterP>Jeans</FooterP>
                                <FooterP>Blazer</FooterP>
                            </Content>
                        </BoxContent>

                    </FooterBox>

                </FooterContent>

                <FooterContent2>
                    <FooterH2>SIGUENOS</FooterH2>
                    <FooterBox2>

                        <FooterIcon>
                            <FontAwesomeIcon icon={faInstagram} />{"  "}
                        </FooterIcon>
                        <FooterIcon>
                            <FontAwesomeIcon icon={faFacebookF} />{"  "}
                        </FooterIcon>
                        <FooterIcon>
                            <FontAwesomeIcon icon={faTiktok} />{"  "}
                        </FooterIcon>

                    </FooterBox2>
                    <FooterBox2>
                        <FooterP>Valencia | Venezuela </FooterP>
                    </FooterBox2>
                </FooterContent2>
            </footer>
        </FooterBackground>


    );
};

export default Footer;