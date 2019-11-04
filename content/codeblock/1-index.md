---
title: "Buttons/Icons"
metaTitle: "Buttons and Icons"
metaDescription: "This is the meta description for this page"
---

### Button-Default

<button class='button-default'>Button-Default</button>

### Button-Secondary

<button class="button-secondary">Button-Secondary</button>

``` html
<button id="c--studenthub--print-quiz-modal--button" class="button-default">Button Default</button>

<button id="c--studenthub--print-quiz-modal--button" class="button-secondary">Button secondary</button>
```

```css
.button-default {
    font-family: 'Lato-Bold', 'sans-serif';
    font-size: 16px;
    color: #FFFFFF;
    line-height: 0px;
    background: #1377D6;
    border: 1px solid #1377D6;
    border-radius: 21px;
    padding: 20px 20px;
}

.button-secondary {
    font-family: 'Lato-Bold', 'sans-serif';
    font-size: 16px;
    color: #1377D6;
    line-height: 0px;
    background: #ffffff;
    padding: 20px 20px;
    border-radius: 21px;
    border: 1px solid #D4DBDE;
}

:hover {
    background: #EF8A18;
    border: 1px solid #EF8A18;
    color: #ffffff;
}

:focus {
    background: #09569E;
    border: 1px solid #09569E;
    color: #ffffff;
}

@media (max-width: 568px) { 
    .button-default,
    .button-secondary {
        padding: 17px 20px;
    }
}
```






