# 🎮 Memory Game - Enhanced Version

An interactive memory card matching game built with vanilla JavaScript, HTML, and CSS. This is an enhanced version of the classic memory game tutorial with additional features including sound effects, victory modal, and peek functionality.

## 🎯 About the Game

Match pairs of cards by remembering their positions! Flip two cards at a time to find matching pairs. The game features 12 cards (6 pairs) with JavaScript framework logos.

## ✨ Features

### Original Features (from tutorial)
- 🎴 **12 Memory Cards** - 6 pairs of JavaScript framework logos
- 🔄 **3D Flip Animation** - Smooth card flipping with CSS transforms
- 🎲 **Card Shuffling** - Cards are randomly shuffled on each game
- 🎨 **Beautiful UI** - Modern design with blue gradient theme

### Our Enhancements
- 🔊 **Sound Effects** - Audio feedback for clicks, matches, mismatches, and victory
- 🎉 **Victory Modal** - Congratulations screen when all pairs are matched
- 👁️ **Peek Feature** - Button to preview all cards for 3 seconds
- 🔇 **Sound Toggle** - Mute/unmute button in the top-right corner
- 🎵 **Victory Fanfare** - Special sound when completing the game
- 🔁 **Play Again** - Easy restart functionality

## 🚀 How to Play

1. Open `index.html` in your web browser
2. Click the **👁️ Peek** button (top-left) to see all cards for 3 seconds (optional)
3. Click on cards to flip them and find matching pairs
4. Match all 6 pairs to win!
5. Click **Play Again** in the victory modal to restart

## 🎮 Controls

- **Click Cards** - Flip cards to reveal their content
- **👁️ Peek Button** - Show all cards for 3 seconds
- **🔊 Sound Toggle** - Enable/disable sound effects

## 🛠️ Technologies Used

- **HTML5** - Semantic structure
- **CSS3** - Styling, animations, and 3D transforms
- **JavaScript (ES6+)** - Game logic and interactivity
- **Web Audio API** - Sound effects generation

## 📚 Original Tutorial

This game is based on the excellent tutorial by Marina Ferreira:

- **📖 Tutorial:** [Memory Game - Vanilla JavaScript](https://marina-ferreira.github.io/tutorials/js/memory-game/)
- **📂 Original Repo:** [Memory Game Repository](https://github.com/marina-ferreira/memory-game)
- **🎬 Video Tutorial:** [Code Sketch Channel](https://www.youtube.com/channel/UCvjgXvBlbQiydffZU7m1_aw)

## 🔧 Our Modifications

### 1. Sound System
- **Web Audio API Integration** - Programmatically generated sound effects
- **Click Sound** - Short beep (400Hz) when clicking cards
- **Match Sound** - Pleasant two-tone melody (C-E notes) when cards match
- **Mismatch Sound** - Lower tone (200Hz sawtooth) when cards don't match
- **Victory Sound** - Fanfare (C-E-G-C chord progression) when game is completed
- **Sound Toggle** - Button to enable/disable all sounds

### 2. Victory Modal
- **Congratulations Screen** - Appears when all pairs are matched
- **High Contrast Design** - White text on blue gradient for readability
- **Smooth Animations** - Fade-in and slide-in effects
- **Play Again Button** - Resets and shuffles cards for a new game

### 3. Peek Feature
- **3-Second Preview** - Shows all unmatched cards
- **Smart Display** - Only shows cards that haven't been matched yet
- **Button Disabled During Peek** - Prevents multiple simultaneous peeks
- **Card Interaction Blocked** - Cards can't be clicked during peek

### 4. Code Improvements
- **Matched Cards Tracking** - Uses Set to track matched pairs
- **State Management** - Better handling of game states (peeking, locked board)
- **Event Listener Management** - Proper cleanup and reset on game restart

## 📁 Project Structure

```
memory-game/
├── index.html          # Main HTML structure
├── styles.css          # Game styling and animations
├── scripts.js          # Game logic and enhancements
├── README.md           # This file
└── ../img/             # Card images (parent directory)
    ├── react.svg
    ├── angular.svg
    ├── ember.svg
    ├── vue.svg
    ├── backbone.svg
    ├── aurelia.svg
    └── js-badge.svg
```

## 🎨 Design Features

- **Summer Color Scheme** - Blue gradient background (#060AB2 to #1C7CCC)
- **3D Card Flip** - CSS perspective and transform for realistic card flipping
- **Smooth Transitions** - All animations use CSS transitions
- **Responsive Layout** - Fixed-size game board (640x640px)
- **Hover Effects** - Interactive buttons with visual feedback

## 🔒 Browser Compatibility

- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Mobile browsers (with touch support)

## 📝 License

This project is based on Marina Ferreira's tutorial and is open for educational purposes.

## 🙏 Acknowledgments

- **Marina Ferreira** - Original tutorial and design
- **Code Sketch** - Video tutorial and inspiration
- All contributors to the original memory game tutorial

## 🎯 Learning Concepts Demonstrated

- DOM manipulation
- Event handling
- CSS 3D transforms
- Web Audio API
- State management
- Set data structures
- setTimeout and async operations
- CSS animations and transitions

---

**Enjoy playing the Memory Game! 🎉**

