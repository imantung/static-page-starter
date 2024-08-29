import Alpine from 'alpinejs';

declare global {
  interface Window {
    hello: unknown;
    Alpine: typeof Alpine;
    content: any;
  }
}

window.hello = function (name: string) {
  alert("Hello " + name);
};

document.addEventListener('alpine:init', () => {
  Alpine.store('list', {
      content: ["first message", "second message"],
      add(item: string) {
        this.content.push(item);
      }
  })
})

Alpine.start()


