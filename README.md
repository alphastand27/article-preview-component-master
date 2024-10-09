# Frontend Mentor - Article preview component solution

This is a solution to the [Article preview component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/article-preview-component-dYBN_pYFT). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- See the social media share links when they click the share icon

### Screenshot

![](./screenshots/Screenshot%20from%202024-10-08%2022-04-32.png)
![](./screenshots/Screenshot%20from%202024-10-08%2022-04-42.png)
![](./screenshots/Screen%20Shot%202024-10-08%20at%2022.05.00.png)
![](./screenshots/Screen%20Shot%202024-10-08%20at%2022.05.07.png)

### Links

- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- SCSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow

### What I learned

During this challenge I looked at the difference between scss and sass. While found out how to overide bootstrap with the '!important' which should be added for some styles which bootstrap prevents.

The differences are shown below:

```scss
body {
    font-size: 13px;
    background-color: $Grayish-Blue !important;
    font-family: "Manrope", sans-serif;
    
    #component {
        position: relative;
        z-index: 0;
        max-width: 375px;
        background-color: $Light-Grayish-Blue;
        margin-top: 10%;
        border-radius: 10px;
    }
}
```
```sass
body
    font-size: 13px
    background-color: $Grayish-Blue !important
    font-family: "Manrope", sans-serif
    
    #component
        position: relative
        z-index: 0
        max-width: 375px
        background-color: $Light-Grayish-Blue
        margin-top: 10%
        border-radius: 10px
    

```

## Author

- Frontend Mentor - [@alphastand27](https://www.frontendmentor.io/profile/alphastand27)
- Twitter - [@thoughtoutbreak](https://x.com/thoughtoutbreak)