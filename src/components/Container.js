function Container(props) {
  return (
    <div className="p-4 w-3/6 h-full container">
        {props.children}
    </div>
  );
}

export default Container;
