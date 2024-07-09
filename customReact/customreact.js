function customRender(reactElement, container) {
  // const domElement = document.createElement(reactElement.type);
  // domElement.innerHTML = reactElement.children;
  // domElement.setAttribute("href", reactElement.props.href);
  // domElement.setAttribute("target", reactElement.props.target);
  // container.appendChild(domElement);

  // ?in the above code we were repeating the setAttribute code and we will try to improve on that practice of not repeating the code and doing loops instead

  const domElement = document.createElement(reactElement.type);
  domElement.innerHTML = reactElement.children;
  for (const prop in reactElement.props) {
    if (prop === "children") continue;
    domElement.setAttribute(prop, reactElement.props[prop]);
  }
  container.appendChild(domElement);
}

// here's how react see the html tag element which is inside a function
const reactElement = {
  type: "a",
  props: {
    href: "https://google.com",
    target: "_blank",
  },
  children: "Click me to visit google inc",
};
const paraElement = {
  type: "p",
  children: "this is the paragraph written for testing purposes ",
};
const mainContainer = document.querySelector("#root");

customRender(reactElement, mainContainer);
