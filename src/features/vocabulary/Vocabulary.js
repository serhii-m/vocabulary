import { useSelector, shallowEqual } from "react-redux";
import { showVocabulary } from "./vocabularySlice";

import RenderedItems from "../../components/RenderedItems";

export function Vocabulary() {
  const words = useSelector(showVocabulary, shallowEqual);

  return (
    <>
      <h2 className="text-3xl mb-4">Your vocabulary:</h2>
      <RenderedItems
        data={words}
        title="Original:"
        description="Translation:"
      />
    </>
  );
}
