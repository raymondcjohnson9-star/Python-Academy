const lessons = [
{title:"Getting started with Python",desc:"Meet Python, understand what programming is and run your first line of code.",intro:"Welcome to Python! In this lesson, you will learn what Python is, what programmers use it for and how a simple Python instruction works.",sections:[["What is Python?","Python is a programming language. You write instructions in Python, and the computer follows them. Python is used for websites, automation, data, games and many other projects."],["Your first Python instruction","The print() function displays information on the screen. It is one of the easiest ways to begin." ]],code:'print("Hello, world!")',explain:"This tells Python to display the words Hello, world! The text is inside quotation marks, and print() displays it.",question:"What does print() do?",options:["It displays information on the screen","It deletes a file","It repeats code forever"],answer:0},
{title:"Variables and values",desc:"Store information and give it a name.",intro:"Variables let your program remember information. You can store text, numbers and other values in them.",sections:[["Creating a variable","Use an equals sign (=) to give a value a name. In Python, you do not need to declare the variable type first."],["Changing a value","You can assign a new value to a variable whenever your program needs to update it."]],code:'name = "Asta"\nage = 15\nprint(name)\nprint(age)',explain:"name stores text and age stores a whole number. print() displays the values stored in them.",question:"Which line correctly stores the number 15 in age?",options:['age == 15','age = 15','15 = age'],answer:1},
{title:"Understanding strings",desc:"Work with text, quotation marks and useful string operations.",intro:"A string is text surrounded by quotation marks. Strings can contain names, sentences, spaces and symbols.",sections:[["Creating strings",'Use single or double quotation marks: message = "Hello" or message = \'Hello\'. Keep the opening and closing quotes matched.'],["Joining strings","The + operator can join strings together. This is called concatenation." ]],code:'first = "Hello"\nname = "Asta"\nmessage = first + ", " + name\nprint(message)',explain:"The + operator joins the three pieces of text into one string.",question:"Which value is a string?",options:["42",'"Python"',"True"],answer:1},
{title:"Numbers and calculations",desc:"Use integers, decimals and Python arithmetic operators.",intro:"Python can work with whole numbers and decimal numbers. You can use familiar mathematical operators in your programs.",sections:[["Number types","An integer (int) is a whole number such as 8. A float is a number with a decimal part, such as 3.5."],["Arithmetic operators","Python uses + for addition, - for subtraction, * for multiplication and / for division."]],code:'price = 120\nquantity = 3\ntotal = price * quantity\nprint(total)',explain:"Python multiplies 120 by 3 and displays 360.",question:"Which symbol means multiplication in Python?",options:["x","*","%"],answer:1},
{title:"Getting input from users",desc:"Make programs interactive with input().",intro:"The input() function pauses your program and lets someone type a response. The response is returned as a string.",sections:[["Ask a question","Put a prompt inside input() to tell the user what to enter."],["Convert input","If you need a number for calculations, convert the text using int() or float()."]],code:'name = input("What is your name? ")\nprint("Hello, " + name)',explain:"The program waits for a name, stores the typed text and then greets the user.",question:"What type of value does input() return by default?",options:["A string","An integer","A Boolean"],answer:0},
{title:"Making decisions with if",desc:"Use if, elif and else to make choices.",intro:"Conditional statements let a program choose what to do based on whether a condition is true or false.",sections:[["The if statement","Python runs the indented code under if only when its condition is True."],["More than one path","Use elif to check another condition and else for the remaining case. Indentation matters in Python."]],code:'age = 15\nif age >= 18:\n    print("Adult")\nelse:\n    print("Not an adult yet")',explain:"Python checks whether age is at least 18. If it is not, the else block runs.",question:"Which keyword handles the alternative when an if condition is false?",options:["repeat","else","then"],answer:1},
{title:"Loops: for and while",desc:"Repeat instructions without writing them again and again.",intro:"Loops repeat a block of code. A for loop is useful for going through a sequence; a while loop repeats while a condition remains true.",sections:[["The for loop","range(5) produces the numbers 0 to 4. The loop runs once for each number."],["The while loop","A while loop checks its condition before each repetition. Make sure something can change the condition so the loop can finish."]],code:'for number in range(3):\n    print(number)',explain:"This displays 0, then 1, then 2. The end value in range(3) is not included.",question:"How many times does range(4) repeat in a for loop?",options:["3 times","4 times","5 times"],answer:1},
{title:"Lists and collections",desc:"Keep multiple values together in one ordered collection.",intro:"A list stores several values in one variable. Lists keep their order and can be changed after they are created.",sections:[["Create a list","Put values inside square brackets and separate them with commas."],["Access and update items","List positions start at index 0. Use append() to add an item to the end of a list."]],code:'games = ["Minecraft", "Roblox"]\ngames.append("Python game")\nprint(games[0])',explain:"append() adds an item. games[0] accesses the first item, Minecraft.",question:"What is the index of the first list item?",options:["0","1","-1"],answer:0},
{title:"Functions",desc:"Organise reusable instructions with parameters and return values.",intro:"A function is a named block of code you can run whenever you need it. Functions help keep programs organised and reduce repeated code.",sections:[["Define a function","Use def followed by the function name and parentheses. The indented lines form the function body."],["Parameters and return","Parameters let you pass information into a function. return sends a result back to the code that called it."]],code:'def greet(name):\n    return "Hello, " + name\n\nprint(greet("Asta"))',explain:"greet() receives a name and returns a greeting. print() displays the returned text.",question:"Which keyword defines a function in Python?",options:["function","def","make"],answer:1},
{title:"Dictionaries",desc:"Store related information as key-value pairs.",intro:"A dictionary stores information using keys and values. It is useful when each piece of information has a label.",sections:[["Create a dictionary","Use curly braces with key: value pairs. Keys are used to look up their values."],["Read and update values","Access a value with its key, and assign a new value to update it."]],code:'person = {"name": "Asta", "age": 15}\nprint(person["name"])',explain:"The key name is used to retrieve the value Asta.",question:"Which brackets create a dictionary?",options:["[ ]","( )","{ }"],answer:2},
{title:"Files and error handling",desc:"Read and write files and respond to common errors.",intro:"Programs can save information in files. Error handling helps your program respond when something goes wrong.",sections:[["Working with files","The with open(...) pattern manages a file for you and closes it when the block finishes."],["Handling errors","Use try and except to handle errors that you expect might happen, such as a missing file or invalid number."]],code:'try:\n    number = int("hello")\nexcept ValueError:\n    print("Please enter a valid number")',explain:"The conversion raises a ValueError, so the except block runs instead of stopping the program unexpectedly.",question:"Which keyword starts an error-handling block?",options:["try","check","error"],answer:0},
{title:"Object-oriented Python",desc:"Learn classes, objects, attributes and methods.",intro:"Object-oriented programming groups related data and behaviour together. A class is a blueprint used to create objects.",sections:[["Classes and objects","A class defines the structure and behaviour that its objects can have."],["Attributes and methods","Attributes store information about an object. Methods are functions defined inside a class."]],code:'class Pet:\n    def __init__(self, name):\n        self.name = name\n\nmy_pet = Pet("Milo")\nprint(my_pet.name)',explain:"Pet is a class. my_pet is an object created from it, and name is an attribute.",question:"What is a class?",options:["A blueprint for creating objects","A type of loop","A file name"],answer:0}
];
const STORAGE_KEY = "pythonAcademyProgressV2";
let state = loadState();
let currentLesson = 0;
let selectedAnswer = null;
let taskChecks = [];
function loadState(){try{const s=JSON.parse(localStorage.getItem(STORAGE_KEY))||{};return {completed:Array.isArray(s.completed)?s.completed:[],lastLesson:Number.isInteger(s.lastLesson)?s.lastLesson:0,practiceDone:s.practiceDone||{}}}catch{return {completed:[],lastLesson:0,practiceDone:{}}}}
function saveState(){localStorage.setItem(STORAGE_KEY,JSON.stringify(state));renderProgress()}
function isUnlocked(index){return index===0||state.completed.includes(index-1)}
function firstIncomplete(){return lessons.findIndex((_,i)=>!state.completed.includes(i))}
function resumeIndex(){const first=firstIncomplete();return first===-1?lessons.length-1:Math.min(Math.max(state.lastLesson||0,0),first)}
function renderProgress(){
 const done=state.completed.length,pct=Math.round(done/lessons.length*100),next=resumeIndex();
 document.getElementById("completedCount").textContent=done+" of "+lessons.length+" lessons completed";
 document.getElementById("percentLabel").textContent=pct+"%";document.getElementById("progressLabel").textContent=pct+"% complete";document.getElementById("progressBar").style.width=pct+"%";
 document.getElementById("courseProgressText").textContent=done+" of "+lessons.length+" lessons completed";document.getElementById("coursePercent").textContent=pct+"%";document.getElementById("courseProgressBar").style.width=pct+"%";
 document.getElementById("resumeTitle").textContent=state.completed.length===lessons.length?"Course completed!":lessons[next].title;
 document.getElementById("resumeDescription").textContent=state.completed.length===lessons.length?"You have completed every lesson. Revisit any lesson for revision.":"Lesson "+(next+1)+" of "+lessons.length+" · "+lessons[next].desc;
 renderLessonLists();
}
function renderLessonLists(){
 const home=document.getElementById("homeLessons"),course=document.getElementById("courseList");home.innerHTML="";course.innerHTML="";
 lessons.forEach((lesson,i)=>{
  const done=state.completed.includes(i),unlocked=isUnlocked(i);
  const card=document.createElement("button");card.className="lesson-card";card.disabled=!unlocked;card.innerHTML='<span class="lesson-index">'+(done?'✓ COMPLETED':'LESSON '+String(i+1).padStart(2,'0'))+'</span><b>'+lesson.title+'</b><small>'+ (done?'Review lesson':unlocked?'Ready to learn':'Complete the previous lesson first')+'</small>';
  card.addEventListener("click",()=>openLesson(i));home.appendChild(card);
  const row=document.createElement("div");row.className="course-row"+(!unlocked?" locked":"");row.innerHTML='<span class="num">'+(done?'✓':String(i+1).padStart(2,'0'))+'</span><div class="course-info"><b>'+lesson.title+'</b><p>'+lesson.desc+'</p></div><button '+(!unlocked?'disabled':'')+'>'+(done?'Review':unlocked?'Start lesson':'Locked')+'</button>';
  row.querySelector("button").addEventListener("click",()=>openLesson(i));course.appendChild(row);
 });
}
function showView(name){document.querySelectorAll(".view").forEach(v=>v.classList.add("hidden"));document.getElementById(name+"View").classList.remove("hidden");document.querySelectorAll(".nav-item").forEach(b=>b.classList.toggle("active",b.dataset.view===name));document.getElementById("sidebar").classList.remove("open");}
function openLesson(index){
 if(!isUnlocked(index))return;
 currentLesson=index;selectedAnswer=null;taskChecks=(state.practiceDone[index]||[]).slice();state.lastLesson=index;saveState();showView("lesson");
 const l=lessons[index];document.getElementById("lessonNumber").textContent="LESSON "+String(index+1).padStart(2,"0");document.getElementById("lessonTitle").textContent=l.title;document.getElementById("lessonIntro").textContent=l.intro;
 let body="";l.sections.forEach(s=>body+='<h2>'+s[0]+'</h2><p>'+s[1]+'</p>');body+='<pre class="code-block"><code>'+escapeHtml(l.code)+'</code></pre><p class="callout">'+l.explain+'</p><p>Take a moment to type the example yourself and change a value to see what happens.</p>';document.getElementById("lessonBody").innerHTML=body;renderTopicExercises(index);document.getElementById("lessonCode").value=l.code;document.getElementById("lessonOutput").textContent="Your output will appear here.";
 document.getElementById("quizQuestion").textContent=l.question;const opts=document.getElementById("quizOptions");opts.innerHTML="";
 l.options.forEach((o,i)=>{const b=document.createElement("button");b.className="quiz-option";b.textContent=o;b.addEventListener("click",()=>{selectedAnswer=i;opts.querySelectorAll("button").forEach(x=>x.classList.remove("selected"));b.classList.add("selected");document.getElementById("quizFeedback").textContent="";updateTaskGate()});opts.appendChild(b)});
 document.getElementById("quizFeedback").textContent="";document.getElementById("checkAnswer").disabled=false;document.getElementById("completeLesson").disabled=!state.completed.includes(index)&&!(selectedAnswer===l.answer&&taskChecks.length===3&&taskChecks.every(Boolean));document.getElementById("completeLesson").textContent=state.completed.includes(index)?"Completed ✓":"Complete lesson ✓";
 document.getElementById("lessonProgressBar").style.width=Math.round(state.completed.length/lessons.length*100)+"%";document.getElementById("lessonProgressText").textContent=state.completed.length+" of "+lessons.length+" lessons completed";
 document.getElementById("previousLesson").disabled=index===0;
}

function renderTopicExercises(index){
 const detail=topicExtras[index],body=document.getElementById("lessonBody");
 const heading=document.createElement("h2");heading.textContent="Go deeper";
 const paragraph=document.createElement("p");paragraph.textContent=detail.extra;body.append(heading,paragraph);
 const panel=document.createElement("section");panel.className="topic-practice";
 panel.innerHTML='<p class="eyebrow">PRACTICE BEFORE MOVING ON</p><h2>Exercises for this topic</h2><p class="muted">Try each task in the Python playground above. Tick it after you have attempted it.</p><div id="topicTasks"></div><p id="taskProgress" class="task-progress"></p>';
 body.appendChild(panel);
 const host=panel.querySelector("#topicTasks");
 detail.tasks.forEach((task,i)=>{const label=document.createElement("label");label.className="task-item";const input=document.createElement("input");input.type="checkbox";input.checked=!!taskChecks[i];const span=document.createElement("span");span.textContent=task;input.addEventListener("change",()=>{taskChecks[i]=input.checked;state.practiceDone[index]=taskChecks.slice();saveState();updateTaskGate()});label.append(input,span);host.appendChild(label)});
 updateTaskGate();
}
function updateTaskGate(){
 const count=taskChecks.filter(Boolean).length,p=document.getElementById("taskProgress");if(p)p.textContent=count+" of 3 exercises attempted";
 const button=document.getElementById("completeLesson");if(button)button.disabled=state.completed.includes(currentLesson)?false:!(selectedAnswer===lessons[currentLesson].answer&&count===3);
}

function escapeHtml(s){return s.replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]))}
document.querySelectorAll(".nav-item").forEach(b=>b.addEventListener("click",()=>showView(b.dataset.view)));
document.querySelectorAll("[data-goto]").forEach(b=>b.addEventListener("click",()=>showView(b.dataset.goto)));
document.getElementById("resumeBtn").addEventListener("click",()=>openLesson(resumeIndex()));
document.getElementById("backToCourse").addEventListener("click",()=>showView("course"));
document.getElementById("previousLesson").addEventListener("click",()=>{if(currentLesson>0)openLesson(currentLesson-1)});
document.getElementById("checkAnswer").addEventListener("click",()=>{const l=lessons[currentLesson],f=document.getElementById("quizFeedback");if(selectedAnswer===null){f.textContent="Choose an answer first.";f.style.color="#a36b25";return}if(selectedAnswer===l.answer){f.textContent="Correct! You understand this idea.";f.style.color="#176b48";updateTaskGate()}else{f.textContent="Not quite. Review the lesson and try again.";f.style.color="#b34d42"}});
document.getElementById("completeLesson").addEventListener("click",()=>{if(!state.completed.includes(currentLesson)){if(selectedAnswer!==lessons[currentLesson].answer||taskChecks.length!==3||!taskChecks.every(Boolean))return;state.completed.push(currentLesson);state.completed.sort((a,b)=>a-b)}const next=firstIncomplete();state.lastLesson=next===-1?currentLesson:next;saveState();if(next!==-1&&next!==currentLesson)openLesson(next);else{showView("course")}});
document.getElementById("showHint").addEventListener("click",()=>document.getElementById("practiceHint").classList.toggle("hidden"));
document.getElementById("showSolution").addEventListener("click",()=>document.getElementById("practiceSolution").classList.toggle("hidden"));
document.getElementById("menuBtn").addEventListener("click",()=>document.getElementById("sidebar").classList.toggle("open"));
renderProgress();

// Browser Python runtime: Pyodide is downloaded only when the learner first runs code.
let pyodidePromise = null;
async function getPythonRuntime(statusElement) {
  if (window.pyodide) return window.pyodide;
  if (!pyodidePromise) {
    statusElement.textContent = "Downloading the Python engine… internet is needed the first time.";
    pyodidePromise = new Promise((resolve, reject) => {
      const script = document.createElement("script");
      script.src = "https://cdn.jsdelivr.net/pyodide/v0.27.7/full/pyodide.js";
      script.onload = async () => {
        try { resolve(await loadPyodide()); }
        catch (error) { reject(error); }
      };
      script.onerror = () => reject(new Error("Could not download Python. Check your internet connection and try again."));
      document.head.appendChild(script);
    }).catch(error => { pyodidePromise = null; throw error; });
  }
  return pyodidePromise;
}
async function runPython(source, outputElement, statusElement, button) {
  button.disabled = true;
  outputElement.textContent = "Running…";
  try {
    const py = await getPythonRuntime(statusElement);
    let output = "";
    py.setStdout({ batched: text => { output += text; } });
    py.setStderr({ batched: text => { output += text; } });
    await py.runPythonAsync(source);
    outputElement.textContent = output.trimEnd() || "(No output. Your code ran successfully.)";
    statusElement.textContent = "Python is ready in your browser.";
  } catch (error) {
    outputElement.textContent = String(error);
    statusElement.textContent = "Could not run code. Check the message and try again.";
  } finally {
    button.disabled = false;
  }
}
document.getElementById("runLessonCode").addEventListener("click", () =>
  runPython(document.getElementById("lessonCode").value, document.getElementById("lessonOutput"), document.getElementById("pythonStatus"), document.getElementById("runLessonCode")));
document.getElementById("runPracticeCode").addEventListener("click", () =>
  runPython(document.getElementById("practiceInput").value, document.getElementById("practiceOutput"), document.getElementById("practiceStatus"), document.getElementById("runPracticeCode")));
if ("serviceWorker" in navigator && location.protocol.startsWith("http")) {
  window.addEventListener("load", () => navigator.serviceWorker.register("./service-worker.js").catch(() => {}));
}
