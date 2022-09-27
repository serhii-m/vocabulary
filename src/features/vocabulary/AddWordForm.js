import { useState } from "react";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";

import { wordAdded } from "./vocabularySlice";
import { useLocalStorage } from "../../hooks";
import { vocabulary } from "../../app/vocabulary";

function AddPostForm() {
  const [word, setWord] = useState("");
  const [translation, setTranslation] = useState("");
  const [storedValue, setValue] = useLocalStorage("words", vocabulary.content);

  const dispatch = useDispatch();

  const onWordChanged = (e) => setWord(e.target.value);
  const onTranslationChanged = (e) => setTranslation(e.target.value);

  const canSave = [word, translation].every(Boolean);

  const onSaveWordClicked = () => {
    if (canSave) {
      const newWord = {
        id: nanoid(),
        word,
        translation,
      };

      dispatch(wordAdded(newWord));
      setValue([...storedValue, newWord]);
      setWord("");
      setTranslation("");
    }
  };

  return (
    <section>
      <h2 className="text-2xl text-center mb-4">Add a New Word</h2>
      <form className="flex flex-col items-center">
        <div className="mb-4">
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label htmlFor="wordValue">Word value: </label>
          <input
            className="text-gray-900"
            type="text"
            id="wordValue"
            name="wordValue"
            value={word}
            required
            onChange={onWordChanged}
          />
        </div>
        <div className="mb-6">
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label htmlFor="wordTranslation">Word translation: </label>
          <input
            className="text-gray-900"
            type="text"
            id="wordTranslation"
            name="wordTranslation"
            value={translation}
            required
            onChange={onTranslationChanged}
          />
        </div>
        <button
          className="rounded border-1 bg-sky-500 p-3 cursor-pointer disabled:opacity-50"
          type="button"
          onClick={onSaveWordClicked}
          disabled={!canSave}
        >
          Save Word
        </button>
      </form>
    </section>
  );
}

export default AddPostForm;
