import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import styles from './Like.module.css';
import { useState } from 'react';
const Like = () => {
  const [status, setStatus] = useState(false);
  const onHandleStatus = () => {
    setStatus(!status);
  };
  return (
    <div>
      {status ? (
        <AiFillHeart
          className={[styles.like, styles['like-fill']].join(' ')}
          onClick={onHandleStatus}
        />
      ) : (
        <AiOutlineHeart
          className={[styles.like, styles['like-empty']].join(' ')}
          onClick={onHandleStatus}
        />
      )}
    </div>
  );
};

export default Like;
