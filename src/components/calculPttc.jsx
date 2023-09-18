import Buttons from "./buttons";
import Pht from "./pht";
import Res from "./res";
import Tva from "./tva";

function CalculPttc() {
    return (
      <div className="div" style={{height:'100vh',justifyContent:'center',alignItems:'center',display:'flex'}}>
        <form>
            <fieldset>
            <legend align='center'>Calcul Pttc</legend>
            <Pht/>
            <Tva/>
            <Buttons/>
            <Res/>
            </fieldset>
        </form>
      </div>
    );
  }
  export default CalculPttc;
