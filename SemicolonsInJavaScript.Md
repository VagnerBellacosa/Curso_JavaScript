# Javascript

## Your Guide to Semicolons in JavaScript

#### Alex J.

## When do you need a semicolon? Here's a handy cheat sheet!

Required: When two statements are on the same line
The semicolon is only obligatory when you have two or more statements on the same line:

ˋˋˋ
var i = 0; i++        // <-- semicolon obligatory
                      //     (but optional before newline)
var i = 0             // <-- semicolon optional
    i++               // <-- semicolon optional
ˋˋˋ

Optional: After statements
The semicolon in JavaScript is used to separate statements, but it can be omitted if the statement is followed by a line break (or there’s only one statement in a {block}). A statement is a piece of code that tells the computer to do something. Here are the most common types of statements:

ˋˋˋ
var i;                        // variable declaration
i = 5;                        // value assignment
i = i + 1;                    // value assignment
i++;                          // same as above
var x = 9;                    // declaration & assignment
var fun = function() {...};   // var decl., assignmt, and func. defin.
alert("hi");                  // function call
ˋˋˋ
All of these statements can end with a ; but none of them must. Some consider it a good habit to terminate each statement with a ; – that makes your code a little easier to parse, and to compress: if you remove line breaks you needn't worry about several statements ending up unseparated on the same line.

Avoid!

1. After a closing curly bracket

You shouldn’t put a semicolon after a closing curly bracket }. The only exceptions are assignment statements, such as var obj = {};, see above.

ˋˋˋ
// NO semicolons after }:
if  (...) {...} else {...}
for (...) {...}
while (...) {...}

// BUT:
do {...} while (...);

// function statement: 
function (arg) { /*do this*/ } // NO semicolon after }
ˋˋˋ

2. After the round bracket of an if, for, while or switch statement

It won't harm to put a semicolon after the { } of an if statement (it will be ignored, and you might see a warning that it's unnecessary). But a semicolon where it doesn't belong (such as after the round (brackets) of an if, for, while, or switch statement) is a very bad idea:

if (0 === 1); { alert("hi") }

ˋˋˋ
// equivalent to:

if (0 === 1) /*do nothing*/ ;
alert ("hi");
ˋˋˋ

This code will alert "hi", but not because 0 equals 1, but because of the semicolon. It makes JavaScript think that you have an empty statement there, and everything to the right of it is treated as no longer belonging to the if conditional and thus independent of it.

Of course there's an exception...
An important quirk: inside the () of a for loop, semicolons only go after the first and second statement, never after the third:

ˋˋˋ
for (var i=0; i < 10; i++)  {/*actions*/}       // correct
for (var i=0; i < 10; i++;) {/*actions*/}       // SyntaxError
ˋˋˋ

### How to fix your semicolons

The JavaScript syntax proofing tool JSLint, which is built into the Codecademy code editor, does a pretty good job of finding unnecessary semicolons – or missing ones.

It'll show you yellow warning triangles in code lines. Hovering the mouse over a triangle will tell you if there's a missing semicolon or an unnecessary one. You can generally trust those warnings until you develop an intuition of where to use semicolons and where not to.

[artigo original](https://www.codecademy.com/resources/blog/your-guide-to-semicolons-in-javascript/)