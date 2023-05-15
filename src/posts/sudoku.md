After completing a larger project, I wanted to create something fun and simple. I also wanted to challenge myself a bit and see if I could develop an _algorithm_. With these objectives in mind, I came up with something that had never been done before: a Sudoku game!

My goal was to design a single-page application that generates a new Sudoku grid each time a new game is started. Additionally, I wanted players to be able to select different difficulty levels and maintain their personal high scores. Here's an example of a freshly generated Sudoku grid:

![Sudoku 1](/images/posts/sudoku1.jpg)

When starting a new game, a timer begins running and is displayed in the top bar alongside your current high score. And the most exciting part of the game is that whenever you surpass your previous high score, the screen fills with **confetti**, delivering that instant dopamine rush we all crave!

![Sudoku 2](/images/posts/sudoku2.jpg)

Now, let me explain how the algorithm for generating a Sudoku grid works. First, it creates a complete 9x9 Sudoku grid that is in accordance with the Sudoku rules. To achieve this, I used a backtracking algorithm. Next, the algorithm removes a certain number of cells from the grid based on the selected difficulty. For each cell it removes, it verifies if the puzzle remains solvable.  
If the algorithm cannot remove the specified number of cells while maintaining solvability, it starts over again.

I must admit that this algorithm may not be particularly efficient. In fact, if you are more experienced in this field, the source code would probably hurt your eyes. Nonetheless, the main purpose of this project was to have fun and learn something new. And in that regard, it was a success!
