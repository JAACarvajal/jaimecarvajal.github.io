import '../../index.css';
import '../../css/App.css';
import '../../css/Box.css';

function Box(props) {
  return (
    <div className="box w-96 h-96 rounded-md">
        {props.children}
    </div>
  );
}

export default Box;
