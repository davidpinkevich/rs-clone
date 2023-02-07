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
import addActiveLevelGarden from "../buttons/active-level-table";
import nextButtonLevelGrid from "../buttons/next-button";
import restartAddWins from "../buttons/restart-wins";
import changeLangGrid from "../buttons/change-lang";
import changeSoundGrid from "../buttons/sound-btn";

const startGame = () => {
  addRules();
  createField();
  addCode();
  addCarrots();
  addWater();
  moveWater();
  moveGarden();
  hiddenTable();
  addTableLevels();
  chooseLevel();
  addActiveLevelGarden();
  nextButtonLevelGrid();
  restartAddWins();
  changeLangGrid();
  changeSoundGrid();
};

export default startGame;
