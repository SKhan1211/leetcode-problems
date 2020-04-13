// When using componentDidUpdate, it takes in prevProps or prevState as args and I can use this as conditionals for when an update should do something.

// If you want to position a child element right at top and left of parent, give parent position relative and give child a position absolute with top 0 left 0,
//  should fit like a charm

// If you call this anywhere in your function in React, you must bind it. If you don't, you don't need to bind but it wouldn't hurt to do it anyways for all to 
//  avoid dumb bugs.

// addEventListener functions can take in optional params, such as options that allow you to run an event listener only once. This would be called such as:
//  document.addEventListener('click', this.handleSubmit, { once: true}), meaning the event listener will only run once. Check out MDN docs to see what all
//  options may be passed in!

// Rather than creating elements on top of parents with the parent relative child absolute trick and giving display none until click,
//  you can easily use JS to append new elements with set class names and remove as well, using node/child/etc. appendChild() or whatever.
//  This is a cleaner method that won't clog up your html files.

// When you want to return items like a List that has many Cards belonging to it, instead of giving Cards a 
//  dispatch action you can just use Rails and jBuilder to return all Cards belonging to that List by doing 
// @cards = List.find(params[:id]).cards, then when you have your list component for each list you can make
// a card component with list.cards passed in as a prop and voila!