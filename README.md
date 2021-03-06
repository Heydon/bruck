# ![Bruck](logo.png)

**Bruck** is a lo-fi prototyping system made with web components. Quickly create and comment on interface layouts. The output is screen reader accessible, and responsive without you having to author breakpoints.

[**Try out the demo**](https://heydon.github.io/bruck/)

**Warning: Bruck is experimental, and in its very early stages of development.**

<figure>
<img width="500" alt="Split screen showing the web component code compared to the outputted design" src="split_screen.png" />
<figcaption><em>You can mock up real or dummy content with a set of primitive layout components</em></figcaption>
</figure>

## Get started

1. Clone this repository.
2. (No `npm install` because there's no dependencies, unless you want to contribute — then you may need the **Jest** stuff)
3. Write HTML with the help of the components (below) in the `index.html` and split-screen `editor.html` files. Check out a demo in `demo.html`.
4. Serve by using something like [http-server](https://www.npmjs.com/package/http-server) at the root
5. That's pretty much it. Requests and contribution offers welcome.

## Documentation

(Used in conjunction with the [utility classes](#utility-classes).)

* [Components](#components)
    * [`<t-ext>`](#t-ext)
    * [`<w-ords>`](#w-ords)
    * [`<i-mage>`](#i-mage)
    * [`<c-enter>`](#c-enter)
    * [`<b-ox>`](#b-ox)
    * [`<s-tack>`](#s-tack)
    * [`<g-rid>`](#g-rid)
    * [`<c-luster>`](#c-luster)
    * [`<s-pread>`](#s-pread)
    * [`<s-idebar>`](#s-idebar)
    * [`<l-ine>`](#l-ine)
    * [`<i-con>`](#i-con)
    * [`<p-rogress>`](#p-rogress)
    * [`<d-rawer>`](#d-rawer)
    * [`<s-creen>`](#s-creen)
    * [`<g-o>`](#g-o)
    * [`<f-low>`](#f-low)
    * [`<c-omment>`](#c-omment)
    * [`<c-lone>`](#c-lone)
    * [`<i-nput>`](#i-nput)
    * [`<t-extarea>`](#t-extarea)
    * [`<s-elect>`](#s-elect)
    * [`<c-heckbox>`](#c-heckbox)
    * [`<r-adios>`](#r-adios)
    * `<o-utput>` ([see **Working with data**](#working-with-data))
    * `<m-odel>` ([see **Working with data**](#working-with-data))
* [Utility classes](#utility-classes)
* [Working with data](#working-with-data)
* [Actions](#actions)

## Components

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

### `<w-ords>`

The `<w-ords>` component lets you generate sets of words, picked at random from lorem ipsum. It is an inline element, so can be used to generate text inside a `<p>` or `<h2>` etc.

#### Props

<table>
  <tr>
    <th>
      count
    </th>
    <td>
      <p>The number of words. Can be a set integer e.g. <code>count="5"</code> or a random integer picked from a supplied range e.g. <code>count="5,10"</code>.</p>
      <p><strong>Default:</strong> <code>2,3</code></p>
    </td>
  </tr>
  <tr>
    <th>
      capitalize
    </th>
    <td>
      <p>Capitalizes the first letter of each word (Boolean)</p>
    </td>
  </tr>
  <tr>
    <th>
      sentence
    </th>
    <td>
      <p>Capitalizes the first letter of the first word, and appends a period followed by a space (Boolean)</p>
    </td>
  </tr>
  <tr>
    <th>
      repeat
    </th>
    <td>
      <p>How many times to repeat the pattern (i.e. how many sentences to produce). Can be a set integer e.g. <code>count="5"</code> or a random integer picked from a supplied range e.g. <code>count="5,10"</code>.</p>
    </td>
  </tr>
</table>

#### Example

The following will produce a paragraph or 3-4 sentences.

```html
<p>
  <w-ords sentence repeat="3,4"></w-ords>
</p>
```

#### Accessibility information

Just the lorem ipsum text verbatim.

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
      <p>The number of times the content (light DOM children) will be repeated. Can be an integer e.g. <code>repeat="5"</code> or a range e.g. <code>repeat="5,10"</code> (a random integer within the range is picked).</p>
      <p><strong>Default:</strong> <code>0</code> (no repetition)</p>
    </td>
  </tr>
  <tr>
    <th>
      lines
    </th>
    <td>
      <p>Boolean: Whether or not to divide items with horizontal lines/borders</p>
      <p><strong>Default:</strong> omitted (no lines)</p>
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
      <p>The number of times the content (light DOM children) will be repeated. Can be an integer e.g. <code>repeat="5"</code> or a range e.g. <code>repeat="5,10"</code> (a random integer within the range is picked).</p>
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
</c-luster>
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

### `<s-idebar>`

The `<s-idebar>` component wraps two child elements, with one as the designated 'sidebar' and the other taking up the remaining space. If more than two child elements are supplied, construction ceases and an error is returned.

The designated sidebar only _appears_ as a sidebar where it is narrower than its sibling. Otherwise, Flexbox reorganizes the two elements into a single column (uses the `flex-grow: 999` hack).

#### Props

<table>
  <tr>
    <th>
      gap
    </th>
    <td>
      <p>The gap between the sidebar and adjacent element. A point on the modular scale (<code>-5</code> to <code>10</code>, or <code>none</code>) e.g. <code>gap="2"</code>.</p>
      <p><strong>Default:</strong> <code>none</code></p>
    </td>
  </tr>
  <tr>
    <th>
      width
    </th>
    <td>
      <p>The width of the sidebar in contexts wide enough that it can <em>be</em> a sidebar. Any CSS length, e.g. <code>width="25rem"</code>.</p>
      <p><strong>Default:</strong> <code>20rem</code></p>
    </td>
  </tr>
  <tr>
    <th>
      to
    </th>
    <td>
      <p>Which child element (left or right) to be the sidebar. Values can only be 'left' or 'right'; If anything different is supplied, 'left' is used by default.</p>
      <p><strong>Default:</strong> <code>left</code> (omit the attribute)</p>
    </td>
  </tr>
</table>

#### Example

Creates a sidebar of the second element (introduced with the `<h2>` heading). The gap between the sidebar and the adjacent content matches the second point on the modular scale (one point higher than the default).

```html
<s-idebar to="right" gap="2">
  <div>
    <h1>The main content</h1>
    <!-- etc -->
  </div>
  <div>
    <h2>The sidebar content</h2>
    <!-- etc -->
  </div>
</s-idebar>
```

#### Accessibility information

_"Content with a [left || right] sidebar"_

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

### `<i-con>`

The `<i-con>` component inserts an inline SVG icon, by name, from the **icons** folder (using fetch). The size of the icon is determined by its parent's `font-size`, or you can use the `u-h1` — `u-h6` utility classes on the `<i-con>` itself.

#### Props

<table>
  <tr>
    <th>
      name (required)
    </th>
    <td>
      <p>The name of the icon, matching the filename (without extension) from the <strong>icons</strong> folder.</p>
    </td>
  </tr>
  <tr>
    <th>
      label
    </th>
    <td>
      <p>A string to describe the SVG as an image. Not necessary if the icon has accompanying, descriptive text (for example, alongside a <code>&lt;button&gt;</code>'s text content).</p>
      <p><strong>Default:</strong> omitted (no label or image role)</p>
    </td>
  </tr>
</table>

#### Example

```html
<i-con name="tick" label="Correct!"></i-con>
```

#### Accessibility information

None by default (it is assumed the icon will be accompanied by text). Or you can supply a label via the `label` prop. This will also include the `img` ARIA role.

### `<p-rogress>`

The `<p-rogress>` component displays a series of steps in a continuum to indicate how far along the user is in a process.

#### Props

<table>
  <tr>
    <th>
      steps (required)
    </th>
    <td>
      <p>A comma-separated set of labels for he consecutive steps, e.g. `steps="one,two,three"`.</p>
    </td>
  </tr>
  <tr>
    <th>
      current
    </th>
    <td>
      <p>The label of the current step, which takes <code>aria-current="step"</code> and a visual style to differentiate it from the other steps, e.g. <code>current="two"</code></p>
      <p><strong>Default:</strong> the first step (whatever it is named)</p>
    </td>
  </tr>
</table>

#### Example

```html
<p-rogress steps="address,payment details,confirmation" current="confirmation"></p-rogress>
```

#### Accessibility information

_"Progress indicator of [# of steps] steps"_ (in addition to list semantics and `aria-current`).

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

### `<f-low>`

The `<f-low>` component lets you group elements as a navigable sequence of steps, such as sections in a form. On hover and focus, previous and next buttons are exposed to change steps.

#### Props

<table>
  <tr>
    <th>
      hideControls
    </th>
    <td>
      <p>Boolean. Whether to show the previous and next buttons.</p>
      <p><strong>Default:</strong> <code>false</code> (attribute omitted)</p>
    </td>
  </tr>
</table>

#### Methods

<table>
  <tr>
    <th>
      prev()
    </th>
    <td>
      <p>Show the previous element</p>
    </td>
  </tr>
  <tr>
    <th>
      next()
    </th>
    <td>
      <p>Show the next element</p>
    </td>
  </tr>
  <tr>
    <th>
      goTo(index)
    </th>
    <td>
      <p>Show the element with the supplied index</p>
    </td>
  </tr>
</table>

#### Example

```html
<f-low>
  <s-tack>
    <h2>Step 1</h2>
    <t-ext></t-ext>
  </s-tack>
  <s-tack>
    <h2>Step 2</h2>
    <t-ext></t-ext>
  </s-tack>
  <s-tack>
    <h2>Step 3</h2>
    <t-ext></t-ext>
  </s-tack>
</f-low>
```

#### Accessibility information

_"Sequence of [# of child elements] steps"_

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

### `<i-nput>`

The `<i-nput>` component is an abstraction of a basic `type="text"` input/label, with accessible labeling built in.

#### Props

<table>
  <tr>
    <th>
      label
    </th>
    <td>
      <p>A string for the `<label>` element e.g. <code>label="Your favorite animal"</code></p>
      <p><strong>Default:</strong> <code>'Text'</code></p>
    </td>
  </tr>
  <tr>
    <th>
      name (required)
    </th>
    <td>
      <p>A valid <code>name</code> value (mapping to the standard <code>name</code> attribute), e.g. <code>name="favoriteAnimal"</code></p>
    </td>
  </tr>
  <tr>
    <th>
      value
    </th>
    <td>
      <p>Optionally prepopulate a value, e.g. <code>value="aardvark"</code></p>
    </td>
  </tr>
</table>

#### Example

```html
<i-nput name="favoriteAnimal" label="Your favorite animal"></i-nput>
```

#### Accessibility information

Standard `<label>` and `<input>` elements are used (and associated with one another) and convey the standard/expected semantics to assistive technologies.

### `<t-extarea>`

The `<t-extarea>` component is an abstraction of a basic `<textarea>` with accessible labeling built in.

#### Props

<table>
  <tr>
    <th>
      label
    </th>
    <td>
      <p>A string for the `<label>` element e.g. <code>label="Tell us about your favorite animal"</code></p>
      <p><strong>Default:</strong> <code>'Text box'</code></p>
    </td>
  </tr>
  <tr>
    <th>
      name (required)
    </th>
    <td>
      <p>A valid <code>name</code> value (mapping to the standard <code>name</code> attribute), e.g. <code>name="favoriteAnimal"</code></p>
    </td>
  </tr>
  <tr>
    <th>
      value
    </th>
    <td>
      <p>Optionally prepopulate the <code>&lt;textarea></code>, e.g. <code>value="The aardvark is my favorite because it is telepathic"</code></p>
    </td>
  </tr>
</table>

#### Example

```html
<t-extarea name="favoriteAnimal" label="Tell us about your favorite animal"></t-extarea>
```

#### Accessibility information

Standard `<label>` and `<textarea>` elements are used (and associated with one another) and convey the standard/expected semantics to assistive technologies.

### `<s-elect>`

The `<s-elect>` component is an abstraction of a basic `<select>`/`<option>`s pattern, with accessible labeling built in.

#### Props

<table>
  <tr>
    <th>
      label
    </th>
    <td>
      <p>A string for the `<label>` element e.g. <code>label="Your favorite animal"</code></p>
      <p><strong>Default:</strong> <code>'Select'</code></p>
    </td>
  </tr>
  <tr>
    <th>
      name (required)
    </th>
    <td>
      <p>A valid <code>name</code> value (mapping to the standard <code>name</code> attribute), e.g. <code>name="favoriteAnimal"</code></p>
    </td>
  </tr>
  <tr>
    <th>
      options (required)
    </th>
    <td>
      <p>A comma-separated list of available options, e.g. <code>options="dog, cat, fish, aardvark"</code></p>
      <p><strong>Note:</strong> Both <code>"dog,cat,fish,aardvark"</code> and <code>"dog, cat, fish, aardvark"</code> are acceptable (the spaces are removed)</p>
    </td>
  </tr>
  <tr>
    <th>
      selected
    </th>
    <td>
      <p>The string that represents the selected option (if any), e.g. <code>selected="aardvark"</code></p>
      <p><strong>Default:</strong> No item is selected</p>
    </td>
  </tr>
</table>

#### Example

```html
<s-elect label="Your favorite animal" name="favoriteAnimal" options="dog, cat, fish, aardvark" selected="aardvark"></s-elect>
```

#### Accessibility information

Standard `<label>` and `<select>` elements are used (and associated with one another) and convey the standard/expected semantics to assistive technologies.

### `<c-heckbox>`

The `<c-heckbox>` component is an abstraction of a basic `type="checkbox"` input/label, with accessible labeling built in.

#### Props

<table>
  <tr>
    <th>
      label
    </th>
    <td>
      <p>A string for the `<label>` element, e.g. <code>label="Do you like animals?"</code></p>
      <p><strong>Default:</strong> <code>'Check'</code></p>
    </td>
  </tr>
  <tr>
    <th>
      name (required)
    </th>
    <td>
      <p>A valid <code>name</code> value (mapping to the standard <code>name</code> attribute), e.g. <code>name="likesAnimals"</code></p>
    </td>
  </tr>
  <tr>
    <th>
      checked
    </th>
    <td>
      <p>Boolean: whether the checkbox is checked by default</p>
    </td>
  </tr>
</table>

#### Example

```html
<c-heckbox name="likesAnimals" label="Do you like animals?" checked></c-heckbox>
```

#### Accessibility information

Standard `<label>` and `<input>` elements are used (and associated with one another) and convey the standard/expected semantics to assistive technologies.

### `<r-adios>`

The `<r-adios>` component is an abstraction of a basic radio group pattern (using `<fieldset>` and `<legend>` for the group labeling).

#### Props

<table>
  <tr>
    <th>
      legend
    </th>
    <td>
      <p>A string for the `<legend>` element e.g. <code>legend="Your favorite animal"</code></p>
      <p><strong>Default:</strong> <code>'Choose'</code></p>
    </td>
  </tr>
  <tr>
    <th>
      name (required)
    </th>
    <td>
      <p>A valid <code>name</code> value (mapping to the standard <code>name</code> attribute), e.g. <code>name="favoriteAnimal"</code></p>
    </td>
  </tr>
  <tr>
    <th>
      options (required)
    </th>
    <td>
      <p>A comma-separated list of available options, e.g. <code>options="dog, cat, fish, aardvark"</code></p>
      <p><strong>Note:</strong> Both <code>"dog,cat,fish,aardvark"</code> and <code>"dog, cat, fish, aardvark"</code> are acceptable (the spaces are removed)</p>
    </td>
  </tr>
  <tr>
    <th>
      checked
    </th>
    <td>
      <p>The string that represents the checked option (if any), e.g. <code>checked="aardvark"</code></p>
      <p><strong>Default:</strong> No item is checked</p>
    </td>
  </tr>
</table>

#### Example

```html
<r-adios label="Your favorite animal" name="favoriteAnimal" options="dog, cat, fish, aardvark" checked="aardvark"></r-adios>
```

#### Accessibility information

Standard `<fieldset>`, `<legend>`, `<label>`, `<input>` and `<select>` elements are used (and associated with one another) and convey the standard/expected semantics to assistive technologies.

## Utility classes

A set of utility classes for global styling. Each is prefixed with `u-`.

### `u-invert`

With `class="u-invert"` a CSS filter inverts the colors of the element in hand.

### `u-text-center`, `u-text-left`, `u-text-right`

For realigning text.

### `u-h1`, `u-h2`, `u-h3`, `u-h4`, `u-h5`, `u-h6`

For emulating the font sizes of semantic headings without introducing heading elements (mapped to h1—h6 sizes).

### `u-rounded`

Rounds the edges of an element with a `50%` border radius (making square elements circles).

## Working with data

Sometimes you'll want to work with dummy text (like `<w-ords>` and `<t-ext>`). Other times, you'll want to add real content using basic elements like `<h2>` and `<p>`. But you can also work with data.

### The `data.js` file

This file defines a global data object and is found in the root of the **/js** folder. You can add properties to the data object as you wish. For example, I might add a `people` property defining an array of usernames:

```js
// in js/data.js
export default {
  people: [
    {
      firstName: 'Lara',
      lastName: 'Hogan'
    },
    {
      firstName: 'Hulk',
      lastName: 'Hogan'
    },
    {
      firstName: 'Paul',
      lastName: 'Hogan'
    },
    {
      firstName: 'Heydon',
      lastName: 'Pickering'
    }
  ]
}
```

Using the `<o-utput>` component, you can template the data. Note that `this` refers to the property identified using the mandatory `property` attribute (`property="people"` here).

```html
<o-utput property="people">
  <b-ox>
    <g-rid>
      {{% for (let name in this) { %}}
      <s-tack>
        <i-mage ratio="5:9"></i-mage>
        <h3 class="u-text-center">{{% this[name].lastName %}}, {{% this[name].firstName %}}</h3>
        {{% this[name].firstName === 'Heydon' ? '(me!)' : '' %}}
      </s-tack>
      {{% } %}}
    </g-rid>
  </b-ox>
</o-utput>
```

There you have it: a set of user 'cards' laid out in a `<g-rid>`.

### The `<m-odel>` component

The `<m-odel>` component wraps a form and lets you change or add data to the global data object. It too takes a `property` attribute (i.e. it can only affect one property at a time, and only works to one level of depth).

```html
<m-odel property="people">
  <form>
    <s-tack>
      <i-nput label="First name" name="firstName"></i-nput>
      <i-nput label="Last name" name="lastName"></i-nput>
      <button type="submit">Submit</button>
    </s-tack>
  </form>
</m-odel>
```

When the submit button is pressed, a `FormData` object of values is created based on the form fields' `name` attributes. In this case, the object would be:

```js
{
  firstName: /* value from `name="firstName"` */,
  lastName: /* value from `name="lastName"` */
}
```

If the `window.data.people` property's value is an object, it will be overridden with the new data. If it is an _array_, the data will be pushed as a new item (as in the `people` example). If the `<m-odel>` contains just one field, the `FormData` object will be flattened into a simple string of that single value. That is:

```js
// This would be avoided...
people: [
  {
    person: 'Heydon Pickering'
  }
]

// ...in preference of this:

people: [
  'Heydon Pickering'
]
```

(**Note:** In this scenario, the field's `name` attribute would actually be immaterial because the first and only property of the `FormData` object is taken, whatever it is called.)

Whenever a `<m-odel>` changes the data, a `'stored'` event is fired, alerting any `<o-utput>` elements of the new data so they can rerender accordingly. This event also fires on page load, rendering out the original data.

### Security

Be careful not to allow the use of `<m-odel>` or the creation of `<o-utput>` on domains that expose personal/sensitive data. You may invite XSS.

## Actions

A set of global functions to be used with inline handlers (`onClick` etc). It is recommended these are used primarily on `<button>` elements, since they are accessible. Each action is prefixed with the `actions` namespace, like `onClick="actions.nameOfAction(arg1, arg2)"`.

### `show(id)`

Shows an element by its `id` (removes the `hidden` property).

#### Example

Shows the element with the `id` 'myElem':

```html
<button onClick="action.show('myElem')">SHow the element</button>
```

### `hide(id)`

Hides an element by its `id` (adds the `hidden` property).

#### Example

Hides the element with the `id` 'myElem':

```html
<button onClick="action.hide('myElem')">SHow the element</button>
```

### `showHide(id)`

Toggles the visibility of an element by its `id` (toggles the `hidden` property).

#### Example

Toggles the visibility of the element with the `id` 'myElem':

```html
<button onClick="action.showHide('myElem')">SHow the element</button>
```

### `flowPrev(this)`

Shows the previous element/slide/step within a `<f-low>` component. **Must be called from inside the `<f-low>` component, with `this` as the only argument**.

#### Example

```html
<button onClick="action.flowPrev(this)">Previous</button>
```

### `flowNext(this)`

Shows the next element/slide/step within a `<f-low>` component. **Must be called from inside the `<f-low>` component, with `this` as the only argument**.

#### Example

```html
<button onClick="action.flowNext(this)">Previous</button>
```

### `flowGoTo(this, index)`

Shows the next element/slide/step within a `<f-low>` component. **Must be called from inside the `<f-low>` component, with `this` as the first argument**. The second argument is the index of the element/slide/step (not zero-based; the first item is `1`).

#### Example

Shows the third element/slide/step within the `<f-low>`.

```html
<button onClick="action.flowGoTo(this, 3)">Previous</button>
```