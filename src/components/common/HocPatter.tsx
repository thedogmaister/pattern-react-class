export function WithClickHanlder(ComponentFunction: any) {
  return function HOCClickHandler(props: any) {
    const eventClick = () => {
      console.log("logica compartida");
    };
    return <ComponentFunction onClick={eventClick} {...props} />;
  };
}
