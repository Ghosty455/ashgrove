import { DurableObject } from "cloudflare:workers";

const STARTING_COUNT = 5389;

export class AssessmentCounter extends DurableObject {
  async fetch(request) {
    const completed = (await this.ctx.storage.get("completed")) ?? 0;

    if (request.method === "GET") {
      return Response.json({ count: STARTING_COUNT + completed });
    }

    if (request.method === "POST") {
      const nextCompleted = completed + 1;
      await this.ctx.storage.put("completed", nextCompleted);
      return Response.json({ count: STARTING_COUNT + nextCompleted });
    }

    return new Response("Method not allowed", { status: 405 });
  }
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname === "/api/count" || url.pathname === "/api/complete") {
      const id = env.ASSESSMENT_COUNTER.idFromName("ashgrove-global-counter");
      const counter = env.ASSESSMENT_COUNTER.get(id);

      if (url.pathname === "/api/count" && request.method !== "GET") {
        return new Response("Method not allowed", { status: 405 });
      }

      if (url.pathname === "/api/complete" && request.method !== "POST") {
        return new Response("Method not allowed", { status: 405 });
      }

      const internalRequest = new Request("https://ashgrove.internal/counter", {
        method: url.pathname === "/api/complete" ? "POST" : "GET"
      });

      return counter.fetch(internalRequest);
    }

    return env.ASSETS.fetch(request);
  }
};
