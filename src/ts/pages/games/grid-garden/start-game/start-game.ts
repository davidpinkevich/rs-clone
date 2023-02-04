import addRules from "./rules-add";
import addCode from "./code-add";
import createField from "../field-create/create-field";
import addCarrots from "../field-create/carrots-add";
import addWater from "../field-create/water-add";
import moveWater from "../field-create/move-water";
import moveGarden from "../field-create/move-garden";
import chooseLevel from "../buttons/choose-level";
import hiddenTable from "../buttons/table-hidden";
import addTableLevels from "../buttons/table-levels";

const startGame = () => {
  addRules();
  createField();
  addCode();
  addCarrots();
  addWater();
  moveWater();
  moveGarden();
  chooseLevel();
  hiddenTable();
  addTableLevels();
};

export default startGame;
