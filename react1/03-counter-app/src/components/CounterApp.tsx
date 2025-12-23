import PropTypes from "prop-types";

type CounterAppProps = {
  value?: number;
};

export function CounterApp({ value = 0 }: CounterAppProps) {
  return (
    <>
      <h1>Counter App</h1>
      <h2>{value}</h2>
    </>
  );
}

CounterApp.propTypes = {
  value: PropTypes.number
}
CounterApp.defaultTypes = {
  value: 0
}