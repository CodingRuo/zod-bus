# `zod-bus`

Gives you type-safe message passing (using Zod!) between two different environments.

```ts
// protocol.ts

const protocol = createMessageProtocol({
  events: {
    LOG_IN: {
      username: z.string(),
      password: z.string(),
    },
    LOG_OUT: {},
  },
});

// iframe.ts

// Type safe sender
const sendToParent = protocol.createHandler(window.parent.postMessage);

// Type safe receiver
const handleParentEvent = protocol.createHandler((event) => {
  console.log(event);
});

window.addEventListener("message", (event) => {
  handleParentEvent(event.data);
});
```

## Installation

`pnpm add @codingruo/zod-bus`

`npm i  @codingruo/zod-bus`

`yarn add @codingruo/zod-bus`

## Usage
