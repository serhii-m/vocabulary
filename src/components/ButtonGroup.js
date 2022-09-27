import PropTypes from "prop-types";

export function ButtonGroup({ data, value, handleClick }) {
  return data.map((item) => (
    <input
      key={item?.id}
      type="button"
      className="w-48 h-12 rounded border-1 bg-sky-500 p-2 cursor-pointer"
      value={item[value]}
      onClick={handleClick}
    />
  ));
}

ButtonGroup.propTypes = {
  data: PropTypes.instanceOf(Array),
  value: PropTypes.string,
  handleClick: PropTypes.func,
};

ButtonGroup.defaultProps = {
  data: [],
  value: PropTypes.string,
  handleClick: () => null,
};
