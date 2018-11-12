# ![Bruck](logo.png)

Bruck is a lo-fi prototyping system made with web components. Quickly create and comment on interface layouts.

## Get started

1. Clone this repository
2. Write HTML with the help of the components (below) in the `index.html` and `editor.html` files
3. Serve by using something like [http-server](https://www.npmjs.com/package/http-server) at the root
4. That's pretty much it. Requests and contribution offers welcome

## Components

* [`<t-ext>`](#t-ext)
* [`<i-mage>`](#i-mage)
* [`<b-ox>`](#b-ox)
* [`<s-tack>`](#s-tack)
* [`<g-rid>`](#g-rid)
* [`<c-luster>`](#c-luster)
* [`<s-pread>`](#s-pread)
* [`<l-ine>`](#l-ine)
* [`<d-rawer>`](#d-rawer)
* [`<s-creen>`](#s-creen)
* [`<g-o>`](#g-o)
* [`<c-omment>`](#c-omment)
* [`<c-lone>`](#c-lone)

### `<t-ext>`

The `<t-ext>` component lets you generate a paragraph of dummy text. Each word is represented as a line. 'Words' wrap like any other text content.

#### Props

<table>
  <tr>
    <th>
      words
    </th>
    <td>
      <p>A comma separated range e.g. <code>words="30,60"</code></p>
      <p><strong>Default:</strong> <code>15,20</code></p>
    </td>
  </tr>
</table>

#### Example

```html
<t-ext words="50,75"></t-ext>
```

#### Accessibility information

Just the lorem ipsum text underlying the emblematic line-words.

### `<i-mage>`

The `<i-mage>` element creates an accessible dummy/placeholder image (with a X-through style generated via Houdini's Paint API). The available horizontal space is filled unless `minWidth` and `maxWidth` props are supplied.

#### Props

<table>
  <tr>
    <th>
      ratio
    </th>
    <td>
      <p>The expression of an aspect ratio e.g. <code>ratio="3:4"</code>.</p>
      <p><strong>Default:</strong> <code>1:1</code></p>
    </td>
  </tr>
  <tr>
    <th>
      caption
    </th>
    <td>
      <p>The text for a caption, which is placed in a <code>&lt;figcaption></code> element after the image itself e.g. <code>caption="A giant crab monster"</code>.</p>
      <p><strong>Default:</strong> nothing (<code>&lt;figcaption></code> omitted)</p>
    </td>
  </tr>
  <tr>
    <th>
      minWidth
    </th>
    <td>
      <p>Any CSS <code>min-width</code> value e.g. <code>minWidth="5rem"</code>.</p>
      <p><strong>Default:</strong> <code>0</code></p>
    </td>
  </tr>
  <tr>
    <th>
      maxWidth
    </th>
    <td>
      <p>Any CSS <code>max-width</code> value e.g. <code>maxWidth="5rem"</code>.</p>
      <p><strong>Default:</strong> <code>none</code></p>
    </td>
  </tr>
</table>

#### Example

```html
<i-mage ratio="3:4"></i-mage>
```

#### Accessibility information

_"Image with [ratio] aspect ratio"_.

### `<b-ox>`

The simplest of components: just wraps some content with some padding, and a border if you want it.

#### Props

<table>
  <tr>
    <th>
      pad
    </th>
    <td>
      <p>Padding for all sides. A point on the modular scale (<code>-5</code> to <code>10</code>, or <code>none</code>) e.g. <code>pad="2"</code>.</p>
      <p><strong>Default:</strong> <code>1</code></p>
    </td>
  </tr>
  <tr>
    <th>
      border
    </th>
    <td>
      <p>Whether to apply a border (Boolean)</p>
      <p><strong>Default:</strong> <code>false</code> (attribute omitted)</p>
    </td>
  </tr>
</table>

#### Example

```html
<b-ox pad="2" border>
  <h3>My box</h3>
  <t-ext></t-ext>
</b-ox>
```

#### Accessibility information

_"['Bordered'?] box containing [# of child elements] elements"_

### `<s-tack>`

The `<s-tack>` component lets you inject whitespace between flow elements. Wrap it around a set of elements and separate them visually. Critically, it accepts a `repeat` prop that lets you multiply its contents a set number of times.

#### Props

<table>
  <tr>
    <th>
      gap
    </th>
    <td>
      <p>A point on the modular scale (<code>-5</code> to <code>10</code>, or <code>none</code>) e.g. <code>gap="2"</code>.</p>
      <p><strong>Default:</strong> <code>1</code></p>
    </td>
  </tr>
  <tr>
    <th>
      repeat
    </th>
    <td>
      <p>The number of times the content (light DOM children) will be repeated e.g. <code>repeat="5"</code>.</p>
      <p><strong>Default:</strong> <code>0</code> (no repetition)</p>
    </td>
  </tr>
</table>

#### Example

```html
<s-tack repeat="3">
  <t-ext></t-ext>
</s-tack>
```

#### Accessibility information

_"Column of [# of child elements] elements"_

### `<g-rid>`

The `<g-rid>` element let's you easily compose a responsive grid using CSS's Grid algorithm. Like `<s-tack>` it lets you repeat the contents/children you supply. Useful for quickly mocking up a set of card components or similar.

#### Props

<table>
  <tr>
    <th>
      gap
    </th>
    <td>
      <p>A point on the modular scale (<code>-5</code> to <code>10</code>, or <code>none</code>) e.g. <code>gap="2"</code>.</p>
      <p><strong>Default:</strong> <code>1</code></p>
    </td>
  </tr>
  <tr>
    <th>
      repeat
    </th>
    <td>
      <p>The number of times the content (light DOM children) will be repeated e.g. <code>repeat="5"</code>.</p>
      <p><strong>Default:</strong> <code>0</code> (no repetition)</p>
    </td>
  </tr>
  <tr>
    <th>
      itemWidth
    </th>
    <td>
      <p>The 'ideal' width of the grid item as a CSS length value e.g. <code>itemWidth="10ch"</code>. CSS Grid's <code>auto-fit</code> and <code>minmax</code> features ensure the layout is responsive.</p>
      <p><strong>Default:</strong> <code>15rem</code></p>
    </td>
  </tr>
</table>

#### Example

```html
<g-rid repeat="10">
  <b-ox border>
    <h2>Card title</h2>
    <t-ext words="25,50"></t-ext>
  </b-ox>
</g-rid>
```

#### Accessibility information

_"Grid of [# of child elements] elements, each [itemWidth] wide"_

### `<c-luster>`

The `<c-luster>` component uses Flexbox to let you cluster items around the horizontal center of their context. Items wrap where there is no room for them all on one line, maintaining responsiveness. 

#### Props

<table>
  <tr>
    <th>
      gap
    </th>
    <td>
      <p>The gap between clustered items. A point on the modular scale (<code>-5</code> to <code>10</code>, or <code>none</code>) e.g. <code>gap="2"</code>.</p>
      <p><strong>Default:</strong> <code>1</code></p>
    </td>
  </tr>
  <tr>
    <th>
      align
    </th>
    <td>
      <p>Maps to the Flexbox <code>align-items</code> property. Choice of <code>center</code> (default), <code>top</code> (<code>flex-start</code>), or <code>bottom</code> (<code>flex-end</code>).</p>
      <p><strong>Default:</strong> <code>center</code></p>
    </td>
  </tr>
</table>

#### Example

```html
<c-luster align="bottom">
  <div>Will Something on the left</div>
  <div>Something in the center</div>
  <div>something on the right</div>
</s-pread>
```

#### Accessibility information

_"Set of [# of child elements] centrally grouped elements"_

### `<s-pread>`

The `<s-pread>` component uses Flexbox to let you separate items horizontally. Items wrap where there is no room for them all on one line, maintaining responsiveness. 

#### Props

<table>
  <tr>
    <th>
      gap
    </th>
    <td>
      <p>The <em>minimum</em> gap between spread-out items. A point on the modular scale (<code>-5</code> to <code>10</code>, or <code>none</code>) e.g. <code>gap="2"</code>.</p>
      <p><strong>Default:</strong> <code>1</code></p>
    </td>
  </tr>
  <tr>
    <th>
      spaces
    </th>
    <td>
      <p>Where the spaces occur. One of <code>between</code> (maps to <code>justify-content: space-between</code>) or <code>around</code> (maps to <code>justify-content: space-around</code>).</p>
      <p><strong>Default:</strong> <code>between</code></p>
    </td>
  </tr>
  <tr>
    <th>
      align
    </th>
    <td>
      <p>Maps to the Flexbox <code>align-items</code> property. Choice of <code>center</code> (default), <code>top</code> (<code>flex-start</code>), or <code>bottom</code> (<code>flex-end</code>).</p>
      <p><strong>Default:</strong> <code>center</code></p>
    </td>
  </tr>
</table>

#### Example

```html
<s-pread gap="2">
  <div>Will be pushed to the left</div>
  <div>Will appear in the center</div>
  <div>Will be pushed to the right</div>
</s-pread>
```

#### Accessibility information

_"Distributed row of [# of child elements] elements"_

### `<l-ine>`

The `<l-ine>` component configures child elements inline, with the option to add a separator. The separator can be any character or HTML.

#### Props

<table>
  <tr>
    <th>
      between
    </th>
    <td>
      <p>Some HTML to separate each item e.g. <code>sep="&middot;"</code> or <code>sep="|"</code> (inline SVG can be used too!)</p>
    </td>
  </tr>
  <tr>
    <th>
      gap
    </th>
    <td>
      <p>A point on the modular scale (<code>-5</code> to <code>10</code>, or <code>none</code>) e.g. <code>gap="2"</code>.</p>
      <p><strong>Default:</strong> <code>1</code></p>
    </td>
  </tr>
  <tr>
    <th>
      justify
    </th>
    <td>
      <p>Maps to the Flexbox <code>justify-content</code> property. One of <code>left</code> (<code>flex-start</code>), center (default), or <code>right</code> (<code>flex-end</code>).</p>
      <p><strong>Default:</strong> <code>center</code></p>
    </td>
  </tr>
</table>

#### Example

```html
<l-ine gap="2">
  <a href="#index">Home</a>
  <a href="#about">About</a>
  <a href="#faq">FAQ</a>
</l-ine>
```

#### Accessibility information

_"Line of [# of child elements] elements"_

### `<c-enter>`

The `<c-enter>` component simply creates a centralized column (with horizontal margins set to `auto`). The `max-width` is set to the `--measure` custom property value (under **css/lib/variables.css**) by default.

#### Props

<table>
  <tr>
    <th>
      maxWidth
    </th>
    <td>
      <p>A CSS <code>max-width</code> value e.g. <code>30ch</code>.</p>
      <p><strong>Default:</strong> the root <code>--measure</code> value</p>
    </td>
  </tr>
</table>

#### Example

```html
<c-enter>
  <s-tack gap="2">
    <h2>A centrally aligned document section</h2>
    <s-tack repeat="5">
      <t-ext></t-ext>
    </s-tack>
  </s-tack>
</c-enter>
```

#### Accessibility information

NA

### `<d-rawer>` 

A basic collapsible section, as you might find in an accordion. The first child (light DOM) element is use to form a button. This is wrapped in a heading, for which the level can be adjusted using the `level` prop. 

#### Props

<table>
  <tr>
    <th>
      level
    </th>
    <td>
      <p>An integer between 1 <code>&lt;h1></code> and 6 <code>&lt;h6></code> e.g. <code>level="3"</code>.</p>
      <p><strong>Default:</strong> <code>2</code></p>
    </td>
  </tr>
  <tr>
    <th>
      open
    </th>
    <td>
      <p>An integer between 1 <code>&lt;h1></code> and 6 <code>&lt;h6></code> e.g. <code>level="3"</code>.</p>
    </td>
  </tr>
</table>

#### Example

```html
<d-rawer>
  <any-element>Collapsible section title</any-element>
  <p>This content appears when the handle is clicked...</p>
  <p>...and so does this content.</p>
</d-rawer>
```

#### Accessibility information

_"Collapsible section"_

### `<s-creen>` 

The `<s-creen>` element lets you define whole screens (like those defined within a routed Single Page Application). You can link between screens using either the `<g-o>` call-to-action component, or regular links pointing to hash fragments that match the screens' `id`s.

The `<s-creen>` with the `index` `id` is displayed on page load.

#### Props

<table>
  <tr>
    <th>
      id (required)
    </th>
    <td>
      <p>A valid <code>id</code> attribute value e.g. <code>id="about"</code>.</p>
    </td>
  </tr>
  <tr>
    <th>
      label
    </th>
    <td>
      <p>A string describing the screen (think <code>&lt;title&gt;</code>) e.g. <code>label="My App: Home page"</code>.</p>
      <p><strong>Default:</strong> the screen's <code>id</code> value</p>
    </td>
  </tr>
</table>

#### Example

```html
<s-creen id="index">
  <h1>The default screen</h1>
  <g-o to="about">About</g-o>
</s-creen>
<s-creen id="about">
  <h1>The about screen</h1>
  <a href="#index">Home</a>
</s-creen>
```

#### Accessibility information

The value of the <code>label</code> prop (or the <code>id</code> value as a fallback).

### `<g-o>` 

A call-to-action type component, specifically for linking between `<s-creen>` elements.

#### Props

<table>
  <tr>
    <th>
      to (required)
    </th>
    <td>
      <p>A valid <code>id</code> attribute value for a <code>&lt;s-creen></code> component e.g. <code>to="index"</code>.</p>
    </td>
  </tr>
</table>

#### Example

```html
<g-o to="index">Home</g-o>
```

#### Accessibility information

The text content of the link.

### `<c-omment>`

Allows you to write a comment for any part of the interface, simply by wrapping it and supplying text for the `wording` prop. The comment is revealed by pressing a '?' button that is revealed on both hover and focus.

#### Props

<table>
  <tr>
    <th>
      wording
    </th>
    <td>
      <p>A basic string e.g. <code>wording="The main page content"</code>.</p>
      <p><strong>Default:</strong> 'TBD'</p>
    </td>
  </tr>
</table>

#### Example

```html
<c-omment wording="A set of card components">
  <g-rid repeat="10">
    <div>
      <h2>Card title</h2>
      <t-ext words="25,50"></t-ext>
    </div>
  </g-rid>
</c-omment>
```

#### Accessibility information

The comment wrapper is identified as a region. The buttons to open and close the comment are suitably labeled.

### `<c-lone>`

The `<c-lone>` lets you instantiate content from a named `<template>`. It's the easiest way to reuse compound components.

#### Props

<table>
  <tr>
    <th>
      of (required)
    </th>
    <td>
      <p>The <code>id</code> of a <code>&lt;template></code> element e.g. <code>of="header"</code>.</p>
    </td>
  </tr>
</table>

#### Example

```html
<template id="image-and-text">
  <i-mage maxWidth="20rem" ratio="6:9"></i-mage>
  <t-ext words="20,40"></t-ext>
</template>

<c-lone of="image-and-text"></c-lone>
```

#### Accessibility information

NA (whatever the cloned elements provide)

## Utility styles

A set of utility classes. Each is prefixed with `u-`.

### `u-invert`

With `class="u-invert"` a CSS filter inverts the colors of the element in hand. 

### `u-text-center`, `u-text-left`, `u-text-right`

For realigning text.

### `u-h1`, `u-h2`, `u-h3`, `u-h4`, `u-h5`, `u-h6`

For emulating the font sizes of semantic headings without introducing heading elements (mapped to h1—h6 sizes).

