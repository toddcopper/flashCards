# Word Guessing Game: Spaceman 🚀

A fun, space-themed word guessing game where players save an astronaut from abduction by correctly guessing a space-related word.

---

## User Stories
1. **As a player**, I want to guess letters to reveal the hidden word so that I can win the game.
2. **As a player**, I want to see how many guesses I have left so that I can plan my moves.
3. **As a player**, I want to see a visual representation of the UFO, beam, and astronaut to make the game more engaging.
4. **As a player**, I want a restart button so that I can play again easily.
5. **As a player**, I want to request a hint to help me guess the word.

---

## Pseudocode

### **Game Initialization**
1. Define the list of possible words.
2. Randomly select a word for the current round.
3. Initialize state variables:
    - `guessesLeft` → The number of incorrect guesses allowed.
    - `currentWord` → The word being guessed (displayed as underscores).
    - `guessedLetters` → An array to track the letters guessed by the player.
4. Render the initial game state:
    - Display underscores for the word.
    - Display the UFO, beam, and astronaut.

### **Player Guess Logic**
1. When a player clicks a letter:
    - Check if the letter has already been guessed.
    - If not guessed:
        - Add the letter to `guessedLetters`.
        - Check if the letter exists in `currentWord`.
            - **If correct**: Reveal the letter in the word.
            - **If incorrect**: Decrement `guessesLeft` and increase the beam’s opacity.
2. Check for win or loss:
    - **Win Condition**: All letters in the word have been guessed.
    - **Loss Condition**: `guessesLeft` reaches 0.

### **Rendering**
1. Update the word display with correctly guessed letters.
2. Update the visual state of the UFO, beam, and astronaut based on `guessesLeft`.
3. Display appropriate messages for win/loss.

### **Restart Game**
1. Reset all state variables to their initial state.
2. Randomly select a new word.
3. Re-render the initial game state.

### **Hint Functionality**
1. When the hint button is clicked:
    - Display an image or clue related to the word.
    - Disable the hint button after use.

---

## Project Setup

### **File Structure**
