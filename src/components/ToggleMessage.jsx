import React, { useState } from "react";

function ToggleMessage() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div>
      <button onClick={() => setIsVisible(!isVisible)}>
      {isVisible ?"Hide" : "Show"} Message
      </button>
     <span className="px-4 py-2 rounded-e-2xl bg-teal-900 text-lime-700">{isVisible && <p>Get contact with me to buy a coin!</p>}</span>
    </div>
  );
}

export default ToggleMessage;