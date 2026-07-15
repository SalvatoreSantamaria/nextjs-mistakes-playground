let serverCount = 0;

export function getServerCount() {
  return serverCount;
}

export function incrementServerCount() {
  serverCount += 1;
  return serverCount;
}
