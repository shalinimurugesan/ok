import React, { useState, useRef } from 'react';
import './App.css';


function App() {
  const [happy, setHappy] = useState(false);
  const [noBtnPos, setNoBtnPos] = useState({ top: 60, left: 220 });
  const [noMsgIdx, setNoMsgIdx] = useState(0);
  const noBtnRef = useRef<HTMLButtonElement>(null);

  const noMessages = [
    "No",
    "Try to catch me! 🏃‍♂️",
    "I love you! ❤️",
    "Nope, not happening! �",
    "You're my sunshine ☀️💛",
    "Smile please! 😁",
    "Nice try, but I'm faster! 🏃‍♂️💨",
    "My heart beats for you 💓",
    "Cheer up!",
    "You're stuck with happiness! 😁",
    "You are awesome!",
    "You're my favorite person 💕",
    "Life is beautiful!",
    "Almost got me!",
    "I choose you, always 💖",
    "Sending hugs! 🤗",
    "You can't click me!",
    "You're my happy place 🏡💙",
    "Stay positive!",
    "Mission: Make you smile! 😊✨",
    "You matter!",
    "Forever and always yours 💍",
    "I'm too fast for you!",
    "Your smile lights up the room! ✨",
    "Not today!",
    "You're one in a million!",
    "Keep smiling!",
    "Good things are coming your way 🌈",
    "Catch me if you can!",
    "You're stronger than you think 💪",
    "Don't be sad!",
    "Believe in yourself! You've got this!",
    "You are loved!",
    "You're doing great, don't stop!",
    "Happiness looks good on you!",
    "You make my heart happy 💖",
    "You make the world brighter!",
    "Even the stars envy your shine ⭐",
    "The world needs your light 🌍✨",
    "You're my favorite notification 🔔💬",
    "You bring joy wherever you go!",
    "You're the reason someone smiled today 😊",
    "Rain or shine, you're amazing!",
    "You deserve all the happiness 💝",
    "You are magical ✨",
    "Big virtual hug incoming! 🤗",
    "Smiles look so good on you 😄",
    "You're sunshine on a cloudy day ☀️",
    "Everything is better with you around!"
  ];

  const moveNoBtn = () => {
    // Random position within container but keep button visible
    const container = document.getElementById('main-container');
    if (container) {
      const buttonWidth = 150;
      const buttonHeight = 50;
      const minLeft = 20;
      const maxLeft = container.offsetWidth - buttonWidth - 20;
      const minTop = 120; // Just below the question text
      const maxTop = container.offsetHeight - buttonHeight - 120; // Don't go too far down
      
      const left = Math.floor(Math.random() * (maxLeft - minLeft)) + minLeft;
      const top = Math.floor(Math.random() * (maxTop - minTop)) + minTop;
      
      setNoBtnPos({ top, left });
      // Change message randomly, not repeating the last one
      let nextIdx = Math.floor(Math.random() * noMessages.length);
      if (nextIdx === noMsgIdx) nextIdx = (nextIdx + 1) % noMessages.length;
      setNoMsgIdx(nextIdx);
    }
  };

  return (
    <div className="main-bg">
      {/* Many floating animated emojis for a full background */}
      <span className="floating-emoji" style={{ top: '5%', left: '8%' }}>😊</span>
      <span className="floating-emoji" style={{ top: '10%', left: '30%' }}>❤️</span>
      <span className="floating-emoji" style={{ top: '15%', left: '60%' }}>😁</span>
      <span className="floating-emoji" style={{ top: '20%', left: '80%' }}>🤗</span>
      <span className="floating-emoji" style={{ top: '25%', left: '15%' }}>🏃‍♂️</span>
      <span className="floating-emoji" style={{ top: '30%', left: '50%' }}>😄</span>
      <span className="floating-emoji" style={{ top: '35%', left: '70%' }}>🥳</span>
      <span className="floating-emoji" style={{ top: '40%', left: '25%' }}>🌈</span>
      <span className="floating-emoji" style={{ top: '45%', left: '85%' }}>💖</span>
      <span className="floating-emoji" style={{ top: '50%', left: '10%' }}>😃</span>
      <span className="floating-emoji" style={{ top: '55%', left: '40%' }}>🎉</span>
      <span className="floating-emoji" style={{ top: '60%', left: '60%' }}>😆</span>
      <span className="floating-emoji" style={{ top: '65%', left: '75%' }}>💚</span>
      <span className="floating-emoji" style={{ top: '70%', left: '20%' }}>😺</span>
      <span className="floating-emoji" style={{ top: '75%', left: '55%' }}>✨</span>
      <span className="floating-emoji" style={{ top: '80%', left: '35%' }}>😎</span>
      <span className="floating-emoji" style={{ top: '85%', left: '90%' }}>💙</span>
      <span className="floating-emoji" style={{ top: '90%', left: '5%' }}>😇</span>
      <span className="floating-emoji" style={{ top: '95%', left: '45%' }}>🎈</span>
      <span className="floating-emoji" style={{ top: '98%', left: '70%' }}>🦄</span>
      <div id="main-container" className="center-box">
        <h1 className="greeting animated-text">Hey Aakash 👋</h1>

        <h2 className="question">Are you OK?</h2>
        {!happy ? (
          <>
            <div className="btn-row">
              <button className="yes-btn" onClick={() => setHappy(true)}>
                Yes
              </button>
              <button
                className="no-btn"
                ref={noBtnRef}
                style={{ position: 'absolute', top: noBtnPos.top, left: noBtnPos.left }}
                onMouseEnter={moveNoBtn}
                onClick={moveNoBtn}
              >
                {noMessages[noMsgIdx]}
              </button>
            </div>
           <p className="love-text">with love Shalu 💕</p>
          </>
        ) : (
          <div className="happy-msg">
            <span role="img" aria-label="happy">😊</span> Glad you're happy!
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
