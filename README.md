# next-stub-event
> Stub event for react component.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```bash
npm install -S @jswork/next-stub-event
```

## usage
```js
import '@jswork/next-stub-event';

const event = { target:{ value } };
const value = 123;

nx.stubEventValue(event);
// value

nx.stubEventTarget(value);
// { target: { value: 123 } }
```

## license
Code released under [the MIT license](https://github.com/afeiship/next-stub-event/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/next-stub-event
[version-url]: https://npmjs.org/package/@jswork/next-stub-event

[license-image]: https://img.shields.io/npm/l/@jswork/next-stub-event
[license-url]: https://github.com/afeiship/next-stub-event/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/next-stub-event
[size-url]: https://github.com/afeiship/next-stub-event/blob/master/dist/next-stub-event.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/next-stub-event
[download-url]: https://www.npmjs.com/package/@jswork/next-stub-event
