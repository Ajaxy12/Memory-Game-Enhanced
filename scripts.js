const cards = document.querySelectorAll('.memory-card');

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;

// Audio context for sound effects
let audioContext = new (window.AudioContext || window.webkitAudioContext)();
let soundEnabled = true;
let matchedPairs = 0;
const totalPairs = 6;
let isPeeking = false;
const matchedCards = new Set();

// Function to resume audio context if suspended (required by some browsers)
function resumeAudioContext() {
  if (audioContext.state === 'suspended') {
    audioContext.resume();
  }
}

// Function to play a sound with specific frequency and duration
function playSound(frequency, duration, type = 'sine') {
  if (!soundEnabled) return;
  
  resumeAudioContext();
  
  const oscillator = audioContext.createOscillator();
  const gainNode = audioContext.createGain();
  
  oscillator.connect(gainNode);
  gainNode.connect(audioContext.destination);
  
  oscillator.frequency.value = frequency;
  oscillator.type = type;
  
  gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
  gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + duration);
  
  oscillator.start(audioContext.currentTime);
  oscillator.stop(audioContext.currentTime + duration);
}

// Sound effects
function playClickSound() {
  playSound(400, 0.1, 'sine');
}

function playMatchSound() {
  // Play a pleasant ascending tone for match
  playSound(523.25, 0.2, 'sine'); // C note
  setTimeout(() => {
    playSound(659.25, 0.2, 'sine'); // E note
  }, 100);
}

function playMismatchSound() {
  // Play a lower, less pleasant tone for mismatch
  playSound(200, 0.3, 'sawtooth');
}

function playVictorySound() {
  if (!soundEnabled) return;
  
  resumeAudioContext();
  
  // Play a victory fanfare: C-E-G-C (major chord progression)
  const notes = [523.25, 659.25, 783.99, 1046.50]; // C, E, G, C
  notes.forEach((freq, index) => {
    setTimeout(() => {
      playSound(freq, 0.3, 'sine');
    }, index * 150);
  });
}

function flipCard() {
  if (lockBoard || isPeeking) return;
  if (this === firstCard) return;

  playClickSound(); // Play click sound
  this.classList.add('flip');

  if (!hasFlippedCard) {
    hasFlippedCard = true;
    firstCard = this;
    return;
  }

  secondCard = this;
  checkForMatch();
}

function checkForMatch() {
  let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;
  isMatch ? disableCards() : unflipCards();
}

function disableCards() {
  playMatchSound(); // Play match sound
  firstCard.removeEventListener('click', flipCard);
  secondCard.removeEventListener('click', flipCard);
  
  // Mark cards as matched
  matchedCards.add(firstCard);
  matchedCards.add(secondCard);
  
  matchedPairs++;
  if (matchedPairs === totalPairs) {
    // All pairs matched - show victory modal
    setTimeout(() => {
      showVictoryModal();
    }, 500);
  }
  
  resetBoard();
}

function unflipCards() {
  playMismatchSound(); // Play mismatch sound
  lockBoard = true;

  setTimeout(() => {
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');
    resetBoard();
  }, 1500);
}

function resetBoard() {
  [hasFlippedCard, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
}

(function shuffle() {
  cards.forEach(card => {
    let randomPos = Math.floor(Math.random() * 12);
    card.style.order = randomPos;
  });
})();

cards.forEach(card => card.addEventListener('click', flipCard));

// Sound toggle functionality
const soundToggle = document.getElementById('soundToggle');
const soundIcon = soundToggle.querySelector('.sound-icon');
soundToggle.addEventListener('click', function() {
  soundEnabled = !soundEnabled;
  this.classList.toggle('muted');
  soundIcon.textContent = soundEnabled ? '🔊' : '🔇';
  if (soundEnabled) {
    playClickSound(); // Play a sound to confirm it's enabled
  }
});

// Victory modal functionality
const victoryModal = document.getElementById('victoryModal');
const playAgainBtn = document.getElementById('playAgainBtn');

function showVictoryModal() {
  playVictorySound();
  victoryModal.classList.add('show');
}

function hideVictoryModal() {
  victoryModal.classList.remove('show');
}

function resetGame() {
  matchedPairs = 0;
  matchedCards.clear(); // Clear matched cards set
  hideVictoryModal();
  
  // Reset all cards
  cards.forEach(card => {
    card.classList.remove('flip');
    card.addEventListener('click', flipCard);
  });
  
  // Shuffle cards again
  (function shuffle() {
    cards.forEach(card => {
      let randomPos = Math.floor(Math.random() * 12);
      card.style.order = randomPos;
    });
  })();
  
  resetBoard();
  peekBtn.disabled = false; // Re-enable peek button
}

playAgainBtn.addEventListener('click', resetGame);

// Peek functionality - show all cards for 3 seconds
const peekBtn = document.getElementById('peekBtn');

function peekAtCards() {
  if (isPeeking || lockBoard) return;
  
  isPeeking = true;
  peekBtn.disabled = true;
  
  // Flip all cards that aren't matched
  cards.forEach(card => {
    if (!matchedCards.has(card)) {
      card.classList.add('flip');
    }
  });
  
  // After 3 seconds, flip back only unmatched cards
  setTimeout(() => {
    cards.forEach(card => {
      if (!matchedCards.has(card)) {
        card.classList.remove('flip');
      }
    });
    
    isPeeking = false;
    peekBtn.disabled = false;
  }, 3000);
}

peekBtn.addEventListener('click', peekAtCards);

