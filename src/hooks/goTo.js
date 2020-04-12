import { useHistory } from "react-router-dom";

export const usePopRoute = () => {
  const history = useHistory();
  history.goBack();
};

export const usePushRoute = (route = "") => {
  const history = useHistory();
  history.push(route);
};
