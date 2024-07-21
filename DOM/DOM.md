# Document Object Model (DOM) in JavaScript

## Introduction
The Document Object Model (DOM) is a programming interface for web documents. It represents the page so that programs can change the document structure, style, and content. The DOM represents the document as a tree of nodes. 

## Key Concepts

### Nodes
- **Element Nodes**: Represent HTML elements. Example: `<div>`, `<p>`.
- **Text Nodes**: Represent the text within an HTML element. Example: The text inside `<p>Hello</p>`.
- **Attribute Nodes**: Represent the attributes of HTML elements. Example: `class="example"`.
- **Comment Nodes**: Represent comments within HTML. Example: `<!-- This is a comment -->`.

### DOM Tree
The DOM tree is a hierarchical structure consisting of nodes. Each element, attribute, and piece of text in the HTML document is a node in the DOM tree.

<img src="https://www.freecodecamp.org/news/content/images/size/w1000/2021/09/Document.jpg" alt="DOM Tree"/>

### Accessing the DOM
JavaScript can access and manipulate the DOM using various methods provided by the browser. The `document` object is the entry point.

## Common DOM Methods

### Selecting Elements
- `document.getElementById(id)`: Selects an element by its ID.
- `document.getElementsByClassName(class)`: Selects all elements with the specified class.
- `document.getElementsByTagName(tag)`: Selects all elements with the specified tag.
- `document.querySelector(selector)`: Selects the first element that matches the CSS selector.
- `document.querySelectorAll(selector)`: Selects all elements that match the CSS selector.

### Creating Elements
- `document.createElement(tagName)`: Creates a new element with the specified tag.

### Manipulating Elements
- `element.innerHTML`: Gets or sets the HTML content of an element.
- `element.textContent`: Gets or sets the text content of an element.
- `element.setAttribute(name, value)`: Sets the value of an attribute on the specified element.
- `element.getAttribute(name)`: Gets the value of an attribute on the specified element.
- `element.removeAttribute(name)`: Removes an attribute from the specified element.
- `element.appendChild(child)`: Adds a child node to the end of the list of children of a specified parent node.
- `element.removeChild(child)`: Removes a child node from the DOM.

### Event Handling
- `element.addEventListener(event, function)`: Attaches an event handler to the specified element.
- `element.removeEventListener(event, function)`: Removes an event handler from the specified element.

## Example
Here's a simple example demonstrating DOM manipulation:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DOM Example</title>
</head>
<body>
    <div id="container">
        <p class="text">Hello, World!</p>
    </div>

    <script>
        // Selecting elements
        const container = document.getElementById('container');
        const paragraph = document.querySelector('.text');

        // Creating a new element
        const newElement = document.createElement('span');
        newElement.textContent = 'This is a new element';

        // Appending the new element
        container.appendChild(newElement);

        // Changing content
        paragraph.textContent = 'Hello, DOM!';
    </script>
</body>
</html>
```