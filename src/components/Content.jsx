import { useState } from 'react';

function Content() {  // Save the date on mount so rerendering does not change the displayed time.
  const [openedAt] = useState(() => new Date());

  return (
    <div>
      <h1>Hello World!</h1>      <h2>It is {openedAt.toLocaleTimeString()}.</h2>
    </div>
  );
}

export default Content;
