import React, { useState } from 'react';

const UpdateObject = () => {
  const [bugs, setBugs] = useState([
    { id: 1, name: 'Bug 1', fixed: false },
    { id: 2, name: 'Bug 2', fixed: false },
    { id: 3, name: 'Bug 3', fixed: false },
    { id: 4, name: 'Bug 4', fixed: false },
    { id: 5, name: 'Bug 5', fixed: false },
    { id: 6, name: 'Bug 6', fixed: false },
    { id: 7, name: 'Bug 7', fixed: false },
    { id: 8, name: 'Bug 8', fixed: false },
    { id: 9, name: 'Bug 9', fixed: false },
    { id: 10, name: 'Bug 10', fixed: false },
    { id: 11, name: 'Bug 11', fixed: false },
  ]);
  const [tags, setTags] = useState(['tags', 'bugs', 'jonas', 'python']);

  const onHandleBugs = () => {
    console.log('clicked');

    setBugs(bugs.map(bug => (bug.id === 1 ? { ...bug, fixed: true } : bug)));
    // ? add tags to array
    setTags([...tags, 'javascript']);
    // ? remove tags from array
    setTags(tags.filter(tag => tag !== 'python'));
    // ? update tags
    setTags(tags.map(tag => (tag === 'tags' ? 'bugs' : tag)));
  };
  return (
    <>
      <button onClick={onHandleBugs}>UpdateObject</button>
      {bugs &&
        bugs.map(bug => <div key={bug.id}>{bug.fixed ? 'true' : 'false'}</div>)}
    </>
  );
};

export default UpdateObject;
