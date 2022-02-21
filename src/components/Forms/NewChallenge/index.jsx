import React, { useState } from 'react';
import { nanoid } from 'nanoid';

import './newchallenge.scss';

function NewChallengeForm({ onSubmit, onClose, data }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [tags, setTags] = useState([]);

  const handleTags = (e) => {
    const tagsArr = e.target.value?.split(',');
    setTags(tagsArr);
  };

  const generateSimpleSlug = (text) =>
    text
      .toLowerCase()
      .replace(/[^\w ]+/g, '')
      .replace(/ +/g, '-');

  const handleSubmit = (e) => {
    e.preventDefault();
    const { id, name, avatar } = data;
    const postData = {
      id: nanoid(10),
      title,
      description,
      tags,
      slug: generateSimpleSlug(`${title.substring(0, 20)}${nanoid(2)}`),
      createdBy: { id, name, avatar },
      createdAt: Date.now(),
      upvoteCount: 1
    };
    onSubmit(e, postData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="add__new__form flex flex-ai-c flex-jc-c"
    >
      <div className="add__new__form__group flex flex-jc-c flex-ai-c">
        <input
          onBlur={(e) => setTitle(e.target.value)}
          id="post-title"
          name="title"
          className="add__new__form__control"
          type="text"
          placeholder="Title"
          autoComplete="off"
        />
        <textarea
          onBlur={(e) => {
            setDescription(e.target.value);
          }}
          id="post-description"
          name="description"
          className="add__new__form__control"
          type="text"
          placeholder="Description"
          autoComplete="off"
        />
        <input
          onBlur={handleTags}
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
