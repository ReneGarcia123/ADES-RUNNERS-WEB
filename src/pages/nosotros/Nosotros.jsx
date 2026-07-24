import MisionVision from "../../components/MisionVision/MisionVision";
import misionVisionData from "../../components/MisionVision/misionVisionData";
import Reglamento from "../../components/Reglamento/Reglamento";
import reglamentoData from "../../components/Reglamento/reglamentoData";
import HistoryTimeline from "../../components/HistoryTimeline/HistoryTimeline";
import historyTimelineData from "../../components/HistoryTimeline/historyTimelineData";

function Nosotros() {
  return (
    <main style={{ paddingTop: "140px", color: "white" }}>
      <MisionVision data={misionVisionData}/>
      <Reglamento data={reglamentoData}/>
      <HistoryTimeline data={historyTimelineData}/>
    </main>
  );
}

export default Nosotros;
