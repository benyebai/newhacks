import './Container.css';
import PencilTool from '../whiteBoard/penciltool';

function Container() {
  return (
    <>
      <h1> Drawing Area</h1>
      <div className="drawing-area">
          <PencilTool />
      </div>
    </>
  );
}

export default Container;