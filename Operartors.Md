# Operators

An operator is a mathematical symbol that produces a result based on two values (or variables). In the following table, you can see some of the simplest operators, along with some examples to try in the JavaScript console.

 | Operator	 | Explanation	Symbol(s)	 | Example  | 
 | Addition	 | Add two numbers together or combine two strings. | 	+	6 + 9;
'Hello ' + 'world!'; | 
 | Subtraction, Multiplication, Division	 | These do what you'd expect them to do in basic math. | 	-, *, /	9 - 3; /n 8 * 2; // multiply in JS is an asterisk /n 9 / 3; | 
 | Assignment	 | As you've seen already: this assigns a value to a variable.	 | =	let myVariable = 'Bob'; | 
 | Equality	 | This performs a test to see if two values are equal. It returns a true/false (Boolean) result.	===	let myVariable = 3; /n myVariable === 4; | 
 | Not, Does-not-equal	 | This returns the logically opposite value of what it precedes. It turns a true into a false, etc.. When it is used alongside the Equality operator, the negation operator tests whether two values are not equal. | 	!, !==	  For "Not", the basic expression is true, but the comparison returns false because we negate it: /n let myVariable = 3; /n
!(myVariable === 3); /n   "Does-not-equal" gives basically the same result with different syntax. Here we are testing "is myVariable NOT equal to 3". This returns false because myVariable IS equal to 3: /nlet myVariable = 3; /n myVariable !== 3;  | 