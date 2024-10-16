// Desktop\Code\flashcard\flashcards\src\App.js

import React, { useEffect, useState, useLocalStorage } from 'react';
import './App.css';
import CSITExam1 from './CSITExam1';
import POSCExam1 from './PoscExam1';
import ITExam1 from './ITExam1';
import defaultSet from './Default';
import Image1 from './Images/Shia-LaBeouf.png';
import Image2 from './Images/DavidGoggins.png';

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [currentSet, setCurrentSet] = useState(defaultSet)

  const handleSetSwitch = (set) => {
    setCurrentSet(set);
  }
  const handleNext = () => {
    if (currentSet.length <= 1) { return }
    setShowAnswer(false);
    setCurrentIndex((prevIndex) =>
      prevIndex === currentSet.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    if (currentSet.length <= 1) { return }
    setShowAnswer(false);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? currentSet.length - 1 : prevIndex - 1
    );
  };

  const handleRandom = () => {
    if (currentSet.length <= 1) { return }
    setShowAnswer(false);
    setCurrentIndex(Math.floor(Math.random() * currentSet.length));
  };

  const handleFlip = () => {
    setShowAnswer(!showAnswer);
  };

  const handleSetToZero = () => {
    setShowAnswer(false);
    setCurrentIndex(0);
  }

  useEffect(() => {
    const handleKeyDown = (event) => {
      switch (event.key) {
        case 'ArrowRight':
          handleNext();
          break;
        case 'ArrowLeft':
          handlePrev();
          break;
        case 'ArrowUp':
          handleRandom();
          break;
        case 'ArrowDown':
          handleSetToZero();
          break;
        case 'Enter':
          handleFlip();
          break;
        default:
          console.log("error");
          break;
      }
    }

    window.addEventListener('keydown', handleKeyDown);
    return () => { window.removeEventListener('keydown', handleKeyDown); }
  })

  return (
    <>
      <div className='project-container'>
        <div>
          <img src={Image1} className='image1' alt='Shia-LaBeouf just do it' />
        </div>
        <div className="App">
          {/* //TODO This is where the buttons to change set will go */}
          <button onClick={() => handleSetSwitch(CSITExam1)}>CSIT Exam 1</button>
          <button onClick={() => handleSetSwitch(POSCExam1)}>POSC Exam 1</button>
          <button onClick={() => handleSetSwitch(ITExam1)}>IT Exam 1</button>

          <div className="card-container" onClick={handleFlip}>
            <div className={`card ${showAnswer ? 'flipped' : ''}`}>
              <div className="front">
                {currentSet === defaultSet ? (
                  <>
                    <h1>Intro:</h1>
                    <p>Select a set to study from above</p>
                    <p>Press Enter <strong>OR</strong> Click card to view usage</p>
                  </>
                ) : (
                  <>
                    <h1>Question:</h1>
                    <p>{currentSet[currentIndex].question}</p>
                  </>
                )}
              </div>
              <div className="back">
                {currentSet === defaultSet ? (
                  <div className="instructions">
                    <h4>Usage:</h4>
                    <p>Mouse click/Enter - flip card</p>
                    <p>Right Arrow - next card</p>
                    <p>Left Arrow - previous card</p>
                    <p>Up Arrow - random card</p>
                    <p>Down Arrow - set card to 1</p>
                  </div>
                ) : (
                  <>
                    <h1>Answer:</h1>

                    <p>{currentSet[currentIndex].answer}</p>
                    <p>{currentSet[currentIndex].explanation}</p>
                  </>
                )}
              </div>
            </div>
          </div>
          <span>
            {currentIndex + 1} / {currentSet.length}
          </span>
          <div className="navigation">
            <button onClick={handlePrev}>Previous</button>
            <button onClick={handleSetToZero}>Reset</button>
            <button onClick={handleRandom}>Random</button>
            <button onClick={handleNext}>Next</button>
          </div>
        </div>
        <div>
          <img src={Image2} className='image2' alt='David Goggins holding a tree log' />
        </div>
      </div>
    </>
  );
}

export default App;
