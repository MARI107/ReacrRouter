
import { useLocation, useHistory } from "react-router-dom";

export const Page1DetailA = () => {
  const { state } = useLocation();
  console.log(state);

const history = useHistory();

const onClickBack = () => history.goBack();

  return (
    <div>
      <h1>Pege1DetailAページです</h1>
      <button onClick={onClick}>戻る</button>
      <button>戻る</button>
    </div>
  );
};
