import ls from "./ls";
import { INthState } from "../../../../types/types";

const state: INthState = {
  currentLevel: Number(ls.get("currentLevel")) || 1,
};

export default state;
