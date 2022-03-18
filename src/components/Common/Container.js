function Container(props) {
  return (
    <div className="flex flex-row gap-5 p-12 w-3/6 container h-screen">
        {props.children}
    </div>
  );
}

export default Container;
