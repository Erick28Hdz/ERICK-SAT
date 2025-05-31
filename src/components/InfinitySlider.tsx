// components/InfiniteSlider.tsx
import styled from "styled-components";

const logos = [
    "/images/icons/css.png",
    "/images/icons/html.png",
    "/images/icons/js.png",
    "/images/icons/react.png",
    "/images/icons/ts.png",
    "/images/icons/piton.png",
    "/images/icons/linux.png",
    "/images/icons/debian.png",
    "/images/icons/kali.png",
    "/images/icons/nmap.png",
    "/images/icons/wireshark.png",
    "/images/icons/metasploit.png",
    "/images/icons/Openssl.png",
    "/images/icons/snort.png",
    "/images/icons/nessus.png",
    "/images/icons/mysql.png",
    "/images/icons/java.png",
    "/images/icons/php.png",
    "/images/icons/Visual.png",

    // agrega más rutas si gustas
];

const InfiniteSlider = () => {
    return (
        <SliderWrapper>
            <SliderTrack>
                {[...logos, ...logos].map((src, i) => (
                    <Logo key={i}>
                        <img src={src} alt={`Logo ${i}`} />
                    </Logo>
                ))}
            </SliderTrack>
        </SliderWrapper>
    );
};

export default InfiniteSlider;


const SliderWrapper = styled.div`
  overflow: hidden;
  width: 100%;
  padding: 20px 0;
  background-color: #0a0a0a;
`;

const SliderTrack = styled.div`
  display: flex;
  gap: 35px;
  width: max-content;
  animation: scroll 40s linear infinite;
  will-change: transform;

  &:hover {
    animation-play-state: paused;
  }

  @keyframes scroll {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-50%);
    }
  }
`;

const Logo = styled.div`
  flex: 0 0 auto;
  img {
    height: 50px;
    transition: transform 0.3s;
    filter: grayscale(1);
  }

  &:hover img {
    transform: scale(1.1);
    filter: grayscale(0);
  }
`;
