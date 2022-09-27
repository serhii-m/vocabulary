import { useMemo, useRef, useState } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";

import { useNavigate } from "react-router";

import { nanoid } from "@reduxjs/toolkit";
import { showVocabulary } from "./vocabularySlice";
import { getRandomWords } from "../../util";
import { testAdded } from "../testHistory/testHistorySlice";
import { ButtonGroup } from "../../components/ButtonGroup";
import { useLocalStorage } from "../../hooks";

function CheckWordsPage() {
  const [visible, setVisible] = useState(false);
  const [results, setResults] = useState([]);
  const [storedValue, setValue] = useLocalStorage("tests", []);

  const words = useSelector(showVocabulary, shallowEqual);
  const navigate = useNavigate();
  const currentRef = useRef(0);
  const counterRef = useRef(0);

  const dispatch = useDispatch();

  const randomWords = useMemo(() => getRandomWords(words, 10), [words]);

  const prepareResults = () => {
    const rawResults = getRandomWords(
      randomWords.filter((_, idx) => idx !== currentRef.current),
      3,
    );
    const uniqueResults = getRandomWords(
      [randomWords[currentRef.current], ...rawResults],
      4,
    );

    setResults(uniqueResults);
  };

  const startCheck = () => {
    setVisible(true);
    prepareResults();
  };

  const handleOnClick = (e) => {
    if (
      e.target.value.toLowerCase() ===
      randomWords[currentRef.current].translation
    ) {
      counterRef.current += 1;
    }

    if (currentRef.current === randomWords.length - 1) {
      const newResult = {
        id: nanoid(),
        date: new Date(Date.now()).toLocaleString(),
        counter: counterRef.current * 10,
      };

      dispatch(testAdded(newResult));
      setValue([...storedValue, newResult]);
      navigate("/test-history");
    }

    currentRef.current += 1;
    prepareResults();
  };

  return (
    <section>
      {!visible && (
        <button
          className="rounded border-1 bg-sky-500 p-3 cursor-pointer disabled:opacity-50"
          type="button"
          onClick={startCheck}
        >
          Check Words
        </button>
      )}
      {visible && (
        <div className="flex flex-col items-center gap-5">
          <h2 className="text-2xl mb-4">{`Word #${currentRef.current + 1}`}</h2>
          <p className="text-3xl text-center uppercase">
            {randomWords[currentRef.current].word}
          </p>
          <span>Choose only one correct translation below:</span>
          <ButtonGroup
            data={results}
            value="translation"
            handleClick={handleOnClick}
          />
        </div>
      )}
    </section>
  );
}

export default CheckWordsPage;
