import { useSelector, shallowEqual } from "react-redux";
import { showTestHistory } from "./testHistorySlice";
import RenderedItems from "../../components/RenderedItems";

function TestHistoryPage() {
  const tests = useSelector(showTestHistory, shallowEqual);

  return (
    <>
      <h2 className="text-3xl mb-4">Your test history:</h2>
      <RenderedItems data={tests} title="Date:" description="Result:" />
    </>
  );
}

export default TestHistoryPage;
