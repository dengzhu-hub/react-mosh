import { useState } from 'react';

interface Props {
  children: string;
  maxChar?: number;
}

const ExpandableText = ({ children, maxChar = 30 }: Props) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleExpanded = () => setIsExpanded(!isExpanded);
  if (children.length <= maxChar)
    return (
      <p
        style={{
          color: 'transparent',
          fontWeight: 'bold',
          fontSize: '24px',
          fontStyle: 'italic',
          backgroundImage: `linear-gradient(to right,  #6bb29d, #28b485)`,
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          WebkitTextStrokeColor: 'transparent',
        }}
      >
        {children}
      </p>
    );
  return (
    <p>
      {isExpanded ? children : children.substring(0, maxChar) + '...'}
      <button onClick={toggleExpanded}>{isExpanded ? 'Less' : 'More'}</button>
    </p>
  );
};

export default ExpandableText;
