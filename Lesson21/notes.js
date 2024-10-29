// Onclick Property
document.getElementById("btnSayHello").onclick = function() {
  console.log("Onclick event handeler triggered", event);
}

// addEventListener Method
document.getElementById("btnSayBye").addEventListener('click', function() {
  console.log("Click event listener triggered", event);
});

/*
Key Differences:

- Multiple Handlers: addEventListener allows multiple handlers for the same event, while onclick can only have one.
- Overwriting: Using onclick will overwrite any existing onclick handlers, whereas addEventListener adds new handlers without affecting existing ones.
- Flexibility: addEventListener provides more options and control, such as the ability to control event propagation.
- Browser Compatibility: While both are widely supported, onclick has better compatibility with very old browsers. addEventListener might require a fallback for ancient browser versions.
- Code Organization: addEventListener promotes better separation of concerns and is generally considered a better practice in modern web development.
*/