# JavaScript Events

## Introduction
Events are actions or occurrences that happen in the browser and can be detected and responded to using JavaScript. Examples of events include clicking a button, loading a webpage, and hovering over an element.

## Event Types

### Mouse Events
- `click`: Fired when an element is clicked.
- `dblclick`: Fired when an element is double-clicked.
- `mousedown`: Fired when a mouse button is pressed down.
- `mouseup`: Fired when a mouse button is released.
- `mouseover`: Fired when the mouse pointer is moved over an element.
- `mouseout`: Fired when the mouse pointer is moved out of an element.
- `mousemove`: Fired when the mouse pointer is moving while it is over an element.

### Keyboard Events
- `keydown`: Fired when a key is pressed down.
- `keyup`: Fired when a key is released.
- `keypress`: Fired when a key is pressed down and released (deprecated).

### Form Events
- `submit`: Fired when a form is submitted.
- `change`: Fired when an element's value is changed (for `<input>`, `<select>`, and `<textarea>`).
- `focus`: Fired when an element gains focus.
- `blur`: Fired when an element loses focus.

### Window Events
- `load`: Fired when the whole page has loaded, including all dependent resources such as stylesheets and images.
- `resize`: Fired when the document view is resized.
- `scroll`: Fired when the document view or an element is scrolled.

### Clipboard Events
- `copy`: Fired when the content is copied.
- `cut`: Fired when the content is cut.
- `paste`: Fired when the content is pasted.

## Event Handling

### Adding Event Listeners
Event listeners are used to run code when an event occurs. They can be added using the `addEventListener` method.

```javascript
const button = document.querySelector('button');

button.addEventListener('click', () => {
    alert('Button clicked!');
});
```

### Removing Event Listeners
Event listeners can be removed using the removeEventListener method.

```javascript
const handleClick = () => {
    alert('Button clicked!');
};

button.addEventListener('click', handleClick);

// Later, to remove the event listener
button.removeEventListener('click', handleClick);
```

## Event Object
When an event occurs, an event object is created containing information about the event.

```javascript
button.addEventListener('click', (event) => {
    console.log(event.type); // "click"
    console.log(event.target); // The element that was clicked
});
```

## Event Propagation
Event propagation describes the order in which events are received on the page. It includes two main phases:

- **Capturing Phase**: The event starts from the document and traverses down to the target element.
- **Bubbling Phase**: The event starts from the target element and bubbles up to the document.

### Stopping Event Propagation
Propagation can be stopped using the stopPropagation method.

```javascript
button.addEventListener('click', (event) => {
    event.stopPropagation();
    alert('Button clicked!');
});
```

## Preventing Default Actions
The default action associated with an event can be prevented using the preventDefault method.

```javascript
const link = document.querySelector('a');

link.addEventListener('click', (event) => {
    event.preventDefault();
    alert('Default action prevented!');
});
```
## Event Delegation
Event delegation is a technique involving event propagation to handle events at a higher level in the DOM than the element on which the event originated. This allows adding a single event listener to a parent element instead of multiple listeners to individual child elements.

```javascript
const container = document.querySelector('#container');

container.addEventListener('click', (event) => {
    if (event.target.matches('.child')) {
        alert('Child element clicked!');
    }
});
```