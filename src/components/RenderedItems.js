import PropTypes from "prop-types";

function RenderedItems({ data, title, description }) {
  const renderedItems = data.map((item) => (
    <li key={item?.id} className="text-xl flex justify-between py-1">
      {Object.keys(item)
        .slice(1)
        .map((key) =>
          key === "counter" ? (
            <span key={key}>{item[key]}%</span>
          ) : (
            <span key={key}>{item[key]}</span>
          ),
        )}
    </li>
  ));

  return (
    <section className="w-80 sm:w-96">
      <div className="text-xl flex justify-between mb-3">
        {title && <span>{title}</span>}
        {description && <span>{description}</span>}
      </div>
      <ul>{renderedItems}</ul>
    </section>
  );
}

RenderedItems.propTypes = {
  data: PropTypes.instanceOf(Array),
  title: PropTypes.string,
  description: PropTypes.string,
};

RenderedItems.defaultProps = {
  data: [],
  title: "",
  description: "",
};

export default RenderedItems;
