import {
  GradientText,
  HeroAvatar,
  HeroSocial,
  Section,
} from "astro-boilerplate-components";

const Hero = () => (
  <Section>
    <HeroAvatar
      title={
        <>
          Hi, I'm <GradientText>Anjali Chauhan</GradientText> 🕉️
        </>
      }
      description={
        <>
          <a className="text-cyan-400 hover:underline" href="/">
            I am fluent in Javascript, React, RTK, Vue, CSS, tailwind.{" "}
          </a>{" "}
          Whenever possible, I also apply my passion for developing products
          with Modern Javascript Library and Frameworks like ReactJS.{" "}
          <a className="text-cyan-400 hover:underline" href="/">
            My field of Interest's are building new Web Technologies and
            Products
          </a>{" "}
        </>
      }
      avatar={
        <img
          className="h-96 w-96"
          src="/assets/images/avatar.svg"
          alt="Avatar image"
          loading="lazy"
        />
      }
      socialButtons={
        <>
          <a href="https://twitter.com/anjalii1102" target="__blank">
            <HeroSocial
              src="/assets/images/twitter-icon.png"
              alt="Twitter icon"
            />
          </a>
          <a href="https://www.linkedin.com/in/anjali1102" target="__blank">
            <HeroSocial
              src="/assets/images/linkedin-icon.png"
              alt="Linkedin icon"
            />
          </a>
        </>
      }
    />
  </Section>
);

export { Hero };
