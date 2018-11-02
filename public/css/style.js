import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  // *
 * CoreUI - Open Source Bootstrap Admin Template
 * @version v1.0.0-alpha.6
 * @link http://coreui.io
 * Copyright (c) 2017 creativeLabs Łukasz Holeczek
 * @license MIT
  // ! normalize.css v5.0.0 | MIT License | github.com/necolas/normalize.css
  'html': {
    'fontFamily': 'sans-serif',
    'lineHeight': [{ 'unit': 'px', 'value': 1.15 }],
    'MsTextSizeAdjust': '100%',
    'WebkitTextSizeAdjust': '100%',
    'all&&-ms-high-contrast non': {
      'display': 'flex',
      'flexDirection': 'column'
    }
  },
  'body': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'article': {
    'display': 'block'
  },
  'aside': {
    'display': 'block'
  },
  'footer': {
    'display': 'block'
  },
  'header': {
    'display': 'block'
  },
  'nav': {
    'display': 'block'
  },
  'section': {
    'display': 'block'
  },
  'h1': {
    'fontSize': [{ 'unit': 'em', 'value': 2 }],
    'margin': [{ 'unit': 'em', 'value': 0.67 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'em', 'value': 0.67 }, { 'unit': 'px', 'value': 0 }]
  },
  'figcaption': {
    'display': 'block'
  },
  'figure': {
    'display': 'block'
  },
  'main': {
    'display': 'block'
  },
  'figure': {
    'margin': [{ 'unit': 'em', 'value': 1 }, { 'unit': 'px', 'value': 40 }, { 'unit': 'em', 'value': 1 }, { 'unit': 'px', 'value': 40 }]
  },
  'hr': {
    'boxSizing': 'content-box',
    'height': [{ 'unit': 'px', 'value': 0 }],
    'overflow': 'visible'
  },
  'pre': {
    'fontFamily': 'monospace, monospace',
    'fontSize': [{ 'unit': 'em', 'value': 1 }]
  },
  'a': {
    'backgroundColor': 'transparent',
    'WebkitTextDecorationSkip': 'objects',
    '': {
      'textDecoration': 'underline'
    }
  },
  'a:active': {
    'outlineWidth': '0'
  },
  'a:hover': {
    'outlineWidth': '0'
  },
  'abbr[title]': {
    'borderBottom': [{ 'unit': 'string', 'value': 'none' }],
    'textDecoration': 'underline',
    'textDecoration': 'underline dotted'
  },
  'b': {
    'fontWeight': 'inherit'
  },
  'strong': {
    'fontWeight': 'inherit'
  },
  'b': {
    'fontWeight': 'bolder'
  },
  'strong': {
    'fontWeight': 'bolder'
  },
  'code': {
    'fontFamily': 'monospace, monospace',
    'fontSize': [{ 'unit': 'em', 'value': 1 }]
  },
  'kbd': {
    'fontFamily': 'monospace, monospace',
    'fontSize': [{ 'unit': 'em', 'value': 1 }]
  },
  'samp': {
    'fontFamily': 'monospace, monospace',
    'fontSize': [{ 'unit': 'em', 'value': 1 }]
  },
  'dfn': {
    'fontStyle': 'italic'
  },
  'mark': {
    'backgroundColor': '#ff0',
    'color': '#000'
  },
  'small': {
    'fontSize': [{ 'unit': '%V', 'value': 0.8 }]
  },
  'sub': {
    'fontSize': [{ 'unit': '%V', 'value': 0.75 }],
    'lineHeight': [{ 'unit': 'px', 'value': 0 }],
    'position': 'relative',
    'verticalAlign': 'baseline'
  },
  'sup': {
    'fontSize': [{ 'unit': '%V', 'value': 0.75 }],
    'lineHeight': [{ 'unit': 'px', 'value': 0 }],
    'position': 'relative',
    'verticalAlign': 'baseline'
  },
  'sub': {
    'bottom': [{ 'unit': 'em', 'value': -0.25 }]
  },
  'sup': {
    'top': [{ 'unit': 'em', 'value': -0.5 }]
  },
  'audio': {
    'display': 'inline-block'
  },
  'video': {
    'display': 'inline-block'
  },
  'audio:not([controls])': {
    'display': 'none',
    'height': [{ 'unit': 'px', 'value': 0 }]
  },
  'img': {
    'borderStyle': 'none'
  },
  'svg:not(:root)': {
    'overflow': 'hidden'
  },
  'button': {
    'fontFamily': 'sans-serif',
    'fontSize': [{ 'unit': '%V', 'value': 1 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.15 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'input': {
    'fontFamily': 'sans-serif',
    'fontSize': [{ 'unit': '%V', 'value': 1 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.15 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'optgroup': {
    'fontFamily': 'sans-serif',
    'fontSize': [{ 'unit': '%V', 'value': 1 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.15 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'select': {
    'fontFamily': 'sans-serif',
    'fontSize': [{ 'unit': '%V', 'value': 1 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.15 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'textarea': {
    'fontFamily': 'sans-serif',
    'fontSize': [{ 'unit': '%V', 'value': 1 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.15 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'button': {
    'overflow': 'visible'
  },
  'input': {
    'overflow': 'visible'
  },
  'button': {
    'textTransform': 'none'
  },
  'select': {
    'textTransform': 'none'
  },
  'button': {
    'WebkitAppearance': 'button'
  },
  'html [type="button"]': {
    'WebkitAppearance': 'button'
  },
  '[type="reset"]': {
    'WebkitAppearance': 'button'
  },
  '[type="submit"]': {
    'WebkitAppearance': 'button'
  },
  'button::-moz-focus-inner': {
    'borderStyle': 'none',
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  '[type="button"]::-moz-focus-inner': {
    'borderStyle': 'none',
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  '[type="reset"]::-moz-focus-inner': {
    'borderStyle': 'none',
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  '[type="submit"]::-moz-focus-inner': {
    'borderStyle': 'none',
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'button:-moz-focusring': {
    'outline': '1px dotted ButtonText'
  },
  '[type="button"]:-moz-focusring': {
    'outline': '1px dotted ButtonText'
  },
  '[type="reset"]:-moz-focusring': {
    'outline': '1px dotted ButtonText'
  },
  '[type="submit"]:-moz-focusring': {
    'outline': '1px dotted ButtonText'
  },
  'fieldset': {
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#c0c0c0' }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 2 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 2 }],
    'padding': [{ 'unit': 'em', 'value': 0.35 }, { 'unit': 'em', 'value': 0.625 }, { 'unit': 'em', 'value': 0.75 }, { 'unit': 'em', 'value': 0.625 }]
  },
  'legend': {
    'boxSizing': 'border-box',
    'color': 'inherit',
    'display': 'table',
    'maxWidth': [{ 'unit': '%H', 'value': 1 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'whiteSpace': 'normal'
  },
  'progress': {
    'display': 'inline-block',
    'verticalAlign': 'baseline'
  },
  'textarea': {
    'overflow': 'auto'
  },
  '[type="checkbox"]': {
    'boxSizing': 'border-box',
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  '[type="radio"]': {
    'boxSizing': 'border-box',
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  '[type="number"]::-webkit-inner-spin-button': {
    'height': [{ 'unit': 'string', 'value': 'auto' }]
  },
  '[type="number"]::-webkit-outer-spin-button': {
    'height': [{ 'unit': 'string', 'value': 'auto' }]
  },
  '[type="search"]': {
    'WebkitAppearance': 'textfield',
    'outlineOffset': '-2px'
  },
  '[type="search"]::-webkit-search-cancel-button': {
    'WebkitAppearance': 'none'
  },
  '[type="search"]::-webkit-search-decoration': {
    'WebkitAppearance': 'none'
  },
  '::-webkit-file-upload-button': {
    'WebkitAppearance': 'button',
    'font': [{ 'unit': 'string', 'value': 'inherit' }]
  },
  'details': {
    'display': 'block'
  },
  'menu': {
    'display': 'block'
  },
  'summary': {
    'display': 'list-item'
  },
  'canvas': {
    'display': 'inline-block'
  },
  'template': {
    'display': 'none'
  },
  '[hidden]': {
    'display': 'none'
  },
  // !
 * Bootstrap v4.0.0-alpha.6 (https://getbootstrap.com)
 * Copyright 2011-2017 The Bootstrap Authors
 * Copyright 2011-2017 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
  'html': {
    'boxSizing': 'border-box',
    'fontFamily': 'sans-serif',
    'lineHeight': [{ 'unit': 'px', 'value': 1.15 }],
    'WebkitTextSizeAdjust': '100%',
    'MsTextSizeAdjust': '100%',
    'MsOverflowStyle': 'scrollbar',
    'WebkitTapHighlightColor': 'transparent'
  },
  '*': {
    'boxSizing': 'inherit'
  },
  '*::before': {
    'boxSizing': 'inherit'
  },
  '*::after': {
    'boxSizing': 'inherit'
  },
  '@-ms-viewport': {
    'width': [{ 'unit': 'string', 'value': 'device-width' }]
  },
  'body': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'fontFamily': '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    'fontSize': [{ 'unit': 'rem', 'value': 0.875 }],
    'fontWeight': 'normal',
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }],
    'color': '#263238',
    'backgroundColor': '#e4e5e6'
  },
  '[tabindex="-1"]:focus': {
    'outline': 'none !important'
  },
  'hr': {
    'boxSizing': 'content-box',
    'height': [{ 'unit': 'px', 'value': 0 }],
    'overflow': 'visible'
  },
  'h1': {
    'marginTop': [{ 'unit': 'px', 'value': 0 }],
    'marginBottom': [{ 'unit': 'rem', 'value': 0.5 }]
  },
  'h2': {
    'marginTop': [{ 'unit': 'px', 'value': 0 }],
    'marginBottom': [{ 'unit': 'rem', 'value': 0.5 }]
  },
  'h3': {
    'marginTop': [{ 'unit': 'px', 'value': 0 }],
    'marginBottom': [{ 'unit': 'rem', 'value': 0.5 }]
  },
  'h4': {
    'marginTop': [{ 'unit': 'px', 'value': 0 }],
    'marginBottom': [{ 'unit': 'rem', 'value': 0.5 }]
  },
  'h5': {
    'marginTop': [{ 'unit': 'px', 'value': 0 }],
    'marginBottom': [{ 'unit': 'rem', 'value': 0.5 }]
  },
  'h6': {
    'marginTop': [{ 'unit': 'px', 'value': 0 }],
    'marginBottom': [{ 'unit': 'rem', 'value': 0.5 }]
  },
  'p': {
    'marginTop': [{ 'unit': 'px', 'value': 0 }],
    'marginBottom': [{ 'unit': 'rem', 'value': 1 }]
  },
  'abbr[title]': {
    'textDecoration': 'underline',
    'textDecoration': 'underline dotted',
    'cursor': 'help',
    'borderBottom': [{ 'unit': 'px', 'value': 0 }]
  },
  'abbr[data-original-title]': {
    'textDecoration': 'underline',
    'textDecoration': 'underline dotted',
    'cursor': 'help',
    'borderBottom': [{ 'unit': 'px', 'value': 0 }]
  },
  'address': {
    'marginBottom': [{ 'unit': 'rem', 'value': 1 }],
    'fontStyle': 'normal',
    'lineHeight': [{ 'unit': 'string', 'value': 'inherit' }]
  },
  'ol': {
    'marginTop': [{ 'unit': 'px', 'value': 0 }],
    'marginBottom': [{ 'unit': 'rem', 'value': 1 }]
  },
  'ul': {
    'marginTop': [{ 'unit': 'px', 'value': 0 }],
    'marginBottom': [{ 'unit': 'rem', 'value': 1 }]
  },
  'dl': {
    'marginTop': [{ 'unit': 'px', 'value': 0 }],
    'marginBottom': [{ 'unit': 'rem', 'value': 1 }]
  },
  'ol ol': {
    'marginBottom': [{ 'unit': 'px', 'value': 0 }]
  },
  'ul ul': {
    'marginBottom': [{ 'unit': 'px', 'value': 0 }]
  },
  'ol ul': {
    'marginBottom': [{ 'unit': 'px', 'value': 0 }]
  },
  'ul ol': {
    'marginBottom': [{ 'unit': 'px', 'value': 0 }]
  },
  'dt': {
    'fontWeight': 'bold'
  },
  'dd': {
    'marginBottom': [{ 'unit': 'rem', 'value': 0.5 }],
    'marginLeft': [{ 'unit': 'px', 'value': 0 }]
  },
  'blockquote': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 1 }, { 'unit': 'px', 'value': 0 }]
  },
  'dfn': {
    'fontStyle': 'italic'
  },
  'b': {
    'fontWeight': 'bolder'
  },
  'strong': {
    'fontWeight': 'bolder'
  },
  'small': {
    'fontSize': [{ 'unit': '%V', 'value': 0.8 }]
  },
  'sub': {
    'position': 'relative',
    'fontSize': [{ 'unit': '%V', 'value': 0.75 }],
    'lineHeight': [{ 'unit': 'px', 'value': 0 }],
    'verticalAlign': 'baseline'
  },
  'sup': {
    'position': 'relative',
    'fontSize': [{ 'unit': '%V', 'value': 0.75 }],
    'lineHeight': [{ 'unit': 'px', 'value': 0 }],
    'verticalAlign': 'baseline'
  },
  'sub': {
    'bottom': [{ 'unit': 'em', 'value': -0.25 }]
  },
  'sup': {
    'top': [{ 'unit': 'em', 'value': -0.5 }]
  },
  'a': {
    'color': '#20a8d8',
    'textDecoration': 'none',
    'backgroundColor': 'transparent',
    'WebkitTextDecorationSkip': 'objects'
  },
  'a:hover': {
    'color': '#167495',
    'textDecoration': 'underline'
  },
  'a:not([href]):not([tabindex])': {
    'color': 'inherit',
    'textDecoration': 'none'
  },
  'a:not([href]):not([tabindex]):focus': {
    'color': 'inherit',
    'textDecoration': 'none'
  },
  'a:not([href]):not([tabindex]):hover': {
    'color': 'inherit',
    'textDecoration': 'none'
  },
  'a:not([href]):not([tabindex]):focus': {
    'outline': '0'
  },
  'pre': {
    'fontFamily': 'monospace, monospace',
    'fontSize': [{ 'unit': 'em', 'value': 1 }]
  },
  'code': {
    'fontFamily': 'monospace, monospace',
    'fontSize': [{ 'unit': 'em', 'value': 1 }]
  },
  'kbd': {
    'fontFamily': 'monospace, monospace',
    'fontSize': [{ 'unit': 'em', 'value': 1 }]
  },
  'samp': {
    'fontFamily': 'monospace, monospace',
    'fontSize': [{ 'unit': 'em', 'value': 1 }]
  },
  'pre': {
    'marginTop': [{ 'unit': 'px', 'value': 0 }],
    'marginBottom': [{ 'unit': 'rem', 'value': 1 }],
    'overflow': 'auto'
  },
  'figure': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 1 }, { 'unit': 'px', 'value': 0 }]
  },
  'img': {
    'verticalAlign': 'middle',
    'borderStyle': 'none'
  },
  'svg:not(:root)': {
    'overflow': 'hidden'
  },
  'a': {
    'touchAction': 'manipulation'
  },
  'area': {
    'touchAction': 'manipulation'
  },
  'button': {
    'touchAction': 'manipulation'
  },
  '[role="button"]': {
    'touchAction': 'manipulation'
  },
  'input': {
    'touchAction': 'manipulation'
  },
  'label': {
    'touchAction': 'manipulation'
  },
  'select': {
    'touchAction': 'manipulation'
  },
  'summary': {
    'touchAction': 'manipulation'
  },
  'textarea': {
    'touchAction': 'manipulation'
  },
  'table': {
    'borderCollapse': 'collapse'
  },
  'caption': {
    'paddingTop': [{ 'unit': 'rem', 'value': 0.75 }],
    'paddingBottom': [{ 'unit': 'rem', 'value': 0.75 }],
    'color': '#b0bec5',
    'textAlign': 'left',
    'captionSide': 'bottom'
  },
  'th': {
    'textAlign': 'left'
  },
  'label': {
    'display': 'inline-block',
    'marginBottom': [{ 'unit': 'rem', 'value': 0.5 }]
  },
  'button:focus': {
    'outline': '1px dotted',
    'outline': '5px auto -webkit-focus-ring-color'
  },
  'input': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'fontFamily': 'inherit',
    'fontSize': [{ 'unit': 'string', 'value': 'inherit' }],
    'lineHeight': [{ 'unit': 'string', 'value': 'inherit' }]
  },
  'button': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'fontFamily': 'inherit',
    'fontSize': [{ 'unit': 'string', 'value': 'inherit' }],
    'lineHeight': [{ 'unit': 'string', 'value': 'inherit' }]
  },
  'select': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'fontFamily': 'inherit',
    'fontSize': [{ 'unit': 'string', 'value': 'inherit' }],
    'lineHeight': [{ 'unit': 'string', 'value': 'inherit' }]
  },
  'optgroup': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'fontFamily': 'inherit',
    'fontSize': [{ 'unit': 'string', 'value': 'inherit' }],
    'lineHeight': [{ 'unit': 'string', 'value': 'inherit' }]
  },
  'textarea': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'fontFamily': 'inherit',
    'fontSize': [{ 'unit': 'string', 'value': 'inherit' }],
    'lineHeight': [{ 'unit': 'string', 'value': 'inherit' }]
  },
  'button': {
    'overflow': 'visible'
  },
  'input': {
    'overflow': 'visible'
  },
  'button': {
    'textTransform': 'none'
  },
  'select': {
    'textTransform': 'none'
  },
  'button': {
    'WebkitAppearance': 'button'
  },
  'html [type="button"]': {
    'WebkitAppearance': 'button'
  },
  '[type="reset"]': {
    'WebkitAppearance': 'button'
  },
  '[type="submit"]': {
    'WebkitAppearance': 'button'
  },
  'button::-moz-focus-inner': {
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'borderStyle': 'none'
  },
  '[type="button"]::-moz-focus-inner': {
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'borderStyle': 'none'
  },
  '[type="reset"]::-moz-focus-inner': {
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'borderStyle': 'none'
  },
  '[type="submit"]::-moz-focus-inner': {
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'borderStyle': 'none'
  },
  'input[type="radio"]': {
    'boxSizing': 'border-box',
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'input[type="checkbox"]': {
    'boxSizing': 'border-box',
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'input[type="date"]': {
    'WebkitAppearance': 'listbox'
  },
  'input[type="time"]': {
    'WebkitAppearance': 'listbox'
  },
  'input[type="datetime-local"]': {
    'WebkitAppearance': 'listbox'
  },
  'input[type="month"]': {
    'WebkitAppearance': 'listbox'
  },
  'textarea': {
    'overflow': 'auto',
    'resize': 'vertical'
  },
  'fieldset': {
    'minWidth': [{ 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'border': [{ 'unit': 'px', 'value': 0 }]
  },
  'legend': {
    'display': 'block',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'maxWidth': [{ 'unit': '%H', 'value': 1 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'marginBottom': [{ 'unit': 'rem', 'value': 0.5 }],
    'fontSize': [{ 'unit': 'rem', 'value': 1.5 }],
    'lineHeight': [{ 'unit': 'string', 'value': 'inherit' }],
    'color': 'inherit',
    'whiteSpace': 'normal'
  },
  'progress': {
    'verticalAlign': 'baseline'
  },
  '[type="number"]::-webkit-inner-spin-button': {
    'height': [{ 'unit': 'string', 'value': 'auto' }]
  },
  '[type="number"]::-webkit-outer-spin-button': {
    'height': [{ 'unit': 'string', 'value': 'auto' }]
  },
  '[type="search"]': {
    'outlineOffset': '-2px',
    'WebkitAppearance': 'none'
  },
  '[type="search"]::-webkit-search-cancel-button': {
    'WebkitAppearance': 'none'
  },
  '[type="search"]::-webkit-search-decoration': {
    'WebkitAppearance': 'none'
  },
  '::-webkit-file-upload-button': {
    'font': [{ 'unit': 'string', 'value': 'inherit' }],
    'WebkitAppearance': 'button'
  },
  'output': {
    'display': 'inline-block'
  },
  'summary': {
    'display': 'list-item'
  },
  'template': {
    'display': 'none'
  },
  '[hidden]': {
    'display': 'none !important'
  },
  'h1': {
    'marginBottom': [{ 'unit': 'rem', 'value': 0.5 }],
    'fontFamily': 'inherit',
    'fontWeight': '500',
    'lineHeight': [{ 'unit': 'px', 'value': 1.1 }],
    'color': 'inherit'
  },
  'h2': {
    'marginBottom': [{ 'unit': 'rem', 'value': 0.5 }],
    'fontFamily': 'inherit',
    'fontWeight': '500',
    'lineHeight': [{ 'unit': 'px', 'value': 1.1 }],
    'color': 'inherit'
  },
  'h3': {
    'marginBottom': [{ 'unit': 'rem', 'value': 0.5 }],
    'fontFamily': 'inherit',
    'fontWeight': '500',
    'lineHeight': [{ 'unit': 'px', 'value': 1.1 }],
    'color': 'inherit'
  },
  'h4': {
    'marginBottom': [{ 'unit': 'rem', 'value': 0.5 }],
    'fontFamily': 'inherit',
    'fontWeight': '500',
    'lineHeight': [{ 'unit': 'px', 'value': 1.1 }],
    'color': 'inherit'
  },
  'h5': {
    'marginBottom': [{ 'unit': 'rem', 'value': 0.5 }],
    'fontFamily': 'inherit',
    'fontWeight': '500',
    'lineHeight': [{ 'unit': 'px', 'value': 1.1 }],
    'color': 'inherit'
  },
  'h6': {
    'marginBottom': [{ 'unit': 'rem', 'value': 0.5 }],
    'fontFamily': 'inherit',
    'fontWeight': '500',
    'lineHeight': [{ 'unit': 'px', 'value': 1.1 }],
    'color': 'inherit'
  },
  'h1': {
    'marginBottom': [{ 'unit': 'rem', 'value': 0.5 }],
    'fontFamily': 'inherit',
    'fontWeight': '500',
    'lineHeight': [{ 'unit': 'px', 'value': 1.1 }],
    'color': 'inherit'
  },
  'h2': {
    'marginBottom': [{ 'unit': 'rem', 'value': 0.5 }],
    'fontFamily': 'inherit',
    'fontWeight': '500',
    'lineHeight': [{ 'unit': 'px', 'value': 1.1 }],
    'color': 'inherit'
  },
  'h3': {
    'marginBottom': [{ 'unit': 'rem', 'value': 0.5 }],
    'fontFamily': 'inherit',
    'fontWeight': '500',
    'lineHeight': [{ 'unit': 'px', 'value': 1.1 }],
    'color': 'inherit'
  },
  'h4': {
    'marginBottom': [{ 'unit': 'rem', 'value': 0.5 }],
    'fontFamily': 'inherit',
    'fontWeight': '500',
    'lineHeight': [{ 'unit': 'px', 'value': 1.1 }],
    'color': 'inherit'
  },
  'h5': {
    'marginBottom': [{ 'unit': 'rem', 'value': 0.5 }],
    'fontFamily': 'inherit',
    'fontWeight': '500',
    'lineHeight': [{ 'unit': 'px', 'value': 1.1 }],
    'color': 'inherit'
  },
  'h6': {
    'marginBottom': [{ 'unit': 'rem', 'value': 0.5 }],
    'fontFamily': 'inherit',
    'fontWeight': '500',
    'lineHeight': [{ 'unit': 'px', 'value': 1.1 }],
    'color': 'inherit'
  },
  'h1': {
    'fontSize': [{ 'unit': 'rem', 'value': 2.5 }]
  },
  'h1': {
    'fontSize': [{ 'unit': 'rem', 'value': 2.5 }]
  },
  'h2': {
    'fontSize': [{ 'unit': 'rem', 'value': 2 }]
  },
  'h2': {
    'fontSize': [{ 'unit': 'rem', 'value': 2 }]
  },
  'h3': {
    'fontSize': [{ 'unit': 'rem', 'value': 1.75 }]
  },
  'h3': {
    'fontSize': [{ 'unit': 'rem', 'value': 1.75 }]
  },
  'h4': {
    'fontSize': [{ 'unit': 'rem', 'value': 1.5 }]
  },
  'h4': {
    'fontSize': [{ 'unit': 'rem', 'value': 1.5 }]
  },
  'h5': {
    'fontSize': [{ 'unit': 'rem', 'value': 1.25 }]
  },
  'h5': {
    'fontSize': [{ 'unit': 'rem', 'value': 1.25 }]
  },
  'h6': {
    'fontSize': [{ 'unit': 'rem', 'value': 1 }]
  },
  'h6': {
    'fontSize': [{ 'unit': 'rem', 'value': 1 }]
  },
  'lead': {
    'fontSize': [{ 'unit': 'rem', 'value': 1.25 }],
    'fontWeight': '300'
  },
  'display-1': {
    'fontSize': [{ 'unit': 'rem', 'value': 6 }],
    'fontWeight': '300',
    'lineHeight': [{ 'unit': 'px', 'value': 1.1 }]
  },
  'display-2': {
    'fontSize': [{ 'unit': 'rem', 'value': 5.5 }],
    'fontWeight': '300',
    'lineHeight': [{ 'unit': 'px', 'value': 1.1 }]
  },
  'display-3': {
    'fontSize': [{ 'unit': 'rem', 'value': 4.5 }],
    'fontWeight': '300',
    'lineHeight': [{ 'unit': 'px', 'value': 1.1 }]
  },
  'display-4': {
    'fontSize': [{ 'unit': 'rem', 'value': 3.5 }],
    'fontWeight': '300',
    'lineHeight': [{ 'unit': 'px', 'value': 1.1 }]
  },
  'hr': {
    'marginTop': [{ 'unit': 'rem', 'value': 1 }],
    'marginBottom': [{ 'unit': 'rem', 'value': 1 }],
    'border': [{ 'unit': 'px', 'value': 0 }],
    'borderTop': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': 'rgba(0, 0, 0, 0.1)' }]
  },
  'small': {
    'fontSize': [{ 'unit': '%V', 'value': 0.8 }],
    'fontWeight': 'normal'
  },
  'small': {
    'fontSize': [{ 'unit': '%V', 'value': 0.8 }],
    'fontWeight': 'normal'
  },
  'mark': {
    'padding': [{ 'unit': 'em', 'value': 0.2 }, { 'unit': 'em', 'value': 0.2 }, { 'unit': 'em', 'value': 0.2 }, { 'unit': 'em', 'value': 0.2 }],
    'backgroundColor': '#fcf8e3'
  },
  'mark': {
    'padding': [{ 'unit': 'em', 'value': 0.2 }, { 'unit': 'em', 'value': 0.2 }, { 'unit': 'em', 'value': 0.2 }, { 'unit': 'em', 'value': 0.2 }],
    'backgroundColor': '#fcf8e3'
  },
  'list-unstyled': {
    'paddingLeft': [{ 'unit': 'px', 'value': 0 }],
    'listStyle': 'none'
  },
  'list-inline': {
    'paddingLeft': [{ 'unit': 'px', 'value': 0 }],
    'listStyle': 'none'
  },
  'list-inline-item': {
    'display': 'inline-block'
  },
  'list-inline-item:not(:last-child)': {
    'marginRight': [{ 'unit': 'px', 'value': 5 }]
  },
  'initialism': {
    'fontSize': [{ 'unit': '%V', 'value': 0.9 }],
    'textTransform': 'uppercase'
  },
  'blockquote': {
    'padding': [{ 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 1 }, { 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 1 }],
    'marginBottom': [{ 'unit': 'rem', 'value': 1 }],
    'fontSize': [{ 'unit': 'rem', 'value': 1.09375 }],
    'borderLeft': [{ 'unit': 'rem', 'value': 0.25 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#cfd8dc' }]
  },
  'blockquote-footer': {
    'display': 'block',
    'fontSize': [{ 'unit': '%V', 'value': 0.8 }],
    'color': '#b0bec5'
  },
  'blockquote-footer::before': {
    'content': '"\2014 \00A0"'
  },
  'blockquote-reverse': {
    'paddingRight': [{ 'unit': 'rem', 'value': 1 }],
    'paddingLeft': [{ 'unit': 'px', 'value': 0 }],
    'textAlign': 'right',
    'borderRight': [{ 'unit': 'rem', 'value': 0.25 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#cfd8dc' }],
    'borderLeft': [{ 'unit': 'px', 'value': 0 }]
  },
  'blockquote-reverse blockquote-footer::before': {
    'content': '""'
  },
  'blockquote-reverse blockquote-footer::after': {
    'content': '"\00A0 \2014"'
  },
  'img-fluid': {
    'maxWidth': [{ 'unit': '%H', 'value': 1 }],
    'height': [{ 'unit': 'string', 'value': 'auto' }]
  },
  'img-thumbnail': {
    'padding': [{ 'unit': 'rem', 'value': 0.25 }, { 'unit': 'rem', 'value': 0.25 }, { 'unit': 'rem', 'value': 0.25 }, { 'unit': 'rem', 'value': 0.25 }],
    'backgroundColor': '#e4e5e6',
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ddd' }],
    'transition': 'all 0.2s ease-in-out',
    'maxWidth': [{ 'unit': '%H', 'value': 1 }],
    'height': [{ 'unit': 'string', 'value': 'auto' }]
  },
  'figure': {
    'display': 'inline-block'
  },
  'figure-img': {
    'marginBottom': [{ 'unit': 'rem', 'value': 0.5 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1 }]
  },
  'figure-caption': {
    'fontSize': [{ 'unit': '%V', 'value': 0.9 }],
    'color': '#b0bec5'
  },
  'code': {
    'fontFamily': 'Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace'
  },
  'kbd': {
    'fontFamily': 'Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace'
  },
  'pre': {
    'fontFamily': 'Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace'
  },
  'samp': {
    'fontFamily': 'Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace'
  },
  'code': {
    'padding': [{ 'unit': 'rem', 'value': 0.2 }, { 'unit': 'rem', 'value': 0.4 }, { 'unit': 'rem', 'value': 0.2 }, { 'unit': 'rem', 'value': 0.4 }],
    'fontSize': [{ 'unit': '%V', 'value': 0.9 }],
    'color': '#bd4147',
    'backgroundColor': '#eceff1'
  },
  'a > code': {
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'color': 'inherit',
    'backgroundColor': 'inherit'
  },
  'kbd': {
    'padding': [{ 'unit': 'rem', 'value': 0.2 }, { 'unit': 'rem', 'value': 0.4 }, { 'unit': 'rem', 'value': 0.2 }, { 'unit': 'rem', 'value': 0.4 }],
    'fontSize': [{ 'unit': '%V', 'value': 0.9 }],
    'color': '#fff',
    'backgroundColor': '#263238'
  },
  'kbd kbd': {
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'fontSize': [{ 'unit': '%V', 'value': 1 }],
    'fontWeight': 'bold'
  },
  'pre': {
    'display': 'block',
    'marginTop': [{ 'unit': 'px', 'value': 0 }],
    'marginBottom': [{ 'unit': 'rem', 'value': 1 }],
    'fontSize': [{ 'unit': '%V', 'value': 0.9 }],
    'color': '#263238'
  },
  'pre code': {
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'fontSize': [{ 'unit': 'string', 'value': 'inherit' }],
    'color': 'inherit',
    'backgroundColor': 'transparent',
    'borderRadius': '0'
  },
  'pre-scrollable': {
    'maxHeight': [{ 'unit': 'px', 'value': 340 }],
    'overflowY': 'scroll'
  },
  'container': {
    'marginRight': [{ 'unit': 'string', 'value': 'auto' }],
    'marginLeft': [{ 'unit': 'string', 'value': 'auto' }],
    'paddingRight': [{ 'unit': 'px', 'value': 15 }],
    'paddingLeft': [{ 'unit': 'px', 'value': 15 }],
    '>w576': {
      'paddingRight': [{ 'unit': 'px', 'value': 15 }],
      'paddingLeft': [{ 'unit': 'px', 'value': 15 }]
    },
    '>w768': {
      'paddingRight': [{ 'unit': 'px', 'value': 15 }],
      'paddingLeft': [{ 'unit': 'px', 'value': 15 }]
    },
    '>w992': {
      'paddingRight': [{ 'unit': 'px', 'value': 15 }],
      'paddingLeft': [{ 'unit': 'px', 'value': 15 }]
    },
    '>w1200': {
      'paddingRight': [{ 'unit': 'px', 'value': 15 }],
      'paddingLeft': [{ 'unit': 'px', 'value': 15 }]
    },
    '>w576': {
      'width': [{ 'unit': 'px', 'value': 540 }],
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w768': {
      'width': [{ 'unit': 'px', 'value': 720 }],
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w992': {
      'width': [{ 'unit': 'px', 'value': 960 }],
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w1200': {
      'width': [{ 'unit': 'px', 'value': 1140 }],
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    }
  },
  'container-fluid': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'marginRight': [{ 'unit': 'string', 'value': 'auto' }],
    'marginLeft': [{ 'unit': 'string', 'value': 'auto' }],
    'paddingRight': [{ 'unit': 'px', 'value': 15 }],
    'paddingLeft': [{ 'unit': 'px', 'value': 15 }],
    '>w576': {
      'paddingRight': [{ 'unit': 'px', 'value': 15 }],
      'paddingLeft': [{ 'unit': 'px', 'value': 15 }]
    },
    '>w768': {
      'paddingRight': [{ 'unit': 'px', 'value': 15 }],
      'paddingLeft': [{ 'unit': 'px', 'value': 15 }]
    },
    '>w992': {
      'paddingRight': [{ 'unit': 'px', 'value': 15 }],
      'paddingLeft': [{ 'unit': 'px', 'value': 15 }]
    },
    '>w1200': {
      'paddingRight': [{ 'unit': 'px', 'value': 15 }],
      'paddingLeft': [{ 'unit': 'px', 'value': 15 }]
    }
  },
  'row': {
    'display': 'flex',
    'flexWrap': 'wrap',
    'marginRight': [{ 'unit': 'px', 'value': -15 }],
    'marginLeft': [{ 'unit': 'px', 'value': -15 }],
    '>w576': {
      'marginRight': [{ 'unit': 'px', 'value': -15 }],
      'marginLeft': [{ 'unit': 'px', 'value': -15 }]
    },
    '>w768': {
      'marginRight': [{ 'unit': 'px', 'value': -15 }],
      'marginLeft': [{ 'unit': 'px', 'value': -15 }]
    },
    '>w992': {
      'marginRight': [{ 'unit': 'px', 'value': -15 }],
      'marginLeft': [{ 'unit': 'px', 'value': -15 }]
    },
    '>w1200': {
      'marginRight': [{ 'unit': 'px', 'value': -15 }],
      'marginLeft': [{ 'unit': 'px', 'value': -15 }]
    }
  },
  'no-gutters': {
    'marginRight': [{ 'unit': 'px', 'value': 0 }],
    'marginLeft': [{ 'unit': 'px', 'value': 0 }]
  },
  'no-gutters > col': {
    'paddingRight': [{ 'unit': 'px', 'value': 0 }],
    'paddingLeft': [{ 'unit': 'px', 'value': 0 }]
  },
  'no-gutters > [class*="col-"]': {
    'paddingRight': [{ 'unit': 'px', 'value': 0 }],
    'paddingLeft': [{ 'unit': 'px', 'value': 0 }]
  },
  'col-1': {
    'position': 'relative',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'minHeight': [{ 'unit': 'px', 'value': 1 }],
    'paddingRight': [{ 'unit': 'px', 'value': 15 }],
    'paddingLeft': [{ 'unit': 'px', 'value': 15 }],
    '>w576': {
      'paddingRight': [{ 'unit': 'px', 'value': 15 }],
      'paddingLeft': [{ 'unit': 'px', 'value': 15 }]
    },
    '>w768': {
      'paddingRight': [{ 'unit': 'px', 'value': 15 }],
      'paddingLeft': [{ 'unit': 'px', 'value': 15 }]
    },
    '>w992': {
      'paddingRight': [{ 'unit': 'px', 'value': 15 }],
      'paddingLeft': [{ 'unit': 'px', 'value': 15 }]
    },
    '>w1200': {
      'paddingRight': [{ 'unit': 'px', 'value': 15 }],
      'paddingLeft': [{ 'unit': 'px', 'value': 15 }]
    },
    '>w576': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w768': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w992': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w1200': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    }
  },
  'col-2': {
    'position': 'relative',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'minHeight': [{ 'unit': 'px', 'value': 1 }],
    'paddingRight': [{ 'unit': 'px', 'value': 15 }],
    'paddingLeft': [{ 'unit': 'px', 'value': 15 }],
    '>w576': {
      'paddingRight': [{ 'unit': 'px', 'value': 15 }],
      'paddingLeft': [{ 'unit': 'px', 'value': 15 }]
    },
    '>w768': {
      'paddingRight': [{ 'unit': 'px', 'value': 15 }],
      'paddingLeft': [{ 'unit': 'px', 'value': 15 }]
    },
    '>w992': {
      'paddingRight': [{ 'unit': 'px', 'value': 15 }],
      'paddingLeft': [{ 'unit': 'px', 'value': 15 }]
    },
    '>w1200': {
      'paddingRight': [{ 'unit': 'px', 'value': 15 }],
      'paddingLeft': [{ 'unit': 'px', 'value': 15 }]
    },
    '>w576': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w768': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w992': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w1200': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    }
  },
  'col-3': {
    'position': 'relative',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'minHeight': [{ 'unit': 'px', 'value': 1 }],
    'paddingRight': [{ 'unit': 'px', 'value': 15 }],
    'paddingLeft': [{ 'unit': 'px', 'value': 15 }],
    '>w576': {
      'paddingRight': [{ 'unit': 'px', 'value': 15 }],
      'paddingLeft': [{ 'unit': 'px', 'value': 15 }]
    },
    '>w768': {
      'paddingRight': [{ 'unit': 'px', 'value': 15 }],
      'paddingLeft': [{ 'unit': 'px', 'value': 15 }]
    },
    '>w992': {
      'paddingRight': [{ 'unit': 'px', 'value': 15 }],
      'paddingLeft': [{ 'unit': 'px', 'value': 15 }]
    },
    '>w1200': {
      'paddingRight': [{ 'unit': 'px', 'value': 15 }],
      'paddingLeft': [{ 'unit': 'px', 'value': 15 }]
    },
    '>w576': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w768': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w992': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w1200': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    }
  },
  'col-4': {
    'position': 'relative',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'minHeight': [{ 'unit': 'px', 'value': 1 }],
    'paddingRight': [{ 'unit': 'px', 'value': 15 }],
    'paddingLeft': [{ 'unit': 'px', 'value': 15 }],
    '>w576': {
      'paddingRight': [{ 'unit': 'px', 'value': 15 }],
      'paddingLeft': [{ 'unit': 'px', 'value': 15 }]
    },
    '>w768': {
      'paddingRight': [{ 'unit': 'px', 'value': 15 }],
      'paddingLeft': [{ 'unit': 'px', 'value': 15 }]
    },
    '>w992': {
      'paddingRight': [{ 'unit': 'px', 'value': 15 }],
      'paddingLeft': [{ 'unit': 'px', 'value': 15 }]
    },
    '>w1200': {
      'paddingRight': [{ 'unit': 'px', 'value': 15 }],
      'paddingLeft': [{ 'unit': 'px', 'value': 15 }]
    },
    '>w576': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w768': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w992': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w1200': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    }
  },
  'col-5': {
    'position': 'relative',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'minHeight': [{ 'unit': 'px', 'value': 1 }],
    'paddingRight': [{ 'unit': 'px', 'value': 15 }],
    'paddingLeft': [{ 'unit': 'px', 'value': 15 }],
    '>w576': {
      'paddingRight': [{ 'unit': 'px', 'value': 15 }],
      'paddingLeft': [{ 'unit': 'px', 'value': 15 }]
    },
    '>w768': {
      'paddingRight': [{ 'unit': 'px', 'value': 15 }],
      'paddingLeft': [{ 'unit': 'px', 'value': 15 }]
    },
    '>w992': {
      'paddingRight': [{ 'unit': 'px', 'value': 15 }],
      'paddingLeft': [{ 'unit': 'px', 'value': 15 }]
    },
    '>w1200': {
      'paddingRight': [{ 'unit': 'px', 'value': 15 }],
      'paddingLeft': [{ 'unit': 'px', 'value': 15 }]
    },
    '>w576': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w768': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w992': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w1200': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    }
  },
  'col-6': {
    'position': 'relative',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'minHeight': [{ 'unit': 'px', 'value': 1 }],
    'paddingRight': [{ 'unit': 'px', 'value': 15 }],
    'paddingLeft': [{ 'unit': 'px', 'value': 15 }],
    '>w576': {
      'paddingRight': [{ 'unit': 'px', 'value': 15 }],
      'paddingLeft': [{ 'unit': 'px', 'value': 15 }]
    },
    '>w768': {
      'paddingRight': [{ 'unit': 'px', 'value': 15 }],
      'paddingLeft': [{ 'unit': 'px', 'value': 15 }]
    },
    '>w992': {
      'paddingRight': [{ 'unit': 'px', 'value': 15 }],
      'paddingLeft': [{ 'unit': 'px', 'value': 15 }]
    },
    '>w1200': {
      'paddingRight': [{ 'unit': 'px', 'value': 15 }],
      'paddingLeft': [{ 'unit': 'px', 'value': 15 }]
    },
    '>w576': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w768': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w992': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w1200': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    }
  },
  'col-7': {
    'position': 'relative',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'minHeight': [{ 'unit': 'px', 'value': 1 }],
    'paddingRight': [{ 'unit': 'px', 'value': 15 }],
    'paddingLeft': [{ 'unit': 'px', 'value': 15 }],
    '>w576': {
      'paddingRight': [{ 'unit': 'px', 'value': 15 }],
      'paddingLeft': [{ 'unit': 'px', 'value': 15 }]
    },
    '>w768': {
      'paddingRight': [{ 'unit': 'px', 'value': 15 }],
      'paddingLeft': [{ 'unit': 'px', 'value': 15 }]
    },
    '>w992': {
      'paddingRight': [{ 'unit': 'px', 'value': 15 }],
      'paddingLeft': [{ 'unit': 'px', 'value': 15 }]
    },
    '>w1200': {
      'paddingRight': [{ 'unit': 'px', 'value': 15 }],
      'paddingLeft': [{ 'unit': 'px', 'value': 15 }]
    },
    '>w576': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w768': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w992': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w1200': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    }
  },
  'col-8': {
    'position': 'relative',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'minHeight': [{ 'unit': 'px', 'value': 1 }],
    'paddingRight': [{ 'unit': 'px', 'value': 15 }],
    'paddingLeft': [{ 'unit': 'px', 'value': 15 }],
    '>w576': {
      'paddingRight': [{ 'unit': 'px', 'value': 15 }],
      'paddingLeft': [{ 'unit': 'px', 'value': 15 }]
    },
    '>w768': {
      'paddingRight': [{ 'unit': 'px', 'value': 15 }],
      'paddingLeft': [{ 'unit': 'px', 'value': 15 }]
    },
    '>w992': {
      'paddingRight': [{ 'unit': 'px', 'value': 15 }],
      'paddingLeft': [{ 'unit': 'px', 'value': 15 }]
    },
    '>w1200': {
      'paddingRight': [{ 'unit': 'px', 'value': 15 }],
      'paddingLeft': [{ 'unit': 'px', 'value': 15 }]
    },
    '>w576': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w768': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w992': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w1200': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    }
  },
  'col-9': {
    'position': 'relative',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'minHeight': [{ 'unit': 'px', 'value': 1 }],
    'paddingRight': [{ 'unit': 'px', 'value': 15 }],
    'paddingLeft': [{ 'unit': 'px', 'value': 15 }],
    '>w576': {
      'paddingRight': [{ 'unit': 'px', 'value': 15 }],
      'paddingLeft': [{ 'unit': 'px', 'value': 15 }]
    },
    '>w768': {
      'paddingRight': [{ 'unit': 'px', 'value': 15 }],
      'paddingLeft': [{ 'unit': 'px', 'value': 15 }]
    },
    '>w992': {
      'paddingRight': [{ 'unit': 'px', 'value': 15 }],
      'paddingLeft': [{ 'unit': 'px', 'value': 15 }]
    },
    '>w1200': {
      'paddingRight': [{ 'unit': 'px', 'value': 15 }],
      'paddingLeft': [{ 'unit': 'px', 'value': 15 }]
    },
    '>w576': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w768': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w992': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w1200': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    }
  },
  'col-10': {
    'position': 'relative',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'minHeight': [{ 'unit': 'px', 'value': 1 }],
    'paddingRight': [{ 'unit': 'px', 'value': 15 }],
    'paddingLeft': [{ 'unit': 'px', 'value': 15 }],
    '>w576': {
      'paddingRight': [{ 'unit': 'px', 'value': 15 }],
      'paddingLeft': [{ 'unit': 'px', 'value': 15 }]
    },
    '>w768': {
      'paddingRight': [{ 'unit': 'px', 'value': 15 }],
      'paddingLeft': [{ 'unit': 'px', 'value': 15 }]
    },
    '>w992': {
      'paddingRight': [{ 'unit': 'px', 'value': 15 }],
      'paddingLeft': [{ 'unit': 'px', 'value': 15 }]
    },
    '>w1200': {
      'paddingRight': [{ 'unit': 'px', 'value': 15 }],
      'paddingLeft': [{ 'unit': 'px', 'value': 15 }]
    },
    '>w576': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w768': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w992': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w1200': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    }
  },
  'col-11': {
    'position': 'relative',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'minHeight': [{ 'unit': 'px', 'value': 1 }],
    'paddingRight': [{ 'unit': 'px', 'value': 15 }],
    'paddingLeft': [{ 'unit': 'px', 'value': 15 }],
    '>w576': {
      'paddingRight': [{ 'unit': 'px', 'value': 15 }],
      'paddingLeft': [{ 'unit': 'px', 'value': 15 }]
    },
    '>w768': {
      'paddingRight': [{ 'unit': 'px', 'value': 15 }],
      'paddingLeft': [{ 'unit': 'px', 'value': 15 }]
    },
    '>w992': {
      'paddingRight': [{ 'unit': 'px', 'value': 15 }],
      'paddingLeft': [{ 'unit': 'px', 'value': 15 }]
    },
    '>w1200': {
      'paddingRight': [{ 'unit': 'px', 'value': 15 }],
      'paddingLeft': [{ 'unit': 'px', 'value': 15 }]
    },
    '>w576': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w768': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w992': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w1200': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    }
  },
  'col-12': {
    'position': 'relative',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'minHeight': [{ 'unit': 'px', 'value': 1 }],
    'paddingRight': [{ 'unit': 'px', 'value': 15 }],
    'paddingLeft': [{ 'unit': 'px', 'value': 15 }],
    '>w576': {
      'paddingRight': [{ 'unit': 'px', 'value': 15 }],
      'paddingLeft': [{ 'unit': 'px', 'value': 15 }]
    },
    '>w768': {
      'paddingRight': [{ 'unit': 'px', 'value': 15 }],
      'paddingLeft': [{ 'unit': 'px', 'value': 15 }]
    },
    '>w992': {
      'paddingRight': [{ 'unit': 'px', 'value': 15 }],
      'paddingLeft': [{ 'unit': 'px', 'value': 15 }]
    },
    '>w1200': {
      'paddingRight': [{ 'unit': 'px', 'value': 15 }],
      'paddingLeft': [{ 'unit': 'px', 'value': 15 }]
    },
    '>w576': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w768': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w992': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w1200': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    }
  },
  'col': {
    'position': 'relative',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'minHeight': [{ 'unit': 'px', 'value': 1 }],
    'paddingRight': [{ 'unit': 'px', 'value': 15 }],
    'paddingLeft': [{ 'unit': 'px', 'value': 15 }],
    '>w576': {
      'paddingRight': [{ 'unit': 'px', 'value': 15 }],
      'paddingLeft': [{ 'unit': 'px', 'value': 15 }]
    },
    '>w768': {
      'paddingRight': [{ 'unit': 'px', 'value': 15 }],
      'paddingLeft': [{ 'unit': 'px', 'value': 15 }]
    },
    '>w992': {
      'paddingRight': [{ 'unit': 'px', 'value': 15 }],
      'paddingLeft': [{ 'unit': 'px', 'value': 15 }]
    },
    '>w1200': {
      'paddingRight': [{ 'unit': 'px', 'value': 15 }],
      'paddingLeft': [{ 'unit': 'px', 'value': 15 }]
    },
    '>w576': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w768': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w992': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w1200': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    }
  },
  'col-auto': {
    'position': 'relative',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'minHeight': [{ 'unit': 'px', 'value': 1 }],
    'paddingRight': [{ 'unit': 'px', 'value': 15 }],
    'paddingLeft': [{ 'unit': 'px', 'value': 15 }],
    '>w576': {
      'paddingRight': [{ 'unit': 'px', 'value': 15 }],
      'paddingLeft': [{ 'unit': 'px', 'value': 15 }]
    },
    '>w768': {
      'paddingRight': [{ 'unit': 'px', 'value': 15 }],
      'paddingLeft': [{ 'unit': 'px', 'value': 15 }]
    },
    '>w992': {
      'paddingRight': [{ 'unit': 'px', 'value': 15 }],
      'paddingLeft': [{ 'unit': 'px', 'value': 15 }]
    },
    '>w1200': {
      'paddingRight': [{ 'unit': 'px', 'value': 15 }],
      'paddingLeft': [{ 'unit': 'px', 'value': 15 }]
    },
    '>w576': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w768': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w992': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w1200': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    }
  },
  'col-sm-1': {
    'position': 'relative',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'minHeight': [{ 'unit': 'px', 'value': 1 }],
    'paddingRight': [{ 'unit': 'px', 'value': 15 }],
    'paddingLeft': [{ 'unit': 'px', 'value': 15 }],
    '>w576': {
      'paddingRight': [{ 'unit': 'px', 'value': 15 }],
      'paddingLeft': [{ 'unit': 'px', 'value': 15 }]
    },
    '>w768': {
      'paddingRight': [{ 'unit': 'px', 'value': 15 }],
      'paddingLeft': [{ 'unit': 'px', 'value': 15 }]
    },
    '>w992': {
      'paddingRight': [{ 'unit': 'px', 'value': 15 }],
      'paddingLeft': [{ 'unit': 'px', 'value': 15 }]
    },
    '>w1200': {
      'paddingRight': [{ 'unit': 'px', 'value': 15 }],
      'paddingLeft': [{ 'unit': 'px', 'value': 15 }]
    },
    '>w576': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w768': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w992': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w1200': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    }
  },
  'col-sm-2': {
    'position': 'relative',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'minHeight': [{ 'unit': 'px', 'value': 1 }],
    'paddingRight': [{ 'unit': 'px', 'value': 15 }],
    'paddingLeft': [{ 'unit': 'px', 'value': 15 }],
    '>w576': {
      'paddingRight': [{ 'unit': 'px', 'value': 15 }],
      'paddingLeft': [{ 'unit': 'px', 'value': 15 }]
    },
    '>w768': {
      'paddingRight': [{ 'unit': 'px', 'value': 15 }],
      'paddingLeft': [{ 'unit': 'px', 'value': 15 }]
    },
    '>w992': {
      'paddingRight': [{ 'unit': 'px', 'value': 15 }],
      'paddingLeft': [{ 'unit': 'px', 'value': 15 }]
    },
    '>w1200': {
      'paddingRight': [{ 'unit': 'px', 'value': 15 }],
      'paddingLeft': [{ 'unit': 'px', 'value': 15 }]
    },
    '>w576': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w768': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w992': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w1200': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    }
  },
  'col-sm-3': {
    'position': 'relative',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'minHeight': [{ 'unit': 'px', 'value': 1 }],
    'paddingRight': [{ 'unit': 'px', 'value': 15 }],
    'paddingLeft': [{ 'unit': 'px', 'value': 15 }],
    '>w576': {
      'paddingRight': [{ 'unit': 'px', 'value': 15 }],
      'paddingLeft': [{ 'unit': 'px', 'value': 15 }]
    },
    '>w768': {
      'paddingRight': [{ 'unit': 'px', 'value': 15 }],
      'paddingLeft': [{ 'unit': 'px', 'value': 15 }]
    },
    '>w992': {
      'paddingRight': [{ 'unit': 'px', 'value': 15 }],
      'paddingLeft': [{ 'unit': 'px', 'value': 15 }]
    },
    '>w1200': {
      'paddingRight': [{ 'unit': 'px', 'value': 15 }],
      'paddingLeft': [{ 'unit': 'px', 'value': 15 }]
    },
    '>w576': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w768': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w992': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w1200': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    }
  },
  'col-sm-4': {
    'position': 'relative',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'minHeight': [{ 'unit': 'px', 'value': 1 }],
    'paddingRight': [{ 'unit': 'px', 'value': 15 }],
    'paddingLeft': [{ 'unit': 'px', 'value': 15 }],
    '>w576': {
      'paddingRight': [{ 'unit': 'px', 'value': 15 }],
      'paddingLeft': [{ 'unit': 'px', 'value': 15 }]
    },
    '>w768': {
      'paddingRight': [{ 'unit': 'px', 'value': 15 }],
      'paddingLeft': [{ 'unit': 'px', 'value': 15 }]
    },
    '>w992': {
      'paddingRight': [{ 'unit': 'px', 'value': 15 }],
      'paddingLeft': [{ 'unit': 'px', 'value': 15 }]
    },
    '>w1200': {
      'paddingRight': [{ 'unit': 'px', 'value': 15 }],
      'paddingLeft': [{ 'unit': 'px', 'value': 15 }]
    },
    '>w576': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w768': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w992': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w1200': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    }
  },
  'col-sm-5': {
    'position': 'relative',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'minHeight': [{ 'unit': 'px', 'value': 1 }],
    'paddingRight': [{ 'unit': 'px', 'value': 15 }],
    'paddingLeft': [{ 'unit': 'px', 'value': 15 }],
    '>w576': {
      'paddingRight': [{ 'unit': 'px', 'value': 15 }],
      'paddingLeft': [{ 'unit': 'px', 'value': 15 }]
    },
    '>w768': {
      'paddingRight': [{ 'unit': 'px', 'value': 15 }],
      'paddingLeft': [{ 'unit': 'px', 'value': 15 }]
    },
    '>w992': {
      'paddingRight': [{ 'unit': 'px', 'value': 15 }],
      'paddingLeft': [{ 'unit': 'px', 'value': 15 }]
    },
    '>w1200': {
      'paddingRight': [{ 'unit': 'px', 'value': 15 }],
      'paddingLeft': [{ 'unit': 'px', 'value': 15 }]
    },
    '>w576': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w768': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w992': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w1200': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    }
  },
  'col-sm-6': {
    'position': 'relative',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'minHeight': [{ 'unit': 'px', 'value': 1 }],
    'paddingRight': [{ 'unit': 'px', 'value': 15 }],
    'paddingLeft': [{ 'unit': 'px', 'value': 15 }],
    '>w576': {
      'paddingRight': [{ 'unit': 'px', 'value': 15 }],
      'paddingLeft': [{ 'unit': 'px', 'value': 15 }]
    },
    '>w768': {
      'paddingRight': [{ 'unit': 'px', 'value': 15 }],
      'paddingLeft': [{ 'unit': 'px', 'value': 15 }]
    },
    '>w992': {
      'paddingRight': [{ 'unit': 'px', 'value': 15 }],
      'paddingLeft': [{ 'unit': 'px', 'value': 15 }]
    },
    '>w1200': {
      'paddingRight': [{ 'unit': 'px', 'value': 15 }],
      'paddingLeft': [{ 'unit': 'px', 'value': 15 }]
    },
    '>w576': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w768': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w992': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w1200': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    }
  },
  'col-sm-7': {
    'position': 'relative',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'minHeight': [{ 'unit': 'px', 'value': 1 }],
    'paddingRight': [{ 'unit': 'px', 'value': 15 }],
    'paddingLeft': [{ 'unit': 'px', 'value': 15 }],
    '>w576': {
      'paddingRight': [{ 'unit': 'px', 'value': 15 }],
      'paddingLeft': [{ 'unit': 'px', 'value': 15 }]
    },
    '>w768': {
      'paddingRight': [{ 'unit': 'px', 'value': 15 }],
      'paddingLeft': [{ 'unit': 'px', 'value': 15 }]
    },
    '>w992': {
      'paddingRight': [{ 'unit': 'px', 'value': 15 }],
      'paddingLeft': [{ 'unit': 'px', 'value': 15 }]
    },
    '>w1200': {
      'paddingRight': [{ 'unit': 'px', 'value': 15 }],
      'paddingLeft': [{ 'unit': 'px', 'value': 15 }]
    },
    '>w576': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w768': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w992': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w1200': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    }
  },
  'col-sm-8': {
    'position': 'relative',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'minHeight': [{ 'unit': 'px', 'value': 1 }],
    'paddingRight': [{ 'unit': 'px', 'value': 15 }],
    'paddingLeft': [{ 'unit': 'px', 'value': 15 }],
    '>w576': {
      'paddingRight': [{ 'unit': 'px', 'value': 15 }],
      'paddingLeft': [{ 'unit': 'px', 'value': 15 }]
    },
    '>w768': {
      'paddingRight': [{ 'unit': 'px', 'value': 15 }],
      'paddingLeft': [{ 'unit': 'px', 'value': 15 }]
    },
    '>w992': {
      'paddingRight': [{ 'unit': 'px', 'value': 15 }],
      'paddingLeft': [{ 'unit': 'px', 'value': 15 }]
    },
    '>w1200': {
      'paddingRight': [{ 'unit': 'px', 'value': 15 }],
      'paddingLeft': [{ 'unit': 'px', 'value': 15 }]
    },
    '>w576': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w768': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w992': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w1200': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    }
  },
  'col-sm-9': {
    'position': 'relative',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'minHeight': [{ 'unit': 'px', 'value': 1 }],
    'paddingRight': [{ 'unit': 'px', 'value': 15 }],
    'paddingLeft': [{ 'unit': 'px', 'value': 15 }],
    '>w576': {
      'paddingRight': [{ 'unit': 'px', 'value': 15 }],
      'paddingLeft': [{ 'unit': 'px', 'value': 15 }]
    },
    '>w768': {
      'paddingRight': [{ 'unit': 'px', 'value': 15 }],
      'paddingLeft': [{ 'unit': 'px', 'value': 15 }]
    },
    '>w992': {
      'paddingRight': [{ 'unit': 'px', 'value': 15 }],
      'paddingLeft': [{ 'unit': 'px', 'value': 15 }]
    },
    '>w1200': {
      'paddingRight': [{ 'unit': 'px', 'value': 15 }],
      'paddingLeft': [{ 'unit': 'px', 'value': 15 }]
    },
    '>w576': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w768': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w992': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w1200': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    }
  },
  'col-sm-10': {
    'position': 'relative',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'minHeight': [{ 'unit': 'px', 'value': 1 }],
    'paddingRight': [{ 'unit': 'px', 'value': 15 }],
    'paddingLeft': [{ 'unit': 'px', 'value': 15 }],
    '>w576': {
      'paddingRight': [{ 'unit': 'px', 'value': 15 }],
      'paddingLeft': [{ 'unit': 'px', 'value': 15 }]
    },
    '>w768': {
      'paddingRight': [{ 'unit': 'px', 'value': 15 }],
      'paddingLeft': [{ 'unit': 'px', 'value': 15 }]
    },
    '>w992': {
      'paddingRight': [{ 'unit': 'px', 'value': 15 }],
      'paddingLeft': [{ 'unit': 'px', 'value': 15 }]
    },
    '>w1200': {
      'paddingRight': [{ 'unit': 'px', 'value': 15 }],
      'paddingLeft': [{ 'unit': 'px', 'value': 15 }]
    },
    '>w576': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w768': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w992': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w1200': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    }
  },
  'col-sm-11': {
    'position': 'relative',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'minHeight': [{ 'unit': 'px', 'value': 1 }],
    'paddingRight': [{ 'unit': 'px', 'value': 15 }],
    'paddingLeft': [{ 'unit': 'px', 'value': 15 }],
    '>w576': {
      'paddingRight': [{ 'unit': 'px', 'value': 15 }],
      'paddingLeft': [{ 'unit': 'px', 'value': 15 }]
    },
    '>w768': {
      'paddingRight': [{ 'unit': 'px', 'value': 15 }],
      'paddingLeft': [{ 'unit': 'px', 'value': 15 }]
    },
    '>w992': {
      'paddingRight': [{ 'unit': 'px', 'value': 15 }],
      'paddingLeft': [{ 'unit': 'px', 'value': 15 }]
    },
    '>w1200': {
      'paddingRight': [{ 'unit': 'px', 'value': 15 }],
      'paddingLeft': [{ 'unit': 'px', 'value': 15 }]
    },
    '>w576': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w768': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w992': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w1200': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    }
  },
  'col-sm-12': {
    'position': 'relative',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'minHeight': [{ 'unit': 'px', 'value': 1 }],
    'paddingRight': [{ 'unit': 'px', 'value': 15 }],
    'paddingLeft': [{ 'unit': 'px', 'value': 15 }],
    '>w576': {
      'paddingRight': [{ 'unit': 'px', 'value': 15 }],
      'paddingLeft': [{ 'unit': 'px', 'value': 15 }]
    },
    '>w768': {
      'paddingRight': [{ 'unit': 'px', 'value': 15 }],
      'paddingLeft': [{ 'unit': 'px', 'value': 15 }]
    },
    '>w992': {
      'paddingRight': [{ 'unit': 'px', 'value': 15 }],
      'paddingLeft': [{ 'unit': 'px', 'value': 15 }]
    },
    '>w1200': {
      'paddingRight': [{ 'unit': 'px', 'value': 15 }],
      'paddingLeft': [{ 'unit': 'px', 'value': 15 }]
    },
    '>w576': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w768': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w992': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w1200': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    }
  },
  'col-sm': {
    'position': 'relative',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'minHeight': [{ 'unit': 'px', 'value': 1 }],
    'paddingRight': [{ 'unit': 'px', 'value': 15 }],
    'paddingLeft': [{ 'unit': 'px', 'value': 15 }],
    '>w576': {
      'paddingRight': [{ 'unit': 'px', 'value': 15 }],
      'paddingLeft': [{ 'unit': 'px', 'value': 15 }]
    },
    '>w768': {
      'paddingRight': [{ 'unit': 'px', 'value': 15 }],
      'paddingLeft': [{ 'unit': 'px', 'value': 15 }]
    },
    '>w992': {
      'paddingRight': [{ 'unit': 'px', 'value': 15 }],
      'paddingLeft': [{ 'unit': 'px', 'value': 15 }]
    },
    '>w1200': {
      'paddingRight': [{ 'unit': 'px', 'value': 15 }],
      'paddingLeft': [{ 'unit': 'px', 'value': 15 }]
    },
    '>w576': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w768': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w992': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w1200': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    }
  },
  'col-sm-auto': {
    'position': 'relative',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'minHeight': [{ 'unit': 'px', 'value': 1 }],
    'paddingRight': [{ 'unit': 'px', 'value': 15 }],
    'paddingLeft': [{ 'unit': 'px', 'value': 15 }],
    '>w576': {
      'paddingRight': [{ 'unit': 'px', 'value': 15 }],
      'paddingLeft': [{ 'unit': 'px', 'value': 15 }]
    },
    '>w768': {
      'paddingRight': [{ 'unit': 'px', 'value': 15 }],
      'paddingLeft': [{ 'unit': 'px', 'value': 15 }]
    },
    '>w992': {
      'paddingRight': [{ 'unit': 'px', 'value': 15 }],
      'paddingLeft': [{ 'unit': 'px', 'value': 15 }]
    },
    '>w1200': {
      'paddingRight': [{ 'unit': 'px', 'value': 15 }],
      'paddingLeft': [{ 'unit': 'px', 'value': 15 }]
    },
    '>w576': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w768': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w992': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w1200': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    }
  },
  'col-md-1': {
    'position': 'relative',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'minHeight': [{ 'unit': 'px', 'value': 1 }],
    'paddingRight': [{ 'unit': 'px', 'value': 15 }],
    'paddingLeft': [{ 'unit': 'px', 'value': 15 }],
    '>w576': {
      'paddingRight': [{ 'unit': 'px', 'value': 15 }],
      'paddingLeft': [{ 'unit': 'px', 'value': 15 }]
    },
    '>w768': {
      'paddingRight': [{ 'unit': 'px', 'value': 15 }],
      'paddingLeft': [{ 'unit': 'px', 'value': 15 }]
    },
    '>w992': {
      'paddingRight': [{ 'unit': 'px', 'value': 15 }],
      'paddingLeft': [{ 'unit': 'px', 'value': 15 }]
    },
    '>w1200': {
      'paddingRight': [{ 'unit': 'px', 'value': 15 }],
      'paddingLeft': [{ 'unit': 'px', 'value': 15 }]
    },
    '>w576': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w768': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w992': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w1200': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    }
  },
  'col-md-2': {
    'position': 'relative',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'minHeight': [{ 'unit': 'px', 'value': 1 }],
    'paddingRight': [{ 'unit': 'px', 'value': 15 }],
    'paddingLeft': [{ 'unit': 'px', 'value': 15 }],
    '>w576': {
      'paddingRight': [{ 'unit': 'px', 'value': 15 }],
      'paddingLeft': [{ 'unit': 'px', 'value': 15 }]
    },
    '>w768': {
      'paddingRight': [{ 'unit': 'px', 'value': 15 }],
      'paddingLeft': [{ 'unit': 'px', 'value': 15 }]
    },
    '>w992': {
      'paddingRight': [{ 'unit': 'px', 'value': 15 }],
      'paddingLeft': [{ 'unit': 'px', 'value': 15 }]
    },
    '>w1200': {
      'paddingRight': [{ 'unit': 'px', 'value': 15 }],
      'paddingLeft': [{ 'unit': 'px', 'value': 15 }]
    },
    '>w576': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w768': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w992': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w1200': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    }
  },
  'col-md-3': {
    'position': 'relative',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'minHeight': [{ 'unit': 'px', 'value': 1 }],
    'paddingRight': [{ 'unit': 'px', 'value': 15 }],
    'paddingLeft': [{ 'unit': 'px', 'value': 15 }],
    '>w576': {
      'paddingRight': [{ 'unit': 'px', 'value': 15 }],
      'paddingLeft': [{ 'unit': 'px', 'value': 15 }]
    },
    '>w768': {
      'paddingRight': [{ 'unit': 'px', 'value': 15 }],
      'paddingLeft': [{ 'unit': 'px', 'value': 15 }]
    },
    '>w992': {
      'paddingRight': [{ 'unit': 'px', 'value': 15 }],
      'paddingLeft': [{ 'unit': 'px', 'value': 15 }]
    },
    '>w1200': {
      'paddingRight': [{ 'unit': 'px', 'value': 15 }],
      'paddingLeft': [{ 'unit': 'px', 'value': 15 }]
    },
    '>w576': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w768': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w992': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w1200': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    }
  },
  'col-md-4': {
    'position': 'relative',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'minHeight': [{ 'unit': 'px', 'value': 1 }],
    'paddingRight': [{ 'unit': 'px', 'value': 15 }],
    'paddingLeft': [{ 'unit': 'px', 'value': 15 }],
    '>w576': {
      'paddingRight': [{ 'unit': 'px', 'value': 15 }],
      'paddingLeft': [{ 'unit': 'px', 'value': 15 }]
    },
    '>w768': {
      'paddingRight': [{ 'unit': 'px', 'value': 15 }],
      'paddingLeft': [{ 'unit': 'px', 'value': 15 }]
    },
    '>w992': {
      'paddingRight': [{ 'unit': 'px', 'value': 15 }],
      'paddingLeft': [{ 'unit': 'px', 'value': 15 }]
    },
    '>w1200': {
      'paddingRight': [{ 'unit': 'px', 'value': 15 }],
      'paddingLeft': [{ 'unit': 'px', 'value': 15 }]
    },
    '>w576': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w768': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w992': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w1200': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    }
  },
  'col-md-5': {
    'position': 'relative',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'minHeight': [{ 'unit': 'px', 'value': 1 }],
    'paddingRight': [{ 'unit': 'px', 'value': 15 }],
    'paddingLeft': [{ 'unit': 'px', 'value': 15 }],
    '>w576': {
      'paddingRight': [{ 'unit': 'px', 'value': 15 }],
      'paddingLeft': [{ 'unit': 'px', 'value': 15 }]
    },
    '>w768': {
      'paddingRight': [{ 'unit': 'px', 'value': 15 }],
      'paddingLeft': [{ 'unit': 'px', 'value': 15 }]
    },
    '>w992': {
      'paddingRight': [{ 'unit': 'px', 'value': 15 }],
      'paddingLeft': [{ 'unit': 'px', 'value': 15 }]
    },
    '>w1200': {
      'paddingRight': [{ 'unit': 'px', 'value': 15 }],
      'paddingLeft': [{ 'unit': 'px', 'value': 15 }]
    },
    '>w576': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w768': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w992': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w1200': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    }
  },
  'col-md-6': {
    'position': 'relative',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'minHeight': [{ 'unit': 'px', 'value': 1 }],
    'paddingRight': [{ 'unit': 'px', 'value': 15 }],
    'paddingLeft': [{ 'unit': 'px', 'value': 15 }],
    '>w576': {
      'paddingRight': [{ 'unit': 'px', 'value': 15 }],
      'paddingLeft': [{ 'unit': 'px', 'value': 15 }]
    },
    '>w768': {
      'paddingRight': [{ 'unit': 'px', 'value': 15 }],
      'paddingLeft': [{ 'unit': 'px', 'value': 15 }]
    },
    '>w992': {
      'paddingRight': [{ 'unit': 'px', 'value': 15 }],
      'paddingLeft': [{ 'unit': 'px', 'value': 15 }]
    },
    '>w1200': {
      'paddingRight': [{ 'unit': 'px', 'value': 15 }],
      'paddingLeft': [{ 'unit': 'px', 'value': 15 }]
    },
    '>w576': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w768': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w992': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w1200': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    }
  },
  'col-md-7': {
    'position': 'relative',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'minHeight': [{ 'unit': 'px', 'value': 1 }],
    'paddingRight': [{ 'unit': 'px', 'value': 15 }],
    'paddingLeft': [{ 'unit': 'px', 'value': 15 }],
    '>w576': {
      'paddingRight': [{ 'unit': 'px', 'value': 15 }],
      'paddingLeft': [{ 'unit': 'px', 'value': 15 }]
    },
    '>w768': {
      'paddingRight': [{ 'unit': 'px', 'value': 15 }],
      'paddingLeft': [{ 'unit': 'px', 'value': 15 }]
    },
    '>w992': {
      'paddingRight': [{ 'unit': 'px', 'value': 15 }],
      'paddingLeft': [{ 'unit': 'px', 'value': 15 }]
    },
    '>w1200': {
      'paddingRight': [{ 'unit': 'px', 'value': 15 }],
      'paddingLeft': [{ 'unit': 'px', 'value': 15 }]
    },
    '>w576': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w768': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w992': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w1200': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    }
  },
  'col-md-8': {
    'position': 'relative',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'minHeight': [{ 'unit': 'px', 'value': 1 }],
    'paddingRight': [{ 'unit': 'px', 'value': 15 }],
    'paddingLeft': [{ 'unit': 'px', 'value': 15 }],
    '>w576': {
      'paddingRight': [{ 'unit': 'px', 'value': 15 }],
      'paddingLeft': [{ 'unit': 'px', 'value': 15 }]
    },
    '>w768': {
      'paddingRight': [{ 'unit': 'px', 'value': 15 }],
      'paddingLeft': [{ 'unit': 'px', 'value': 15 }]
    },
    '>w992': {
      'paddingRight': [{ 'unit': 'px', 'value': 15 }],
      'paddingLeft': [{ 'unit': 'px', 'value': 15 }]
    },
    '>w1200': {
      'paddingRight': [{ 'unit': 'px', 'value': 15 }],
      'paddingLeft': [{ 'unit': 'px', 'value': 15 }]
    },
    '>w576': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w768': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w992': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w1200': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    }
  },
  'col-md-9': {
    'position': 'relative',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'minHeight': [{ 'unit': 'px', 'value': 1 }],
    'paddingRight': [{ 'unit': 'px', 'value': 15 }],
    'paddingLeft': [{ 'unit': 'px', 'value': 15 }],
    '>w576': {
      'paddingRight': [{ 'unit': 'px', 'value': 15 }],
      'paddingLeft': [{ 'unit': 'px', 'value': 15 }]
    },
    '>w768': {
      'paddingRight': [{ 'unit': 'px', 'value': 15 }],
      'paddingLeft': [{ 'unit': 'px', 'value': 15 }]
    },
    '>w992': {
      'paddingRight': [{ 'unit': 'px', 'value': 15 }],
      'paddingLeft': [{ 'unit': 'px', 'value': 15 }]
    },
    '>w1200': {
      'paddingRight': [{ 'unit': 'px', 'value': 15 }],
      'paddingLeft': [{ 'unit': 'px', 'value': 15 }]
    },
    '>w576': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w768': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w992': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w1200': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    }
  },
  'col-md-10': {
    'position': 'relative',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'minHeight': [{ 'unit': 'px', 'value': 1 }],
    'paddingRight': [{ 'unit': 'px', 'value': 15 }],
    'paddingLeft': [{ 'unit': 'px', 'value': 15 }],
    '>w576': {
      'paddingRight': [{ 'unit': 'px', 'value': 15 }],
      'paddingLeft': [{ 'unit': 'px', 'value': 15 }]
    },
    '>w768': {
      'paddingRight': [{ 'unit': 'px', 'value': 15 }],
      'paddingLeft': [{ 'unit': 'px', 'value': 15 }]
    },
    '>w992': {
      'paddingRight': [{ 'unit': 'px', 'value': 15 }],
      'paddingLeft': [{ 'unit': 'px', 'value': 15 }]
    },
    '>w1200': {
      'paddingRight': [{ 'unit': 'px', 'value': 15 }],
      'paddingLeft': [{ 'unit': 'px', 'value': 15 }]
    },
    '>w576': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w768': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w992': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w1200': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    }
  },
  'col-md-11': {
    'position': 'relative',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'minHeight': [{ 'unit': 'px', 'value': 1 }],
    'paddingRight': [{ 'unit': 'px', 'value': 15 }],
    'paddingLeft': [{ 'unit': 'px', 'value': 15 }],
    '>w576': {
      'paddingRight': [{ 'unit': 'px', 'value': 15 }],
      'paddingLeft': [{ 'unit': 'px', 'value': 15 }]
    },
    '>w768': {
      'paddingRight': [{ 'unit': 'px', 'value': 15 }],
      'paddingLeft': [{ 'unit': 'px', 'value': 15 }]
    },
    '>w992': {
      'paddingRight': [{ 'unit': 'px', 'value': 15 }],
      'paddingLeft': [{ 'unit': 'px', 'value': 15 }]
    },
    '>w1200': {
      'paddingRight': [{ 'unit': 'px', 'value': 15 }],
      'paddingLeft': [{ 'unit': 'px', 'value': 15 }]
    },
    '>w576': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w768': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w992': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w1200': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    }
  },
  'col-md-12': {
    'position': 'relative',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'minHeight': [{ 'unit': 'px', 'value': 1 }],
    'paddingRight': [{ 'unit': 'px', 'value': 15 }],
    'paddingLeft': [{ 'unit': 'px', 'value': 15 }],
    '>w576': {
      'paddingRight': [{ 'unit': 'px', 'value': 15 }],
      'paddingLeft': [{ 'unit': 'px', 'value': 15 }]
    },
    '>w768': {
      'paddingRight': [{ 'unit': 'px', 'value': 15 }],
      'paddingLeft': [{ 'unit': 'px', 'value': 15 }]
    },
    '>w992': {
      'paddingRight': [{ 'unit': 'px', 'value': 15 }],
      'paddingLeft': [{ 'unit': 'px', 'value': 15 }]
    },
    '>w1200': {
      'paddingRight': [{ 'unit': 'px', 'value': 15 }],
      'paddingLeft': [{ 'unit': 'px', 'value': 15 }]
    },
    '>w576': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w768': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w992': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w1200': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    }
  },
  'col-md': {
    'position': 'relative',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'minHeight': [{ 'unit': 'px', 'value': 1 }],
    'paddingRight': [{ 'unit': 'px', 'value': 15 }],
    'paddingLeft': [{ 'unit': 'px', 'value': 15 }],
    '>w576': {
      'paddingRight': [{ 'unit': 'px', 'value': 15 }],
      'paddingLeft': [{ 'unit': 'px', 'value': 15 }]
    },
    '>w768': {
      'paddingRight': [{ 'unit': 'px', 'value': 15 }],
      'paddingLeft': [{ 'unit': 'px', 'value': 15 }]
    },
    '>w992': {
      'paddingRight': [{ 'unit': 'px', 'value': 15 }],
      'paddingLeft': [{ 'unit': 'px', 'value': 15 }]
    },
    '>w1200': {
      'paddingRight': [{ 'unit': 'px', 'value': 15 }],
      'paddingLeft': [{ 'unit': 'px', 'value': 15 }]
    },
    '>w576': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w768': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w992': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w1200': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    }
  },
  'col-md-auto': {
    'position': 'relative',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'minHeight': [{ 'unit': 'px', 'value': 1 }],
    'paddingRight': [{ 'unit': 'px', 'value': 15 }],
    'paddingLeft': [{ 'unit': 'px', 'value': 15 }],
    '>w576': {
      'paddingRight': [{ 'unit': 'px', 'value': 15 }],
      'paddingLeft': [{ 'unit': 'px', 'value': 15 }]
    },
    '>w768': {
      'paddingRight': [{ 'unit': 'px', 'value': 15 }],
      'paddingLeft': [{ 'unit': 'px', 'value': 15 }]
    },
    '>w992': {
      'paddingRight': [{ 'unit': 'px', 'value': 15 }],
      'paddingLeft': [{ 'unit': 'px', 'value': 15 }]
    },
    '>w1200': {
      'paddingRight': [{ 'unit': 'px', 'value': 15 }],
      'paddingLeft': [{ 'unit': 'px', 'value': 15 }]
    },
    '>w576': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w768': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w992': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w1200': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    }
  },
  'col-lg-1': {
    'position': 'relative',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'minHeight': [{ 'unit': 'px', 'value': 1 }],
    'paddingRight': [{ 'unit': 'px', 'value': 15 }],
    'paddingLeft': [{ 'unit': 'px', 'value': 15 }],
    '>w576': {
      'paddingRight': [{ 'unit': 'px', 'value': 15 }],
      'paddingLeft': [{ 'unit': 'px', 'value': 15 }]
    },
    '>w768': {
      'paddingRight': [{ 'unit': 'px', 'value': 15 }],
      'paddingLeft': [{ 'unit': 'px', 'value': 15 }]
    },
    '>w992': {
      'paddingRight': [{ 'unit': 'px', 'value': 15 }],
      'paddingLeft': [{ 'unit': 'px', 'value': 15 }]
    },
    '>w1200': {
      'paddingRight': [{ 'unit': 'px', 'value': 15 }],
      'paddingLeft': [{ 'unit': 'px', 'value': 15 }]
    },
    '>w576': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w768': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w992': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w1200': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    }
  },
  'col-lg-2': {
    'position': 'relative',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'minHeight': [{ 'unit': 'px', 'value': 1 }],
    'paddingRight': [{ 'unit': 'px', 'value': 15 }],
    'paddingLeft': [{ 'unit': 'px', 'value': 15 }],
    '>w576': {
      'paddingRight': [{ 'unit': 'px', 'value': 15 }],
      'paddingLeft': [{ 'unit': 'px', 'value': 15 }]
    },
    '>w768': {
      'paddingRight': [{ 'unit': 'px', 'value': 15 }],
      'paddingLeft': [{ 'unit': 'px', 'value': 15 }]
    },
    '>w992': {
      'paddingRight': [{ 'unit': 'px', 'value': 15 }],
      'paddingLeft': [{ 'unit': 'px', 'value': 15 }]
    },
    '>w1200': {
      'paddingRight': [{ 'unit': 'px', 'value': 15 }],
      'paddingLeft': [{ 'unit': 'px', 'value': 15 }]
    },
    '>w576': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w768': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w992': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w1200': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    }
  },
  'col-lg-3': {
    'position': 'relative',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'minHeight': [{ 'unit': 'px', 'value': 1 }],
    'paddingRight': [{ 'unit': 'px', 'value': 15 }],
    'paddingLeft': [{ 'unit': 'px', 'value': 15 }],
    '>w576': {
      'paddingRight': [{ 'unit': 'px', 'value': 15 }],
      'paddingLeft': [{ 'unit': 'px', 'value': 15 }]
    },
    '>w768': {
      'paddingRight': [{ 'unit': 'px', 'value': 15 }],
      'paddingLeft': [{ 'unit': 'px', 'value': 15 }]
    },
    '>w992': {
      'paddingRight': [{ 'unit': 'px', 'value': 15 }],
      'paddingLeft': [{ 'unit': 'px', 'value': 15 }]
    },
    '>w1200': {
      'paddingRight': [{ 'unit': 'px', 'value': 15 }],
      'paddingLeft': [{ 'unit': 'px', 'value': 15 }]
    },
    '>w576': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w768': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w992': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w1200': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    }
  },
  'col-lg-4': {
    'position': 'relative',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'minHeight': [{ 'unit': 'px', 'value': 1 }],
    'paddingRight': [{ 'unit': 'px', 'value': 15 }],
    'paddingLeft': [{ 'unit': 'px', 'value': 15 }],
    '>w576': {
      'paddingRight': [{ 'unit': 'px', 'value': 15 }],
      'paddingLeft': [{ 'unit': 'px', 'value': 15 }]
    },
    '>w768': {
      'paddingRight': [{ 'unit': 'px', 'value': 15 }],
      'paddingLeft': [{ 'unit': 'px', 'value': 15 }]
    },
    '>w992': {
      'paddingRight': [{ 'unit': 'px', 'value': 15 }],
      'paddingLeft': [{ 'unit': 'px', 'value': 15 }]
    },
    '>w1200': {
      'paddingRight': [{ 'unit': 'px', 'value': 15 }],
      'paddingLeft': [{ 'unit': 'px', 'value': 15 }]
    },
    '>w576': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w768': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w992': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w1200': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    }
  },
  'col-lg-5': {
    'position': 'relative',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'minHeight': [{ 'unit': 'px', 'value': 1 }],
    'paddingRight': [{ 'unit': 'px', 'value': 15 }],
    'paddingLeft': [{ 'unit': 'px', 'value': 15 }],
    '>w576': {
      'paddingRight': [{ 'unit': 'px', 'value': 15 }],
      'paddingLeft': [{ 'unit': 'px', 'value': 15 }]
    },
    '>w768': {
      'paddingRight': [{ 'unit': 'px', 'value': 15 }],
      'paddingLeft': [{ 'unit': 'px', 'value': 15 }]
    },
    '>w992': {
      'paddingRight': [{ 'unit': 'px', 'value': 15 }],
      'paddingLeft': [{ 'unit': 'px', 'value': 15 }]
    },
    '>w1200': {
      'paddingRight': [{ 'unit': 'px', 'value': 15 }],
      'paddingLeft': [{ 'unit': 'px', 'value': 15 }]
    },
    '>w576': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w768': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w992': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w1200': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    }
  },
  'col-lg-6': {
    'position': 'relative',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'minHeight': [{ 'unit': 'px', 'value': 1 }],
    'paddingRight': [{ 'unit': 'px', 'value': 15 }],
    'paddingLeft': [{ 'unit': 'px', 'value': 15 }],
    '>w576': {
      'paddingRight': [{ 'unit': 'px', 'value': 15 }],
      'paddingLeft': [{ 'unit': 'px', 'value': 15 }]
    },
    '>w768': {
      'paddingRight': [{ 'unit': 'px', 'value': 15 }],
      'paddingLeft': [{ 'unit': 'px', 'value': 15 }]
    },
    '>w992': {
      'paddingRight': [{ 'unit': 'px', 'value': 15 }],
      'paddingLeft': [{ 'unit': 'px', 'value': 15 }]
    },
    '>w1200': {
      'paddingRight': [{ 'unit': 'px', 'value': 15 }],
      'paddingLeft': [{ 'unit': 'px', 'value': 15 }]
    },
    '>w576': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w768': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w992': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w1200': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    }
  },
  'col-lg-7': {
    'position': 'relative',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'minHeight': [{ 'unit': 'px', 'value': 1 }],
    'paddingRight': [{ 'unit': 'px', 'value': 15 }],
    'paddingLeft': [{ 'unit': 'px', 'value': 15 }],
    '>w576': {
      'paddingRight': [{ 'unit': 'px', 'value': 15 }],
      'paddingLeft': [{ 'unit': 'px', 'value': 15 }]
    },
    '>w768': {
      'paddingRight': [{ 'unit': 'px', 'value': 15 }],
      'paddingLeft': [{ 'unit': 'px', 'value': 15 }]
    },
    '>w992': {
      'paddingRight': [{ 'unit': 'px', 'value': 15 }],
      'paddingLeft': [{ 'unit': 'px', 'value': 15 }]
    },
    '>w1200': {
      'paddingRight': [{ 'unit': 'px', 'value': 15 }],
      'paddingLeft': [{ 'unit': 'px', 'value': 15 }]
    },
    '>w576': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w768': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w992': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w1200': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    }
  },
  'col-lg-8': {
    'position': 'relative',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'minHeight': [{ 'unit': 'px', 'value': 1 }],
    'paddingRight': [{ 'unit': 'px', 'value': 15 }],
    'paddingLeft': [{ 'unit': 'px', 'value': 15 }],
    '>w576': {
      'paddingRight': [{ 'unit': 'px', 'value': 15 }],
      'paddingLeft': [{ 'unit': 'px', 'value': 15 }]
    },
    '>w768': {
      'paddingRight': [{ 'unit': 'px', 'value': 15 }],
      'paddingLeft': [{ 'unit': 'px', 'value': 15 }]
    },
    '>w992': {
      'paddingRight': [{ 'unit': 'px', 'value': 15 }],
      'paddingLeft': [{ 'unit': 'px', 'value': 15 }]
    },
    '>w1200': {
      'paddingRight': [{ 'unit': 'px', 'value': 15 }],
      'paddingLeft': [{ 'unit': 'px', 'value': 15 }]
    },
    '>w576': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w768': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w992': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w1200': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    }
  },
  'col-lg-9': {
    'position': 'relative',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'minHeight': [{ 'unit': 'px', 'value': 1 }],
    'paddingRight': [{ 'unit': 'px', 'value': 15 }],
    'paddingLeft': [{ 'unit': 'px', 'value': 15 }],
    '>w576': {
      'paddingRight': [{ 'unit': 'px', 'value': 15 }],
      'paddingLeft': [{ 'unit': 'px', 'value': 15 }]
    },
    '>w768': {
      'paddingRight': [{ 'unit': 'px', 'value': 15 }],
      'paddingLeft': [{ 'unit': 'px', 'value': 15 }]
    },
    '>w992': {
      'paddingRight': [{ 'unit': 'px', 'value': 15 }],
      'paddingLeft': [{ 'unit': 'px', 'value': 15 }]
    },
    '>w1200': {
      'paddingRight': [{ 'unit': 'px', 'value': 15 }],
      'paddingLeft': [{ 'unit': 'px', 'value': 15 }]
    },
    '>w576': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w768': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w992': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w1200': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    }
  },
  'col-lg-10': {
    'position': 'relative',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'minHeight': [{ 'unit': 'px', 'value': 1 }],
    'paddingRight': [{ 'unit': 'px', 'value': 15 }],
    'paddingLeft': [{ 'unit': 'px', 'value': 15 }],
    '>w576': {
      'paddingRight': [{ 'unit': 'px', 'value': 15 }],
      'paddingLeft': [{ 'unit': 'px', 'value': 15 }]
    },
    '>w768': {
      'paddingRight': [{ 'unit': 'px', 'value': 15 }],
      'paddingLeft': [{ 'unit': 'px', 'value': 15 }]
    },
    '>w992': {
      'paddingRight': [{ 'unit': 'px', 'value': 15 }],
      'paddingLeft': [{ 'unit': 'px', 'value': 15 }]
    },
    '>w1200': {
      'paddingRight': [{ 'unit': 'px', 'value': 15 }],
      'paddingLeft': [{ 'unit': 'px', 'value': 15 }]
    },
    '>w576': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w768': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w992': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w1200': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    }
  },
  'col-lg-11': {
    'position': 'relative',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'minHeight': [{ 'unit': 'px', 'value': 1 }],
    'paddingRight': [{ 'unit': 'px', 'value': 15 }],
    'paddingLeft': [{ 'unit': 'px', 'value': 15 }],
    '>w576': {
      'paddingRight': [{ 'unit': 'px', 'value': 15 }],
      'paddingLeft': [{ 'unit': 'px', 'value': 15 }]
    },
    '>w768': {
      'paddingRight': [{ 'unit': 'px', 'value': 15 }],
      'paddingLeft': [{ 'unit': 'px', 'value': 15 }]
    },
    '>w992': {
      'paddingRight': [{ 'unit': 'px', 'value': 15 }],
      'paddingLeft': [{ 'unit': 'px', 'value': 15 }]
    },
    '>w1200': {
      'paddingRight': [{ 'unit': 'px', 'value': 15 }],
      'paddingLeft': [{ 'unit': 'px', 'value': 15 }]
    },
    '>w576': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w768': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w992': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w1200': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    }
  },
  'col-lg-12': {
    'position': 'relative',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'minHeight': [{ 'unit': 'px', 'value': 1 }],
    'paddingRight': [{ 'unit': 'px', 'value': 15 }],
    'paddingLeft': [{ 'unit': 'px', 'value': 15 }],
    '>w576': {
      'paddingRight': [{ 'unit': 'px', 'value': 15 }],
      'paddingLeft': [{ 'unit': 'px', 'value': 15 }]
    },
    '>w768': {
      'paddingRight': [{ 'unit': 'px', 'value': 15 }],
      'paddingLeft': [{ 'unit': 'px', 'value': 15 }]
    },
    '>w992': {
      'paddingRight': [{ 'unit': 'px', 'value': 15 }],
      'paddingLeft': [{ 'unit': 'px', 'value': 15 }]
    },
    '>w1200': {
      'paddingRight': [{ 'unit': 'px', 'value': 15 }],
      'paddingLeft': [{ 'unit': 'px', 'value': 15 }]
    },
    '>w576': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w768': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w992': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w1200': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    }
  },
  'col-lg': {
    'position': 'relative',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'minHeight': [{ 'unit': 'px', 'value': 1 }],
    'paddingRight': [{ 'unit': 'px', 'value': 15 }],
    'paddingLeft': [{ 'unit': 'px', 'value': 15 }],
    '>w576': {
      'paddingRight': [{ 'unit': 'px', 'value': 15 }],
      'paddingLeft': [{ 'unit': 'px', 'value': 15 }]
    },
    '>w768': {
      'paddingRight': [{ 'unit': 'px', 'value': 15 }],
      'paddingLeft': [{ 'unit': 'px', 'value': 15 }]
    },
    '>w992': {
      'paddingRight': [{ 'unit': 'px', 'value': 15 }],
      'paddingLeft': [{ 'unit': 'px', 'value': 15 }]
    },
    '>w1200': {
      'paddingRight': [{ 'unit': 'px', 'value': 15 }],
      'paddingLeft': [{ 'unit': 'px', 'value': 15 }]
    },
    '>w576': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w768': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w992': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w1200': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    }
  },
  'col-lg-auto': {
    'position': 'relative',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'minHeight': [{ 'unit': 'px', 'value': 1 }],
    'paddingRight': [{ 'unit': 'px', 'value': 15 }],
    'paddingLeft': [{ 'unit': 'px', 'value': 15 }],
    '>w576': {
      'paddingRight': [{ 'unit': 'px', 'value': 15 }],
      'paddingLeft': [{ 'unit': 'px', 'value': 15 }]
    },
    '>w768': {
      'paddingRight': [{ 'unit': 'px', 'value': 15 }],
      'paddingLeft': [{ 'unit': 'px', 'value': 15 }]
    },
    '>w992': {
      'paddingRight': [{ 'unit': 'px', 'value': 15 }],
      'paddingLeft': [{ 'unit': 'px', 'value': 15 }]
    },
    '>w1200': {
      'paddingRight': [{ 'unit': 'px', 'value': 15 }],
      'paddingLeft': [{ 'unit': 'px', 'value': 15 }]
    },
    '>w576': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w768': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w992': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w1200': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    }
  },
  'col-xl-1': {
    'position': 'relative',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'minHeight': [{ 'unit': 'px', 'value': 1 }],
    'paddingRight': [{ 'unit': 'px', 'value': 15 }],
    'paddingLeft': [{ 'unit': 'px', 'value': 15 }],
    '>w576': {
      'paddingRight': [{ 'unit': 'px', 'value': 15 }],
      'paddingLeft': [{ 'unit': 'px', 'value': 15 }]
    },
    '>w768': {
      'paddingRight': [{ 'unit': 'px', 'value': 15 }],
      'paddingLeft': [{ 'unit': 'px', 'value': 15 }]
    },
    '>w992': {
      'paddingRight': [{ 'unit': 'px', 'value': 15 }],
      'paddingLeft': [{ 'unit': 'px', 'value': 15 }]
    },
    '>w1200': {
      'paddingRight': [{ 'unit': 'px', 'value': 15 }],
      'paddingLeft': [{ 'unit': 'px', 'value': 15 }]
    },
    '>w576': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w768': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w992': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w1200': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    }
  },
  'col-xl-2': {
    'position': 'relative',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'minHeight': [{ 'unit': 'px', 'value': 1 }],
    'paddingRight': [{ 'unit': 'px', 'value': 15 }],
    'paddingLeft': [{ 'unit': 'px', 'value': 15 }],
    '>w576': {
      'paddingRight': [{ 'unit': 'px', 'value': 15 }],
      'paddingLeft': [{ 'unit': 'px', 'value': 15 }]
    },
    '>w768': {
      'paddingRight': [{ 'unit': 'px', 'value': 15 }],
      'paddingLeft': [{ 'unit': 'px', 'value': 15 }]
    },
    '>w992': {
      'paddingRight': [{ 'unit': 'px', 'value': 15 }],
      'paddingLeft': [{ 'unit': 'px', 'value': 15 }]
    },
    '>w1200': {
      'paddingRight': [{ 'unit': 'px', 'value': 15 }],
      'paddingLeft': [{ 'unit': 'px', 'value': 15 }]
    },
    '>w576': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w768': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w992': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w1200': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    }
  },
  'col-xl-3': {
    'position': 'relative',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'minHeight': [{ 'unit': 'px', 'value': 1 }],
    'paddingRight': [{ 'unit': 'px', 'value': 15 }],
    'paddingLeft': [{ 'unit': 'px', 'value': 15 }],
    '>w576': {
      'paddingRight': [{ 'unit': 'px', 'value': 15 }],
      'paddingLeft': [{ 'unit': 'px', 'value': 15 }]
    },
    '>w768': {
      'paddingRight': [{ 'unit': 'px', 'value': 15 }],
      'paddingLeft': [{ 'unit': 'px', 'value': 15 }]
    },
    '>w992': {
      'paddingRight': [{ 'unit': 'px', 'value': 15 }],
      'paddingLeft': [{ 'unit': 'px', 'value': 15 }]
    },
    '>w1200': {
      'paddingRight': [{ 'unit': 'px', 'value': 15 }],
      'paddingLeft': [{ 'unit': 'px', 'value': 15 }]
    },
    '>w576': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w768': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w992': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w1200': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    }
  },
  'col-xl-4': {
    'position': 'relative',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'minHeight': [{ 'unit': 'px', 'value': 1 }],
    'paddingRight': [{ 'unit': 'px', 'value': 15 }],
    'paddingLeft': [{ 'unit': 'px', 'value': 15 }],
    '>w576': {
      'paddingRight': [{ 'unit': 'px', 'value': 15 }],
      'paddingLeft': [{ 'unit': 'px', 'value': 15 }]
    },
    '>w768': {
      'paddingRight': [{ 'unit': 'px', 'value': 15 }],
      'paddingLeft': [{ 'unit': 'px', 'value': 15 }]
    },
    '>w992': {
      'paddingRight': [{ 'unit': 'px', 'value': 15 }],
      'paddingLeft': [{ 'unit': 'px', 'value': 15 }]
    },
    '>w1200': {
      'paddingRight': [{ 'unit': 'px', 'value': 15 }],
      'paddingLeft': [{ 'unit': 'px', 'value': 15 }]
    },
    '>w576': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w768': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w992': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w1200': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    }
  },
  'col-xl-5': {
    'position': 'relative',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'minHeight': [{ 'unit': 'px', 'value': 1 }],
    'paddingRight': [{ 'unit': 'px', 'value': 15 }],
    'paddingLeft': [{ 'unit': 'px', 'value': 15 }],
    '>w576': {
      'paddingRight': [{ 'unit': 'px', 'value': 15 }],
      'paddingLeft': [{ 'unit': 'px', 'value': 15 }]
    },
    '>w768': {
      'paddingRight': [{ 'unit': 'px', 'value': 15 }],
      'paddingLeft': [{ 'unit': 'px', 'value': 15 }]
    },
    '>w992': {
      'paddingRight': [{ 'unit': 'px', 'value': 15 }],
      'paddingLeft': [{ 'unit': 'px', 'value': 15 }]
    },
    '>w1200': {
      'paddingRight': [{ 'unit': 'px', 'value': 15 }],
      'paddingLeft': [{ 'unit': 'px', 'value': 15 }]
    },
    '>w576': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w768': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w992': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w1200': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    }
  },
  'col-xl-6': {
    'position': 'relative',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'minHeight': [{ 'unit': 'px', 'value': 1 }],
    'paddingRight': [{ 'unit': 'px', 'value': 15 }],
    'paddingLeft': [{ 'unit': 'px', 'value': 15 }],
    '>w576': {
      'paddingRight': [{ 'unit': 'px', 'value': 15 }],
      'paddingLeft': [{ 'unit': 'px', 'value': 15 }]
    },
    '>w768': {
      'paddingRight': [{ 'unit': 'px', 'value': 15 }],
      'paddingLeft': [{ 'unit': 'px', 'value': 15 }]
    },
    '>w992': {
      'paddingRight': [{ 'unit': 'px', 'value': 15 }],
      'paddingLeft': [{ 'unit': 'px', 'value': 15 }]
    },
    '>w1200': {
      'paddingRight': [{ 'unit': 'px', 'value': 15 }],
      'paddingLeft': [{ 'unit': 'px', 'value': 15 }]
    },
    '>w576': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w768': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w992': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w1200': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    }
  },
  'col-xl-7': {
    'position': 'relative',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'minHeight': [{ 'unit': 'px', 'value': 1 }],
    'paddingRight': [{ 'unit': 'px', 'value': 15 }],
    'paddingLeft': [{ 'unit': 'px', 'value': 15 }],
    '>w576': {
      'paddingRight': [{ 'unit': 'px', 'value': 15 }],
      'paddingLeft': [{ 'unit': 'px', 'value': 15 }]
    },
    '>w768': {
      'paddingRight': [{ 'unit': 'px', 'value': 15 }],
      'paddingLeft': [{ 'unit': 'px', 'value': 15 }]
    },
    '>w992': {
      'paddingRight': [{ 'unit': 'px', 'value': 15 }],
      'paddingLeft': [{ 'unit': 'px', 'value': 15 }]
    },
    '>w1200': {
      'paddingRight': [{ 'unit': 'px', 'value': 15 }],
      'paddingLeft': [{ 'unit': 'px', 'value': 15 }]
    },
    '>w576': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w768': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w992': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w1200': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    }
  },
  'col-xl-8': {
    'position': 'relative',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'minHeight': [{ 'unit': 'px', 'value': 1 }],
    'paddingRight': [{ 'unit': 'px', 'value': 15 }],
    'paddingLeft': [{ 'unit': 'px', 'value': 15 }],
    '>w576': {
      'paddingRight': [{ 'unit': 'px', 'value': 15 }],
      'paddingLeft': [{ 'unit': 'px', 'value': 15 }]
    },
    '>w768': {
      'paddingRight': [{ 'unit': 'px', 'value': 15 }],
      'paddingLeft': [{ 'unit': 'px', 'value': 15 }]
    },
    '>w992': {
      'paddingRight': [{ 'unit': 'px', 'value': 15 }],
      'paddingLeft': [{ 'unit': 'px', 'value': 15 }]
    },
    '>w1200': {
      'paddingRight': [{ 'unit': 'px', 'value': 15 }],
      'paddingLeft': [{ 'unit': 'px', 'value': 15 }]
    },
    '>w576': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w768': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w992': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w1200': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    }
  },
  'col-xl-9': {
    'position': 'relative',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'minHeight': [{ 'unit': 'px', 'value': 1 }],
    'paddingRight': [{ 'unit': 'px', 'value': 15 }],
    'paddingLeft': [{ 'unit': 'px', 'value': 15 }],
    '>w576': {
      'paddingRight': [{ 'unit': 'px', 'value': 15 }],
      'paddingLeft': [{ 'unit': 'px', 'value': 15 }]
    },
    '>w768': {
      'paddingRight': [{ 'unit': 'px', 'value': 15 }],
      'paddingLeft': [{ 'unit': 'px', 'value': 15 }]
    },
    '>w992': {
      'paddingRight': [{ 'unit': 'px', 'value': 15 }],
      'paddingLeft': [{ 'unit': 'px', 'value': 15 }]
    },
    '>w1200': {
      'paddingRight': [{ 'unit': 'px', 'value': 15 }],
      'paddingLeft': [{ 'unit': 'px', 'value': 15 }]
    },
    '>w576': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w768': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w992': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w1200': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    }
  },
  'col-xl-10': {
    'position': 'relative',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'minHeight': [{ 'unit': 'px', 'value': 1 }],
    'paddingRight': [{ 'unit': 'px', 'value': 15 }],
    'paddingLeft': [{ 'unit': 'px', 'value': 15 }],
    '>w576': {
      'paddingRight': [{ 'unit': 'px', 'value': 15 }],
      'paddingLeft': [{ 'unit': 'px', 'value': 15 }]
    },
    '>w768': {
      'paddingRight': [{ 'unit': 'px', 'value': 15 }],
      'paddingLeft': [{ 'unit': 'px', 'value': 15 }]
    },
    '>w992': {
      'paddingRight': [{ 'unit': 'px', 'value': 15 }],
      'paddingLeft': [{ 'unit': 'px', 'value': 15 }]
    },
    '>w1200': {
      'paddingRight': [{ 'unit': 'px', 'value': 15 }],
      'paddingLeft': [{ 'unit': 'px', 'value': 15 }]
    },
    '>w576': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w768': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w992': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w1200': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    }
  },
  'col-xl-11': {
    'position': 'relative',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'minHeight': [{ 'unit': 'px', 'value': 1 }],
    'paddingRight': [{ 'unit': 'px', 'value': 15 }],
    'paddingLeft': [{ 'unit': 'px', 'value': 15 }],
    '>w576': {
      'paddingRight': [{ 'unit': 'px', 'value': 15 }],
      'paddingLeft': [{ 'unit': 'px', 'value': 15 }]
    },
    '>w768': {
      'paddingRight': [{ 'unit': 'px', 'value': 15 }],
      'paddingLeft': [{ 'unit': 'px', 'value': 15 }]
    },
    '>w992': {
      'paddingRight': [{ 'unit': 'px', 'value': 15 }],
      'paddingLeft': [{ 'unit': 'px', 'value': 15 }]
    },
    '>w1200': {
      'paddingRight': [{ 'unit': 'px', 'value': 15 }],
      'paddingLeft': [{ 'unit': 'px', 'value': 15 }]
    },
    '>w576': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w768': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w992': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w1200': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    }
  },
  'col-xl-12': {
    'position': 'relative',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'minHeight': [{ 'unit': 'px', 'value': 1 }],
    'paddingRight': [{ 'unit': 'px', 'value': 15 }],
    'paddingLeft': [{ 'unit': 'px', 'value': 15 }],
    '>w576': {
      'paddingRight': [{ 'unit': 'px', 'value': 15 }],
      'paddingLeft': [{ 'unit': 'px', 'value': 15 }]
    },
    '>w768': {
      'paddingRight': [{ 'unit': 'px', 'value': 15 }],
      'paddingLeft': [{ 'unit': 'px', 'value': 15 }]
    },
    '>w992': {
      'paddingRight': [{ 'unit': 'px', 'value': 15 }],
      'paddingLeft': [{ 'unit': 'px', 'value': 15 }]
    },
    '>w1200': {
      'paddingRight': [{ 'unit': 'px', 'value': 15 }],
      'paddingLeft': [{ 'unit': 'px', 'value': 15 }]
    },
    '>w576': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w768': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w992': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w1200': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    }
  },
  'col-xl': {
    'position': 'relative',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'minHeight': [{ 'unit': 'px', 'value': 1 }],
    'paddingRight': [{ 'unit': 'px', 'value': 15 }],
    'paddingLeft': [{ 'unit': 'px', 'value': 15 }],
    '>w576': {
      'paddingRight': [{ 'unit': 'px', 'value': 15 }],
      'paddingLeft': [{ 'unit': 'px', 'value': 15 }]
    },
    '>w768': {
      'paddingRight': [{ 'unit': 'px', 'value': 15 }],
      'paddingLeft': [{ 'unit': 'px', 'value': 15 }]
    },
    '>w992': {
      'paddingRight': [{ 'unit': 'px', 'value': 15 }],
      'paddingLeft': [{ 'unit': 'px', 'value': 15 }]
    },
    '>w1200': {
      'paddingRight': [{ 'unit': 'px', 'value': 15 }],
      'paddingLeft': [{ 'unit': 'px', 'value': 15 }]
    },
    '>w576': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w768': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w992': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w1200': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    }
  },
  'col-xl-auto': {
    'position': 'relative',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'minHeight': [{ 'unit': 'px', 'value': 1 }],
    'paddingRight': [{ 'unit': 'px', 'value': 15 }],
    'paddingLeft': [{ 'unit': 'px', 'value': 15 }],
    '>w576': {
      'paddingRight': [{ 'unit': 'px', 'value': 15 }],
      'paddingLeft': [{ 'unit': 'px', 'value': 15 }]
    },
    '>w768': {
      'paddingRight': [{ 'unit': 'px', 'value': 15 }],
      'paddingLeft': [{ 'unit': 'px', 'value': 15 }]
    },
    '>w992': {
      'paddingRight': [{ 'unit': 'px', 'value': 15 }],
      'paddingLeft': [{ 'unit': 'px', 'value': 15 }]
    },
    '>w1200': {
      'paddingRight': [{ 'unit': 'px', 'value': 15 }],
      'paddingLeft': [{ 'unit': 'px', 'value': 15 }]
    },
    '>w576': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w768': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w992': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    },
    '>w1200': {
      'flexBasis': '0',
      'flexGrow': '1',
      'maxWidth': [{ 'unit': '%H', 'value': 1 }]
    }
  },
  'col': {
    'flexBasis': '0',
    'flexGrow': '1',
    'maxWidth': [{ 'unit': '%H', 'value': 1 }]
  },
  'col-auto': {
    'flex': '0 0 auto',
    'width': [{ 'unit': 'string', 'value': 'auto' }]
  },
  'col-1': {
    'width': [{ 'unit': '%H', 'value': 0.0833333 }]
  },
  'col-2': {
    'width': [{ 'unit': '%H', 'value': 0.1666667 }]
  },
  'col-3': {
    'width': [{ 'unit': '%H', 'value': 0.25 }]
  },
  'col-4': {
    'width': [{ 'unit': '%H', 'value': 0.33333329999999994 }]
  },
  'col-5': {
    'width': [{ 'unit': '%H', 'value': 0.41666670000000006 }]
  },
  'col-6': {
    'width': [{ 'unit': '%H', 'value': 0.5 }]
  },
  'col-7': {
    'width': [{ 'unit': '%H', 'value': 0.5833332999999999 }]
  },
  'col-8': {
    'width': [{ 'unit': '%H', 'value': 0.6666667 }]
  },
  'col-9': {
    'width': [{ 'unit': '%H', 'value': 0.75 }]
  },
  'col-10': {
    'width': [{ 'unit': '%H', 'value': 0.8333333 }]
  },
  'col-11': {
    'width': [{ 'unit': '%H', 'value': 0.9166667 }]
  },
  'col-12': {
    'width': [{ 'unit': '%H', 'value': 1 }]
  },
  'pull-0': {
    'right': [{ 'unit': 'string', 'value': 'auto' }]
  },
  'pull-1': {
    'right': [{ 'unit': '%H', 'value': 0.0833333 }]
  },
  'pull-2': {
    'right': [{ 'unit': '%H', 'value': 0.1666667 }]
  },
  'pull-3': {
    'right': [{ 'unit': '%H', 'value': 0.25 }]
  },
  'pull-4': {
    'right': [{ 'unit': '%H', 'value': 0.33333329999999994 }]
  },
  'pull-5': {
    'right': [{ 'unit': '%H', 'value': 0.41666670000000006 }]
  },
  'pull-6': {
    'right': [{ 'unit': '%H', 'value': 0.5 }]
  },
  'pull-7': {
    'right': [{ 'unit': '%H', 'value': 0.5833332999999999 }]
  },
  'pull-8': {
    'right': [{ 'unit': '%H', 'value': 0.6666667 }]
  },
  'pull-9': {
    'right': [{ 'unit': '%H', 'value': 0.75 }]
  },
  'pull-10': {
    'right': [{ 'unit': '%H', 'value': 0.8333333 }]
  },
  'pull-11': {
    'right': [{ 'unit': '%H', 'value': 0.9166667 }]
  },
  'pull-12': {
    'right': [{ 'unit': '%H', 'value': 1 }]
  },
  'push-0': {
    'left': [{ 'unit': 'string', 'value': 'auto' }]
  },
  'push-1': {
    'left': [{ 'unit': '%H', 'value': 0.0833333 }]
  },
  'push-2': {
    'left': [{ 'unit': '%H', 'value': 0.1666667 }]
  },
  'push-3': {
    'left': [{ 'unit': '%H', 'value': 0.25 }]
  },
  'push-4': {
    'left': [{ 'unit': '%H', 'value': 0.33333329999999994 }]
  },
  'push-5': {
    'left': [{ 'unit': '%H', 'value': 0.41666670000000006 }]
  },
  'push-6': {
    'left': [{ 'unit': '%H', 'value': 0.5 }]
  },
  'push-7': {
    'left': [{ 'unit': '%H', 'value': 0.5833332999999999 }]
  },
  'push-8': {
    'left': [{ 'unit': '%H', 'value': 0.6666667 }]
  },
  'push-9': {
    'left': [{ 'unit': '%H', 'value': 0.75 }]
  },
  'push-10': {
    'left': [{ 'unit': '%H', 'value': 0.8333333 }]
  },
  'push-11': {
    'left': [{ 'unit': '%H', 'value': 0.9166667 }]
  },
  'push-12': {
    'left': [{ 'unit': '%H', 'value': 1 }]
  },
  'offset-1': {
    'marginLeft': [{ 'unit': '%H', 'value': 0.0833333 }]
  },
  'offset-2': {
    'marginLeft': [{ 'unit': '%H', 'value': 0.1666667 }]
  },
  'offset-3': {
    'marginLeft': [{ 'unit': '%H', 'value': 0.25 }]
  },
  'offset-4': {
    'marginLeft': [{ 'unit': '%H', 'value': 0.33333329999999994 }]
  },
  'offset-5': {
    'marginLeft': [{ 'unit': '%H', 'value': 0.41666670000000006 }]
  },
  'offset-6': {
    'marginLeft': [{ 'unit': '%H', 'value': 0.5 }]
  },
  'offset-7': {
    'marginLeft': [{ 'unit': '%H', 'value': 0.5833332999999999 }]
  },
  'offset-8': {
    'marginLeft': [{ 'unit': '%H', 'value': 0.6666667 }]
  },
  'offset-9': {
    'marginLeft': [{ 'unit': '%H', 'value': 0.75 }]
  },
  'offset-10': {
    'marginLeft': [{ 'unit': '%H', 'value': 0.8333333 }]
  },
  'offset-11': {
    'marginLeft': [{ 'unit': '%H', 'value': 0.9166667 }]
  },
  'table': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'maxWidth': [{ 'unit': '%H', 'value': 1 }],
    'marginBottom': [{ 'unit': 'rem', 'value': 1 }],
    'backgroundColor': 'transparent'
  },
  'table th': {
    'padding': [{ 'unit': 'rem', 'value': 0.75 }, { 'unit': 'rem', 'value': 0.75 }, { 'unit': 'rem', 'value': 0.75 }, { 'unit': 'rem', 'value': 0.75 }],
    'verticalAlign': 'top',
    'borderTop': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#cfd8dc' }]
  },
  'table td': {
    'padding': [{ 'unit': 'rem', 'value': 0.75 }, { 'unit': 'rem', 'value': 0.75 }, { 'unit': 'rem', 'value': 0.75 }, { 'unit': 'rem', 'value': 0.75 }],
    'verticalAlign': 'top',
    'borderTop': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#cfd8dc' }]
  },
  'table thead th': {
    'verticalAlign': 'bottom',
    'borderBottom': [{ 'unit': 'px', 'value': 2 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#cfd8dc' }]
  },
  'table tbody + tbody': {
    'borderTop': [{ 'unit': 'px', 'value': 2 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#cfd8dc' }]
  },
  'table table': {
    'backgroundColor': '#e4e5e6'
  },
  'table-sm th': {
    'padding': [{ 'unit': 'rem', 'value': 0.3 }, { 'unit': 'rem', 'value': 0.3 }, { 'unit': 'rem', 'value': 0.3 }, { 'unit': 'rem', 'value': 0.3 }]
  },
  'table-sm td': {
    'padding': [{ 'unit': 'rem', 'value': 0.3 }, { 'unit': 'rem', 'value': 0.3 }, { 'unit': 'rem', 'value': 0.3 }, { 'unit': 'rem', 'value': 0.3 }]
  },
  'table-bordered': {
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#cfd8dc' }]
  },
  'table-bordered th': {
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#cfd8dc' }]
  },
  'table-bordered td': {
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#cfd8dc' }]
  },
  'table-bordered thead th': {
    'borderBottomWidth': [{ 'unit': 'px', 'value': 2 }]
  },
  'table-bordered thead td': {
    'borderBottomWidth': [{ 'unit': 'px', 'value': 2 }]
  },
  'table-striped tbody tr:nth-of-type(odd)': {
    'backgroundColor': '#eceff1'
  },
  'table-hover tbody tr:hover': {
    'backgroundColor': '#eceff1'
  },
  'table-active': {
    'backgroundColor': '#eceff1'
  },
  'table-active > th': {
    'backgroundColor': '#eceff1'
  },
  'table-active > td': {
    'backgroundColor': '#eceff1'
  },
  'table-hover table-active:hover': {
    'backgroundColor': '#dde3e6'
  },
  'table-hover table-active:hover > td': {
    'backgroundColor': '#dde3e6'
  },
  'table-hover table-active:hover > th': {
    'backgroundColor': '#dde3e6'
  },
  'table-success': {
    'backgroundColor': '#dff0d8'
  },
  'table-success > th': {
    'backgroundColor': '#dff0d8'
  },
  'table-success > td': {
    'backgroundColor': '#dff0d8'
  },
  'table-hover table-success:hover': {
    'backgroundColor': '#d0e9c6'
  },
  'table-hover table-success:hover > td': {
    'backgroundColor': '#d0e9c6'
  },
  'table-hover table-success:hover > th': {
    'backgroundColor': '#d0e9c6'
  },
  'table-info': {
    'backgroundColor': '#d9edf7'
  },
  'table-info > th': {
    'backgroundColor': '#d9edf7'
  },
  'table-info > td': {
    'backgroundColor': '#d9edf7'
  },
  'table-hover table-info:hover': {
    'backgroundColor': '#c4e3f3'
  },
  'table-hover table-info:hover > td': {
    'backgroundColor': '#c4e3f3'
  },
  'table-hover table-info:hover > th': {
    'backgroundColor': '#c4e3f3'
  },
  'table-warning': {
    'backgroundColor': '#fcf8e3'
  },
  'table-warning > th': {
    'backgroundColor': '#fcf8e3'
  },
  'table-warning > td': {
    'backgroundColor': '#fcf8e3'
  },
  'table-hover table-warning:hover': {
    'backgroundColor': '#faf2cc'
  },
  'table-hover table-warning:hover > td': {
    'backgroundColor': '#faf2cc'
  },
  'table-hover table-warning:hover > th': {
    'backgroundColor': '#faf2cc'
  },
  'table-danger': {
    'backgroundColor': '#f2dede'
  },
  'table-danger > th': {
    'backgroundColor': '#f2dede'
  },
  'table-danger > td': {
    'backgroundColor': '#f2dede'
  },
  'table-hover table-danger:hover': {
    'backgroundColor': '#ebcccc'
  },
  'table-hover table-danger:hover > td': {
    'backgroundColor': '#ebcccc'
  },
  'table-hover table-danger:hover > th': {
    'backgroundColor': '#ebcccc'
  },
  'thead-inverse th': {
    'color': '#e4e5e6',
    'backgroundColor': '#263238'
  },
  'thead-default th': {
    'color': '#607d8b',
    'backgroundColor': '#cfd8dc'
  },
  'table-inverse': {
    'color': '#e4e5e6',
    'backgroundColor': '#263238'
  },
  'table-inverse th': {
    'borderColor': '#35464f'
  },
  'table-inverse td': {
    'borderColor': '#35464f'
  },
  'table-inverse thead th': {
    'borderColor': '#35464f'
  },
  'table-inversetable-bordered': {
    'border': [{ 'unit': 'px', 'value': 0 }]
  },
  'table-inversetable-striped tbody tr:nth-of-type(odd)': {
    'backgroundColor': 'rgba(255, 255, 255, 0.05)'
  },
  'table-inversetable-hover tbody tr:hover': {
    'backgroundColor': 'rgba(255, 255, 255, 0.075)'
  },
  'form-control': {
    'display': 'block',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'padding': [{ 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 1 }, { 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 1 }],
    'fontSize': [{ 'unit': 'rem', 'value': 0.875 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.25 }],
    'color': '#607d8b',
    'backgroundColor': '#fff',
    'backgroundImage': 'none',
    'backgroundClip': 'padding-box',
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': 'rgba(0, 0, 0, 0.15)' }],
    'borderRadius': '0',
    'transition': 'border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s'
  },
  'form-control::-ms-expand': {
    'backgroundColor': 'transparent',
    'border': [{ 'unit': 'px', 'value': 0 }]
  },
  'form-control:focus': {
    'color': '#607d8b',
    'backgroundColor': '#fff',
    'borderColor': '#8ad4ee',
    'outline': 'none'
  },
  'form-control::placeholder': {
    'color': '#b0bec5',
    'opacity': '1'
  },
  'form-control:disabled': {
    'backgroundColor': '#cfd8dc',
    'opacity': '1'
  },
  'form-control[readonly]': {
    'backgroundColor': '#cfd8dc',
    'opacity': '1'
  },
  'selectform-control:not([size]):not([multiple])': {
    'height': [{ 'unit': 'rem', 'value': NaN }]
  },
  'selectform-control:focus::-ms-value': {
    'color': '#607d8b',
    'backgroundColor': '#fff'
  },
  'form-control-file': {
    'display': 'block'
  },
  'form-control-range': {
    'display': 'block'
  },
  'col-form-label': {
    'paddingTop': [{ 'unit': 'rem', 'value': NaN }],
    'paddingBottom': [{ 'unit': 'rem', 'value': NaN }],
    'marginBottom': [{ 'unit': 'px', 'value': 0 }]
  },
  'col-form-label-lg': {
    'paddingTop': [{ 'unit': 'rem', 'value': NaN }],
    'paddingBottom': [{ 'unit': 'rem', 'value': NaN }],
    'fontSize': [{ 'unit': 'rem', 'value': 1.25 }]
  },
  'col-form-label-sm': {
    'paddingTop': [{ 'unit': 'rem', 'value': NaN }],
    'paddingBottom': [{ 'unit': 'rem', 'value': NaN }],
    'fontSize': [{ 'unit': 'rem', 'value': 0.875 }]
  },
  'col-form-legend': {
    'paddingTop': [{ 'unit': 'rem', 'value': 0.5 }],
    'paddingBottom': [{ 'unit': 'rem', 'value': 0.5 }],
    'marginBottom': [{ 'unit': 'px', 'value': 0 }],
    'fontSize': [{ 'unit': 'rem', 'value': 0.875 }]
  },
  'form-control-static': {
    'paddingTop': [{ 'unit': 'rem', 'value': 0.5 }],
    'paddingBottom': [{ 'unit': 'rem', 'value': 0.5 }],
    'marginBottom': [{ 'unit': 'px', 'value': 0 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.25 }],
    'border': [{ 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': 'transparent' }],
    'borderWidth': '1px 0'
  },
  'form-control-staticform-control-sm': {
    'paddingRight': [{ 'unit': 'px', 'value': 0 }],
    'paddingLeft': [{ 'unit': 'px', 'value': 0 }]
  },
  'input-group-sm > form-control-staticform-control': {
    'paddingRight': [{ 'unit': 'px', 'value': 0 }],
    'paddingLeft': [{ 'unit': 'px', 'value': 0 }]
  },
  'input-group-sm > form-control-staticinput-group-addon': {
    'paddingRight': [{ 'unit': 'px', 'value': 0 }],
    'paddingLeft': [{ 'unit': 'px', 'value': 0 }]
  },
  'input-group-sm > input-group-btn > form-control-staticbtn': {
    'paddingRight': [{ 'unit': 'px', 'value': 0 }],
    'paddingLeft': [{ 'unit': 'px', 'value': 0 }]
  },
  'form-control-staticform-control-lg': {
    'paddingRight': [{ 'unit': 'px', 'value': 0 }],
    'paddingLeft': [{ 'unit': 'px', 'value': 0 }]
  },
  'input-group-lg > form-control-staticform-control': {
    'paddingRight': [{ 'unit': 'px', 'value': 0 }],
    'paddingLeft': [{ 'unit': 'px', 'value': 0 }]
  },
  'input-group-lg > form-control-staticinput-group-addon': {
    'paddingRight': [{ 'unit': 'px', 'value': 0 }],
    'paddingLeft': [{ 'unit': 'px', 'value': 0 }]
  },
  'input-group-lg > input-group-btn > form-control-staticbtn': {
    'paddingRight': [{ 'unit': 'px', 'value': 0 }],
    'paddingLeft': [{ 'unit': 'px', 'value': 0 }]
  },
  'form-control-sm': {
    'padding': [{ 'unit': 'rem', 'value': 0.25 }, { 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 0.25 }, { 'unit': 'rem', 'value': 0.5 }],
    'fontSize': [{ 'unit': 'rem', 'value': 0.875 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }]
  },
  'input-group-sm > form-control': {
    'padding': [{ 'unit': 'rem', 'value': 0.25 }, { 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 0.25 }, { 'unit': 'rem', 'value': 0.5 }],
    'fontSize': [{ 'unit': 'rem', 'value': 0.875 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }]
  },
  'input-group-sm > input-group-addon': {
    'padding': [{ 'unit': 'rem', 'value': 0.25 }, { 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 0.25 }, { 'unit': 'rem', 'value': 0.5 }],
    'fontSize': [{ 'unit': 'rem', 'value': 0.875 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }]
  },
  'input-group-sm > input-group-btn > btn': {
    'padding': [{ 'unit': 'rem', 'value': 0.25 }, { 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 0.25 }, { 'unit': 'rem', 'value': 0.5 }],
    'fontSize': [{ 'unit': 'rem', 'value': 0.875 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }]
  },
  'selectform-control-sm:not([size]):not([multiple])': {
    'height': [{ 'unit': 'rem', 'value': NaN }]
  },
  'input-group-sm > selectform-control:not([size]):not([multiple])': {
    'height': [{ 'unit': 'rem', 'value': NaN }]
  },
  'input-group-sm > selectinput-group-addon:not([size]):not([multiple])': {
    'height': [{ 'unit': 'rem', 'value': NaN }]
  },
  'input-group-sm > input-group-btn > selectbtn:not([size]):not([multiple])': {
    'height': [{ 'unit': 'rem', 'value': NaN }]
  },
  'form-control-lg': {
    'padding': [{ 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 1 }, { 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 1 }],
    'fontSize': [{ 'unit': 'rem', 'value': 1.25 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }]
  },
  'input-group-lg > form-control': {
    'padding': [{ 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 1 }, { 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 1 }],
    'fontSize': [{ 'unit': 'rem', 'value': 1.25 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }]
  },
  'input-group-lg > input-group-addon': {
    'padding': [{ 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 1 }, { 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 1 }],
    'fontSize': [{ 'unit': 'rem', 'value': 1.25 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }]
  },
  'input-group-lg > input-group-btn > btn': {
    'padding': [{ 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 1 }, { 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 1 }],
    'fontSize': [{ 'unit': 'rem', 'value': 1.25 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }]
  },
  'selectform-control-lg:not([size]):not([multiple])': {
    'height': [{ 'unit': 'rem', 'value': NaN }]
  },
  'input-group-lg > selectform-control:not([size]):not([multiple])': {
    'height': [{ 'unit': 'rem', 'value': NaN }]
  },
  'input-group-lg > selectinput-group-addon:not([size]):not([multiple])': {
    'height': [{ 'unit': 'rem', 'value': NaN }]
  },
  'input-group-lg > input-group-btn > selectbtn:not([size]):not([multiple])': {
    'height': [{ 'unit': 'rem', 'value': NaN }]
  },
  'form-group': {
    'marginBottom': [{ 'unit': 'rem', 'value': 1 }]
  },
  'form-text': {
    'display': 'block',
    'marginTop': [{ 'unit': 'rem', 'value': 0.25 }]
  },
  'form-check': {
    'position': 'relative',
    'display': 'block',
    'marginBottom': [{ 'unit': 'rem', 'value': 0.5 }]
  },
  'form-checkdisabled form-check-label': {
    'color': '#b0bec5'
  },
  'form-check-label': {
    'paddingLeft': [{ 'unit': 'rem', 'value': 1.25 }],
    'marginBottom': [{ 'unit': 'px', 'value': 0 }]
  },
  'form-check-input': {
    'position': 'absolute',
    'marginTop': [{ 'unit': 'rem', 'value': 0.25 }],
    'marginLeft': [{ 'unit': 'rem', 'value': -1.25 }]
  },
  'form-check-input:only-child': {
    'position': 'static'
  },
  'form-check-inline': {
    'display': 'inline-block'
  },
  'form-check-inline form-check-label': {
    'verticalAlign': 'middle'
  },
  'form-check-inline + form-check-inline': {
    'marginLeft': [{ 'unit': 'rem', 'value': 0.75 }]
  },
  'form-control-feedback': {
    'marginTop': [{ 'unit': 'rem', 'value': 0.25 }]
  },
  'form-control-success': {
    'paddingRight': [{ 'unit': 'rem', 'value': 3 }],
    'backgroundRepeat': 'no-repeat',
    'backgroundPosition': 'center right 0.52344rem',
    'backgroundSize': '1.04688rem 1.04688rem'
  },
  'form-control-warning': {
    'paddingRight': [{ 'unit': 'rem', 'value': 3 }],
    'backgroundRepeat': 'no-repeat',
    'backgroundPosition': 'center right 0.52344rem',
    'backgroundSize': '1.04688rem 1.04688rem'
  },
  'form-control-danger': {
    'paddingRight': [{ 'unit': 'rem', 'value': 3 }],
    'backgroundRepeat': 'no-repeat',
    'backgroundPosition': 'center right 0.52344rem',
    'backgroundSize': '1.04688rem 1.04688rem'
  },
  'has-success form-control-feedback': {
    'color': '#4dbd74'
  },
  'has-success form-control-label': {
    'color': '#4dbd74'
  },
  'has-success col-form-label': {
    'color': '#4dbd74'
  },
  'has-success form-check-label': {
    'color': '#4dbd74'
  },
  'has-success custom-control': {
    'color': '#4dbd74'
  },
  'has-success form-control': {
    'borderColor': '#4dbd74'
  },
  'has-success custom-select': {
    'borderColor': '#4dbd74'
  },
  'has-success custom-file-control': {
    'borderColor': '#4dbd74'
  },
  'has-success input-group-addon': {
    'color': '#4dbd74',
    'backgroundColor': '#e2f4e8',
    'borderColor': '#4dbd74'
  },
  'has-success form-control-success': {
    'backgroundImage': 'url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3E%3Cpath fill='%234dbd74' d='M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3E%3C/svg%3E")'
  },
  'has-warning form-control-feedback': {
    'color': '#f8cb00'
  },
  'has-warning form-control-label': {
    'color': '#f8cb00'
  },
  'has-warning col-form-label': {
    'color': '#f8cb00'
  },
  'has-warning form-check-label': {
    'color': '#f8cb00'
  },
  'has-warning custom-control': {
    'color': '#f8cb00'
  },
  'has-warning form-control': {
    'borderColor': '#f8cb00'
  },
  'has-warning custom-select': {
    'borderColor': '#f8cb00'
  },
  'has-warning custom-file-control': {
    'borderColor': '#f8cb00'
  },
  'has-warning input-group-addon': {
    'color': '#f8cb00',
    'backgroundColor': '#fff4c5',
    'borderColor': '#f8cb00'
  },
  'has-warning form-control-warning': {
    'backgroundImage': 'url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3E%3Cpath fill='%23f8cb00' d='M4.4 5.324h-.8v-2.46h.8zm0 1.42h-.8V5.89h.8zM3.76.63L.04 7.075c-.115.2.016.425.26.426h7.397c.242 0 .372-.226.258-.426C6.726 4.924 5.47 2.79 4.253.63c-.113-.174-.39-.174-.494 0z'/%3E%3C/svg%3E")'
  },
  'has-danger form-control-feedback': {
    'color': '#f86c6b'
  },
  'has-danger form-control-label': {
    'color': '#f86c6b'
  },
  'has-danger col-form-label': {
    'color': '#f86c6b'
  },
  'has-danger form-check-label': {
    'color': '#f86c6b'
  },
  'has-danger custom-control': {
    'color': '#f86c6b'
  },
  'has-danger form-control': {
    'borderColor': '#f86c6b'
  },
  'has-danger custom-select': {
    'borderColor': '#f86c6b'
  },
  'has-danger custom-file-control': {
    'borderColor': '#f86c6b'
  },
  'has-danger input-group-addon': {
    'color': '#f86c6b',
    'backgroundColor': 'white',
    'borderColor': '#f86c6b'
  },
  'has-danger form-control-danger': {
    'backgroundImage': 'url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23f86c6b' viewBox='-2 -2 7 7'%3E%3Cpath stroke='%23f86c6b' d='M0 0l3 3m0-3L0 3'/%3E%3Ccircle r='.5'/%3E%3Ccircle cx='3' r='.5'/%3E%3Ccircle cy='3' r='.5'/%3E%3Ccircle cx='3' cy='3' r='.5'/%3E%3C/svg%3E")'
  },
  'form-inline': {
    'display': 'flex',
    'flexFlow': 'row wrap',
    'alignItems': 'center'
  },
  'form-inline form-check': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    '>w576': {
      'display': 'flex',
      'alignItems': 'center',
      'justifyContent': 'center',
      'width': [{ 'unit': 'string', 'value': 'auto' }],
      'marginTop': [{ 'unit': 'px', 'value': 0 }],
      'marginBottom': [{ 'unit': 'px', 'value': 0 }]
    }
  },
  'btn': {
    'display': 'inline-block',
    'fontWeight': 'normal',
    'textAlign': 'center',
    'whiteSpace': 'nowrap',
    'verticalAlign': 'middle',
    'userSelect': 'none',
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': 'transparent' }],
    'padding': [{ 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 1 }, { 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 1 }],
    'fontSize': [{ 'unit': 'rem', 'value': 0.875 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.25 }],
    'transition': 'all 0.2s ease-in-out'
  },
  'btn:focus': {
    'textDecoration': 'none'
  },
  'btn:hover': {
    'textDecoration': 'none'
  },
  'btn:focus': {
    'outline': '0',
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 2 }, { 'unit': 'string', 'value': 'rgba(32, 168, 216, 0.25)' }]
  },
  'btnfocus': {
    'outline': '0',
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 2 }, { 'unit': 'string', 'value': 'rgba(32, 168, 216, 0.25)' }]
  },
  'btndisabled': {
    'opacity': '.65'
  },
  'btn:disabled': {
    'opacity': '.65'
  },
  'btn:active': {
    'backgroundImage': 'none'
  },
  'btnactive': {
    'backgroundImage': 'none'
  },
  'abtndisabled': {
    'pointerEvents': 'none'
  },
  'fieldset[disabled] abtn': {
    'pointerEvents': 'none'
  },
  'btn-primary': {
    'color': '#fff',
    'backgroundColor': '#20a8d8',
    'borderColor': '#20a8d8'
  },
  'btn-primary:hover': {
    'color': '#fff',
    'backgroundColor': '#1985ac',
    'borderColor': '#187fa3'
  },
  'btn-primary:focus': {
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 2 }, { 'unit': 'string', 'value': 'rgba(32, 168, 216, 0.5)' }]
  },
  'btn-primaryfocus': {
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 2 }, { 'unit': 'string', 'value': 'rgba(32, 168, 216, 0.5)' }]
  },
  'btn-primarydisabled': {
    'backgroundColor': '#20a8d8',
    'borderColor': '#20a8d8'
  },
  'btn-primary:disabled': {
    'backgroundColor': '#20a8d8',
    'borderColor': '#20a8d8'
  },
  'btn-primary:active': {
    'color': '#fff',
    'backgroundColor': '#1985ac',
    'backgroundImage': 'none',
    'borderColor': '#187fa3'
  },
  'btn-primaryactive': {
    'color': '#fff',
    'backgroundColor': '#1985ac',
    'backgroundImage': 'none',
    'borderColor': '#187fa3'
  },
  'show > btn-primarydropdown-toggle': {
    'color': '#fff',
    'backgroundColor': '#1985ac',
    'backgroundImage': 'none',
    'borderColor': '#187fa3'
  },
  'btn-secondary': {
    'color': '#263238',
    'backgroundColor': '#fff',
    'borderColor': '#ccc'
  },
  'btn-secondary:hover': {
    'color': '#263238',
    'backgroundColor': '#e6e6e6',
    'borderColor': '#adadad'
  },
  'btn-secondary:focus': {
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 2 }, { 'unit': 'string', 'value': 'rgba(204, 204, 204, 0.5)' }]
  },
  'btn-secondaryfocus': {
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 2 }, { 'unit': 'string', 'value': 'rgba(204, 204, 204, 0.5)' }]
  },
  'btn-secondarydisabled': {
    'backgroundColor': '#fff',
    'borderColor': '#ccc'
  },
  'btn-secondary:disabled': {
    'backgroundColor': '#fff',
    'borderColor': '#ccc'
  },
  'btn-secondary:active': {
    'color': '#263238',
    'backgroundColor': '#e6e6e6',
    'backgroundImage': 'none',
    'borderColor': '#adadad'
  },
  'btn-secondaryactive': {
    'color': '#263238',
    'backgroundColor': '#e6e6e6',
    'backgroundImage': 'none',
    'borderColor': '#adadad'
  },
  'show > btn-secondarydropdown-toggle': {
    'color': '#263238',
    'backgroundColor': '#e6e6e6',
    'backgroundImage': 'none',
    'borderColor': '#adadad'
  },
  'btn-info': {
    'color': '#fff',
    'backgroundColor': '#63c2de',
    'borderColor': '#63c2de'
  },
  'btn-info:hover': {
    'color': '#fff',
    'backgroundColor': '#39b2d5',
    'borderColor': '#30aed3'
  },
  'btn-info:focus': {
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 2 }, { 'unit': 'string', 'value': 'rgba(99, 194, 222, 0.5)' }]
  },
  'btn-infofocus': {
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 2 }, { 'unit': 'string', 'value': 'rgba(99, 194, 222, 0.5)' }]
  },
  'btn-infodisabled': {
    'backgroundColor': '#63c2de',
    'borderColor': '#63c2de'
  },
  'btn-info:disabled': {
    'backgroundColor': '#63c2de',
    'borderColor': '#63c2de'
  },
  'btn-info:active': {
    'color': '#fff',
    'backgroundColor': '#39b2d5',
    'backgroundImage': 'none',
    'borderColor': '#30aed3'
  },
  'btn-infoactive': {
    'color': '#fff',
    'backgroundColor': '#39b2d5',
    'backgroundImage': 'none',
    'borderColor': '#30aed3'
  },
  'show > btn-infodropdown-toggle': {
    'color': '#fff',
    'backgroundColor': '#39b2d5',
    'backgroundImage': 'none',
    'borderColor': '#30aed3'
  },
  'btn-success': {
    'color': '#fff',
    'backgroundColor': '#4dbd74',
    'borderColor': '#4dbd74'
  },
  'btn-success:hover': {
    'color': '#fff',
    'backgroundColor': '#3a9d5d',
    'borderColor': '#379558'
  },
  'btn-success:focus': {
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 2 }, { 'unit': 'string', 'value': 'rgba(77, 189, 116, 0.5)' }]
  },
  'btn-successfocus': {
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 2 }, { 'unit': 'string', 'value': 'rgba(77, 189, 116, 0.5)' }]
  },
  'btn-successdisabled': {
    'backgroundColor': '#4dbd74',
    'borderColor': '#4dbd74'
  },
  'btn-success:disabled': {
    'backgroundColor': '#4dbd74',
    'borderColor': '#4dbd74'
  },
  'btn-success:active': {
    'color': '#fff',
    'backgroundColor': '#3a9d5d',
    'backgroundImage': 'none',
    'borderColor': '#379558'
  },
  'btn-successactive': {
    'color': '#fff',
    'backgroundColor': '#3a9d5d',
    'backgroundImage': 'none',
    'borderColor': '#379558'
  },
  'show > btn-successdropdown-toggle': {
    'color': '#fff',
    'backgroundColor': '#3a9d5d',
    'backgroundImage': 'none',
    'borderColor': '#379558'
  },
  'btn-warning': {
    'color': '#fff',
    'backgroundColor': '#f8cb00',
    'borderColor': '#f8cb00'
  },
  'btn-warning:hover': {
    'color': '#fff',
    'backgroundColor': '#c5a100',
    'borderColor': '#bb9900'
  },
  'btn-warning:focus': {
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 2 }, { 'unit': 'string', 'value': 'rgba(248, 203, 0, 0.5)' }]
  },
  'btn-warningfocus': {
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 2 }, { 'unit': 'string', 'value': 'rgba(248, 203, 0, 0.5)' }]
  },
  'btn-warningdisabled': {
    'backgroundColor': '#f8cb00',
    'borderColor': '#f8cb00'
  },
  'btn-warning:disabled': {
    'backgroundColor': '#f8cb00',
    'borderColor': '#f8cb00'
  },
  'btn-warning:active': {
    'color': '#fff',
    'backgroundColor': '#c5a100',
    'backgroundImage': 'none',
    'borderColor': '#bb9900'
  },
  'btn-warningactive': {
    'color': '#fff',
    'backgroundColor': '#c5a100',
    'backgroundImage': 'none',
    'borderColor': '#bb9900'
  },
  'show > btn-warningdropdown-toggle': {
    'color': '#fff',
    'backgroundColor': '#c5a100',
    'backgroundImage': 'none',
    'borderColor': '#bb9900'
  },
  'btn-danger': {
    'color': '#fff',
    'backgroundColor': '#f86c6b',
    'borderColor': '#f86c6b'
  },
  'btn-danger:hover': {
    'color': '#fff',
    'backgroundColor': '#f63c3a',
    'borderColor': '#f53231'
  },
  'btn-danger:focus': {
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 2 }, { 'unit': 'string', 'value': 'rgba(248, 108, 107, 0.5)' }]
  },
  'btn-dangerfocus': {
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 2 }, { 'unit': 'string', 'value': 'rgba(248, 108, 107, 0.5)' }]
  },
  'btn-dangerdisabled': {
    'backgroundColor': '#f86c6b',
    'borderColor': '#f86c6b'
  },
  'btn-danger:disabled': {
    'backgroundColor': '#f86c6b',
    'borderColor': '#f86c6b'
  },
  'btn-danger:active': {
    'color': '#fff',
    'backgroundColor': '#f63c3a',
    'backgroundImage': 'none',
    'borderColor': '#f53231'
  },
  'btn-dangeractive': {
    'color': '#fff',
    'backgroundColor': '#f63c3a',
    'backgroundImage': 'none',
    'borderColor': '#f53231'
  },
  'show > btn-dangerdropdown-toggle': {
    'color': '#fff',
    'backgroundColor': '#f63c3a',
    'backgroundImage': 'none',
    'borderColor': '#f53231'
  },
  'btn-outline-primary': {
    'color': '#20a8d8',
    'backgroundColor': 'transparent',
    'backgroundImage': 'none',
    'borderColor': '#20a8d8'
  },
  'btn-outline-primary:hover': {
    'color': '#fff',
    'backgroundColor': '#20a8d8',
    'borderColor': '#20a8d8'
  },
  'btn-outline-primary:focus': {
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 2 }, { 'unit': 'string', 'value': 'rgba(32, 168, 216, 0.5)' }]
  },
  'btn-outline-primaryfocus': {
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 2 }, { 'unit': 'string', 'value': 'rgba(32, 168, 216, 0.5)' }]
  },
  'btn-outline-primarydisabled': {
    'color': '#20a8d8',
    'backgroundColor': 'transparent'
  },
  'btn-outline-primary:disabled': {
    'color': '#20a8d8',
    'backgroundColor': 'transparent'
  },
  'btn-outline-primary:active': {
    'color': '#fff',
    'backgroundColor': '#20a8d8',
    'borderColor': '#20a8d8'
  },
  'btn-outline-primaryactive': {
    'color': '#fff',
    'backgroundColor': '#20a8d8',
    'borderColor': '#20a8d8'
  },
  'show > btn-outline-primarydropdown-toggle': {
    'color': '#fff',
    'backgroundColor': '#20a8d8',
    'borderColor': '#20a8d8'
  },
  'btn-outline-secondary': {
    'color': '#ccc',
    'backgroundColor': 'transparent',
    'backgroundImage': 'none',
    'borderColor': '#ccc'
  },
  'btn-outline-secondary:hover': {
    'color': '#263238',
    'backgroundColor': '#ccc',
    'borderColor': '#ccc'
  },
  'btn-outline-secondary:focus': {
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 2 }, { 'unit': 'string', 'value': 'rgba(204, 204, 204, 0.5)' }]
  },
  'btn-outline-secondaryfocus': {
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 2 }, { 'unit': 'string', 'value': 'rgba(204, 204, 204, 0.5)' }]
  },
  'btn-outline-secondarydisabled': {
    'color': '#ccc',
    'backgroundColor': 'transparent'
  },
  'btn-outline-secondary:disabled': {
    'color': '#ccc',
    'backgroundColor': 'transparent'
  },
  'btn-outline-secondary:active': {
    'color': '#263238',
    'backgroundColor': '#ccc',
    'borderColor': '#ccc'
  },
  'btn-outline-secondaryactive': {
    'color': '#263238',
    'backgroundColor': '#ccc',
    'borderColor': '#ccc'
  },
  'show > btn-outline-secondarydropdown-toggle': {
    'color': '#263238',
    'backgroundColor': '#ccc',
    'borderColor': '#ccc'
  },
  'btn-outline-info': {
    'color': '#63c2de',
    'backgroundColor': 'transparent',
    'backgroundImage': 'none',
    'borderColor': '#63c2de'
  },
  'btn-outline-info:hover': {
    'color': '#fff',
    'backgroundColor': '#63c2de',
    'borderColor': '#63c2de'
  },
  'btn-outline-info:focus': {
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 2 }, { 'unit': 'string', 'value': 'rgba(99, 194, 222, 0.5)' }]
  },
  'btn-outline-infofocus': {
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 2 }, { 'unit': 'string', 'value': 'rgba(99, 194, 222, 0.5)' }]
  },
  'btn-outline-infodisabled': {
    'color': '#63c2de',
    'backgroundColor': 'transparent'
  },
  'btn-outline-info:disabled': {
    'color': '#63c2de',
    'backgroundColor': 'transparent'
  },
  'btn-outline-info:active': {
    'color': '#fff',
    'backgroundColor': '#63c2de',
    'borderColor': '#63c2de'
  },
  'btn-outline-infoactive': {
    'color': '#fff',
    'backgroundColor': '#63c2de',
    'borderColor': '#63c2de'
  },
  'show > btn-outline-infodropdown-toggle': {
    'color': '#fff',
    'backgroundColor': '#63c2de',
    'borderColor': '#63c2de'
  },
  'btn-outline-success': {
    'color': '#4dbd74',
    'backgroundColor': 'transparent',
    'backgroundImage': 'none',
    'borderColor': '#4dbd74'
  },
  'btn-outline-success:hover': {
    'color': '#fff',
    'backgroundColor': '#4dbd74',
    'borderColor': '#4dbd74'
  },
  'btn-outline-success:focus': {
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 2 }, { 'unit': 'string', 'value': 'rgba(77, 189, 116, 0.5)' }]
  },
  'btn-outline-successfocus': {
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 2 }, { 'unit': 'string', 'value': 'rgba(77, 189, 116, 0.5)' }]
  },
  'btn-outline-successdisabled': {
    'color': '#4dbd74',
    'backgroundColor': 'transparent'
  },
  'btn-outline-success:disabled': {
    'color': '#4dbd74',
    'backgroundColor': 'transparent'
  },
  'btn-outline-success:active': {
    'color': '#fff',
    'backgroundColor': '#4dbd74',
    'borderColor': '#4dbd74'
  },
  'btn-outline-successactive': {
    'color': '#fff',
    'backgroundColor': '#4dbd74',
    'borderColor': '#4dbd74'
  },
  'show > btn-outline-successdropdown-toggle': {
    'color': '#fff',
    'backgroundColor': '#4dbd74',
    'borderColor': '#4dbd74'
  },
  'btn-outline-warning': {
    'color': '#f8cb00',
    'backgroundColor': 'transparent',
    'backgroundImage': 'none',
    'borderColor': '#f8cb00'
  },
  'btn-outline-warning:hover': {
    'color': '#fff',
    'backgroundColor': '#f8cb00',
    'borderColor': '#f8cb00'
  },
  'btn-outline-warning:focus': {
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 2 }, { 'unit': 'string', 'value': 'rgba(248, 203, 0, 0.5)' }]
  },
  'btn-outline-warningfocus': {
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 2 }, { 'unit': 'string', 'value': 'rgba(248, 203, 0, 0.5)' }]
  },
  'btn-outline-warningdisabled': {
    'color': '#f8cb00',
    'backgroundColor': 'transparent'
  },
  'btn-outline-warning:disabled': {
    'color': '#f8cb00',
    'backgroundColor': 'transparent'
  },
  'btn-outline-warning:active': {
    'color': '#fff',
    'backgroundColor': '#f8cb00',
    'borderColor': '#f8cb00'
  },
  'btn-outline-warningactive': {
    'color': '#fff',
    'backgroundColor': '#f8cb00',
    'borderColor': '#f8cb00'
  },
  'show > btn-outline-warningdropdown-toggle': {
    'color': '#fff',
    'backgroundColor': '#f8cb00',
    'borderColor': '#f8cb00'
  },
  'btn-outline-danger': {
    'color': '#f86c6b',
    'backgroundColor': 'transparent',
    'backgroundImage': 'none',
    'borderColor': '#f86c6b'
  },
  'btn-outline-danger:hover': {
    'color': '#fff',
    'backgroundColor': '#f86c6b',
    'borderColor': '#f86c6b'
  },
  'btn-outline-danger:focus': {
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 2 }, { 'unit': 'string', 'value': 'rgba(248, 108, 107, 0.5)' }]
  },
  'btn-outline-dangerfocus': {
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 2 }, { 'unit': 'string', 'value': 'rgba(248, 108, 107, 0.5)' }]
  },
  'btn-outline-dangerdisabled': {
    'color': '#f86c6b',
    'backgroundColor': 'transparent'
  },
  'btn-outline-danger:disabled': {
    'color': '#f86c6b',
    'backgroundColor': 'transparent'
  },
  'btn-outline-danger:active': {
    'color': '#fff',
    'backgroundColor': '#f86c6b',
    'borderColor': '#f86c6b'
  },
  'btn-outline-dangeractive': {
    'color': '#fff',
    'backgroundColor': '#f86c6b',
    'borderColor': '#f86c6b'
  },
  'show > btn-outline-dangerdropdown-toggle': {
    'color': '#fff',
    'backgroundColor': '#f86c6b',
    'borderColor': '#f86c6b'
  },
  'btn-link': {
    'fontWeight': 'normal',
    'color': '#20a8d8',
    'borderRadius': '0'
  },
  'btn-link': {
    'backgroundColor': 'transparent'
  },
  'btn-link:active': {
    'backgroundColor': 'transparent'
  },
  'btn-linkactive': {
    'backgroundColor': 'transparent'
  },
  'btn-link:disabled': {
    'backgroundColor': 'transparent'
  },
  'btn-link': {
    'borderColor': 'transparent'
  },
  'btn-link:focus': {
    'borderColor': 'transparent'
  },
  'btn-link:active': {
    'borderColor': 'transparent'
  },
  'btn-link:hover': {
    'borderColor': 'transparent'
  },
  'btn-link:focus': {
    'color': '#167495',
    'textDecoration': 'underline',
    'backgroundColor': 'transparent'
  },
  'btn-link:hover': {
    'color': '#167495',
    'textDecoration': 'underline',
    'backgroundColor': 'transparent'
  },
  'btn-link:disabled': {
    'color': '#b0bec5'
  },
  'btn-link:disabled:focus': {
    'textDecoration': 'none'
  },
  'btn-link:disabled:hover': {
    'textDecoration': 'none'
  },
  'btn-lg': {
    'padding': [{ 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 1 }, { 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 1 }],
    'fontSize': [{ 'unit': 'rem', 'value': 1.25 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }]
  },
  'btn-group-lg > btn': {
    'padding': [{ 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 1 }, { 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 1 }],
    'fontSize': [{ 'unit': 'rem', 'value': 1.25 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }]
  },
  'btn-sm': {
    'padding': [{ 'unit': 'rem', 'value': 0.25 }, { 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 0.25 }, { 'unit': 'rem', 'value': 0.5 }],
    'fontSize': [{ 'unit': 'rem', 'value': 0.875 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }]
  },
  'btn-group-sm > btn': {
    'padding': [{ 'unit': 'rem', 'value': 0.25 }, { 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 0.25 }, { 'unit': 'rem', 'value': 0.5 }],
    'fontSize': [{ 'unit': 'rem', 'value': 0.875 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }]
  },
  'btn-block': {
    'display': 'block',
    'width': [{ 'unit': '%H', 'value': 1 }]
  },
  'btn-block + btn-block': {
    'marginTop': [{ 'unit': 'rem', 'value': 0.5 }]
  },
  'input[type="submit"]btn-block': {
    'width': [{ 'unit': '%H', 'value': 1 }]
  },
  'input[type="reset"]btn-block': {
    'width': [{ 'unit': '%H', 'value': 1 }]
  },
  'input[type="button"]btn-block': {
    'width': [{ 'unit': '%H', 'value': 1 }]
  },
  'fade': {
    'opacity': '0',
    'transition': 'opacity 0.15s linear'
  },
  'fadeshow': {
    'opacity': '1'
  },
  'collapse': {
    'display': 'none'
  },
  'collapseshow': {
    'display': 'block'
  },
  'trcollapseshow': {
    'display': 'table-row'
  },
  'tbodycollapseshow': {
    'display': 'table-row-group'
  },
  'collapsing': {
    'position': 'relative',
    'height': [{ 'unit': 'px', 'value': 0 }],
    'overflow': 'hidden',
    'transition': 'height 0.35s ease'
  },
  'dropup': {
    'position': 'relative'
  },
  'dropdown': {
    'position': 'relative'
  },
  'dropdown-toggle::after': {
    'display': 'inline-block',
    'width': [{ 'unit': 'px', 'value': 0 }],
    'height': [{ 'unit': 'px', 'value': 0 }],
    'marginLeft': [{ 'unit': 'em', 'value': 0.3 }],
    'verticalAlign': 'middle',
    'content': '""',
    'borderTop': [{ 'unit': 'em', 'value': 0.3 }, { 'unit': 'string', 'value': 'solid' }],
    'borderRight': [{ 'unit': 'em', 'value': 0.3 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': 'transparent' }],
    'borderLeft': [{ 'unit': 'em', 'value': 0.3 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': 'transparent' }]
  },
  'dropdown-toggle:empty::after': {
    'marginLeft': [{ 'unit': 'px', 'value': 0 }]
  },
  'dropup dropdown-toggle::after': {
    'borderTop': [{ 'unit': 'px', 'value': 0 }],
    'borderBottom': [{ 'unit': 'em', 'value': 0.3 }, { 'unit': 'string', 'value': 'solid' }]
  },
  'dropdown-menu': {
    'position': 'absolute',
    'top': [{ 'unit': '%V', 'value': 1 }],
    'left': [{ 'unit': 'px', 'value': 0 }],
    'zIndex': '1000',
    'display': 'none',
    'float': 'left',
    'minWidth': [{ 'unit': 'rem', 'value': 10 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'margin': [{ 'unit': 'rem', 'value': 0.125 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'fontSize': [{ 'unit': 'rem', 'value': 0.875 }],
    'color': '#263238',
    'textAlign': 'left',
    'listStyle': 'none',
    'backgroundColor': '#fff',
    'backgroundClip': 'padding-box',
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#cfd8dc' }]
  },
  'dropdown-divider': {
    'height': [{ 'unit': 'px', 'value': 0 }],
    'margin': [{ 'unit': 'rem', 'value': 0.5 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 0.5 }, { 'unit': 'px', 'value': 0 }],
    'overflow': 'hidden',
    'borderTop': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#eceff1' }]
  },
  'dropdown-item': {
    'display': 'block',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'padding': [{ 'unit': 'rem', 'value': 0.25 }, { 'unit': 'rem', 'value': 1.5 }, { 'unit': 'rem', 'value': 0.25 }, { 'unit': 'rem', 'value': 1.5 }],
    'clear': 'both',
    'fontWeight': 'normal',
    'color': '#263238',
    'textAlign': 'inherit',
    'whiteSpace': 'nowrap',
    'background': 'none',
    'border': [{ 'unit': 'px', 'value': 0 }]
  },
  'dropdown-item:focus': {
    'color': '#1c2429',
    'textDecoration': 'none',
    'backgroundColor': '#eceff1'
  },
  'dropdown-item:hover': {
    'color': '#1c2429',
    'textDecoration': 'none',
    'backgroundColor': '#eceff1'
  },
  'dropdown-itemactive': {
    'color': '#fff',
    'textDecoration': 'none',
    'backgroundColor': '#20a8d8'
  },
  'dropdown-item:active': {
    'color': '#fff',
    'textDecoration': 'none',
    'backgroundColor': '#20a8d8'
  },
  'dropdown-itemdisabled': {
    'color': '#b0bec5',
    'backgroundColor': 'transparent'
  },
  'dropdown-item:disabled': {
    'color': '#b0bec5',
    'backgroundColor': 'transparent'
  },
  'show > dropdown-menu': {
    'display': 'block'
  },
  'show > a': {
    'outline': '0'
  },
  'dropdown-menu-right': {
    'right': [{ 'unit': 'px', 'value': 0 }],
    'left': [{ 'unit': 'string', 'value': 'auto' }]
  },
  'dropdown-menu-left': {
    'right': [{ 'unit': 'string', 'value': 'auto' }],
    'left': [{ 'unit': 'px', 'value': 0 }]
  },
  'dropdown-header': {
    'display': 'block',
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 1.5 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 1.5 }],
    'marginBottom': [{ 'unit': 'px', 'value': 0 }],
    'fontSize': [{ 'unit': 'rem', 'value': 0.875 }],
    'color': '#b0bec5',
    'whiteSpace': 'nowrap'
  },
  'dropup dropdown-menu': {
    'top': [{ 'unit': 'string', 'value': 'auto' }],
    'bottom': [{ 'unit': '%V', 'value': 1 }],
    'marginBottom': [{ 'unit': 'rem', 'value': 0.125 }]
  },
  'btn-group': {
    'position': 'relative',
    'display': 'inline-flex',
    'verticalAlign': 'middle'
  },
  'btn-group-vertical': {
    'position': 'relative',
    'display': 'inline-flex',
    'verticalAlign': 'middle'
  },
  'btn-group > btn': {
    'position': 'relative',
    'flex': '0 1 auto',
    'marginBottom': [{ 'unit': 'px', 'value': 0 }]
  },
  'btn-group-vertical > btn': {
    'position': 'relative',
    'flex': '0 1 auto',
    'marginBottom': [{ 'unit': 'px', 'value': 0 }]
  },
  'btn-group > btn:hover': {
    'zIndex': '2'
  },
  'btn-group-vertical > btn:hover': {
    'zIndex': '2'
  },
  'btn-group > btn:focus': {
    'zIndex': '2'
  },
  'btn-group > btn:active': {
    'zIndex': '2'
  },
  'btn-group > btnactive': {
    'zIndex': '2'
  },
  'btn-group-vertical > btn:focus': {
    'zIndex': '2'
  },
  'btn-group-vertical > btn:active': {
    'zIndex': '2'
  },
  'btn-group-vertical > btnactive': {
    'zIndex': '2'
  },
  'btn-group btn + btn': {
    'marginLeft': [{ 'unit': 'px', 'value': -1 }]
  },
  'btn-group btn + btn-group': {
    'marginLeft': [{ 'unit': 'px', 'value': -1 }]
  },
  'btn-group btn-group + btn': {
    'marginLeft': [{ 'unit': 'px', 'value': -1 }]
  },
  'btn-group btn-group + btn-group': {
    'marginLeft': [{ 'unit': 'px', 'value': -1 }]
  },
  'btn-group-vertical btn + btn': {
    'marginLeft': [{ 'unit': 'px', 'value': -1 }]
  },
  'btn-group-vertical btn + btn-group': {
    'marginLeft': [{ 'unit': 'px', 'value': -1 }]
  },
  'btn-group-vertical btn-group + btn': {
    'marginLeft': [{ 'unit': 'px', 'value': -1 }]
  },
  'btn-group-vertical btn-group + btn-group': {
    'marginLeft': [{ 'unit': 'px', 'value': -1 }]
  },
  'btn-toolbar': {
    'display': 'flex',
    'flexWrap': 'wrap',
    'justifyContent': 'flex-start'
  },
  'btn-toolbar input-group': {
    'width': [{ 'unit': 'string', 'value': 'auto' }]
  },
  'btn-group > btn:not(:first-child):not(:last-child):not(dropdown-toggle)': {
    'borderRadius': '0'
  },
  'btn-group > btn:first-child': {
    'marginLeft': [{ 'unit': 'px', 'value': 0 }]
  },
  'btn-group > btn-group': {
    'float': 'left'
  },
  'btn-group > btn-group:not(:first-child):not(:last-child) > btn': {
    'borderRadius': '0'
  },
  'btn + dropdown-toggle-split': {
    'paddingRight': [{ 'unit': 'rem', 'value': 0.75 }],
    'paddingLeft': [{ 'unit': 'rem', 'value': 0.75 }]
  },
  'btn + dropdown-toggle-split::after': {
    'marginLeft': [{ 'unit': 'px', 'value': 0 }]
  },
  'btn-sm + dropdown-toggle-split': {
    'paddingRight': [{ 'unit': 'rem', 'value': 0.375 }],
    'paddingLeft': [{ 'unit': 'rem', 'value': 0.375 }]
  },
  'btn-group-sm > btn + dropdown-toggle-split': {
    'paddingRight': [{ 'unit': 'rem', 'value': 0.375 }],
    'paddingLeft': [{ 'unit': 'rem', 'value': 0.375 }]
  },
  'btn-lg + dropdown-toggle-split': {
    'paddingRight': [{ 'unit': 'rem', 'value': 0.75 }],
    'paddingLeft': [{ 'unit': 'rem', 'value': 0.75 }]
  },
  'btn-group-lg > btn + dropdown-toggle-split': {
    'paddingRight': [{ 'unit': 'rem', 'value': 0.75 }],
    'paddingLeft': [{ 'unit': 'rem', 'value': 0.75 }]
  },
  'btn-group-vertical': {
    'display': 'inline-flex',
    'flexDirection': 'column',
    'alignItems': 'flex-start',
    'justifyContent': 'center'
  },
  'btn-group-vertical btn': {
    'width': [{ 'unit': '%H', 'value': 1 }]
  },
  'btn-group-vertical btn-group': {
    'width': [{ 'unit': '%H', 'value': 1 }]
  },
  'btn-group-vertical > btn + btn': {
    'marginTop': [{ 'unit': 'px', 'value': -1 }],
    'marginLeft': [{ 'unit': 'px', 'value': 0 }]
  },
  'btn-group-vertical > btn + btn-group': {
    'marginTop': [{ 'unit': 'px', 'value': -1 }],
    'marginLeft': [{ 'unit': 'px', 'value': 0 }]
  },
  'btn-group-vertical > btn-group + btn': {
    'marginTop': [{ 'unit': 'px', 'value': -1 }],
    'marginLeft': [{ 'unit': 'px', 'value': 0 }]
  },
  'btn-group-vertical > btn-group + btn-group': {
    'marginTop': [{ 'unit': 'px', 'value': -1 }],
    'marginLeft': [{ 'unit': 'px', 'value': 0 }]
  },
  'btn-group-vertical > btn:not(:first-child):not(:last-child)': {
    'borderRadius': '0'
  },
  'btn-group-vertical > btn-group:not(:first-child):not(:last-child) > btn': {
    'borderRadius': '0'
  },
  '[data-toggle="buttons"] > btn input[type="radio"]': {
    'position': 'absolute',
    'clip': 'rect(0, 0, 0, 0)',
    'pointerEvents': 'none'
  },
  '[data-toggle="buttons"] > btn input[type="checkbox"]': {
    'position': 'absolute',
    'clip': 'rect(0, 0, 0, 0)',
    'pointerEvents': 'none'
  },
  '[data-toggle="buttons"] > btn-group > btn input[type="radio"]': {
    'position': 'absolute',
    'clip': 'rect(0, 0, 0, 0)',
    'pointerEvents': 'none'
  },
  '[data-toggle="buttons"] > btn-group > btn input[type="checkbox"]': {
    'position': 'absolute',
    'clip': 'rect(0, 0, 0, 0)',
    'pointerEvents': 'none'
  },
  'input-group': {
    'position': 'relative',
    'display': 'flex',
    'width': [{ 'unit': '%H', 'value': 1 }]
  },
  'input-group form-control': {
    'position': 'relative',
    'zIndex': '2',
    'flex': '1 1 auto',
    'width': [{ 'unit': '%H', 'value': 0.01 }],
    'marginBottom': [{ 'unit': 'px', 'value': 0 }]
  },
  'input-group form-control:focus': {
    'zIndex': '3'
  },
  'input-group form-control:active': {
    'zIndex': '3'
  },
  'input-group form-control:hover': {
    'zIndex': '3'
  },
  'input-group-addon': {
    'display': 'flex',
    'alignItems': 'center'
  },
  'input-group-btn': {
    'display': 'flex',
    'alignItems': 'center'
  },
  'input-group form-control': {
    'display': 'flex',
    'alignItems': 'center'
  },
  'input-group-addon': {
    'whiteSpace': 'nowrap',
    'verticalAlign': 'middle'
  },
  'input-group-btn': {
    'whiteSpace': 'nowrap',
    'verticalAlign': 'middle'
  },
  'input-group-addon': {
    'padding': [{ 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 1 }, { 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 1 }],
    'marginBottom': [{ 'unit': 'px', 'value': 0 }],
    'fontSize': [{ 'unit': 'rem', 'value': 0.875 }],
    'fontWeight': 'normal',
    'lineHeight': [{ 'unit': 'px', 'value': 1.25 }],
    'color': '#607d8b',
    'textAlign': 'center',
    'backgroundColor': '#cfd8dc',
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': 'rgba(0, 0, 0, 0.15)' }]
  },
  'input-group-addonform-control-sm': {
    'padding': [{ 'unit': 'rem', 'value': 0.25 }, { 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 0.25 }, { 'unit': 'rem', 'value': 0.5 }],
    'fontSize': [{ 'unit': 'rem', 'value': 0.875 }]
  },
  'input-group-sm > input-group-addon': {
    'padding': [{ 'unit': 'rem', 'value': 0.25 }, { 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 0.25 }, { 'unit': 'rem', 'value': 0.5 }],
    'fontSize': [{ 'unit': 'rem', 'value': 0.875 }]
  },
  'input-group-sm > input-group-btn > input-group-addonbtn': {
    'padding': [{ 'unit': 'rem', 'value': 0.25 }, { 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 0.25 }, { 'unit': 'rem', 'value': 0.5 }],
    'fontSize': [{ 'unit': 'rem', 'value': 0.875 }]
  },
  'input-group-addonform-control-lg': {
    'padding': [{ 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 1 }, { 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 1 }],
    'fontSize': [{ 'unit': 'rem', 'value': 1.25 }]
  },
  'input-group-lg > input-group-addon': {
    'padding': [{ 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 1 }, { 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 1 }],
    'fontSize': [{ 'unit': 'rem', 'value': 1.25 }]
  },
  'input-group-lg > input-group-btn > input-group-addonbtn': {
    'padding': [{ 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 1 }, { 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 1 }],
    'fontSize': [{ 'unit': 'rem', 'value': 1.25 }]
  },
  'input-group-addon input[type="radio"]': {
    'marginTop': [{ 'unit': 'px', 'value': 0 }]
  },
  'input-group-addon input[type="checkbox"]': {
    'marginTop': [{ 'unit': 'px', 'value': 0 }]
  },
  'input-group-addon:not(:last-child)': {
    'borderRight': [{ 'unit': 'px', 'value': 0 }]
  },
  'form-control + input-group-addon:not(:first-child)': {
    'borderLeft': [{ 'unit': 'px', 'value': 0 }]
  },
  'input-group-btn': {
    'position': 'relative',
    'fontSize': [{ 'unit': 'px', 'value': 0 }],
    'whiteSpace': 'nowrap'
  },
  'input-group-btn > btn': {
    'position': 'relative'
  },
  'input-group-btn > btn + btn': {
    'marginLeft': [{ 'unit': 'px', 'value': -1 }]
  },
  'input-group-btn > btn:focus': {
    'zIndex': '3'
  },
  'input-group-btn > btn:active': {
    'zIndex': '3'
  },
  'input-group-btn > btn:hover': {
    'zIndex': '3'
  },
  'input-group-btn:not(:last-child) > btn': {
    'marginRight': [{ 'unit': 'px', 'value': -1 }]
  },
  'input-group-btn:not(:last-child) > btn-group': {
    'marginRight': [{ 'unit': 'px', 'value': -1 }]
  },
  'input-group-btn:not(:first-child) > btn': {
    'zIndex': '2',
    'marginLeft': [{ 'unit': 'px', 'value': -1 }]
  },
  'input-group-btn:not(:first-child) > btn-group': {
    'zIndex': '2',
    'marginLeft': [{ 'unit': 'px', 'value': -1 }]
  },
  'input-group-btn:not(:first-child) > btn:focus': {
    'zIndex': '3'
  },
  'input-group-btn:not(:first-child) > btn:active': {
    'zIndex': '3'
  },
  'input-group-btn:not(:first-child) > btn:hover': {
    'zIndex': '3'
  },
  'input-group-btn:not(:first-child) > btn-group:focus': {
    'zIndex': '3'
  },
  'input-group-btn:not(:first-child) > btn-group:active': {
    'zIndex': '3'
  },
  'input-group-btn:not(:first-child) > btn-group:hover': {
    'zIndex': '3'
  },
  'custom-control': {
    'position': 'relative',
    'display': 'inline-flex',
    'minHeight': [{ 'unit': 'rem', 'value': 1.5 }],
    'paddingLeft': [{ 'unit': 'rem', 'value': 1.5 }],
    'marginRight': [{ 'unit': 'rem', 'value': 1 }]
  },
  'custom-control-input': {
    'position': 'absolute',
    'zIndex': '-1',
    'opacity': '0'
  },
  'custom-control-input:checked ~ custom-control-indicator': {
    'color': '#fff',
    'backgroundColor': '#20a8d8'
  },
  'custom-control-input:focus ~ custom-control-indicator': {
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': '#e4e5e6,' }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 3 }, { 'unit': 'string', 'value': '#20a8d8' }]
  },
  'custom-control-input:active ~ custom-control-indicator': {
    'color': '#fff',
    'backgroundColor': '#b6e4f4'
  },
  'custom-control-input:disabled ~ custom-control-indicator': {
    'backgroundColor': '#cfd8dc'
  },
  'custom-control-input:disabled ~ custom-control-description': {
    'color': '#b0bec5'
  },
  'custom-control-indicator': {
    'position': 'absolute',
    'top': [{ 'unit': 'rem', 'value': 0.25 }],
    'left': [{ 'unit': 'px', 'value': 0 }],
    'display': 'block',
    'width': [{ 'unit': 'rem', 'value': 1 }],
    'height': [{ 'unit': 'rem', 'value': 1 }],
    'pointerEvents': 'none',
    'userSelect': 'none',
    'backgroundColor': '#ddd',
    'backgroundRepeat': 'no-repeat',
    'backgroundPosition': 'center center',
    'backgroundSize': '50% 50%'
  },
  'custom-checkbox custom-control-input:checked ~ custom-control-indicator': {
    'backgroundImage': 'url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3E%3Cpath fill='%23fff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3E%3C/svg%3E")'
  },
  'custom-checkbox custom-control-input:indeterminate ~ custom-control-indicator': {
    'backgroundColor': '#20a8d8',
    'backgroundImage': 'url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 4'%3E%3Cpath stroke='%23fff' d='M0 2h4'/%3E%3C/svg%3E")'
  },
  'custom-radio custom-control-indicator': {
    'borderRadius': '50%'
  },
  'custom-radio custom-control-input:checked ~ custom-control-indicator': {
    'backgroundImage': 'url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3E%3Ccircle r='3' fill='%23fff'/%3E%3C/svg%3E")'
  },
  'custom-controls-stacked': {
    'display': 'flex',
    'flexDirection': 'column'
  },
  'custom-controls-stacked custom-control': {
    'marginBottom': [{ 'unit': 'rem', 'value': 0.25 }]
  },
  'custom-controls-stacked custom-control + custom-control': {
    'marginLeft': [{ 'unit': 'px', 'value': 0 }]
  },
  'custom-select': {
    'display': 'inline-block',
    'maxWidth': [{ 'unit': '%H', 'value': 1 }],
    'height': [{ 'unit': 'rem', 'value': NaN }],
    'padding': [{ 'unit': 'rem', 'value': 0.375 }, { 'unit': 'rem', 'value': 1.75 }, { 'unit': 'rem', 'value': 0.375 }, { 'unit': 'rem', 'value': 0.75 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.25 }],
    'color': '#607d8b',
    'verticalAlign': 'middle',
    'background': '#fff url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'%3E%3Cpath fill='%23333' d='M2 0L0 2h4zm0 5L0 3h4z'/%3E%3C/svg%3E") no-repeat right 0.75rem center',
    'backgroundSize': '8px 10px',
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': 'rgba(0, 0, 0, 0.15)' }],
    'appearance': 'none'
  },
  'custom-select:focus': {
    'borderColor': '#8ad4ee',
    'outline': 'none'
  },
  'custom-select:focus::-ms-value': {
    'color': '#607d8b',
    'backgroundColor': '#fff'
  },
  'custom-select:disabled': {
    'color': '#b0bec5',
    'backgroundColor': '#cfd8dc'
  },
  'custom-select::-ms-expand': {
    'opacity': '0'
  },
  'custom-select-sm': {
    'paddingTop': [{ 'unit': 'rem', 'value': 0.375 }],
    'paddingBottom': [{ 'unit': 'rem', 'value': 0.375 }],
    'fontSize': [{ 'unit': '%V', 'value': 0.75 }]
  },
  'custom-file': {
    'position': 'relative',
    'display': 'inline-block',
    'maxWidth': [{ 'unit': '%H', 'value': 1 }],
    'height': [{ 'unit': 'rem', 'value': 2.5 }],
    'marginBottom': [{ 'unit': 'px', 'value': 0 }]
  },
  'custom-file-input': {
    'minWidth': [{ 'unit': 'rem', 'value': 14 }],
    'maxWidth': [{ 'unit': '%H', 'value': 1 }],
    'height': [{ 'unit': 'rem', 'value': 2.5 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'opacity': '0'
  },
  'custom-file-control': {
    'position': 'absolute',
    'top': [{ 'unit': 'px', 'value': 0 }],
    'right': [{ 'unit': 'px', 'value': 0 }],
    'left': [{ 'unit': 'px', 'value': 0 }],
    'zIndex': '5',
    'height': [{ 'unit': 'rem', 'value': 2.5 }],
    'padding': [{ 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 1 }, { 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 1 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }],
    'color': '#607d8b',
    'pointerEvents': 'none',
    'userSelect': 'none',
    'backgroundColor': '#fff',
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': 'rgba(0, 0, 0, 0.15)' }]
  },
  'custom-file-control:lang(en):empty::after': {
    'content': '"Choose file..."'
  },
  'custom-file-control::before': {
    'position': 'absolute',
    'top': [{ 'unit': 'px', 'value': -1 }],
    'right': [{ 'unit': 'px', 'value': -1 }],
    'bottom': [{ 'unit': 'px', 'value': -1 }],
    'zIndex': '6',
    'display': 'block',
    'height': [{ 'unit': 'rem', 'value': 2.5 }],
    'padding': [{ 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 1 }, { 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 1 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }],
    'color': '#607d8b',
    'backgroundColor': '#cfd8dc',
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': 'rgba(0, 0, 0, 0.15)' }]
  },
  'custom-file-control:lang(en)::before': {
    'content': '"Browse"'
  },
  'nav': {
    'display': 'flex',
    'flexWrap': 'wrap',
    'paddingLeft': [{ 'unit': 'px', 'value': 0 }],
    'marginBottom': [{ 'unit': 'px', 'value': 0 }],
    'listStyle': 'none'
  },
  'nav-link': {
    'display': 'block',
    'padding': [{ 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 1 }, { 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 1 }]
  },
  'navbar dropdown-toggle': {
    'display': 'block',
    'padding': [{ 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 1 }, { 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 1 }]
  },
  'nav-link:focus': {
    'textDecoration': 'none'
  },
  'navbar dropdown-toggle:focus': {
    'textDecoration': 'none'
  },
  'nav-link:hover': {
    'textDecoration': 'none'
  },
  'navbar dropdown-toggle:hover': {
    'textDecoration': 'none'
  },
  'nav-linkdisabled': {
    'color': '#b0bec5'
  },
  'navbar disableddropdown-toggle': {
    'color': '#b0bec5'
  },
  'nav-tabs': {
    'borderBottom': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ddd' }]
  },
  'nav-tabs nav-item': {
    'marginBottom': [{ 'unit': 'px', 'value': -1 }]
  },
  'nav-tabs nav-link': {
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': 'transparent' }]
  },
  'nav-tabs navbar dropdown-toggle': {
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': 'transparent' }]
  },
  'navbar nav-tabs dropdown-toggle': {
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': 'transparent' }]
  },
  'nav-tabs nav-link:focus': {
    'borderColor': '#cfd8dc #cfd8dc #ddd'
  },
  'nav-tabs navbar dropdown-toggle:focus': {
    'borderColor': '#cfd8dc #cfd8dc #ddd'
  },
  'navbar nav-tabs dropdown-toggle:focus': {
    'borderColor': '#cfd8dc #cfd8dc #ddd'
  },
  'nav-tabs nav-link:hover': {
    'borderColor': '#cfd8dc #cfd8dc #ddd'
  },
  'nav-tabs navbar dropdown-toggle:hover': {
    'borderColor': '#cfd8dc #cfd8dc #ddd'
  },
  'navbar nav-tabs dropdown-toggle:hover': {
    'borderColor': '#cfd8dc #cfd8dc #ddd'
  },
  'nav-tabs nav-linkdisabled': {
    'color': '#b0bec5',
    'backgroundColor': 'transparent',
    'borderColor': 'transparent'
  },
  'nav-tabs navbar disableddropdown-toggle': {
    'color': '#b0bec5',
    'backgroundColor': 'transparent',
    'borderColor': 'transparent'
  },
  'navbar nav-tabs disableddropdown-toggle': {
    'color': '#b0bec5',
    'backgroundColor': 'transparent',
    'borderColor': 'transparent'
  },
  'nav-tabs nav-linkactive': {
    'color': '#607d8b',
    'backgroundColor': '#e4e5e6',
    'borderColor': '#ddd #ddd #e4e5e6'
  },
  'nav-tabs navbar activedropdown-toggle': {
    'color': '#607d8b',
    'backgroundColor': '#e4e5e6',
    'borderColor': '#ddd #ddd #e4e5e6'
  },
  'navbar nav-tabs activedropdown-toggle': {
    'color': '#607d8b',
    'backgroundColor': '#e4e5e6',
    'borderColor': '#ddd #ddd #e4e5e6'
  },
  'nav-tabs nav-itemshow nav-link': {
    'color': '#607d8b',
    'backgroundColor': '#e4e5e6',
    'borderColor': '#ddd #ddd #e4e5e6'
  },
  'nav-tabs nav-itemshow navbar dropdown-toggle': {
    'color': '#607d8b',
    'backgroundColor': '#e4e5e6',
    'borderColor': '#ddd #ddd #e4e5e6'
  },
  'navbar nav-tabs nav-itemshow dropdown-toggle': {
    'color': '#607d8b',
    'backgroundColor': '#e4e5e6',
    'borderColor': '#ddd #ddd #e4e5e6'
  },
  'nav-tabs dropdown-menu': {
    'marginTop': [{ 'unit': 'px', 'value': -1 }]
  },
  'nav-pills nav-linkactive': {
    'color': '#fff',
    'backgroundColor': '#20a8d8'
  },
  'nav-pills navbar activedropdown-toggle': {
    'color': '#fff',
    'backgroundColor': '#20a8d8'
  },
  'navbar nav-pills activedropdown-toggle': {
    'color': '#fff',
    'backgroundColor': '#20a8d8'
  },
  'show nav-pills nav-link': {
    'color': '#fff',
    'backgroundColor': '#20a8d8'
  },
  'show nav-pills navbar dropdown-toggle': {
    'color': '#fff',
    'backgroundColor': '#20a8d8'
  },
  'navbar
show nav-pills dropdown-toggle': {
    'color': '#fff',
    'backgroundColor': '#20a8d8'
  },
  'nav-fill nav-item': {
    'flex': '1 1 auto',
    'textAlign': 'center'
  },
  'nav-justified nav-item': {
    'flexBasis': '0',
    'flexGrow': '1',
    'textAlign': 'center'
  },
  'tab-content > tab-pane': {
    'display': 'none'
  },
  'tab-content > active': {
    'display': 'block'
  },
  'navbar': {
    'position': 'relative',
    'display': 'flex',
    'flexWrap': 'wrap',
    'alignItems': 'center',
    'justifyContent': 'space-between',
    'padding': [{ 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 1 }, { 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 1 }]
  },
  'navbar > container': {
    'display': 'flex',
    'flexWrap': 'wrap',
    'alignItems': 'center',
    'justifyContent': 'space-between',
    '<w575': {
      'width': [{ 'unit': '%H', 'value': 1 }],
      'marginRight': [{ 'unit': 'px', 'value': 0 }],
      'marginLeft': [{ 'unit': 'px', 'value': 0 }]
    }
  },
  'navbar > container-fluid': {
    'display': 'flex',
    'flexWrap': 'wrap',
    'alignItems': 'center',
    'justifyContent': 'space-between',
    '<w575': {
      'width': [{ 'unit': '%H', 'value': 1 }],
      'marginRight': [{ 'unit': 'px', 'value': 0 }],
      'marginLeft': [{ 'unit': 'px', 'value': 0 }]
    }
  },
  'navbar-brand': {
    'display': 'inline-block',
    'paddingTop': [{ 'unit': 'rem', 'value': 0.21875 }],
    'paddingBottom': [{ 'unit': 'rem', 'value': 0.21875 }],
    'marginRight': [{ 'unit': 'rem', 'value': 1 }],
    'fontSize': [{ 'unit': 'rem', 'value': 1.25 }],
    'lineHeight': [{ 'unit': 'string', 'value': 'inherit' }],
    'whiteSpace': 'nowrap'
  },
  'navbar-brand:focus': {
    'textDecoration': 'none'
  },
  'navbar-brand:hover': {
    'textDecoration': 'none'
  },
  'navbar-nav': {
    'display': 'flex',
    'flexDirection': 'column',
    'paddingLeft': [{ 'unit': 'px', 'value': 0 }],
    'marginBottom': [{ 'unit': 'px', 'value': 0 }],
    'listStyle': 'none'
  },
  'navbar-nav nav-link': {
    'paddingRight': [{ 'unit': 'px', 'value': 0 }],
    'paddingLeft': [{ 'unit': 'px', 'value': 0 }]
  },
  'navbar-nav navbar dropdown-toggle': {
    'paddingRight': [{ 'unit': 'px', 'value': 0 }],
    'paddingLeft': [{ 'unit': 'px', 'value': 0 }]
  },
  'navbar navbar-nav dropdown-toggle': {
    'paddingRight': [{ 'unit': 'px', 'value': 0 }],
    'paddingLeft': [{ 'unit': 'px', 'value': 0 }]
  },
  'navbar-text': {
    'display': 'inline-block',
    'paddingTop': [{ 'unit': 'rem', 'value': 0.5 }],
    'paddingBottom': [{ 'unit': 'rem', 'value': 0.5 }]
  },
  'navbar-collapse': {
    'flexBasis': '100%'
  },
  'navbar-toggler': {
    'padding': [{ 'unit': 'rem', 'value': 0.25 }, { 'unit': 'rem', 'value': 0.75 }, { 'unit': 'rem', 'value': 0.25 }, { 'unit': 'rem', 'value': 0.75 }],
    'fontSize': [{ 'unit': 'rem', 'value': 1.25 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1 }],
    'background': 'transparent',
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': 'transparent' }]
  },
  'navbar-toggler:focus': {
    'textDecoration': 'none'
  },
  'navbar-toggler:hover': {
    'textDecoration': 'none'
  },
  'navbar-toggler-icon': {
    'display': 'inline-block',
    'width': [{ 'unit': 'em', 'value': 1.5 }],
    'height': [{ 'unit': 'em', 'value': 1.5 }],
    'verticalAlign': 'middle',
    'content': '""',
    'background': 'no-repeat center center',
    'backgroundSize': '100% 100%'
  },
  'navbar-expand': {
    'flexDirection': 'row',
    'flexWrap': 'nowrap',
    'justifyContent': 'flex-start'
  },
  'navbar-expand navbar-nav dropdown-menu': {
    'position': 'static',
    'float': 'none'
  },
  'navbar-expand > container': {
    'paddingRight': [{ 'unit': 'px', 'value': 0 }],
    'paddingLeft': [{ 'unit': 'px', 'value': 0 }]
  },
  'navbar-expand > container-fluid': {
    'paddingRight': [{ 'unit': 'px', 'value': 0 }],
    'paddingLeft': [{ 'unit': 'px', 'value': 0 }]
  },
  'navbar-expand navbar-nav': {
    'flexDirection': 'row'
  },
  'navbar-expand navbar-nav dropdown-menu': {
    'position': 'absolute'
  },
  'navbar-expand navbar-nav nav-link': {
    'paddingRight': [{ 'unit': 'rem', 'value': 0.5 }],
    'paddingLeft': [{ 'unit': 'rem', 'value': 0.5 }]
  },
  'navbar-expand navbar-nav navbar dropdown-toggle': {
    'paddingRight': [{ 'unit': 'rem', 'value': 0.5 }],
    'paddingLeft': [{ 'unit': 'rem', 'value': 0.5 }]
  },
  'navbar navbar-expand navbar-nav dropdown-toggle': {
    'paddingRight': [{ 'unit': 'rem', 'value': 0.5 }],
    'paddingLeft': [{ 'unit': 'rem', 'value': 0.5 }]
  },
  'navbar-expand > container': {
    'flexWrap': 'nowrap'
  },
  'navbar-expand > container-fluid': {
    'flexWrap': 'nowrap'
  },
  'navbar-expand navbar-collapse': {
    'display': 'flex !important'
  },
  'navbar-expand navbar-toggler': {
    'display': 'none'
  },
  'navbar-light navbar-brand': {
    'color': 'rgba(0, 0, 0, 0.9)'
  },
  'navbar-light navbar-brand:focus': {
    'color': 'rgba(0, 0, 0, 0.9)'
  },
  'navbar-light navbar-brand:hover': {
    'color': 'rgba(0, 0, 0, 0.9)'
  },
  'navbar-light navbar-nav nav-link': {
    'color': 'rgba(0, 0, 0, 0.5)'
  },
  'navbar-light navbar-nav navbar dropdown-toggle': {
    'color': 'rgba(0, 0, 0, 0.5)'
  },
  'navbar navbar-light navbar-nav dropdown-toggle': {
    'color': 'rgba(0, 0, 0, 0.5)'
  },
  'navbar-light navbar-nav nav-link:focus': {
    'color': 'rgba(0, 0, 0, 0.7)'
  },
  'navbar-light navbar-nav navbar dropdown-toggle:focus': {
    'color': 'rgba(0, 0, 0, 0.7)'
  },
  'navbar navbar-light navbar-nav dropdown-toggle:focus': {
    'color': 'rgba(0, 0, 0, 0.7)'
  },
  'navbar-light navbar-nav nav-link:hover': {
    'color': 'rgba(0, 0, 0, 0.7)'
  },
  'navbar-light navbar-nav navbar dropdown-toggle:hover': {
    'color': 'rgba(0, 0, 0, 0.7)'
  },
  'navbar navbar-light navbar-nav dropdown-toggle:hover': {
    'color': 'rgba(0, 0, 0, 0.7)'
  },
  'navbar-light navbar-nav nav-linkdisabled': {
    'color': 'rgba(0, 0, 0, 0.3)'
  },
  'navbar-light navbar-nav navbar disableddropdown-toggle': {
    'color': 'rgba(0, 0, 0, 0.3)'
  },
  'navbar navbar-light navbar-nav disableddropdown-toggle': {
    'color': 'rgba(0, 0, 0, 0.3)'
  },
  'navbar-light navbar-nav show > nav-link': {
    'color': 'rgba(0, 0, 0, 0.9)'
  },
  'navbar-light navbar-nav navbar show > dropdown-toggle': {
    'color': 'rgba(0, 0, 0, 0.9)'
  },
  'navbar navbar-light navbar-nav show > dropdown-toggle': {
    'color': 'rgba(0, 0, 0, 0.9)'
  },
  'navbar-light navbar-nav active > nav-link': {
    'color': 'rgba(0, 0, 0, 0.9)'
  },
  'navbar-light navbar-nav navbar active > dropdown-toggle': {
    'color': 'rgba(0, 0, 0, 0.9)'
  },
  'navbar
navbar-light navbar-nav active > dropdown-toggle': {
    'color': 'rgba(0, 0, 0, 0.9)'
  },
  'navbar-light navbar-nav nav-linkshow': {
    'color': 'rgba(0, 0, 0, 0.9)'
  },
  'navbar-light navbar-nav navbar showdropdown-toggle': {
    'color': 'rgba(0, 0, 0, 0.9)'
  },
  'navbar
navbar-light navbar-nav showdropdown-toggle': {
    'color': 'rgba(0, 0, 0, 0.9)'
  },
  'navbar-light navbar-nav nav-linkactive': {
    'color': 'rgba(0, 0, 0, 0.9)'
  },
  'navbar-light navbar-nav navbar activedropdown-toggle': {
    'color': 'rgba(0, 0, 0, 0.9)'
  },
  'navbar
navbar-light navbar-nav activedropdown-toggle': {
    'color': 'rgba(0, 0, 0, 0.9)'
  },
  'navbar-light navbar-toggler': {
    'color': 'rgba(0, 0, 0, 0.5)',
    'borderColor': 'rgba(0, 0, 0, 0.1)'
  },
  'navbar-light navbar-toggler-icon': {
    'backgroundImage': 'url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(0, 0, 0, 0.5)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E")'
  },
  'navbar-light navbar-text': {
    'color': 'rgba(0, 0, 0, 0.5)'
  },
  'navbar-inverse navbar-brand': {
    'color': 'white'
  },
  'navbar-inverse navbar-brand:focus': {
    'color': 'white'
  },
  'navbar-inverse navbar-brand:hover': {
    'color': 'white'
  },
  'navbar-inverse navbar-nav nav-link': {
    'color': 'rgba(255, 255, 255, 0.5)'
  },
  'navbar-inverse navbar-nav navbar dropdown-toggle': {
    'color': 'rgba(255, 255, 255, 0.5)'
  },
  'navbar navbar-inverse navbar-nav dropdown-toggle': {
    'color': 'rgba(255, 255, 255, 0.5)'
  },
  'navbar-inverse navbar-nav nav-link:focus': {
    'color': 'rgba(255, 255, 255, 0.75)'
  },
  'navbar-inverse navbar-nav navbar dropdown-toggle:focus': {
    'color': 'rgba(255, 255, 255, 0.75)'
  },
  'navbar navbar-inverse navbar-nav dropdown-toggle:focus': {
    'color': 'rgba(255, 255, 255, 0.75)'
  },
  'navbar-inverse navbar-nav nav-link:hover': {
    'color': 'rgba(255, 255, 255, 0.75)'
  },
  'navbar-inverse navbar-nav navbar dropdown-toggle:hover': {
    'color': 'rgba(255, 255, 255, 0.75)'
  },
  'navbar navbar-inverse navbar-nav dropdown-toggle:hover': {
    'color': 'rgba(255, 255, 255, 0.75)'
  },
  'navbar-inverse navbar-nav nav-linkdisabled': {
    'color': 'rgba(255, 255, 255, 0.25)'
  },
  'navbar-inverse navbar-nav navbar disableddropdown-toggle': {
    'color': 'rgba(255, 255, 255, 0.25)'
  },
  'navbar navbar-inverse navbar-nav disableddropdown-toggle': {
    'color': 'rgba(255, 255, 255, 0.25)'
  },
  'navbar-inverse navbar-nav show > nav-link': {
    'color': 'white'
  },
  'navbar-inverse navbar-nav navbar show > dropdown-toggle': {
    'color': 'white'
  },
  'navbar navbar-inverse navbar-nav show > dropdown-toggle': {
    'color': 'white'
  },
  'navbar-inverse navbar-nav active > nav-link': {
    'color': 'white'
  },
  'navbar-inverse navbar-nav navbar active > dropdown-toggle': {
    'color': 'white'
  },
  'navbar
navbar-inverse navbar-nav active > dropdown-toggle': {
    'color': 'white'
  },
  'navbar-inverse navbar-nav nav-linkshow': {
    'color': 'white'
  },
  'navbar-inverse navbar-nav navbar showdropdown-toggle': {
    'color': 'white'
  },
  'navbar
navbar-inverse navbar-nav showdropdown-toggle': {
    'color': 'white'
  },
  'navbar-inverse navbar-nav nav-linkactive': {
    'color': 'white'
  },
  'navbar-inverse navbar-nav navbar activedropdown-toggle': {
    'color': 'white'
  },
  'navbar
navbar-inverse navbar-nav activedropdown-toggle': {
    'color': 'white'
  },
  'navbar-inverse navbar-toggler': {
    'color': 'rgba(255, 255, 255, 0.5)',
    'borderColor': 'rgba(255, 255, 255, 0.1)'
  },
  'navbar-inverse navbar-toggler-icon': {
    'backgroundImage': 'url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(255, 255, 255, 0.5)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E")'
  },
  'navbar-inverse navbar-text': {
    'color': 'rgba(255, 255, 255, 0.5)'
  },
  'card': {
    'position': 'relative',
    'display': 'flex',
    'flexDirection': 'column',
    'backgroundColor': '#fff',
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#cfd8dc' }]
  },
  'card-block': {
    'flex': '1 1 auto',
    'padding': [{ 'unit': 'rem', 'value': 1.25 }, { 'unit': 'rem', 'value': 1.25 }, { 'unit': 'rem', 'value': 1.25 }, { 'unit': 'rem', 'value': 1.25 }]
  },
  'card-title': {
    'marginBottom': [{ 'unit': 'rem', 'value': 0.75 }],
    'wordBreak': 'break-all'
  },
  'card-subtitle': {
    'marginTop': [{ 'unit': 'rem', 'value': -0.375 }],
    'marginBottom': [{ 'unit': 'px', 'value': 0 }]
  },
  'card-text:last-child': {
    'marginBottom': [{ 'unit': 'px', 'value': 0 }]
  },
  'card-link:hover': {
    'textDecoration': 'none'
  },
  'card-link + card-link': {
    'marginLeft': [{ 'unit': 'rem', 'value': 1.25 }]
  },
  'card-header': {
    'padding': [{ 'unit': 'rem', 'value': 0.75 }, { 'unit': 'rem', 'value': 1.25 }, { 'unit': 'rem', 'value': 0.75 }, { 'unit': 'rem', 'value': 1.25 }],
    'marginBottom': [{ 'unit': 'px', 'value': 0 }],
    'backgroundColor': '#eceff1',
    'borderBottom': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#cfd8dc' }]
  },
  'card-footer': {
    'padding': [{ 'unit': 'rem', 'value': 0.75 }, { 'unit': 'rem', 'value': 1.25 }, { 'unit': 'rem', 'value': 0.75 }, { 'unit': 'rem', 'value': 1.25 }],
    'backgroundColor': '#eceff1',
    'borderTop': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#cfd8dc' }]
  },
  'card-header-tabs': {
    'marginRight': [{ 'unit': 'rem', 'value': -0.625 }],
    'marginBottom': [{ 'unit': 'rem', 'value': -0.75 }],
    'marginLeft': [{ 'unit': 'rem', 'value': -0.625 }],
    'borderBottom': [{ 'unit': 'px', 'value': 0 }]
  },
  'card-header-pills': {
    'marginRight': [{ 'unit': 'rem', 'value': -0.625 }],
    'marginLeft': [{ 'unit': 'rem', 'value': -0.625 }]
  },
  'card-primary': {
    'backgroundColor': '#20a8d8',
    'borderColor': '#20a8d8'
  },
  'card-primary card-header': {
    'backgroundColor': 'transparent'
  },
  'card-primary card-footer': {
    'backgroundColor': 'transparent'
  },
  'card-success': {
    'backgroundColor': '#4dbd74',
    'borderColor': '#4dbd74'
  },
  'card-success card-header': {
    'backgroundColor': 'transparent'
  },
  'card-success card-footer': {
    'backgroundColor': 'transparent'
  },
  'card-info': {
    'backgroundColor': '#63c2de',
    'borderColor': '#63c2de'
  },
  'card-info card-header': {
    'backgroundColor': 'transparent'
  },
  'card-info card-footer': {
    'backgroundColor': 'transparent'
  },
  'card-warning': {
    'backgroundColor': '#f8cb00',
    'borderColor': '#f8cb00'
  },
  'card-warning card-header': {
    'backgroundColor': 'transparent'
  },
  'card-warning card-footer': {
    'backgroundColor': 'transparent'
  },
  'card-danger': {
    'backgroundColor': '#f86c6b',
    'borderColor': '#f86c6b'
  },
  'card-danger card-header': {
    'backgroundColor': 'transparent'
  },
  'card-danger card-footer': {
    'backgroundColor': 'transparent'
  },
  'card-outline-primary': {
    'backgroundColor': 'transparent',
    'borderColor': '#20a8d8'
  },
  'card-outline-primary card-header': {
    'backgroundColor': 'transparent',
    'borderColor': '#20a8d8'
  },
  'card-outline-primary card-footer': {
    'backgroundColor': 'transparent',
    'borderColor': '#20a8d8'
  },
  'card-outline-secondary': {
    'backgroundColor': 'transparent',
    'borderColor': '#ccc'
  },
  'card-outline-secondary card-header': {
    'backgroundColor': 'transparent',
    'borderColor': '#ccc'
  },
  'card-outline-secondary card-footer': {
    'backgroundColor': 'transparent',
    'borderColor': '#ccc'
  },
  'card-outline-info': {
    'backgroundColor': 'transparent',
    'borderColor': '#63c2de'
  },
  'card-outline-info card-header': {
    'backgroundColor': 'transparent',
    'borderColor': '#63c2de'
  },
  'card-outline-info card-footer': {
    'backgroundColor': 'transparent',
    'borderColor': '#63c2de'
  },
  'card-outline-success': {
    'backgroundColor': 'transparent',
    'borderColor': '#4dbd74'
  },
  'card-outline-success card-header': {
    'backgroundColor': 'transparent',
    'borderColor': '#4dbd74'
  },
  'card-outline-success card-footer': {
    'backgroundColor': 'transparent',
    'borderColor': '#4dbd74'
  },
  'card-outline-warning': {
    'backgroundColor': 'transparent',
    'borderColor': '#f8cb00'
  },
  'card-outline-warning card-header': {
    'backgroundColor': 'transparent',
    'borderColor': '#f8cb00'
  },
  'card-outline-warning card-footer': {
    'backgroundColor': 'transparent',
    'borderColor': '#f8cb00'
  },
  'card-outline-danger': {
    'backgroundColor': 'transparent',
    'borderColor': '#f86c6b'
  },
  'card-outline-danger card-header': {
    'backgroundColor': 'transparent',
    'borderColor': '#f86c6b'
  },
  'card-outline-danger card-footer': {
    'backgroundColor': 'transparent',
    'borderColor': '#f86c6b'
  },
  'card-inverse': {
    'color': 'rgba(255, 255, 255, 0.65)'
  },
  'card-inverse card-header': {
    'backgroundColor': 'transparent',
    'borderColor': 'rgba(255, 255, 255, 0.2)'
  },
  'card-inverse card-footer': {
    'backgroundColor': 'transparent',
    'borderColor': 'rgba(255, 255, 255, 0.2)'
  },
  'card-inverse card-header': {
    'color': '#fff'
  },
  'card-inverse card-footer': {
    'color': '#fff'
  },
  'card-inverse card-title': {
    'color': '#fff'
  },
  'card-inverse card-blockquote': {
    'color': '#fff'
  },
  'card-inverse card-link': {
    'color': 'rgba(255, 255, 255, 0.65)'
  },
  'card-inverse card-text': {
    'color': 'rgba(255, 255, 255, 0.65)'
  },
  'card-inverse card-subtitle': {
    'color': 'rgba(255, 255, 255, 0.65)'
  },
  'card-inverse card-blockquote blockquote-footer': {
    'color': 'rgba(255, 255, 255, 0.65)'
  },
  'card-inverse card-link:focus': {
    'color': '#fff'
  },
  'card-inverse card-link:hover': {
    'color': '#fff'
  },
  'card-blockquote': {
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'marginBottom': [{ 'unit': 'px', 'value': 0 }],
    'borderLeft': [{ 'unit': 'px', 'value': 0 }]
  },
  'card-img-overlay': {
    'position': 'absolute',
    'top': [{ 'unit': 'px', 'value': 0 }],
    'right': [{ 'unit': 'px', 'value': 0 }],
    'bottom': [{ 'unit': 'px', 'value': 0 }],
    'left': [{ 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'rem', 'value': 1.25 }, { 'unit': 'rem', 'value': 1.25 }, { 'unit': 'rem', 'value': 1.25 }, { 'unit': 'rem', 'value': 1.25 }]
  },
  'card-img': {
    'width': [{ 'unit': '%H', 'value': 1 }]
  },
  'card-img-top': {
    'width': [{ 'unit': '%H', 'value': 1 }]
  },
  'card-img-bottom': {
    'width': [{ 'unit': '%H', 'value': 1 }]
  },
  'card-columns card': {
    'marginBottom': [{ 'unit': 'rem', 'value': 0.75 }],
    '>w576': {
      'display': 'inline-block',
      'width': [{ 'unit': '%H', 'value': 1 }]
    }
  },
  'breadcrumb': {
    'padding': [{ 'unit': 'rem', 'value': 0.75 }, { 'unit': 'rem', 'value': 1 }, { 'unit': 'rem', 'value': 0.75 }, { 'unit': 'rem', 'value': 1 }],
    'marginBottom': [{ 'unit': 'rem', 'value': 1 }],
    'listStyle': 'none',
    'backgroundColor': '#fff'
  },
  'breadcrumb::after': {
    'display': 'block',
    'clear': 'both',
    'content': '""'
  },
  'breadcrumb-item': {
    'float': 'left'
  },
  'breadcrumb-item + breadcrumb-item::before': {
    'display': 'inline-block',
    'paddingRight': [{ 'unit': 'rem', 'value': 0.5 }],
    'paddingLeft': [{ 'unit': 'rem', 'value': 0.5 }],
    'color': '#b0bec5',
    'content': '"/"'
  },
  'breadcrumb-item + breadcrumb-item:hover::before': {
    'textDecoration': 'underline'
  },
  'breadcrumb-item + breadcrumb-item:hover::before': {
    'textDecoration': 'none'
  },
  'breadcrumb-itemactive': {
    'color': '#b0bec5'
  },
  'pagination': {
    'display': 'flex',
    'paddingLeft': [{ 'unit': 'px', 'value': 0 }],
    'listStyle': 'none'
  },
  'page-item:first-child page-link': {
    'marginLeft': [{ 'unit': 'px', 'value': 0 }]
  },
  'pagination-datatables li:first-child page-link': {
    'marginLeft': [{ 'unit': 'px', 'value': 0 }]
  },
  'pagination li:first-child page-link': {
    'marginLeft': [{ 'unit': 'px', 'value': 0 }]
  },
  'page-item:first-child pagination-datatables li a': {
    'marginLeft': [{ 'unit': 'px', 'value': 0 }]
  },
  'pagination-datatables li page-item:first-child a': {
    'marginLeft': [{ 'unit': 'px', 'value': 0 }]
  },
  'pagination-datatables li:first-child a': {
    'marginLeft': [{ 'unit': 'px', 'value': 0 }]
  },
  'page-item:first-child pagination li a': {
    'marginLeft': [{ 'unit': 'px', 'value': 0 }]
  },
  'pagination li page-item:first-child a': {
    'marginLeft': [{ 'unit': 'px', 'value': 0 }]
  },
  'pagination li:first-child a': {
    'marginLeft': [{ 'unit': 'px', 'value': 0 }]
  },
  'page-itemactive page-link': {
    'zIndex': '2',
    'color': '#fff',
    'backgroundColor': '#20a8d8',
    'borderColor': '#20a8d8'
  },
  'pagination-datatables liactive page-link': {
    'zIndex': '2',
    'color': '#fff',
    'backgroundColor': '#20a8d8',
    'borderColor': '#20a8d8'
  },
  'pagination liactive page-link': {
    'zIndex': '2',
    'color': '#fff',
    'backgroundColor': '#20a8d8',
    'borderColor': '#20a8d8'
  },
  'page-itemactive pagination-datatables li a': {
    'zIndex': '2',
    'color': '#fff',
    'backgroundColor': '#20a8d8',
    'borderColor': '#20a8d8'
  },
  'pagination-datatables li page-itemactive a': {
    'zIndex': '2',
    'color': '#fff',
    'backgroundColor': '#20a8d8',
    'borderColor': '#20a8d8'
  },
  'pagination-datatables liactive a': {
    'zIndex': '2',
    'color': '#fff',
    'backgroundColor': '#20a8d8',
    'borderColor': '#20a8d8'
  },
  'page-itemactive pagination li a': {
    'zIndex': '2',
    'color': '#fff',
    'backgroundColor': '#20a8d8',
    'borderColor': '#20a8d8'
  },
  'pagination li page-itemactive a': {
    'zIndex': '2',
    'color': '#fff',
    'backgroundColor': '#20a8d8',
    'borderColor': '#20a8d8'
  },
  'pagination liactive a': {
    'zIndex': '2',
    'color': '#fff',
    'backgroundColor': '#20a8d8',
    'borderColor': '#20a8d8'
  },
  'page-itemdisabled page-link': {
    'color': '#b0bec5',
    'pointerEvents': 'none',
    'backgroundColor': '#fff',
    'borderColor': '#ddd'
  },
  'pagination-datatables lidisabled page-link': {
    'color': '#b0bec5',
    'pointerEvents': 'none',
    'backgroundColor': '#fff',
    'borderColor': '#ddd'
  },
  'pagination lidisabled page-link': {
    'color': '#b0bec5',
    'pointerEvents': 'none',
    'backgroundColor': '#fff',
    'borderColor': '#ddd'
  },
  'page-itemdisabled pagination-datatables li a': {
    'color': '#b0bec5',
    'pointerEvents': 'none',
    'backgroundColor': '#fff',
    'borderColor': '#ddd'
  },
  'pagination-datatables li page-itemdisabled a': {
    'color': '#b0bec5',
    'pointerEvents': 'none',
    'backgroundColor': '#fff',
    'borderColor': '#ddd'
  },
  'pagination-datatables lidisabled a': {
    'color': '#b0bec5',
    'pointerEvents': 'none',
    'backgroundColor': '#fff',
    'borderColor': '#ddd'
  },
  'page-itemdisabled pagination li a': {
    'color': '#b0bec5',
    'pointerEvents': 'none',
    'backgroundColor': '#fff',
    'borderColor': '#ddd'
  },
  'pagination li page-itemdisabled a': {
    'color': '#b0bec5',
    'pointerEvents': 'none',
    'backgroundColor': '#fff',
    'borderColor': '#ddd'
  },
  'pagination lidisabled a': {
    'color': '#b0bec5',
    'pointerEvents': 'none',
    'backgroundColor': '#fff',
    'borderColor': '#ddd'
  },
  'page-link': {
    'position': 'relative',
    'display': 'block',
    'padding': [{ 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 0.75 }, { 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 0.75 }],
    'marginLeft': [{ 'unit': 'px', 'value': -1 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.25 }],
    'color': '#20a8d8',
    'backgroundColor': '#fff',
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ddd' }]
  },
  'pagination-datatables li a': {
    'position': 'relative',
    'display': 'block',
    'padding': [{ 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 0.75 }, { 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 0.75 }],
    'marginLeft': [{ 'unit': 'px', 'value': -1 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.25 }],
    'color': '#20a8d8',
    'backgroundColor': '#fff',
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ddd' }]
  },
  'pagination li a': {
    'position': 'relative',
    'display': 'block',
    'padding': [{ 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 0.75 }, { 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 0.75 }],
    'marginLeft': [{ 'unit': 'px', 'value': -1 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.25 }],
    'color': '#20a8d8',
    'backgroundColor': '#fff',
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ddd' }]
  },
  'page-link:focus': {
    'color': '#167495',
    'textDecoration': 'none',
    // background-color: #cfd8dc;
    'borderColor': '#ddd'
  },
  'pagination-datatables li a:focus': {
    'color': '#167495',
    'textDecoration': 'none',
    // background-color: #cfd8dc;
    'borderColor': '#ddd'
  },
  'pagination li a:focus': {
    'color': '#167495',
    'textDecoration': 'none',
    // background-color: #cfd8dc;
    'borderColor': '#ddd'
  },
  'page-link:hover': {
    'color': '#167495',
    'textDecoration': 'none',
    // background-color: #cfd8dc;
    'borderColor': '#ddd'
  },
  'pagination-datatables li a:hover': {
    'color': '#167495',
    'textDecoration': 'none',
    // background-color: #cfd8dc;
    'borderColor': '#ddd'
  },
  'pagination li a:hover': {
    'color': '#167495',
    'textDecoration': 'none',
    // background-color: #cfd8dc;
    'borderColor': '#ddd'
  },
  'pagination-lg page-link': {
    'padding': [{ 'unit': 'rem', 'value': 0.75 }, { 'unit': 'rem', 'value': 1.5 }, { 'unit': 'rem', 'value': 0.75 }, { 'unit': 'rem', 'value': 1.5 }],
    'fontSize': [{ 'unit': 'rem', 'value': 1.25 }]
  },
  'pagination-lg pagination-datatables li a': {
    'padding': [{ 'unit': 'rem', 'value': 0.75 }, { 'unit': 'rem', 'value': 1.5 }, { 'unit': 'rem', 'value': 0.75 }, { 'unit': 'rem', 'value': 1.5 }],
    'fontSize': [{ 'unit': 'rem', 'value': 1.25 }]
  },
  'pagination-datatables li pagination-lg a': {
    'padding': [{ 'unit': 'rem', 'value': 0.75 }, { 'unit': 'rem', 'value': 1.5 }, { 'unit': 'rem', 'value': 0.75 }, { 'unit': 'rem', 'value': 1.5 }],
    'fontSize': [{ 'unit': 'rem', 'value': 1.25 }]
  },
  'pagination-lg pagination li a': {
    'padding': [{ 'unit': 'rem', 'value': 0.75 }, { 'unit': 'rem', 'value': 1.5 }, { 'unit': 'rem', 'value': 0.75 }, { 'unit': 'rem', 'value': 1.5 }],
    'fontSize': [{ 'unit': 'rem', 'value': 1.25 }]
  },
  'pagination li pagination-lg a': {
    'padding': [{ 'unit': 'rem', 'value': 0.75 }, { 'unit': 'rem', 'value': 1.5 }, { 'unit': 'rem', 'value': 0.75 }, { 'unit': 'rem', 'value': 1.5 }],
    'fontSize': [{ 'unit': 'rem', 'value': 1.25 }]
  },
  'pagination-sm page-link': {
    'padding': [{ 'unit': 'rem', 'value': 0.25 }, { 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 0.25 }, { 'unit': 'rem', 'value': 0.5 }],
    'fontSize': [{ 'unit': 'rem', 'value': 0.875 }]
  },
  'pagination-sm pagination-datatables li a': {
    'padding': [{ 'unit': 'rem', 'value': 0.25 }, { 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 0.25 }, { 'unit': 'rem', 'value': 0.5 }],
    'fontSize': [{ 'unit': 'rem', 'value': 0.875 }]
  },
  'pagination-datatables li pagination-sm a': {
    'padding': [{ 'unit': 'rem', 'value': 0.25 }, { 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 0.25 }, { 'unit': 'rem', 'value': 0.5 }],
    'fontSize': [{ 'unit': 'rem', 'value': 0.875 }]
  },
  'pagination-sm pagination li a': {
    'padding': [{ 'unit': 'rem', 'value': 0.25 }, { 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 0.25 }, { 'unit': 'rem', 'value': 0.5 }],
    'fontSize': [{ 'unit': 'rem', 'value': 0.875 }]
  },
  'pagination li pagination-sm a': {
    'padding': [{ 'unit': 'rem', 'value': 0.25 }, { 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 0.25 }, { 'unit': 'rem', 'value': 0.5 }],
    'fontSize': [{ 'unit': 'rem', 'value': 0.875 }]
  },
  'badge': {
    'display': 'inline-block',
    'padding': [{ 'unit': 'em', 'value': 0.25 }, { 'unit': 'em', 'value': 0.4 }, { 'unit': 'em', 'value': 0.25 }, { 'unit': 'em', 'value': 0.4 }],
    'fontSize': [{ 'unit': '%V', 'value': 0.75 }],
    'fontWeight': 'bold',
    'lineHeight': [{ 'unit': 'px', 'value': 1 }],
    'color': '#fff',
    'textAlign': 'center',
    'whiteSpace': 'nowrap',
    'verticalAlign': 'baseline'
  },
  'badge:empty': {
    'display': 'none'
  },
  'btn badge': {
    'position': 'relative',
    'top': [{ 'unit': 'px', 'value': -1 }]
  },
  'abadge:focus': {
    'color': '#fff',
    'textDecoration': 'none'
  },
  'abadge:hover': {
    'color': '#fff',
    'textDecoration': 'none'
  },
  'badge-pill': {
    'paddingRight': [{ 'unit': 'em', 'value': 0.6 }],
    'paddingLeft': [{ 'unit': 'em', 'value': 0.6 }]
  },
  'badge-default': {
    'backgroundColor': '#b0bec5'
  },
  'badge-default[href]:focus': {
    'backgroundColor': '#93a6af'
  },
  'badge-default[href]:hover': {
    'backgroundColor': '#93a6af'
  },
  'badge-primary': {
    'backgroundColor': '#20a8d8'
  },
  'badge-primary[href]:focus': {
    'backgroundColor': '#1985ac'
  },
  'badge-primary[href]:hover': {
    'backgroundColor': '#1985ac'
  },
  'badge-success': {
    'backgroundColor': '#4dbd74'
  },
  'badge-success[href]:focus': {
    'backgroundColor': '#3a9d5d'
  },
  'badge-success[href]:hover': {
    'backgroundColor': '#3a9d5d'
  },
  'badge-info': {
    'backgroundColor': '#63c2de'
  },
  'badge-info[href]:focus': {
    'backgroundColor': '#39b2d5'
  },
  'badge-info[href]:hover': {
    'backgroundColor': '#39b2d5'
  },
  'badge-warning': {
    'backgroundColor': '#f8cb00'
  },
  'badge-warning[href]:focus': {
    'backgroundColor': '#c5a100'
  },
  'badge-warning[href]:hover': {
    'backgroundColor': '#c5a100'
  },
  'badge-danger': {
    'backgroundColor': '#f86c6b'
  },
  'badge-danger[href]:focus': {
    'backgroundColor': '#f63c3a'
  },
  'badge-danger[href]:hover': {
    'backgroundColor': '#f63c3a'
  },
  'jumbotron': {
    'padding': [{ 'unit': 'rem', 'value': 2 }, { 'unit': 'rem', 'value': 1 }, { 'unit': 'rem', 'value': 2 }, { 'unit': 'rem', 'value': 1 }],
    'marginBottom': [{ 'unit': 'rem', 'value': 2 }],
    'backgroundColor': '#cfd8dc',
    '>w576': {
      'padding': [{ 'unit': 'rem', 'value': 4 }, { 'unit': 'rem', 'value': 2 }, { 'unit': 'rem', 'value': 4 }, { 'unit': 'rem', 'value': 2 }]
    }
  },
  'jumbotron-fluid': {
    'paddingRight': [{ 'unit': 'px', 'value': 0 }],
    'paddingLeft': [{ 'unit': 'px', 'value': 0 }]
  },
  'alert': {
    'padding': [{ 'unit': 'rem', 'value': 0.75 }, { 'unit': 'rem', 'value': 1.25 }, { 'unit': 'rem', 'value': 0.75 }, { 'unit': 'rem', 'value': 1.25 }],
    'marginBottom': [{ 'unit': 'rem', 'value': 1 }],
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': 'transparent' }]
  },
  'alert-heading': {
    'color': 'inherit'
  },
  'alert-link': {
    'fontWeight': 'bold'
  },
  'alert-dismissible close': {
    'position': 'relative',
    'top': [{ 'unit': 'rem', 'value': -0.75 }],
    'right': [{ 'unit': 'rem', 'value': -1.25 }],
    'padding': [{ 'unit': 'rem', 'value': 0.75 }, { 'unit': 'rem', 'value': 1.25 }, { 'unit': 'rem', 'value': 0.75 }, { 'unit': 'rem', 'value': 1.25 }],
    'color': 'inherit'
  },
  'alert-success': {
    'color': '#3c763d',
    'backgroundColor': '#dff0d8',
    'borderColor': '#d0e9c6'
  },
  'alert-success hr': {
    'borderTopColor': '#c1e2b3'
  },
  'alert-success alert-link': {
    'color': '#2b542c'
  },
  'alert-info': {
    'color': '#31708f',
    'backgroundColor': '#d9edf7',
    'borderColor': '#bcdff1'
  },
  'alert-info hr': {
    'borderTopColor': '#a6d5ec'
  },
  'alert-info alert-link': {
    'color': '#245269'
  },
  'alert-warning': {
    'color': '#8a6d3b',
    'backgroundColor': '#fcf8e3',
    'borderColor': '#faf2cc'
  },
  'alert-warning hr': {
    'borderTopColor': '#f7ecb5'
  },
  'alert-warning alert-link': {
    'color': '#66512c'
  },
  'alert-danger': {
    'color': '#a94442',
    'backgroundColor': '#f2dede',
    'borderColor': '#ebcccc'
  },
  'alert-danger hr': {
    'borderTopColor': '#e4b9b9'
  },
  'alert-danger alert-link': {
    'color': '#843534'
  },
  'progress': {
    'display': 'flex',
    'overflow': 'hidden',
    'fontSize': [{ 'unit': 'rem', 'value': 0.75 }],
    'lineHeight': [{ 'unit': 'rem', 'value': 1 }],
    'textAlign': 'center',
    'backgroundColor': '#eceff1'
  },
  'progress-bar': {
    'height': [{ 'unit': 'rem', 'value': 1 }],
    'lineHeight': [{ 'unit': 'rem', 'value': 1 }],
    'color': '#fff',
    'backgroundColor': '#20a8d8',
    'transition': 'width 0.6s ease'
  },
  'progress-bar-striped': {
    'backgroundImage': 'linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent)',
    'backgroundSize': '1rem 1rem'
  },
  'progress-bar-animated': {
    'animation': 'progress-bar-stripes 1s linear infinite'
  },
  'media': {
    'display': 'flex',
    'alignItems': 'flex-start'
  },
  'media-body': {
    'flex': '1'
  },
  'list-group': {
    'display': 'flex',
    'flexDirection': 'column',
    'paddingLeft': [{ 'unit': 'px', 'value': 0 }],
    'marginBottom': [{ 'unit': 'px', 'value': 0 }]
  },
  'list-group-item-action': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'color': '#607d8b',
    'textAlign': 'inherit'
  },
  'list-group-item-action:focus': {
    'color': '#607d8b',
    'textDecoration': 'none',
    'backgroundColor': '#eceff1'
  },
  'list-group-item-action:hover': {
    'color': '#607d8b',
    'textDecoration': 'none',
    'backgroundColor': '#eceff1'
  },
  'list-group-item-action:active': {
    'color': '#263238',
    'backgroundColor': '#cfd8dc'
  },
  'list-group-item': {
    'position': 'relative',
    'display': 'block',
    'padding': [{ 'unit': 'rem', 'value': 0.75 }, { 'unit': 'rem', 'value': 1.25 }, { 'unit': 'rem', 'value': 0.75 }, { 'unit': 'rem', 'value': 1.25 }],
    'marginBottom': [{ 'unit': 'px', 'value': -1 }],
    'backgroundColor': '#fff',
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': 'rgba(0, 0, 0, 0.125)' }]
  },
  'list-group-item:last-child': {
    'marginBottom': [{ 'unit': 'px', 'value': 0 }]
  },
  'list-group-item:focus': {
    'textDecoration': 'none'
  },
  'list-group-item:hover': {
    'textDecoration': 'none'
  },
  'list-group-itemdisabled': {
    'color': '#b0bec5',
    'backgroundColor': '#fff'
  },
  'list-group-item:disabled': {
    'color': '#b0bec5',
    'backgroundColor': '#fff'
  },
  'list-group-itemactive': {
    'zIndex': '2',
    'color': '#fff',
    'backgroundColor': '#20a8d8',
    'borderColor': '#20a8d8'
  },
  'list-group-flush list-group-item': {
    'borderRight': [{ 'unit': 'px', 'value': 0 }],
    'borderLeft': [{ 'unit': 'px', 'value': 0 }],
    'borderRadius': '0'
  },
  'list-group-flush:first-child list-group-item:first-child': {
    'borderTop': [{ 'unit': 'px', 'value': 0 }]
  },
  'list-group-flush:last-child list-group-item:last-child': {
    'borderBottom': [{ 'unit': 'px', 'value': 0 }]
  },
  'list-group-item-success': {
    'color': '#3c763d',
    'backgroundColor': '#dff0d8'
  },
  'alist-group-item-success': {
    'color': '#3c763d'
  },
  'buttonlist-group-item-success': {
    'color': '#3c763d'
  },
  'alist-group-item-success:focus': {
    'color': '#3c763d',
    'backgroundColor': '#d0e9c6'
  },
  'alist-group-item-success:hover': {
    'color': '#3c763d',
    'backgroundColor': '#d0e9c6'
  },
  'buttonlist-group-item-success:focus': {
    'color': '#3c763d',
    'backgroundColor': '#d0e9c6'
  },
  'buttonlist-group-item-success:hover': {
    'color': '#3c763d',
    'backgroundColor': '#d0e9c6'
  },
  'alist-group-item-successactive': {
    'color': '#fff',
    'backgroundColor': '#3c763d',
    'borderColor': '#3c763d'
  },
  'buttonlist-group-item-successactive': {
    'color': '#fff',
    'backgroundColor': '#3c763d',
    'borderColor': '#3c763d'
  },
  'list-group-item-info': {
    'color': '#31708f',
    'backgroundColor': '#d9edf7'
  },
  'alist-group-item-info': {
    'color': '#31708f'
  },
  'buttonlist-group-item-info': {
    'color': '#31708f'
  },
  'alist-group-item-info:focus': {
    'color': '#31708f',
    'backgroundColor': '#c4e3f3'
  },
  'alist-group-item-info:hover': {
    'color': '#31708f',
    'backgroundColor': '#c4e3f3'
  },
  'buttonlist-group-item-info:focus': {
    'color': '#31708f',
    'backgroundColor': '#c4e3f3'
  },
  'buttonlist-group-item-info:hover': {
    'color': '#31708f',
    'backgroundColor': '#c4e3f3'
  },
  'alist-group-item-infoactive': {
    'color': '#fff',
    'backgroundColor': '#31708f',
    'borderColor': '#31708f'
  },
  'buttonlist-group-item-infoactive': {
    'color': '#fff',
    'backgroundColor': '#31708f',
    'borderColor': '#31708f'
  },
  'list-group-item-warning': {
    'color': '#8a6d3b',
    'backgroundColor': '#fcf8e3'
  },
  'alist-group-item-warning': {
    'color': '#8a6d3b'
  },
  'buttonlist-group-item-warning': {
    'color': '#8a6d3b'
  },
  'alist-group-item-warning:focus': {
    'color': '#8a6d3b',
    'backgroundColor': '#faf2cc'
  },
  'alist-group-item-warning:hover': {
    'color': '#8a6d3b',
    'backgroundColor': '#faf2cc'
  },
  'buttonlist-group-item-warning:focus': {
    'color': '#8a6d3b',
    'backgroundColor': '#faf2cc'
  },
  'buttonlist-group-item-warning:hover': {
    'color': '#8a6d3b',
    'backgroundColor': '#faf2cc'
  },
  'alist-group-item-warningactive': {
    'color': '#fff',
    'backgroundColor': '#8a6d3b',
    'borderColor': '#8a6d3b'
  },
  'buttonlist-group-item-warningactive': {
    'color': '#fff',
    'backgroundColor': '#8a6d3b',
    'borderColor': '#8a6d3b'
  },
  'list-group-item-danger': {
    'color': '#a94442',
    'backgroundColor': '#f2dede'
  },
  'alist-group-item-danger': {
    'color': '#a94442'
  },
  'buttonlist-group-item-danger': {
    'color': '#a94442'
  },
  'alist-group-item-danger:focus': {
    'color': '#a94442',
    'backgroundColor': '#ebcccc'
  },
  'alist-group-item-danger:hover': {
    'color': '#a94442',
    'backgroundColor': '#ebcccc'
  },
  'buttonlist-group-item-danger:focus': {
    'color': '#a94442',
    'backgroundColor': '#ebcccc'
  },
  'buttonlist-group-item-danger:hover': {
    'color': '#a94442',
    'backgroundColor': '#ebcccc'
  },
  'alist-group-item-dangeractive': {
    'color': '#fff',
    'backgroundColor': '#a94442',
    'borderColor': '#a94442'
  },
  'buttonlist-group-item-dangeractive': {
    'color': '#fff',
    'backgroundColor': '#a94442',
    'borderColor': '#a94442'
  },
  'embed-responsive': {
    'position': 'relative',
    'display': 'block',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'overflow': 'hidden'
  },
  'embed-responsive::before': {
    'display': 'block',
    'content': '""'
  },
  'embed-responsive embed-responsive-item': {
    'position': 'absolute',
    'top': [{ 'unit': 'px', 'value': 0 }],
    'bottom': [{ 'unit': 'px', 'value': 0 }],
    'left': [{ 'unit': 'px', 'value': 0 }],
    'width': [{ 'unit': '%H', 'value': 1 }],
    'height': [{ 'unit': '%V', 'value': 1 }],
    'border': [{ 'unit': 'px', 'value': 0 }]
  },
  'embed-responsive iframe': {
    'position': 'absolute',
    'top': [{ 'unit': 'px', 'value': 0 }],
    'bottom': [{ 'unit': 'px', 'value': 0 }],
    'left': [{ 'unit': 'px', 'value': 0 }],
    'width': [{ 'unit': '%H', 'value': 1 }],
    'height': [{ 'unit': '%V', 'value': 1 }],
    'border': [{ 'unit': 'px', 'value': 0 }]
  },
  'embed-responsive embed': {
    'position': 'absolute',
    'top': [{ 'unit': 'px', 'value': 0 }],
    'bottom': [{ 'unit': 'px', 'value': 0 }],
    'left': [{ 'unit': 'px', 'value': 0 }],
    'width': [{ 'unit': '%H', 'value': 1 }],
    'height': [{ 'unit': '%V', 'value': 1 }],
    'border': [{ 'unit': 'px', 'value': 0 }]
  },
  'embed-responsive object': {
    'position': 'absolute',
    'top': [{ 'unit': 'px', 'value': 0 }],
    'bottom': [{ 'unit': 'px', 'value': 0 }],
    'left': [{ 'unit': 'px', 'value': 0 }],
    'width': [{ 'unit': '%H', 'value': 1 }],
    'height': [{ 'unit': '%V', 'value': 1 }],
    'border': [{ 'unit': 'px', 'value': 0 }]
  },
  'embed-responsive video': {
    'position': 'absolute',
    'top': [{ 'unit': 'px', 'value': 0 }],
    'bottom': [{ 'unit': 'px', 'value': 0 }],
    'left': [{ 'unit': 'px', 'value': 0 }],
    'width': [{ 'unit': '%H', 'value': 1 }],
    'height': [{ 'unit': '%V', 'value': 1 }],
    'border': [{ 'unit': 'px', 'value': 0 }]
  },
  'embed-responsive-21by9::before': {
    'paddingTop': [{ 'unit': '%V', 'value': 0.4285714 }]
  },
  'embed-responsive-16by9::before': {
    'paddingTop': [{ 'unit': '%V', 'value': 0.5625 }]
  },
  'embed-responsive-4by3::before': {
    'paddingTop': [{ 'unit': '%V', 'value': 0.75 }]
  },
  'embed-responsive-1by1::before': {
    'paddingTop': [{ 'unit': '%V', 'value': 1 }]
  },
  'close': {
    'float': 'right',
    'fontSize': [{ 'unit': 'rem', 'value': 1.3125 }],
    'fontWeight': 'bold',
    'lineHeight': [{ 'unit': 'px', 'value': 1 }],
    'color': '#000',
    'textShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 1 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': '#fff' }],
    'opacity': '.5'
  },
  'close:focus': {
    'color': '#000',
    'textDecoration': 'none',
    'opacity': '.75'
  },
  'close:hover': {
    'color': '#000',
    'textDecoration': 'none',
    'opacity': '.75'
  },
  'buttonclose': {
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'background': 'transparent',
    'border': [{ 'unit': 'px', 'value': 0 }],
    'WebkitAppearance': 'none'
  },
  'modal-open': {
    'overflow': 'hidden'
  },
  'modal': {
    'position': 'fixed',
    'top': [{ 'unit': 'px', 'value': 0 }],
    'right': [{ 'unit': 'px', 'value': 0 }],
    'bottom': [{ 'unit': 'px', 'value': 0 }],
    'left': [{ 'unit': 'px', 'value': 0 }],
    'zIndex': '1050',
    'display': 'none',
    'overflow': 'hidden',
    'outline': '0'
  },
  'modalfade modal-dialog': {
    'transition': 'transform 0.3s ease-out',
    'transform': 'translate(0, -25%)'
  },
  'modalshow modal-dialog': {
    'transform': 'translate(0, 0)'
  },
  'modal-open modal': {
    'overflowX': 'hidden',
    'overflowY': 'auto'
  },
  'modal-dialog': {
    'position': 'relative',
    'width': [{ 'unit': 'string', 'value': 'auto' }],
    'margin': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }],
    '>w576': {
      'maxWidth': [{ 'unit': 'px', 'value': 500 }],
      'margin': [{ 'unit': 'px', 'value': 30 }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'px', 'value': 30 }, { 'unit': 'string', 'value': 'auto' }]
    }
  },
  'modal-content': {
    'position': 'relative',
    'display': 'flex',
    'flexDirection': 'column',
    'backgroundColor': '#fff',
    'backgroundClip': 'padding-box',
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': 'rgba(0, 0, 0, 0.2)' }],
    'outline': '0'
  },
  'modal-backdrop': {
    'position': 'fixed',
    'top': [{ 'unit': 'px', 'value': 0 }],
    'right': [{ 'unit': 'px', 'value': 0 }],
    'bottom': [{ 'unit': 'px', 'value': 0 }],
    'left': [{ 'unit': 'px', 'value': 0 }],
    'zIndex': '1040',
    'backgroundColor': '#000'
  },
  'modal-backdropfade': {
    'opacity': '0'
  },
  'modal-backdropshow': {
    'opacity': '0.5'
  },
  'modal-header': {
    'display': 'flex',
    'alignItems': 'center',
    'justifyContent': 'space-between',
    'padding': [{ 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 15 }],
    'borderBottom': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#cfd8dc' }]
  },
  'modal-title': {
    'marginBottom': [{ 'unit': 'px', 'value': 0 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }]
  },
  'modal-body': {
    'position': 'relative',
    'flex': '1 1 auto',
    'padding': [{ 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 15 }]
  },
  'modal-footer': {
    'display': 'flex',
    'alignItems': 'center',
    'justifyContent': 'flex-end',
    'padding': [{ 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 15 }],
    'borderTop': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#cfd8dc' }]
  },
  'modal-footer > :not(:first-child)': {
    'marginLeft': [{ 'unit': 'rem', 'value': 0.25 }]
  },
  'modal-footer > :not(:last-child)': {
    'marginRight': [{ 'unit': 'rem', 'value': 0.25 }]
  },
  'modal-scrollbar-measure': {
    'position': 'absolute',
    'top': [{ 'unit': 'px', 'value': -9999 }],
    'width': [{ 'unit': 'px', 'value': 50 }],
    'height': [{ 'unit': 'px', 'value': 50 }],
    'overflow': 'scroll'
  },
  'tooltip': {
    'position': 'absolute',
    'zIndex': '1070',
    'display': 'block',
    'fontFamily': '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    'fontStyle': 'normal',
    'fontWeight': 'normal',
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }],
    'textAlign': 'left',
    'textAlign': 'start',
    'textDecoration': 'none',
    'textShadow': [{ 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }],
    'textTransform': 'none',
    'letterSpacing': [{ 'unit': 'string', 'value': 'normal' }],
    'wordBreak': 'normal',
    'wordSpacing': 'normal',
    'whiteSpace': 'normal',
    'lineBreak': 'auto',
    'fontSize': [{ 'unit': 'rem', 'value': 0.875 }],
    'wordWrap': 'break-word',
    'opacity': '0'
  },
  'tooltipshow': {
    'opacity': '0.9'
  },
  'tooltiptooltip-top': {
    'padding': [{ 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 0 }],
    'marginTop': [{ 'unit': 'px', 'value': -3 }]
  },
  'tooltipbs-tether-element-attached-bottom': {
    'padding': [{ 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 0 }],
    'marginTop': [{ 'unit': 'px', 'value': -3 }]
  },
  'tooltiptooltip-top tooltip-inner::before': {
    'bottom': [{ 'unit': 'px', 'value': 0 }],
    'left': [{ 'unit': '%H', 'value': 0.5 }],
    'marginLeft': [{ 'unit': 'px', 'value': -5 }],
    'content': '""',
    'borderWidth': '5px 5px 0',
    'borderTopColor': '#000'
  },
  'tooltipbs-tether-element-attached-bottom tooltip-inner::before': {
    'bottom': [{ 'unit': 'px', 'value': 0 }],
    'left': [{ 'unit': '%H', 'value': 0.5 }],
    'marginLeft': [{ 'unit': 'px', 'value': -5 }],
    'content': '""',
    'borderWidth': '5px 5px 0',
    'borderTopColor': '#000'
  },
  'tooltiptooltip-right': {
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 5 }],
    'marginLeft': [{ 'unit': 'px', 'value': 3 }]
  },
  'tooltipbs-tether-element-attached-left': {
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 5 }],
    'marginLeft': [{ 'unit': 'px', 'value': 3 }]
  },
  'tooltiptooltip-right tooltip-inner::before': {
    'top': [{ 'unit': '%V', 'value': 0.5 }],
    'left': [{ 'unit': 'px', 'value': 0 }],
    'marginTop': [{ 'unit': 'px', 'value': -5 }],
    'content': '""',
    'borderWidth': '5px 5px 5px 0',
    'borderRightColor': '#000'
  },
  'tooltipbs-tether-element-attached-left tooltip-inner::before': {
    'top': [{ 'unit': '%V', 'value': 0.5 }],
    'left': [{ 'unit': 'px', 'value': 0 }],
    'marginTop': [{ 'unit': 'px', 'value': -5 }],
    'content': '""',
    'borderWidth': '5px 5px 5px 0',
    'borderRightColor': '#000'
  },
  'tooltiptooltip-bottom': {
    'padding': [{ 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 0 }],
    'marginTop': [{ 'unit': 'px', 'value': 3 }]
  },
  'tooltipbs-tether-element-attached-top': {
    'padding': [{ 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 0 }],
    'marginTop': [{ 'unit': 'px', 'value': 3 }]
  },
  'tooltiptooltip-bottom tooltip-inner::before': {
    'top': [{ 'unit': 'px', 'value': 0 }],
    'left': [{ 'unit': '%H', 'value': 0.5 }],
    'marginLeft': [{ 'unit': 'px', 'value': -5 }],
    'content': '""',
    'borderWidth': '0 5px 5px',
    'borderBottomColor': '#000'
  },
  'tooltipbs-tether-element-attached-top tooltip-inner::before': {
    'top': [{ 'unit': 'px', 'value': 0 }],
    'left': [{ 'unit': '%H', 'value': 0.5 }],
    'marginLeft': [{ 'unit': 'px', 'value': -5 }],
    'content': '""',
    'borderWidth': '0 5px 5px',
    'borderBottomColor': '#000'
  },
  'tooltiptooltip-left': {
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 5 }],
    'marginLeft': [{ 'unit': 'px', 'value': -3 }]
  },
  'tooltipbs-tether-element-attached-right': {
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 5 }],
    'marginLeft': [{ 'unit': 'px', 'value': -3 }]
  },
  'tooltiptooltip-left tooltip-inner::before': {
    'top': [{ 'unit': '%V', 'value': 0.5 }],
    'right': [{ 'unit': 'px', 'value': 0 }],
    'marginTop': [{ 'unit': 'px', 'value': -5 }],
    'content': '""',
    'borderWidth': '5px 0 5px 5px',
    'borderLeftColor': '#000'
  },
  'tooltipbs-tether-element-attached-right tooltip-inner::before': {
    'top': [{ 'unit': '%V', 'value': 0.5 }],
    'right': [{ 'unit': 'px', 'value': 0 }],
    'marginTop': [{ 'unit': 'px', 'value': -5 }],
    'content': '""',
    'borderWidth': '5px 0 5px 5px',
    'borderLeftColor': '#000'
  },
  'tooltip-inner': {
    'maxWidth': [{ 'unit': 'px', 'value': 200 }],
    'padding': [{ 'unit': 'px', 'value': 3 }, { 'unit': 'px', 'value': 8 }, { 'unit': 'px', 'value': 3 }, { 'unit': 'px', 'value': 8 }],
    'color': '#fff',
    'textAlign': 'center',
    'backgroundColor': '#000'
  },
  'tooltip-inner::before': {
    'position': 'absolute',
    'width': [{ 'unit': 'px', 'value': 0 }],
    'height': [{ 'unit': 'px', 'value': 0 }],
    'borderColor': 'transparent',
    'borderStyle': 'solid'
  },
  'popover': {
    'position': 'absolute',
    'top': [{ 'unit': 'px', 'value': 0 }],
    'left': [{ 'unit': 'px', 'value': 0 }],
    'zIndex': '1060',
    'display': 'block',
    'maxWidth': [{ 'unit': 'px', 'value': 276 }],
    'padding': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'px', 'value': 1 }, { 'unit': 'px', 'value': 1 }, { 'unit': 'px', 'value': 1 }],
    'fontFamily': '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    'fontStyle': 'normal',
    'fontWeight': 'normal',
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }],
    'textAlign': 'left',
    'textAlign': 'start',
    'textDecoration': 'none',
    'textShadow': [{ 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }],
    'textTransform': 'none',
    'letterSpacing': [{ 'unit': 'string', 'value': 'normal' }],
    'wordBreak': 'normal',
    'wordSpacing': 'normal',
    'whiteSpace': 'normal',
    'lineBreak': 'auto',
    'fontSize': [{ 'unit': 'rem', 'value': 0.875 }],
    'wordWrap': 'break-word',
    'backgroundColor': '#fff',
    'backgroundClip': 'padding-box',
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': 'rgba(0, 0, 0, 0.2)' }]
  },
  'popoverpopover-top': {
    'marginTop': [{ 'unit': 'px', 'value': -10 }]
  },
  'popoverbs-tether-element-attached-bottom': {
    'marginTop': [{ 'unit': 'px', 'value': -10 }]
  },
  'popoverpopover-top::before': {
    'left': [{ 'unit': '%H', 'value': 0.5 }],
    'borderBottomWidth': [{ 'unit': 'px', 'value': 0 }]
  },
  'popoverpopover-top::after': {
    'left': [{ 'unit': '%H', 'value': 0.5 }],
    'borderBottomWidth': [{ 'unit': 'px', 'value': 0 }]
  },
  'popoverbs-tether-element-attached-bottom::before': {
    'left': [{ 'unit': '%H', 'value': 0.5 }],
    'borderBottomWidth': [{ 'unit': 'px', 'value': 0 }]
  },
  'popoverbs-tether-element-attached-bottom::after': {
    'left': [{ 'unit': '%H', 'value': 0.5 }],
    'borderBottomWidth': [{ 'unit': 'px', 'value': 0 }]
  },
  'popoverpopover-top::before': {
    'bottom': [{ 'unit': 'px', 'value': -11 }],
    'marginLeft': [{ 'unit': 'px', 'value': -11 }],
    'borderTopColor': 'rgba(0, 0, 0, 0.25)'
  },
  'popoverbs-tether-element-attached-bottom::before': {
    'bottom': [{ 'unit': 'px', 'value': -11 }],
    'marginLeft': [{ 'unit': 'px', 'value': -11 }],
    'borderTopColor': 'rgba(0, 0, 0, 0.25)'
  },
  'popoverpopover-top::after': {
    'bottom': [{ 'unit': 'px', 'value': -10 }],
    'marginLeft': [{ 'unit': 'px', 'value': -10 }],
    'borderTopColor': '#fff'
  },
  'popoverbs-tether-element-attached-bottom::after': {
    'bottom': [{ 'unit': 'px', 'value': -10 }],
    'marginLeft': [{ 'unit': 'px', 'value': -10 }],
    'borderTopColor': '#fff'
  },
  'popoverpopover-right': {
    'marginLeft': [{ 'unit': 'px', 'value': 10 }]
  },
  'popoverbs-tether-element-attached-left': {
    'marginLeft': [{ 'unit': 'px', 'value': 10 }]
  },
  'popoverpopover-right::before': {
    'top': [{ 'unit': '%V', 'value': 0.5 }],
    'borderLeftWidth': [{ 'unit': 'px', 'value': 0 }]
  },
  'popoverpopover-right::after': {
    'top': [{ 'unit': '%V', 'value': 0.5 }],
    'borderLeftWidth': [{ 'unit': 'px', 'value': 0 }]
  },
  'popoverbs-tether-element-attached-left::before': {
    'top': [{ 'unit': '%V', 'value': 0.5 }],
    'borderLeftWidth': [{ 'unit': 'px', 'value': 0 }]
  },
  'popoverbs-tether-element-attached-left::after': {
    'top': [{ 'unit': '%V', 'value': 0.5 }],
    'borderLeftWidth': [{ 'unit': 'px', 'value': 0 }]
  },
  'popoverpopover-right::before': {
    'left': [{ 'unit': 'px', 'value': -11 }],
    'marginTop': [{ 'unit': 'px', 'value': -11 }],
    'borderRightColor': 'rgba(0, 0, 0, 0.25)'
  },
  'popoverbs-tether-element-attached-left::before': {
    'left': [{ 'unit': 'px', 'value': -11 }],
    'marginTop': [{ 'unit': 'px', 'value': -11 }],
    'borderRightColor': 'rgba(0, 0, 0, 0.25)'
  },
  'popoverpopover-right::after': {
    'left': [{ 'unit': 'px', 'value': -10 }],
    'marginTop': [{ 'unit': 'px', 'value': -10 }],
    'borderRightColor': '#fff'
  },
  'popoverbs-tether-element-attached-left::after': {
    'left': [{ 'unit': 'px', 'value': -10 }],
    'marginTop': [{ 'unit': 'px', 'value': -10 }],
    'borderRightColor': '#fff'
  },
  'popoverpopover-bottom': {
    'marginTop': [{ 'unit': 'px', 'value': 10 }]
  },
  'popoverbs-tether-element-attached-top': {
    'marginTop': [{ 'unit': 'px', 'value': 10 }]
  },
  'popoverpopover-bottom::before': {
    'left': [{ 'unit': '%H', 'value': 0.5 }],
    'borderTopWidth': [{ 'unit': 'px', 'value': 0 }]
  },
  'popoverpopover-bottom::after': {
    'left': [{ 'unit': '%H', 'value': 0.5 }],
    'borderTopWidth': [{ 'unit': 'px', 'value': 0 }]
  },
  'popoverbs-tether-element-attached-top::before': {
    'left': [{ 'unit': '%H', 'value': 0.5 }],
    'borderTopWidth': [{ 'unit': 'px', 'value': 0 }]
  },
  'popoverbs-tether-element-attached-top::after': {
    'left': [{ 'unit': '%H', 'value': 0.5 }],
    'borderTopWidth': [{ 'unit': 'px', 'value': 0 }]
  },
  'popoverpopover-bottom::before': {
    'top': [{ 'unit': 'px', 'value': -11 }],
    'marginLeft': [{ 'unit': 'px', 'value': -11 }],
    'borderBottomColor': 'rgba(0, 0, 0, 0.25)'
  },
  'popoverbs-tether-element-attached-top::before': {
    'top': [{ 'unit': 'px', 'value': -11 }],
    'marginLeft': [{ 'unit': 'px', 'value': -11 }],
    'borderBottomColor': 'rgba(0, 0, 0, 0.25)'
  },
  'popoverpopover-bottom::after': {
    'top': [{ 'unit': 'px', 'value': -10 }],
    'marginLeft': [{ 'unit': 'px', 'value': -10 }],
    'borderBottomColor': '#fff'
  },
  'popoverbs-tether-element-attached-top::after': {
    'top': [{ 'unit': 'px', 'value': -10 }],
    'marginLeft': [{ 'unit': 'px', 'value': -10 }],
    'borderBottomColor': '#fff'
  },
  'popoverpopover-bottom popover-title::before': {
    'position': 'absolute',
    'top': [{ 'unit': 'px', 'value': 0 }],
    'left': [{ 'unit': '%H', 'value': 0.5 }],
    'display': 'block',
    'width': [{ 'unit': 'px', 'value': 20 }],
    'marginLeft': [{ 'unit': 'px', 'value': -10 }],
    'content': '""',
    'borderBottom': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#f7f7f7' }]
  },
  'popoverbs-tether-element-attached-top popover-title::before': {
    'position': 'absolute',
    'top': [{ 'unit': 'px', 'value': 0 }],
    'left': [{ 'unit': '%H', 'value': 0.5 }],
    'display': 'block',
    'width': [{ 'unit': 'px', 'value': 20 }],
    'marginLeft': [{ 'unit': 'px', 'value': -10 }],
    'content': '""',
    'borderBottom': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#f7f7f7' }]
  },
  'popoverpopover-left': {
    'marginLeft': [{ 'unit': 'px', 'value': -10 }]
  },
  'popoverbs-tether-element-attached-right': {
    'marginLeft': [{ 'unit': 'px', 'value': -10 }]
  },
  'popoverpopover-left::before': {
    'top': [{ 'unit': '%V', 'value': 0.5 }],
    'borderRightWidth': [{ 'unit': 'px', 'value': 0 }]
  },
  'popoverpopover-left::after': {
    'top': [{ 'unit': '%V', 'value': 0.5 }],
    'borderRightWidth': [{ 'unit': 'px', 'value': 0 }]
  },
  'popoverbs-tether-element-attached-right::before': {
    'top': [{ 'unit': '%V', 'value': 0.5 }],
    'borderRightWidth': [{ 'unit': 'px', 'value': 0 }]
  },
  'popoverbs-tether-element-attached-right::after': {
    'top': [{ 'unit': '%V', 'value': 0.5 }],
    'borderRightWidth': [{ 'unit': 'px', 'value': 0 }]
  },
  'popoverpopover-left::before': {
    'right': [{ 'unit': 'px', 'value': -11 }],
    'marginTop': [{ 'unit': 'px', 'value': -11 }],
    'borderLeftColor': 'rgba(0, 0, 0, 0.25)'
  },
  'popoverbs-tether-element-attached-right::before': {
    'right': [{ 'unit': 'px', 'value': -11 }],
    'marginTop': [{ 'unit': 'px', 'value': -11 }],
    'borderLeftColor': 'rgba(0, 0, 0, 0.25)'
  },
  'popoverpopover-left::after': {
    'right': [{ 'unit': 'px', 'value': -10 }],
    'marginTop': [{ 'unit': 'px', 'value': -10 }],
    'borderLeftColor': '#fff'
  },
  'popoverbs-tether-element-attached-right::after': {
    'right': [{ 'unit': 'px', 'value': -10 }],
    'marginTop': [{ 'unit': 'px', 'value': -10 }],
    'borderLeftColor': '#fff'
  },
  'popover-title': {
    'padding': [{ 'unit': 'px', 'value': 8 }, { 'unit': 'px', 'value': 14 }, { 'unit': 'px', 'value': 8 }, { 'unit': 'px', 'value': 14 }],
    'marginBottom': [{ 'unit': 'px', 'value': 0 }],
    'fontSize': [{ 'unit': 'rem', 'value': 0.875 }],
    'color': 'inherit',
    'backgroundColor': '#f7f7f7',
    'borderBottom': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ebebeb' }]
  },
  'popover-title:empty': {
    'display': 'none'
  },
  'popover-content': {
    'padding': [{ 'unit': 'px', 'value': 9 }, { 'unit': 'px', 'value': 14 }, { 'unit': 'px', 'value': 9 }, { 'unit': 'px', 'value': 14 }],
    'color': '#263238'
  },
  'popover::before': {
    'position': 'absolute',
    'display': 'block',
    'width': [{ 'unit': 'px', 'value': 0 }],
    'height': [{ 'unit': 'px', 'value': 0 }],
    'borderColor': 'transparent',
    'borderStyle': 'solid'
  },
  'popover::after': {
    'position': 'absolute',
    'display': 'block',
    'width': [{ 'unit': 'px', 'value': 0 }],
    'height': [{ 'unit': 'px', 'value': 0 }],
    'borderColor': 'transparent',
    'borderStyle': 'solid'
  },
  'popover::before': {
    'content': '""',
    'borderWidth': '11px'
  },
  'popover::after': {
    'content': '""',
    'borderWidth': '10px'
  },
  'carousel': {
    'position': 'relative'
  },
  'carousel-inner': {
    'position': 'relative',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'overflow': 'hidden'
  },
  'carousel-item': {
    'position': 'relative',
    'display': 'none',
    'alignItems': 'center',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'transition': 'transform 0.6s ease',
    'backfaceVisibility': 'hidden',
    'perspective': '1000px'
  },
  'carousel-itemactive': {
    'display': 'flex'
  },
  'carousel-item-next': {
    'display': 'flex'
  },
  'carousel-item-prev': {
    'display': 'flex'
  },
  'carousel-item-next': {
    'position': 'absolute',
    'top': [{ 'unit': 'px', 'value': 0 }]
  },
  'carousel-item-prev': {
    'position': 'absolute',
    'top': [{ 'unit': 'px', 'value': 0 }]
  },
  'carousel-item-nextcarousel-item-left': {
    'transform': 'translate3d(0, 0, 0)'
  },
  'carousel-item-prevcarousel-item-right': {
    'transform': 'translate3d(0, 0, 0)'
  },
  'carousel-item-next': {
    'transform': 'translate3d(100%, 0, 0)'
  },
  'activecarousel-item-right': {
    'transform': 'translate3d(100%, 0, 0)'
  },
  'carousel-item-prev': {
    'transform': 'translate3d(-100%, 0, 0)'
  },
  'activecarousel-item-left': {
    'transform': 'translate3d(-100%, 0, 0)'
  },
  'carousel-control-prev': {
    'position': 'absolute',
    'top': [{ 'unit': 'px', 'value': 0 }],
    'bottom': [{ 'unit': 'px', 'value': 0 }],
    'display': 'flex',
    'alignItems': 'center',
    'justifyContent': 'center',
    'width': [{ 'unit': '%H', 'value': 0.15 }],
    'color': '#fff',
    'textAlign': 'center',
    'opacity': '0.5'
  },
  'carousel-control-next': {
    'position': 'absolute',
    'top': [{ 'unit': 'px', 'value': 0 }],
    'bottom': [{ 'unit': 'px', 'value': 0 }],
    'display': 'flex',
    'alignItems': 'center',
    'justifyContent': 'center',
    'width': [{ 'unit': '%H', 'value': 0.15 }],
    'color': '#fff',
    'textAlign': 'center',
    'opacity': '0.5'
  },
  'carousel-control-prev:focus': {
    'color': '#fff',
    'textDecoration': 'none',
    'outline': '0',
    'opacity': '.9'
  },
  'carousel-control-prev:hover': {
    'color': '#fff',
    'textDecoration': 'none',
    'outline': '0',
    'opacity': '.9'
  },
  'carousel-control-next:focus': {
    'color': '#fff',
    'textDecoration': 'none',
    'outline': '0',
    'opacity': '.9'
  },
  'carousel-control-next:hover': {
    'color': '#fff',
    'textDecoration': 'none',
    'outline': '0',
    'opacity': '.9'
  },
  'carousel-control-prev': {
    'left': [{ 'unit': 'px', 'value': 0 }]
  },
  'carousel-control-next': {
    'right': [{ 'unit': 'px', 'value': 0 }]
  },
  'carousel-control-prev-icon': {
    'display': 'inline-block',
    'width': [{ 'unit': 'px', 'value': 20 }],
    'height': [{ 'unit': 'px', 'value': 20 }],
    'background': 'transparent no-repeat center center',
    'backgroundSize': '100% 100%'
  },
  'carousel-control-next-icon': {
    'display': 'inline-block',
    'width': [{ 'unit': 'px', 'value': 20 }],
    'height': [{ 'unit': 'px', 'value': 20 }],
    'background': 'transparent no-repeat center center',
    'backgroundSize': '100% 100%'
  },
  'carousel-control-prev-icon': {
    'backgroundImage': 'url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23fff' viewBox='0 0 8 8'%3E%3Cpath d='M4 0l-4 4 4 4 1.5-1.5-2.5-2.5 2.5-2.5-1.5-1.5z'/%3E%3C/svg%3E")'
  },
  'carousel-control-next-icon': {
    'backgroundImage': 'url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23fff' viewBox='0 0 8 8'%3E%3Cpath d='M1.5 0l-1.5 1.5 2.5 2.5-2.5 2.5 1.5 1.5 4-4-4-4z'/%3E%3C/svg%3E")'
  },
  'carousel-indicators': {
    'position': 'absolute',
    'right': [{ 'unit': 'px', 'value': 0 }],
    'bottom': [{ 'unit': 'px', 'value': 10 }],
    'left': [{ 'unit': 'px', 'value': 0 }],
    'zIndex': '15',
    'display': 'flex',
    'justifyContent': 'center',
    'paddingLeft': [{ 'unit': 'px', 'value': 0 }],
    'marginRight': [{ 'unit': '%H', 'value': 0.15 }],
    'marginLeft': [{ 'unit': '%H', 'value': 0.15 }],
    'listStyle': 'none'
  },
  'carousel-indicators li': {
    'position': 'relative',
    'flex': '1 0 auto',
    'maxWidth': [{ 'unit': 'px', 'value': 30 }],
    'height': [{ 'unit': 'px', 'value': 3 }],
    'marginRight': [{ 'unit': 'px', 'value': 3 }],
    'marginLeft': [{ 'unit': 'px', 'value': 3 }],
    'textIndent': '-999px',
    'backgroundColor': 'rgba(255, 255, 255, 0.5)'
  },
  'carousel-indicators li::before': {
    'position': 'absolute',
    'top': [{ 'unit': 'px', 'value': -10 }],
    'left': [{ 'unit': 'px', 'value': 0 }],
    'display': 'inline-block',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'height': [{ 'unit': 'px', 'value': 10 }],
    'content': '""'
  },
  'carousel-indicators li::after': {
    'position': 'absolute',
    'bottom': [{ 'unit': 'px', 'value': -10 }],
    'left': [{ 'unit': 'px', 'value': 0 }],
    'display': 'inline-block',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'height': [{ 'unit': 'px', 'value': 10 }],
    'content': '""'
  },
  'carousel-indicators active': {
    'backgroundColor': '#fff'
  },
  'carousel-caption': {
    'position': 'absolute',
    'right': [{ 'unit': '%H', 'value': 0.15 }],
    'bottom': [{ 'unit': 'px', 'value': 20 }],
    'left': [{ 'unit': '%H', 'value': 0.15 }],
    'zIndex': '10',
    'paddingTop': [{ 'unit': 'px', 'value': 20 }],
    'paddingBottom': [{ 'unit': 'px', 'value': 20 }],
    'color': '#fff',
    'textAlign': 'center'
  },
  'align-baseline': {
    'verticalAlign': 'baseline !important'
  },
  'align-top': {
    'verticalAlign': 'top !important'
  },
  'align-middle': {
    'verticalAlign': 'middle !important'
  },
  'align-bottom': {
    'verticalAlign': 'bottom !important'
  },
  'align-text-bottom': {
    'verticalAlign': 'text-bottom !important'
  },
  'align-text-top': {
    'verticalAlign': 'text-top !important'
  },
  'bg-faded': {
    'backgroundColor': '#dcdddf'
  },
  'bg-primary': {
    'backgroundColor': '#20a8d8 !important'
  },
  'abg-primary:focus': {
    'backgroundColor': '#1985ac !important'
  },
  'abg-primary:hover': {
    'backgroundColor': '#1985ac !important'
  },
  'bg-success': {
    'backgroundColor': '#4dbd74 !important'
  },
  'abg-success:focus': {
    'backgroundColor': '#3a9d5d !important'
  },
  'abg-success:hover': {
    'backgroundColor': '#3a9d5d !important'
  },
  'bg-info': {
    'backgroundColor': '#63c2de !important'
  },
  'abg-info:focus': {
    'backgroundColor': '#39b2d5 !important'
  },
  'abg-info:hover': {
    'backgroundColor': '#39b2d5 !important'
  },
  'bg-warning': {
    'backgroundColor': '#f8cb00 !important'
  },
  'abg-warning:focus': {
    'backgroundColor': '#c5a100 !important'
  },
  'abg-warning:hover': {
    'backgroundColor': '#c5a100 !important'
  },
  'bg-danger': {
    'backgroundColor': '#f86c6b !important'
  },
  'abg-danger:focus': {
    'backgroundColor': '#f63c3a !important'
  },
  'abg-danger:hover': {
    'backgroundColor': '#f63c3a !important'
  },
  'bg-inverse': {
    'backgroundColor': '#263238 !important'
  },
  'abg-inverse:focus': {
    'backgroundColor': '#11171a !important'
  },
  'abg-inverse:hover': {
    'backgroundColor': '#11171a !important'
  },
  'border-0': {
    'border': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': '!important' }]
  },
  'border-top-0': {
    'borderTop': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': '!important' }]
  },
  'border-right-0': {
    'borderRight': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': '!important' }]
  },
  'border-bottom-0': {
    'borderBottom': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': '!important' }]
  },
  'border-left-0': {
    'borderLeft': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': '!important' }]
  },
  'rounded-circle': {
    'borderRadius': '50%'
  },
  'rounded-0': {
    'borderRadius': '0'
  },
  'clearfix::after': {
    'display': 'block',
    'clear': 'both',
    'content': '""'
  },
  'd-none': {
    'display': 'none !important'
  },
  'd-inline': {
    'display': 'inline !important'
  },
  'd-inline-block': {
    'display': 'inline-block !important'
  },
  'd-block': {
    'display': 'block !important'
  },
  'd-table': {
    'display': 'table !important'
  },
  'd-table-cell': {
    'display': 'table-cell !important'
  },
  'd-flex': {
    'display': 'flex !important'
  },
  'd-inline-flex': {
    'display': 'inline-flex !important'
  },
  'd-print-block': {
    'display': 'none !important',
    '': {
      'display': 'block !important'
    }
  },
  'd-print-inline': {
    'display': 'none !important',
    '': {
      'display': 'inline !important'
    }
  },
  'd-print-inline-block': {
    'display': 'none !important',
    '': {
      'display': 'inline-block !important'
    }
  },
  'order-first': {
    'order': '-1'
  },
  'order-last': {
    'order': '1'
  },
  'order-0': {
    'order': '0'
  },
  'flex-row': {
    'flexDirection': 'row !important'
  },
  'flex-column': {
    'flexDirection': 'column !important'
  },
  'flex-row-reverse': {
    'flexDirection': 'row-reverse !important'
  },
  'flex-column-reverse': {
    'flexDirection': 'column-reverse !important'
  },
  'flex-wrap': {
    'flexWrap': 'wrap !important'
  },
  'flex-nowrap': {
    'flexWrap': 'nowrap !important'
  },
  'flex-wrap-reverse': {
    'flexWrap': 'wrap-reverse !important'
  },
  'justify-content-start': {
    'justifyContent': 'flex-start !important'
  },
  'justify-content-end': {
    'justifyContent': 'flex-end !important'
  },
  'justify-content-center': {
    'justifyContent': 'center !important'
  },
  'justify-content-between': {
    'justifyContent': 'space-between !important'
  },
  'justify-content-around': {
    'justifyContent': 'space-around !important'
  },
  'align-items-start': {
    'alignItems': 'flex-start !important'
  },
  'align-items-end': {
    'alignItems': 'flex-end !important'
  },
  'align-items-center': {
    'alignItems': 'center !important'
  },
  'align-items-baseline': {
    'alignItems': 'baseline !important'
  },
  'align-items-stretch': {
    'alignItems': 'stretch !important'
  },
  'align-content-start': {
    'alignContent': 'flex-start !important'
  },
  'align-content-end': {
    'alignContent': 'flex-end !important'
  },
  'align-content-center': {
    'alignContent': 'center !important'
  },
  'align-content-between': {
    'alignContent': 'space-between !important'
  },
  'align-content-around': {
    'alignContent': 'space-around !important'
  },
  'align-content-stretch': {
    'alignContent': 'stretch !important'
  },
  'align-self-auto': {
    'alignSelf': 'auto !important'
  },
  'align-self-start': {
    'alignSelf': 'flex-start !important'
  },
  'align-self-end': {
    'alignSelf': 'flex-end !important'
  },
  'align-self-center': {
    'alignSelf': 'center !important'
  },
  'align-self-baseline': {
    'alignSelf': 'baseline !important'
  },
  'align-self-stretch': {
    'alignSelf': 'stretch !important'
  },
  'float-left': {
    'float': 'left !important'
  },
  'float-right': {
    'float': 'right !important'
  },
  'float-none': {
    'float': 'none !important'
  },
  'fixed-top': {
    'position': 'fixed',
    'top': [{ 'unit': 'px', 'value': 0 }],
    'right': [{ 'unit': 'px', 'value': 0 }],
    'left': [{ 'unit': 'px', 'value': 0 }],
    'zIndex': '1030'
  },
  'fixed-bottom': {
    'position': 'fixed',
    'right': [{ 'unit': 'px', 'value': 0 }],
    'bottom': [{ 'unit': 'px', 'value': 0 }],
    'left': [{ 'unit': 'px', 'value': 0 }],
    'zIndex': '1030'
  },
  'sticky-top': {
    'position': 'sticky',
    'top': [{ 'unit': 'px', 'value': 0 }],
    'zIndex': '1020'
  },
  'sr-only': {
    'position': 'absolute',
    'width': [{ 'unit': 'px', 'value': 1 }],
    'height': [{ 'unit': 'px', 'value': 1 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'overflow': 'hidden',
    'clip': 'rect(0, 0, 0, 0)',
    'whiteSpace': 'nowrap',
    'clipPath': 'inset(50%)',
    'border': [{ 'unit': 'px', 'value': 0 }]
  },
  'sr-only-focusable:active': {
    'position': 'static',
    'width': [{ 'unit': 'string', 'value': 'auto' }],
    'height': [{ 'unit': 'string', 'value': 'auto' }],
    'overflow': 'visible',
    'clip': 'auto',
    'whiteSpace': 'normal',
    'clipPath': 'none'
  },
  'sr-only-focusable:focus': {
    'position': 'static',
    'width': [{ 'unit': 'string', 'value': 'auto' }],
    'height': [{ 'unit': 'string', 'value': 'auto' }],
    'overflow': 'visible',
    'clip': 'auto',
    'whiteSpace': 'normal',
    'clipPath': 'none'
  },
  'w-25': {
    'width': [{ 'unit': '%H', 'value': 0.25 }, { 'unit': 'string', 'value': '!important' }]
  },
  'w-50': {
    'width': [{ 'unit': '%H', 'value': 0.5 }, { 'unit': 'string', 'value': '!important' }]
  },
  'w-75': {
    'width': [{ 'unit': '%H', 'value': 0.75 }, { 'unit': 'string', 'value': '!important' }]
  },
  'w-100': {
    'width': [{ 'unit': '%H', 'value': 1 }, { 'unit': 'string', 'value': '!important' }]
  },
  'h-25': {
    'height': [{ 'unit': '%V', 'value': 0.25 }, { 'unit': 'string', 'value': '!important' }]
  },
  'h-50': {
    'height': [{ 'unit': '%V', 'value': 0.5 }, { 'unit': 'string', 'value': '!important' }]
  },
  'h-75': {
    'height': [{ 'unit': '%V', 'value': 0.75 }, { 'unit': 'string', 'value': '!important' }]
  },
  'h-100': {
    'height': [{ 'unit': '%V', 'value': 1 }, { 'unit': 'string', 'value': '!important' }]
  },
  'mw-100': {
    'maxWidth': [{ 'unit': '%H', 'value': 1 }, { 'unit': 'string', 'value': '!important' }]
  },
  'mh-100': {
    'maxHeight': [{ 'unit': '%V', 'value': 1 }, { 'unit': 'string', 'value': '!important' }]
  },
  'm-0': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': '!important' }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': '!important' }]
  },
  'mt-0': {
    'marginTop': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': '!important' }]
  },
  'mr-0': {
    'marginRight': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': '!important' }]
  },
  'mb-0': {
    'marginBottom': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': '!important' }]
  },
  'ml-0': {
    'marginLeft': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': '!important' }]
  },
  'mx-0': {
    'marginRight': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': '!important' }],
    'marginLeft': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': '!important' }]
  },
  'my-0': {
    'marginTop': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': '!important' }],
    'marginBottom': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': '!important' }]
  },
  'm-1': {
    'margin': [{ 'unit': 'rem', 'value': 0.25 }, { 'unit': 'string', 'value': '!important' }, { 'unit': 'rem', 'value': 0.25 }, { 'unit': 'string', 'value': '!important' }]
  },
  'mt-1': {
    'marginTop': [{ 'unit': 'rem', 'value': 0.25 }, { 'unit': 'string', 'value': '!important' }]
  },
  'mr-1': {
    'marginRight': [{ 'unit': 'rem', 'value': 0.25 }, { 'unit': 'string', 'value': '!important' }]
  },
  'mb-1': {
    'marginBottom': [{ 'unit': 'rem', 'value': 0.25 }, { 'unit': 'string', 'value': '!important' }]
  },
  'ml-1': {
    'marginLeft': [{ 'unit': 'rem', 'value': 0.25 }, { 'unit': 'string', 'value': '!important' }]
  },
  'mx-1': {
    'marginRight': [{ 'unit': 'rem', 'value': 0.25 }, { 'unit': 'string', 'value': '!important' }],
    'marginLeft': [{ 'unit': 'rem', 'value': 0.25 }, { 'unit': 'string', 'value': '!important' }]
  },
  'my-1': {
    'marginTop': [{ 'unit': 'rem', 'value': 0.25 }, { 'unit': 'string', 'value': '!important' }],
    'marginBottom': [{ 'unit': 'rem', 'value': 0.25 }, { 'unit': 'string', 'value': '!important' }]
  },
  'm-2': {
    'margin': [{ 'unit': 'rem', 'value': 0.5 }, { 'unit': 'string', 'value': '!important' }, { 'unit': 'rem', 'value': 0.5 }, { 'unit': 'string', 'value': '!important' }]
  },
  'mt-2': {
    'marginTop': [{ 'unit': 'rem', 'value': 0.5 }, { 'unit': 'string', 'value': '!important' }]
  },
  'mr-2': {
    'marginRight': [{ 'unit': 'rem', 'value': 0.5 }, { 'unit': 'string', 'value': '!important' }]
  },
  'mb-2': {
    'marginBottom': [{ 'unit': 'rem', 'value': 0.5 }, { 'unit': 'string', 'value': '!important' }]
  },
  'ml-2': {
    'marginLeft': [{ 'unit': 'rem', 'value': 0.5 }, { 'unit': 'string', 'value': '!important' }]
  },
  'mx-2': {
    'marginRight': [{ 'unit': 'rem', 'value': 0.5 }, { 'unit': 'string', 'value': '!important' }],
    'marginLeft': [{ 'unit': 'rem', 'value': 0.5 }, { 'unit': 'string', 'value': '!important' }]
  },
  'my-2': {
    'marginTop': [{ 'unit': 'rem', 'value': 0.5 }, { 'unit': 'string', 'value': '!important' }],
    'marginBottom': [{ 'unit': 'rem', 'value': 0.5 }, { 'unit': 'string', 'value': '!important' }]
  },
  'm-3': {
    'margin': [{ 'unit': 'rem', 'value': 1 }, { 'unit': 'string', 'value': '!important' }, { 'unit': 'rem', 'value': 1 }, { 'unit': 'string', 'value': '!important' }]
  },
  'mt-3': {
    'marginTop': [{ 'unit': 'rem', 'value': 1 }, { 'unit': 'string', 'value': '!important' }]
  },
  'mr-3': {
    'marginRight': [{ 'unit': 'rem', 'value': 1 }, { 'unit': 'string', 'value': '!important' }]
  },
  'mb-3': {
    'marginBottom': [{ 'unit': 'rem', 'value': 1 }, { 'unit': 'string', 'value': '!important' }]
  },
  'ml-3': {
    'marginLeft': [{ 'unit': 'rem', 'value': 1 }, { 'unit': 'string', 'value': '!important' }]
  },
  'mx-3': {
    'marginRight': [{ 'unit': 'rem', 'value': 1 }, { 'unit': 'string', 'value': '!important' }],
    'marginLeft': [{ 'unit': 'rem', 'value': 1 }, { 'unit': 'string', 'value': '!important' }]
  },
  'my-3': {
    'marginTop': [{ 'unit': 'rem', 'value': 1 }, { 'unit': 'string', 'value': '!important' }],
    'marginBottom': [{ 'unit': 'rem', 'value': 1 }, { 'unit': 'string', 'value': '!important' }]
  },
  'm-4': {
    'margin': [{ 'unit': 'rem', 'value': 1.5 }, { 'unit': 'string', 'value': '!important' }, { 'unit': 'rem', 'value': 1.5 }, { 'unit': 'string', 'value': '!important' }]
  },
  'mt-4': {
    'marginTop': [{ 'unit': 'rem', 'value': 1.5 }, { 'unit': 'string', 'value': '!important' }]
  },
  'mr-4': {
    'marginRight': [{ 'unit': 'rem', 'value': 1.5 }, { 'unit': 'string', 'value': '!important' }]
  },
  'mb-4': {
    'marginBottom': [{ 'unit': 'rem', 'value': 1.5 }, { 'unit': 'string', 'value': '!important' }]
  },
  'ml-4': {
    'marginLeft': [{ 'unit': 'rem', 'value': 1.5 }, { 'unit': 'string', 'value': '!important' }]
  },
  'mx-4': {
    'marginRight': [{ 'unit': 'rem', 'value': 1.5 }, { 'unit': 'string', 'value': '!important' }],
    'marginLeft': [{ 'unit': 'rem', 'value': 1.5 }, { 'unit': 'string', 'value': '!important' }]
  },
  'my-4': {
    'marginTop': [{ 'unit': 'rem', 'value': 1.5 }, { 'unit': 'string', 'value': '!important' }],
    'marginBottom': [{ 'unit': 'rem', 'value': 1.5 }, { 'unit': 'string', 'value': '!important' }]
  },
  'm-5': {
    'margin': [{ 'unit': 'rem', 'value': 3 }, { 'unit': 'string', 'value': '!important' }, { 'unit': 'rem', 'value': 3 }, { 'unit': 'string', 'value': '!important' }]
  },
  'mt-5': {
    'marginTop': [{ 'unit': 'rem', 'value': 3 }, { 'unit': 'string', 'value': '!important' }]
  },
  'mr-5': {
    'marginRight': [{ 'unit': 'rem', 'value': 3 }, { 'unit': 'string', 'value': '!important' }]
  },
  'mb-5': {
    'marginBottom': [{ 'unit': 'rem', 'value': 3 }, { 'unit': 'string', 'value': '!important' }]
  },
  'ml-5': {
    'marginLeft': [{ 'unit': 'rem', 'value': 3 }, { 'unit': 'string', 'value': '!important' }]
  },
  'mx-5': {
    'marginRight': [{ 'unit': 'rem', 'value': 3 }, { 'unit': 'string', 'value': '!important' }],
    'marginLeft': [{ 'unit': 'rem', 'value': 3 }, { 'unit': 'string', 'value': '!important' }]
  },
  'my-5': {
    'marginTop': [{ 'unit': 'rem', 'value': 3 }, { 'unit': 'string', 'value': '!important' }],
    'marginBottom': [{ 'unit': 'rem', 'value': 3 }, { 'unit': 'string', 'value': '!important' }]
  },
  'p-0': {
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': '!important' }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': '!important' }]
  },
  'pt-0': {
    'paddingTop': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': '!important' }]
  },
  'pr-0': {
    'paddingRight': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': '!important' }]
  },
  'pb-0': {
    'paddingBottom': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': '!important' }]
  },
  'pl-0': {
    'paddingLeft': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': '!important' }]
  },
  'px-0': {
    'paddingRight': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': '!important' }],
    'paddingLeft': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': '!important' }]
  },
  'py-0': {
    'paddingTop': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': '!important' }],
    'paddingBottom': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': '!important' }]
  },
  'p-1': {
    'padding': [{ 'unit': 'rem', 'value': 0.25 }, { 'unit': 'string', 'value': '!important' }, { 'unit': 'rem', 'value': 0.25 }, { 'unit': 'string', 'value': '!important' }]
  },
  'pt-1': {
    'paddingTop': [{ 'unit': 'rem', 'value': 0.25 }, { 'unit': 'string', 'value': '!important' }]
  },
  'pr-1': {
    'paddingRight': [{ 'unit': 'rem', 'value': 0.25 }, { 'unit': 'string', 'value': '!important' }]
  },
  'pb-1': {
    'paddingBottom': [{ 'unit': 'rem', 'value': 0.25 }, { 'unit': 'string', 'value': '!important' }]
  },
  'pl-1': {
    'paddingLeft': [{ 'unit': 'rem', 'value': 0.25 }, { 'unit': 'string', 'value': '!important' }]
  },
  'px-1': {
    'paddingRight': [{ 'unit': 'rem', 'value': 0.25 }, { 'unit': 'string', 'value': '!important' }],
    'paddingLeft': [{ 'unit': 'rem', 'value': 0.25 }, { 'unit': 'string', 'value': '!important' }]
  },
  'py-1': {
    'paddingTop': [{ 'unit': 'rem', 'value': 0.25 }, { 'unit': 'string', 'value': '!important' }],
    'paddingBottom': [{ 'unit': 'rem', 'value': 0.25 }, { 'unit': 'string', 'value': '!important' }]
  },
  'p-2': {
    'padding': [{ 'unit': 'rem', 'value': 0.5 }, { 'unit': 'string', 'value': '!important' }, { 'unit': 'rem', 'value': 0.5 }, { 'unit': 'string', 'value': '!important' }]
  },
  'pt-2': {
    'paddingTop': [{ 'unit': 'rem', 'value': 0.5 }, { 'unit': 'string', 'value': '!important' }]
  },
  'pr-2': {
    'paddingRight': [{ 'unit': 'rem', 'value': 0.5 }, { 'unit': 'string', 'value': '!important' }]
  },
  'pb-2': {
    'paddingBottom': [{ 'unit': 'rem', 'value': 0.5 }, { 'unit': 'string', 'value': '!important' }]
  },
  'pl-2': {
    'paddingLeft': [{ 'unit': 'rem', 'value': 0.5 }, { 'unit': 'string', 'value': '!important' }]
  },
  'px-2': {
    'paddingRight': [{ 'unit': 'rem', 'value': 0.5 }, { 'unit': 'string', 'value': '!important' }],
    'paddingLeft': [{ 'unit': 'rem', 'value': 0.5 }, { 'unit': 'string', 'value': '!important' }]
  },
  'py-2': {
    'paddingTop': [{ 'unit': 'rem', 'value': 0.5 }, { 'unit': 'string', 'value': '!important' }],
    'paddingBottom': [{ 'unit': 'rem', 'value': 0.5 }, { 'unit': 'string', 'value': '!important' }]
  },
  'p-3': {
    'padding': [{ 'unit': 'rem', 'value': 1 }, { 'unit': 'string', 'value': '!important' }, { 'unit': 'rem', 'value': 1 }, { 'unit': 'string', 'value': '!important' }]
  },
  'pt-3': {
    'paddingTop': [{ 'unit': 'rem', 'value': 1 }, { 'unit': 'string', 'value': '!important' }]
  },
  'pr-3': {
    'paddingRight': [{ 'unit': 'rem', 'value': 1 }, { 'unit': 'string', 'value': '!important' }]
  },
  'pb-3': {
    'paddingBottom': [{ 'unit': 'rem', 'value': 1 }, { 'unit': 'string', 'value': '!important' }]
  },
  'pl-3': {
    'paddingLeft': [{ 'unit': 'rem', 'value': 1 }, { 'unit': 'string', 'value': '!important' }]
  },
  'px-3': {
    'paddingRight': [{ 'unit': 'rem', 'value': 1 }, { 'unit': 'string', 'value': '!important' }],
    'paddingLeft': [{ 'unit': 'rem', 'value': 1 }, { 'unit': 'string', 'value': '!important' }]
  },
  'py-3': {
    'paddingTop': [{ 'unit': 'rem', 'value': 1 }, { 'unit': 'string', 'value': '!important' }],
    'paddingBottom': [{ 'unit': 'rem', 'value': 1 }, { 'unit': 'string', 'value': '!important' }]
  },
  'p-4': {
    'padding': [{ 'unit': 'rem', 'value': 1.5 }, { 'unit': 'string', 'value': '!important' }, { 'unit': 'rem', 'value': 1.5 }, { 'unit': 'string', 'value': '!important' }]
  },
  'pt-4': {
    'paddingTop': [{ 'unit': 'rem', 'value': 1.5 }, { 'unit': 'string', 'value': '!important' }]
  },
  'pr-4': {
    'paddingRight': [{ 'unit': 'rem', 'value': 1.5 }, { 'unit': 'string', 'value': '!important' }]
  },
  'pb-4': {
    'paddingBottom': [{ 'unit': 'rem', 'value': 1.5 }, { 'unit': 'string', 'value': '!important' }]
  },
  'pl-4': {
    'paddingLeft': [{ 'unit': 'rem', 'value': 1.5 }, { 'unit': 'string', 'value': '!important' }]
  },
  'px-4': {
    'paddingRight': [{ 'unit': 'rem', 'value': 1.5 }, { 'unit': 'string', 'value': '!important' }],
    'paddingLeft': [{ 'unit': 'rem', 'value': 1.5 }, { 'unit': 'string', 'value': '!important' }]
  },
  'py-4': {
    'paddingTop': [{ 'unit': 'rem', 'value': 1.5 }, { 'unit': 'string', 'value': '!important' }],
    'paddingBottom': [{ 'unit': 'rem', 'value': 1.5 }, { 'unit': 'string', 'value': '!important' }]
  },
  'p-5': {
    'padding': [{ 'unit': 'rem', 'value': 3 }, { 'unit': 'string', 'value': '!important' }, { 'unit': 'rem', 'value': 3 }, { 'unit': 'string', 'value': '!important' }]
  },
  'pt-5': {
    'paddingTop': [{ 'unit': 'rem', 'value': 3 }, { 'unit': 'string', 'value': '!important' }]
  },
  'pr-5': {
    'paddingRight': [{ 'unit': 'rem', 'value': 3 }, { 'unit': 'string', 'value': '!important' }]
  },
  'pb-5': {
    'paddingBottom': [{ 'unit': 'rem', 'value': 3 }, { 'unit': 'string', 'value': '!important' }]
  },
  'pl-5': {
    'paddingLeft': [{ 'unit': 'rem', 'value': 3 }, { 'unit': 'string', 'value': '!important' }]
  },
  'px-5': {
    'paddingRight': [{ 'unit': 'rem', 'value': 3 }, { 'unit': 'string', 'value': '!important' }],
    'paddingLeft': [{ 'unit': 'rem', 'value': 3 }, { 'unit': 'string', 'value': '!important' }]
  },
  'py-5': {
    'paddingTop': [{ 'unit': 'rem', 'value': 3 }, { 'unit': 'string', 'value': '!important' }],
    'paddingBottom': [{ 'unit': 'rem', 'value': 3 }, { 'unit': 'string', 'value': '!important' }]
  },
  'm-auto': {
    'margin': [{ 'unit': 'string', 'value': 'auto' }, { 'unit': 'string', 'value': '!important' }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'string', 'value': '!important' }]
  },
  'mt-auto': {
    'marginTop': [{ 'unit': 'string', 'value': 'auto' }, { 'unit': 'string', 'value': '!important' }]
  },
  'mr-auto': {
    'marginRight': [{ 'unit': 'string', 'value': 'auto' }, { 'unit': 'string', 'value': '!important' }]
  },
  'mb-auto': {
    'marginBottom': [{ 'unit': 'string', 'value': 'auto' }, { 'unit': 'string', 'value': '!important' }]
  },
  'ml-auto': {
    'marginLeft': [{ 'unit': 'string', 'value': 'auto' }, { 'unit': 'string', 'value': '!important' }]
  },
  'mx-auto': {
    'marginRight': [{ 'unit': 'string', 'value': 'auto' }, { 'unit': 'string', 'value': '!important' }],
    'marginLeft': [{ 'unit': 'string', 'value': 'auto' }, { 'unit': 'string', 'value': '!important' }]
  },
  'my-auto': {
    'marginTop': [{ 'unit': 'string', 'value': 'auto' }, { 'unit': 'string', 'value': '!important' }],
    'marginBottom': [{ 'unit': 'string', 'value': 'auto' }, { 'unit': 'string', 'value': '!important' }]
  },
  'text-justify': {
    'textAlign': 'justify !important'
  },
  'text-nowrap': {
    'whiteSpace': 'nowrap !important'
  },
  'text-truncate': {
    'overflow': 'hidden',
    'textOverflow': 'ellipsis',
    'whiteSpace': 'nowrap'
  },
  'text-left': {
    'textAlign': 'left !important'
  },
  'text-right': {
    'textAlign': 'right !important'
  },
  'text-center': {
    'textAlign': 'center !important'
  },
  'text-lowercase': {
    'textTransform': 'lowercase !important'
  },
  'text-uppercase': {
    'textTransform': 'uppercase !important'
  },
  'text-capitalize': {
    'textTransform': 'capitalize !important'
  },
  'font-weight-normal': {
    'fontWeight': 'normal'
  },
  'font-weight-bold': {
    'fontWeight': 'bold'
  },
  'font-italic': {
    'fontStyle': 'italic'
  },
  'text-white': {
    'color': '#fff !important'
  },
  'text-muted': {
    'color': '#b0bec5 !important'
  },
  'atext-muted:focus': {
    'color': '#93a6af !important'
  },
  'atext-muted:hover': {
    'color': '#93a6af !important'
  },
  'text-primary': {
    'color': '#20a8d8 !important'
  },
  'atext-primary:focus': {
    'color': '#1985ac !important'
  },
  'atext-primary:hover': {
    'color': '#1985ac !important'
  },
  'text-success': {
    'color': '#4dbd74 !important'
  },
  'atext-success:focus': {
    'color': '#3a9d5d !important'
  },
  'atext-success:hover': {
    'color': '#3a9d5d !important'
  },
  'text-info': {
    'color': '#63c2de !important'
  },
  'atext-info:focus': {
    'color': '#39b2d5 !important'
  },
  'atext-info:hover': {
    'color': '#39b2d5 !important'
  },
  'text-warning': {
    'color': '#f8cb00 !important'
  },
  'atext-warning:focus': {
    'color': '#c5a100 !important'
  },
  'atext-warning:hover': {
    'color': '#c5a100 !important'
  },
  'text-danger': {
    'color': '#f86c6b !important'
  },
  'atext-danger:focus': {
    'color': '#f63c3a !important'
  },
  'atext-danger:hover': {
    'color': '#f63c3a !important'
  },
  'text-gray-dark': {
    'color': '#263238 !important'
  },
  'atext-gray-dark:focus': {
    'color': '#11171a !important'
  },
  'atext-gray-dark:hover': {
    'color': '#11171a !important'
  },
  'text-hide': {
    'font': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'a' }],
    'color': 'transparent',
    'textShadow': [{ 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }],
    'backgroundColor': 'transparent',
    'border': [{ 'unit': 'px', 'value': 0 }]
  },
  'visible': {
    'visibility': 'visible !important'
  },
  'invisible': {
    'visibility': 'hidden !important'
  },
  'chart-legend': {
    'listStyleType': 'none',
    'marginTop': [{ 'unit': 'px', 'value': 5 }],
    'textAlign': 'center',
    'WebkitPaddingStart': '0',
    'MozPaddingStart': '0',
    'paddingLeft': [{ 'unit': 'px', 'value': 0 }]
  },
  'bar-legend': {
    'listStyleType': 'none',
    'marginTop': [{ 'unit': 'px', 'value': 5 }],
    'textAlign': 'center',
    'WebkitPaddingStart': '0',
    'MozPaddingStart': '0',
    'paddingLeft': [{ 'unit': 'px', 'value': 0 }]
  },
  'line-legend': {
    'listStyleType': 'none',
    'marginTop': [{ 'unit': 'px', 'value': 5 }],
    'textAlign': 'center',
    'WebkitPaddingStart': '0',
    'MozPaddingStart': '0',
    'paddingLeft': [{ 'unit': 'px', 'value': 0 }]
  },
  'pie-legend': {
    'listStyleType': 'none',
    'marginTop': [{ 'unit': 'px', 'value': 5 }],
    'textAlign': 'center',
    'WebkitPaddingStart': '0',
    'MozPaddingStart': '0',
    'paddingLeft': [{ 'unit': 'px', 'value': 0 }]
  },
  'radar-legend': {
    'listStyleType': 'none',
    'marginTop': [{ 'unit': 'px', 'value': 5 }],
    'textAlign': 'center',
    'WebkitPaddingStart': '0',
    'MozPaddingStart': '0',
    'paddingLeft': [{ 'unit': 'px', 'value': 0 }]
  },
  'polararea-legend': {
    'listStyleType': 'none',
    'marginTop': [{ 'unit': 'px', 'value': 5 }],
    'textAlign': 'center',
    'WebkitPaddingStart': '0',
    'MozPaddingStart': '0',
    'paddingLeft': [{ 'unit': 'px', 'value': 0 }]
  },
  'doughnut-legend': {
    'listStyleType': 'none',
    'marginTop': [{ 'unit': 'px', 'value': 5 }],
    'textAlign': 'center',
    'WebkitPaddingStart': '0',
    'MozPaddingStart': '0',
    'paddingLeft': [{ 'unit': 'px', 'value': 0 }]
  },
  'chart-legend li': {
    'display': 'inline-block',
    'whiteSpace': 'nowrap',
    'position': 'relative',
    'marginBottom': [{ 'unit': 'px', 'value': 4 }],
    'padding': [{ 'unit': 'px', 'value': 2 }, { 'unit': 'px', 'value': 8 }, { 'unit': 'px', 'value': 2 }, { 'unit': 'px', 'value': 28 }],
    'fontSize': [{ 'unit': 'string', 'value': 'smaller' }],
    'cursor': 'default'
  },
  'bar-legend li': {
    'display': 'inline-block',
    'whiteSpace': 'nowrap',
    'position': 'relative',
    'marginBottom': [{ 'unit': 'px', 'value': 4 }],
    'padding': [{ 'unit': 'px', 'value': 2 }, { 'unit': 'px', 'value': 8 }, { 'unit': 'px', 'value': 2 }, { 'unit': 'px', 'value': 28 }],
    'fontSize': [{ 'unit': 'string', 'value': 'smaller' }],
    'cursor': 'default'
  },
  'line-legend li': {
    'display': 'inline-block',
    'whiteSpace': 'nowrap',
    'position': 'relative',
    'marginBottom': [{ 'unit': 'px', 'value': 4 }],
    'padding': [{ 'unit': 'px', 'value': 2 }, { 'unit': 'px', 'value': 8 }, { 'unit': 'px', 'value': 2 }, { 'unit': 'px', 'value': 28 }],
    'fontSize': [{ 'unit': 'string', 'value': 'smaller' }],
    'cursor': 'default'
  },
  'pie-legend li': {
    'display': 'inline-block',
    'whiteSpace': 'nowrap',
    'position': 'relative',
    'marginBottom': [{ 'unit': 'px', 'value': 4 }],
    'padding': [{ 'unit': 'px', 'value': 2 }, { 'unit': 'px', 'value': 8 }, { 'unit': 'px', 'value': 2 }, { 'unit': 'px', 'value': 28 }],
    'fontSize': [{ 'unit': 'string', 'value': 'smaller' }],
    'cursor': 'default'
  },
  'radar-legend li': {
    'display': 'inline-block',
    'whiteSpace': 'nowrap',
    'position': 'relative',
    'marginBottom': [{ 'unit': 'px', 'value': 4 }],
    'padding': [{ 'unit': 'px', 'value': 2 }, { 'unit': 'px', 'value': 8 }, { 'unit': 'px', 'value': 2 }, { 'unit': 'px', 'value': 28 }],
    'fontSize': [{ 'unit': 'string', 'value': 'smaller' }],
    'cursor': 'default'
  },
  'polararea-legend li': {
    'display': 'inline-block',
    'whiteSpace': 'nowrap',
    'position': 'relative',
    'marginBottom': [{ 'unit': 'px', 'value': 4 }],
    'padding': [{ 'unit': 'px', 'value': 2 }, { 'unit': 'px', 'value': 8 }, { 'unit': 'px', 'value': 2 }, { 'unit': 'px', 'value': 28 }],
    'fontSize': [{ 'unit': 'string', 'value': 'smaller' }],
    'cursor': 'default'
  },
  'doughnut-legend li': {
    'display': 'inline-block',
    'whiteSpace': 'nowrap',
    'position': 'relative',
    'marginBottom': [{ 'unit': 'px', 'value': 4 }],
    'padding': [{ 'unit': 'px', 'value': 2 }, { 'unit': 'px', 'value': 8 }, { 'unit': 'px', 'value': 2 }, { 'unit': 'px', 'value': 28 }],
    'fontSize': [{ 'unit': 'string', 'value': 'smaller' }],
    'cursor': 'default'
  },
  'chart-legend li span': {
    'display': 'block',
    'position': 'absolute',
    'left': [{ 'unit': 'px', 'value': 0 }],
    'top': [{ 'unit': 'px', 'value': 0 }],
    'width': [{ 'unit': 'px', 'value': 20 }],
    'height': [{ 'unit': 'px', 'value': 20 }]
  },
  'bar-legend li span': {
    'display': 'block',
    'position': 'absolute',
    'left': [{ 'unit': 'px', 'value': 0 }],
    'top': [{ 'unit': 'px', 'value': 0 }],
    'width': [{ 'unit': 'px', 'value': 20 }],
    'height': [{ 'unit': 'px', 'value': 20 }]
  },
  'line-legend li span': {
    'display': 'block',
    'position': 'absolute',
    'left': [{ 'unit': 'px', 'value': 0 }],
    'top': [{ 'unit': 'px', 'value': 0 }],
    'width': [{ 'unit': 'px', 'value': 20 }],
    'height': [{ 'unit': 'px', 'value': 20 }]
  },
  'pie-legend li span': {
    'display': 'block',
    'position': 'absolute',
    'left': [{ 'unit': 'px', 'value': 0 }],
    'top': [{ 'unit': 'px', 'value': 0 }],
    'width': [{ 'unit': 'px', 'value': 20 }],
    'height': [{ 'unit': 'px', 'value': 20 }]
  },
  'radar-legend li span': {
    'display': 'block',
    'position': 'absolute',
    'left': [{ 'unit': 'px', 'value': 0 }],
    'top': [{ 'unit': 'px', 'value': 0 }],
    'width': [{ 'unit': 'px', 'value': 20 }],
    'height': [{ 'unit': 'px', 'value': 20 }]
  },
  'polararea-legend li span': {
    'display': 'block',
    'position': 'absolute',
    'left': [{ 'unit': 'px', 'value': 0 }],
    'top': [{ 'unit': 'px', 'value': 0 }],
    'width': [{ 'unit': 'px', 'value': 20 }],
    'height': [{ 'unit': 'px', 'value': 20 }]
  },
  'doughnut-legend li span': {
    'display': 'block',
    'position': 'absolute',
    'left': [{ 'unit': 'px', 'value': 0 }],
    'top': [{ 'unit': 'px', 'value': 0 }],
    'width': [{ 'unit': 'px', 'value': 20 }],
    'height': [{ 'unit': 'px', 'value': 20 }]
  },
  'body': {
    'MozOsxFontSmoothing': 'grayscale',
    'WebkitFontSmoothing': 'antialiased'
  },
  'font-xs': {
    'fontSize': [{ 'unit': 'rem', 'value': 0.75 }, { 'unit': 'string', 'value': '!important' }]
  },
  'font-sm': {
    'fontSize': [{ 'unit': 'rem', 'value': 0.85 }, { 'unit': 'string', 'value': '!important' }]
  },
  'font-lg': {
    'fontSize': [{ 'unit': 'rem', 'value': 1 }, { 'unit': 'string', 'value': '!important' }]
  },
  'font-xl': {
    'fontSize': [{ 'unit': 'rem', 'value': 1.25 }, { 'unit': 'string', 'value': '!important' }]
  },
  'font-2xl': {
    'fontSize': [{ 'unit': 'rem', 'value': 1.5 }, { 'unit': 'string', 'value': '!important' }]
  },
  'font-3xl': {
    'fontSize': [{ 'unit': 'rem', 'value': 1.75 }, { 'unit': 'string', 'value': '!important' }]
  },
  'font-4xl': {
    'fontSize': [{ 'unit': 'rem', 'value': 2 }, { 'unit': 'string', 'value': '!important' }]
  },
  'font-5xl': {
    'fontSize': [{ 'unit': 'rem', 'value': 2.5 }, { 'unit': 'string', 'value': '!important' }]
  },
  'animated': {
    'WebkitAnimationDuration': '1s',
    'animationDuration': '1s',
    'WebkitAnimationFillMode': 'both',
    'animationFillMode': 'both'
  },
  'animatedinfinite': {
    'WebkitAnimationIterationCount': 'infinite',
    'animationIterationCount': 'infinite'
  },
  'animatedhinge': {
    'WebkitAnimationDuration': '2s',
    'animationDuration': '2s'
  },
  'fadeIn': {
    'WebkitAnimationName': 'fadeIn',
    'animationName': 'fadeIn'
  },
  'aside-menu': {
    'zIndex': '1019',
    'width': [{ 'unit': 'px', 'value': 250 }],
    'color': '#263238',
    'background': '#fff',
    'borderLeft': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#cfd8dc' }]
  },
  'aside-menu nav-tabs': {
    'borderColor': '#cfd8dc'
  },
  'aside-menu nav-tabs nav-link': {
    'padding': [{ 'unit': 'rem', 'value': 0.75 }, { 'unit': 'rem', 'value': 1 }, { 'unit': 'rem', 'value': 0.75 }, { 'unit': 'rem', 'value': 1 }],
    'color': '#263238',
    'borderTop': [{ 'unit': 'px', 'value': 0 }]
  },
  'aside-menu nav-tabs navbar dropdown-toggle': {
    'padding': [{ 'unit': 'rem', 'value': 0.75 }, { 'unit': 'rem', 'value': 1 }, { 'unit': 'rem', 'value': 0.75 }, { 'unit': 'rem', 'value': 1 }],
    'color': '#263238',
    'borderTop': [{ 'unit': 'px', 'value': 0 }]
  },
  'navbar aside-menu nav-tabs dropdown-toggle': {
    'padding': [{ 'unit': 'rem', 'value': 0.75 }, { 'unit': 'rem', 'value': 1 }, { 'unit': 'rem', 'value': 0.75 }, { 'unit': 'rem', 'value': 1 }],
    'color': '#263238',
    'borderTop': [{ 'unit': 'px', 'value': 0 }]
  },
  'aside-menu nav-tabs nav-linkactive': {
    'color': '#20a8d8',
    'borderRightColor': '#cfd8dc',
    'borderLeftColor': '#cfd8dc'
  },
  'aside-menu nav-tabs navbar activedropdown-toggle': {
    'color': '#20a8d8',
    'borderRightColor': '#cfd8dc',
    'borderLeftColor': '#cfd8dc'
  },
  'navbar aside-menu nav-tabs activedropdown-toggle': {
    'color': '#20a8d8',
    'borderRightColor': '#cfd8dc',
    'borderLeftColor': '#cfd8dc'
  },
  'aside-menu nav-tabs nav-item:first-child nav-link': {
    'borderLeft': [{ 'unit': 'px', 'value': 0 }]
  },
  'aside-menu nav-tabs nav-item:first-child navbar dropdown-toggle': {
    'borderLeft': [{ 'unit': 'px', 'value': 0 }]
  },
  'navbar aside-menu nav-tabs nav-item:first-child dropdown-toggle': {
    'borderLeft': [{ 'unit': 'px', 'value': 0 }]
  },
  'aside-menu tab-content': {
    'position': 'relative',
    'overflowX': 'hidden',
    'overflowY': 'auto',
    'border': [{ 'unit': 'px', 'value': 0 }],
    'borderTop': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#cfd8dc' }],
    'MsOverflowStyle': '-ms-autohiding-scrollbar'
  },
  'aside-menu tab-content::-webkit-scrollbar': {
    'width': [{ 'unit': 'px', 'value': 10 }],
    'marginLeft': [{ 'unit': 'px', 'value': -10 }],
    'WebkitAppearance': 'none'
  },
  'aside-menu tab-content::-webkit-scrollbar-track': {
    'backgroundColor': 'white',
    'borderRight': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#f2f2f2' }],
    'borderLeft': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#f2f2f2' }]
  },
  'aside-menu tab-content::-webkit-scrollbar-thumb': {
    'height': [{ 'unit': 'px', 'value': 50 }],
    'backgroundColor': '#e6e6e6',
    'backgroundClip': 'content-box',
    'borderColor': 'transparent',
    'borderStyle': 'solid',
    'borderWidth': '1px 2px'
  },
  'aside-menu tab-content tab-pane': {
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'img-avatar': {
    'borderRadius': '50em'
  },
  'avatar': {
    'position': 'relative',
    'display': 'inline-block',
    'width': [{ 'unit': 'px', 'value': 36 }]
  },
  'avatar img-avatar': {
    'width': [{ 'unit': 'px', 'value': 36 }],
    'height': [{ 'unit': 'px', 'value': 36 }]
  },
  'avatar avatar-status': {
    'position': 'absolute',
    'right': [{ 'unit': 'px', 'value': 0 }],
    'bottom': [{ 'unit': 'px', 'value': 0 }],
    'display': 'block',
    'width': [{ 'unit': 'px', 'value': 10 }],
    'height': [{ 'unit': 'px', 'value': 10 }],
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#fff' }],
    'borderRadius': '50em'
  },
  'avataravatar-xs': {
    'position': 'relative',
    'display': 'inline-block',
    'width': [{ 'unit': 'px', 'value': 20 }]
  },
  'avataravatar-xs img-avatar': {
    'width': [{ 'unit': 'px', 'value': 20 }],
    'height': [{ 'unit': 'px', 'value': 20 }]
  },
  'avataravatar-xs avatar-status': {
    'position': 'absolute',
    'right': [{ 'unit': 'px', 'value': 0 }],
    'bottom': [{ 'unit': 'px', 'value': 0 }],
    'display': 'block',
    'width': [{ 'unit': 'px', 'value': 8 }],
    'height': [{ 'unit': 'px', 'value': 8 }],
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#fff' }],
    'borderRadius': '50em'
  },
  'avataravatar-sm': {
    'position': 'relative',
    'display': 'inline-block',
    'width': [{ 'unit': 'px', 'value': 24 }]
  },
  'avataravatar-sm img-avatar': {
    'width': [{ 'unit': 'px', 'value': 24 }],
    'height': [{ 'unit': 'px', 'value': 24 }]
  },
  'avataravatar-sm avatar-status': {
    'position': 'absolute',
    'right': [{ 'unit': 'px', 'value': 0 }],
    'bottom': [{ 'unit': 'px', 'value': 0 }],
    'display': 'block',
    'width': [{ 'unit': 'px', 'value': 8 }],
    'height': [{ 'unit': 'px', 'value': 8 }],
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#fff' }],
    'borderRadius': '50em'
  },
  'avataravatar-lg': {
    'position': 'relative',
    'display': 'inline-block',
    'width': [{ 'unit': 'px', 'value': 72 }]
  },
  'avataravatar-lg img-avatar': {
    'width': [{ 'unit': 'px', 'value': 72 }],
    'height': [{ 'unit': 'px', 'value': 72 }]
  },
  'avataravatar-lg avatar-status': {
    'position': 'absolute',
    'right': [{ 'unit': 'px', 'value': 0 }],
    'bottom': [{ 'unit': 'px', 'value': 0 }],
    'display': 'block',
    'width': [{ 'unit': 'px', 'value': 12 }],
    'height': [{ 'unit': 'px', 'value': 12 }],
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#fff' }],
    'borderRadius': '50em'
  },
  'avatars-stack avataravatar-xs': {
    'marginRight': [{ 'unit': 'px', 'value': -10 }]
  },
  'avatars-stack avatar': {
    'marginRight': [{ 'unit': 'px', 'value': -15 }],
    'transition': 'margin-left 0.25s, margin-right 0.25s'
  },
  'avatars-stack avatar:hover': {
    'marginRight': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': '!important' }]
  },
  'badge-pill': {
    'borderRadius': '10rem'
  },
  'breadcrumb-menu': {
    'position': 'absolute',
    'top': [{ 'unit': 'px', 'value': 0 }],
    'right': [{ 'unit': 'rem', 'value': 1 }]
  },
  'breadcrumb-menu::before': {
    'display': 'none'
  },
  'breadcrumb-menu btn': {
    'paddingTop': [{ 'unit': 'rem', 'value': 0.75 }],
    'paddingBottom': [{ 'unit': 'rem', 'value': 0.75 }]
  },
  'breadcrumb-menu btnbtn-secondary': {
    'color': '#b0bec5',
    'border': [{ 'unit': 'px', 'value': 0 }]
  },
  'breadcrumb-menu btnbtn-secondary:hover': {
    'color': '#263238',
    'background': 'transparent'
  },
  'breadcrumb-menu btnbtn-secondaryactive': {
    'color': '#263238',
    'background': 'transparent'
  },
  'breadcrumb-menu open btnbtn-secondary': {
    'color': '#263238',
    'background': 'transparent'
  },
  'breadcrumb-menu dropdown-menu': {
    'minWidth': [{ 'unit': 'px', 'value': 180 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }]
  },
  'breadcrumb': {
    'position': 'relative',
    'marginBottom': [{ 'unit': 'rem', 'value': 1.5 }],
    'borderBottom': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#cfd8dc' }]
  },
  'button': {
    'cursor': 'pointer'
  },
  'btn badge': {
    'position': 'absolute',
    'top': [{ 'unit': 'px', 'value': 2 }],
    'right': [{ 'unit': 'px', 'value': 6 }],
    'fontSize': [{ 'unit': 'px', 'value': 9 }]
  },
  'btn-transparent': {
    'color': '#fff',
    'backgroundColor': 'transparent',
    'borderColor': 'transparent'
  },
  'btn-transparent:hover': {
    'color': '#fff',
    'backgroundColor': 'transparent',
    'borderColor': 'transparent'
  },
  'btn-transparent:focus': {
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 2 }, { 'unit': 'string', 'value': 'rgba(0, 0, 0, 0.5)' }]
  },
  'btn-transparentfocus': {
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 2 }, { 'unit': 'string', 'value': 'rgba(0, 0, 0, 0.5)' }]
  },
  'btn-transparentdisabled': {
    'backgroundColor': 'transparent',
    'borderColor': 'transparent'
  },
  'btn-transparent:disabled': {
    'backgroundColor': 'transparent',
    'borderColor': 'transparent'
  },
  'btn-transparent:active': {
    'color': '#fff',
    'backgroundColor': 'transparent',
    'backgroundImage': 'none',
    'borderColor': 'transparent'
  },
  'btn-transparentactive': {
    'color': '#fff',
    'backgroundColor': 'transparent',
    'backgroundImage': 'none',
    'borderColor': 'transparent'
  },
  'show > btn-transparentdropdown-toggle': {
    'color': '#fff',
    'backgroundColor': 'transparent',
    'backgroundImage': 'none',
    'borderColor': 'transparent'
  },
  'btn [class^="icon-"]': {
    'display': 'inline-block',
    'marginTop': [{ 'unit': 'px', 'value': -2 }],
    'verticalAlign': 'middle'
  },
  'btn [class*=" icon-"]': {
    'display': 'inline-block',
    'marginTop': [{ 'unit': 'px', 'value': -2 }],
    'verticalAlign': 'middle'
  },
  'btn-facebook': {
    'position': 'relative',
    'overflow': 'hidden',
    'color': '#fff !important',
    'textAlign': 'center',
    'padding': [{ 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 1 }, { 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 1 }],
    'fontSize': [{ 'unit': 'rem', 'value': 0.875 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }],
    'border': [{ 'unit': 'px', 'value': 0 }]
  },
  'btn-twitter': {
    'position': 'relative',
    'overflow': 'hidden',
    'color': '#fff !important',
    'textAlign': 'center',
    'padding': [{ 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 1 }, { 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 1 }],
    'fontSize': [{ 'unit': 'rem', 'value': 0.875 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }],
    'border': [{ 'unit': 'px', 'value': 0 }]
  },
  'btn-linkedin': {
    'position': 'relative',
    'overflow': 'hidden',
    'color': '#fff !important',
    'textAlign': 'center',
    'padding': [{ 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 1 }, { 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 1 }],
    'fontSize': [{ 'unit': 'rem', 'value': 0.875 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }],
    'border': [{ 'unit': 'px', 'value': 0 }]
  },
  'btn-flickr': {
    'position': 'relative',
    'overflow': 'hidden',
    'color': '#fff !important',
    'textAlign': 'center',
    'padding': [{ 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 1 }, { 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 1 }],
    'fontSize': [{ 'unit': 'rem', 'value': 0.875 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }],
    'border': [{ 'unit': 'px', 'value': 0 }]
  },
  'btn-tumblr': {
    'position': 'relative',
    'overflow': 'hidden',
    'color': '#fff !important',
    'textAlign': 'center',
    'padding': [{ 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 1 }, { 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 1 }],
    'fontSize': [{ 'unit': 'rem', 'value': 0.875 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }],
    'border': [{ 'unit': 'px', 'value': 0 }]
  },
  'btn-xing': {
    'position': 'relative',
    'overflow': 'hidden',
    'color': '#fff !important',
    'textAlign': 'center',
    'padding': [{ 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 1 }, { 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 1 }],
    'fontSize': [{ 'unit': 'rem', 'value': 0.875 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }],
    'border': [{ 'unit': 'px', 'value': 0 }]
  },
  'btn-github': {
    'position': 'relative',
    'overflow': 'hidden',
    'color': '#fff !important',
    'textAlign': 'center',
    'padding': [{ 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 1 }, { 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 1 }],
    'fontSize': [{ 'unit': 'rem', 'value': 0.875 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }],
    'border': [{ 'unit': 'px', 'value': 0 }]
  },
  'btn-html5': {
    'position': 'relative',
    'overflow': 'hidden',
    'color': '#fff !important',
    'textAlign': 'center',
    'padding': [{ 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 1 }, { 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 1 }],
    'fontSize': [{ 'unit': 'rem', 'value': 0.875 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }],
    'border': [{ 'unit': 'px', 'value': 0 }]
  },
  'btn-openid': {
    'position': 'relative',
    'overflow': 'hidden',
    'color': '#fff !important',
    'textAlign': 'center',
    'padding': [{ 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 1 }, { 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 1 }],
    'fontSize': [{ 'unit': 'rem', 'value': 0.875 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }],
    'border': [{ 'unit': 'px', 'value': 0 }]
  },
  'btn-stack-overflow': {
    'position': 'relative',
    'overflow': 'hidden',
    'color': '#fff !important',
    'textAlign': 'center',
    'padding': [{ 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 1 }, { 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 1 }],
    'fontSize': [{ 'unit': 'rem', 'value': 0.875 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }],
    'border': [{ 'unit': 'px', 'value': 0 }]
  },
  'btn-youtube': {
    'position': 'relative',
    'overflow': 'hidden',
    'color': '#fff !important',
    'textAlign': 'center',
    'padding': [{ 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 1 }, { 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 1 }],
    'fontSize': [{ 'unit': 'rem', 'value': 0.875 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }],
    'border': [{ 'unit': 'px', 'value': 0 }]
  },
  'btn-css3': {
    'position': 'relative',
    'overflow': 'hidden',
    'color': '#fff !important',
    'textAlign': 'center',
    'padding': [{ 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 1 }, { 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 1 }],
    'fontSize': [{ 'unit': 'rem', 'value': 0.875 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }],
    'border': [{ 'unit': 'px', 'value': 0 }]
  },
  'btn-dribbble': {
    'position': 'relative',
    'overflow': 'hidden',
    'color': '#fff !important',
    'textAlign': 'center',
    'padding': [{ 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 1 }, { 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 1 }],
    'fontSize': [{ 'unit': 'rem', 'value': 0.875 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }],
    'border': [{ 'unit': 'px', 'value': 0 }]
  },
  'btn-google-plus': {
    'position': 'relative',
    'overflow': 'hidden',
    'color': '#fff !important',
    'textAlign': 'center',
    'padding': [{ 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 1 }, { 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 1 }],
    'fontSize': [{ 'unit': 'rem', 'value': 0.875 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }],
    'border': [{ 'unit': 'px', 'value': 0 }]
  },
  'btn-instagram': {
    'position': 'relative',
    'overflow': 'hidden',
    'color': '#fff !important',
    'textAlign': 'center',
    'padding': [{ 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 1 }, { 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 1 }],
    'fontSize': [{ 'unit': 'rem', 'value': 0.875 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }],
    'border': [{ 'unit': 'px', 'value': 0 }]
  },
  'btn-pinterest': {
    'position': 'relative',
    'overflow': 'hidden',
    'color': '#fff !important',
    'textAlign': 'center',
    'padding': [{ 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 1 }, { 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 1 }],
    'fontSize': [{ 'unit': 'rem', 'value': 0.875 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }],
    'border': [{ 'unit': 'px', 'value': 0 }]
  },
  'btn-vk': {
    'position': 'relative',
    'overflow': 'hidden',
    'color': '#fff !important',
    'textAlign': 'center',
    'padding': [{ 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 1 }, { 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 1 }],
    'fontSize': [{ 'unit': 'rem', 'value': 0.875 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }],
    'border': [{ 'unit': 'px', 'value': 0 }]
  },
  'btn-yahoo': {
    'position': 'relative',
    'overflow': 'hidden',
    'color': '#fff !important',
    'textAlign': 'center',
    'padding': [{ 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 1 }, { 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 1 }],
    'fontSize': [{ 'unit': 'rem', 'value': 0.875 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }],
    'border': [{ 'unit': 'px', 'value': 0 }]
  },
  'btn-behance': {
    'position': 'relative',
    'overflow': 'hidden',
    'color': '#fff !important',
    'textAlign': 'center',
    'padding': [{ 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 1 }, { 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 1 }],
    'fontSize': [{ 'unit': 'rem', 'value': 0.875 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }],
    'border': [{ 'unit': 'px', 'value': 0 }]
  },
  'btn-dropbox': {
    'position': 'relative',
    'overflow': 'hidden',
    'color': '#fff !important',
    'textAlign': 'center',
    'padding': [{ 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 1 }, { 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 1 }],
    'fontSize': [{ 'unit': 'rem', 'value': 0.875 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }],
    'border': [{ 'unit': 'px', 'value': 0 }]
  },
  'btn-reddit': {
    'position': 'relative',
    'overflow': 'hidden',
    'color': '#fff !important',
    'textAlign': 'center',
    'padding': [{ 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 1 }, { 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 1 }],
    'fontSize': [{ 'unit': 'rem', 'value': 0.875 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }],
    'border': [{ 'unit': 'px', 'value': 0 }]
  },
  'btn-spotify': {
    'position': 'relative',
    'overflow': 'hidden',
    'color': '#fff !important',
    'textAlign': 'center',
    'padding': [{ 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 1 }, { 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 1 }],
    'fontSize': [{ 'unit': 'rem', 'value': 0.875 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }],
    'border': [{ 'unit': 'px', 'value': 0 }]
  },
  'btn-vine': {
    'position': 'relative',
    'overflow': 'hidden',
    'color': '#fff !important',
    'textAlign': 'center',
    'padding': [{ 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 1 }, { 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 1 }],
    'fontSize': [{ 'unit': 'rem', 'value': 0.875 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }],
    'border': [{ 'unit': 'px', 'value': 0 }]
  },
  'btn-foursquare': {
    'position': 'relative',
    'overflow': 'hidden',
    'color': '#fff !important',
    'textAlign': 'center',
    'padding': [{ 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 1 }, { 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 1 }],
    'fontSize': [{ 'unit': 'rem', 'value': 0.875 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }],
    'border': [{ 'unit': 'px', 'value': 0 }]
  },
  'btn-vimeo': {
    'position': 'relative',
    'overflow': 'hidden',
    'color': '#fff !important',
    'textAlign': 'center',
    'padding': [{ 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 1 }, { 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 1 }],
    'fontSize': [{ 'unit': 'rem', 'value': 0.875 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }],
    'border': [{ 'unit': 'px', 'value': 0 }]
  },
  'btn-facebook::before': {
    'position': 'absolute',
    'top': [{ 'unit': 'px', 'value': 0 }],
    'left': [{ 'unit': 'px', 'value': 0 }],
    'display': 'block',
    'fontFamily': '"FontAwesome"',
    'fontStyle': 'normal',
    'fontWeight': 'normal',
    'MozOsxFontSmoothing': 'grayscale',
    'WebkitFontSmoothing': 'antialiased'
  },
  'btn-twitter::before': {
    'position': 'absolute',
    'top': [{ 'unit': 'px', 'value': 0 }],
    'left': [{ 'unit': 'px', 'value': 0 }],
    'display': 'block',
    'fontFamily': '"FontAwesome"',
    'fontStyle': 'normal',
    'fontWeight': 'normal',
    'MozOsxFontSmoothing': 'grayscale',
    'WebkitFontSmoothing': 'antialiased'
  },
  'btn-linkedin::before': {
    'position': 'absolute',
    'top': [{ 'unit': 'px', 'value': 0 }],
    'left': [{ 'unit': 'px', 'value': 0 }],
    'display': 'block',
    'fontFamily': '"FontAwesome"',
    'fontStyle': 'normal',
    'fontWeight': 'normal',
    'MozOsxFontSmoothing': 'grayscale',
    'WebkitFontSmoothing': 'antialiased'
  },
  'btn-flickr::before': {
    'position': 'absolute',
    'top': [{ 'unit': 'px', 'value': 0 }],
    'left': [{ 'unit': 'px', 'value': 0 }],
    'display': 'block',
    'fontFamily': '"FontAwesome"',
    'fontStyle': 'normal',
    'fontWeight': 'normal',
    'MozOsxFontSmoothing': 'grayscale',
    'WebkitFontSmoothing': 'antialiased'
  },
  'btn-tumblr::before': {
    'position': 'absolute',
    'top': [{ 'unit': 'px', 'value': 0 }],
    'left': [{ 'unit': 'px', 'value': 0 }],
    'display': 'block',
    'fontFamily': '"FontAwesome"',
    'fontStyle': 'normal',
    'fontWeight': 'normal',
    'MozOsxFontSmoothing': 'grayscale',
    'WebkitFontSmoothing': 'antialiased'
  },
  'btn-xing::before': {
    'position': 'absolute',
    'top': [{ 'unit': 'px', 'value': 0 }],
    'left': [{ 'unit': 'px', 'value': 0 }],
    'display': 'block',
    'fontFamily': '"FontAwesome"',
    'fontStyle': 'normal',
    'fontWeight': 'normal',
    'MozOsxFontSmoothing': 'grayscale',
    'WebkitFontSmoothing': 'antialiased'
  },
  'btn-github::before': {
    'position': 'absolute',
    'top': [{ 'unit': 'px', 'value': 0 }],
    'left': [{ 'unit': 'px', 'value': 0 }],
    'display': 'block',
    'fontFamily': '"FontAwesome"',
    'fontStyle': 'normal',
    'fontWeight': 'normal',
    'MozOsxFontSmoothing': 'grayscale',
    'WebkitFontSmoothing': 'antialiased'
  },
  'btn-html5::before': {
    'position': 'absolute',
    'top': [{ 'unit': 'px', 'value': 0 }],
    'left': [{ 'unit': 'px', 'value': 0 }],
    'display': 'block',
    'fontFamily': '"FontAwesome"',
    'fontStyle': 'normal',
    'fontWeight': 'normal',
    'MozOsxFontSmoothing': 'grayscale',
    'WebkitFontSmoothing': 'antialiased'
  },
  'btn-openid::before': {
    'position': 'absolute',
    'top': [{ 'unit': 'px', 'value': 0 }],
    'left': [{ 'unit': 'px', 'value': 0 }],
    'display': 'block',
    'fontFamily': '"FontAwesome"',
    'fontStyle': 'normal',
    'fontWeight': 'normal',
    'MozOsxFontSmoothing': 'grayscale',
    'WebkitFontSmoothing': 'antialiased'
  },
  'btn-stack-overflow::before': {
    'position': 'absolute',
    'top': [{ 'unit': 'px', 'value': 0 }],
    'left': [{ 'unit': 'px', 'value': 0 }],
    'display': 'block',
    'fontFamily': '"FontAwesome"',
    'fontStyle': 'normal',
    'fontWeight': 'normal',
    'MozOsxFontSmoothing': 'grayscale',
    'WebkitFontSmoothing': 'antialiased'
  },
  'btn-youtube::before': {
    'position': 'absolute',
    'top': [{ 'unit': 'px', 'value': 0 }],
    'left': [{ 'unit': 'px', 'value': 0 }],
    'display': 'block',
    'fontFamily': '"FontAwesome"',
    'fontStyle': 'normal',
    'fontWeight': 'normal',
    'MozOsxFontSmoothing': 'grayscale',
    'WebkitFontSmoothing': 'antialiased'
  },
  'btn-css3::before': {
    'position': 'absolute',
    'top': [{ 'unit': 'px', 'value': 0 }],
    'left': [{ 'unit': 'px', 'value': 0 }],
    'display': 'block',
    'fontFamily': '"FontAwesome"',
    'fontStyle': 'normal',
    'fontWeight': 'normal',
    'MozOsxFontSmoothing': 'grayscale',
    'WebkitFontSmoothing': 'antialiased'
  },
  'btn-dribbble::before': {
    'position': 'absolute',
    'top': [{ 'unit': 'px', 'value': 0 }],
    'left': [{ 'unit': 'px', 'value': 0 }],
    'display': 'block',
    'fontFamily': '"FontAwesome"',
    'fontStyle': 'normal',
    'fontWeight': 'normal',
    'MozOsxFontSmoothing': 'grayscale',
    'WebkitFontSmoothing': 'antialiased'
  },
  'btn-google-plus::before': {
    'position': 'absolute',
    'top': [{ 'unit': 'px', 'value': 0 }],
    'left': [{ 'unit': 'px', 'value': 0 }],
    'display': 'block',
    'fontFamily': '"FontAwesome"',
    'fontStyle': 'normal',
    'fontWeight': 'normal',
    'MozOsxFontSmoothing': 'grayscale',
    'WebkitFontSmoothing': 'antialiased'
  },
  'btn-instagram::before': {
    'position': 'absolute',
    'top': [{ 'unit': 'px', 'value': 0 }],
    'left': [{ 'unit': 'px', 'value': 0 }],
    'display': 'block',
    'fontFamily': '"FontAwesome"',
    'fontStyle': 'normal',
    'fontWeight': 'normal',
    'MozOsxFontSmoothing': 'grayscale',
    'WebkitFontSmoothing': 'antialiased'
  },
  'btn-pinterest::before': {
    'position': 'absolute',
    'top': [{ 'unit': 'px', 'value': 0 }],
    'left': [{ 'unit': 'px', 'value': 0 }],
    'display': 'block',
    'fontFamily': '"FontAwesome"',
    'fontStyle': 'normal',
    'fontWeight': 'normal',
    'MozOsxFontSmoothing': 'grayscale',
    'WebkitFontSmoothing': 'antialiased'
  },
  'btn-vk::before': {
    'position': 'absolute',
    'top': [{ 'unit': 'px', 'value': 0 }],
    'left': [{ 'unit': 'px', 'value': 0 }],
    'display': 'block',
    'fontFamily': '"FontAwesome"',
    'fontStyle': 'normal',
    'fontWeight': 'normal',
    'MozOsxFontSmoothing': 'grayscale',
    'WebkitFontSmoothing': 'antialiased'
  },
  'btn-yahoo::before': {
    'position': 'absolute',
    'top': [{ 'unit': 'px', 'value': 0 }],
    'left': [{ 'unit': 'px', 'value': 0 }],
    'display': 'block',
    'fontFamily': '"FontAwesome"',
    'fontStyle': 'normal',
    'fontWeight': 'normal',
    'MozOsxFontSmoothing': 'grayscale',
    'WebkitFontSmoothing': 'antialiased'
  },
  'btn-behance::before': {
    'position': 'absolute',
    'top': [{ 'unit': 'px', 'value': 0 }],
    'left': [{ 'unit': 'px', 'value': 0 }],
    'display': 'block',
    'fontFamily': '"FontAwesome"',
    'fontStyle': 'normal',
    'fontWeight': 'normal',
    'MozOsxFontSmoothing': 'grayscale',
    'WebkitFontSmoothing': 'antialiased'
  },
  'btn-dropbox::before': {
    'position': 'absolute',
    'top': [{ 'unit': 'px', 'value': 0 }],
    'left': [{ 'unit': 'px', 'value': 0 }],
    'display': 'block',
    'fontFamily': '"FontAwesome"',
    'fontStyle': 'normal',
    'fontWeight': 'normal',
    'MozOsxFontSmoothing': 'grayscale',
    'WebkitFontSmoothing': 'antialiased'
  },
  'btn-reddit::before': {
    'position': 'absolute',
    'top': [{ 'unit': 'px', 'value': 0 }],
    'left': [{ 'unit': 'px', 'value': 0 }],
    'display': 'block',
    'fontFamily': '"FontAwesome"',
    'fontStyle': 'normal',
    'fontWeight': 'normal',
    'MozOsxFontSmoothing': 'grayscale',
    'WebkitFontSmoothing': 'antialiased'
  },
  'btn-spotify::before': {
    'position': 'absolute',
    'top': [{ 'unit': 'px', 'value': 0 }],
    'left': [{ 'unit': 'px', 'value': 0 }],
    'display': 'block',
    'fontFamily': '"FontAwesome"',
    'fontStyle': 'normal',
    'fontWeight': 'normal',
    'MozOsxFontSmoothing': 'grayscale',
    'WebkitFontSmoothing': 'antialiased'
  },
  'btn-vine::before': {
    'position': 'absolute',
    'top': [{ 'unit': 'px', 'value': 0 }],
    'left': [{ 'unit': 'px', 'value': 0 }],
    'display': 'block',
    'fontFamily': '"FontAwesome"',
    'fontStyle': 'normal',
    'fontWeight': 'normal',
    'MozOsxFontSmoothing': 'grayscale',
    'WebkitFontSmoothing': 'antialiased'
  },
  'btn-foursquare::before': {
    'position': 'absolute',
    'top': [{ 'unit': 'px', 'value': 0 }],
    'left': [{ 'unit': 'px', 'value': 0 }],
    'display': 'block',
    'fontFamily': '"FontAwesome"',
    'fontStyle': 'normal',
    'fontWeight': 'normal',
    'MozOsxFontSmoothing': 'grayscale',
    'WebkitFontSmoothing': 'antialiased'
  },
  'btn-vimeo::before': {
    'position': 'absolute',
    'top': [{ 'unit': 'px', 'value': 0 }],
    'left': [{ 'unit': 'px', 'value': 0 }],
    'display': 'block',
    'fontFamily': '"FontAwesome"',
    'fontStyle': 'normal',
    'fontWeight': 'normal',
    'MozOsxFontSmoothing': 'grayscale',
    'WebkitFontSmoothing': 'antialiased'
  },
  'btn-facebook:hover': {
    'color': '#fff'
  },
  'btn-twitter:hover': {
    'color': '#fff'
  },
  'btn-linkedin:hover': {
    'color': '#fff'
  },
  'btn-flickr:hover': {
    'color': '#fff'
  },
  'btn-tumblr:hover': {
    'color': '#fff'
  },
  'btn-xing:hover': {
    'color': '#fff'
  },
  'btn-github:hover': {
    'color': '#fff'
  },
  'btn-html5:hover': {
    'color': '#fff'
  },
  'btn-openid:hover': {
    'color': '#fff'
  },
  'btn-stack-overflow:hover': {
    'color': '#fff'
  },
  'btn-youtube:hover': {
    'color': '#fff'
  },
  'btn-css3:hover': {
    'color': '#fff'
  },
  'btn-dribbble:hover': {
    'color': '#fff'
  },
  'btn-google-plus:hover': {
    'color': '#fff'
  },
  'btn-instagram:hover': {
    'color': '#fff'
  },
  'btn-pinterest:hover': {
    'color': '#fff'
  },
  'btn-vk:hover': {
    'color': '#fff'
  },
  'btn-yahoo:hover': {
    'color': '#fff'
  },
  'btn-behance:hover': {
    'color': '#fff'
  },
  'btn-dropbox:hover': {
    'color': '#fff'
  },
  'btn-reddit:hover': {
    'color': '#fff'
  },
  'btn-spotify:hover': {
    'color': '#fff'
  },
  'btn-vine:hover': {
    'color': '#fff'
  },
  'btn-foursquare:hover': {
    'color': '#fff'
  },
  'btn-vimeo:hover': {
    'color': '#fff'
  },
  'btn-facebookicon span': {
    'display': 'none'
  },
  'btn-twittericon span': {
    'display': 'none'
  },
  'btn-linkedinicon span': {
    'display': 'none'
  },
  'btn-flickricon span': {
    'display': 'none'
  },
  'btn-tumblricon span': {
    'display': 'none'
  },
  'btn-xingicon span': {
    'display': 'none'
  },
  'btn-githubicon span': {
    'display': 'none'
  },
  'btn-html5icon span': {
    'display': 'none'
  },
  'btn-openidicon span': {
    'display': 'none'
  },
  'btn-stack-overflowicon span': {
    'display': 'none'
  },
  'btn-youtubeicon span': {
    'display': 'none'
  },
  'btn-css3icon span': {
    'display': 'none'
  },
  'btn-dribbbleicon span': {
    'display': 'none'
  },
  'btn-google-plusicon span': {
    'display': 'none'
  },
  'btn-instagramicon span': {
    'display': 'none'
  },
  'btn-pinteresticon span': {
    'display': 'none'
  },
  'btn-vkicon span': {
    'display': 'none'
  },
  'btn-yahooicon span': {
    'display': 'none'
  },
  'btn-behanceicon span': {
    'display': 'none'
  },
  'btn-dropboxicon span': {
    'display': 'none'
  },
  'btn-redditicon span': {
    'display': 'none'
  },
  'btn-spotifyicon span': {
    'display': 'none'
  },
  'btn-vineicon span': {
    'display': 'none'
  },
  'btn-foursquareicon span': {
    'display': 'none'
  },
  'btn-vimeoicon span': {
    'display': 'none'
  },
  'btn-facebooktext::before': {
    'display': 'none'
  },
  'btn-twittertext::before': {
    'display': 'none'
  },
  'btn-linkedintext::before': {
    'display': 'none'
  },
  'btn-flickrtext::before': {
    'display': 'none'
  },
  'btn-tumblrtext::before': {
    'display': 'none'
  },
  'btn-xingtext::before': {
    'display': 'none'
  },
  'btn-githubtext::before': {
    'display': 'none'
  },
  'btn-html5text::before': {
    'display': 'none'
  },
  'btn-openidtext::before': {
    'display': 'none'
  },
  'btn-stack-overflowtext::before': {
    'display': 'none'
  },
  'btn-youtubetext::before': {
    'display': 'none'
  },
  'btn-css3text::before': {
    'display': 'none'
  },
  'btn-dribbbletext::before': {
    'display': 'none'
  },
  'btn-google-plustext::before': {
    'display': 'none'
  },
  'btn-instagramtext::before': {
    'display': 'none'
  },
  'btn-pinteresttext::before': {
    'display': 'none'
  },
  'btn-vktext::before': {
    'display': 'none'
  },
  'btn-yahootext::before': {
    'display': 'none'
  },
  'btn-behancetext::before': {
    'display': 'none'
  },
  'btn-dropboxtext::before': {
    'display': 'none'
  },
  'btn-reddittext::before': {
    'display': 'none'
  },
  'btn-spotifytext::before': {
    'display': 'none'
  },
  'btn-vinetext::before': {
    'display': 'none'
  },
  'btn-foursquaretext::before': {
    'display': 'none'
  },
  'btn-vimeotext::before': {
    'display': 'none'
  },
  'btn-facebooktext span': {
    'marginLeft': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': '!important' }]
  },
  'btn-twittertext span': {
    'marginLeft': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': '!important' }]
  },
  'btn-linkedintext span': {
    'marginLeft': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': '!important' }]
  },
  'btn-flickrtext span': {
    'marginLeft': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': '!important' }]
  },
  'btn-tumblrtext span': {
    'marginLeft': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': '!important' }]
  },
  'btn-xingtext span': {
    'marginLeft': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': '!important' }]
  },
  'btn-githubtext span': {
    'marginLeft': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': '!important' }]
  },
  'btn-html5text span': {
    'marginLeft': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': '!important' }]
  },
  'btn-openidtext span': {
    'marginLeft': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': '!important' }]
  },
  'btn-stack-overflowtext span': {
    'marginLeft': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': '!important' }]
  },
  'btn-youtubetext span': {
    'marginLeft': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': '!important' }]
  },
  'btn-css3text span': {
    'marginLeft': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': '!important' }]
  },
  'btn-dribbbletext span': {
    'marginLeft': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': '!important' }]
  },
  'btn-google-plustext span': {
    'marginLeft': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': '!important' }]
  },
  'btn-instagramtext span': {
    'marginLeft': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': '!important' }]
  },
  'btn-pinteresttext span': {
    'marginLeft': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': '!important' }]
  },
  'btn-vktext span': {
    'marginLeft': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': '!important' }]
  },
  'btn-yahootext span': {
    'marginLeft': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': '!important' }]
  },
  'btn-behancetext span': {
    'marginLeft': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': '!important' }]
  },
  'btn-dropboxtext span': {
    'marginLeft': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': '!important' }]
  },
  'btn-reddittext span': {
    'marginLeft': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': '!important' }]
  },
  'btn-spotifytext span': {
    'marginLeft': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': '!important' }]
  },
  'btn-vinetext span': {
    'marginLeft': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': '!important' }]
  },
  'btn-foursquaretext span': {
    'marginLeft': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': '!important' }]
  },
  'btn-vimeotext span': {
    'marginLeft': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': '!important' }]
  },
  'btn-facebook::before': {
    'width': [{ 'unit': 'rem', 'value': 2.3125 }],
    'height': [{ 'unit': 'rem', 'value': 2.3125 }],
    'padding': [{ 'unit': 'rem', 'value': 0.5 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 0.5 }, { 'unit': 'px', 'value': 0 }],
    'fontSize': [{ 'unit': 'rem', 'value': 0.875 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }]
  },
  'btn-twitter::before': {
    'width': [{ 'unit': 'rem', 'value': 2.3125 }],
    'height': [{ 'unit': 'rem', 'value': 2.3125 }],
    'padding': [{ 'unit': 'rem', 'value': 0.5 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 0.5 }, { 'unit': 'px', 'value': 0 }],
    'fontSize': [{ 'unit': 'rem', 'value': 0.875 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }]
  },
  'btn-linkedin::before': {
    'width': [{ 'unit': 'rem', 'value': 2.3125 }],
    'height': [{ 'unit': 'rem', 'value': 2.3125 }],
    'padding': [{ 'unit': 'rem', 'value': 0.5 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 0.5 }, { 'unit': 'px', 'value': 0 }],
    'fontSize': [{ 'unit': 'rem', 'value': 0.875 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }]
  },
  'btn-flickr::before': {
    'width': [{ 'unit': 'rem', 'value': 2.3125 }],
    'height': [{ 'unit': 'rem', 'value': 2.3125 }],
    'padding': [{ 'unit': 'rem', 'value': 0.5 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 0.5 }, { 'unit': 'px', 'value': 0 }],
    'fontSize': [{ 'unit': 'rem', 'value': 0.875 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }]
  },
  'btn-tumblr::before': {
    'width': [{ 'unit': 'rem', 'value': 2.3125 }],
    'height': [{ 'unit': 'rem', 'value': 2.3125 }],
    'padding': [{ 'unit': 'rem', 'value': 0.5 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 0.5 }, { 'unit': 'px', 'value': 0 }],
    'fontSize': [{ 'unit': 'rem', 'value': 0.875 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }]
  },
  'btn-xing::before': {
    'width': [{ 'unit': 'rem', 'value': 2.3125 }],
    'height': [{ 'unit': 'rem', 'value': 2.3125 }],
    'padding': [{ 'unit': 'rem', 'value': 0.5 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 0.5 }, { 'unit': 'px', 'value': 0 }],
    'fontSize': [{ 'unit': 'rem', 'value': 0.875 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }]
  },
  'btn-github::before': {
    'width': [{ 'unit': 'rem', 'value': 2.3125 }],
    'height': [{ 'unit': 'rem', 'value': 2.3125 }],
    'padding': [{ 'unit': 'rem', 'value': 0.5 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 0.5 }, { 'unit': 'px', 'value': 0 }],
    'fontSize': [{ 'unit': 'rem', 'value': 0.875 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }]
  },
  'btn-html5::before': {
    'width': [{ 'unit': 'rem', 'value': 2.3125 }],
    'height': [{ 'unit': 'rem', 'value': 2.3125 }],
    'padding': [{ 'unit': 'rem', 'value': 0.5 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 0.5 }, { 'unit': 'px', 'value': 0 }],
    'fontSize': [{ 'unit': 'rem', 'value': 0.875 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }]
  },
  'btn-openid::before': {
    'width': [{ 'unit': 'rem', 'value': 2.3125 }],
    'height': [{ 'unit': 'rem', 'value': 2.3125 }],
    'padding': [{ 'unit': 'rem', 'value': 0.5 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 0.5 }, { 'unit': 'px', 'value': 0 }],
    'fontSize': [{ 'unit': 'rem', 'value': 0.875 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }]
  },
  'btn-stack-overflow::before': {
    'width': [{ 'unit': 'rem', 'value': 2.3125 }],
    'height': [{ 'unit': 'rem', 'value': 2.3125 }],
    'padding': [{ 'unit': 'rem', 'value': 0.5 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 0.5 }, { 'unit': 'px', 'value': 0 }],
    'fontSize': [{ 'unit': 'rem', 'value': 0.875 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }]
  },
  'btn-youtube::before': {
    'width': [{ 'unit': 'rem', 'value': 2.3125 }],
    'height': [{ 'unit': 'rem', 'value': 2.3125 }],
    'padding': [{ 'unit': 'rem', 'value': 0.5 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 0.5 }, { 'unit': 'px', 'value': 0 }],
    'fontSize': [{ 'unit': 'rem', 'value': 0.875 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }]
  },
  'btn-css3::before': {
    'width': [{ 'unit': 'rem', 'value': 2.3125 }],
    'height': [{ 'unit': 'rem', 'value': 2.3125 }],
    'padding': [{ 'unit': 'rem', 'value': 0.5 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 0.5 }, { 'unit': 'px', 'value': 0 }],
    'fontSize': [{ 'unit': 'rem', 'value': 0.875 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }]
  },
  'btn-dribbble::before': {
    'width': [{ 'unit': 'rem', 'value': 2.3125 }],
    'height': [{ 'unit': 'rem', 'value': 2.3125 }],
    'padding': [{ 'unit': 'rem', 'value': 0.5 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 0.5 }, { 'unit': 'px', 'value': 0 }],
    'fontSize': [{ 'unit': 'rem', 'value': 0.875 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }]
  },
  'btn-google-plus::before': {
    'width': [{ 'unit': 'rem', 'value': 2.3125 }],
    'height': [{ 'unit': 'rem', 'value': 2.3125 }],
    'padding': [{ 'unit': 'rem', 'value': 0.5 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 0.5 }, { 'unit': 'px', 'value': 0 }],
    'fontSize': [{ 'unit': 'rem', 'value': 0.875 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }]
  },
  'btn-instagram::before': {
    'width': [{ 'unit': 'rem', 'value': 2.3125 }],
    'height': [{ 'unit': 'rem', 'value': 2.3125 }],
    'padding': [{ 'unit': 'rem', 'value': 0.5 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 0.5 }, { 'unit': 'px', 'value': 0 }],
    'fontSize': [{ 'unit': 'rem', 'value': 0.875 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }]
  },
  'btn-pinterest::before': {
    'width': [{ 'unit': 'rem', 'value': 2.3125 }],
    'height': [{ 'unit': 'rem', 'value': 2.3125 }],
    'padding': [{ 'unit': 'rem', 'value': 0.5 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 0.5 }, { 'unit': 'px', 'value': 0 }],
    'fontSize': [{ 'unit': 'rem', 'value': 0.875 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }]
  },
  'btn-vk::before': {
    'width': [{ 'unit': 'rem', 'value': 2.3125 }],
    'height': [{ 'unit': 'rem', 'value': 2.3125 }],
    'padding': [{ 'unit': 'rem', 'value': 0.5 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 0.5 }, { 'unit': 'px', 'value': 0 }],
    'fontSize': [{ 'unit': 'rem', 'value': 0.875 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }]
  },
  'btn-yahoo::before': {
    'width': [{ 'unit': 'rem', 'value': 2.3125 }],
    'height': [{ 'unit': 'rem', 'value': 2.3125 }],
    'padding': [{ 'unit': 'rem', 'value': 0.5 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 0.5 }, { 'unit': 'px', 'value': 0 }],
    'fontSize': [{ 'unit': 'rem', 'value': 0.875 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }]
  },
  'btn-behance::before': {
    'width': [{ 'unit': 'rem', 'value': 2.3125 }],
    'height': [{ 'unit': 'rem', 'value': 2.3125 }],
    'padding': [{ 'unit': 'rem', 'value': 0.5 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 0.5 }, { 'unit': 'px', 'value': 0 }],
    'fontSize': [{ 'unit': 'rem', 'value': 0.875 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }]
  },
  'btn-dropbox::before': {
    'width': [{ 'unit': 'rem', 'value': 2.3125 }],
    'height': [{ 'unit': 'rem', 'value': 2.3125 }],
    'padding': [{ 'unit': 'rem', 'value': 0.5 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 0.5 }, { 'unit': 'px', 'value': 0 }],
    'fontSize': [{ 'unit': 'rem', 'value': 0.875 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }]
  },
  'btn-reddit::before': {
    'width': [{ 'unit': 'rem', 'value': 2.3125 }],
    'height': [{ 'unit': 'rem', 'value': 2.3125 }],
    'padding': [{ 'unit': 'rem', 'value': 0.5 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 0.5 }, { 'unit': 'px', 'value': 0 }],
    'fontSize': [{ 'unit': 'rem', 'value': 0.875 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }]
  },
  'btn-spotify::before': {
    'width': [{ 'unit': 'rem', 'value': 2.3125 }],
    'height': [{ 'unit': 'rem', 'value': 2.3125 }],
    'padding': [{ 'unit': 'rem', 'value': 0.5 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 0.5 }, { 'unit': 'px', 'value': 0 }],
    'fontSize': [{ 'unit': 'rem', 'value': 0.875 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }]
  },
  'btn-vine::before': {
    'width': [{ 'unit': 'rem', 'value': 2.3125 }],
    'height': [{ 'unit': 'rem', 'value': 2.3125 }],
    'padding': [{ 'unit': 'rem', 'value': 0.5 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 0.5 }, { 'unit': 'px', 'value': 0 }],
    'fontSize': [{ 'unit': 'rem', 'value': 0.875 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }]
  },
  'btn-foursquare::before': {
    'width': [{ 'unit': 'rem', 'value': 2.3125 }],
    'height': [{ 'unit': 'rem', 'value': 2.3125 }],
    'padding': [{ 'unit': 'rem', 'value': 0.5 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 0.5 }, { 'unit': 'px', 'value': 0 }],
    'fontSize': [{ 'unit': 'rem', 'value': 0.875 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }]
  },
  'btn-vimeo::before': {
    'width': [{ 'unit': 'rem', 'value': 2.3125 }],
    'height': [{ 'unit': 'rem', 'value': 2.3125 }],
    'padding': [{ 'unit': 'rem', 'value': 0.5 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 0.5 }, { 'unit': 'px', 'value': 0 }],
    'fontSize': [{ 'unit': 'rem', 'value': 0.875 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }]
  },
  'btn-facebook span': {
    'marginLeft': [{ 'unit': 'rem', 'value': 2.3125 }]
  },
  'btn-twitter span': {
    'marginLeft': [{ 'unit': 'rem', 'value': 2.3125 }]
  },
  'btn-linkedin span': {
    'marginLeft': [{ 'unit': 'rem', 'value': 2.3125 }]
  },
  'btn-flickr span': {
    'marginLeft': [{ 'unit': 'rem', 'value': 2.3125 }]
  },
  'btn-tumblr span': {
    'marginLeft': [{ 'unit': 'rem', 'value': 2.3125 }]
  },
  'btn-xing span': {
    'marginLeft': [{ 'unit': 'rem', 'value': 2.3125 }]
  },
  'btn-github span': {
    'marginLeft': [{ 'unit': 'rem', 'value': 2.3125 }]
  },
  'btn-html5 span': {
    'marginLeft': [{ 'unit': 'rem', 'value': 2.3125 }]
  },
  'btn-openid span': {
    'marginLeft': [{ 'unit': 'rem', 'value': 2.3125 }]
  },
  'btn-stack-overflow span': {
    'marginLeft': [{ 'unit': 'rem', 'value': 2.3125 }]
  },
  'btn-youtube span': {
    'marginLeft': [{ 'unit': 'rem', 'value': 2.3125 }]
  },
  'btn-css3 span': {
    'marginLeft': [{ 'unit': 'rem', 'value': 2.3125 }]
  },
  'btn-dribbble span': {
    'marginLeft': [{ 'unit': 'rem', 'value': 2.3125 }]
  },
  'btn-google-plus span': {
    'marginLeft': [{ 'unit': 'rem', 'value': 2.3125 }]
  },
  'btn-instagram span': {
    'marginLeft': [{ 'unit': 'rem', 'value': 2.3125 }]
  },
  'btn-pinterest span': {
    'marginLeft': [{ 'unit': 'rem', 'value': 2.3125 }]
  },
  'btn-vk span': {
    'marginLeft': [{ 'unit': 'rem', 'value': 2.3125 }]
  },
  'btn-yahoo span': {
    'marginLeft': [{ 'unit': 'rem', 'value': 2.3125 }]
  },
  'btn-behance span': {
    'marginLeft': [{ 'unit': 'rem', 'value': 2.3125 }]
  },
  'btn-dropbox span': {
    'marginLeft': [{ 'unit': 'rem', 'value': 2.3125 }]
  },
  'btn-reddit span': {
    'marginLeft': [{ 'unit': 'rem', 'value': 2.3125 }]
  },
  'btn-spotify span': {
    'marginLeft': [{ 'unit': 'rem', 'value': 2.3125 }]
  },
  'btn-vine span': {
    'marginLeft': [{ 'unit': 'rem', 'value': 2.3125 }]
  },
  'btn-foursquare span': {
    'marginLeft': [{ 'unit': 'rem', 'value': 2.3125 }]
  },
  'btn-vimeo span': {
    'marginLeft': [{ 'unit': 'rem', 'value': 2.3125 }]
  },
  'btn-facebookicon': {
    'width': [{ 'unit': 'rem', 'value': 2.3125 }],
    'height': [{ 'unit': 'rem', 'value': 2.3125 }]
  },
  'btn-twittericon': {
    'width': [{ 'unit': 'rem', 'value': 2.3125 }],
    'height': [{ 'unit': 'rem', 'value': 2.3125 }]
  },
  'btn-linkedinicon': {
    'width': [{ 'unit': 'rem', 'value': 2.3125 }],
    'height': [{ 'unit': 'rem', 'value': 2.3125 }]
  },
  'btn-flickricon': {
    'width': [{ 'unit': 'rem', 'value': 2.3125 }],
    'height': [{ 'unit': 'rem', 'value': 2.3125 }]
  },
  'btn-tumblricon': {
    'width': [{ 'unit': 'rem', 'value': 2.3125 }],
    'height': [{ 'unit': 'rem', 'value': 2.3125 }]
  },
  'btn-xingicon': {
    'width': [{ 'unit': 'rem', 'value': 2.3125 }],
    'height': [{ 'unit': 'rem', 'value': 2.3125 }]
  },
  'btn-githubicon': {
    'width': [{ 'unit': 'rem', 'value': 2.3125 }],
    'height': [{ 'unit': 'rem', 'value': 2.3125 }]
  },
  'btn-html5icon': {
    'width': [{ 'unit': 'rem', 'value': 2.3125 }],
    'height': [{ 'unit': 'rem', 'value': 2.3125 }]
  },
  'btn-openidicon': {
    'width': [{ 'unit': 'rem', 'value': 2.3125 }],
    'height': [{ 'unit': 'rem', 'value': 2.3125 }]
  },
  'btn-stack-overflowicon': {
    'width': [{ 'unit': 'rem', 'value': 2.3125 }],
    'height': [{ 'unit': 'rem', 'value': 2.3125 }]
  },
  'btn-youtubeicon': {
    'width': [{ 'unit': 'rem', 'value': 2.3125 }],
    'height': [{ 'unit': 'rem', 'value': 2.3125 }]
  },
  'btn-css3icon': {
    'width': [{ 'unit': 'rem', 'value': 2.3125 }],
    'height': [{ 'unit': 'rem', 'value': 2.3125 }]
  },
  'btn-dribbbleicon': {
    'width': [{ 'unit': 'rem', 'value': 2.3125 }],
    'height': [{ 'unit': 'rem', 'value': 2.3125 }]
  },
  'btn-google-plusicon': {
    'width': [{ 'unit': 'rem', 'value': 2.3125 }],
    'height': [{ 'unit': 'rem', 'value': 2.3125 }]
  },
  'btn-instagramicon': {
    'width': [{ 'unit': 'rem', 'value': 2.3125 }],
    'height': [{ 'unit': 'rem', 'value': 2.3125 }]
  },
  'btn-pinteresticon': {
    'width': [{ 'unit': 'rem', 'value': 2.3125 }],
    'height': [{ 'unit': 'rem', 'value': 2.3125 }]
  },
  'btn-vkicon': {
    'width': [{ 'unit': 'rem', 'value': 2.3125 }],
    'height': [{ 'unit': 'rem', 'value': 2.3125 }]
  },
  'btn-yahooicon': {
    'width': [{ 'unit': 'rem', 'value': 2.3125 }],
    'height': [{ 'unit': 'rem', 'value': 2.3125 }]
  },
  'btn-behanceicon': {
    'width': [{ 'unit': 'rem', 'value': 2.3125 }],
    'height': [{ 'unit': 'rem', 'value': 2.3125 }]
  },
  'btn-dropboxicon': {
    'width': [{ 'unit': 'rem', 'value': 2.3125 }],
    'height': [{ 'unit': 'rem', 'value': 2.3125 }]
  },
  'btn-redditicon': {
    'width': [{ 'unit': 'rem', 'value': 2.3125 }],
    'height': [{ 'unit': 'rem', 'value': 2.3125 }]
  },
  'btn-spotifyicon': {
    'width': [{ 'unit': 'rem', 'value': 2.3125 }],
    'height': [{ 'unit': 'rem', 'value': 2.3125 }]
  },
  'btn-vineicon': {
    'width': [{ 'unit': 'rem', 'value': 2.3125 }],
    'height': [{ 'unit': 'rem', 'value': 2.3125 }]
  },
  'btn-foursquareicon': {
    'width': [{ 'unit': 'rem', 'value': 2.3125 }],
    'height': [{ 'unit': 'rem', 'value': 2.3125 }]
  },
  'btn-vimeoicon': {
    'width': [{ 'unit': 'rem', 'value': 2.3125 }],
    'height': [{ 'unit': 'rem', 'value': 2.3125 }]
  },
  'btn-facebookbtn-lg': {
    'padding': [{ 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 1 }, { 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 1 }],
    'fontSize': [{ 'unit': 'rem', 'value': 1.25 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }],
    'border': [{ 'unit': 'px', 'value': 0 }]
  },
  'btn-group-lg > btn-facebookbtn': {
    'padding': [{ 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 1 }, { 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 1 }],
    'fontSize': [{ 'unit': 'rem', 'value': 1.25 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }],
    'border': [{ 'unit': 'px', 'value': 0 }]
  },
  'btn-twitterbtn-lg': {
    'padding': [{ 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 1 }, { 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 1 }],
    'fontSize': [{ 'unit': 'rem', 'value': 1.25 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }],
    'border': [{ 'unit': 'px', 'value': 0 }]
  },
  'btn-group-lg > btn-twitterbtn': {
    'padding': [{ 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 1 }, { 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 1 }],
    'fontSize': [{ 'unit': 'rem', 'value': 1.25 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }],
    'border': [{ 'unit': 'px', 'value': 0 }]
  },
  'btn-linkedinbtn-lg': {
    'padding': [{ 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 1 }, { 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 1 }],
    'fontSize': [{ 'unit': 'rem', 'value': 1.25 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }],
    'border': [{ 'unit': 'px', 'value': 0 }]
  },
  'btn-group-lg > btn-linkedinbtn': {
    'padding': [{ 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 1 }, { 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 1 }],
    'fontSize': [{ 'unit': 'rem', 'value': 1.25 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }],
    'border': [{ 'unit': 'px', 'value': 0 }]
  },
  'btn-flickrbtn-lg': {
    'padding': [{ 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 1 }, { 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 1 }],
    'fontSize': [{ 'unit': 'rem', 'value': 1.25 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }],
    'border': [{ 'unit': 'px', 'value': 0 }]
  },
  'btn-group-lg > btn-flickrbtn': {
    'padding': [{ 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 1 }, { 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 1 }],
    'fontSize': [{ 'unit': 'rem', 'value': 1.25 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }],
    'border': [{ 'unit': 'px', 'value': 0 }]
  },
  'btn-tumblrbtn-lg': {
    'padding': [{ 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 1 }, { 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 1 }],
    'fontSize': [{ 'unit': 'rem', 'value': 1.25 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }],
    'border': [{ 'unit': 'px', 'value': 0 }]
  },
  'btn-group-lg > btn-tumblrbtn': {
    'padding': [{ 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 1 }, { 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 1 }],
    'fontSize': [{ 'unit': 'rem', 'value': 1.25 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }],
    'border': [{ 'unit': 'px', 'value': 0 }]
  },
  'btn-xingbtn-lg': {
    'padding': [{ 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 1 }, { 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 1 }],
    'fontSize': [{ 'unit': 'rem', 'value': 1.25 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }],
    'border': [{ 'unit': 'px', 'value': 0 }]
  },
  'btn-group-lg > btn-xingbtn': {
    'padding': [{ 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 1 }, { 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 1 }],
    'fontSize': [{ 'unit': 'rem', 'value': 1.25 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }],
    'border': [{ 'unit': 'px', 'value': 0 }]
  },
  'btn-githubbtn-lg': {
    'padding': [{ 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 1 }, { 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 1 }],
    'fontSize': [{ 'unit': 'rem', 'value': 1.25 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }],
    'border': [{ 'unit': 'px', 'value': 0 }]
  },
  'btn-group-lg > btn-githubbtn': {
    'padding': [{ 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 1 }, { 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 1 }],
    'fontSize': [{ 'unit': 'rem', 'value': 1.25 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }],
    'border': [{ 'unit': 'px', 'value': 0 }]
  },
  'btn-html5btn-lg': {
    'padding': [{ 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 1 }, { 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 1 }],
    'fontSize': [{ 'unit': 'rem', 'value': 1.25 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }],
    'border': [{ 'unit': 'px', 'value': 0 }]
  },
  'btn-group-lg > btn-html5btn': {
    'padding': [{ 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 1 }, { 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 1 }],
    'fontSize': [{ 'unit': 'rem', 'value': 1.25 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }],
    'border': [{ 'unit': 'px', 'value': 0 }]
  },
  'btn-openidbtn-lg': {
    'padding': [{ 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 1 }, { 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 1 }],
    'fontSize': [{ 'unit': 'rem', 'value': 1.25 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }],
    'border': [{ 'unit': 'px', 'value': 0 }]
  },
  'btn-group-lg > btn-openidbtn': {
    'padding': [{ 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 1 }, { 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 1 }],
    'fontSize': [{ 'unit': 'rem', 'value': 1.25 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }],
    'border': [{ 'unit': 'px', 'value': 0 }]
  },
  'btn-stack-overflowbtn-lg': {
    'padding': [{ 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 1 }, { 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 1 }],
    'fontSize': [{ 'unit': 'rem', 'value': 1.25 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }],
    'border': [{ 'unit': 'px', 'value': 0 }]
  },
  'btn-group-lg > btn-stack-overflowbtn': {
    'padding': [{ 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 1 }, { 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 1 }],
    'fontSize': [{ 'unit': 'rem', 'value': 1.25 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }],
    'border': [{ 'unit': 'px', 'value': 0 }]
  },
  'btn-youtubebtn-lg': {
    'padding': [{ 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 1 }, { 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 1 }],
    'fontSize': [{ 'unit': 'rem', 'value': 1.25 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }],
    'border': [{ 'unit': 'px', 'value': 0 }]
  },
  'btn-group-lg > btn-youtubebtn': {
    'padding': [{ 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 1 }, { 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 1 }],
    'fontSize': [{ 'unit': 'rem', 'value': 1.25 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }],
    'border': [{ 'unit': 'px', 'value': 0 }]
  },
  'btn-css3btn-lg': {
    'padding': [{ 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 1 }, { 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 1 }],
    'fontSize': [{ 'unit': 'rem', 'value': 1.25 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }],
    'border': [{ 'unit': 'px', 'value': 0 }]
  },
  'btn-group-lg > btn-css3btn': {
    'padding': [{ 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 1 }, { 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 1 }],
    'fontSize': [{ 'unit': 'rem', 'value': 1.25 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }],
    'border': [{ 'unit': 'px', 'value': 0 }]
  },
  'btn-dribbblebtn-lg': {
    'padding': [{ 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 1 }, { 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 1 }],
    'fontSize': [{ 'unit': 'rem', 'value': 1.25 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }],
    'border': [{ 'unit': 'px', 'value': 0 }]
  },
  'btn-group-lg > btn-dribbblebtn': {
    'padding': [{ 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 1 }, { 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 1 }],
    'fontSize': [{ 'unit': 'rem', 'value': 1.25 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }],
    'border': [{ 'unit': 'px', 'value': 0 }]
  },
  'btn-google-plusbtn-lg': {
    'padding': [{ 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 1 }, { 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 1 }],
    'fontSize': [{ 'unit': 'rem', 'value': 1.25 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }],
    'border': [{ 'unit': 'px', 'value': 0 }]
  },
  'btn-group-lg > btn-google-plusbtn': {
    'padding': [{ 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 1 }, { 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 1 }],
    'fontSize': [{ 'unit': 'rem', 'value': 1.25 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }],
    'border': [{ 'unit': 'px', 'value': 0 }]
  },
  'btn-instagrambtn-lg': {
    'padding': [{ 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 1 }, { 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 1 }],
    'fontSize': [{ 'unit': 'rem', 'value': 1.25 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }],
    'border': [{ 'unit': 'px', 'value': 0 }]
  },
  'btn-group-lg > btn-instagrambtn': {
    'padding': [{ 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 1 }, { 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 1 }],
    'fontSize': [{ 'unit': 'rem', 'value': 1.25 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }],
    'border': [{ 'unit': 'px', 'value': 0 }]
  },
  'btn-pinterestbtn-lg': {
    'padding': [{ 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 1 }, { 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 1 }],
    'fontSize': [{ 'unit': 'rem', 'value': 1.25 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }],
    'border': [{ 'unit': 'px', 'value': 0 }]
  },
  'btn-group-lg > btn-pinterestbtn': {
    'padding': [{ 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 1 }, { 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 1 }],
    'fontSize': [{ 'unit': 'rem', 'value': 1.25 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }],
    'border': [{ 'unit': 'px', 'value': 0 }]
  },
  'btn-vkbtn-lg': {
    'padding': [{ 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 1 }, { 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 1 }],
    'fontSize': [{ 'unit': 'rem', 'value': 1.25 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }],
    'border': [{ 'unit': 'px', 'value': 0 }]
  },
  'btn-group-lg > btn-vkbtn': {
    'padding': [{ 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 1 }, { 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 1 }],
    'fontSize': [{ 'unit': 'rem', 'value': 1.25 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }],
    'border': [{ 'unit': 'px', 'value': 0 }]
  },
  'btn-yahoobtn-lg': {
    'padding': [{ 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 1 }, { 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 1 }],
    'fontSize': [{ 'unit': 'rem', 'value': 1.25 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }],
    'border': [{ 'unit': 'px', 'value': 0 }]
  },
  'btn-group-lg > btn-yahoobtn': {
    'padding': [{ 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 1 }, { 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 1 }],
    'fontSize': [{ 'unit': 'rem', 'value': 1.25 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }],
    'border': [{ 'unit': 'px', 'value': 0 }]
  },
  'btn-behancebtn-lg': {
    'padding': [{ 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 1 }, { 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 1 }],
    'fontSize': [{ 'unit': 'rem', 'value': 1.25 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }],
    'border': [{ 'unit': 'px', 'value': 0 }]
  },
  'btn-group-lg > btn-behancebtn': {
    'padding': [{ 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 1 }, { 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 1 }],
    'fontSize': [{ 'unit': 'rem', 'value': 1.25 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }],
    'border': [{ 'unit': 'px', 'value': 0 }]
  },
  'btn-dropboxbtn-lg': {
    'padding': [{ 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 1 }, { 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 1 }],
    'fontSize': [{ 'unit': 'rem', 'value': 1.25 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }],
    'border': [{ 'unit': 'px', 'value': 0 }]
  },
  'btn-group-lg > btn-dropboxbtn': {
    'padding': [{ 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 1 }, { 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 1 }],
    'fontSize': [{ 'unit': 'rem', 'value': 1.25 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }],
    'border': [{ 'unit': 'px', 'value': 0 }]
  },
  'btn-redditbtn-lg': {
    'padding': [{ 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 1 }, { 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 1 }],
    'fontSize': [{ 'unit': 'rem', 'value': 1.25 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }],
    'border': [{ 'unit': 'px', 'value': 0 }]
  },
  'btn-group-lg > btn-redditbtn': {
    'padding': [{ 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 1 }, { 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 1 }],
    'fontSize': [{ 'unit': 'rem', 'value': 1.25 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }],
    'border': [{ 'unit': 'px', 'value': 0 }]
  },
  'btn-spotifybtn-lg': {
    'padding': [{ 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 1 }, { 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 1 }],
    'fontSize': [{ 'unit': 'rem', 'value': 1.25 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }],
    'border': [{ 'unit': 'px', 'value': 0 }]
  },
  'btn-group-lg > btn-spotifybtn': {
    'padding': [{ 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 1 }, { 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 1 }],
    'fontSize': [{ 'unit': 'rem', 'value': 1.25 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }],
    'border': [{ 'unit': 'px', 'value': 0 }]
  },
  'btn-vinebtn-lg': {
    'padding': [{ 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 1 }, { 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 1 }],
    'fontSize': [{ 'unit': 'rem', 'value': 1.25 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }],
    'border': [{ 'unit': 'px', 'value': 0 }]
  },
  'btn-group-lg > btn-vinebtn': {
    'padding': [{ 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 1 }, { 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 1 }],
    'fontSize': [{ 'unit': 'rem', 'value': 1.25 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }],
    'border': [{ 'unit': 'px', 'value': 0 }]
  },
  'btn-foursquarebtn-lg': {
    'padding': [{ 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 1 }, { 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 1 }],
    'fontSize': [{ 'unit': 'rem', 'value': 1.25 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }],
    'border': [{ 'unit': 'px', 'value': 0 }]
  },
  'btn-group-lg > btn-foursquarebtn': {
    'padding': [{ 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 1 }, { 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 1 }],
    'fontSize': [{ 'unit': 'rem', 'value': 1.25 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }],
    'border': [{ 'unit': 'px', 'value': 0 }]
  },
  'btn-vimeobtn-lg': {
    'padding': [{ 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 1 }, { 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 1 }],
    'fontSize': [{ 'unit': 'rem', 'value': 1.25 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }],
    'border': [{ 'unit': 'px', 'value': 0 }]
  },
  'btn-group-lg > btn-vimeobtn': {
    'padding': [{ 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 1 }, { 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 1 }],
    'fontSize': [{ 'unit': 'rem', 'value': 1.25 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }],
    'border': [{ 'unit': 'px', 'value': 0 }]
  },
  'btn-facebookbtn-lg::before': {
    'width': [{ 'unit': 'rem', 'value': 2.875 }],
    'height': [{ 'unit': 'rem', 'value': 2.875 }],
    'padding': [{ 'unit': 'rem', 'value': 0.5 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 0.5 }, { 'unit': 'px', 'value': 0 }],
    'fontSize': [{ 'unit': 'rem', 'value': 1.25 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }]
  },
  'btn-group-lg > btn-facebookbtn::before': {
    'width': [{ 'unit': 'rem', 'value': 2.875 }],
    'height': [{ 'unit': 'rem', 'value': 2.875 }],
    'padding': [{ 'unit': 'rem', 'value': 0.5 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 0.5 }, { 'unit': 'px', 'value': 0 }],
    'fontSize': [{ 'unit': 'rem', 'value': 1.25 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }]
  },
  'btn-twitterbtn-lg::before': {
    'width': [{ 'unit': 'rem', 'value': 2.875 }],
    'height': [{ 'unit': 'rem', 'value': 2.875 }],
    'padding': [{ 'unit': 'rem', 'value': 0.5 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 0.5 }, { 'unit': 'px', 'value': 0 }],
    'fontSize': [{ 'unit': 'rem', 'value': 1.25 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }]
  },
  'btn-group-lg > btn-twitterbtn::before': {
    'width': [{ 'unit': 'rem', 'value': 2.875 }],
    'height': [{ 'unit': 'rem', 'value': 2.875 }],
    'padding': [{ 'unit': 'rem', 'value': 0.5 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 0.5 }, { 'unit': 'px', 'value': 0 }],
    'fontSize': [{ 'unit': 'rem', 'value': 1.25 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }]
  },
  'btn-linkedinbtn-lg::before': {
    'width': [{ 'unit': 'rem', 'value': 2.875 }],
    'height': [{ 'unit': 'rem', 'value': 2.875 }],
    'padding': [{ 'unit': 'rem', 'value': 0.5 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 0.5 }, { 'unit': 'px', 'value': 0 }],
    'fontSize': [{ 'unit': 'rem', 'value': 1.25 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }]
  },
  'btn-group-lg > btn-linkedinbtn::before': {
    'width': [{ 'unit': 'rem', 'value': 2.875 }],
    'height': [{ 'unit': 'rem', 'value': 2.875 }],
    'padding': [{ 'unit': 'rem', 'value': 0.5 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 0.5 }, { 'unit': 'px', 'value': 0 }],
    'fontSize': [{ 'unit': 'rem', 'value': 1.25 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }]
  },
  'btn-flickrbtn-lg::before': {
    'width': [{ 'unit': 'rem', 'value': 2.875 }],
    'height': [{ 'unit': 'rem', 'value': 2.875 }],
    'padding': [{ 'unit': 'rem', 'value': 0.5 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 0.5 }, { 'unit': 'px', 'value': 0 }],
    'fontSize': [{ 'unit': 'rem', 'value': 1.25 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }]
  },
  'btn-group-lg > btn-flickrbtn::before': {
    'width': [{ 'unit': 'rem', 'value': 2.875 }],
    'height': [{ 'unit': 'rem', 'value': 2.875 }],
    'padding': [{ 'unit': 'rem', 'value': 0.5 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 0.5 }, { 'unit': 'px', 'value': 0 }],
    'fontSize': [{ 'unit': 'rem', 'value': 1.25 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }]
  },
  'btn-tumblrbtn-lg::before': {
    'width': [{ 'unit': 'rem', 'value': 2.875 }],
    'height': [{ 'unit': 'rem', 'value': 2.875 }],
    'padding': [{ 'unit': 'rem', 'value': 0.5 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 0.5 }, { 'unit': 'px', 'value': 0 }],
    'fontSize': [{ 'unit': 'rem', 'value': 1.25 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }]
  },
  'btn-group-lg > btn-tumblrbtn::before': {
    'width': [{ 'unit': 'rem', 'value': 2.875 }],
    'height': [{ 'unit': 'rem', 'value': 2.875 }],
    'padding': [{ 'unit': 'rem', 'value': 0.5 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 0.5 }, { 'unit': 'px', 'value': 0 }],
    'fontSize': [{ 'unit': 'rem', 'value': 1.25 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }]
  },
  'btn-xingbtn-lg::before': {
    'width': [{ 'unit': 'rem', 'value': 2.875 }],
    'height': [{ 'unit': 'rem', 'value': 2.875 }],
    'padding': [{ 'unit': 'rem', 'value': 0.5 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 0.5 }, { 'unit': 'px', 'value': 0 }],
    'fontSize': [{ 'unit': 'rem', 'value': 1.25 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }]
  },
  'btn-group-lg > btn-xingbtn::before': {
    'width': [{ 'unit': 'rem', 'value': 2.875 }],
    'height': [{ 'unit': 'rem', 'value': 2.875 }],
    'padding': [{ 'unit': 'rem', 'value': 0.5 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 0.5 }, { 'unit': 'px', 'value': 0 }],
    'fontSize': [{ 'unit': 'rem', 'value': 1.25 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }]
  },
  'btn-githubbtn-lg::before': {
    'width': [{ 'unit': 'rem', 'value': 2.875 }],
    'height': [{ 'unit': 'rem', 'value': 2.875 }],
    'padding': [{ 'unit': 'rem', 'value': 0.5 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 0.5 }, { 'unit': 'px', 'value': 0 }],
    'fontSize': [{ 'unit': 'rem', 'value': 1.25 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }]
  },
  'btn-group-lg > btn-githubbtn::before': {
    'width': [{ 'unit': 'rem', 'value': 2.875 }],
    'height': [{ 'unit': 'rem', 'value': 2.875 }],
    'padding': [{ 'unit': 'rem', 'value': 0.5 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 0.5 }, { 'unit': 'px', 'value': 0 }],
    'fontSize': [{ 'unit': 'rem', 'value': 1.25 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }]
  },
  'btn-html5btn-lg::before': {
    'width': [{ 'unit': 'rem', 'value': 2.875 }],
    'height': [{ 'unit': 'rem', 'value': 2.875 }],
    'padding': [{ 'unit': 'rem', 'value': 0.5 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 0.5 }, { 'unit': 'px', 'value': 0 }],
    'fontSize': [{ 'unit': 'rem', 'value': 1.25 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }]
  },
  'btn-group-lg > btn-html5btn::before': {
    'width': [{ 'unit': 'rem', 'value': 2.875 }],
    'height': [{ 'unit': 'rem', 'value': 2.875 }],
    'padding': [{ 'unit': 'rem', 'value': 0.5 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 0.5 }, { 'unit': 'px', 'value': 0 }],
    'fontSize': [{ 'unit': 'rem', 'value': 1.25 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }]
  },
  'btn-openidbtn-lg::before': {
    'width': [{ 'unit': 'rem', 'value': 2.875 }],
    'height': [{ 'unit': 'rem', 'value': 2.875 }],
    'padding': [{ 'unit': 'rem', 'value': 0.5 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 0.5 }, { 'unit': 'px', 'value': 0 }],
    'fontSize': [{ 'unit': 'rem', 'value': 1.25 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }]
  },
  'btn-group-lg > btn-openidbtn::before': {
    'width': [{ 'unit': 'rem', 'value': 2.875 }],
    'height': [{ 'unit': 'rem', 'value': 2.875 }],
    'padding': [{ 'unit': 'rem', 'value': 0.5 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 0.5 }, { 'unit': 'px', 'value': 0 }],
    'fontSize': [{ 'unit': 'rem', 'value': 1.25 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }]
  },
  'btn-stack-overflowbtn-lg::before': {
    'width': [{ 'unit': 'rem', 'value': 2.875 }],
    'height': [{ 'unit': 'rem', 'value': 2.875 }],
    'padding': [{ 'unit': 'rem', 'value': 0.5 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 0.5 }, { 'unit': 'px', 'value': 0 }],
    'fontSize': [{ 'unit': 'rem', 'value': 1.25 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }]
  },
  'btn-group-lg > btn-stack-overflowbtn::before': {
    'width': [{ 'unit': 'rem', 'value': 2.875 }],
    'height': [{ 'unit': 'rem', 'value': 2.875 }],
    'padding': [{ 'unit': 'rem', 'value': 0.5 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 0.5 }, { 'unit': 'px', 'value': 0 }],
    'fontSize': [{ 'unit': 'rem', 'value': 1.25 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }]
  },
  'btn-youtubebtn-lg::before': {
    'width': [{ 'unit': 'rem', 'value': 2.875 }],
    'height': [{ 'unit': 'rem', 'value': 2.875 }],
    'padding': [{ 'unit': 'rem', 'value': 0.5 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 0.5 }, { 'unit': 'px', 'value': 0 }],
    'fontSize': [{ 'unit': 'rem', 'value': 1.25 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }]
  },
  'btn-group-lg > btn-youtubebtn::before': {
    'width': [{ 'unit': 'rem', 'value': 2.875 }],
    'height': [{ 'unit': 'rem', 'value': 2.875 }],
    'padding': [{ 'unit': 'rem', 'value': 0.5 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 0.5 }, { 'unit': 'px', 'value': 0 }],
    'fontSize': [{ 'unit': 'rem', 'value': 1.25 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }]
  },
  'btn-css3btn-lg::before': {
    'width': [{ 'unit': 'rem', 'value': 2.875 }],
    'height': [{ 'unit': 'rem', 'value': 2.875 }],
    'padding': [{ 'unit': 'rem', 'value': 0.5 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 0.5 }, { 'unit': 'px', 'value': 0 }],
    'fontSize': [{ 'unit': 'rem', 'value': 1.25 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }]
  },
  'btn-group-lg > btn-css3btn::before': {
    'width': [{ 'unit': 'rem', 'value': 2.875 }],
    'height': [{ 'unit': 'rem', 'value': 2.875 }],
    'padding': [{ 'unit': 'rem', 'value': 0.5 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 0.5 }, { 'unit': 'px', 'value': 0 }],
    'fontSize': [{ 'unit': 'rem', 'value': 1.25 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }]
  },
  'btn-dribbblebtn-lg::before': {
    'width': [{ 'unit': 'rem', 'value': 2.875 }],
    'height': [{ 'unit': 'rem', 'value': 2.875 }],
    'padding': [{ 'unit': 'rem', 'value': 0.5 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 0.5 }, { 'unit': 'px', 'value': 0 }],
    'fontSize': [{ 'unit': 'rem', 'value': 1.25 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }]
  },
  'btn-group-lg > btn-dribbblebtn::before': {
    'width': [{ 'unit': 'rem', 'value': 2.875 }],
    'height': [{ 'unit': 'rem', 'value': 2.875 }],
    'padding': [{ 'unit': 'rem', 'value': 0.5 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 0.5 }, { 'unit': 'px', 'value': 0 }],
    'fontSize': [{ 'unit': 'rem', 'value': 1.25 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }]
  },
  'btn-google-plusbtn-lg::before': {
    'width': [{ 'unit': 'rem', 'value': 2.875 }],
    'height': [{ 'unit': 'rem', 'value': 2.875 }],
    'padding': [{ 'unit': 'rem', 'value': 0.5 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 0.5 }, { 'unit': 'px', 'value': 0 }],
    'fontSize': [{ 'unit': 'rem', 'value': 1.25 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }]
  },
  'btn-group-lg > btn-google-plusbtn::before': {
    'width': [{ 'unit': 'rem', 'value': 2.875 }],
    'height': [{ 'unit': 'rem', 'value': 2.875 }],
    'padding': [{ 'unit': 'rem', 'value': 0.5 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 0.5 }, { 'unit': 'px', 'value': 0 }],
    'fontSize': [{ 'unit': 'rem', 'value': 1.25 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }]
  },
  'btn-instagrambtn-lg::before': {
    'width': [{ 'unit': 'rem', 'value': 2.875 }],
    'height': [{ 'unit': 'rem', 'value': 2.875 }],
    'padding': [{ 'unit': 'rem', 'value': 0.5 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 0.5 }, { 'unit': 'px', 'value': 0 }],
    'fontSize': [{ 'unit': 'rem', 'value': 1.25 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }]
  },
  'btn-group-lg > btn-instagrambtn::before': {
    'width': [{ 'unit': 'rem', 'value': 2.875 }],
    'height': [{ 'unit': 'rem', 'value': 2.875 }],
    'padding': [{ 'unit': 'rem', 'value': 0.5 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 0.5 }, { 'unit': 'px', 'value': 0 }],
    'fontSize': [{ 'unit': 'rem', 'value': 1.25 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }]
  },
  'btn-pinterestbtn-lg::before': {
    'width': [{ 'unit': 'rem', 'value': 2.875 }],
    'height': [{ 'unit': 'rem', 'value': 2.875 }],
    'padding': [{ 'unit': 'rem', 'value': 0.5 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 0.5 }, { 'unit': 'px', 'value': 0 }],
    'fontSize': [{ 'unit': 'rem', 'value': 1.25 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }]
  },
  'btn-group-lg > btn-pinterestbtn::before': {
    'width': [{ 'unit': 'rem', 'value': 2.875 }],
    'height': [{ 'unit': 'rem', 'value': 2.875 }],
    'padding': [{ 'unit': 'rem', 'value': 0.5 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 0.5 }, { 'unit': 'px', 'value': 0 }],
    'fontSize': [{ 'unit': 'rem', 'value': 1.25 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }]
  },
  'btn-vkbtn-lg::before': {
    'width': [{ 'unit': 'rem', 'value': 2.875 }],
    'height': [{ 'unit': 'rem', 'value': 2.875 }],
    'padding': [{ 'unit': 'rem', 'value': 0.5 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 0.5 }, { 'unit': 'px', 'value': 0 }],
    'fontSize': [{ 'unit': 'rem', 'value': 1.25 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }]
  },
  'btn-group-lg > btn-vkbtn::before': {
    'width': [{ 'unit': 'rem', 'value': 2.875 }],
    'height': [{ 'unit': 'rem', 'value': 2.875 }],
    'padding': [{ 'unit': 'rem', 'value': 0.5 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 0.5 }, { 'unit': 'px', 'value': 0 }],
    'fontSize': [{ 'unit': 'rem', 'value': 1.25 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }]
  },
  'btn-yahoobtn-lg::before': {
    'width': [{ 'unit': 'rem', 'value': 2.875 }],
    'height': [{ 'unit': 'rem', 'value': 2.875 }],
    'padding': [{ 'unit': 'rem', 'value': 0.5 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 0.5 }, { 'unit': 'px', 'value': 0 }],
    'fontSize': [{ 'unit': 'rem', 'value': 1.25 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }]
  },
  'btn-group-lg > btn-yahoobtn::before': {
    'width': [{ 'unit': 'rem', 'value': 2.875 }],
    'height': [{ 'unit': 'rem', 'value': 2.875 }],
    'padding': [{ 'unit': 'rem', 'value': 0.5 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 0.5 }, { 'unit': 'px', 'value': 0 }],
    'fontSize': [{ 'unit': 'rem', 'value': 1.25 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }]
  },
  'btn-behancebtn-lg::before': {
    'width': [{ 'unit': 'rem', 'value': 2.875 }],
    'height': [{ 'unit': 'rem', 'value': 2.875 }],
    'padding': [{ 'unit': 'rem', 'value': 0.5 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 0.5 }, { 'unit': 'px', 'value': 0 }],
    'fontSize': [{ 'unit': 'rem', 'value': 1.25 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }]
  },
  'btn-group-lg > btn-behancebtn::before': {
    'width': [{ 'unit': 'rem', 'value': 2.875 }],
    'height': [{ 'unit': 'rem', 'value': 2.875 }],
    'padding': [{ 'unit': 'rem', 'value': 0.5 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 0.5 }, { 'unit': 'px', 'value': 0 }],
    'fontSize': [{ 'unit': 'rem', 'value': 1.25 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }]
  },
  'btn-dropboxbtn-lg::before': {
    'width': [{ 'unit': 'rem', 'value': 2.875 }],
    'height': [{ 'unit': 'rem', 'value': 2.875 }],
    'padding': [{ 'unit': 'rem', 'value': 0.5 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 0.5 }, { 'unit': 'px', 'value': 0 }],
    'fontSize': [{ 'unit': 'rem', 'value': 1.25 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }]
  },
  'btn-group-lg > btn-dropboxbtn::before': {
    'width': [{ 'unit': 'rem', 'value': 2.875 }],
    'height': [{ 'unit': 'rem', 'value': 2.875 }],
    'padding': [{ 'unit': 'rem', 'value': 0.5 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 0.5 }, { 'unit': 'px', 'value': 0 }],
    'fontSize': [{ 'unit': 'rem', 'value': 1.25 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }]
  },
  'btn-redditbtn-lg::before': {
    'width': [{ 'unit': 'rem', 'value': 2.875 }],
    'height': [{ 'unit': 'rem', 'value': 2.875 }],
    'padding': [{ 'unit': 'rem', 'value': 0.5 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 0.5 }, { 'unit': 'px', 'value': 0 }],
    'fontSize': [{ 'unit': 'rem', 'value': 1.25 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }]
  },
  'btn-group-lg > btn-redditbtn::before': {
    'width': [{ 'unit': 'rem', 'value': 2.875 }],
    'height': [{ 'unit': 'rem', 'value': 2.875 }],
    'padding': [{ 'unit': 'rem', 'value': 0.5 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 0.5 }, { 'unit': 'px', 'value': 0 }],
    'fontSize': [{ 'unit': 'rem', 'value': 1.25 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }]
  },
  'btn-spotifybtn-lg::before': {
    'width': [{ 'unit': 'rem', 'value': 2.875 }],
    'height': [{ 'unit': 'rem', 'value': 2.875 }],
    'padding': [{ 'unit': 'rem', 'value': 0.5 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 0.5 }, { 'unit': 'px', 'value': 0 }],
    'fontSize': [{ 'unit': 'rem', 'value': 1.25 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }]
  },
  'btn-group-lg > btn-spotifybtn::before': {
    'width': [{ 'unit': 'rem', 'value': 2.875 }],
    'height': [{ 'unit': 'rem', 'value': 2.875 }],
    'padding': [{ 'unit': 'rem', 'value': 0.5 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 0.5 }, { 'unit': 'px', 'value': 0 }],
    'fontSize': [{ 'unit': 'rem', 'value': 1.25 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }]
  },
  'btn-vinebtn-lg::before': {
    'width': [{ 'unit': 'rem', 'value': 2.875 }],
    'height': [{ 'unit': 'rem', 'value': 2.875 }],
    'padding': [{ 'unit': 'rem', 'value': 0.5 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 0.5 }, { 'unit': 'px', 'value': 0 }],
    'fontSize': [{ 'unit': 'rem', 'value': 1.25 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }]
  },
  'btn-group-lg > btn-vinebtn::before': {
    'width': [{ 'unit': 'rem', 'value': 2.875 }],
    'height': [{ 'unit': 'rem', 'value': 2.875 }],
    'padding': [{ 'unit': 'rem', 'value': 0.5 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 0.5 }, { 'unit': 'px', 'value': 0 }],
    'fontSize': [{ 'unit': 'rem', 'value': 1.25 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }]
  },
  'btn-foursquarebtn-lg::before': {
    'width': [{ 'unit': 'rem', 'value': 2.875 }],
    'height': [{ 'unit': 'rem', 'value': 2.875 }],
    'padding': [{ 'unit': 'rem', 'value': 0.5 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 0.5 }, { 'unit': 'px', 'value': 0 }],
    'fontSize': [{ 'unit': 'rem', 'value': 1.25 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }]
  },
  'btn-group-lg > btn-foursquarebtn::before': {
    'width': [{ 'unit': 'rem', 'value': 2.875 }],
    'height': [{ 'unit': 'rem', 'value': 2.875 }],
    'padding': [{ 'unit': 'rem', 'value': 0.5 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 0.5 }, { 'unit': 'px', 'value': 0 }],
    'fontSize': [{ 'unit': 'rem', 'value': 1.25 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }]
  },
  'btn-vimeobtn-lg::before': {
    'width': [{ 'unit': 'rem', 'value': 2.875 }],
    'height': [{ 'unit': 'rem', 'value': 2.875 }],
    'padding': [{ 'unit': 'rem', 'value': 0.5 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 0.5 }, { 'unit': 'px', 'value': 0 }],
    'fontSize': [{ 'unit': 'rem', 'value': 1.25 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }]
  },
  'btn-group-lg > btn-vimeobtn::before': {
    'width': [{ 'unit': 'rem', 'value': 2.875 }],
    'height': [{ 'unit': 'rem', 'value': 2.875 }],
    'padding': [{ 'unit': 'rem', 'value': 0.5 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 0.5 }, { 'unit': 'px', 'value': 0 }],
    'fontSize': [{ 'unit': 'rem', 'value': 1.25 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }]
  },
  'btn-facebookbtn-lg span': {
    'marginLeft': [{ 'unit': 'rem', 'value': 2.875 }]
  },
  'btn-group-lg > btn-facebookbtn span': {
    'marginLeft': [{ 'unit': 'rem', 'value': 2.875 }]
  },
  'btn-twitterbtn-lg span': {
    'marginLeft': [{ 'unit': 'rem', 'value': 2.875 }]
  },
  'btn-group-lg > btn-twitterbtn span': {
    'marginLeft': [{ 'unit': 'rem', 'value': 2.875 }]
  },
  'btn-linkedinbtn-lg span': {
    'marginLeft': [{ 'unit': 'rem', 'value': 2.875 }]
  },
  'btn-group-lg > btn-linkedinbtn span': {
    'marginLeft': [{ 'unit': 'rem', 'value': 2.875 }]
  },
  'btn-flickrbtn-lg span': {
    'marginLeft': [{ 'unit': 'rem', 'value': 2.875 }]
  },
  'btn-group-lg > btn-flickrbtn span': {
    'marginLeft': [{ 'unit': 'rem', 'value': 2.875 }]
  },
  'btn-tumblrbtn-lg span': {
    'marginLeft': [{ 'unit': 'rem', 'value': 2.875 }]
  },
  'btn-group-lg > btn-tumblrbtn span': {
    'marginLeft': [{ 'unit': 'rem', 'value': 2.875 }]
  },
  'btn-xingbtn-lg span': {
    'marginLeft': [{ 'unit': 'rem', 'value': 2.875 }]
  },
  'btn-group-lg > btn-xingbtn span': {
    'marginLeft': [{ 'unit': 'rem', 'value': 2.875 }]
  },
  'btn-githubbtn-lg span': {
    'marginLeft': [{ 'unit': 'rem', 'value': 2.875 }]
  },
  'btn-group-lg > btn-githubbtn span': {
    'marginLeft': [{ 'unit': 'rem', 'value': 2.875 }]
  },
  'btn-html5btn-lg span': {
    'marginLeft': [{ 'unit': 'rem', 'value': 2.875 }]
  },
  'btn-group-lg > btn-html5btn span': {
    'marginLeft': [{ 'unit': 'rem', 'value': 2.875 }]
  },
  'btn-openidbtn-lg span': {
    'marginLeft': [{ 'unit': 'rem', 'value': 2.875 }]
  },
  'btn-group-lg > btn-openidbtn span': {
    'marginLeft': [{ 'unit': 'rem', 'value': 2.875 }]
  },
  'btn-stack-overflowbtn-lg span': {
    'marginLeft': [{ 'unit': 'rem', 'value': 2.875 }]
  },
  'btn-group-lg > btn-stack-overflowbtn span': {
    'marginLeft': [{ 'unit': 'rem', 'value': 2.875 }]
  },
  'btn-youtubebtn-lg span': {
    'marginLeft': [{ 'unit': 'rem', 'value': 2.875 }]
  },
  'btn-group-lg > btn-youtubebtn span': {
    'marginLeft': [{ 'unit': 'rem', 'value': 2.875 }]
  },
  'btn-css3btn-lg span': {
    'marginLeft': [{ 'unit': 'rem', 'value': 2.875 }]
  },
  'btn-group-lg > btn-css3btn span': {
    'marginLeft': [{ 'unit': 'rem', 'value': 2.875 }]
  },
  'btn-dribbblebtn-lg span': {
    'marginLeft': [{ 'unit': 'rem', 'value': 2.875 }]
  },
  'btn-group-lg > btn-dribbblebtn span': {
    'marginLeft': [{ 'unit': 'rem', 'value': 2.875 }]
  },
  'btn-google-plusbtn-lg span': {
    'marginLeft': [{ 'unit': 'rem', 'value': 2.875 }]
  },
  'btn-group-lg > btn-google-plusbtn span': {
    'marginLeft': [{ 'unit': 'rem', 'value': 2.875 }]
  },
  'btn-instagrambtn-lg span': {
    'marginLeft': [{ 'unit': 'rem', 'value': 2.875 }]
  },
  'btn-group-lg > btn-instagrambtn span': {
    'marginLeft': [{ 'unit': 'rem', 'value': 2.875 }]
  },
  'btn-pinterestbtn-lg span': {
    'marginLeft': [{ 'unit': 'rem', 'value': 2.875 }]
  },
  'btn-group-lg > btn-pinterestbtn span': {
    'marginLeft': [{ 'unit': 'rem', 'value': 2.875 }]
  },
  'btn-vkbtn-lg span': {
    'marginLeft': [{ 'unit': 'rem', 'value': 2.875 }]
  },
  'btn-group-lg > btn-vkbtn span': {
    'marginLeft': [{ 'unit': 'rem', 'value': 2.875 }]
  },
  'btn-yahoobtn-lg span': {
    'marginLeft': [{ 'unit': 'rem', 'value': 2.875 }]
  },
  'btn-group-lg > btn-yahoobtn span': {
    'marginLeft': [{ 'unit': 'rem', 'value': 2.875 }]
  },
  'btn-behancebtn-lg span': {
    'marginLeft': [{ 'unit': 'rem', 'value': 2.875 }]
  },
  'btn-group-lg > btn-behancebtn span': {
    'marginLeft': [{ 'unit': 'rem', 'value': 2.875 }]
  },
  'btn-dropboxbtn-lg span': {
    'marginLeft': [{ 'unit': 'rem', 'value': 2.875 }]
  },
  'btn-group-lg > btn-dropboxbtn span': {
    'marginLeft': [{ 'unit': 'rem', 'value': 2.875 }]
  },
  'btn-redditbtn-lg span': {
    'marginLeft': [{ 'unit': 'rem', 'value': 2.875 }]
  },
  'btn-group-lg > btn-redditbtn span': {
    'marginLeft': [{ 'unit': 'rem', 'value': 2.875 }]
  },
  'btn-spotifybtn-lg span': {
    'marginLeft': [{ 'unit': 'rem', 'value': 2.875 }]
  },
  'btn-group-lg > btn-spotifybtn span': {
    'marginLeft': [{ 'unit': 'rem', 'value': 2.875 }]
  },
  'btn-vinebtn-lg span': {
    'marginLeft': [{ 'unit': 'rem', 'value': 2.875 }]
  },
  'btn-group-lg > btn-vinebtn span': {
    'marginLeft': [{ 'unit': 'rem', 'value': 2.875 }]
  },
  'btn-foursquarebtn-lg span': {
    'marginLeft': [{ 'unit': 'rem', 'value': 2.875 }]
  },
  'btn-group-lg > btn-foursquarebtn span': {
    'marginLeft': [{ 'unit': 'rem', 'value': 2.875 }]
  },
  'btn-vimeobtn-lg span': {
    'marginLeft': [{ 'unit': 'rem', 'value': 2.875 }]
  },
  'btn-group-lg > btn-vimeobtn span': {
    'marginLeft': [{ 'unit': 'rem', 'value': 2.875 }]
  },
  'btn-facebookbtn-lgicon': {
    'width': [{ 'unit': 'rem', 'value': 2.875 }],
    'height': [{ 'unit': 'rem', 'value': 2.875 }]
  },
  'btn-group-lg > btn-facebookiconbtn': {
    'width': [{ 'unit': 'rem', 'value': 2.875 }],
    'height': [{ 'unit': 'rem', 'value': 2.875 }]
  },
  'btn-twitterbtn-lgicon': {
    'width': [{ 'unit': 'rem', 'value': 2.875 }],
    'height': [{ 'unit': 'rem', 'value': 2.875 }]
  },
  'btn-group-lg > btn-twittericonbtn': {
    'width': [{ 'unit': 'rem', 'value': 2.875 }],
    'height': [{ 'unit': 'rem', 'value': 2.875 }]
  },
  'btn-linkedinbtn-lgicon': {
    'width': [{ 'unit': 'rem', 'value': 2.875 }],
    'height': [{ 'unit': 'rem', 'value': 2.875 }]
  },
  'btn-group-lg > btn-linkediniconbtn': {
    'width': [{ 'unit': 'rem', 'value': 2.875 }],
    'height': [{ 'unit': 'rem', 'value': 2.875 }]
  },
  'btn-flickrbtn-lgicon': {
    'width': [{ 'unit': 'rem', 'value': 2.875 }],
    'height': [{ 'unit': 'rem', 'value': 2.875 }]
  },
  'btn-group-lg > btn-flickriconbtn': {
    'width': [{ 'unit': 'rem', 'value': 2.875 }],
    'height': [{ 'unit': 'rem', 'value': 2.875 }]
  },
  'btn-tumblrbtn-lgicon': {
    'width': [{ 'unit': 'rem', 'value': 2.875 }],
    'height': [{ 'unit': 'rem', 'value': 2.875 }]
  },
  'btn-group-lg > btn-tumblriconbtn': {
    'width': [{ 'unit': 'rem', 'value': 2.875 }],
    'height': [{ 'unit': 'rem', 'value': 2.875 }]
  },
  'btn-xingbtn-lgicon': {
    'width': [{ 'unit': 'rem', 'value': 2.875 }],
    'height': [{ 'unit': 'rem', 'value': 2.875 }]
  },
  'btn-group-lg > btn-xingiconbtn': {
    'width': [{ 'unit': 'rem', 'value': 2.875 }],
    'height': [{ 'unit': 'rem', 'value': 2.875 }]
  },
  'btn-githubbtn-lgicon': {
    'width': [{ 'unit': 'rem', 'value': 2.875 }],
    'height': [{ 'unit': 'rem', 'value': 2.875 }]
  },
  'btn-group-lg > btn-githubiconbtn': {
    'width': [{ 'unit': 'rem', 'value': 2.875 }],
    'height': [{ 'unit': 'rem', 'value': 2.875 }]
  },
  'btn-html5btn-lgicon': {
    'width': [{ 'unit': 'rem', 'value': 2.875 }],
    'height': [{ 'unit': 'rem', 'value': 2.875 }]
  },
  'btn-group-lg > btn-html5iconbtn': {
    'width': [{ 'unit': 'rem', 'value': 2.875 }],
    'height': [{ 'unit': 'rem', 'value': 2.875 }]
  },
  'btn-openidbtn-lgicon': {
    'width': [{ 'unit': 'rem', 'value': 2.875 }],
    'height': [{ 'unit': 'rem', 'value': 2.875 }]
  },
  'btn-group-lg > btn-openidiconbtn': {
    'width': [{ 'unit': 'rem', 'value': 2.875 }],
    'height': [{ 'unit': 'rem', 'value': 2.875 }]
  },
  'btn-stack-overflowbtn-lgicon': {
    'width': [{ 'unit': 'rem', 'value': 2.875 }],
    'height': [{ 'unit': 'rem', 'value': 2.875 }]
  },
  'btn-group-lg > btn-stack-overflowiconbtn': {
    'width': [{ 'unit': 'rem', 'value': 2.875 }],
    'height': [{ 'unit': 'rem', 'value': 2.875 }]
  },
  'btn-youtubebtn-lgicon': {
    'width': [{ 'unit': 'rem', 'value': 2.875 }],
    'height': [{ 'unit': 'rem', 'value': 2.875 }]
  },
  'btn-group-lg > btn-youtubeiconbtn': {
    'width': [{ 'unit': 'rem', 'value': 2.875 }],
    'height': [{ 'unit': 'rem', 'value': 2.875 }]
  },
  'btn-css3btn-lgicon': {
    'width': [{ 'unit': 'rem', 'value': 2.875 }],
    'height': [{ 'unit': 'rem', 'value': 2.875 }]
  },
  'btn-group-lg > btn-css3iconbtn': {
    'width': [{ 'unit': 'rem', 'value': 2.875 }],
    'height': [{ 'unit': 'rem', 'value': 2.875 }]
  },
  'btn-dribbblebtn-lgicon': {
    'width': [{ 'unit': 'rem', 'value': 2.875 }],
    'height': [{ 'unit': 'rem', 'value': 2.875 }]
  },
  'btn-group-lg > btn-dribbbleiconbtn': {
    'width': [{ 'unit': 'rem', 'value': 2.875 }],
    'height': [{ 'unit': 'rem', 'value': 2.875 }]
  },
  'btn-google-plusbtn-lgicon': {
    'width': [{ 'unit': 'rem', 'value': 2.875 }],
    'height': [{ 'unit': 'rem', 'value': 2.875 }]
  },
  'btn-group-lg > btn-google-plusiconbtn': {
    'width': [{ 'unit': 'rem', 'value': 2.875 }],
    'height': [{ 'unit': 'rem', 'value': 2.875 }]
  },
  'btn-instagrambtn-lgicon': {
    'width': [{ 'unit': 'rem', 'value': 2.875 }],
    'height': [{ 'unit': 'rem', 'value': 2.875 }]
  },
  'btn-group-lg > btn-instagramiconbtn': {
    'width': [{ 'unit': 'rem', 'value': 2.875 }],
    'height': [{ 'unit': 'rem', 'value': 2.875 }]
  },
  'btn-pinterestbtn-lgicon': {
    'width': [{ 'unit': 'rem', 'value': 2.875 }],
    'height': [{ 'unit': 'rem', 'value': 2.875 }]
  },
  'btn-group-lg > btn-pinteresticonbtn': {
    'width': [{ 'unit': 'rem', 'value': 2.875 }],
    'height': [{ 'unit': 'rem', 'value': 2.875 }]
  },
  'btn-vkbtn-lgicon': {
    'width': [{ 'unit': 'rem', 'value': 2.875 }],
    'height': [{ 'unit': 'rem', 'value': 2.875 }]
  },
  'btn-group-lg > btn-vkiconbtn': {
    'width': [{ 'unit': 'rem', 'value': 2.875 }],
    'height': [{ 'unit': 'rem', 'value': 2.875 }]
  },
  'btn-yahoobtn-lgicon': {
    'width': [{ 'unit': 'rem', 'value': 2.875 }],
    'height': [{ 'unit': 'rem', 'value': 2.875 }]
  },
  'btn-group-lg > btn-yahooiconbtn': {
    'width': [{ 'unit': 'rem', 'value': 2.875 }],
    'height': [{ 'unit': 'rem', 'value': 2.875 }]
  },
  'btn-behancebtn-lgicon': {
    'width': [{ 'unit': 'rem', 'value': 2.875 }],
    'height': [{ 'unit': 'rem', 'value': 2.875 }]
  },
  'btn-group-lg > btn-behanceiconbtn': {
    'width': [{ 'unit': 'rem', 'value': 2.875 }],
    'height': [{ 'unit': 'rem', 'value': 2.875 }]
  },
  'btn-dropboxbtn-lgicon': {
    'width': [{ 'unit': 'rem', 'value': 2.875 }],
    'height': [{ 'unit': 'rem', 'value': 2.875 }]
  },
  'btn-group-lg > btn-dropboxiconbtn': {
    'width': [{ 'unit': 'rem', 'value': 2.875 }],
    'height': [{ 'unit': 'rem', 'value': 2.875 }]
  },
  'btn-redditbtn-lgicon': {
    'width': [{ 'unit': 'rem', 'value': 2.875 }],
    'height': [{ 'unit': 'rem', 'value': 2.875 }]
  },
  'btn-group-lg > btn-redditiconbtn': {
    'width': [{ 'unit': 'rem', 'value': 2.875 }],
    'height': [{ 'unit': 'rem', 'value': 2.875 }]
  },
  'btn-spotifybtn-lgicon': {
    'width': [{ 'unit': 'rem', 'value': 2.875 }],
    'height': [{ 'unit': 'rem', 'value': 2.875 }]
  },
  'btn-group-lg > btn-spotifyiconbtn': {
    'width': [{ 'unit': 'rem', 'value': 2.875 }],
    'height': [{ 'unit': 'rem', 'value': 2.875 }]
  },
  'btn-vinebtn-lgicon': {
    'width': [{ 'unit': 'rem', 'value': 2.875 }],
    'height': [{ 'unit': 'rem', 'value': 2.875 }]
  },
  'btn-group-lg > btn-vineiconbtn': {
    'width': [{ 'unit': 'rem', 'value': 2.875 }],
    'height': [{ 'unit': 'rem', 'value': 2.875 }]
  },
  'btn-foursquarebtn-lgicon': {
    'width': [{ 'unit': 'rem', 'value': 2.875 }],
    'height': [{ 'unit': 'rem', 'value': 2.875 }]
  },
  'btn-group-lg > btn-foursquareiconbtn': {
    'width': [{ 'unit': 'rem', 'value': 2.875 }],
    'height': [{ 'unit': 'rem', 'value': 2.875 }]
  },
  'btn-vimeobtn-lgicon': {
    'width': [{ 'unit': 'rem', 'value': 2.875 }],
    'height': [{ 'unit': 'rem', 'value': 2.875 }]
  },
  'btn-group-lg > btn-vimeoiconbtn': {
    'width': [{ 'unit': 'rem', 'value': 2.875 }],
    'height': [{ 'unit': 'rem', 'value': 2.875 }]
  },
  'btn-facebookbtn-sm': {
    'padding': [{ 'unit': 'rem', 'value': 0.25 }, { 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 0.25 }, { 'unit': 'rem', 'value': 0.5 }],
    'fontSize': [{ 'unit': 'rem', 'value': 0.875 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }],
    'border': [{ 'unit': 'px', 'value': 0 }]
  },
  'btn-group-sm > btn-facebookbtn': {
    'padding': [{ 'unit': 'rem', 'value': 0.25 }, { 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 0.25 }, { 'unit': 'rem', 'value': 0.5 }],
    'fontSize': [{ 'unit': 'rem', 'value': 0.875 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }],
    'border': [{ 'unit': 'px', 'value': 0 }]
  },
  'btn-twitterbtn-sm': {
    'padding': [{ 'unit': 'rem', 'value': 0.25 }, { 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 0.25 }, { 'unit': 'rem', 'value': 0.5 }],
    'fontSize': [{ 'unit': 'rem', 'value': 0.875 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }],
    'border': [{ 'unit': 'px', 'value': 0 }]
  },
  'btn-group-sm > btn-twitterbtn': {
    'padding': [{ 'unit': 'rem', 'value': 0.25 }, { 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 0.25 }, { 'unit': 'rem', 'value': 0.5 }],
    'fontSize': [{ 'unit': 'rem', 'value': 0.875 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }],
    'border': [{ 'unit': 'px', 'value': 0 }]
  },
  'btn-linkedinbtn-sm': {
    'padding': [{ 'unit': 'rem', 'value': 0.25 }, { 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 0.25 }, { 'unit': 'rem', 'value': 0.5 }],
    'fontSize': [{ 'unit': 'rem', 'value': 0.875 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }],
    'border': [{ 'unit': 'px', 'value': 0 }]
  },
  'btn-group-sm > btn-linkedinbtn': {
    'padding': [{ 'unit': 'rem', 'value': 0.25 }, { 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 0.25 }, { 'unit': 'rem', 'value': 0.5 }],
    'fontSize': [{ 'unit': 'rem', 'value': 0.875 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }],
    'border': [{ 'unit': 'px', 'value': 0 }]
  },
  'btn-flickrbtn-sm': {
    'padding': [{ 'unit': 'rem', 'value': 0.25 }, { 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 0.25 }, { 'unit': 'rem', 'value': 0.5 }],
    'fontSize': [{ 'unit': 'rem', 'value': 0.875 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }],
    'border': [{ 'unit': 'px', 'value': 0 }]
  },
  'btn-group-sm > btn-flickrbtn': {
    'padding': [{ 'unit': 'rem', 'value': 0.25 }, { 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 0.25 }, { 'unit': 'rem', 'value': 0.5 }],
    'fontSize': [{ 'unit': 'rem', 'value': 0.875 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }],
    'border': [{ 'unit': 'px', 'value': 0 }]
  },
  'btn-tumblrbtn-sm': {
    'padding': [{ 'unit': 'rem', 'value': 0.25 }, { 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 0.25 }, { 'unit': 'rem', 'value': 0.5 }],
    'fontSize': [{ 'unit': 'rem', 'value': 0.875 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }],
    'border': [{ 'unit': 'px', 'value': 0 }]
  },
  'btn-group-sm > btn-tumblrbtn': {
    'padding': [{ 'unit': 'rem', 'value': 0.25 }, { 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 0.25 }, { 'unit': 'rem', 'value': 0.5 }],
    'fontSize': [{ 'unit': 'rem', 'value': 0.875 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }],
    'border': [{ 'unit': 'px', 'value': 0 }]
  },
  'btn-xingbtn-sm': {
    'padding': [{ 'unit': 'rem', 'value': 0.25 }, { 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 0.25 }, { 'unit': 'rem', 'value': 0.5 }],
    'fontSize': [{ 'unit': 'rem', 'value': 0.875 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }],
    'border': [{ 'unit': 'px', 'value': 0 }]
  },
  'btn-group-sm > btn-xingbtn': {
    'padding': [{ 'unit': 'rem', 'value': 0.25 }, { 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 0.25 }, { 'unit': 'rem', 'value': 0.5 }],
    'fontSize': [{ 'unit': 'rem', 'value': 0.875 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }],
    'border': [{ 'unit': 'px', 'value': 0 }]
  },
  'btn-githubbtn-sm': {
    'padding': [{ 'unit': 'rem', 'value': 0.25 }, { 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 0.25 }, { 'unit': 'rem', 'value': 0.5 }],
    'fontSize': [{ 'unit': 'rem', 'value': 0.875 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }],
    'border': [{ 'unit': 'px', 'value': 0 }]
  },
  'btn-group-sm > btn-githubbtn': {
    'padding': [{ 'unit': 'rem', 'value': 0.25 }, { 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 0.25 }, { 'unit': 'rem', 'value': 0.5 }],
    'fontSize': [{ 'unit': 'rem', 'value': 0.875 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }],
    'border': [{ 'unit': 'px', 'value': 0 }]
  },
  'btn-html5btn-sm': {
    'padding': [{ 'unit': 'rem', 'value': 0.25 }, { 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 0.25 }, { 'unit': 'rem', 'value': 0.5 }],
    'fontSize': [{ 'unit': 'rem', 'value': 0.875 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }],
    'border': [{ 'unit': 'px', 'value': 0 }]
  },
  'btn-group-sm > btn-html5btn': {
    'padding': [{ 'unit': 'rem', 'value': 0.25 }, { 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 0.25 }, { 'unit': 'rem', 'value': 0.5 }],
    'fontSize': [{ 'unit': 'rem', 'value': 0.875 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }],
    'border': [{ 'unit': 'px', 'value': 0 }]
  },
  'btn-openidbtn-sm': {
    'padding': [{ 'unit': 'rem', 'value': 0.25 }, { 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 0.25 }, { 'unit': 'rem', 'value': 0.5 }],
    'fontSize': [{ 'unit': 'rem', 'value': 0.875 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }],
    'border': [{ 'unit': 'px', 'value': 0 }]
  },
  'btn-group-sm > btn-openidbtn': {
    'padding': [{ 'unit': 'rem', 'value': 0.25 }, { 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 0.25 }, { 'unit': 'rem', 'value': 0.5 }],
    'fontSize': [{ 'unit': 'rem', 'value': 0.875 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }],
    'border': [{ 'unit': 'px', 'value': 0 }]
  },
  'btn-stack-overflowbtn-sm': {
    'padding': [{ 'unit': 'rem', 'value': 0.25 }, { 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 0.25 }, { 'unit': 'rem', 'value': 0.5 }],
    'fontSize': [{ 'unit': 'rem', 'value': 0.875 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }],
    'border': [{ 'unit': 'px', 'value': 0 }]
  },
  'btn-group-sm > btn-stack-overflowbtn': {
    'padding': [{ 'unit': 'rem', 'value': 0.25 }, { 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 0.25 }, { 'unit': 'rem', 'value': 0.5 }],
    'fontSize': [{ 'unit': 'rem', 'value': 0.875 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }],
    'border': [{ 'unit': 'px', 'value': 0 }]
  },
  'btn-youtubebtn-sm': {
    'padding': [{ 'unit': 'rem', 'value': 0.25 }, { 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 0.25 }, { 'unit': 'rem', 'value': 0.5 }],
    'fontSize': [{ 'unit': 'rem', 'value': 0.875 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }],
    'border': [{ 'unit': 'px', 'value': 0 }]
  },
  'btn-group-sm > btn-youtubebtn': {
    'padding': [{ 'unit': 'rem', 'value': 0.25 }, { 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 0.25 }, { 'unit': 'rem', 'value': 0.5 }],
    'fontSize': [{ 'unit': 'rem', 'value': 0.875 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }],
    'border': [{ 'unit': 'px', 'value': 0 }]
  },
  'btn-css3btn-sm': {
    'padding': [{ 'unit': 'rem', 'value': 0.25 }, { 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 0.25 }, { 'unit': 'rem', 'value': 0.5 }],
    'fontSize': [{ 'unit': 'rem', 'value': 0.875 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }],
    'border': [{ 'unit': 'px', 'value': 0 }]
  },
  'btn-group-sm > btn-css3btn': {
    'padding': [{ 'unit': 'rem', 'value': 0.25 }, { 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 0.25 }, { 'unit': 'rem', 'value': 0.5 }],
    'fontSize': [{ 'unit': 'rem', 'value': 0.875 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }],
    'border': [{ 'unit': 'px', 'value': 0 }]
  },
  'btn-dribbblebtn-sm': {
    'padding': [{ 'unit': 'rem', 'value': 0.25 }, { 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 0.25 }, { 'unit': 'rem', 'value': 0.5 }],
    'fontSize': [{ 'unit': 'rem', 'value': 0.875 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }],
    'border': [{ 'unit': 'px', 'value': 0 }]
  },
  'btn-group-sm > btn-dribbblebtn': {
    'padding': [{ 'unit': 'rem', 'value': 0.25 }, { 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 0.25 }, { 'unit': 'rem', 'value': 0.5 }],
    'fontSize': [{ 'unit': 'rem', 'value': 0.875 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }],
    'border': [{ 'unit': 'px', 'value': 0 }]
  },
  'btn-google-plusbtn-sm': {
    'padding': [{ 'unit': 'rem', 'value': 0.25 }, { 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 0.25 }, { 'unit': 'rem', 'value': 0.5 }],
    'fontSize': [{ 'unit': 'rem', 'value': 0.875 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }],
    'border': [{ 'unit': 'px', 'value': 0 }]
  },
  'btn-group-sm > btn-google-plusbtn': {
    'padding': [{ 'unit': 'rem', 'value': 0.25 }, { 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 0.25 }, { 'unit': 'rem', 'value': 0.5 }],
    'fontSize': [{ 'unit': 'rem', 'value': 0.875 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }],
    'border': [{ 'unit': 'px', 'value': 0 }]
  },
  'btn-instagrambtn-sm': {
    'padding': [{ 'unit': 'rem', 'value': 0.25 }, { 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 0.25 }, { 'unit': 'rem', 'value': 0.5 }],
    'fontSize': [{ 'unit': 'rem', 'value': 0.875 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }],
    'border': [{ 'unit': 'px', 'value': 0 }]
  },
  'btn-group-sm > btn-instagrambtn': {
    'padding': [{ 'unit': 'rem', 'value': 0.25 }, { 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 0.25 }, { 'unit': 'rem', 'value': 0.5 }],
    'fontSize': [{ 'unit': 'rem', 'value': 0.875 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }],
    'border': [{ 'unit': 'px', 'value': 0 }]
  },
  'btn-pinterestbtn-sm': {
    'padding': [{ 'unit': 'rem', 'value': 0.25 }, { 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 0.25 }, { 'unit': 'rem', 'value': 0.5 }],
    'fontSize': [{ 'unit': 'rem', 'value': 0.875 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }],
    'border': [{ 'unit': 'px', 'value': 0 }]
  },
  'btn-group-sm > btn-pinterestbtn': {
    'padding': [{ 'unit': 'rem', 'value': 0.25 }, { 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 0.25 }, { 'unit': 'rem', 'value': 0.5 }],
    'fontSize': [{ 'unit': 'rem', 'value': 0.875 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }],
    'border': [{ 'unit': 'px', 'value': 0 }]
  },
  'btn-vkbtn-sm': {
    'padding': [{ 'unit': 'rem', 'value': 0.25 }, { 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 0.25 }, { 'unit': 'rem', 'value': 0.5 }],
    'fontSize': [{ 'unit': 'rem', 'value': 0.875 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }],
    'border': [{ 'unit': 'px', 'value': 0 }]
  },
  'btn-group-sm > btn-vkbtn': {
    'padding': [{ 'unit': 'rem', 'value': 0.25 }, { 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 0.25 }, { 'unit': 'rem', 'value': 0.5 }],
    'fontSize': [{ 'unit': 'rem', 'value': 0.875 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }],
    'border': [{ 'unit': 'px', 'value': 0 }]
  },
  'btn-yahoobtn-sm': {
    'padding': [{ 'unit': 'rem', 'value': 0.25 }, { 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 0.25 }, { 'unit': 'rem', 'value': 0.5 }],
    'fontSize': [{ 'unit': 'rem', 'value': 0.875 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }],
    'border': [{ 'unit': 'px', 'value': 0 }]
  },
  'btn-group-sm > btn-yahoobtn': {
    'padding': [{ 'unit': 'rem', 'value': 0.25 }, { 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 0.25 }, { 'unit': 'rem', 'value': 0.5 }],
    'fontSize': [{ 'unit': 'rem', 'value': 0.875 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }],
    'border': [{ 'unit': 'px', 'value': 0 }]
  },
  'btn-behancebtn-sm': {
    'padding': [{ 'unit': 'rem', 'value': 0.25 }, { 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 0.25 }, { 'unit': 'rem', 'value': 0.5 }],
    'fontSize': [{ 'unit': 'rem', 'value': 0.875 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }],
    'border': [{ 'unit': 'px', 'value': 0 }]
  },
  'btn-group-sm > btn-behancebtn': {
    'padding': [{ 'unit': 'rem', 'value': 0.25 }, { 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 0.25 }, { 'unit': 'rem', 'value': 0.5 }],
    'fontSize': [{ 'unit': 'rem', 'value': 0.875 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }],
    'border': [{ 'unit': 'px', 'value': 0 }]
  },
  'btn-dropboxbtn-sm': {
    'padding': [{ 'unit': 'rem', 'value': 0.25 }, { 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 0.25 }, { 'unit': 'rem', 'value': 0.5 }],
    'fontSize': [{ 'unit': 'rem', 'value': 0.875 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }],
    'border': [{ 'unit': 'px', 'value': 0 }]
  },
  'btn-group-sm > btn-dropboxbtn': {
    'padding': [{ 'unit': 'rem', 'value': 0.25 }, { 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 0.25 }, { 'unit': 'rem', 'value': 0.5 }],
    'fontSize': [{ 'unit': 'rem', 'value': 0.875 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }],
    'border': [{ 'unit': 'px', 'value': 0 }]
  },
  'btn-redditbtn-sm': {
    'padding': [{ 'unit': 'rem', 'value': 0.25 }, { 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 0.25 }, { 'unit': 'rem', 'value': 0.5 }],
    'fontSize': [{ 'unit': 'rem', 'value': 0.875 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }],
    'border': [{ 'unit': 'px', 'value': 0 }]
  },
  'btn-group-sm > btn-redditbtn': {
    'padding': [{ 'unit': 'rem', 'value': 0.25 }, { 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 0.25 }, { 'unit': 'rem', 'value': 0.5 }],
    'fontSize': [{ 'unit': 'rem', 'value': 0.875 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }],
    'border': [{ 'unit': 'px', 'value': 0 }]
  },
  'btn-spotifybtn-sm': {
    'padding': [{ 'unit': 'rem', 'value': 0.25 }, { 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 0.25 }, { 'unit': 'rem', 'value': 0.5 }],
    'fontSize': [{ 'unit': 'rem', 'value': 0.875 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }],
    'border': [{ 'unit': 'px', 'value': 0 }]
  },
  'btn-group-sm > btn-spotifybtn': {
    'padding': [{ 'unit': 'rem', 'value': 0.25 }, { 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 0.25 }, { 'unit': 'rem', 'value': 0.5 }],
    'fontSize': [{ 'unit': 'rem', 'value': 0.875 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }],
    'border': [{ 'unit': 'px', 'value': 0 }]
  },
  'btn-vinebtn-sm': {
    'padding': [{ 'unit': 'rem', 'value': 0.25 }, { 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 0.25 }, { 'unit': 'rem', 'value': 0.5 }],
    'fontSize': [{ 'unit': 'rem', 'value': 0.875 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }],
    'border': [{ 'unit': 'px', 'value': 0 }]
  },
  'btn-group-sm > btn-vinebtn': {
    'padding': [{ 'unit': 'rem', 'value': 0.25 }, { 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 0.25 }, { 'unit': 'rem', 'value': 0.5 }],
    'fontSize': [{ 'unit': 'rem', 'value': 0.875 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }],
    'border': [{ 'unit': 'px', 'value': 0 }]
  },
  'btn-foursquarebtn-sm': {
    'padding': [{ 'unit': 'rem', 'value': 0.25 }, { 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 0.25 }, { 'unit': 'rem', 'value': 0.5 }],
    'fontSize': [{ 'unit': 'rem', 'value': 0.875 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }],
    'border': [{ 'unit': 'px', 'value': 0 }]
  },
  'btn-group-sm > btn-foursquarebtn': {
    'padding': [{ 'unit': 'rem', 'value': 0.25 }, { 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 0.25 }, { 'unit': 'rem', 'value': 0.5 }],
    'fontSize': [{ 'unit': 'rem', 'value': 0.875 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }],
    'border': [{ 'unit': 'px', 'value': 0 }]
  },
  'btn-vimeobtn-sm': {
    'padding': [{ 'unit': 'rem', 'value': 0.25 }, { 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 0.25 }, { 'unit': 'rem', 'value': 0.5 }],
    'fontSize': [{ 'unit': 'rem', 'value': 0.875 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }],
    'border': [{ 'unit': 'px', 'value': 0 }]
  },
  'btn-group-sm > btn-vimeobtn': {
    'padding': [{ 'unit': 'rem', 'value': 0.25 }, { 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 0.25 }, { 'unit': 'rem', 'value': 0.5 }],
    'fontSize': [{ 'unit': 'rem', 'value': 0.875 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }],
    'border': [{ 'unit': 'px', 'value': 0 }]
  },
  'btn-facebookbtn-sm::before': {
    'width': [{ 'unit': 'rem', 'value': 1.8125 }],
    'height': [{ 'unit': 'rem', 'value': 1.8125 }],
    'padding': [{ 'unit': 'rem', 'value': 0.25 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 0.25 }, { 'unit': 'px', 'value': 0 }],
    'fontSize': [{ 'unit': 'rem', 'value': 0.875 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }]
  },
  'btn-group-sm > btn-facebookbtn::before': {
    'width': [{ 'unit': 'rem', 'value': 1.8125 }],
    'height': [{ 'unit': 'rem', 'value': 1.8125 }],
    'padding': [{ 'unit': 'rem', 'value': 0.25 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 0.25 }, { 'unit': 'px', 'value': 0 }],
    'fontSize': [{ 'unit': 'rem', 'value': 0.875 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }]
  },
  'btn-twitterbtn-sm::before': {
    'width': [{ 'unit': 'rem', 'value': 1.8125 }],
    'height': [{ 'unit': 'rem', 'value': 1.8125 }],
    'padding': [{ 'unit': 'rem', 'value': 0.25 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 0.25 }, { 'unit': 'px', 'value': 0 }],
    'fontSize': [{ 'unit': 'rem', 'value': 0.875 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }]
  },
  'btn-group-sm > btn-twitterbtn::before': {
    'width': [{ 'unit': 'rem', 'value': 1.8125 }],
    'height': [{ 'unit': 'rem', 'value': 1.8125 }],
    'padding': [{ 'unit': 'rem', 'value': 0.25 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 0.25 }, { 'unit': 'px', 'value': 0 }],
    'fontSize': [{ 'unit': 'rem', 'value': 0.875 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }]
  },
  'btn-linkedinbtn-sm::before': {
    'width': [{ 'unit': 'rem', 'value': 1.8125 }],
    'height': [{ 'unit': 'rem', 'value': 1.8125 }],
    'padding': [{ 'unit': 'rem', 'value': 0.25 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 0.25 }, { 'unit': 'px', 'value': 0 }],
    'fontSize': [{ 'unit': 'rem', 'value': 0.875 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }]
  },
  'btn-group-sm > btn-linkedinbtn::before': {
    'width': [{ 'unit': 'rem', 'value': 1.8125 }],
    'height': [{ 'unit': 'rem', 'value': 1.8125 }],
    'padding': [{ 'unit': 'rem', 'value': 0.25 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 0.25 }, { 'unit': 'px', 'value': 0 }],
    'fontSize': [{ 'unit': 'rem', 'value': 0.875 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }]
  },
  'btn-flickrbtn-sm::before': {
    'width': [{ 'unit': 'rem', 'value': 1.8125 }],
    'height': [{ 'unit': 'rem', 'value': 1.8125 }],
    'padding': [{ 'unit': 'rem', 'value': 0.25 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 0.25 }, { 'unit': 'px', 'value': 0 }],
    'fontSize': [{ 'unit': 'rem', 'value': 0.875 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }]
  },
  'btn-group-sm > btn-flickrbtn::before': {
    'width': [{ 'unit': 'rem', 'value': 1.8125 }],
    'height': [{ 'unit': 'rem', 'value': 1.8125 }],
    'padding': [{ 'unit': 'rem', 'value': 0.25 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 0.25 }, { 'unit': 'px', 'value': 0 }],
    'fontSize': [{ 'unit': 'rem', 'value': 0.875 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }]
  },
  'btn-tumblrbtn-sm::before': {
    'width': [{ 'unit': 'rem', 'value': 1.8125 }],
    'height': [{ 'unit': 'rem', 'value': 1.8125 }],
    'padding': [{ 'unit': 'rem', 'value': 0.25 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 0.25 }, { 'unit': 'px', 'value': 0 }],
    'fontSize': [{ 'unit': 'rem', 'value': 0.875 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }]
  },
  'btn-group-sm > btn-tumblrbtn::before': {
    'width': [{ 'unit': 'rem', 'value': 1.8125 }],
    'height': [{ 'unit': 'rem', 'value': 1.8125 }],
    'padding': [{ 'unit': 'rem', 'value': 0.25 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 0.25 }, { 'unit': 'px', 'value': 0 }],
    'fontSize': [{ 'unit': 'rem', 'value': 0.875 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }]
  },
  'btn-xingbtn-sm::before': {
    'width': [{ 'unit': 'rem', 'value': 1.8125 }],
    'height': [{ 'unit': 'rem', 'value': 1.8125 }],
    'padding': [{ 'unit': 'rem', 'value': 0.25 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 0.25 }, { 'unit': 'px', 'value': 0 }],
    'fontSize': [{ 'unit': 'rem', 'value': 0.875 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }]
  },
  'btn-group-sm > btn-xingbtn::before': {
    'width': [{ 'unit': 'rem', 'value': 1.8125 }],
    'height': [{ 'unit': 'rem', 'value': 1.8125 }],
    'padding': [{ 'unit': 'rem', 'value': 0.25 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 0.25 }, { 'unit': 'px', 'value': 0 }],
    'fontSize': [{ 'unit': 'rem', 'value': 0.875 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }]
  },
  'btn-githubbtn-sm::before': {
    'width': [{ 'unit': 'rem', 'value': 1.8125 }],
    'height': [{ 'unit': 'rem', 'value': 1.8125 }],
    'padding': [{ 'unit': 'rem', 'value': 0.25 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 0.25 }, { 'unit': 'px', 'value': 0 }],
    'fontSize': [{ 'unit': 'rem', 'value': 0.875 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }]
  },
  'btn-group-sm > btn-githubbtn::before': {
    'width': [{ 'unit': 'rem', 'value': 1.8125 }],
    'height': [{ 'unit': 'rem', 'value': 1.8125 }],
    'padding': [{ 'unit': 'rem', 'value': 0.25 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 0.25 }, { 'unit': 'px', 'value': 0 }],
    'fontSize': [{ 'unit': 'rem', 'value': 0.875 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }]
  },
  'btn-html5btn-sm::before': {
    'width': [{ 'unit': 'rem', 'value': 1.8125 }],
    'height': [{ 'unit': 'rem', 'value': 1.8125 }],
    'padding': [{ 'unit': 'rem', 'value': 0.25 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 0.25 }, { 'unit': 'px', 'value': 0 }],
    'fontSize': [{ 'unit': 'rem', 'value': 0.875 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }]
  },
  'btn-group-sm > btn-html5btn::before': {
    'width': [{ 'unit': 'rem', 'value': 1.8125 }],
    'height': [{ 'unit': 'rem', 'value': 1.8125 }],
    'padding': [{ 'unit': 'rem', 'value': 0.25 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 0.25 }, { 'unit': 'px', 'value': 0 }],
    'fontSize': [{ 'unit': 'rem', 'value': 0.875 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }]
  },
  'btn-openidbtn-sm::before': {
    'width': [{ 'unit': 'rem', 'value': 1.8125 }],
    'height': [{ 'unit': 'rem', 'value': 1.8125 }],
    'padding': [{ 'unit': 'rem', 'value': 0.25 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 0.25 }, { 'unit': 'px', 'value': 0 }],
    'fontSize': [{ 'unit': 'rem', 'value': 0.875 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }]
  },
  'btn-group-sm > btn-openidbtn::before': {
    'width': [{ 'unit': 'rem', 'value': 1.8125 }],
    'height': [{ 'unit': 'rem', 'value': 1.8125 }],
    'padding': [{ 'unit': 'rem', 'value': 0.25 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 0.25 }, { 'unit': 'px', 'value': 0 }],
    'fontSize': [{ 'unit': 'rem', 'value': 0.875 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }]
  },
  'btn-stack-overflowbtn-sm::before': {
    'width': [{ 'unit': 'rem', 'value': 1.8125 }],
    'height': [{ 'unit': 'rem', 'value': 1.8125 }],
    'padding': [{ 'unit': 'rem', 'value': 0.25 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 0.25 }, { 'unit': 'px', 'value': 0 }],
    'fontSize': [{ 'unit': 'rem', 'value': 0.875 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }]
  },
  'btn-group-sm > btn-stack-overflowbtn::before': {
    'width': [{ 'unit': 'rem', 'value': 1.8125 }],
    'height': [{ 'unit': 'rem', 'value': 1.8125 }],
    'padding': [{ 'unit': 'rem', 'value': 0.25 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 0.25 }, { 'unit': 'px', 'value': 0 }],
    'fontSize': [{ 'unit': 'rem', 'value': 0.875 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }]
  },
  'btn-youtubebtn-sm::before': {
    'width': [{ 'unit': 'rem', 'value': 1.8125 }],
    'height': [{ 'unit': 'rem', 'value': 1.8125 }],
    'padding': [{ 'unit': 'rem', 'value': 0.25 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 0.25 }, { 'unit': 'px', 'value': 0 }],
    'fontSize': [{ 'unit': 'rem', 'value': 0.875 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }]
  },
  'btn-group-sm > btn-youtubebtn::before': {
    'width': [{ 'unit': 'rem', 'value': 1.8125 }],
    'height': [{ 'unit': 'rem', 'value': 1.8125 }],
    'padding': [{ 'unit': 'rem', 'value': 0.25 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 0.25 }, { 'unit': 'px', 'value': 0 }],
    'fontSize': [{ 'unit': 'rem', 'value': 0.875 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }]
  },
  'btn-css3btn-sm::before': {
    'width': [{ 'unit': 'rem', 'value': 1.8125 }],
    'height': [{ 'unit': 'rem', 'value': 1.8125 }],
    'padding': [{ 'unit': 'rem', 'value': 0.25 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 0.25 }, { 'unit': 'px', 'value': 0 }],
    'fontSize': [{ 'unit': 'rem', 'value': 0.875 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }]
  },
  'btn-group-sm > btn-css3btn::before': {
    'width': [{ 'unit': 'rem', 'value': 1.8125 }],
    'height': [{ 'unit': 'rem', 'value': 1.8125 }],
    'padding': [{ 'unit': 'rem', 'value': 0.25 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 0.25 }, { 'unit': 'px', 'value': 0 }],
    'fontSize': [{ 'unit': 'rem', 'value': 0.875 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }]
  },
  'btn-dribbblebtn-sm::before': {
    'width': [{ 'unit': 'rem', 'value': 1.8125 }],
    'height': [{ 'unit': 'rem', 'value': 1.8125 }],
    'padding': [{ 'unit': 'rem', 'value': 0.25 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 0.25 }, { 'unit': 'px', 'value': 0 }],
    'fontSize': [{ 'unit': 'rem', 'value': 0.875 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }]
  },
  'btn-group-sm > btn-dribbblebtn::before': {
    'width': [{ 'unit': 'rem', 'value': 1.8125 }],
    'height': [{ 'unit': 'rem', 'value': 1.8125 }],
    'padding': [{ 'unit': 'rem', 'value': 0.25 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 0.25 }, { 'unit': 'px', 'value': 0 }],
    'fontSize': [{ 'unit': 'rem', 'value': 0.875 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }]
  },
  'btn-google-plusbtn-sm::before': {
    'width': [{ 'unit': 'rem', 'value': 1.8125 }],
    'height': [{ 'unit': 'rem', 'value': 1.8125 }],
    'padding': [{ 'unit': 'rem', 'value': 0.25 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 0.25 }, { 'unit': 'px', 'value': 0 }],
    'fontSize': [{ 'unit': 'rem', 'value': 0.875 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }]
  },
  'btn-group-sm > btn-google-plusbtn::before': {
    'width': [{ 'unit': 'rem', 'value': 1.8125 }],
    'height': [{ 'unit': 'rem', 'value': 1.8125 }],
    'padding': [{ 'unit': 'rem', 'value': 0.25 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 0.25 }, { 'unit': 'px', 'value': 0 }],
    'fontSize': [{ 'unit': 'rem', 'value': 0.875 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }]
  },
  'btn-instagrambtn-sm::before': {
    'width': [{ 'unit': 'rem', 'value': 1.8125 }],
    'height': [{ 'unit': 'rem', 'value': 1.8125 }],
    'padding': [{ 'unit': 'rem', 'value': 0.25 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 0.25 }, { 'unit': 'px', 'value': 0 }],
    'fontSize': [{ 'unit': 'rem', 'value': 0.875 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }]
  },
  'btn-group-sm > btn-instagrambtn::before': {
    'width': [{ 'unit': 'rem', 'value': 1.8125 }],
    'height': [{ 'unit': 'rem', 'value': 1.8125 }],
    'padding': [{ 'unit': 'rem', 'value': 0.25 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 0.25 }, { 'unit': 'px', 'value': 0 }],
    'fontSize': [{ 'unit': 'rem', 'value': 0.875 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }]
  },
  'btn-pinterestbtn-sm::before': {
    'width': [{ 'unit': 'rem', 'value': 1.8125 }],
    'height': [{ 'unit': 'rem', 'value': 1.8125 }],
    'padding': [{ 'unit': 'rem', 'value': 0.25 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 0.25 }, { 'unit': 'px', 'value': 0 }],
    'fontSize': [{ 'unit': 'rem', 'value': 0.875 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }]
  },
  'btn-group-sm > btn-pinterestbtn::before': {
    'width': [{ 'unit': 'rem', 'value': 1.8125 }],
    'height': [{ 'unit': 'rem', 'value': 1.8125 }],
    'padding': [{ 'unit': 'rem', 'value': 0.25 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 0.25 }, { 'unit': 'px', 'value': 0 }],
    'fontSize': [{ 'unit': 'rem', 'value': 0.875 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }]
  },
  'btn-vkbtn-sm::before': {
    'width': [{ 'unit': 'rem', 'value': 1.8125 }],
    'height': [{ 'unit': 'rem', 'value': 1.8125 }],
    'padding': [{ 'unit': 'rem', 'value': 0.25 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 0.25 }, { 'unit': 'px', 'value': 0 }],
    'fontSize': [{ 'unit': 'rem', 'value': 0.875 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }]
  },
  'btn-group-sm > btn-vkbtn::before': {
    'width': [{ 'unit': 'rem', 'value': 1.8125 }],
    'height': [{ 'unit': 'rem', 'value': 1.8125 }],
    'padding': [{ 'unit': 'rem', 'value': 0.25 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 0.25 }, { 'unit': 'px', 'value': 0 }],
    'fontSize': [{ 'unit': 'rem', 'value': 0.875 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }]
  },
  'btn-yahoobtn-sm::before': {
    'width': [{ 'unit': 'rem', 'value': 1.8125 }],
    'height': [{ 'unit': 'rem', 'value': 1.8125 }],
    'padding': [{ 'unit': 'rem', 'value': 0.25 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 0.25 }, { 'unit': 'px', 'value': 0 }],
    'fontSize': [{ 'unit': 'rem', 'value': 0.875 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }]
  },
  'btn-group-sm > btn-yahoobtn::before': {
    'width': [{ 'unit': 'rem', 'value': 1.8125 }],
    'height': [{ 'unit': 'rem', 'value': 1.8125 }],
    'padding': [{ 'unit': 'rem', 'value': 0.25 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 0.25 }, { 'unit': 'px', 'value': 0 }],
    'fontSize': [{ 'unit': 'rem', 'value': 0.875 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }]
  },
  'btn-behancebtn-sm::before': {
    'width': [{ 'unit': 'rem', 'value': 1.8125 }],
    'height': [{ 'unit': 'rem', 'value': 1.8125 }],
    'padding': [{ 'unit': 'rem', 'value': 0.25 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 0.25 }, { 'unit': 'px', 'value': 0 }],
    'fontSize': [{ 'unit': 'rem', 'value': 0.875 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }]
  },
  'btn-group-sm > btn-behancebtn::before': {
    'width': [{ 'unit': 'rem', 'value': 1.8125 }],
    'height': [{ 'unit': 'rem', 'value': 1.8125 }],
    'padding': [{ 'unit': 'rem', 'value': 0.25 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 0.25 }, { 'unit': 'px', 'value': 0 }],
    'fontSize': [{ 'unit': 'rem', 'value': 0.875 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }]
  },
  'btn-dropboxbtn-sm::before': {
    'width': [{ 'unit': 'rem', 'value': 1.8125 }],
    'height': [{ 'unit': 'rem', 'value': 1.8125 }],
    'padding': [{ 'unit': 'rem', 'value': 0.25 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 0.25 }, { 'unit': 'px', 'value': 0 }],
    'fontSize': [{ 'unit': 'rem', 'value': 0.875 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }]
  },
  'btn-group-sm > btn-dropboxbtn::before': {
    'width': [{ 'unit': 'rem', 'value': 1.8125 }],
    'height': [{ 'unit': 'rem', 'value': 1.8125 }],
    'padding': [{ 'unit': 'rem', 'value': 0.25 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 0.25 }, { 'unit': 'px', 'value': 0 }],
    'fontSize': [{ 'unit': 'rem', 'value': 0.875 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }]
  },
  'btn-redditbtn-sm::before': {
    'width': [{ 'unit': 'rem', 'value': 1.8125 }],
    'height': [{ 'unit': 'rem', 'value': 1.8125 }],
    'padding': [{ 'unit': 'rem', 'value': 0.25 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 0.25 }, { 'unit': 'px', 'value': 0 }],
    'fontSize': [{ 'unit': 'rem', 'value': 0.875 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }]
  },
  'btn-group-sm > btn-redditbtn::before': {
    'width': [{ 'unit': 'rem', 'value': 1.8125 }],
    'height': [{ 'unit': 'rem', 'value': 1.8125 }],
    'padding': [{ 'unit': 'rem', 'value': 0.25 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 0.25 }, { 'unit': 'px', 'value': 0 }],
    'fontSize': [{ 'unit': 'rem', 'value': 0.875 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }]
  },
  'btn-spotifybtn-sm::before': {
    'width': [{ 'unit': 'rem', 'value': 1.8125 }],
    'height': [{ 'unit': 'rem', 'value': 1.8125 }],
    'padding': [{ 'unit': 'rem', 'value': 0.25 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 0.25 }, { 'unit': 'px', 'value': 0 }],
    'fontSize': [{ 'unit': 'rem', 'value': 0.875 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }]
  },
  'btn-group-sm > btn-spotifybtn::before': {
    'width': [{ 'unit': 'rem', 'value': 1.8125 }],
    'height': [{ 'unit': 'rem', 'value': 1.8125 }],
    'padding': [{ 'unit': 'rem', 'value': 0.25 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 0.25 }, { 'unit': 'px', 'value': 0 }],
    'fontSize': [{ 'unit': 'rem', 'value': 0.875 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }]
  },
  'btn-vinebtn-sm::before': {
    'width': [{ 'unit': 'rem', 'value': 1.8125 }],
    'height': [{ 'unit': 'rem', 'value': 1.8125 }],
    'padding': [{ 'unit': 'rem', 'value': 0.25 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 0.25 }, { 'unit': 'px', 'value': 0 }],
    'fontSize': [{ 'unit': 'rem', 'value': 0.875 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }]
  },
  'btn-group-sm > btn-vinebtn::before': {
    'width': [{ 'unit': 'rem', 'value': 1.8125 }],
    'height': [{ 'unit': 'rem', 'value': 1.8125 }],
    'padding': [{ 'unit': 'rem', 'value': 0.25 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 0.25 }, { 'unit': 'px', 'value': 0 }],
    'fontSize': [{ 'unit': 'rem', 'value': 0.875 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }]
  },
  'btn-foursquarebtn-sm::before': {
    'width': [{ 'unit': 'rem', 'value': 1.8125 }],
    'height': [{ 'unit': 'rem', 'value': 1.8125 }],
    'padding': [{ 'unit': 'rem', 'value': 0.25 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 0.25 }, { 'unit': 'px', 'value': 0 }],
    'fontSize': [{ 'unit': 'rem', 'value': 0.875 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }]
  },
  'btn-group-sm > btn-foursquarebtn::before': {
    'width': [{ 'unit': 'rem', 'value': 1.8125 }],
    'height': [{ 'unit': 'rem', 'value': 1.8125 }],
    'padding': [{ 'unit': 'rem', 'value': 0.25 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 0.25 }, { 'unit': 'px', 'value': 0 }],
    'fontSize': [{ 'unit': 'rem', 'value': 0.875 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }]
  },
  'btn-vimeobtn-sm::before': {
    'width': [{ 'unit': 'rem', 'value': 1.8125 }],
    'height': [{ 'unit': 'rem', 'value': 1.8125 }],
    'padding': [{ 'unit': 'rem', 'value': 0.25 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 0.25 }, { 'unit': 'px', 'value': 0 }],
    'fontSize': [{ 'unit': 'rem', 'value': 0.875 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }]
  },
  'btn-group-sm > btn-vimeobtn::before': {
    'width': [{ 'unit': 'rem', 'value': 1.8125 }],
    'height': [{ 'unit': 'rem', 'value': 1.8125 }],
    'padding': [{ 'unit': 'rem', 'value': 0.25 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 0.25 }, { 'unit': 'px', 'value': 0 }],
    'fontSize': [{ 'unit': 'rem', 'value': 0.875 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }]
  },
  'btn-facebookbtn-sm span': {
    'marginLeft': [{ 'unit': 'rem', 'value': 1.8125 }]
  },
  'btn-group-sm > btn-facebookbtn span': {
    'marginLeft': [{ 'unit': 'rem', 'value': 1.8125 }]
  },
  'btn-twitterbtn-sm span': {
    'marginLeft': [{ 'unit': 'rem', 'value': 1.8125 }]
  },
  'btn-group-sm > btn-twitterbtn span': {
    'marginLeft': [{ 'unit': 'rem', 'value': 1.8125 }]
  },
  'btn-linkedinbtn-sm span': {
    'marginLeft': [{ 'unit': 'rem', 'value': 1.8125 }]
  },
  'btn-group-sm > btn-linkedinbtn span': {
    'marginLeft': [{ 'unit': 'rem', 'value': 1.8125 }]
  },
  'btn-flickrbtn-sm span': {
    'marginLeft': [{ 'unit': 'rem', 'value': 1.8125 }]
  },
  'btn-group-sm > btn-flickrbtn span': {
    'marginLeft': [{ 'unit': 'rem', 'value': 1.8125 }]
  },
  'btn-tumblrbtn-sm span': {
    'marginLeft': [{ 'unit': 'rem', 'value': 1.8125 }]
  },
  'btn-group-sm > btn-tumblrbtn span': {
    'marginLeft': [{ 'unit': 'rem', 'value': 1.8125 }]
  },
  'btn-xingbtn-sm span': {
    'marginLeft': [{ 'unit': 'rem', 'value': 1.8125 }]
  },
  'btn-group-sm > btn-xingbtn span': {
    'marginLeft': [{ 'unit': 'rem', 'value': 1.8125 }]
  },
  'btn-githubbtn-sm span': {
    'marginLeft': [{ 'unit': 'rem', 'value': 1.8125 }]
  },
  'btn-group-sm > btn-githubbtn span': {
    'marginLeft': [{ 'unit': 'rem', 'value': 1.8125 }]
  },
  'btn-html5btn-sm span': {
    'marginLeft': [{ 'unit': 'rem', 'value': 1.8125 }]
  },
  'btn-group-sm > btn-html5btn span': {
    'marginLeft': [{ 'unit': 'rem', 'value': 1.8125 }]
  },
  'btn-openidbtn-sm span': {
    'marginLeft': [{ 'unit': 'rem', 'value': 1.8125 }]
  },
  'btn-group-sm > btn-openidbtn span': {
    'marginLeft': [{ 'unit': 'rem', 'value': 1.8125 }]
  },
  'btn-stack-overflowbtn-sm span': {
    'marginLeft': [{ 'unit': 'rem', 'value': 1.8125 }]
  },
  'btn-group-sm > btn-stack-overflowbtn span': {
    'marginLeft': [{ 'unit': 'rem', 'value': 1.8125 }]
  },
  'btn-youtubebtn-sm span': {
    'marginLeft': [{ 'unit': 'rem', 'value': 1.8125 }]
  },
  'btn-group-sm > btn-youtubebtn span': {
    'marginLeft': [{ 'unit': 'rem', 'value': 1.8125 }]
  },
  'btn-css3btn-sm span': {
    'marginLeft': [{ 'unit': 'rem', 'value': 1.8125 }]
  },
  'btn-group-sm > btn-css3btn span': {
    'marginLeft': [{ 'unit': 'rem', 'value': 1.8125 }]
  },
  'btn-dribbblebtn-sm span': {
    'marginLeft': [{ 'unit': 'rem', 'value': 1.8125 }]
  },
  'btn-group-sm > btn-dribbblebtn span': {
    'marginLeft': [{ 'unit': 'rem', 'value': 1.8125 }]
  },
  'btn-google-plusbtn-sm span': {
    'marginLeft': [{ 'unit': 'rem', 'value': 1.8125 }]
  },
  'btn-group-sm > btn-google-plusbtn span': {
    'marginLeft': [{ 'unit': 'rem', 'value': 1.8125 }]
  },
  'btn-instagrambtn-sm span': {
    'marginLeft': [{ 'unit': 'rem', 'value': 1.8125 }]
  },
  'btn-group-sm > btn-instagrambtn span': {
    'marginLeft': [{ 'unit': 'rem', 'value': 1.8125 }]
  },
  'btn-pinterestbtn-sm span': {
    'marginLeft': [{ 'unit': 'rem', 'value': 1.8125 }]
  },
  'btn-group-sm > btn-pinterestbtn span': {
    'marginLeft': [{ 'unit': 'rem', 'value': 1.8125 }]
  },
  'btn-vkbtn-sm span': {
    'marginLeft': [{ 'unit': 'rem', 'value': 1.8125 }]
  },
  'btn-group-sm > btn-vkbtn span': {
    'marginLeft': [{ 'unit': 'rem', 'value': 1.8125 }]
  },
  'btn-yahoobtn-sm span': {
    'marginLeft': [{ 'unit': 'rem', 'value': 1.8125 }]
  },
  'btn-group-sm > btn-yahoobtn span': {
    'marginLeft': [{ 'unit': 'rem', 'value': 1.8125 }]
  },
  'btn-behancebtn-sm span': {
    'marginLeft': [{ 'unit': 'rem', 'value': 1.8125 }]
  },
  'btn-group-sm > btn-behancebtn span': {
    'marginLeft': [{ 'unit': 'rem', 'value': 1.8125 }]
  },
  'btn-dropboxbtn-sm span': {
    'marginLeft': [{ 'unit': 'rem', 'value': 1.8125 }]
  },
  'btn-group-sm > btn-dropboxbtn span': {
    'marginLeft': [{ 'unit': 'rem', 'value': 1.8125 }]
  },
  'btn-redditbtn-sm span': {
    'marginLeft': [{ 'unit': 'rem', 'value': 1.8125 }]
  },
  'btn-group-sm > btn-redditbtn span': {
    'marginLeft': [{ 'unit': 'rem', 'value': 1.8125 }]
  },
  'btn-spotifybtn-sm span': {
    'marginLeft': [{ 'unit': 'rem', 'value': 1.8125 }]
  },
  'btn-group-sm > btn-spotifybtn span': {
    'marginLeft': [{ 'unit': 'rem', 'value': 1.8125 }]
  },
  'btn-vinebtn-sm span': {
    'marginLeft': [{ 'unit': 'rem', 'value': 1.8125 }]
  },
  'btn-group-sm > btn-vinebtn span': {
    'marginLeft': [{ 'unit': 'rem', 'value': 1.8125 }]
  },
  'btn-foursquarebtn-sm span': {
    'marginLeft': [{ 'unit': 'rem', 'value': 1.8125 }]
  },
  'btn-group-sm > btn-foursquarebtn span': {
    'marginLeft': [{ 'unit': 'rem', 'value': 1.8125 }]
  },
  'btn-vimeobtn-sm span': {
    'marginLeft': [{ 'unit': 'rem', 'value': 1.8125 }]
  },
  'btn-group-sm > btn-vimeobtn span': {
    'marginLeft': [{ 'unit': 'rem', 'value': 1.8125 }]
  },
  'btn-facebookbtn-smicon': {
    'width': [{ 'unit': 'rem', 'value': 1.8125 }],
    'height': [{ 'unit': 'rem', 'value': 1.8125 }]
  },
  'btn-group-sm > btn-facebookiconbtn': {
    'width': [{ 'unit': 'rem', 'value': 1.8125 }],
    'height': [{ 'unit': 'rem', 'value': 1.8125 }]
  },
  'btn-twitterbtn-smicon': {
    'width': [{ 'unit': 'rem', 'value': 1.8125 }],
    'height': [{ 'unit': 'rem', 'value': 1.8125 }]
  },
  'btn-group-sm > btn-twittericonbtn': {
    'width': [{ 'unit': 'rem', 'value': 1.8125 }],
    'height': [{ 'unit': 'rem', 'value': 1.8125 }]
  },
  'btn-linkedinbtn-smicon': {
    'width': [{ 'unit': 'rem', 'value': 1.8125 }],
    'height': [{ 'unit': 'rem', 'value': 1.8125 }]
  },
  'btn-group-sm > btn-linkediniconbtn': {
    'width': [{ 'unit': 'rem', 'value': 1.8125 }],
    'height': [{ 'unit': 'rem', 'value': 1.8125 }]
  },
  'btn-flickrbtn-smicon': {
    'width': [{ 'unit': 'rem', 'value': 1.8125 }],
    'height': [{ 'unit': 'rem', 'value': 1.8125 }]
  },
  'btn-group-sm > btn-flickriconbtn': {
    'width': [{ 'unit': 'rem', 'value': 1.8125 }],
    'height': [{ 'unit': 'rem', 'value': 1.8125 }]
  },
  'btn-tumblrbtn-smicon': {
    'width': [{ 'unit': 'rem', 'value': 1.8125 }],
    'height': [{ 'unit': 'rem', 'value': 1.8125 }]
  },
  'btn-group-sm > btn-tumblriconbtn': {
    'width': [{ 'unit': 'rem', 'value': 1.8125 }],
    'height': [{ 'unit': 'rem', 'value': 1.8125 }]
  },
  'btn-xingbtn-smicon': {
    'width': [{ 'unit': 'rem', 'value': 1.8125 }],
    'height': [{ 'unit': 'rem', 'value': 1.8125 }]
  },
  'btn-group-sm > btn-xingiconbtn': {
    'width': [{ 'unit': 'rem', 'value': 1.8125 }],
    'height': [{ 'unit': 'rem', 'value': 1.8125 }]
  },
  'btn-githubbtn-smicon': {
    'width': [{ 'unit': 'rem', 'value': 1.8125 }],
    'height': [{ 'unit': 'rem', 'value': 1.8125 }]
  },
  'btn-group-sm > btn-githubiconbtn': {
    'width': [{ 'unit': 'rem', 'value': 1.8125 }],
    'height': [{ 'unit': 'rem', 'value': 1.8125 }]
  },
  'btn-html5btn-smicon': {
    'width': [{ 'unit': 'rem', 'value': 1.8125 }],
    'height': [{ 'unit': 'rem', 'value': 1.8125 }]
  },
  'btn-group-sm > btn-html5iconbtn': {
    'width': [{ 'unit': 'rem', 'value': 1.8125 }],
    'height': [{ 'unit': 'rem', 'value': 1.8125 }]
  },
  'btn-openidbtn-smicon': {
    'width': [{ 'unit': 'rem', 'value': 1.8125 }],
    'height': [{ 'unit': 'rem', 'value': 1.8125 }]
  },
  'btn-group-sm > btn-openidiconbtn': {
    'width': [{ 'unit': 'rem', 'value': 1.8125 }],
    'height': [{ 'unit': 'rem', 'value': 1.8125 }]
  },
  'btn-stack-overflowbtn-smicon': {
    'width': [{ 'unit': 'rem', 'value': 1.8125 }],
    'height': [{ 'unit': 'rem', 'value': 1.8125 }]
  },
  'btn-group-sm > btn-stack-overflowiconbtn': {
    'width': [{ 'unit': 'rem', 'value': 1.8125 }],
    'height': [{ 'unit': 'rem', 'value': 1.8125 }]
  },
  'btn-youtubebtn-smicon': {
    'width': [{ 'unit': 'rem', 'value': 1.8125 }],
    'height': [{ 'unit': 'rem', 'value': 1.8125 }]
  },
  'btn-group-sm > btn-youtubeiconbtn': {
    'width': [{ 'unit': 'rem', 'value': 1.8125 }],
    'height': [{ 'unit': 'rem', 'value': 1.8125 }]
  },
  'btn-css3btn-smicon': {
    'width': [{ 'unit': 'rem', 'value': 1.8125 }],
    'height': [{ 'unit': 'rem', 'value': 1.8125 }]
  },
  'btn-group-sm > btn-css3iconbtn': {
    'width': [{ 'unit': 'rem', 'value': 1.8125 }],
    'height': [{ 'unit': 'rem', 'value': 1.8125 }]
  },
  'btn-dribbblebtn-smicon': {
    'width': [{ 'unit': 'rem', 'value': 1.8125 }],
    'height': [{ 'unit': 'rem', 'value': 1.8125 }]
  },
  'btn-group-sm > btn-dribbbleiconbtn': {
    'width': [{ 'unit': 'rem', 'value': 1.8125 }],
    'height': [{ 'unit': 'rem', 'value': 1.8125 }]
  },
  'btn-google-plusbtn-smicon': {
    'width': [{ 'unit': 'rem', 'value': 1.8125 }],
    'height': [{ 'unit': 'rem', 'value': 1.8125 }]
  },
  'btn-group-sm > btn-google-plusiconbtn': {
    'width': [{ 'unit': 'rem', 'value': 1.8125 }],
    'height': [{ 'unit': 'rem', 'value': 1.8125 }]
  },
  'btn-instagrambtn-smicon': {
    'width': [{ 'unit': 'rem', 'value': 1.8125 }],
    'height': [{ 'unit': 'rem', 'value': 1.8125 }]
  },
  'btn-group-sm > btn-instagramiconbtn': {
    'width': [{ 'unit': 'rem', 'value': 1.8125 }],
    'height': [{ 'unit': 'rem', 'value': 1.8125 }]
  },
  'btn-pinterestbtn-smicon': {
    'width': [{ 'unit': 'rem', 'value': 1.8125 }],
    'height': [{ 'unit': 'rem', 'value': 1.8125 }]
  },
  'btn-group-sm > btn-pinteresticonbtn': {
    'width': [{ 'unit': 'rem', 'value': 1.8125 }],
    'height': [{ 'unit': 'rem', 'value': 1.8125 }]
  },
  'btn-vkbtn-smicon': {
    'width': [{ 'unit': 'rem', 'value': 1.8125 }],
    'height': [{ 'unit': 'rem', 'value': 1.8125 }]
  },
  'btn-group-sm > btn-vkiconbtn': {
    'width': [{ 'unit': 'rem', 'value': 1.8125 }],
    'height': [{ 'unit': 'rem', 'value': 1.8125 }]
  },
  'btn-yahoobtn-smicon': {
    'width': [{ 'unit': 'rem', 'value': 1.8125 }],
    'height': [{ 'unit': 'rem', 'value': 1.8125 }]
  },
  'btn-group-sm > btn-yahooiconbtn': {
    'width': [{ 'unit': 'rem', 'value': 1.8125 }],
    'height': [{ 'unit': 'rem', 'value': 1.8125 }]
  },
  'btn-behancebtn-smicon': {
    'width': [{ 'unit': 'rem', 'value': 1.8125 }],
    'height': [{ 'unit': 'rem', 'value': 1.8125 }]
  },
  'btn-group-sm > btn-behanceiconbtn': {
    'width': [{ 'unit': 'rem', 'value': 1.8125 }],
    'height': [{ 'unit': 'rem', 'value': 1.8125 }]
  },
  'btn-dropboxbtn-smicon': {
    'width': [{ 'unit': 'rem', 'value': 1.8125 }],
    'height': [{ 'unit': 'rem', 'value': 1.8125 }]
  },
  'btn-group-sm > btn-dropboxiconbtn': {
    'width': [{ 'unit': 'rem', 'value': 1.8125 }],
    'height': [{ 'unit': 'rem', 'value': 1.8125 }]
  },
  'btn-redditbtn-smicon': {
    'width': [{ 'unit': 'rem', 'value': 1.8125 }],
    'height': [{ 'unit': 'rem', 'value': 1.8125 }]
  },
  'btn-group-sm > btn-redditiconbtn': {
    'width': [{ 'unit': 'rem', 'value': 1.8125 }],
    'height': [{ 'unit': 'rem', 'value': 1.8125 }]
  },
  'btn-spotifybtn-smicon': {
    'width': [{ 'unit': 'rem', 'value': 1.8125 }],
    'height': [{ 'unit': 'rem', 'value': 1.8125 }]
  },
  'btn-group-sm > btn-spotifyiconbtn': {
    'width': [{ 'unit': 'rem', 'value': 1.8125 }],
    'height': [{ 'unit': 'rem', 'value': 1.8125 }]
  },
  'btn-vinebtn-smicon': {
    'width': [{ 'unit': 'rem', 'value': 1.8125 }],
    'height': [{ 'unit': 'rem', 'value': 1.8125 }]
  },
  'btn-group-sm > btn-vineiconbtn': {
    'width': [{ 'unit': 'rem', 'value': 1.8125 }],
    'height': [{ 'unit': 'rem', 'value': 1.8125 }]
  },
  'btn-foursquarebtn-smicon': {
    'width': [{ 'unit': 'rem', 'value': 1.8125 }],
    'height': [{ 'unit': 'rem', 'value': 1.8125 }]
  },
  'btn-group-sm > btn-foursquareiconbtn': {
    'width': [{ 'unit': 'rem', 'value': 1.8125 }],
    'height': [{ 'unit': 'rem', 'value': 1.8125 }]
  },
  'btn-vimeobtn-smicon': {
    'width': [{ 'unit': 'rem', 'value': 1.8125 }],
    'height': [{ 'unit': 'rem', 'value': 1.8125 }]
  },
  'btn-group-sm > btn-vimeoiconbtn': {
    'width': [{ 'unit': 'rem', 'value': 1.8125 }],
    'height': [{ 'unit': 'rem', 'value': 1.8125 }]
  },
  'btn-facebook': {
    'background': '#3b5998'
  },
  'btn-facebook::before': {
    'content': '"\f09a"',
    'background': '#344e86'
  },
  'btn-facebook:hover': {
    'background': '#344e86'
  },
  'btn-facebook:hover::before': {
    'background': '#2d4373'
  },
  'btn-twitter': {
    'background': '#00aced'
  },
  'btn-twitter::before': {
    'content': '"\f099"',
    'background': '#0099d4'
  },
  'btn-twitter:hover': {
    'background': '#0099d4'
  },
  'btn-twitter:hover::before': {
    'background': '#0087ba'
  },
  'btn-linkedin': {
    'background': '#4875b4'
  },
  'btn-linkedin::before': {
    'content': '"\f0e1"',
    'background': '#4169a2'
  },
  'btn-linkedin:hover': {
    'background': '#4169a2'
  },
  'btn-linkedin:hover::before': {
    'background': '#395d90'
  },
  'btn-flickr': {
    'background': '#ff0084'
  },
  'btn-flickr::before': {
    'content': '"\f16e"',
    'background': '#e60077'
  },
  'btn-flickr:hover': {
    'background': '#e60077'
  },
  'btn-flickr:hover::before': {
    'background': '#cc006a'
  },
  'btn-tumblr': {
    'background': '#32506d'
  },
  'btn-tumblr::before': {
    'content': '"\f173"',
    'background': '#2a435c'
  },
  'btn-tumblr:hover': {
    'background': '#2a435c'
  },
  'btn-tumblr:hover::before': {
    'background': '#22364a'
  },
  'btn-xing': {
    'background': '#026466'
  },
  'btn-xing::before': {
    'content': '"\f168"',
    'background': '#024b4d'
  },
  'btn-xing:hover': {
    'background': '#024b4d'
  },
  'btn-xing:hover::before': {
    'background': '#013334'
  },
  'btn-github': {
    'background': '#4183c4'
  },
  'btn-github::before': {
    'content': '"\f09b"',
    'background': '#3876b4'
  },
  'btn-github:hover': {
    'background': '#3876b4'
  },
  'btn-github:hover::before': {
    'background': '#3269a0'
  },
  'btn-html5': {
    'background': '#e34f26'
  },
  'btn-html5::before': {
    'content': '"\f13b"',
    'background': '#d4431b'
  },
  'btn-html5:hover': {
    'background': '#d4431b'
  },
  'btn-html5:hover::before': {
    'background': '#be3c18'
  },
  'btn-openid': {
    'background': '#f78c40'
  },
  'btn-openid::before': {
    'content': '"\f19b"',
    'background': '#f67d28'
  },
  'btn-openid:hover': {
    'background': '#f67d28'
  },
  'btn-openid:hover::before': {
    'background': '#f56f0f'
  },
  'btn-stack-overflow': {
    'background': '#fe7a15'
  },
  'btn-stack-overflow::before': {
    'content': '"\f16c"',
    'background': '#f86c01'
  },
  'btn-stack-overflow:hover': {
    'background': '#f86c01'
  },
  'btn-stack-overflow:hover::before': {
    'background': '#df6101'
  },
  'btn-css3': {
    'background': '#0170ba'
  },
  'btn-css3::before': {
    'content': '"\f13c"',
    'background': '#0161a1'
  },
  'btn-css3:hover': {
    'background': '#0161a1'
  },
  'btn-css3:hover::before': {
    'background': '#015187'
  },
  'btn-youtube': {
    'background': '#b00'
  },
  'btn-youtube::before': {
    'content': '"\f167"',
    'background': '#a20000'
  },
  'btn-youtube:hover': {
    'background': '#a20000'
  },
  'btn-youtube:hover::before': {
    'background': '#880000'
  },
  'btn-dribbble': {
    'background': '#ea4c89'
  },
  'btn-dribbble::before': {
    'content': '"\f17d"',
    'background': '#e7357a'
  },
  'btn-dribbble:hover': {
    'background': '#e7357a'
  },
  'btn-dribbble:hover::before': {
    'background': '#e51e6b'
  },
  'btn-google-plus': {
    'background': '#bb4b39'
  },
  'btn-google-plus::before': {
    'content': '"\f0d5"',
    'background': '#a74333'
  },
  'btn-google-plus:hover': {
    'background': '#a74333'
  },
  'btn-google-plus:hover::before': {
    'background': '#943b2d'
  },
  'btn-instagram': {
    'background': '#517fa4'
  },
  'btn-instagram::before': {
    'content': '"\f16d"',
    'background': '#497293'
  },
  'btn-instagram:hover': {
    'background': '#497293'
  },
  'btn-instagram:hover::before': {
    'background': '#406582'
  },
  'btn-pinterest': {
    'background': '#cb2027'
  },
  'btn-pinterest::before': {
    'content': '"\f0d2"',
    'background': '#b51d23'
  },
  'btn-pinterest:hover': {
    'background': '#b51d23'
  },
  'btn-pinterest:hover::before': {
    'background': '#9f191f'
  },
  'btn-vk': {
    'background': '#45668e'
  },
  'btn-vk::before': {
    'content': '"\f189"',
    'background': '#3d5a7d'
  },
  'btn-vk:hover': {
    'background': '#3d5a7d'
  },
  'btn-vk:hover::before': {
    'background': '#344d6c'
  },
  'btn-yahoo': {
    'background': '#400191'
  },
  'btn-yahoo::before': {
    'content': '"\f19e"',
    'background': '#350178'
  },
  'btn-yahoo:hover': {
    'background': '#350178'
  },
  'btn-yahoo:hover::before': {
    'background': '#2a015e'
  },
  'btn-behance': {
    'background': '#1769ff'
  },
  'btn-behance::before': {
    'content': '"\f1b4"',
    'background': '#0059fd'
  },
  'btn-behance:hover': {
    'background': '#0059fd'
  },
  'btn-behance:hover::before': {
    'background': '#0050e3'
  },
  'btn-dropbox': {
    'background': '#007ee5'
  },
  'btn-dropbox::before': {
    'content': '"\f16b"',
    'background': '#0070cc'
  },
  'btn-dropbox:hover': {
    'background': '#0070cc'
  },
  'btn-dropbox:hover::before': {
    'background': '#0062b2'
  },
  'btn-reddit': {
    'background': '#ff4500'
  },
  'btn-reddit::before': {
    'content': '"\f1a1"',
    'background': '#e63e00'
  },
  'btn-reddit:hover': {
    'background': '#e63e00'
  },
  'btn-reddit:hover::before': {
    'background': '#cc3700'
  },
  'btn-spotify': {
    'background': '#7ab800'
  },
  'btn-spotify::before': {
    'content': '"\f1bc"',
    'background': '#699f00'
  },
  'btn-spotify:hover': {
    'background': '#699f00'
  },
  'btn-spotify:hover::before': {
    'background': '#588500'
  },
  'btn-vine': {
    'background': '#00bf8f'
  },
  'btn-vine::before': {
    'content': '"\f1ca"',
    'background': '#00a67c'
  },
  'btn-vine:hover': {
    'background': '#00a67c'
  },
  'btn-vine:hover::before': {
    'background': '#008c69'
  },
  'btn-foursquare': {
    'background': '#1073af'
  },
  'btn-foursquare::before': {
    'content': '"\f180"',
    'background': '#0e6498'
  },
  'btn-foursquare:hover': {
    'background': '#0e6498'
  },
  'btn-foursquare:hover::before': {
    'background': '#0c5480'
  },
  'btn-vimeo': {
    'background': '#aad450'
  },
  'btn-vimeo::before': {
    'content': '"\f194"',
    'background': '#a0cf3c'
  },
  'btn-vimeo:hover': {
    'background': '#a0cf3c'
  },
  'btn-vimeo:hover::before': {
    'background': '#93c130'
  },
  'callout': {
    'position': 'relative',
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 1 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 1 }],
    'margin': [{ 'unit': 'rem', 'value': 1 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 1 }, { 'unit': 'px', 'value': 0 }],
    'border': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#cfd8dc' }],
    'borderLeftWidth': [{ 'unit': 'rem', 'value': 0.25 }]
  },
  'callout chart-wrapper': {
    'position': 'absolute',
    'top': [{ 'unit': 'px', 'value': 18 }],
    'left': [{ 'unit': '%H', 'value': 0.45 }],
    'float': 'right',
    'width': [{ 'unit': 'px', 'value': 100 }]
  },
  'callout-bordered': {
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#cfd8dc' }],
    'borderLeftWidth': [{ 'unit': 'rem', 'value': 0.25 }]
  },
  'callout code': {
    'borderRadius': '.25rem'
  },
  'callout h4': {
    'marginTop': [{ 'unit': 'px', 'value': 0 }],
    'marginBottom': [{ 'unit': 'rem', 'value': 0.25 }]
  },
  'callout p:last-child': {
    'marginBottom': [{ 'unit': 'px', 'value': 0 }]
  },
  'callout + callout': {
    'marginTop': [{ 'unit': 'rem', 'value': -0.25 }]
  },
  'callout-default': {
    'borderLeftColor': '#b0bec5'
  },
  'callout-default h4': {
    'color': '#b0bec5'
  },
  'callout-primary': {
    'borderLeftColor': '#20a8d8'
  },
  'callout-primary h4': {
    'color': '#20a8d8'
  },
  'callout-info': {
    'borderLeftColor': '#63c2de'
  },
  'callout-info h4': {
    'color': '#63c2de'
  },
  'callout-warning': {
    'borderLeftColor': '#f8cb00'
  },
  'callout-warning h4': {
    'color': '#f8cb00'
  },
  'callout-danger': {
    'borderLeftColor': '#f86c6b'
  },
  'callout-danger h4': {
    'color': '#f86c6b'
  },
  'callout-success': {
    'borderLeftColor': '#4dbd74'
  },
  'callout-success h4': {
    'color': '#4dbd74'
  },
  'card': {
    'marginBottom': [{ 'unit': 'rem', 'value': 1.5 }]
  },
  'card-header icon-bg': {
    'display': 'inline-block',
    'padding': [{ 'unit': 'rem', 'value': 0.75 }, { 'unit': 'rem', 'value': 1.25 }, { 'unit': 'string', 'value': '!important' }, { 'unit': 'rem', 'value': 1.25 }],
    'marginTop': [{ 'unit': 'rem', 'value': -0.75 }],
    'marginRight': [{ 'unit': 'rem', 'value': 1.25 }],
    'marginBottom': [{ 'unit': 'rem', 'value': -0.75 }],
    'marginLeft': [{ 'unit': 'rem', 'value': -1.25 }],
    'lineHeight': [{ 'unit': 'string', 'value': 'inherit' }],
    'color': '#263238',
    'verticalAlign': 'bottom',
    'background': 'transparent',
    'borderRight': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#cfd8dc' }]
  },
  'card-header navnav-tabs': {
    'marginTop': [{ 'unit': 'rem', 'value': -0.75 }],
    'marginBottom': [{ 'unit': 'rem', 'value': -0.75 }],
    'borderBottom': [{ 'unit': 'px', 'value': 0 }]
  },
  'card-header navnav-tabs nav-item': {
    'borderTop': [{ 'unit': 'px', 'value': 0 }]
  },
  'card-header navnav-tabs nav-link': {
    'padding': [{ 'unit': 'rem', 'value': 0.75 }, { 'unit': 'rem', 'value': 0.625 }, { 'unit': 'rem', 'value': 0.75 }, { 'unit': 'rem', 'value': 0.625 }],
    'color': '#b0bec5',
    'borderTop': [{ 'unit': 'px', 'value': 0 }]
  },
  'card-header navnav-tabs navbar dropdown-toggle': {
    'padding': [{ 'unit': 'rem', 'value': 0.75 }, { 'unit': 'rem', 'value': 0.625 }, { 'unit': 'rem', 'value': 0.75 }, { 'unit': 'rem', 'value': 0.625 }],
    'color': '#b0bec5',
    'borderTop': [{ 'unit': 'px', 'value': 0 }]
  },
  'navbar card-header navnav-tabs dropdown-toggle': {
    'padding': [{ 'unit': 'rem', 'value': 0.75 }, { 'unit': 'rem', 'value': 0.625 }, { 'unit': 'rem', 'value': 0.75 }, { 'unit': 'rem', 'value': 0.625 }],
    'color': '#b0bec5',
    'borderTop': [{ 'unit': 'px', 'value': 0 }]
  },
  'card-header navnav-tabs nav-linkactive': {
    'color': '#263238',
    'background': '#fff'
  },
  'card-header navnav-tabs navbar activedropdown-toggle': {
    'color': '#263238',
    'background': '#fff'
  },
  'navbar card-header navnav-tabs activedropdown-toggle': {
    'color': '#263238',
    'background': '#fff'
  },
  'card-headercard-header-inverse': {
    'color': '#fff'
  },
  'card-headercard-header-primary': {
    'margin': [{ 'unit': 'px', 'value': -1 }, { 'unit': 'px', 'value': -1 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': -1 }],
    'background': '#20a8d8',
    'borderBottom': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#20a8d8' }]
  },
  'card-headercard-header-secondary': {
    'margin': [{ 'unit': 'px', 'value': -1 }, { 'unit': 'px', 'value': -1 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': -1 }],
    'background': '#cfd8dc',
    'borderBottom': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#cfd8dc' }]
  },
  'card-headercard-header-success': {
    'margin': [{ 'unit': 'px', 'value': -1 }, { 'unit': 'px', 'value': -1 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': -1 }],
    'background': '#4dbd74',
    'borderBottom': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#4dbd74' }]
  },
  'card-headercard-header-info': {
    'margin': [{ 'unit': 'px', 'value': -1 }, { 'unit': 'px', 'value': -1 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': -1 }],
    'background': '#63c2de',
    'borderBottom': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#63c2de' }]
  },
  'card-headercard-header-warning': {
    'margin': [{ 'unit': 'px', 'value': -1 }, { 'unit': 'px', 'value': -1 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': -1 }],
    'background': '#f8cb00',
    'borderBottom': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#f8cb00' }]
  },
  'card-headercard-header-danger': {
    'margin': [{ 'unit': 'px', 'value': -1 }, { 'unit': 'px', 'value': -1 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': -1 }],
    'background': '#f86c6b',
    'borderBottom': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#f86c6b' }]
  },
  'card-header btn': {
    'marginTop': [{ 'unit': 'rem', 'value': -0.5 }]
  },
  'card-header btn-sm': {
    'marginTop': [{ 'unit': 'rem', 'value': -0.25 }]
  },
  'card-header btn-group-sm > btn': {
    'marginTop': [{ 'unit': 'rem', 'value': -0.25 }]
  },
  'card-header btn-lg': {
    'marginTop': [{ 'unit': 'rem', 'value': -0.5 }]
  },
  'card-header btn-group-lg > btn': {
    'marginTop': [{ 'unit': 'rem', 'value': -0.5 }]
  },
  'card-footer ul': {
    'display': 'table',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'tableLayout': 'fixed'
  },
  'card-footer ul li': {
    'display': 'table-cell',
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 1.25 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 1.25 }],
    'textAlign': 'center'
  },
  'card-primary': {
    'backgroundColor': '#20a8d8'
  },
  'card-primary card-header': {
    'borderColor': '#1d97c2'
  },
  'card-primary card-header': {
    'backgroundColor': '#1d97c2'
  },
  'card-primary card-footer': {
    'backgroundColor': '#1d97c2'
  },
  'card-secondary': {
    'backgroundColor': '#cfd8dc'
  },
  'card-secondary card-header': {
    'borderColor': '#c0ccd1'
  },
  'card-secondary card-header': {
    'backgroundColor': '#c0ccd1'
  },
  'card-secondary card-footer': {
    'backgroundColor': '#c0ccd1'
  },
  'card-success': {
    'backgroundColor': '#4dbd74'
  },
  'card-success card-header': {
    'borderColor': '#41af67'
  },
  'card-success card-header': {
    'backgroundColor': '#41af67'
  },
  'card-success card-footer': {
    'backgroundColor': '#41af67'
  },
  'card-info': {
    'backgroundColor': '#63c2de'
  },
  'card-info card-header': {
    'borderColor': '#4ebada'
  },
  'card-info card-header': {
    'backgroundColor': '#4ebada'
  },
  'card-info card-footer': {
    'backgroundColor': '#4ebada'
  },
  'card-warning': {
    'backgroundColor': '#f8cb00'
  },
  'card-warning card-header': {
    'borderColor': '#dfb600'
  },
  'card-warning card-header': {
    'backgroundColor': '#dfb600'
  },
  'card-warning card-footer': {
    'backgroundColor': '#dfb600'
  },
  'card-danger': {
    'backgroundColor': '#f86c6b'
  },
  'card-danger card-header': {
    'borderColor': '#f75453'
  },
  'card-danger card-header': {
    'backgroundColor': '#f75453'
  },
  'card-danger card-footer': {
    'backgroundColor': '#f75453'
  },
  'card-inverse': {
    'color': '#fff'
  },
  'card-inverse text-muted': {
    'color': 'rgba(255, 255, 255, 0.6) !important'
  },
  '[class*="card-outline-"] card-block': {
    'background': '#fff !important'
  },
  '[class*="card-outline-"]card-outline-top': {
    'borderTopWidth': [{ 'unit': 'px', 'value': 2 }],
    'borderRightColor': '#cfd8dc',
    'borderBottomColor': '#cfd8dc',
    'borderLeftColor': '#cfd8dc'
  },
  'card-accent-primary': {
    'borderTopWidth': [{ 'unit': 'px', 'value': 2 }],
    'borderTopColor': '#20a8d8'
  },
  'card-accent-secondary': {
    'borderTopWidth': [{ 'unit': 'px', 'value': 2 }],
    'borderTopColor': '#b0bec5'
  },
  'card-accent-info': {
    'borderTopWidth': [{ 'unit': 'px', 'value': 2 }],
    'borderTopColor': '#63c2de'
  },
  'card-accent-success': {
    'borderTopWidth': [{ 'unit': 'px', 'value': 2 }],
    'borderTopColor': '#4dbd74'
  },
  'card-accent-warning': {
    'borderTopWidth': [{ 'unit': 'px', 'value': 2 }],
    'borderTopColor': '#f8cb00'
  },
  'card-accent-danger': {
    'borderTopWidth': [{ 'unit': 'px', 'value': 2 }],
    'borderTopColor': '#f86c6b'
  },
  'card-header > i': {
    'marginRight': [{ 'unit': 'rem', 'value': 0.5 }]
  },
  'card-header card-actions': {
    'position': 'absolute',
    'top': [{ 'unit': 'px', 'value': 0 }],
    'right': [{ 'unit': 'px', 'value': 0 }]
  },
  'card-header card-actions a': {
    'display': 'block',
    'float': 'left',
    'width': [{ 'unit': 'px', 'value': 50 }],
    'padding': [{ 'unit': 'rem', 'value': 0.75 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 0.75 }, { 'unit': 'px', 'value': 0 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': '!important' }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': '!important' }],
    'color': '#263238',
    'textAlign': 'center',
    'background': 'transparent',
    'border': [{ 'unit': 'px', 'value': 0 }],
    'borderLeft': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#cfd8dc' }],
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'card-header card-actions button': {
    'display': 'block',
    'float': 'left',
    'width': [{ 'unit': 'px', 'value': 50 }],
    'padding': [{ 'unit': 'rem', 'value': 0.75 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 0.75 }, { 'unit': 'px', 'value': 0 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': '!important' }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': '!important' }],
    'color': '#263238',
    'textAlign': 'center',
    'background': 'transparent',
    'border': [{ 'unit': 'px', 'value': 0 }],
    'borderLeft': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#cfd8dc' }],
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'card-header card-actions a:hover': {
    'textDecoration': 'none'
  },
  'card-header card-actions button:hover': {
    'textDecoration': 'none'
  },
  'card-header card-actions a [class^="icon-"]': {
    'display': 'inline-block',
    'verticalAlign': 'middle'
  },
  'card-header card-actions a [class*=" icon-"]': {
    'display': 'inline-block',
    'verticalAlign': 'middle'
  },
  'card-header card-actions button [class^="icon-"]': {
    'display': 'inline-block',
    'verticalAlign': 'middle'
  },
  'card-header card-actions button [class*=" icon-"]': {
    'display': 'inline-block',
    'verticalAlign': 'middle'
  },
  'card-header card-actions a i': {
    'display': 'inline-block',
    'transition': '.4s'
  },
  'card-header card-actions button i': {
    'display': 'inline-block',
    'transition': '.4s'
  },
  'card-header card-actions a r180': {
    'transform': 'rotate(180deg)'
  },
  'card-header card-actions button r180': {
    'transform': 'rotate(180deg)'
  },
  'card-header card-actions input-group': {
    'width': [{ 'unit': 'px', 'value': 230 }],
    'margin': [{ 'unit': 'px', 'value': 6 }, { 'unit': 'px', 'value': 6 }, { 'unit': 'px', 'value': 6 }, { 'unit': 'px', 'value': 6 }]
  },
  'card-header card-actions input-group input-group-addon': {
    'background': '#fff'
  },
  'card-header card-actions input-group input': {
    'borderLeft': [{ 'unit': 'px', 'value': 0 }]
  },
  'card-full': {
    'marginTop': [{ 'unit': 'rem', 'value': -1 }],
    'marginRight': [{ 'unit': 'px', 'value': -15 }],
    'marginLeft': [{ 'unit': 'px', 'value': -15 }],
    'border': [{ 'unit': 'px', 'value': 0 }],
    'borderBottom': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#cfd8dc' }]
  },
  'carddrag': {
    'cursor': 'move'
  },
  'card drag': {
    'cursor': 'move'
  },
  'card-placeholder': {
    'background': 'rgba(0, 0, 0, 0.025)',
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'dashed' }, { 'unit': 'string', 'value': '#b0bec5' }]
  },
  'chart-wrapper canvas': {
    'width': [{ 'unit': '%H', 'value': 1 }, { 'unit': 'string', 'value': '!important' }]
  },
  'base-chartchart': {
    'display': 'block !important'
  },
  'dropdown-item': {
    'position': 'relative',
    'padding': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 20 }],
    'borderBottom': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#cfd8dc' }]
  },
  'dropdown-item:last-child': {
    'borderBottom': [{ 'unit': 'px', 'value': 0 }]
  },
  'dropdown-item i': {
    'display': 'inline-block',
    'width': [{ 'unit': 'px', 'value': 20 }],
    'marginRight': [{ 'unit': 'px', 'value': 10 }],
    'marginLeft': [{ 'unit': 'px', 'value': -10 }],
    'color': '#cfd8dc',
    'textAlign': 'center'
  },
  'dropdown-item badge': {
    'position': 'absolute',
    'right': [{ 'unit': 'px', 'value': 10 }],
    'marginTop': [{ 'unit': 'px', 'value': 2 }]
  },
  'dropdown-header': {
    'padding': [{ 'unit': 'px', 'value': 8 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 8 }, { 'unit': 'px', 'value': 20 }],
    'background': '#eceff1',
    'borderBottom': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#cfd8dc' }]
  },
  'dropdown-header btn': {
    'marginTop': [{ 'unit': 'px', 'value': -7 }],
    'color': '#b0bec5'
  },
  'dropdown-header btn:hover': {
    'color': '#263238'
  },
  'dropdown-header btnpull-right': {
    'marginRight': [{ 'unit': 'px', 'value': -20 }]
  },
  'dropdown-menu-lg': {
    'width': [{ 'unit': 'px', 'value': 250 }]
  },
  'app-footer': {
    'minHeight': [{ 'unit': 'px', 'value': 50 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 1 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 1 }],
    'lineHeight': [{ 'unit': 'px', 'value': 50 }],
    'color': '#263238',
    'background': '#eceff1',
    'borderTop': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#cfd8dc' }]
  },
  'rowrow-equal': {
    'paddingRight': [{ 'unit': 'px', 'value': 7.5 }],
    'paddingLeft': [{ 'unit': 'px', 'value': 7.5 }],
    'marginRight': [{ 'unit': 'px', 'value': -15 }],
    'marginLeft': [{ 'unit': 'px', 'value': -15 }]
  },
  'rowrow-equal [class*="col-"]': {
    'paddingRight': [{ 'unit': 'px', 'value': 7.5 }],
    'paddingLeft': [{ 'unit': 'px', 'value': 7.5 }]
  },
  'main container-fluid': {
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 30 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 30 }]
  },
  'input-group-addon': {
    'minWidth': [{ 'unit': 'px', 'value': 40 }],
    'whiteSpace': 'nowrap',
    'verticalAlign': 'middle'
  },
  'input-group-btn': {
    'minWidth': [{ 'unit': 'px', 'value': 40 }],
    'whiteSpace': 'nowrap',
    'verticalAlign': 'middle'
  },
  '#loading-bar': {
    'WebkitPointerEvents': 'none',
    'pointerEvents': 'none',
    'MozTransition': '350ms linear all',
    'OTransition': '350ms linear all',
    'WebkitTransition': '350ms linear all',
    'transition': '350ms linear all'
  },
  '#loading-bar-spinner': {
    'WebkitPointerEvents': 'none',
    'pointerEvents': 'none',
    'MozTransition': '350ms linear all',
    'OTransition': '350ms linear all',
    'WebkitTransition': '350ms linear all',
    'transition': '350ms linear all'
  },
  '#loading-barng-enter': {
    'opacity': '0'
  },
  '#loading-barng-leaveng-leave-active': {
    'opacity': '0'
  },
  '#loading-bar-spinnerng-enter': {
    'opacity': '0'
  },
  '#loading-bar-spinnerng-leaveng-leave-active': {
    'opacity': '0'
  },
  '#loading-barng-enterng-enter-active': {
    'opacity': '1'
  },
  '#loading-barng-leave': {
    'opacity': '1'
  },
  '#loading-bar-spinnerng-enterng-enter-active': {
    'opacity': '1'
  },
  '#loading-bar-spinnerng-leave': {
    'opacity': '1'
  },
  '#loading-bar bar': {
    'position': 'fixed',
    'top': [{ 'unit': 'px', 'value': 0 }],
    'left': [{ 'unit': 'px', 'value': 0 }],
    'zIndex': '20002',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'height': [{ 'unit': 'px', 'value': 2 }],
    'background': '#20a8d8',
    'borderTopRightRadius': '1px',
    'borderBottomRightRadius': '1px',
    'MozTransition': 'width 350ms',
    'OTransition': 'width 350ms',
    'WebkitTransition': 'width 350ms',
    'transition': 'width 350ms'
  },
  '#loading-bar peg': {
    'position': 'absolute',
    'top': [{ 'unit': 'px', 'value': 0 }],
    'right': [{ 'unit': 'px', 'value': 0 }],
    'width': [{ 'unit': 'px', 'value': 70 }],
    'height': [{ 'unit': 'px', 'value': 2 }],
    'MozBorderRadius': '100%',
    'WebkitBorderRadius': '100%',
    'borderRadius': '100%',
    'MozBoxShadow': '#29d 1px 0 6px 1px',
    'MsBoxShadow': '#29d 1px 0 6px 1px',
    'WebkitBoxShadow': '#29d 1px 0 6px 1px',
    'boxShadow': [{ 'unit': 'string', 'value': '#29d' }, { 'unit': 'px', 'value': 1 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 6 }, { 'unit': 'px', 'value': 1 }],
    'opacity': '.45'
  },
  '#loading-bar-spinner': {
    'position': 'fixed',
    'top': [{ 'unit': 'px', 'value': 10 }],
    'left': [{ 'unit': 'px', 'value': 10 }],
    'zIndex': '10002',
    'display': 'block'
  },
  '#loading-bar-spinner spinner-icon': {
    'width': [{ 'unit': 'px', 'value': 14 }],
    'height': [{ 'unit': 'px', 'value': 14 }],
    'border': [{ 'unit': 'string', 'value': 'solid' }, { 'unit': 'px', 'value': 2 }, { 'unit': 'string', 'value': 'transparent' }],
    'borderTopColor': '#29d',
    'borderLeftColor': '#29d',
    'borderRadius': '50%',
    'MozAnimation': 'loading-bar-spinner 400ms linear infinite',
    'MsAnimation': 'loading-bar-spinner 400ms linear infinite',
    'OAnimation': 'loading-bar-spinner 400ms linear infinite',
    'WebkitAnimation': 'loading-bar-spinner 400ms linear infinite',
    'animation': 'loading-bar-spinner 400ms linear infinite'
  },
  'pace': {
    'WebkitPointerEvents': 'none',
    'pointerEvents': 'none',
    'MozUserSelect': 'none',
    'WebkitUserSelect': 'none',
    'userSelect': 'none'
  },
  'pace-inactive': {
    'display': 'none'
  },
  'pace pace-progress': {
    'position': 'fixed',
    'top': [{ 'unit': 'px', 'value': 0 }],
    'right': [{ 'unit': '%H', 'value': 1 }],
    'zIndex': '2000',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'height': [{ 'unit': 'px', 'value': 2 }],
    'background': '#20a8d8'
  },
  'modal-primary modal-content': {
    'borderColor': '#20a8d8'
  },
  'modal-primary modal-header': {
    'color': '#fff',
    'backgroundColor': '#20a8d8'
  },
  'modal-secondary modal-content': {
    'borderColor': '#cfd8dc'
  },
  'modal-secondary modal-header': {
    'color': '#fff',
    'backgroundColor': '#cfd8dc'
  },
  'modal-success modal-content': {
    'borderColor': '#4dbd74'
  },
  'modal-success modal-header': {
    'color': '#fff',
    'backgroundColor': '#4dbd74'
  },
  'modal-info modal-content': {
    'borderColor': '#63c2de'
  },
  'modal-info modal-header': {
    'color': '#fff',
    'backgroundColor': '#63c2de'
  },
  'modal-warning modal-content': {
    'borderColor': '#f8cb00'
  },
  'modal-warning modal-header': {
    'color': '#fff',
    'backgroundColor': '#f8cb00'
  },
  'modal-danger modal-content': {
    'borderColor': '#f86c6b'
  },
  'modal-danger modal-header': {
    'color': '#fff',
    'backgroundColor': '#f86c6b'
  },
  'nav-tabs nav-link': {
    'color': '#607d8b'
  },
  'nav-tabs navbar dropdown-toggle': {
    'color': '#607d8b'
  },
  'navbar nav-tabs dropdown-toggle': {
    'color': '#607d8b'
  },
  'nav-tabs nav-linkactive': {
    'color': '#263238',
    'background': '#fff',
    'borderColor': '#cfd8dc',
    'borderBottomColor': '#fff'
  },
  'nav-tabs navbar activedropdown-toggle': {
    'color': '#263238',
    'background': '#fff',
    'borderColor': '#cfd8dc',
    'borderBottomColor': '#fff'
  },
  'navbar nav-tabs activedropdown-toggle': {
    'color': '#263238',
    'background': '#fff',
    'borderColor': '#cfd8dc',
    'borderBottomColor': '#fff'
  },
  'nav-tabs nav-linkactive:focus': {
    'background': '#fff',
    'borderColor': '#cfd8dc',
    'borderBottomColor': '#fff'
  },
  'nav-tabs navbar activedropdown-toggle:focus': {
    'background': '#fff',
    'borderColor': '#cfd8dc',
    'borderBottomColor': '#fff'
  },
  'navbar nav-tabs activedropdown-toggle:focus': {
    'background': '#fff',
    'borderColor': '#cfd8dc',
    'borderBottomColor': '#fff'
  },
  'tab-content': {
    'marginTop': [{ 'unit': 'px', 'value': -1 }],
    'background': '#fff',
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#cfd8dc' }]
  },
  'tab-content tab-pane': {
    'padding': [{ 'unit': 'rem', 'value': 1 }, { 'unit': 'rem', 'value': 1 }, { 'unit': 'rem', 'value': 1 }, { 'unit': 'rem', 'value': 1 }]
  },
  'card-block tab-content': {
    'marginTop': [{ 'unit': 'px', 'value': 0 }],
    'border': [{ 'unit': 'px', 'value': 0 }]
  },
  'app-headernavbar': {
    'position': 'relative',
    'flexDirection': 'row',
    'height': [{ 'unit': 'px', 'value': 55 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'backgroundColor': '#fff',
    'borderBottom': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#cfd8dc' }]
  },
  'app-headernavbar navbar-brand': {
    'display': 'inline-block',
    'width': [{ 'unit': 'px', 'value': 155 }],
    'height': [{ 'unit': 'px', 'value': 55 }],
    'padding': [{ 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 1 }, { 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 1 }],
    'marginRight': [{ 'unit': 'px', 'value': 0 }],
    'backgroundColor': '#fff',
    'backgroundImage': 'url("../img/logo.png")',
    'backgroundRepeat': 'no-repeat',
    'backgroundPosition': 'center center',
    'backgroundSize': '70px auto',
    'borderBottom': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#cfd8dc' }]
  },
  'app-headernavbar navbar-nav': {
    'flexDirection': 'row',
    'alignItems': 'center'
  },
  'app-headernavbar nav-item': {
    'position': 'relative',
    'minWidth': [{ 'unit': 'px', 'value': 50 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': '!important' }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': '!important' }],
    'textAlign': 'center'
  },
  'app-headernavbar nav-item button': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }]
  },
  'app-headernavbar nav-item nav-link': {
    'paddingTop': [{ 'unit': 'px', 'value': 0 }],
    'paddingBottom': [{ 'unit': 'px', 'value': 0 }],
    'border': [{ 'unit': 'px', 'value': 0 }],
    'background': '0'
  },
  'app-headernavbar nav-item dropdown-toggle': {
    'paddingTop': [{ 'unit': 'px', 'value': 0 }],
    'paddingBottom': [{ 'unit': 'px', 'value': 0 }],
    'border': [{ 'unit': 'px', 'value': 0 }],
    'background': '0'
  },
  'app-headernavbar nav-item nav-link badge': {
    'position': 'absolute',
    'top': [{ 'unit': '%V', 'value': 0.5 }],
    'left': [{ 'unit': '%H', 'value': 0.5 }],
    'marginTop': [{ 'unit': 'px', 'value': -16 }],
    'marginLeft': [{ 'unit': 'px', 'value': 0 }]
  },
  'app-headernavbar nav-item dropdown-toggle badge': {
    'position': 'absolute',
    'top': [{ 'unit': '%V', 'value': 0.5 }],
    'left': [{ 'unit': '%H', 'value': 0.5 }],
    'marginTop': [{ 'unit': 'px', 'value': -16 }],
    'marginLeft': [{ 'unit': 'px', 'value': 0 }]
  },
  'app-headernavbar nav-item nav-link > img-avatar': {
    'height': [{ 'unit': 'px', 'value': 35 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 10 }]
  },
  'app-headernavbar nav-item dropdown-toggle > img-avatar': {
    'height': [{ 'unit': 'px', 'value': 35 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 10 }]
  },
  'app-headernavbar dropdown-menu': {
    'paddingBottom': [{ 'unit': 'px', 'value': 0 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }]
  },
  'app-headernavbar dropdown-item': {
    'minWidth': [{ 'unit': 'px', 'value': 180 }]
  },
  'navbar-brand': {
    'color': 'rgba(0, 0, 0, 0.8)'
  },
  'navbar-brand:focus': {
    'color': 'rgba(0, 0, 0, 0.8)'
  },
  'navbar-brand:hover': {
    'color': 'rgba(0, 0, 0, 0.8)'
  },
  'navbar-nav nav-link': {
    'color': 'rgba(0, 0, 0, 0.3)'
  },
  'navbar-nav navbar dropdown-toggle': {
    'color': 'rgba(0, 0, 0, 0.3)'
  },
  'navbar navbar-nav dropdown-toggle': {
    'color': 'rgba(0, 0, 0, 0.3)'
  },
  'navbar-nav nav-link:focus': {
    'color': 'rgba(0, 0, 0, 0.6)'
  },
  'navbar-nav navbar dropdown-toggle:focus': {
    'color': 'rgba(0, 0, 0, 0.6)'
  },
  'navbar navbar-nav dropdown-toggle:focus': {
    'color': 'rgba(0, 0, 0, 0.6)'
  },
  'navbar-nav nav-link:hover': {
    'color': 'rgba(0, 0, 0, 0.6)'
  },
  'navbar-nav navbar dropdown-toggle:hover': {
    'color': 'rgba(0, 0, 0, 0.6)'
  },
  'navbar navbar-nav dropdown-toggle:hover': {
    'color': 'rgba(0, 0, 0, 0.6)'
  },
  'navbar-nav open > nav-link': {
    'color': 'rgba(0, 0, 0, 0.8)'
  },
  'navbar-nav navbar open > dropdown-toggle': {
    'color': 'rgba(0, 0, 0, 0.8)'
  },
  'navbar navbar-nav open > dropdown-toggle': {
    'color': 'rgba(0, 0, 0, 0.8)'
  },
  'navbar-nav open > nav-link:focus': {
    'color': 'rgba(0, 0, 0, 0.8)'
  },
  'navbar-nav navbar open > dropdown-toggle:focus': {
    'color': 'rgba(0, 0, 0, 0.8)'
  },
  'navbar navbar-nav open > dropdown-toggle:focus': {
    'color': 'rgba(0, 0, 0, 0.8)'
  },
  'navbar-nav open > nav-link:hover': {
    'color': 'rgba(0, 0, 0, 0.8)'
  },
  'navbar-nav navbar open > dropdown-toggle:hover': {
    'color': 'rgba(0, 0, 0, 0.8)'
  },
  'navbar navbar-nav open > dropdown-toggle:hover': {
    'color': 'rgba(0, 0, 0, 0.8)'
  },
  'navbar-nav active > nav-link': {
    'color': 'rgba(0, 0, 0, 0.8)'
  },
  'navbar-nav navbar active > dropdown-toggle': {
    'color': 'rgba(0, 0, 0, 0.8)'
  },
  'navbar
navbar-nav active > dropdown-toggle': {
    'color': 'rgba(0, 0, 0, 0.8)'
  },
  'navbar-nav active > nav-link:focus': {
    'color': 'rgba(0, 0, 0, 0.8)'
  },
  'navbar-nav navbar active > dropdown-toggle:focus': {
    'color': 'rgba(0, 0, 0, 0.8)'
  },
  'navbar
navbar-nav active > dropdown-toggle:focus': {
    'color': 'rgba(0, 0, 0, 0.8)'
  },
  'navbar-nav active > nav-link:hover': {
    'color': 'rgba(0, 0, 0, 0.8)'
  },
  'navbar-nav navbar active > dropdown-toggle:hover': {
    'color': 'rgba(0, 0, 0, 0.8)'
  },
  'navbar
navbar-nav active > dropdown-toggle:hover': {
    'color': 'rgba(0, 0, 0, 0.8)'
  },
  'navbar-nav nav-linkopen': {
    'color': 'rgba(0, 0, 0, 0.8)'
  },
  'navbar-nav navbar opendropdown-toggle': {
    'color': 'rgba(0, 0, 0, 0.8)'
  },
  'navbar
navbar-nav opendropdown-toggle': {
    'color': 'rgba(0, 0, 0, 0.8)'
  },
  'navbar-nav nav-linkopen:focus': {
    'color': 'rgba(0, 0, 0, 0.8)'
  },
  'navbar-nav navbar opendropdown-toggle:focus': {
    'color': 'rgba(0, 0, 0, 0.8)'
  },
  'navbar
navbar-nav opendropdown-toggle:focus': {
    'color': 'rgba(0, 0, 0, 0.8)'
  },
  'navbar-nav nav-linkopen:hover': {
    'color': 'rgba(0, 0, 0, 0.8)'
  },
  'navbar-nav navbar opendropdown-toggle:hover': {
    'color': 'rgba(0, 0, 0, 0.8)'
  },
  'navbar
navbar-nav opendropdown-toggle:hover': {
    'color': 'rgba(0, 0, 0, 0.8)'
  },
  'navbar-nav nav-linkactive': {
    'color': 'rgba(0, 0, 0, 0.8)'
  },
  'navbar-nav navbar activedropdown-toggle': {
    'color': 'rgba(0, 0, 0, 0.8)'
  },
  'navbar
navbar-nav activedropdown-toggle': {
    'color': 'rgba(0, 0, 0, 0.8)'
  },
  'navbar-nav nav-linkactive:focus': {
    'color': 'rgba(0, 0, 0, 0.8)'
  },
  'navbar-nav navbar activedropdown-toggle:focus': {
    'color': 'rgba(0, 0, 0, 0.8)'
  },
  'navbar
navbar-nav activedropdown-toggle:focus': {
    'color': 'rgba(0, 0, 0, 0.8)'
  },
  'navbar-nav nav-linkactive:hover': {
    'color': 'rgba(0, 0, 0, 0.8)'
  },
  'navbar-nav navbar activedropdown-toggle:hover': {
    'color': 'rgba(0, 0, 0, 0.8)'
  },
  'navbar
navbar-nav activedropdown-toggle:hover': {
    'color': 'rgba(0, 0, 0, 0.8)'
  },
  'navbar-divider': {
    'backgroundColor': 'rgba(0, 0, 0, 0.075)'
  },
  'progress-xs': {
    'height': [{ 'unit': 'px', 'value': 4 }]
  },
  'progress-sm': {
    'height': [{ 'unit': 'px', 'value': 8 }]
  },
  'progress-white': {
    'backgroundColor': 'rgba(255, 255, 255, 0.2) !important'
  },
  'progress-white progress-bar': {
    'backgroundColor': '#fff'
  },
  'sidebar': {
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'overflow': 'hidden',
    'color': '#fff',
    'background': '#263238'
  },
  'sidebar sidebar-close': {
    'position': 'absolute',
    'right': [{ 'unit': 'px', 'value': 0 }],
    'display': 'none',
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 1 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 1 }],
    'fontSize': [{ 'unit': 'px', 'value': 24 }],
    'fontWeight': '800',
    'lineHeight': [{ 'unit': 'px', 'value': 55 }],
    'color': '#fff',
    'background': '0',
    'border': [{ 'unit': 'px', 'value': 0 }],
    'opacity': '.8'
  },
  'sidebar sidebar-close:hover': {
    'opacity': '1'
  },
  'sidebar sidebar-nav': {
    'position': 'relative',
    'overflowX': 'hidden',
    'overflowY': 'auto',
    'MsOverflowStyle': '-ms-autohiding-scrollbar',
    'width': [{ 'unit': 'px', 'value': 200 }]
  },
  'sidebar sidebar-nav::-webkit-scrollbar': {
    'position': 'absolute',
    'width': [{ 'unit': 'px', 'value': 10 }],
    'marginLeft': [{ 'unit': 'px', 'value': -10 }],
    'WebkitAppearance': 'none'
  },
  'sidebar sidebar-nav::-webkit-scrollbar-track': {
    'backgroundColor': '#304047',
    'borderRight': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#1c2429' }],
    'borderLeft': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#1c2429' }]
  },
  'sidebar sidebar-nav::-webkit-scrollbar-thumb': {
    'height': [{ 'unit': 'px', 'value': 50 }],
    'backgroundColor': '#11171a',
    'backgroundClip': 'content-box',
    'borderColor': 'transparent',
    'borderStyle': 'solid',
    'borderWidth': '1px 2px'
  },
  'sidebar nav': {
    'width': [{ 'unit': 'px', 'value': 200 }],
    'flexDirection': 'column !important'
  },
  'sidebar nav nav-title': {
    'padding': [{ 'unit': 'rem', 'value': 0.75 }, { 'unit': 'rem', 'value': 1 }, { 'unit': 'rem', 'value': 0.75 }, { 'unit': 'rem', 'value': 1 }],
    'fontSize': [{ 'unit': 'px', 'value': 11 }],
    'fontWeight': '600',
    'color': '#cfd8dc',
    'textTransform': 'uppercase'
  },
  'sidebar nav divider': {
    'height': [{ 'unit': 'px', 'value': 10 }]
  },
  'sidebar nav nav-item': {
    'position': 'relative',
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'transition': 'background .3s ease-in-out'
  },
  'sidebar nav nav-item ul': {
    'maxHeight': [{ 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'overflowY': 'hidden',
    'transition': 'max-height .3s ease-in-out'
  },
  'sidebar nav nav-item ul li': {
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'listStyle': 'none'
  },
  'sidebar nav nav-item nav-link': {
    'display': 'block',
    'padding': [{ 'unit': 'rem', 'value': 0.75 }, { 'unit': 'rem', 'value': 1 }, { 'unit': 'rem', 'value': 0.75 }, { 'unit': 'rem', 'value': 1 }],
    'color': '#fff',
    'textDecoration': 'none',
    'background': 'transparent'
  },
  'sidebar nav nav-item navbar dropdown-toggle': {
    'display': 'block',
    'padding': [{ 'unit': 'rem', 'value': 0.75 }, { 'unit': 'rem', 'value': 1 }, { 'unit': 'rem', 'value': 0.75 }, { 'unit': 'rem', 'value': 1 }],
    'color': '#fff',
    'textDecoration': 'none',
    'background': 'transparent'
  },
  'navbar sidebar nav nav-item dropdown-toggle': {
    'display': 'block',
    'padding': [{ 'unit': 'rem', 'value': 0.75 }, { 'unit': 'rem', 'value': 1 }, { 'unit': 'rem', 'value': 0.75 }, { 'unit': 'rem', 'value': 1 }],
    'color': '#fff',
    'textDecoration': 'none',
    'background': 'transparent'
  },
  'sidebar nav nav-item nav-link:hover': {
    'color': '#fff !important',
    'background': '#20a8d8 !important'
  },
  'sidebar nav nav-item navbar dropdown-toggle:hover': {
    'color': '#fff !important',
    'background': '#20a8d8 !important'
  },
  'navbar sidebar nav nav-item dropdown-toggle:hover': {
    'color': '#fff !important',
    'background': '#20a8d8 !important'
  },
  'sidebar nav nav-item nav-link:hover i': {
    'color': '#fff !important'
  },
  'sidebar nav nav-item navbar dropdown-toggle:hover i': {
    'color': '#fff !important'
  },
  'navbar sidebar nav nav-item dropdown-toggle:hover i': {
    'color': '#fff !important'
  },
  'sidebar nav nav-item nav-linkactive': {
    'color': '#fff',
    'background': '#304047'
  },
  'sidebar nav nav-item navbar activedropdown-toggle': {
    'color': '#fff',
    'background': '#304047'
  },
  'navbar sidebar nav nav-item activedropdown-toggle': {
    'color': '#fff',
    'background': '#304047'
  },
  'sidebar nav nav-item nav-linkactive i': {
    'color': '#20a8d8'
  },
  'sidebar nav nav-item navbar activedropdown-toggle i': {
    'color': '#20a8d8'
  },
  'navbar sidebar nav nav-item activedropdown-toggle i': {
    'color': '#20a8d8'
  },
  'sidebar nav nav-item nav-link [class^="icon-"]': {
    'display': 'inline-block',
    'marginTop': [{ 'unit': 'px', 'value': -4 }],
    'verticalAlign': 'middle'
  },
  'sidebar nav nav-item navbar dropdown-toggle [class^="icon-"]': {
    'display': 'inline-block',
    'marginTop': [{ 'unit': 'px', 'value': -4 }],
    'verticalAlign': 'middle'
  },
  'navbar sidebar nav nav-item dropdown-toggle [class^="icon-"]': {
    'display': 'inline-block',
    'marginTop': [{ 'unit': 'px', 'value': -4 }],
    'verticalAlign': 'middle'
  },
  'sidebar nav nav-item nav-link [class*=" icon-"]': {
    'display': 'inline-block',
    'marginTop': [{ 'unit': 'px', 'value': -4 }],
    'verticalAlign': 'middle'
  },
  'sidebar nav nav-item navbar dropdown-toggle [class*=" icon-"]': {
    'display': 'inline-block',
    'marginTop': [{ 'unit': 'px', 'value': -4 }],
    'verticalAlign': 'middle'
  },
  'navbar sidebar nav nav-item dropdown-toggle [class*=" icon-"]': {
    'display': 'inline-block',
    'marginTop': [{ 'unit': 'px', 'value': -4 }],
    'verticalAlign': 'middle'
  },
  'sidebar nav nav-item nav-link i': {
    'width': [{ 'unit': 'px', 'value': 20 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 0.5 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'color': '#b0bec5',
    'textAlign': 'center'
  },
  'sidebar nav nav-item navbar dropdown-toggle i': {
    'width': [{ 'unit': 'px', 'value': 20 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 0.5 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'color': '#b0bec5',
    'textAlign': 'center'
  },
  'navbar sidebar nav nav-item dropdown-toggle i': {
    'width': [{ 'unit': 'px', 'value': 20 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 0.5 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'color': '#b0bec5',
    'textAlign': 'center'
  },
  'sidebar nav nav-item nav-link badge': {
    'float': 'right',
    'marginTop': [{ 'unit': 'px', 'value': 2 }]
  },
  'sidebar nav nav-item navbar dropdown-toggle badge': {
    'float': 'right',
    'marginTop': [{ 'unit': 'px', 'value': 2 }]
  },
  'navbar sidebar nav nav-item dropdown-toggle badge': {
    'float': 'right',
    'marginTop': [{ 'unit': 'px', 'value': 2 }]
  },
  'sidebar nav nav-item nav-linknav-dropdown-toggle::before': {
    'position': 'absolute',
    'top': [{ 'unit': 'rem', 'value': 0.96875 }],
    'right': [{ 'unit': 'rem', 'value': 1 }],
    'display': 'block',
    'width': [{ 'unit': 'rem', 'value': 0.875 }],
    'height': [{ 'unit': 'rem', 'value': 0.875 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'fontSize': [{ 'unit': 'rem', 'value': 0.875 }],
    'lineHeight': [{ 'unit': 'rem', 'value': 0.65625 }],
    'textAlign': 'center',
    'content': '"\2039"',
    'transition': '.3s'
  },
  'sidebar nav nav-item navbar nav-dropdown-toggledropdown-toggle::before': {
    'position': 'absolute',
    'top': [{ 'unit': 'rem', 'value': 0.96875 }],
    'right': [{ 'unit': 'rem', 'value': 1 }],
    'display': 'block',
    'width': [{ 'unit': 'rem', 'value': 0.875 }],
    'height': [{ 'unit': 'rem', 'value': 0.875 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'fontSize': [{ 'unit': 'rem', 'value': 0.875 }],
    'lineHeight': [{ 'unit': 'rem', 'value': 0.65625 }],
    'textAlign': 'center',
    'content': '"\2039"',
    'transition': '.3s'
  },
  'navbar sidebar nav nav-item nav-dropdown-toggledropdown-toggle::before': {
    'position': 'absolute',
    'top': [{ 'unit': 'rem', 'value': 0.96875 }],
    'right': [{ 'unit': 'rem', 'value': 1 }],
    'display': 'block',
    'width': [{ 'unit': 'rem', 'value': 0.875 }],
    'height': [{ 'unit': 'rem', 'value': 0.875 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'fontSize': [{ 'unit': 'rem', 'value': 0.875 }],
    'lineHeight': [{ 'unit': 'rem', 'value': 0.65625 }],
    'textAlign': 'center',
    'content': '"\2039"',
    'transition': '.3s'
  },
  'sidebar nav nav-itemnav-dropdownopen': {
    'background': 'rgba(0, 0, 0, 0.2)'
  },
  'sidebar nav nav-itemnav-dropdownopen > ul': {
    'maxHeight': [{ 'unit': 'px', 'value': 1000 }]
  },
  'sidebar nav nav-itemnav-dropdownopen > ol': {
    'maxHeight': [{ 'unit': 'px', 'value': 1000 }]
  },
  'sidebar nav nav-itemnav-dropdownopen nav-link': {
    'color': '#fff',
    'borderLeft': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': '!important' }]
  },
  'sidebar nav nav-itemnav-dropdownopen navbar dropdown-toggle': {
    'color': '#fff',
    'borderLeft': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': '!important' }]
  },
  'navbar sidebar nav nav-itemnav-dropdownopen dropdown-toggle': {
    'color': '#fff',
    'borderLeft': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': '!important' }]
  },
  'sidebar nav nav-itemnav-dropdownopen > nav-linknav-dropdown-toggle::before': {
    'transform': 'rotate(-90deg)'
  },
  'sidebar nav navbar nav-itemnav-dropdownopen > nav-dropdown-toggledropdown-toggle::before': {
    'transform': 'rotate(-90deg)'
  },
  'navbar sidebar nav nav-itemnav-dropdownopen > nav-dropdown-toggledropdown-toggle::before': {
    'transform': 'rotate(-90deg)'
  },
  'sidebar nav nav-itemnav-dropdownopen nav-dropdownopen': {
    'borderLeft': [{ 'unit': 'px', 'value': 0 }]
  },
  'sidebar nav nav-itemnav-dropdownnt': {
    'transition': '0s !important'
  },
  'sidebar nav nav-itemnav-dropdownnt > ul': {
    'transition': '0s !important'
  },
  'sidebar nav nav-itemnav-dropdownnt > ol': {
    'transition': '0s !important'
  },
  'sidebar nav nav-itemnav-dropdownnt nav-linknav-dropdown-toggle::before': {
    'transition': '0s !important'
  },
  'sidebar nav nav-itemnav-dropdownnt navbar nav-dropdown-toggledropdown-toggle::before': {
    'transition': '0s !important'
  },
  'navbar sidebar nav nav-itemnav-dropdownnt nav-dropdown-toggledropdown-toggle::before': {
    'transition': '0s !important'
  },
  'sidebar nav nav-item nav-label': {
    'display': 'block',
    'padding': [{ 'unit': 'rem', 'value': 0.09375 }, { 'unit': 'rem', 'value': 1 }, { 'unit': 'rem', 'value': 0.09375 }, { 'unit': 'rem', 'value': 1 }],
    'color': '#cfd8dc'
  },
  'sidebar nav nav-item nav-label:hover': {
    'color': '#fff',
    'textDecoration': 'none'
  },
  'sidebar nav nav-item nav-label i': {
    'width': [{ 'unit': 'px', 'value': 20 }],
    'margin': [{ 'unit': 'px', 'value': -3 }, { 'unit': 'rem', 'value': 0.5 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'fontSize': [{ 'unit': 'px', 'value': 10 }],
    'color': '#b0bec5',
    'textAlign': 'center',
    'verticalAlign': 'middle'
  },
  'sidebar nav nav-item progress': {
    'backgroundColor': '#455b66 !important'
  },
  'switchswitch-default': {
    'position': 'relative',
    'display': 'inline-block',
    'verticalAlign': 'top',
    'width': [{ 'unit': 'px', 'value': 40 }],
    'height': [{ 'unit': 'px', 'value': 24 }],
    'backgroundColor': 'transparent',
    'cursor': 'pointer'
  },
  'switchswitch-default switch-input': {
    'position': 'absolute',
    'top': [{ 'unit': 'px', 'value': 0 }],
    'left': [{ 'unit': 'px', 'value': 0 }],
    'opacity': '0'
  },
  'switchswitch-default switch-label': {
    'position': 'relative',
    'display': 'block',
    'height': [{ 'unit': 'string', 'value': 'inherit' }],
    'fontSize': [{ 'unit': 'px', 'value': 10 }],
    'fontWeight': '600',
    'textTransform': 'uppercase',
    'backgroundColor': '#fff',
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#cfd8dc' }],
    'borderRadius': '2px',
    'transition': 'opacity background .15s ease-out'
  },
  'switchswitch-default switch-input:checked ~ switch-label::before': {
    'opacity': '0'
  },
  'switchswitch-default switch-input:checked ~ switch-label::after': {
    'opacity': '1'
  },
  'switchswitch-default switch-handle': {
    'position': 'absolute',
    'top': [{ 'unit': 'px', 'value': 2 }],
    'left': [{ 'unit': 'px', 'value': 2 }],
    'width': [{ 'unit': 'px', 'value': 20 }],
    'height': [{ 'unit': 'px', 'value': 20 }],
    'background': '#fff',
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#cfd8dc' }],
    'borderRadius': '1px',
    'transition': 'left .15s ease-out'
  },
  'switchswitch-default switch-input:checked ~ switch-handle': {
    'left': [{ 'unit': 'px', 'value': 18 }]
  },
  'switchswitch-defaultswitch-lg': {
    'width': [{ 'unit': 'px', 'value': 48 }],
    'height': [{ 'unit': 'px', 'value': 28 }]
  },
  'switchswitch-defaultswitch-lg switch-label': {
    'fontSize': [{ 'unit': 'px', 'value': 12 }]
  },
  'switchswitch-defaultswitch-lg switch-handle': {
    'width': [{ 'unit': 'px', 'value': 24 }],
    'height': [{ 'unit': 'px', 'value': 24 }]
  },
  'switchswitch-defaultswitch-lg switch-input:checked ~ switch-handle': {
    'left': [{ 'unit': 'px', 'value': 22 }]
  },
  'switchswitch-defaultswitch-sm': {
    'width': [{ 'unit': 'px', 'value': 32 }],
    'height': [{ 'unit': 'px', 'value': 20 }]
  },
  'switchswitch-defaultswitch-sm switch-label': {
    'fontSize': [{ 'unit': 'px', 'value': 8 }]
  },
  'switchswitch-defaultswitch-sm switch-handle': {
    'width': [{ 'unit': 'px', 'value': 16 }],
    'height': [{ 'unit': 'px', 'value': 16 }]
  },
  'switchswitch-defaultswitch-sm switch-input:checked ~ switch-handle': {
    'left': [{ 'unit': 'px', 'value': 14 }]
  },
  'switchswitch-defaultswitch-xs': {
    'width': [{ 'unit': 'px', 'value': 24 }],
    'height': [{ 'unit': 'px', 'value': 16 }]
  },
  'switchswitch-defaultswitch-xs switch-label': {
    'fontSize': [{ 'unit': 'px', 'value': 7 }]
  },
  'switchswitch-defaultswitch-xs switch-handle': {
    'width': [{ 'unit': 'px', 'value': 12 }],
    'height': [{ 'unit': 'px', 'value': 12 }]
  },
  'switchswitch-defaultswitch-xs switch-input:checked ~ switch-handle': {
    'left': [{ 'unit': 'px', 'value': 10 }]
  },
  'switchswitch-text': {
    'position': 'relative',
    'display': 'inline-block',
    'verticalAlign': 'top',
    'width': [{ 'unit': 'px', 'value': 48 }],
    'height': [{ 'unit': 'px', 'value': 24 }],
    'backgroundColor': 'transparent',
    'cursor': 'pointer'
  },
  'switchswitch-text switch-input': {
    'position': 'absolute',
    'top': [{ 'unit': 'px', 'value': 0 }],
    'left': [{ 'unit': 'px', 'value': 0 }],
    'opacity': '0'
  },
  'switchswitch-text switch-label': {
    'position': 'relative',
    'display': 'block',
    'height': [{ 'unit': 'string', 'value': 'inherit' }],
    'fontSize': [{ 'unit': 'px', 'value': 10 }],
    'fontWeight': '600',
    'textTransform': 'uppercase',
    'backgroundColor': '#fff',
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#cfd8dc' }],
    'borderRadius': '2px',
    'transition': 'opacity background .15s ease-out'
  },
  'switchswitch-text switch-label::before': {
    'position': 'absolute',
    'top': [{ 'unit': '%V', 'value': 0.5 }],
    'width': [{ 'unit': '%H', 'value': 0.5 }],
    'marginTop': [{ 'unit': 'em', 'value': -0.5 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1 }],
    'textAlign': 'center',
    'transition': 'inherit'
  },
  'switchswitch-text switch-label::after': {
    'position': 'absolute',
    'top': [{ 'unit': '%V', 'value': 0.5 }],
    'width': [{ 'unit': '%H', 'value': 0.5 }],
    'marginTop': [{ 'unit': 'em', 'value': -0.5 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1 }],
    'textAlign': 'center',
    'transition': 'inherit'
  },
  'switchswitch-text switch-label::before': {
    'right': [{ 'unit': 'px', 'value': 1 }],
    'color': '#cfd8dc',
    'content': 'attr(data-off)'
  },
  'switchswitch-text switch-label::after': {
    'left': [{ 'unit': 'px', 'value': 1 }],
    'color': '#fff',
    'content': 'attr(data-on)',
    'opacity': '0'
  },
  'switchswitch-text switch-input:checked ~ switch-label::before': {
    'opacity': '0'
  },
  'switchswitch-text switch-input:checked ~ switch-label::after': {
    'opacity': '1'
  },
  'switchswitch-text switch-handle': {
    'position': 'absolute',
    'top': [{ 'unit': 'px', 'value': 2 }],
    'left': [{ 'unit': 'px', 'value': 2 }],
    'width': [{ 'unit': 'px', 'value': 20 }],
    'height': [{ 'unit': 'px', 'value': 20 }],
    'background': '#fff',
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#cfd8dc' }],
    'borderRadius': '1px',
    'transition': 'left .15s ease-out'
  },
  'switchswitch-text switch-input:checked ~ switch-handle': {
    'left': [{ 'unit': 'px', 'value': 26 }]
  },
  'switchswitch-textswitch-lg': {
    'width': [{ 'unit': 'px', 'value': 56 }],
    'height': [{ 'unit': 'px', 'value': 28 }]
  },
  'switchswitch-textswitch-lg switch-label': {
    'fontSize': [{ 'unit': 'px', 'value': 12 }]
  },
  'switchswitch-textswitch-lg switch-handle': {
    'width': [{ 'unit': 'px', 'value': 24 }],
    'height': [{ 'unit': 'px', 'value': 24 }]
  },
  'switchswitch-textswitch-lg switch-input:checked ~ switch-handle': {
    'left': [{ 'unit': 'px', 'value': 30 }]
  },
  'switchswitch-textswitch-sm': {
    'width': [{ 'unit': 'px', 'value': 40 }],
    'height': [{ 'unit': 'px', 'value': 20 }]
  },
  'switchswitch-textswitch-sm switch-label': {
    'fontSize': [{ 'unit': 'px', 'value': 8 }]
  },
  'switchswitch-textswitch-sm switch-handle': {
    'width': [{ 'unit': 'px', 'value': 16 }],
    'height': [{ 'unit': 'px', 'value': 16 }]
  },
  'switchswitch-textswitch-sm switch-input:checked ~ switch-handle': {
    'left': [{ 'unit': 'px', 'value': 22 }]
  },
  'switchswitch-textswitch-xs': {
    'width': [{ 'unit': 'px', 'value': 32 }],
    'height': [{ 'unit': 'px', 'value': 16 }]
  },
  'switchswitch-textswitch-xs switch-label': {
    'fontSize': [{ 'unit': 'px', 'value': 7 }]
  },
  'switchswitch-textswitch-xs switch-handle': {
    'width': [{ 'unit': 'px', 'value': 12 }],
    'height': [{ 'unit': 'px', 'value': 12 }]
  },
  'switchswitch-textswitch-xs switch-input:checked ~ switch-handle': {
    'left': [{ 'unit': 'px', 'value': 18 }]
  },
  'switchswitch-icon': {
    'position': 'relative',
    'display': 'inline-block',
    'verticalAlign': 'top',
    'width': [{ 'unit': 'px', 'value': 48 }],
    'height': [{ 'unit': 'px', 'value': 24 }],
    'backgroundColor': 'transparent',
    'cursor': 'pointer'
  },
  'switchswitch-icon switch-input': {
    'position': 'absolute',
    'top': [{ 'unit': 'px', 'value': 0 }],
    'left': [{ 'unit': 'px', 'value': 0 }],
    'opacity': '0'
  },
  'switchswitch-icon switch-label': {
    'position': 'relative',
    'display': 'block',
    'height': [{ 'unit': 'string', 'value': 'inherit' }],
    'fontFamily': 'FontAwesome',
    'fontSize': [{ 'unit': 'px', 'value': 10 }],
    'fontWeight': '600',
    'textTransform': 'uppercase',
    'backgroundColor': '#fff',
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#cfd8dc' }],
    'borderRadius': '2px',
    'transition': 'opacity background .15s ease-out'
  },
  'switchswitch-icon switch-label::before': {
    'position': 'absolute',
    'top': [{ 'unit': '%V', 'value': 0.5 }],
    'width': [{ 'unit': '%H', 'value': 0.5 }],
    'marginTop': [{ 'unit': 'em', 'value': -0.5 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1 }],
    'textAlign': 'center',
    'transition': 'inherit'
  },
  'switchswitch-icon switch-label::after': {
    'position': 'absolute',
    'top': [{ 'unit': '%V', 'value': 0.5 }],
    'width': [{ 'unit': '%H', 'value': 0.5 }],
    'marginTop': [{ 'unit': 'em', 'value': -0.5 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1 }],
    'textAlign': 'center',
    'transition': 'inherit'
  },
  'switchswitch-icon switch-label::before': {
    'right': [{ 'unit': 'px', 'value': 1 }],
    'color': '#cfd8dc',
    'content': 'attr(data-off)'
  },
  'switchswitch-icon switch-label::after': {
    'left': [{ 'unit': 'px', 'value': 1 }],
    'color': '#fff',
    'content': 'attr(data-on)',
    'opacity': '0'
  },
  'switchswitch-icon switch-input:checked ~ switch-label::before': {
    'opacity': '0'
  },
  'switchswitch-icon switch-input:checked ~ switch-label::after': {
    'opacity': '1'
  },
  'switchswitch-icon switch-handle': {
    'position': 'absolute',
    'top': [{ 'unit': 'px', 'value': 2 }],
    'left': [{ 'unit': 'px', 'value': 2 }],
    'width': [{ 'unit': 'px', 'value': 20 }],
    'height': [{ 'unit': 'px', 'value': 20 }],
    'background': '#fff',
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#cfd8dc' }],
    'borderRadius': '1px',
    'transition': 'left .15s ease-out'
  },
  'switchswitch-icon switch-input:checked ~ switch-handle': {
    'left': [{ 'unit': 'px', 'value': 26 }]
  },
  'switchswitch-iconswitch-lg': {
    'width': [{ 'unit': 'px', 'value': 56 }],
    'height': [{ 'unit': 'px', 'value': 28 }]
  },
  'switchswitch-iconswitch-lg switch-label': {
    'fontSize': [{ 'unit': 'px', 'value': 12 }]
  },
  'switchswitch-iconswitch-lg switch-handle': {
    'width': [{ 'unit': 'px', 'value': 24 }],
    'height': [{ 'unit': 'px', 'value': 24 }]
  },
  'switchswitch-iconswitch-lg switch-input:checked ~ switch-handle': {
    'left': [{ 'unit': 'px', 'value': 30 }]
  },
  'switchswitch-iconswitch-sm': {
    'width': [{ 'unit': 'px', 'value': 40 }],
    'height': [{ 'unit': 'px', 'value': 20 }]
  },
  'switchswitch-iconswitch-sm switch-label': {
    'fontSize': [{ 'unit': 'px', 'value': 8 }]
  },
  'switchswitch-iconswitch-sm switch-handle': {
    'width': [{ 'unit': 'px', 'value': 16 }],
    'height': [{ 'unit': 'px', 'value': 16 }]
  },
  'switchswitch-iconswitch-sm switch-input:checked ~ switch-handle': {
    'left': [{ 'unit': 'px', 'value': 22 }]
  },
  'switchswitch-iconswitch-xs': {
    'width': [{ 'unit': 'px', 'value': 32 }],
    'height': [{ 'unit': 'px', 'value': 16 }]
  },
  'switchswitch-iconswitch-xs switch-label': {
    'fontSize': [{ 'unit': 'px', 'value': 7 }]
  },
  'switchswitch-iconswitch-xs switch-handle': {
    'width': [{ 'unit': 'px', 'value': 12 }],
    'height': [{ 'unit': 'px', 'value': 12 }]
  },
  'switchswitch-iconswitch-xs switch-input:checked ~ switch-handle': {
    'left': [{ 'unit': 'px', 'value': 18 }]
  },
  'switchswitch-3d': {
    'position': 'relative',
    'display': 'inline-block',
    'verticalAlign': 'top',
    'width': [{ 'unit': 'px', 'value': 40 }],
    'height': [{ 'unit': 'px', 'value': 24 }],
    'backgroundColor': 'transparent',
    'cursor': 'pointer'
  },
  'switchswitch-3d switch-input': {
    'position': 'absolute',
    'top': [{ 'unit': 'px', 'value': 0 }],
    'left': [{ 'unit': 'px', 'value': 0 }],
    'opacity': '0'
  },
  'switchswitch-3d switch-label': {
    'position': 'relative',
    'display': 'block',
    'height': [{ 'unit': 'string', 'value': 'inherit' }],
    'fontSize': [{ 'unit': 'px', 'value': 10 }],
    'fontWeight': '600',
    'textTransform': 'uppercase',
    'backgroundColor': '#eceff1',
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#cfd8dc' }],
    'borderRadius': '2px',
    'transition': 'opacity background .15s ease-out'
  },
  'switchswitch-3d switch-input:checked ~ switch-label::before': {
    'opacity': '0'
  },
  'switchswitch-3d switch-input:checked ~ switch-label::after': {
    'opacity': '1'
  },
  'switchswitch-3d switch-handle': {
    'position': 'absolute',
    'top': [{ 'unit': 'px', 'value': 0 }],
    'left': [{ 'unit': 'px', 'value': 0 }],
    'width': [{ 'unit': 'px', 'value': 24 }],
    'height': [{ 'unit': 'px', 'value': 24 }],
    'background': '#fff',
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#cfd8dc' }],
    'borderRadius': '1px',
    'transition': 'left .15s ease-out',
    'border': [{ 'unit': 'px', 'value': 0 }],
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 2 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'string', 'value': 'rgba(0, 0, 0, 0.3)' }]
  },
  'switchswitch-3d switch-input:checked ~ switch-handle': {
    'left': [{ 'unit': 'px', 'value': 16 }]
  },
  'switchswitch-3dswitch-lg': {
    'width': [{ 'unit': 'px', 'value': 48 }],
    'height': [{ 'unit': 'px', 'value': 28 }]
  },
  'switchswitch-3dswitch-lg switch-label': {
    'fontSize': [{ 'unit': 'px', 'value': 12 }]
  },
  'switchswitch-3dswitch-lg switch-handle': {
    'width': [{ 'unit': 'px', 'value': 28 }],
    'height': [{ 'unit': 'px', 'value': 28 }]
  },
  'switchswitch-3dswitch-lg switch-input:checked ~ switch-handle': {
    'left': [{ 'unit': 'px', 'value': 20 }]
  },
  'switchswitch-3dswitch-sm': {
    'width': [{ 'unit': 'px', 'value': 32 }],
    'height': [{ 'unit': 'px', 'value': 20 }]
  },
  'switchswitch-3dswitch-sm switch-label': {
    'fontSize': [{ 'unit': 'px', 'value': 8 }]
  },
  'switchswitch-3dswitch-sm switch-handle': {
    'width': [{ 'unit': 'px', 'value': 20 }],
    'height': [{ 'unit': 'px', 'value': 20 }]
  },
  'switchswitch-3dswitch-sm switch-input:checked ~ switch-handle': {
    'left': [{ 'unit': 'px', 'value': 12 }]
  },
  'switchswitch-3dswitch-xs': {
    'width': [{ 'unit': 'px', 'value': 24 }],
    'height': [{ 'unit': 'px', 'value': 16 }]
  },
  'switchswitch-3dswitch-xs switch-label': {
    'fontSize': [{ 'unit': 'px', 'value': 7 }]
  },
  'switchswitch-3dswitch-xs switch-handle': {
    'width': [{ 'unit': 'px', 'value': 16 }],
    'height': [{ 'unit': 'px', 'value': 16 }]
  },
  'switchswitch-3dswitch-xs switch-input:checked ~ switch-handle': {
    'left': [{ 'unit': 'px', 'value': 8 }]
  },
  'switch-pill switch-label': {
    'borderRadius': '50em !important'
  },
  'switchswitch-3d switch-label': {
    'borderRadius': '50em !important'
  },
  'switch-pill switch-handle': {
    'borderRadius': '50em !important'
  },
  'switchswitch-3d switch-handle': {
    'borderRadius': '50em !important'
  },
  'switch-pill switch-label::before': {
    'right': [{ 'unit': 'px', 'value': 2 }, { 'unit': 'string', 'value': '!important' }]
  },
  'switchswitch-3d switch-label::before': {
    'right': [{ 'unit': 'px', 'value': 2 }, { 'unit': 'string', 'value': '!important' }]
  },
  'switch-pill switch-label::after': {
    'left': [{ 'unit': 'px', 'value': 2 }, { 'unit': 'string', 'value': '!important' }]
  },
  'switchswitch-3d switch-label::after': {
    'left': [{ 'unit': 'px', 'value': 2 }, { 'unit': 'string', 'value': '!important' }]
  },
  'switch-primary > switch-input:checked ~ switch-label': {
    'background': '#20a8d8 !important',
    'borderColor': '#1985ac'
  },
  'switch-primary > switch-input:checked ~ switch-handle': {
    'borderColor': '#1985ac'
  },
  'switch-primary-outline > switch-input:checked ~ switch-label': {
    'background': '#fff !important',
    'borderColor': '#20a8d8'
  },
  'switch-primary-outline > switch-input:checked ~ switch-label::after': {
    'color': '#20a8d8'
  },
  'switch-primary-outline > switch-input:checked ~ switch-handle': {
    'borderColor': '#20a8d8'
  },
  'switch-primary-outline-alt > switch-input:checked ~ switch-label': {
    'background': '#fff !important',
    'borderColor': '#20a8d8'
  },
  'switch-primary-outline-alt > switch-input:checked ~ switch-label::after': {
    'color': '#20a8d8'
  },
  'switch-primary-outline-alt > switch-input:checked ~ switch-handle': {
    'background': '#20a8d8 !important',
    'borderColor': '#20a8d8'
  },
  'switch-secondary > switch-input:checked ~ switch-label': {
    'background': '#cfd8dc !important',
    'borderColor': '#b2c0c6'
  },
  'switch-secondary > switch-input:checked ~ switch-handle': {
    'borderColor': '#b2c0c6'
  },
  'switch-secondary-outline > switch-input:checked ~ switch-label': {
    'background': '#fff !important',
    'borderColor': '#cfd8dc'
  },
  'switch-secondary-outline > switch-input:checked ~ switch-label::after': {
    'color': '#cfd8dc'
  },
  'switch-secondary-outline > switch-input:checked ~ switch-handle': {
    'borderColor': '#cfd8dc'
  },
  'switch-secondary-outline-alt > switch-input:checked ~ switch-label': {
    'background': '#fff !important',
    'borderColor': '#cfd8dc'
  },
  'switch-secondary-outline-alt > switch-input:checked ~ switch-label::after': {
    'color': '#cfd8dc'
  },
  'switch-secondary-outline-alt > switch-input:checked ~ switch-handle': {
    'background': '#cfd8dc !important',
    'borderColor': '#cfd8dc'
  },
  'switch-success > switch-input:checked ~ switch-label': {
    'background': '#4dbd74 !important',
    'borderColor': '#3a9d5d'
  },
  'switch-success > switch-input:checked ~ switch-handle': {
    'borderColor': '#3a9d5d'
  },
  'switch-success-outline > switch-input:checked ~ switch-label': {
    'background': '#fff !important',
    'borderColor': '#4dbd74'
  },
  'switch-success-outline > switch-input:checked ~ switch-label::after': {
    'color': '#4dbd74'
  },
  'switch-success-outline > switch-input:checked ~ switch-handle': {
    'borderColor': '#4dbd74'
  },
  'switch-success-outline-alt > switch-input:checked ~ switch-label': {
    'background': '#fff !important',
    'borderColor': '#4dbd74'
  },
  'switch-success-outline-alt > switch-input:checked ~ switch-label::after': {
    'color': '#4dbd74'
  },
  'switch-success-outline-alt > switch-input:checked ~ switch-handle': {
    'background': '#4dbd74 !important',
    'borderColor': '#4dbd74'
  },
  'switch-info > switch-input:checked ~ switch-label': {
    'background': '#63c2de !important',
    'borderColor': '#39b2d5'
  },
  'switch-info > switch-input:checked ~ switch-handle': {
    'borderColor': '#39b2d5'
  },
  'switch-info-outline > switch-input:checked ~ switch-label': {
    'background': '#fff !important',
    'borderColor': '#63c2de'
  },
  'switch-info-outline > switch-input:checked ~ switch-label::after': {
    'color': '#63c2de'
  },
  'switch-info-outline > switch-input:checked ~ switch-handle': {
    'borderColor': '#63c2de'
  },
  'switch-info-outline-alt > switch-input:checked ~ switch-label': {
    'background': '#fff !important',
    'borderColor': '#63c2de'
  },
  'switch-info-outline-alt > switch-input:checked ~ switch-label::after': {
    'color': '#63c2de'
  },
  'switch-info-outline-alt > switch-input:checked ~ switch-handle': {
    'background': '#63c2de !important',
    'borderColor': '#63c2de'
  },
  'switch-warning > switch-input:checked ~ switch-label': {
    'background': '#f8cb00 !important',
    'borderColor': '#c5a100'
  },
  'switch-warning > switch-input:checked ~ switch-handle': {
    'borderColor': '#c5a100'
  },
  'switch-warning-outline > switch-input:checked ~ switch-label': {
    'background': '#fff !important',
    'borderColor': '#f8cb00'
  },
  'switch-warning-outline > switch-input:checked ~ switch-label::after': {
    'color': '#f8cb00'
  },
  'switch-warning-outline > switch-input:checked ~ switch-handle': {
    'borderColor': '#f8cb00'
  },
  'switch-warning-outline-alt > switch-input:checked ~ switch-label': {
    'background': '#fff !important',
    'borderColor': '#f8cb00'
  },
  'switch-warning-outline-alt > switch-input:checked ~ switch-label::after': {
    'color': '#f8cb00'
  },
  'switch-warning-outline-alt > switch-input:checked ~ switch-handle': {
    'background': '#f8cb00 !important',
    'borderColor': '#f8cb00'
  },
  'switch-danger > switch-input:checked ~ switch-label': {
    'background': '#f86c6b !important',
    'borderColor': '#f63c3a'
  },
  'switch-danger > switch-input:checked ~ switch-handle': {
    'borderColor': '#f63c3a'
  },
  'switch-danger-outline > switch-input:checked ~ switch-label': {
    'background': '#fff !important',
    'borderColor': '#f86c6b'
  },
  'switch-danger-outline > switch-input:checked ~ switch-label::after': {
    'color': '#f86c6b'
  },
  'switch-danger-outline > switch-input:checked ~ switch-handle': {
    'borderColor': '#f86c6b'
  },
  'switch-danger-outline-alt > switch-input:checked ~ switch-label': {
    'background': '#fff !important',
    'borderColor': '#f86c6b'
  },
  'switch-danger-outline-alt > switch-input:checked ~ switch-label::after': {
    'color': '#f86c6b'
  },
  'switch-danger-outline-alt > switch-input:checked ~ switch-handle': {
    'background': '#f86c6b !important',
    'borderColor': '#f86c6b'
  },
  'table-outline': {
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#cfd8dc' }]
  },
  'table-outline td': {
    'verticalAlign': 'middle'
  },
  'table-align-middle td': {
    'verticalAlign': 'middle'
  },
  'table-clear td': {
    'border': [{ 'unit': 'px', 'value': 0 }]
  },
  'social-box': {
    'minHeight': [{ 'unit': 'px', 'value': 160 }],
    'marginBottom': [{ 'unit': 'rem', 'value': 1.5 }],
    'textAlign': 'center',
    'background': '#fff',
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#cfd8dc' }]
  },
  'social-box i': {
    'display': 'block',
    'margin': [{ 'unit': 'px', 'value': -1 }, { 'unit': 'px', 'value': -1 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': -1 }],
    'fontSize': [{ 'unit': 'px', 'value': 40 }],
    'lineHeight': [{ 'unit': 'px', 'value': 90 }],
    'background': '#cfd8dc'
  },
  'social-box chart-wrapper': {
    'height': [{ 'unit': 'px', 'value': 90 }],
    'margin': [{ 'unit': 'px', 'value': -90 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'social-box chart-wrapper canvas': {
    'width': [{ 'unit': '%H', 'value': 1 }, { 'unit': 'string', 'value': '!important' }],
    'height': [{ 'unit': 'px', 'value': 90 }, { 'unit': 'string', 'value': '!important' }]
  },
  'social-box ul': {
    'padding': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 0 }],
    'listStyle': 'none'
  },
  'social-box ul li': {
    'display': 'block',
    'float': 'left',
    'width': [{ 'unit': '%H', 'value': 0.5 }]
  },
  'social-box ul li:first-child': {
    'borderRight': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#cfd8dc' }]
  },
  'social-box ul li strong': {
    'display': 'block',
    'fontSize': [{ 'unit': 'px', 'value': 20 }]
  },
  'social-box ul li span': {
    'fontSize': [{ 'unit': 'px', 'value': 10 }],
    'fontWeight': '500',
    'color': '#cfd8dc',
    'textTransform': 'uppercase'
  },
  'social-boxfacebook i': {
    'color': '#fff',
    'background': '#3b5998'
  },
  'social-boxtwitter i': {
    'color': '#fff',
    'background': '#00aced'
  },
  'social-boxlinkedin i': {
    'color': '#fff',
    'background': '#4875b4'
  },
  'social-boxgoogle-plus i': {
    'color': '#fff',
    'background': '#bb4b39'
  },
  'horizontal-bars': {
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'listStyle': 'none'
  },
  'horizontal-bars li': {
    'position': 'relative',
    'height': [{ 'unit': 'px', 'value': 40 }],
    'lineHeight': [{ 'unit': 'px', 'value': 40 }],
    'verticalAlign': 'middle'
  },
  'horizontal-bars li title': {
    'width': [{ 'unit': 'px', 'value': 100 }],
    'fontSize': [{ 'unit': 'px', 'value': 12 }],
    'fontWeight': '600',
    'color': '#b0bec5',
    'verticalAlign': 'middle'
  },
  'horizontal-bars li bars': {
    'position': 'absolute',
    'top': [{ 'unit': 'px', 'value': 15 }],
    'width': [{ 'unit': '%H', 'value': 1 }],
    'paddingLeft': [{ 'unit': 'px', 'value': 100 }]
  },
  'horizontal-bars li bars progress:first-child': {
    'marginBottom': [{ 'unit': 'px', 'value': 2 }]
  },
  'horizontal-bars lilegend': {
    'textAlign': 'center'
  },
  'horizontal-bars lilegend badge': {
    'display': 'inline-block',
    'width': [{ 'unit': 'px', 'value': 8 }],
    'height': [{ 'unit': 'px', 'value': 8 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'horizontal-bars lidivider': {
    'height': [{ 'unit': 'px', 'value': 40 }]
  },
  'horizontal-bars lidivider i': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': '!important' }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': '!important' }]
  },
  'horizontal-barstype-2 li': {
    'overflow': 'hidden'
  },
  'horizontal-barstype-2 li i': {
    'display': 'inline-block',
    'marginRight': [{ 'unit': 'rem', 'value': 1 }],
    'marginLeft': [{ 'unit': 'px', 'value': 5 }],
    'fontSize': [{ 'unit': 'px', 'value': 18 }],
    'lineHeight': [{ 'unit': 'px', 'value': 40 }]
  },
  'horizontal-barstype-2 li title': {
    'display': 'inline-block',
    'width': [{ 'unit': 'string', 'value': 'auto' }],
    'marginTop': [{ 'unit': 'px', 'value': -9 }],
    'fontSize': [{ 'unit': 'rem', 'value': 0.875 }],
    'fontWeight': 'normal',
    'lineHeight': [{ 'unit': 'px', 'value': 40 }],
    'color': '#263238'
  },
  'horizontal-barstype-2 li value': {
    'float': 'right',
    'fontWeight': '600'
  },
  'horizontal-barstype-2 li bars': {
    'position': 'absolute',
    'top': [{ 'unit': 'string', 'value': 'auto' }],
    'bottom': [{ 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'icons-list': {
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'listStyle': 'none'
  },
  'icons-list li': {
    'position': 'relative',
    'height': [{ 'unit': 'px', 'value': 40 }],
    'verticalAlign': 'middle'
  },
  'icons-list li i': {
    'display': 'block',
    'float': 'left',
    'width': [{ 'unit': 'px', 'value': 35 }, { 'unit': 'string', 'value': '!important' }],
    'height': [{ 'unit': 'px', 'value': 35 }, { 'unit': 'string', 'value': '!important' }],
    'margin': [{ 'unit': 'px', 'value': 2 }, { 'unit': 'px', 'value': 2 }, { 'unit': 'px', 'value': 2 }, { 'unit': 'px', 'value': 2 }],
    'lineHeight': [{ 'unit': 'px', 'value': 35 }, { 'unit': 'string', 'value': '!important' }],
    'textAlign': 'center'
  },
  'icons-list li desc': {
    'height': [{ 'unit': 'px', 'value': 40 }],
    'marginLeft': [{ 'unit': 'px', 'value': 50 }],
    'borderBottom': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#cfd8dc' }]
  },
  'icons-list li desc title': {
    'padding': [{ 'unit': 'px', 'value': 2 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'icons-list li desc small': {
    'display': 'block',
    'marginTop': [{ 'unit': 'px', 'value': -4 }],
    'color': '#b0bec5'
  },
  'icons-list li value': {
    'position': 'absolute',
    'top': [{ 'unit': 'px', 'value': 2 }],
    'right': [{ 'unit': 'px', 'value': 45 }],
    'textAlign': 'right'
  },
  'icons-list li value strong': {
    'display': 'block',
    'marginTop': [{ 'unit': 'px', 'value': -3 }]
  },
  'icons-list li actions': {
    'position': 'absolute',
    'top': [{ 'unit': 'px', 'value': -4 }],
    'right': [{ 'unit': 'px', 'value': 10 }],
    'width': [{ 'unit': 'px', 'value': 40 }],
    'height': [{ 'unit': 'px', 'value': 40 }],
    'lineHeight': [{ 'unit': 'px', 'value': 40 }],
    'textAlign': 'center'
  },
  'icons-list li actions i': {
    'float': 'none',
    'width': [{ 'unit': 'string', 'value': 'auto' }],
    'height': [{ 'unit': 'string', 'value': 'auto' }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'lineHeight': [{ 'unit': 'string', 'value': 'normal' }]
  },
  'icons-list lidivider': {
    'height': [{ 'unit': 'px', 'value': 40 }]
  },
  'icons-list lidivider i': {
    'width': [{ 'unit': 'string', 'value': 'auto' }],
    'height': [{ 'unit': 'string', 'value': 'auto' }],
    'margin': [{ 'unit': 'px', 'value': 2 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'fontSize': [{ 'unit': 'px', 'value': 18 }]
  },
  'app': {
    'display': 'flex',
    'flexDirection': 'column',
    'minHeight': [{ 'unit': 'vh', 'value': 100 }]
  },
  'app-dashboard': {
    'display': 'flex',
    'flexDirection': 'column',
    'minHeight': [{ 'unit': 'vh', 'value': 100 }]
  },
  'app-root': {
    'display': 'flex',
    'flexDirection': 'column',
    'minHeight': [{ 'unit': 'vh', 'value': 100 }]
  },
  'app-header': {
    'flex': '0 0 55px',
    '<w991': {
      'position': 'fixed !important',
      'zIndex': '1020',
      'width': [{ 'unit': '%H', 'value': 1 }]
    }
  },
  'app-footer': {
    'flex': '0 0 50px'
  },
  'app-body': {
    'display': 'flex',
    'flexDirection': 'row',
    'flexGrow': '1',
    'overflowX': 'hidden'
  },
  'app-body main': {
    'flex': '1',
    'minWidth': [{ 'unit': 'px', 'value': 0 }]
  },
  'app-body sidebar': {
    'flex': '0 0 200px',
    'order': '-1'
  },
  'app-body aside-menu': {
    'flex': '0 0 250px'
  },
  'header-fixed app-header': {
    'position': 'fixed',
    'zIndex': '1020',
    'width': [{ 'unit': '%H', 'value': 1 }]
  },
  'header-fixed app-body': {
    'marginTop': [{ 'unit': 'px', 'value': 55 }]
  },
  'sidebar-hidden sidebar': {
    'marginLeft': [{ 'unit': 'px', 'value': -200 }]
  },
  'sidebar-fixed sidebar': {
    'position': 'fixed',
    'width': [{ 'unit': 'px', 'value': 200 }],
    'height': [{ 'unit': '%V', 'value': 1 }]
  },
  'sidebar-fixed sidebar sidebar-nav': {
    'height': [{ 'unit': 'vh', 'value': NaN }]
  },
  'sidebar-fixed main': {
    'marginLeft': [{ 'unit': 'px', 'value': 200 }]
  },
  'sidebar-fixed app-footer': {
    'marginLeft': [{ 'unit': 'px', 'value': 200 }]
  },
  'sidebar-fixedsidebar-hidden main': {
    'marginLeft': [{ 'unit': 'px', 'value': 0 }]
  },
  'sidebar-fixedsidebar-hidden app-footer': {
    'marginLeft': [{ 'unit': 'px', 'value': 0 }]
  },
  'sidebar-off-canvas sidebar': {
    'position': 'fixed',
    'zIndex': '1019',
    'height': [{ 'unit': '%V', 'value': 1 }]
  },
  'sidebar-off-canvas sidebar sidebar-nav': {
    'height': [{ 'unit': 'vh', 'value': NaN }]
  },
  'aside-menu-hidden aside-menu': {
    'marginRight': [{ 'unit': 'px', 'value': -250 }]
  },
  'aside-menu-fixed aside-menu': {
    'position': 'fixed',
    'right': [{ 'unit': 'px', 'value': 0 }],
    'height': [{ 'unit': '%V', 'value': 1 }]
  },
  'aside-menu-fixed aside-menu tab-content': {
    'height': [{ 'unit': 'vh', 'value': NaN }]
  },
  'aside-menu-fixed main': {
    'marginRight': [{ 'unit': 'px', 'value': 250 }]
  },
  'aside-menu-fixed app-footer': {
    'marginRight': [{ 'unit': 'px', 'value': 250 }]
  },
  'aside-menu-fixedaside-menu-hidden main': {
    'marginRight': [{ 'unit': 'px', 'value': 0 }]
  },
  'aside-menu-fixedaside-menu-hidden app-footer': {
    'marginRight': [{ 'unit': 'px', 'value': 0 }]
  },
  'aside-menu-off-canvas aside-menu': {
    'position': 'fixed',
    'right': [{ 'unit': 'px', 'value': 0 }],
    'zIndex': '1019',
    'height': [{ 'unit': '%V', 'value': 1 }]
  },
  'aside-menu-off-canvas aside-menu tab-content': {
    'height': [{ 'unit': 'vh', 'value': NaN }]
  },
  'footer-fixed app-footer': {
    'position': 'fixed',
    'bottom': [{ 'unit': 'px', 'value': 0 }],
    'zIndex': '1020',
    'width': [{ 'unit': '%H', 'value': 1 }]
  },
  'footer-fixed app-body': {
    'marginBottom': [{ 'unit': 'px', 'value': 50 }]
  },
  'app-header': {
    'transition': 'margin-left 0.25s, margin-right 0.25s, width 0.25s, flex 0.25s'
  },
  'app-footer': {
    'transition': 'margin-left 0.25s, margin-right 0.25s, width 0.25s, flex 0.25s'
  },
  'sidebar': {
    'transition': 'margin-left 0.25s, margin-right 0.25s, width 0.25s, flex 0.25s'
  },
  'main': {
    'transition': 'margin-left 0.25s, margin-right 0.25s, width 0.25s, flex 0.25s'
  },
  'aside-menu': {
    'transition': 'margin-left 0.25s, margin-right 0.25s, width 0.25s, flex 0.25s'
  },
  'hrtransparent': {
    'borderTop': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': 'transparent' }]
  },
  'bg-primary': {
    'color': '#fff'
  },
  'bg-success': {
    'color': '#fff'
  },
  'bg-info': {
    'color': '#fff'
  },
  'bg-warning': {
    'color': '#fff'
  },
  'bg-danger': {
    'color': '#fff'
  },
  'bg-inverse': {
    'color': '#fff'
  },
  'b-a-0': {
    'border': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': '!important' }]
  },
  'b-t-0': {
    'borderTop': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': '!important' }]
  },
  'b-r-0': {
    'borderRight': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': '!important' }]
  },
  'b-b-0': {
    'borderBottom': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': '!important' }]
  },
  'b-l-0': {
    'borderLeft': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': '!important' }]
  },
  'b-a-1': {
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#cfd8dc' }, { 'unit': 'string', 'value': '!important' }]
  },
  'b-t-1': {
    'borderTop': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#cfd8dc' }, { 'unit': 'string', 'value': '!important' }]
  },
  'b-r-1': {
    'borderRight': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#cfd8dc' }, { 'unit': 'string', 'value': '!important' }]
  },
  'b-b-1': {
    'borderBottom': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#cfd8dc' }, { 'unit': 'string', 'value': '!important' }]
  },
  'b-l-1': {
    'borderLeft': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#cfd8dc' }, { 'unit': 'string', 'value': '!important' }]
  },
  'b-a-2': {
    'border': [{ 'unit': 'px', 'value': 2 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#cfd8dc' }, { 'unit': 'string', 'value': '!important' }]
  },
  'b-t-2': {
    'borderTop': [{ 'unit': 'px', 'value': 2 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#cfd8dc' }, { 'unit': 'string', 'value': '!important' }]
  },
  'b-r-2': {
    'borderRight': [{ 'unit': 'px', 'value': 2 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#cfd8dc' }, { 'unit': 'string', 'value': '!important' }]
  },
  'b-b-2': {
    'borderBottom': [{ 'unit': 'px', 'value': 2 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#cfd8dc' }, { 'unit': 'string', 'value': '!important' }]
  },
  'b-l-2': {
    'borderLeft': [{ 'unit': 'px', 'value': 2 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#cfd8dc' }, { 'unit': 'string', 'value': '!important' }]
  },
  'd-xl-down-none': {
    'display': 'none !important'
  },
  'label-pill': {
    'borderRadius': '1rem !important'
  },
  'open > dropdown-menu': {
    'display': 'block'
  },
  'open > a': {
    'outline': '0'
  },
  'navbar dropdown-toggle img-avatar': {
    'height': [{ 'unit': 'px', 'value': 35 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 10 }]
  },
  '*[dir="rtl"]': {
    'direction': 'rtl',
    'unicodeBidi': 'embed'
  },
  '*[dir="rtl"] ul': {
    'WebkitPaddingStart': '0'
  },
  '*[dir="rtl"] table tr th': {
    'textAlign': 'right'
  },
  '*[dir="rtl"] breadcrumb-item': {
    'float': 'right'
  },
  '*[dir="rtl"] breadcrumb-menu': {
    'right': [{ 'unit': 'string', 'value': 'auto' }],
    'left': [{ 'unit': 'rem', 'value': 1 }]
  },
  '*[dir="rtl"] dropdown-item': {
    'textAlign': 'right'
  },
  '*[dir="rtl"] dropdown-item i': {
    'marginRight': [{ 'unit': 'px', 'value': -10 }],
    'marginLeft': [{ 'unit': 'px', 'value': 10 }]
  },
  '*[dir="rtl"] dropdown-item badge': {
    'right': [{ 'unit': 'string', 'value': 'auto' }],
    'left': [{ 'unit': 'px', 'value': 10 }]
  },
  '*[dir="rtl"] sidebar-hidden sidebar': {
    'marginRight': [{ 'unit': 'px', 'value': -200 }]
  },
  '*[dir="rtl"] sidebar-fixed main': {
    'marginRight': [{ 'unit': 'px', 'value': 200 }]
  },
  '*[dir="rtl"] sidebar-fixed app-footer': {
    'marginRight': [{ 'unit': 'px', 'value': 200 }]
  },
  '*[dir="rtl"] sidebar-fixedsidebar-hidden main': {
    'marginRight': [{ 'unit': 'px', 'value': 0 }]
  },
  '*[dir="rtl"] sidebar-fixedsidebar-hidden app-footer': {
    'marginRight': [{ 'unit': 'px', 'value': 0 }]
  },
  '*[dir="rtl"] sidebar-minimized sidebar': {
    'flex': '0 0 50px'
  },
  '*[dir="rtl"] sidebar-minimizedsidebar-hidden sidebar': {
    'marginLeft': [{ 'unit': 'px', 'value': -50 }]
  },
  '*[dir="rtl"] sidebar-minimizedsidebar-fixed main': {
    'marginLeft': [{ 'unit': 'px', 'value': 50 }]
  },
  '*[dir="rtl"] sidebar-minimizedsidebar-fixed app-footer': {
    'marginLeft': [{ 'unit': 'px', 'value': 50 }]
  },
  '*[dir="rtl"] sidebar-minimizedsidebar-fixedsidebar-hidden main': {
    'marginLeft': [{ 'unit': 'px', 'value': 0 }]
  },
  '*[dir="rtl"] sidebar-minimizedsidebar-fixedsidebar-hidden app-footer': {
    'marginLeft': [{ 'unit': 'px', 'value': 0 }]
  },
  '*[dir="rtl"] aside-menu-hidden aside-menu': {
    'marginLeft': [{ 'unit': 'px', 'value': -250 }]
  },
  '*[dir="rtl"] aside-menu-fixed aside-menu': {
    'right': [{ 'unit': 'string', 'value': 'auto' }],
    'left': [{ 'unit': 'px', 'value': 0 }]
  },
  '*[dir="rtl"] aside-menu-fixed main': {
    'marginLeft': [{ 'unit': 'px', 'value': 250 }]
  },
  '*[dir="rtl"] aside-menu-fixed app-footer': {
    'marginLeft': [{ 'unit': 'px', 'value': 250 }]
  },
  '*[dir="rtl"] aside-menu-fixedaside-menu-hidden main': {
    'marginLeft': [{ 'unit': 'px', 'value': 0 }]
  },
  '*[dir="rtl"] aside-menu-fixedaside-menu-hidden app-footer': {
    'marginLeft': [{ 'unit': 'px', 'value': 0 }]
  },
  '*[dir="rtl"] aside-menu-off-canvas aside-menu': {
    'position': 'fixed',
    'right': [{ 'unit': 'px', 'value': 0 }],
    'zIndex': '1019',
    'height': [{ 'unit': '%V', 'value': 1 }]
  },
  '*[dir="rtl"] aside-menu-off-canvas aside-menu tab-content': {
    'height': [{ 'unit': 'vh', 'value': NaN }]
  },
  '*[dir="rtl"] sidebar sidebar-nav': {
    'direction': 'ltr'
  },
  '*[dir="rtl"] sidebar sidebar-nav *': {
    'direction': 'rtl'
  },
  '*[dir="rtl"] sidebar sidebar-nav nav nav-item nav-link [class^="icon-"]': {
    'marginRight': [{ 'unit': 'px', 'value': -4 }]
  },
  '*[dir="rtl"] sidebar sidebar-nav nav nav-item navbar dropdown-toggle [class^="icon-"]': {
    'marginRight': [{ 'unit': 'px', 'value': -4 }]
  },
  'navbar *[dir="rtl"] sidebar sidebar-nav nav nav-item dropdown-toggle [class^="icon-"]': {
    'marginRight': [{ 'unit': 'px', 'value': -4 }]
  },
  '*[dir="rtl"] sidebar sidebar-nav nav nav-item nav-link [class*=" icon-"]': {
    'marginRight': [{ 'unit': 'px', 'value': -4 }]
  },
  '*[dir="rtl"] sidebar sidebar-nav nav nav-item navbar dropdown-toggle [class*=" icon-"]': {
    'marginRight': [{ 'unit': 'px', 'value': -4 }]
  },
  'navbar *[dir="rtl"] sidebar sidebar-nav nav nav-item dropdown-toggle [class*=" icon-"]': {
    'marginRight': [{ 'unit': 'px', 'value': -4 }]
  },
  '*[dir="rtl"] sidebar sidebar-nav nav nav-item nav-link badge': {
    'float': 'left',
    'marginTop': [{ 'unit': 'px', 'value': 2 }]
  },
  '*[dir="rtl"] sidebar sidebar-nav nav nav-item navbar dropdown-toggle badge': {
    'float': 'left',
    'marginTop': [{ 'unit': 'px', 'value': 2 }]
  },
  'navbar *[dir="rtl"] sidebar sidebar-nav nav nav-item dropdown-toggle badge': {
    'float': 'left',
    'marginTop': [{ 'unit': 'px', 'value': 2 }]
  },
  '*[dir="rtl"] sidebar sidebar-nav nav nav-item nav-linknav-dropdown-toggle::before': {
    'position': 'absolute',
    'right': [{ 'unit': 'string', 'value': 'auto' }, { 'unit': 'string', 'value': '!important' }],
    'left': [{ 'unit': 'rem', 'value': 1 }]
  },
  '*[dir="rtl"] sidebar sidebar-nav nav nav-item navbar nav-dropdown-toggledropdown-toggle::before': {
    'position': 'absolute',
    'right': [{ 'unit': 'string', 'value': 'auto' }, { 'unit': 'string', 'value': '!important' }],
    'left': [{ 'unit': 'rem', 'value': 1 }]
  },
  'navbar *[dir="rtl"] sidebar sidebar-nav nav nav-item nav-dropdown-toggledropdown-toggle::before': {
    'position': 'absolute',
    'right': [{ 'unit': 'string', 'value': 'auto' }, { 'unit': 'string', 'value': '!important' }],
    'left': [{ 'unit': 'rem', 'value': 1 }]
  },
  '*[dir="rtl"] sidebar sidebar-nav nav nav-itemnav-dropdownopen > nav-linknav-dropdown-toggle::before': {
    'transform': 'rotate(90deg)'
  },
  '*[dir="rtl"] sidebar sidebar-nav nav navbar nav-itemnav-dropdownopen > nav-dropdown-toggledropdown-toggle::before': {
    'transform': 'rotate(90deg)'
  },
  'navbar *[dir="rtl"] sidebar sidebar-nav nav nav-itemnav-dropdownopen > nav-dropdown-toggledropdown-toggle::before': {
    'transform': 'rotate(90deg)'
  },
  '*[dir="rtl"] horizontal-bars li bars': {
    'paddingRight': [{ 'unit': 'px', 'value': 100 }],
    'paddingLeft': [{ 'unit': 'px', 'value': 0 }]
  },
  '*[dir="rtl"] horizontal-bars li bars progress:first-child': {
    'marginBottom': [{ 'unit': 'px', 'value': 2 }]
  },
  '*[dir="rtl"] horizontal-barstype-2 li i': {
    'marginRight': [{ 'unit': 'px', 'value': 5 }],
    'marginLeft': [{ 'unit': 'rem', 'value': 1 }]
  },
  '*[dir="rtl"] horizontal-barstype-2 li value': {
    'float': 'left',
    'fontWeight': '600'
  },
  '*[dir="rtl"] horizontal-barstype-2 li bars': {
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  '*[dir="rtl"] icons-list li': {
    'position': 'relative',
    'height': [{ 'unit': 'px', 'value': 40 }],
    'verticalAlign': 'middle'
  },
  '*[dir="rtl"] icons-list li i': {
    'float': 'right'
  },
  '*[dir="rtl"] icons-list li desc': {
    'marginRight': [{ 'unit': 'px', 'value': 50 }],
    'marginLeft': [{ 'unit': 'px', 'value': 0 }]
  },
  '*[dir="rtl"] icons-list li value': {
    'right': [{ 'unit': 'string', 'value': 'auto' }],
    'left': [{ 'unit': 'px', 'value': 45 }],
    'textAlign': 'left'
  },
  '*[dir="rtl"] icons-list li value strong': {
    'display': 'block',
    'marginTop': [{ 'unit': 'px', 'value': -3 }]
  },
  '*[dir="rtl"] icons-list li actions': {
    'right': [{ 'unit': 'string', 'value': 'auto' }],
    'left': [{ 'unit': 'px', 'value': 10 }]
  },
  '*[dir="rtl"] callout': {
    'border': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#cfd8dc' }],
    'borderRightWidth': [{ 'unit': 'rem', 'value': 0.25 }]
  },
  '*[dir="rtl"] callout chart-wrapper': {
    'left': [{ 'unit': 'px', 'value': 0 }],
    'float': 'left'
  },
  '*[dir="rtl"] callout-default': {
    'borderRightColor': '#b0bec5'
  },
  '*[dir="rtl"] callout-primary': {
    'borderRightColor': '#20a8d8'
  },
  '*[dir="rtl"] callout-info': {
    'borderRightColor': '#63c2de'
  },
  '*[dir="rtl"] callout-warning': {
    'borderRightColor': '#f8cb00'
  },
  '*[dir="rtl"] callout-danger': {
    'borderRightColor': '#f86c6b'
  },
  '*[dir="rtl"] callout-success': {
    'borderRightColor': '#4dbd74'
  }
});
