// abra
// A superlite utility for making elements

// You could just paste this function in your HTML file between some script tags and forget using any frameworks
window.abra = function() {
  const tags = [
    'a', 'abbr', 'acronym', 'address', 'applet', 'area', 'article', 'aside', 'audio', 'b', 'base', 'basefont', 'bdi',
    'bdo', 'big', 'blockquote', 'body', 'br', 'button', 'canvas', 'caption', 'center', 'cite', 'code', 'col',
    'colgroup', 'data', 'datalist', 'dd', 'del', 'details', 'dfn', 'dialog', 'dir', 'div', 'dl', 'dt', 'em', 'embed',
    'fieldset', 'figcaption', 'figure', 'font', 'footer', 'form', 'frame', 'frameset', 'h1', 'head', 'header', 'hr',
    'html', 'i', 'iframe', 'img', 'input', 'ins', 'kbd', 'label', 'legend', 'li', 'link', 'main', 'map', 'mark', 'meta',
    'meter', 'nav', 'noframes', 'noscript', 'object', 'ol', 'optgroup', 'option', 'output', 'p', 'param', 'picture',
    'pre', 'progress', 'q', 'rp', 'rt', 'ruby', 's', 'samp', 'script', 'section', 'select', 'small', 'source', 'span',
    'strike', 'strong', 'style', 'sub', 'summary', 'sup', 'svg', 'table', 'tbody', 'td', 'template', 'textarea',
    'tfoot', 'th', 'thead', 'time', 'title', 'tr', 'track', 'tt', 'u', 'ul', 'var', 'video', 'wbr',
  ];

  function element(type, attrs, ...children) {
    const el = document.createElement(type);

    for (const attr in attrs) {
      if (typeof attrs[attr] !== 'object') {
        el[attr] = attrs[attr];
      } else {
        for (const subattr in attrs[attr]) {
          el[attr][subattr] = attrs[attr][subattr];
        }
      }
    }

    el.appendChild(children.reduce((frag, child) => {
      if (typeof child === 'string') {
        child = document.createTextNode(child);
      }
      frag.appendChild(child);
      return frag;
    }, document.createDocumentFragment()));
    return el;
  }

  return tags.reduce((out, tag) => ({ ...out, [tag]: element.bind(this, tag) }), { element });
}();
