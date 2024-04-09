import { useState } from 'react';
import { produce } from 'immer';
const UpdateObject = () => {
  const [bugs, setBugs] = useState([
    { id: 1, name: 'Bug 1', fixed: false },
    { id: 2, name: 'Bug 2', fixed: false },
    { id: 3, name: 'Bug 3', fixed: false },
  ]);
  const [tags, setTags] = useState(['tags', 'bugs', 'jonas', 'python']);
  const [customer, setCustomer] = useState({
    name: 'jonsa',
    address: {
      city: 'Berlin',
      country: 'Germany',
    },
  });

  const onHandleBugs = () => {
    console.log('clicked');
    // ? pure method
    // setBugs(bugs.map(bug => (bug.id === 1 ? { ...bug, fixed: true } : bug)));
    //* use immer
    setBugs(
      produce(bugs, draft => {
        draft.forEach(bug => {
          if (bug.id === 1) {
            bug.fixed = true;
          }
        });
      }),
    );
    // setBugs(
    //   produce(draft => {
    //     const newToFixed = draft.find(bug => bug.id === 1);
    //     if (newToFixed) newToFixed.fixed = true;
    //   }),
    // );

    // ? add tags to array
    setTags([...tags, 'javascript']);
    // ? remove tags from array
    setTags(tags.filter(tag => tag !== 'python'));
    // ? update tags
    setTags(tags.map(tag => (tag === 'tags' ? 'bugs' : tag)));
    // ? nested object
    setCustomer({
      ...customer,
      address: { ...customer.address, city: 'London' },
    });
  };
  return (
    <>
      <button onClick={onHandleBugs}>UpdateObject</button>
      {customer.address.city}
      {bugs &&
        bugs.map(bug => (
          <div key={bug.id}>
            {bug.name} {bug.fixed ? 'true' : 'new'}
          </div>
        ))}
    </>
  );
};

export default UpdateObject;
