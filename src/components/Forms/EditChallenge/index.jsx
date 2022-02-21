import React, { useState } from 'react';
import { nanoid } from 'nanoid';

import './editchallenge.scss';

function EditChallengeForm({ onSubmit, onClose, data }) {
  const [title, setTitle] = useState(data?.title);
  const [description, setDescription] = useState(data?.description);
  const [tags, setTags] = useState(data?.tags);

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
    e.stopPropagation();
    const postData = {
      title,
      description,
      tags,
      slug: generateSimpleSlug(`${title.substring(0, 20)}${nanoid(2)}`)
    };
    onSubmit(e, postData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="edit__form flex flex-ai-c flex-jc-c"
    >
      <div className="edit__form__group flex flex-jc-c flex-ai-c">
        <input
          onChange={(e) => setTitle(e.target.value)}
          id="edit-post-title"
          name="title"
          value={title}
          className="edit__form__control"
          type="text"
          placeholder="Title"
          autoComplete="off"
        />
        <textarea
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          value={description}
          id="edit-post-description"
          name="description"
          className="edit__form__control"
          type="text"
          placeholder="Description"
          autoComplete="off"
        />
        <input
          onChange={handleTags}
          value={tags.join(',')}
          id="edit-post-tags"
          name="tags"
          className="edit__form__control"
          type="text"
          placeholder="Tags"
          autoComplete="off"
        />
        <div className="edit__form__footer flex flex-ai-c">
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

export default EditChallengeForm;
