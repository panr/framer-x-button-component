## Overview

Simple but highly customizable compontent thanks to props like:

- **isPrimary** — Adds shadow to button.
- **isOutline** — Makes outline button (without fill, **but** `backgroundColor` prop is still important). Disabled if **isPrimary** is `true`.
- **isIcon** — Shows icon inside button.
- **icon** — Icon name. Please use icon names from [Material Icons Docs](https://material.io/tools/icons/).
- **label** — Sets button label.
- **backgroundColor** — Sets fill color for **default** and **primary** button. Sets border and text color for **outline** button.
- **textColor** — Sets text color. If **isOutline** is `true` this prop is overridden by `backgroundColor`.
- **fontSize** — Sets font size (16 is default, but you can set value from 12 to 24).
- **fontWeight** — Sets text weight (600 is default, but you can set value from 100 to 900)
- **borderRadius** — Sets button radius.
- **borderWidth** — Sets button border width.

### TIP
To create **link button** with proper tap target, just set button as **outline** and then border width to `0`
