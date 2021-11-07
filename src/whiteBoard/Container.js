import './Container.css';
import PencilTool from '../whiteBoard/penciltool';

function Container() {
  return (
    <>
      <div className="drawing-area">
          <PencilTool />
      </div>
    </>
  );
}

export default Container;