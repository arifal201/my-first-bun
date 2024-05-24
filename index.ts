const server = Bun.serve({
  port: 3000,
  fetch(req){
    return new Response("Bun");
  },
});
console.log("Hello via Bun!, Bun is running on port 3000");
console.log(Bun.version);