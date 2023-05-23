"use client";

import Heading from "./components/Heading";
import HeadingContent from "./components/HeadingContent";
import Container from "./components/Container";
import AddOne from "./components/FunctionalComponent";
import Generics from "./Generics";
import UseStateComponent from "./components/useStateComponent";
import UseEffectComponent from "./components/UseEffectComponent";
import UseReducerComponent from "./components/UseReducerComponent";
import UseRefComponent from "./components/UseRefComponent";
import CustomHooksComponent from "./components/CustomHooksComponent";

const Home = () => {
  return (
    // components

    // <div>
    // {
    /* <Heading title="Hello There!" />
      <HeadingContent>Hii!</HeadingContent>
      <Container heading="My Heading">Foo</Container>
      <AddOne />
      <Generics
        items={["anirudh", "singh", "bhadauria"]}
        render={(item: string) => <div>{item}</div>}
      /> */
    // }
    // </div>

    // Hooks

    <div>
      <UseStateComponent />
      <UseEffectComponent />
      <UseReducerComponent />
      <UseRefComponent />
      <CustomHooksComponent />
    </div>
  );
};

export default Home;
