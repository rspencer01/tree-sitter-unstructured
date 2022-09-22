module.exports = grammar({
  name: 'unstructured',

  rules: {
    // This I am not certain about. Tree-sitter hangs with /.*/ but seems to be happy
    // if we acknowledge newlines explicitly
    source_file : $ => /(.*\n)+/,
  },

  extras: $ => [],
});
