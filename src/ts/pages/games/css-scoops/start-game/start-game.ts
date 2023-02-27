import LocalStorage from "../../../../utils/LocalStorage";
import VievScoops from "../view/AppViev";
import ButtonsLevels from "../listeners/ButtonsLevels";
import InputScoops from "../listeners/InputScoops";
import SubmitButtonScoops from "../listeners/SubmitButton";

const startGameScoops = () => {
  const ls = new LocalStorage("cssScoops");
  if (!ls.get("numberLevel")) ls.set("numberLevel", "1");
  const numberLevel = Number(ls.get("numberLevel"));
  const view = new VievScoops(numberLevel - 1);
  view.drawNewLevel();
  const btnLevel = new ButtonsLevels();
  btnLevel.startButtons();

  const input = new InputScoops();
  input.inputText();

  const submit = new SubmitButtonScoops();
  submit.changeLevel();
};

export default startGameScoops;
