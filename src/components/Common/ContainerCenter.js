function ContainerCenter(props) {
    return (
      <div className="flex items-center p-4 w-3/6 container h-screen">
          {props.children}
      </div>
    );
  }
  
  export default ContainerCenter;
  