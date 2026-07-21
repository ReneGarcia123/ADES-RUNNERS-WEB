import MisionVision from "../../components/MisionVision/MisionVision";
import misionVisionData from "../../components/MisionVision/misionVisionData";
import Reglamento from "../../components/Reglamento/Reglamento";
import reglamentoData from "../../components/Reglamento/reglamentoData";

function Nosotros() {
  return (
    <main style={{ paddingTop: "140px", color: "white" }}>
      <MisionVision data={misionVisionData}/>
      <Reglamento data={reglamentoData}/>
    </main>
  );
}

export default Nosotros;
