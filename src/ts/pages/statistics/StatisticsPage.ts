import Page from "../abstract/page";
import MainPageView from "../main/view/AppView";
import MoveImages from "../main/view/move-images/MoveImages";
import completedLevels from "./level-data/completed-levels";
import templateStatistics from "./template-statistics";

class StatisticsPage extends Page {
  constructor(id: string) {
    super(id);
  }

  executeAfterRender(): void {
    const view = new MainPageView();
    view.drawStatisticsPage();

    const move = new MoveImages(document.body);
    move.startMove();

    completedLevels();
  }

  render() {
    this.container.innerHTML = templateStatistics();
    return this.container;
  }
}

export default StatisticsPage;
