let config = null;

export async function loadConfig() {
  const res = await fetch('/pos-restaurant/config.json');
  config = await res.json();
  console.log(config)
}

export function getConfig() {
  if (!config) {
    throw new Error("Config not loaded yet!");
  }
  return config;
}
