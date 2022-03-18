import '../../index.css';
import '../../css/App.css';
import '../../css/Box.css';

function Box(props) {
  return (
    <div className="box w-2/4 h-2/4 rounded-md">
        {props.children}
    </div>
  );
}

export default Box;
