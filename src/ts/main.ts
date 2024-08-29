import Alpine from 'alpinejs';

declare global {
  interface Window {
    hello: unknown;
    alpine: typeof Alpine;
  }
}

window.hello = function (name: string) {
  alert("Hello " + name);
};

window.alpine = Alpine

Alpine.start()


