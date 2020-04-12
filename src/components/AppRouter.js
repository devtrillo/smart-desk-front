import React from "react";
import { useLocation, Switch, Route } from "react-router-dom";
import { Error404, Lights } from "pages";
import { AnimatePresence } from "framer-motion";
import addPageAnimation from "hocs/pageAnimation";

const AppRouter = () => {
  const location = useLocation();

  return (
    <AnimatePresence exitBeforeEnter initial={false}>
      <Switch location={location} key={location.pathname}>
        <Route exact path="/" component={addPageAnimation(Lights)} />
        <Route component={addPageAnimation(Error404)} />
      </Switch>
    </AnimatePresence>
  );
};

export default AppRouter;
