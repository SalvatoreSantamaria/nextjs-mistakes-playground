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

export async function getSlowArtist() {
  await new Promise((r) => setTimeout(r, 700));
  return { id: "a1", name: "Nina Simone", loadedAt: Date.now() };
}

export async function getSlowAlbums() {
  await new Promise((r) => setTimeout(r, 700));
  return [
    { id: "al1", title: "I Put a Spell on You" },
    { id: "al2", title: "Pastel Blues" },
  ];
}

export type SecretUserRow = {
  id: string;
  name: string;
  email: string;
  apiToken: string;
  passwordHash: string;
};

export async function getSecretUserRow(): Promise<SecretUserRow> {
  return {
    id: "u1",
    name: "Demo User",
    email: "demo@example.com",
    apiToken: "sk_live_demo_should_not_reach_client",
    passwordHash: "$2b$10$leaked_if_passed_to_client",
  };
}

export function toPublicUser(row: SecretUserRow) {
  return { id: row.id, name: row.name, email: row.email };
}
