[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/DlFCTo_q)
[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-718a45dd9cf7e7f842a935f5ebbe5719a5e09af4491e668f4dbf3b35d5cca122.svg)](https://classroom.github.com/online_ide?assignment_repo_id=14047049&assignment_repo_type=AssignmentRepo)
### 2024 MDDN342 Project 1: Parameterised Space
Depending on how my initial experiments go my idea for this project may change. At this point I am either planning on doing a background with only certain elements moving such as a room with a window in it and maybe a fireplace, or a production line in a industrial factory - or something more shape based with flowers and vines because I'd like to work on my skills using bezier curves and such.
On second thoughts I don't really mind what I make as long as it's reasonably challenging and I'm using some new techniques.

03/03/2024
Today I am going to try experimenting with different ideas and see which is the most interesting.
Ok so the industrial line idea is completely out the window at this point. I have reverted to flowers and sine waves. Well at this point it's mostly just vines and floaty orb things but the goal is to add flowers that grow as they rise up the vine and blossom at the top? Should be interesting to do I think.

05/03/2024
I added in the leaves today, although there are still some 'popping' issues between each second. I think after this is fixed I need to go back and paramaterise everything, clean up my code, and rename some of my more obscure variables before they stop making sense. I have also noticed that when I resize the canvas, although the code elements are all still in the correct places, the timing of the sine waves are much faster - which breaks up the nice rhythm of the wallpaper.
--
Also I've given up on the leaves for now, I will come back to it once I've thought of a solution to the timing problem.

07/03/24
Just renaming variables and sorting out other coding parts.

09/03/24
I think I finally figured out how to make the leaves work so they fit nicely in the sine wave and rotate without jumping everywhere. I did have to start the leaf code from scratch but i think it was worth it. Ideally the leaves would be less dense but I kind of like them as they are for now.

12/03/24
Today I added in the lerpColor function to made the leaves colour so that the light side is always facing up to give the illusion of sunlight from above. I have also started on designs for the flower. At the moment they are flowers like Ivy but ideally I will up with something that looks like it is blooming more. Alternatively, I might consider adding in butterflies flying up between the vines. Then again, I think because most of the composition is moving all the time, some whitespace might be nice to keep.

Things I need to do:
- Learn about easing function - add it to leaves and flowers maybe
- Clean up code - create functions and add commenting
- experiment with flower types - try circular design
- Revamp all code to make it responsive to size - including sin waves etc.

14/03/24
I haven't really made much progress with my design, I did decide to add in a lattice in the background, just for a bit of visual complexity - and it makes sense if the vines are growing up it. Next I might experiment with the background further and the motion blur etc - go and rewatch the lectures from this week and add some new concepts.

18/03/24
Finally! I have triumped over the canvas resizing shenanagins. It was sort of straightforward now that I have done it. It might need further tweaking depending on whether it's only these three sizes needed or whether it needs to be 'resizeable' to any canvas size. But for now it's good. I also made some changes to my lotus flower. Going to come back to this later and add some new things.


Pages Link: https://23-mddn342.github.io/parameterised-space-RitaClose/ 

<p><iframe style="border: 0px #ffffff none;" title="embedded content" src="https://23-mddn342.github.io/parameterised-space-RitaClose/" width="90%" height="540px" name="Rita" allowfullscreen="allowfullscreen" data-mce-fragment="1"></iframe></p>
