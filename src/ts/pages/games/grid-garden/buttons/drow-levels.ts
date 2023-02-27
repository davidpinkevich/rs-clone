import addRules from "../start-game/rules-add";
import createField from "../field-create/create-field";
import addCode from "../start-game/code-add";
import addCarrots from "../field-create/carrots-add";
import addWater from "../field-create/water-add";
import moveWater from "../field-create/move-water";
import moveGarden from "../field-create/move-garden";

const drowLevels = () => {
  addRules();
  createField();
  addCode();
  addCarrots();
  addWater();
  moveWater();
  moveGarden();
};

export default drowLevels;
