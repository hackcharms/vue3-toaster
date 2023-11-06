import { ref, h, defineComponent, inject } from "vue";
import { Toaster, useToaster } from "vue3-toaster";

const Comp = defineComponent(
  (props: { message?: string }) => {
    const $toast = inject("$toast") as Toaster;
    const count = ref(0);
    const increment = () => {
      count.value++;
    };
    const decrement = () => {
      count.value--;
    };
    const toastRandom = () => {
      console.log("adding Toaster");
      const types: ToastVariant[] = ["error", "info", "success", "warn"];
      const messages = [
        "Doloribus ",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus quaerat dolorem ipsam mollitia perspiciatis, accusantium vitae id laudantium laborum, cupiditate non optio eum asperiores nam consequuntur soluta porro. Distinctio, dolores!",
        "Doloribus quaerat dolorem ipsam mollitia perspiciatis, accusantium vitae id laudantium laborum, cupiditate non optio eum asperiores nam consequuntur soluta porro. Distinctio, dolores!",
        "Doloribus quaerat dolorem ipsam mollitia perspiciatis, accusantium vitae id laudantium laborum, cupiditate non optio eum asperiores nam consequuntur soluta porro.",
        "Doloribus quaerat dolorem ipsam mollitia perspiciatis, accusantium vitae id laudantium laborum, cupiditate non optio eum consequuntur soluta ",
        "Doloribus quaerat dolorem ipsam mollitia perspiciatis, accusantium vitae id laudantium laborum, cupiditate non optio eum ",
        "Doloribus quaerat dolorem ipsam mollitia perspiciatis, accusantium vitae id laudantium laborum, cupiditate non optio eum ",
      ];
      const ToastId = $toast.add({
        // const ToastId = useToaster().add({
        type: types[count.value % types.length],
        text:
          messages[count.value % messages.length] +
          `dud count==> ${count.value}`,
        title: `title no ${count.value}`,
      });
      increment();
    };
    return () => {
      // render function or JSX
      return h("div", [
        h(
          "button",
          { onClick: decrement, style: "color:red", class: "button" },
          "-"
        ),
        h("p", count.value),
        h("button", { onClick: increment, class: "button" }, "+"),
        h("button", { onClick: toastRandom, class: "button" }, "Toast"),
        h("h1", `message ==> ${props.message}`),
      ]);
    };
  },
  // extra options, e.g. declare props and emits
  {
    props: {
      message: {
        type: String,
        default: () => "this is default",
      },
    },
    name: "DefineCompoName",
  }
);
export default Comp;
