# next-return-event
> Return event for react component

## install:
```bash
npm install -S afeiship/next-return-event --registry=https://registry.npm.taobao.org
```

## usage:
```js
var event = { target:{ value } };
var value = 123;

nx.returnEventValue(event);
// value

nx.returnEventTarget(value);
// { target: { value: 123 } }
```
