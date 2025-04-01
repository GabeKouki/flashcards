// Desktop\Code\flashcard\flashcards\src\App.js

import React, { useEffect, useState } from 'react'
import './App.css'
import CSITExam1 from './CSITExam1'
import POSCExam1 from './PoscExam1'
import ITExam1 from './ITExam1'
import defaultSet from './Default'
import MTH251Exam2 from './MTH251Exam2'
import PoscExam2 from './PoscExam2'
import CSITFINAL from './CSITFINAL'
import CS210Exam1 from './CS210Exam1'

function App() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [showAnswer, setShowAnswer] = useState(false)
  const [currentSet, setCurrentSet] = useState(defaultSet)

  const handleSetSwitch = (set) => {
    setCurrentSet(set)
    setCurrentIndex(0)
    setShowAnswer(false)
  }

  const handleNext = () => {
    if (currentSet.length <= 1) return
    setShowAnswer(false)
    setCurrentIndex((prevIndex) => (prevIndex === currentSet.length - 1 ? 0 : prevIndex + 1))
  }

  const handlePrev = () => {
    if (currentSet.length <= 1) return
    setShowAnswer(false)
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? currentSet.length - 1 : prevIndex - 1))
  }

  const handleRandom = () => {
    if (currentSet.length <= 1) return
    setShowAnswer(false)
    setCurrentIndex(Math.floor(Math.random() * currentSet.length))
  }

  const handleFlip = () => {
    setShowAnswer((prevSetAnswer) => !prevSetAnswer)
  }

  const handleSetToZero = () => {
    setShowAnswer(false)
    setCurrentIndex(0)
  }

  // biome-ignore lint/correctness/useExhaustiveDependencies: I know what im doing
  useEffect(() => {
    const handleKeyDown = (event) => {
      switch (event.key) {
        case 'ArrowRight':
          handleNext()
          break
        case 'ArrowLeft':
          handlePrev()
          break
        case 'ArrowUp':
          handleRandom()
          break
        case 'ArrowDown':
          handleSetToZero()
          break
        case 'Enter':
          handleFlip()
          break
        case '1':
          // Add a CSS class to make the card bigger for long explanations
          // biome-ignore lint/correctness/noSwitchDeclarations: <explanation>
          const cardContainer = document.querySelector('.card-container')
          if (cardContainer) {
            cardContainer.classList.toggle('expanded')
          }
          break
        default:
          break
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [currentSet])

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Flashcard App</h1>
      </header>
      <main className="app-main">
        <div className="set-selector">
          <button type="button" onClick={() => handleSetSwitch(CSITExam1)}>
            CSIT Exam 1
          </button>
          <button type="button" onClick={() => handleSetSwitch(POSCExam1)}>
            POSC Exam 1
          </button>
          <button type="button" onClick={() => handleSetSwitch(ITExam1)}>
            IT Exam 1
          </button>
          <button type="button" onClick={() => handleSetSwitch(MTH251Exam2)}>
            MTH 251 Exam 2
          </button>
          <button type="button" onClick={() => handleSetSwitch(PoscExam2)}>
            POSC Exam 2
          </button>
          <button type="button" onClick={() => handleSetSwitch(CSITFINAL)}>
            CSIT Final Exam
          </button>
          <button type="button" onClick={() => handleSetSwitch(CS210Exam1)}>
            CS210 Exam
          </button>
        </div>
        <div className="card-container" onClick={handleFlip} onKeyDown={handleFlip}>
          <div className={`card ${showAnswer ? 'flipped' : ''}`}>
            <div className="front">
              {currentSet === defaultSet ? (
                <>
                  <h1>Intro:</h1>
                  <p>Select a set to study from above</p>
                  <p>
                    Press Enter <strong>OR</strong> Click card to view usage
                  </p>
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
                  <p>Press 1 - expand long answers</p>
                </div>
              ) : (
                <>
                  <h1>Answer:</h1>
                  <div className="answer-content">
                    <p>{currentSet[currentIndex].answer}</p>
                    {currentSet[currentIndex].explanation && (
                      <>
                        <div className="expansion-hint">Press '1' for more details</div>
                        <div className="additional-content">
                          <p>{currentSet[currentIndex].explanation}</p>
                        </div>
                      </>
                    )}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
        <div className="card-navigation">
          <span>
            {currentIndex + 1} / {currentSet.length}
          </span>
          <div className="navigation">
            <button type="button" onClick={handlePrev}>
              Previous
            </button>
            <button type="button" onClick={handleSetToZero}>
              Reset
            </button>
            <button type="button" onClick={handleRandom}>
              Random
            </button>
            <button type="button" onClick={handleNext}>
              Next
            </button>
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
