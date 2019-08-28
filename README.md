# gatsby-theme-overreacted-toggle

A Gatsby theme that implements Dan Abramovs dark mode toggle. Add to your Gatsby sites gatsby-config.js just like you would with a plugin. 

---

```
module.exports = {

    plugins: ['gatsby-theme-overreacted-toggle'],
}
```

## Example usage:

```jsx
import React from 'react';
import {DarkModeToggle} from 'gatsby-theme-overreacted-toggle'

export default () => (
    <div style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginTop: '200px'
    }}>
        <DarkModeToggle/>
        <h1>Click the toggle to change sites color mode</h1>
    </div>
)
```

You can override any colors used in your application by shadowing the theme ui index components. 

The original looks like this: 

```js
export default {
    // this enables the color modes feature
    // and is used as the name for the top-level colors object
    initialColorMode: 'light',
    // optionally enable custom properties
    // to help avoid a flash of colors on page load
    useCustomProperties: true,
    colors: {
        // these are the default light colors
        text: '#000',
        background: '#fff',
        primary: '#0057B8',
        accent: '#FFCD00',
        modes: {
            // this is the dark color mode colors
            dark: {
                text: '#fff',
                background: '#000',
                primary: '#FFCD00',
            },
        },
    },
};
```

To override the colors create a new folder in your `src` folder named `gatsby-plugin-theme-ui` Inside this folder create an `index.js` and copy the format of the above original, changing the colors to whatever you want.

To use these colors in your components import jsx from theme ui and add the jsx pragma. You can then use the sx prop and style any element inline. In the below example we are changing the `h1` color to that of the primary color set in the shadowed `gatsby-plugin-theme-ui` index file. 

```js
/** @jsx jsx */
import { jsx } from 'theme-ui'
import {DarkModeToggle} from 'gatsby-theme-overreacted-toggle'

export default () => (
    <div style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginTop: '200px'
    }}>
        <DarkModeToggle/>
        <h1 sx={{
            color: 'primary'
        }}>Click the toggle to change sites color mode</h1>
    </div>
)
```

## Built With

- [Gatbsy](https://www.gatsbyjs.org/)
- [Theme Ui](https://theme-ui.com/)

## Authors

- **Rich Haines** - _Hungry Bear Studio_

## License

This project is licensed under the MIT License