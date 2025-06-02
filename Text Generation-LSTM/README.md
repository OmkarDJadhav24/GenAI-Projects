# Text Generation using LSTM

This project demonstrates how to build a word-level **text generation model** using **LSTM (Long Short-Term Memory)** neural networks with Keras and TensorFlow. It covers data preprocessing, sequence modeling, training an LSTM model, and generating new text based on a seed phrase.

---

## Project Overview

- **Objective**: Generate meaningful text by learning word patterns from a small dataset using LSTM.
- **Technique**: Word-level language modeling.
- **Frameworks**: TensorFlow / Keras

---

## Workflow

1. **Dataset Preparation**  
   - A short dummy paragraph is used as training data.
   - Text is tokenized and converted into input sequences.

2. **Sequence Padding**  
   - All input sequences are padded to the same length for model input.

3. **Model Architecture**  
   - `Embedding Layer`: Converts word indices into dense vectors.
   - `LSTM Layer`: Learns the sequence patterns.
   - `Dense Output`: Predicts the next word in the sequence.

4. **Model Training**  
   - Trained using categorical crossentropy and Adam optimizer.
   - Trains the model to predict the next word given a sequence of previous words.

5. **Text Generation**  
   - A seed sentence is passed to the trained model.
   - The model predicts the next word step-by-step to generate a full sentence.

---

## Sample Output

**Seed Text**: `"She walked to"`  
**Generated**: `"She walked to the village with her heart full of dreams"`

(*Actual output depends on training data and model weights*)

---

## Technologies Used

- Python
- TensorFlow & Keras
- NumPy
- NLTK / Keras Tokenizer

---

## Learnings

- How to build LSTM models for text generation.
- Importance of sequence padding and tokenization.
- Using embedding layers to handle word representations.
- Generating text using trained deep learning models.

---

## Future Enhancements

- Add temperature sampling for more diverse outputs.
- Train on a larger corpus (e.g. Gutenberg books).
- Experiment with character-level models.

---



