# AngularJS 1.x Browser Detect Directive

Browser Detect Directive is built to add classes to whatever element it is added to that represent the browser, and browser version.

### Install
  - Add browserDetect.directive.js to your project after your angular script but before your other scripts that use it.
  - Add `browserDetect` to your module
  - Add the directive to a tag like body `<body browser-detect>` and use it in your style sheets.

### Stylesheet usage
Browser Detect will give you two classes to use, the browser name, and the version. These are prefixed with `browser-` and `browser-version-`.

Your tag will then look like: 
`<body browser-detect class="browser-safari browser-version-9">`

Now in your CSS you can create browser specific features or fixes.
```
.browser-safari {
    color: #FF00FF;
}

.browser-safari.browser-version-6 {
    background: #00FF00;
}

.browser-safari.browser-version-9 {
    background: #FF0000;
}
```
This will make all safari text color purple,  version 6 browsers background green, and version 9 browsers background red.

### Credits
Based off of the stackoverflow answer: http://stackoverflow.com/a/2401861