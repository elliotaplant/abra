[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

# Abra
A small utility to create HTML elements in JavaScript without a bunch of template strings. Don't call it a framework.

## How To
Copy the contents of the abra.js file and plop them either straight into your HTML or include it with a script tag:
```html
<script src="abra.js"></script>
```

This binds the `abra` object to the window. You can now create elements like this:

```js
const onclick = () => alert("ITS WORKING!!!");
const isItWorkingButton = abra.button({ onclick }, "Is it working?")
document.body.append(isItWorkingButton)
```

## When should I use Abra?
You should use Abra for _small_ projects where you don't intend to use _any_ frameworks.
It should sit in your toolbelt somewhere between vanilla JS and jQuery.
I've found that many of my projects fit into that no-dependency area but I don't love doing this all the time:
```js
someDiv.innerHTML = `
  <ul>${listOfThings(item => `<li>${item.value}</li>`).join('')}</ul>
`
```
because template strings lose a lot of the meaning to my editor and are very bug prone.

## When shouldn't I use Abra?
There are a majillion other ways to create elements, many of which can be included via a CDN or installed via NPM.
If you include any dependencies using a CDN or NPM, your project is already too complicated for Abra.
Use something like jQuery or React instead.
