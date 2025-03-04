## Langton's Ant
#### What is the Langton's Ant?
Langton's ant is a two-dimensional Turing machine with a very simple set of rules but complex emergent behavior. It was invented by Chris Langton in 1986 and runs on a square lattice of black and white cells. The idea has been generalized in several different ways, such as turmites which add more colors and more states. (from [Wikipedia: Langton's Ant](https://en.wikipedia.org/wiki/Langton%27s_ant))
#### Rules
Squares on a plane are colored variously either black or white. We arbitrarily identify one square as the "ant". The ant can travel in any of the four cardinal directions at each step it takes. The "ant" moves according to the rules below:
-  At a white square, turn 90° clockwise, flip the color of the square, move forward one unit
-  At a black square, turn 90° counter-clockwise, flip the color of the square, move forward one unit

Langton's ant can also be described as a cellular automaton, where the grid is colored black or white and the "ant" square has one of eight different colors assigned to encode the combination of black/white state and the current direction of motion of the ant.(from [Wikipedia: Langton's Ant](https://en.wikipedia.org/wiki/Langton%27s_ant))

#### What is this project?
This is a free-time project I made in 2023. The goal was to create a simulation of Langton's Ant in JavaScript using [p5.js](https://p5js.org/). I used a free ant PNG asset (unfortunately I can't find the source) to make the simulaiton cleaner visually.

The project deployment is available [here](https://marekblvn.github.io/langtons-ant/). When you open the page, the simulation starts. Unlike in my [simulation of Conway's Game of Life](https://github.com/marekblvn/game-of-life) there are no controls for the simulation.


<br />
<br />
Marek Balvin, 2025
