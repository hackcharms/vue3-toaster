# How to fire toast (working example) 

## Using Composable (Composition API)
```ts
import { useToaster } from "vue3-toaster";
// let for some use case I want only this toast message to be cleared after some event executed
function performSomeTask() {
  const ToasterId = useToaster().add({
    title: "Server Error",
    type: "error",
    text: "Please try again after some time.",
  });
  // in next try we got success response so we don't want it to be visible so we will remove it.
  useToaster().remove(ToasterId);
}
```

## Using inject method (if [registerd as a plugin](#register-as-plugin) in `(Composition API)`)

```ts
import { useToaster } from "vue3-toaster";
const toaster = inject("$toaster");
const ToasterId = toaster.add({
  title: Congratulations,
  type: success,
  text: "You have Done it.",
});
```

## Using `this` (if [registerd as a plugin](#register-as-plugin) `(Option API)`)

```ts
export default {
  methods: {
    fireToast() {
      const ToasterId = this.$toaster.add({
        title: Congratulations,
        type: success,
        text: "You have Done it.",
      });
    },ss
  },
};
```

[CodeSandBox Option Api example](https://codesandbox.io/p/sandbox/vue3--jr3q5w?file=%2Fsrc%2FApp.vue&layout=%257B%2522sidebarPanel%2522%253A%2522EXPLORER%2522%252C%2522rootPanelGroup%2522%253A%257B%2522direction%2522%253A%2522horizontal%2522%252C%2522contentType%2522%253A%2522UNKNOWN%2522%252C%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522id%2522%253A%2522ROOT_LAYOUT%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522UNKNOWN%2522%252C%2522direction%2522%253A%2522vertical%2522%252C%2522id%2522%253A%2522clpnu8cy100063b6hldsy043k%2522%252C%2522sizes%2522%253A%255B70%252C30%255D%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522EDITOR%2522%252C%2522direction%2522%253A%2522horizontal%2522%252C%2522id%2522%253A%2522EDITOR%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522EDITOR%2522%252C%2522id%2522%253A%2522clpnu8cy100023b6hili730ca%2522%257D%255D%257D%252C%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522SHELLS%2522%252C%2522direction%2522%253A%2522horizontal%2522%252C%2522id%2522%253A%2522SHELLS%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522SHELLS%2522%252C%2522id%2522%253A%2522clpnu8cy100033b6h59po2i0l%2522%257D%255D%252C%2522sizes%2522%253A%255B100%255D%257D%255D%257D%252C%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522DEVTOOLS%2522%252C%2522direction%2522%253A%2522vertical%2522%252C%2522id%2522%253A%2522DEVTOOLS%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522DEVTOOLS%2522%252C%2522id%2522%253A%2522clpnu8cy100053b6h85occd4u%2522%257D%255D%252C%2522sizes%2522%253A%255B100%255D%257D%255D%252C%2522sizes%2522%253A%255B50%252C50%255D%257D%252C%2522tabbedPanels%2522%253A%257B%2522clpnu8cy100023b6hili730ca%2522%253A%257B%2522id%2522%253A%2522clpnu8cy100023b6hili730ca%2522%252C%2522tabs%2522%253A%255B%257B%2522id%2522%253A%2522clpnw178z00023b6hnh29cgnt%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522type%2522%253A%2522FILE%2522%252C%2522filepath%2522%253A%2522%252Fsrc%252FApp.vue%2522%252C%2522state%2522%253A%2522IDLE%2522%257D%255D%252C%2522activeTabId%2522%253A%2522clpnw178z00023b6hnh29cgnt%2522%257D%252C%2522clpnu8cy100053b6h85occd4u%2522%253A%257B%2522id%2522%253A%2522clpnu8cy100053b6h85occd4u%2522%252C%2522tabs%2522%253A%255B%257B%2522id%2522%253A%2522clpnu8cy100043b6hjt31ucqa%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522type%2522%253A%2522UNASSIGNED_PORT%2522%252C%2522port%2522%253A0%252C%2522path%2522%253A%2522%2522%257D%255D%252C%2522activeTabId%2522%253A%2522clpnu8cy100043b6hjt31ucqa%2522%257D%252C%2522clpnu8cy100033b6h59po2i0l%2522%253A%257B%2522tabs%2522%253A%255B%255D%252C%2522id%2522%253A%2522clpnu8cy100033b6h59po2i0l%2522%257D%257D%252C%2522showDevtools%2522%253Atrue%252C%2522showShells%2522%253Atrue%252C%2522showSidebar%2522%253Atrue%252C%2522sidebarPanelSize%2522%253A15%257D)

- _Please Note `this.$toaster` only works in Option API if you have [registered as Plugin](#register-as-plugin)_
