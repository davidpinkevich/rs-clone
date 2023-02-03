import addRules from "./rules-add";
import addCode from "./code-add";
import createField from "../field-create/create-field";
import addCarrots from "../field-create/carrots-add";
import addWater from "../field-create/water-add";
import moveWater from "../field-create/move-water";

const startGame = () => {
  addRules();
  createField();
  addCode();
  addCarrots();
  addWater();
  moveWater();
};

export default startGame;
