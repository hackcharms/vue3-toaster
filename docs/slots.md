
# Slots
<p align="center">
  <img width="800px" alt="image" src="https://github.com/hackcharms/vue3-toaster/assets/48487312/f0babb2c-7067-4408-892a-15e402853b8e"/>
</p>

Slots interface had been defined here [ToastSlotType](/interfaces#toastslottype),
there are 4 slots provided by the component.

## 1. default

```ts
interface {
  id: string;
  title: string;
  type: ToastVariant;
  text: string;
  destroyToaster: () => void;
  pauseCountdown: (value: boolean) => void;
}

```

## 2. icon

```ts
interface {
  type: "warn" | "success" | "info" | "error";
  title: string;
}
```

## 3. clearIcon

```ts
interface {
}
```

## 4. content

```ts
interface {
  type: "warn" | "success" | "info" | "error";
  title: string;
  text: string;
}
```
