import React, { useContext, useEffect } from "react";
import { useLocation, Switch, Route, useHistory } from "react-router-dom";
import { Error404, Lights, NoConnectionScreen } from "pages";
import { AnimatePresence } from "framer-motion";
import addPageAnimation from "hocs/pageAnimation";
import { SocketsContext } from "context/Socket";

const AppRouter = () => {
  const location = useLocation();
  const history = useHistory();
  const { connection } = useContext(SocketsContext);
  useEffect(() => {
    if (!connection && location.pathname !== "/no-connection")
      history.push("/no-connection");
    else if (connection && location.pathname === "/no-connection")
      history.push("/");
  }, [connection, location, history]);

  return (
    <AnimatePresence exitBeforeEnter initial={false}>
      <Switch location={location} key={location.pathname}>
        <Route exact path="/" component={addPageAnimation(Lights)} />
        <Route
          exact
          path="/no-connection"
          component={addPageAnimation(NoConnectionScreen)}
        />
        <Route component={addPageAnimation(Error404)} />
      </Switch>
    </AnimatePresence>
  );
};

export default AppRouter;
