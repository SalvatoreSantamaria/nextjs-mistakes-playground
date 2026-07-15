type CartItem = { id: string; name: string };

const globalStore = globalThis as unknown as {
  __demoCart?: CartItem[];
};

function cart(): CartItem[] {
  if (!globalStore.__demoCart) globalStore.__demoCart = [];
  return globalStore.__demoCart;
}

export function getCart(): CartItem[] {
  return [...cart()];
}

export function addToCart(name: string) {
  cart().push({ id: crypto.randomUUID(), name });
}

export function clearCart() {
  globalStore.__demoCart = [];
}

export async function getDemoProducts() {
  await new Promise((r) => setTimeout(r, 400));
  return [
    { id: "1", name: "Notebook" },
    { id: "2", name: "Pen" },
    { id: "3", name: "Sticker pack" },
  ];
}

export async function getSlowMessage(label: string) {
  await new Promise((r) => setTimeout(r, 1200));
  return `Loaded: ${label} at ${new Date().toLocaleTimeString()}`;
}
