import React from "react";
import { ScrollView } from "tamagui";

import IdentityCards from "../containers/IdentityCards";
import PersonProgress from "../containers/PersonProgress";
import ExploreList from "../containers/ExploreList";
import Header from "../containers/Header";
//home page 
const HomePage = () => {
  return (
    <ScrollView flex={1} backgroundColor={"#ebf6fe"}>
      {/* Header component */}
      <Header />
      {/* IdentityCards component  */}
      <IdentityCards />
      {/* PersonProgress component */}
      <PersonProgress />
      {/* ExploreList component  */}
      <ExploreList />
    </ScrollView>
  );
};

export default HomePage;
