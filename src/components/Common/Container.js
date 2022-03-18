function Container(props) {
  return (
    <div className="flex flex-wrap flex-row space justify-center gap-x-8 p-12 w-3/6 container h-screen">
        {props.children}
    </div>
  );
}

export default Container;
