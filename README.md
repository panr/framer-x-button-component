## Overview

Simple but highly customizable compontent thanks to props like:

| **Property** | **Type** | **Description** | **Default** |
|---|---|---|---|
| isPrimary | `boolean` | Adds shadow to button | `false` |
| isOutline | `boolean` | Makes outline button (without fill, **but** `backgroundColor` prop is still important). Disabled if **isPrimary** is `true` | `false` |
| isIcon | `boolean` | Shows icon inside button | `true` |
| icon | `string` | Icon name. Please use icon names from [Material Icons Docs](https://material.io/tools/icons/) | `pan_tool` |
| label | `string` | Sets button label | `Hello Friend!` |
| backgroundColor | `string` | Sets fill color for **default** and **primary** button. Sets border and text color for **outline** button | `#F59D0D` |
| textColor | `string` | Sets text color. If **isOutline** is `true` this prop is overridden by `backgroundColor` | `#FFFFFF` |
| fontFamily | `enum` | Sets font family (only few basic system typefaces) | `-apple-system` |
| fontSize | `enum` | Sets font size (you can set value from 12 to 24) | `16` |
| fontWeight | `enum` | Sets text weight (you can set value from 100 to 900) | `600` |
| textTransform | `enum` | Sets text transform (none, lowercase, uppercase) | `none` |
| letterSpacing | `number` | Sets space between letters (from 0 to 50) | `2` |
| borderRadius | `number` | Sets button radius | `8` |
| borderWidth | `number` | Sets button border width | `1` |

### TIP
To create **link button** with proper tap target, just set button as **outline** and then border width to `0`

---
Twitter: [@panr](https://twitter.com/panr) ・ Github: [panr](https://github.com/panr) ・ Website: [radoslawkoziel.pl](https://radoslawkoziel.pl)
