import Alpine from 'https://cdn.skypack.dev/alpinejs@3';

const worker = new Worker('assets/worker.js');

const defaultOptions = [
  {
    id: 'caseSensitive',
    type: 'checkbox',
    label: 'Case-sensitive',
    helpText: 'Treat attributes in case sensitive manner (useful for custom HTML tags)'
  },
  {
    id: 'collapseBooleanAttributes',
    type: 'checkbox',
    label: 'Collapse boolean attributes',
    helpText: 'Omit attribute values from boolean attributes',
    checked: true
  },
  {
    id: 'collapseInlineTagWhitespace',
    type: 'checkbox',
    label: 'Collapse inline tag whitespace',
    helpText: `Don't leave any spaces between <code/>display:inline;</code> elements when collapsing.
    Must be used in conjunction with <code>collapseWhitespace=true</code>`,
    unsafe: true
  },
  {
    id: 'collapseWhitespace',
    type: 'checkbox',
    label: 'Collapse whitespace',
    helpText: 'Collapse white space that contributes to text nodes in a document tree',
    checked: true
  },
  {
    id: 'conservativeCollapse',
    type: 'checkbox',
    label: 'Conservative collapse',
    helpText: `Always collapse to 1 space (never remove it entirely).
    Must be used in conjunction with <code>collapseWhitespace=true</code>`,
  },
  {
    id: 'decodeEntities',
    type: 'checkbox',
    label: 'Decode Entity Characters',
    helpText: 'Use direct Unicode characters whenever possible',
    checked: true
  },
  {
    id: 'html5',
    type: 'checkbox',
    label: 'HTML5',
    helpText: 'Parse input according to HTML5 specifications',
    checked: true
  },
  {
    id: 'includeAutoGeneratedTags',
    type: 'checkbox',
    label: 'Include auto-generated tags',
    helpText: 'Insert tags generated by HTML parser',
  },
  {
    id: 'keepClosingSlash',
    type: 'checkbox',
    label: 'Keep closing slash',
    helpText: 'Keep the trailing slash on singleton elements',
  },
  {
    id: 'maxLineLength',
    type: 'number',
    label: 'Max. line length',
    helpText: 'Specify a maximum line length. Compressed output will be split by newlines at valid HTML split-points',
  },
  {
    id: 'minifyCSS',
    type: 'checkbox',
    label: 'Minify CSS',
    helpText: 'Minify CSS in style elements and style attributes (uses <code>clean-css</code>)',
    checked: true
  },
  {
    id: 'minifyJS',
    type: 'checkbox',
    label: 'Minify JavaScript',
    helpText: 'Minify JavaScript in script elements and event attributes (uses <code>Terser</code>)',
    checked: true
  },
  {
    id: 'minifyURLs',
    type: 'checkbox',
    label: 'Minify URLs',
    helpText: 'Minify URLs in various attributes (uses <code>relateurl</code>)',
  },
  {
    id: 'preserveLineBreaks',
    type: 'checkbox',
    label: 'Preserve line-breaks',
    helpText: `Always collapse to 1 line break (never remove it entirely) when whitespace between tags include a line break.
    Must be used in conjunction with <code>collapseWhitespace=true</code>`,
  },
  {
    id: 'preventAttributesEscaping',
    type: 'checkbox',
    label: 'Prevent attributes escaping',
    helpText: 'Prevents the escaping of the values of attributes',
    unsafe: true
  },
  {
    id: 'processConditionalComments',
    type: 'checkbox',
    label: 'Process conditional comments',
    helpText: 'Process contents of conditional comments through minifier',
    checked: true
  },
  {
    id: 'processScripts',
    type: 'text',
    label: 'Process scripts',
    helpText: 'Comma-delimited string corresponding to types of script elements to process through minifier (e.g. <code>text/ng-template, text/x-handlebars-template</code>)',
    value: 'text/html'
  },
  {
    id: 'quoteCharacter',
    type: 'text',
    label: 'Quote character',
    helpText: `Type of quote to use for attribute values (<code>'</code> or <code>"</code>)`,
  },
  {
    id: 'removeAttributeQuotes',
    type: 'checkbox',
    label: 'Remove attribute quotes',
    helpText: 'Remove quotes around attributes when possible',
    checked: true
  },
  {
    id: 'removeComments',
    type: 'checkbox',
    label: 'Remove comments',
    helpText: 'Strip HTML comments',
    checked: true
  },
  {
    id: 'removeEmptyAttributes',
    type: 'checkbox',
    label: 'Remove empty attributes',
    helpText: 'Remove all attributes with whitespace-only values',
    checked: true
  },
  {
    id: 'removeEmptyElements',
    type: 'checkbox',
    label: 'Remove empty elements',
    helpText: 'Remove all elements with empty contents',
    unsafe: true
  },
  {
    id: 'removeOptionalTags',
    type: 'checkbox',
    label: 'Remove optional tags',
    checked: true
  },
  {
    id: 'removeRedundantAttributes',
    type: 'checkbox',
    label: 'Remove redundant attributes',
    helpText: 'Remove attributes when value matches default.',
    checked: true
  },
  {
    id: 'removeScriptTypeAttributes',
    type: 'checkbox',
    label: 'Remove script type attributes',
    helpText: `Remove <code>type="text/javascript"</code> from <code>script</code> tags.
    Other <code>type</code> attribute values are left intact`,
    checked: true
  },
  {
    id: 'removeStyleLinkTypeAttributes',
    type: 'checkbox',
    label: 'Remove style link type attributes',
    helpText: `Remove <code>type="text/css"</code> from <code>style</code> and <code>link</code> tags.
    Other <code>type</code> attribute values are left intact`,
    checked: true
  },
  {
    id: 'removeTagWhitespace',
    type: 'checkbox',
    label: 'Remove tag whitespace',
    helpText: `Remove space between attributes whenever possible.
    <em>Note that this will result in invalid HTML!</em>`,
    checked: true,
    unsafe: true
  },
  {
    id: 'sortAttributes',
    type: 'checkbox',
    label: 'Sort attributes',
    helpText: 'Sort attributes by frequency',
    checked: true,
    unsafe: true
  },
  {
    id: 'sortClassName',
    type: 'checkbox',
    label: 'Sort class name',
    helpText: 'Sort style classes by frequency',
    checked: true,
    unsafe: true
  },
  {
    id: 'trimCustomFragments',
    type: 'checkbox',
    label: 'Trim white space around custom fragments',
    helpText: 'Trim white space around <code>ignoreCustomFragments</code>.',
    checked: true,
  },
  {
    id: 'useShortDoctype',
    type: 'checkbox',
    label: 'Use short doctype',
    helpText: 'Replaces the <code>doctype</code> with the short (HTML5) <code>doctype</code>',
    checked: true,
  },
]

const sillyClone = (o) => JSON.parse(JSON.stringify(o))

const getOptions = (options) => {
  const minifierOptions = {}

  options.forEach((option) => {
    let value = null

    if (option.type === 'checkbox') {
      value = option.checked ? true : false
    } else if (!option.value) {
      return
    } else if (option.type === 'number') {
      value = parseInt(option.value)
    } else {
      value = option.value
    }

    if (option.id === 'processScripts') {
      value = value.split(/\s*,\s*/);
    }

    minifierOptions[option.id] = value;
  })

  return minifierOptions
}

Alpine.data('minifier', () => ({
  options: sillyClone(defaultOptions),
  input: '',
  output: '',
  stats: {
    result: '',
    text: ''
  },

  async minify() {
    this.stats = {
      result: '',
      text: ''
    }

    worker.onmessage = (event) => {
      var data = event.data;

      if (data.error) {
        this.stats.result = 'failure'
        this.stats.text = data.error
      } else {
        var diff = this.input.length - data.length;
        var savings = this.input.length ? (100 * diff / this.input.length).toFixed(2) : 0;

        this.output = data
        this.stats.result = 'success'
        this.stats.text = `Original Size: ${this.input.length}, Minfied Size: ${data.length}, Savings: ${diff} (${savings}%)`
      }
    };

    const options = getOptions(this.options)

    worker.postMessage({
      value: this.input,
      options: options
    });
  },

  selectAllOptions(yes = true) {
    this.options = this.options.map((option) => {

      if (option.type !== 'checkbox') {
        return option
      }

      return {
        ...option,
        checked: yes ? true : false
      }
    })
  },

  resetOptions() {
    this.options = sillyClone(defaultOptions)
  }
}))

Alpine.start()
