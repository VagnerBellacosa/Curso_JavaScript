# Variables

Variables are containers that store values. You start by declaring a variable with the [var](../var) (less recommended, dive deeper for the explanation) or the [let](../let) keyword, followed by the name you give to the variable:

Note that variables may hold values that have different data types:

 | Variable	 | Explanation	 | Example | 
 | String	 | This is a sequence of text known as a string. To signify that the value is a string, enclose it in single quote marks.	 | let myVariable = 'Bob'; | 
 | Number	 | This is a number. Numbers don't have quotes around them.	let myVariable = 10; | 
 | Boolean	This is a True/False value. The words true and false are special keywords that don't need quote marks.	let myVariable = true; | 
 | Array	 | This is a structure that allows you to store multiple values in a single reference.	let myVariable = [1,'Bob','Steve',10];  
  Refer to each member of the array like this:
myVariable[0], myVariable[1], etc. | 
 |Object	 | This can be anything. Everything in JavaScript is an object and can be stored in a variable. Keep this in mind as you learn.	let myVariable = document.querySelector('h1'); | 

All of the above examples too.
