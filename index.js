const sqip = require('sqip').default;

sqip({
  input: 'original/beach.jpg',
  output: 'previews',
  plugins: [
    {
      name: 'sqip-plugin-primitive',
      options: {
        numberOfPrimitives: 32,
        mode: 0,
      },
    },
    `sqip-plugin-svgo`,
  ],
});