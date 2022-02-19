import React from 'react';
import './newchallenge.scss';

function NewChallengeForm({ onSubmit, onClose }) {
  return (
    <form
      onSubmit={onSubmit}
      className="add__new__form flex flex-ai-c flex-jc-c"
    >
      <div className="add__new__form__group flex flex-jc-c flex-ai-c">
        <input
          onChange={(e) => {
            console.log(e.target.value);
          }}
          id="post-title"
          name="title"
          className="add__new__form__control"
          type="text"
          placeholder="Title"
          autoComplete="off"
        />
        <textarea
          onChange={(e) => {
            console.log(e.target.value);
          }}
          id="post-description"
          name="description"
          className="add__new__form__control"
          type="text"
          placeholder="Description"
          autoComplete="off"
        />
        <input
          onChange={(e) => {
            console.log(e.target.value);
          }}
          id="post-tags"
          name="tags"
          className="add__new__form__control"
          type="text"
          placeholder="Tags"
          autoComplete="off"
        />
        <div className="add__new__form__footer flex flex-ai-c">
          <button className="submit__btn" type="submit">
            Create
          </button>
          <button className="cancel__btn" type="cancel" onClick={onClose}>
            Cancel
          </button>
        </div>
      </div>
    </form>
  );
}

export default NewChallengeForm;
