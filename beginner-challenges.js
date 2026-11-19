// Graded output-based practice for the 12 individually authored beginner lessons.
// Each check runs learner code in a fresh Python namespace and compares its printed output.
window.pythonAcademyBeginnerChallenges = [
[
{prompt:"Display the name Asta with print().",starter:"# Write a print() statement here",stdin:"",expected:"Asta"},
{prompt:"Display two sentences on separate lines.",starter:"# Use two print() statements",stdin:"",expected:"Hello, Python!\nKeep learning."},
{prompt:"Add a comment, then display a message. Comments should not appear in the output.",starter:"# Add your comment and print() statement",stdin:"",expected:"Comments do not display"}
],
[
{prompt:"Create a city variable containing Lagos, then display it.",starter:"# Create the city variable and print it",stdin:"",expected:"Lagos"},
{prompt:"Create two number variables, add them and display the result.",starter:"# Store 7 and 8 in variables, then print their sum",stdin:"",expected:"15"},
{prompt:"Give a variable a value, change that value, then display the updated value.",starter:"# Create a variable, update it, and print it",stdin:"",expected:"15"}
],
[
{prompt:"Store the word Python and display how many characters it contains using len().",starter:"# Store a word and use len()",stdin:"",expected:"6"},
{prompt:"Convert the word academy to uppercase and display it.",starter:"# Use the upper() string method",stdin:"",expected:"ACADEMY"},
{prompt:"Join the first name Ada and surname Lovelace with one space between them.",starter:"# Join two strings with a space",stdin:"",expected:"Ada Lovelace"}
],
[
{prompt:"Calculate the cost of four items priced at 250 each.",starter:"# Store the price and quantity, then multiply",stdin:"",expected:"1000"},
{prompt:"Use floor division and remainder to divide 17 into groups of 5.",starter:"# Display 17 // 5 and 17 % 5 on separate lines",stdin:"",expected:"3\n2"},
{prompt:"Convert the text 24 to an integer, add 6, and display the result.",starter:"# Use int() to convert the text",stdin:"",expected:"30"}
],
[
{prompt:"Ask for a name with input() and display a greeting. The test input is Asta.",starter:"# Read one line with input(), then print a greeting",stdin:"Asta",expected:"Hello, Asta"},
{prompt:"Ask for two whole numbers, convert them and display their sum. The test inputs are 8 and 4.",starter:"# Call input() twice and convert both values with int()",stdin:"8\n4",expected:"12"},
{prompt:"Ask for a favourite subject and use it in a sentence. The test input is Python.",starter:"# Read a subject with input() and include it in a sentence",stdin:"Python",expected:"I enjoy Python"}
],
[
{prompt:"Read an age and display Adult when it is at least 18. The test input is 20.",starter:"# Convert input() to int(), then use if and else",stdin:"20",expected:"Adult"},
{prompt:"Read a number and display True if it is between 1 and 10 inclusive. The test input is 7.",starter:"# Convert the input to int() and check both limits",stdin:"7",expected:"True"},
{prompt:"Read a score and display Pass for 50 or above, otherwise Try again. The test input is 65.",starter:"# Convert the score to int() and use if/else",stdin:"65",expected:"Pass"}
],
[
{prompt:"Use a for loop to display the numbers 1 through 5, one per line.",starter:"# Use range() in a for loop",stdin:"",expected:"1\n2\n3\n4\n5"},
{prompt:"Use a loop to calculate and display the sum of the numbers 1 through 5.",starter:"# Start a total at zero, then add each number in a loop",stdin:"",expected:"15"},
{prompt:"Use a while loop to display 3, 2, 1 on separate lines.",starter:"# Set a counter, loop while it is positive, and decrease it",stdin:"",expected:"3\n2\n1"}
],
[
{prompt:"Create a list of three foods and display the second item.",starter:"# Make a list and access its second item",stdin:"",expected:"beans"},
{prompt:"Create a list of three foods, append plantain, and display the whole list.",starter:"# Create a list, use append(), then print the list",stdin:"",expected:"['rice', 'beans', 'yam', 'plantain']"},
{prompt:"Loop through a list of three foods and display each food on its own line.",starter:"# Create a list and use a for loop",stdin:"",expected:"rice\nbeans\nyam"}
],
[
{prompt:"Write a function that accepts a name and returns a greeting. Call it with Ada.",starter:"# Define a function with a name parameter and return a greeting",stdin:"",expected:"Hello, Ada"},
{prompt:"Write a function that accepts two numbers and returns their product. Test it with 6 and 7.",starter:"# Define a function with two parameters and return their product",stdin:"",expected:"42"},
{prompt:"Write a function with a default name of Learner. Call it once without an argument and once with Asta.",starter:"# Define a function with a default parameter and call it twice",stdin:"",expected:"Welcome, Learner\nWelcome, Asta"}
],
[
{prompt:"Create a book dictionary with title and author keys, then display the title.",starter:"# Create a dictionary and read its title key",stdin:"",expected:"Things Fall Apart"},
{prompt:"Create a book dictionary, add its year, update its author, and display the year and author on separate lines.",starter:"# Add a key and update an existing dictionary value",stdin:"",expected:"1958\nChinua Achebe"},
{prompt:"Loop through a dictionary's items and display each key and value as key: value.",starter:"# Create a two-item dictionary and loop through .items()",stdin:"",expected:"title: Things Fall Apart\nauthor: Chinua Achebe"}
],
[
{prompt:"Write the message Study Python to a file using with open(), then display Saved.",starter:"# Open a file in write mode, write a message, and print Saved",stdin:"",expected:"Saved"},
{prompt:"Write Study Python to a file, read the file back, and display its contents.",starter:"# Use with open() to write, then open the same file to read",stdin:"",expected:"Study Python"},
{prompt:"Try converting the text hello to an integer and handle ValueError with a clear message.",starter:"# Use try, int(), and except ValueError",stdin:"",expected:"Please enter a valid number"}
],
[
{prompt:"Create a Student class with a name attribute, make one student called Ada, and display the name.",starter:"# Define a class with __init__ and create an object",stdin:"",expected:"Ada"},
{prompt:"Add a greeting method to Student and display the greeting for Ada.",starter:"# Define __init__ and a method that returns a greeting",stdin:"",expected:"Hello, Ada"},
{prompt:"Create two Student objects and display both greetings, for Ada and Ben.",starter:"# Create a Student class with a greeting method, then two objects",stdin:"",expected:"Hello, Ada\nHello, Ben"}
]
];
