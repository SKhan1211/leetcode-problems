// When using componentDidUpdate, it takes in prevProps or prevState as args and I can use this as conditionals for when an update should do something.

// If you want to position a child element right at top and left of parent, give parent position relative and give child a position absolute with top 0 left 0,
//  should fit like a charm

// If you call this anywhere in your function in React, you must bind it. If you don't, you don't need to bind but it wouldn't hurt to do it anyways for all to 
//  avoid dumb bugs.

// addEventListener functions can take in optional params, such as options that allow you to run an event listener only once. This would be called such as:
//  document.addEventListener('click', this.handleSubmit, { once: true}), meaning the event listener will only run once. Check out MDN docs to see what all
//  options may be passed in!