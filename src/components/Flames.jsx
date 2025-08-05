import React, { useState } from "react";

const Flames = () => {
  const [fname, setFname] = useState("");
  const [sname, setSname] = useState("");
  const [result, setResult] = useState("");
  const data = [
    "Siblings",
    "Friends",
    "Love",
    "Affection",
    "Marriage",
    "Enemy",
  ];

  const handleResult = (e) => {
    e.preventDefault();

    if (fname.trim() === "" || sname.trim() === "") {
      setResult("Please Enter valid input");
      return;
    }

    const str1 = fname.toLowerCase().trim();
    const str2 = sname.toLowerCase().trim();

    const freqA = {};
    const freqB = {};

    for (let ch of str1) {
      freqA[ch] = (freqA[ch] || 0) + 1;
    }

    for (let ch of str2) {
      freqB[ch] = (freqB[ch] || 0) + 1;
    }

    //Remove common characters
    for (let ch of str1) {
      if (freqB[ch]) {
        const minLen = Math.min(freqA[ch], freqB[ch]);
        freqA[ch] -= minLen;
        freqB[ch] -= minLen;
      }
    }

    //count remaining characters
    let count = 0;
    for (let ch in freqA) {
      count += freqA[ch];
    }
    for (let ch in freqB) {
      count += freqB[ch];
    }

    const Index = count % 6;
    console.log(count);

    setResult(data[Index]);
  };

  const handleClear = () => {
    setFname("");
    setSname("");
    setResult("");
  };

  return (
    <div>
      <input
        type="text"
        data-testid="input1"
        name="name1"
        placeholder="Enter first Name"
        value={fname}
        onChange={(e) => setFname(e.target.value)}
      />
      <input
        type="text"
        data-testid="input2"
        name="name2"
        placeholder="Enter second Name"
        value={sname}
        onChange={(e) => setSname(e.target.value)}
      />
      <button
        data-testid="calculate_relationship"
        name="calculate_relationship"
        onClick={handleResult}
      >
        Calculate Future Relationship
      </button>
      <button data-testid="clear" name="clear" onClick={handleClear}>
        Clear
      </button>
      <h3 data-testid="answer">{result}</h3>
    </div>
  );
};

export default Flames;
