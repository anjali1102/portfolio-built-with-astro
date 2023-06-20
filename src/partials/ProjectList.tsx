import {
  ColorTags,
  GradientText,
  Project,
  Section,
  Tags,
} from "astro-boilerplate-components";

const ProjectList = () => (
  <Section
    title={
      <>
        Recent <GradientText>Projects</GradientText>
      </>
    }
  >
    <div className="flex flex-col gap-6">
      <Project
        name="Hogwarts Supplies"
        description="Online store for harry potter fans. It has wide range of categories. Features: filter on basis of rating, categories, price, add to wishlist, add to cart. Home page, Product listing page, Filter and sort products, Individual product page, Cart Managment, Wishlist managment, Authentication, Fully Responsive."
        link="https://github.com/anjali1102/Hogwarts-Supplies-v2/"
        img={{
          src: "/assets/images/project-web-design.png",
          alt: "Project Web Design",
        }}
        category={
          <>
            <Tags color={ColorTags.FUCHSIA}>React.js</Tags>
            <Tags color={ColorTags.LIME}>JavaScript</Tags>
            <Tags color={ColorTags.SKY}>css</Tags>
            <Tags color={ColorTags.ROSE}>useReducer</Tags>
          </>
        }
      />
      <Project
        name="Leviosa Streams"
        description="Video library Webapp with Video Listing Page with options of Watch Later, create new Playlist, add or remove the video from Playlist and Single Video Page"
        link="https://github.com/anjali1102/leviosa-streams"
        img={{ src: "/assets/images/project-fire.png", alt: "Project Fire" }}
        category={
          <>
            <Tags color={ColorTags.VIOLET}>React.js</Tags>
            <Tags color={ColorTags.EMERALD}>Redux-Toolkit</Tags>
            <Tags color={ColorTags.YELLOW}>JavaScript</Tags>
          </>
        }
      />
      <Project
        name="Lily"
        description="Replace your boring new tab with a soothing wallpaper and increase your productivity by adding countdown, focus and todos for the day.Greets you according to the time of the day. Auto-detects your location."
        link="https://github.com/anjali1102/lily/"
        img={{ src: "/assets/images/project-maps.png", alt: "Project Maps" }}
        category={
          <>
            <Tags color={ColorTags.FUCHSIA}>React.js</Tags>
            <Tags color={ColorTags.INDIGO}>webapp</Tags>
            <Tags color={ColorTags.ROSE}>APIs</Tags>
          </>
        }
      />
    </div>
  </Section>
);

export { ProjectList };
