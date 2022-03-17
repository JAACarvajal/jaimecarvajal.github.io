import '../index.css';
import '../css/App.css';

function Box(props) {
  return (
    <div className="box w-2/5 h-2/4 bg-zinc-800">
        {props.children}
    </div>
  );
}

export default Box;
