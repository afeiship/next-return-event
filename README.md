# next-stub-event
> Stub event for react component.

## installation
```bash
npm install -S @feizheng/next-stub-event
```

## usage
```js
import '@feizheng/next-stub-event';

var event = { target:{ value } };
var value = 123;

nx.stubEventValue(event);
// value

nx.stubEventTarget(value);
// { target: { value: 123 } }
```
