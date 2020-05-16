import { listenAndServe } from "https://deno.land/std@v0.51.0/http/server.ts"

listenAndServe({ port: 3000 }, async (req) => {
    if (req.method === "GET" && req.url === "/") {
        req.respond({
            status: 200,
            headers: new Headers({
                "content-type": "text/html",
            }),
            body: await Deno.open("src/client/index.html"),
        });
    }
});

console.log("Server running on localhost:3000");
