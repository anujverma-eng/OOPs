# Object Oriented Programming || JAVASCRIPT ||

## Do Javascript really have Classes?

Yes, javascript does have classes, This feature was Introduced in EcmaScript2015 (ES6). However, the javascript under the hood uses ProtType Based architecture, the classes are just syntactic sugar, it is for the user coming from class based languages like c++ or java.

## Object

- collections of properties and methods

- Using `this` inside the Arrow function will give you the whole Global window object & Not the Current Context. So basically you can't access `this` in arrow function [due to javascript's prototype behaviour]

- Constructor Function: This is the function with provides you the new context from the instance the `new` is the constructor fn, this will make the new context from the existing instance of class || prototype.

- If you will not use `new` with Constructor function, this will not create any new context and will overwrite the properties if created multiple instances without `new`.

## what is prototype in javascript

- it is a mechanism [used as Inheritance]

- the prototype in javascript is a mechanism by which the javascript objects inherit feature from one another.

- Every JavaScript object has a prototype, which provides properties and methods that can be accessed by that object.

- For example, if you have an object called person and you try to access the name property, JavaScript will first look for the name property on the person object itself. If the name property is not found on the person object, JavaScript will then look for the name property on the person object's prototype. This process continues up the prototype chain until the name property is found or the end of the prototype chain is reached.

- In JavaScript, the `__proto__` property is an internal property of an object that points to its prototype

## call

- the call passes the current execution context to another function
- In JavaScript, the call() method allows a function to be called with a given this value and arguments provided individually.

## Constructor

- As soon as the object is initialized the constructor get's invoked itself
