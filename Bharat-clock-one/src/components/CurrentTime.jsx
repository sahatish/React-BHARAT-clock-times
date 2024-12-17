let CurrentTime = () => {
    let time = new Date();

    return (
        <p  classNmae="lead">
          This is current time: { time.toLocaleDateString()} -{""}
          {time.toLocaleTimeString()}

        </p>   
    ); 
};
  export default CurrentTime;
  