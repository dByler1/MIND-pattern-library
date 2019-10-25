---
title: "Buttons/Icons"
metaTitle: "Buttons and Icons"
metaDescription: "This is the meta description for this page"
---

#Button-Default

```css
.button-default {
    margin: 40px 0 40px 32px;
    font-family: 'Lato-Bold', 'sans-serif';
    font-size: 16px;
    color: #FFFFFF;
    line-height: 0px;
    background: #1377D6;
    border: 1px solid #1377D6;
    border-radius: 21px;
    padding: 20px 20px;
}

.button-default:hover {
    background: #EF8A18;
    border: 1px solid #EF8A18;
    color: #ffffff;
}

.button-default:focus {
    background: #09569E;
    border: 1px solid #09569E;
    color: #ffffff;
}

@media (max-width: 568px) { 
    .s-h-objectives-tab-wrapper .quiz-modal-footer .button-default {
        padding: 14px 20px;
    }
```

## Live Editing example

```javascript react-live=true
<button className={'button-default'}>Change my text</button>
```

Supports multiple languages.

The following is a code block with diff. Lines with `+` highlighted in green shade indicating an addition. Lines with `-` highlighted in red shade indicating a deletion.

```javascript
- const data = ['1','2'];
+ const data = [1,2];
```


