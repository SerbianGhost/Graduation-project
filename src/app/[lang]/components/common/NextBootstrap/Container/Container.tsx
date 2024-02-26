interface ContainerProps {
    children?: React.ReactNode;
    fluid?: boolean;
  }
  
  const Container: React.FC<ContainerProps> = ({ fluid, children }) => {
    const containerClass = `${fluid ? 'container-fluid' : 'container'}`;
  
    return (
      <div className={containerClass}>
        {children}
      </div>
    );
  };
  
  export default Container;