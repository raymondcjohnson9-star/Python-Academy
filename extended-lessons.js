(function(){
const snippets={
"Tuples in depth":'point = (4, 9)\nx, y = point\nprint(x, y)',
"Sets and set operations":'a = {1, 2, 3}\nb = {3, 4}\nprint(a & b)\nprint(a | b)',
"List, dictionary and set comprehensions":'squares = [n*n for n in range(5)]\nprint(squares)',
"Function arguments: *args and **kwargs":'def show(*args, **kwargs):\n    print(args)\n    print(kwargs)\nshow(2, name="Ada")',
"Lambda functions":'double = lambda n: n * 2\nprint(double(6))',
"Recursion":'def countdown(n):\n    if n <= 0: return\n    print(n)\n    countdown(n-1)\ncountdown(3)',
"JSON data":'import json\ndata = {"name": "Ada"}\nprint(json.loads(json.dumps(data)))',
"CSV files":'import csv\nfrom io import StringIO\nf = StringIO("name,score\\nAda,90")\nprint(list(csv.DictReader(f)))',
"Type hints":'def total(price: float, count: int) -> float:\n    return price * count\nprint(total(2.5, 4))',
"Generators and yield":'def values():\n    yield 1\n    yield 2\nprint(list(values()))',
"Decorators":'def announce(fn):\n    def wrapper():\n        print("Start")\n        fn()\n    return wrapper\n@announce\ndef hello(): print("Hello")\nhello()',
"Database fundamentals with SQLite":'import sqlite3\ndb = sqlite3.connect(":memory:")\ndb.execute("CREATE TABLE notes (text TEXT)")\ndb.execute("INSERT INTO notes VALUES (?)", ("Study",))\nprint(db.execute("SELECT text FROM notes").fetchone())',
"Command-line calculator":'def add(a, b): return a + b\nprint(add(12, 5))',
"Number guessing game":'secret = 7\nguess = 5\nprint("Correct" if guess == secret else "Try again")',
"To-do list application":'tasks = ["Study", "Practise"]\ntasks.append("Build")\nfor task in tasks: print(task)',
"Inventory management system":'stock = {"pens": 12, "books": 5}\nstock["pens"] -= 1\nprint(stock)'
};
const concepts=[
[/tuple|set/,"Tuples and sets are collection types. Tuples are ordered and immutable; sets contain unique values and support operations such as union and intersection."],
[/comprehension/,"Comprehensions build a collection from an iterable in a compact expression. Add a condition to filter values."],
[/args|kwargs/,"*args gathers extra positional arguments into a tuple, while **kwargs gathers named arguments into a dictionary."],
[/lambda/,"A lambda is a small anonymous function containing one expression. Use def for multi-step logic."],
[/scope|namespace/,"Scope describes where a name can be accessed. Python resolves local, enclosing, global and built-in names."],
[/recursion/,"Recursion occurs when a function calls itself. Every recursive design needs a base case."],
[/date|time/,"The datetime module provides date and time types for representing moments and calculating intervals."],
[/regular expression/,"Regular expressions describe text patterns. The re module can search, match, split and replace text."],
[/csv/,"CSV stores tabular data. The csv module handles delimiters and quoted values safely."],
[/json/,"JSON is a text format for structured data. json.loads parses JSON and json.dumps creates JSON text."],
[/path|directory|file/,"Python provides pathlib and file tools for reading, writing and organising files and folders."],
[/exception|error/,"Exceptions represent errors or unusual conditions. Catch specific exception types and provide useful recovery behaviour."],
[/module|package|pip|environment|dependenc/,"Modules and packages organise reusable code. pip installs dependencies and virtual environments isolate them per project."],
[/type hint/,"Type hints document expected value types and help editors and static analysis tools. They do not automatically validate values at runtime."],
[/class|object|inheritance|property|method|dunder/,"Classes define objects with data and behaviour. Use inheritance for specialisation and composition to combine collaborating objects."],
[/iterator|generator|yield/,"Iterators produce values one at a time. Generators use yield to create iterators lazily."],
[/decorator|closure/,"Decorators wrap functions to add behaviour. Closures remember values from an enclosing function."],
[/context manager/,"Context managers set up and clean up resources. The with statement ensures cleanup happens reliably."],
[/concurren|thread|process|async/,"Concurrency lets tasks make progress during overlapping periods. Choose threading, processes or async according to the workload."],
[/profil|performance/,"Profiling measures where time is spent. Measure first, optimise the slow part, then measure again."],
[/test|debug|logging/,"Testing checks expected behaviour. Debugging investigates unexpected behaviour, and logging records useful runtime information."],
[/git|version control/,"Git records project changes as commits so you can compare, review and restore earlier versions."],
[/api|http|request|response/,"APIs define how programs exchange requests and responses. Read documentation, handle errors and respect service limits."],
[/database|sql|sqlite/,"Databases store structured information. SQL queries and updates relational data; parameterised queries protect user-supplied values."],
[/security|secret|configuration/,"Secure programs protect credentials, validate input, use trusted dependencies and avoid exposing private information."],
[/deploy|architecture|structure|maintain|quality|document|packag/,"Professional projects use clear structure, documentation, automated checks and repeatable deployment steps."],
[/project|application|calculator|game|tracker|manager|organiser|portfolio|quiz|journal|weather|website|desktop|flask|rest api/,"A complete application combines input, processing, data storage, error handling and a clear user experience. Build and test one feature at a time."]
];
function concept(t){for(const pair of concepts){if(pair[0].test(t.toLowerCase()))return pair[1];}return "This topic adds a useful Python skill. Study its purpose, run the example, change one value at a time and test different inputs.";}
function build(t,level){const c=concept(t);const code=snippets[t]||('# '+t+'\nvalues = ["learn", "practise", "review"]\nfor value in values:\n    print(value.title())');return {title:t,desc:'Learn '+t.toLowerCase()+' with explanations, a runnable example and exercises.',intro:'In this '+level+' lesson, learn '+t.toLowerCase()+', when it is useful and how to apply it in a small program.',sections:[["Core idea",c],["How to practise","Run the example, change one part at a time and compare the output. Test unusual inputs and use clear names for variables and functions."]],code:code,explain:c,question:'Which approach is best when learning '+t.toLowerCase()+'?',options:['Understand the idea, practise it and test the result','Copy code without reading it','Assume code works without testing'],answer:0};}
const all=[],extra=[];let index=0;window.pythonCurriculum.forEach(level=>level.topics.forEach(topic=>{if(index>=12){all.push(build(topic,level.level));const c=concept(topic);extra.push({extra:c+' Run the example with different values and read any error messages carefully.',tasks:['Explain the main idea behind '+topic.toLowerCase()+' in your own words.','Run and modify the example for '+topic.toLowerCase()+'; record what changed.','Create a small independent exercise using '+topic.toLowerCase()+' and test an unusual input.']});}index++;}));
window.pythonAcademyExtendedLessons=all;window.pythonAcademyExtendedExtras=extra;
})();