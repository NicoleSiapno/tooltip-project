## Getting started

In the project directory, run:

```
$ yarn install
$ yarn start
```

To test the tooltip in a scrollable page simply pass the `scrollable` prop to the `TooltipExample` component in `App.tsx`, like so:

```jsx
function App() {
  return (
    <>
      <GlobalStyle />
      <TooltipExample scrollable />
    </>
  )
}
```

## Testing on a mobile device

There are two ways to test this project on mobile, outlined below:

1. Using mobile view with chrome dev tools

2. Broadcast localhost and use a mobile device on the same network
    - run `yarn start --host 0.0.0.0`
    - on a mobile device that's on the same network as the laptop/computer you've run localhost, visit `http://10.0.0.1:8080` in the browser.