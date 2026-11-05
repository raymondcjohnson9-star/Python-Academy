// Guided learning and real-world Python workflows. These are instructional checklists, not AI features.
window.pythonAcademyWorkflows = [
 {id:"learn-topic",category:"Guided learning",title:"Master a Python topic",description:"A repeatable routine for learning each new concept before moving ahead.",steps:[
  {title:"Understand the idea",detail:"Read the lesson from beginning to end. Write down what the concept does and when you would use it.",example:"Ask yourself: What problem does this Python feature solve?"},
  {title:"Study and run the example",detail:"Read the example line by line, type it into the playground, and run it. Change one value and predict what will happen.",example:"Change the values in a print() or calculation example and run it again."},
  {title:"Complete the exercises",detail:"Attempt all three lesson exercises without copying the example. If you get stuck, revisit the explanation and try again.",example:"Explain your solution in your own words."},
  {title:"Pass the knowledge check",detail:"Answer the lesson quiz. If the answer is incorrect, review the relevant section and retry. Only move on when you understand why the answer is correct.",example:"You should be able to explain the concept, not just remember an answer."}
 ]},
 {id:"daily-practice",category:"Guided learning",title:"A focused Python practice session",description:"A short session that turns reading into active coding practice.",steps:[
  {title:"Choose one small goal",detail:"Pick one concept you have already studied, such as strings, loops, lists or functions.",example:"Goal: write a program that counts the items in a list."},
  {title:"Write code from memory",detail:"Start with a blank editor and try to solve the goal without looking at the lesson example.",example:"Create a list, use len(), and print the result."},
  {title:"Run and inspect",detail:"Run your code. Read the output carefully and compare it with what you expected.",example:"If the output is different, check the values and the order of your instructions."},
  {title:"Reflect and improve",detail:"Make one improvement, then write down what you learned and what you still need to practise.",example:"Try a second input or add a useful message for the person using your program."}
 ]},
 {id:"review-retain",category:"Guided learning",title:"Review and remember",description:"Use spaced review to strengthen topics you have already completed.",steps:[
  {title:"Pick a completed topic",detail:"Choose a lesson from your completed course topics. Try to explain the main idea before opening it.",example:"Describe the difference between a list and a dictionary."},
  {title:"Revisit key examples",detail:"Read the explanation again and run the sample code. Notice anything you misunderstood before.",example:"Change an example so it solves a slightly different problem."},
  {title:"Try a fresh variation",detail:"Create a small variation of the exercise. Avoid simply copying the original answer.",example:"If the original program stores three names, adapt it to store five."},
  {title:"Record your confidence",detail:"Decide whether you can use the concept without help. If not, schedule another review after your next lesson.",example:"Mark the topic for another practice session if you are unsure."}
 ]},
 {id:"project-build",category:"Real-world coding",title:"Build a Python project",description:"A practical workflow for turning an idea into a working program.",steps:[
  {title:"Define the problem",detail:"Describe who the program is for, what problem it solves, and the smallest useful version you can build.",example:"A contact book should let a user add a contact and view saved contacts."},
  {title:"Plan the features",detail:"Write a short feature list. Separate essential features from ideas that can wait until later.",example:"First version: add, list and search contacts."},
  {title:"Break it into functions",detail:"Split the program into small tasks. Give each function one clear responsibility and decide what information it needs.",example:"add_contact(), list_contacts(), and search_contacts()."},
  {title:"Build one feature at a time",detail:"Write a small amount of code, run it, and check it before adding the next feature.",example:"Get adding and listing contacts working before adding search."},
  {title:"Test and improve",detail:"Try normal inputs, empty inputs and unexpected values. Fix problems and make the program easier to use.",example:"Check what happens when a contact name is blank."}
 ]},
 {id:"debug-cycle",category:"Real-world coding",title:"Find and fix a bug",description:"A calm, repeatable method for understanding errors instead of guessing.",steps:[
  {title:"Reproduce the problem",detail:"Run the program again and note exactly what action or input causes the problem.",example:"Write down the input and the output you actually received."},
  {title:"Read the error message",detail:"Look at the error type and the line number. Read the final line of a Python traceback first, then inspect the relevant code.",example:"A NameError often means a name was misspelled or used before it was defined."},
  {title:"Check one cause at a time",detail:"Inspect nearby variable values, spelling, indentation and data types. Change only one likely cause at a time.",example:"Use print() temporarily to inspect a value before the failing line."},
  {title:"Retest the fix",detail:"Run the same steps that originally caused the problem. Then test a normal case and an edge case.",example:"Confirm that the bug is gone and that working features still work."}
 ]},
 {id:"project-finish",category:"Real-world coding",title:"Test and finish a project",description:"Prepare a small Python project so another person can understand and run it.",steps:[
  {title:"Check the main features",detail:"Make a checklist of the features and test each one from the user's point of view.",example:"For a quiz app, test starting, answering, scoring and finishing a quiz."},
  {title:"Handle likely errors",detail:"Check missing values, incorrect input and unavailable files. Show clear messages instead of confusing crashes where practical.",example:"Ask again when a user enters text where a number is expected."},
  {title:"Organise and explain the code",detail:"Use meaningful names, small functions and comments where they clarify a decision. Remove temporary debugging output.",example:"Add a README explaining what the app does and how to run it."},
  {title:"Do a final run-through",detail:"Start the program from a clean state and follow the instructions as a new user would.",example:"Check that the setup steps and sample usage in the README are accurate."}
 ]}
];