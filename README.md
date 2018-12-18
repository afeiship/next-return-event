# next-stub-event
> Stub event for react component

## install:
```bash
npm install -S afeiship/next-stub-event --registry=https://registry.npm.taobao.org
```

## usage:
```js
var event = { target:{ value } };
var value = 123;

nx.stubEventValue(event);
// value

nx.stubEventTarget(value);
// { target: { value: 123 } }
```
