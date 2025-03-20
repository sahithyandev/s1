import type { APIRoute } from "astro";
import { GOOGLE_APPSCRIPT_API_URL } from "../../utils";

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
	if (request.body == null) {
		return new Response("ERROR: no body");
	}

	const b = await request.json();
	b.target_sheet = "s1";
	b.action = "create";
	const response = await fetch(GOOGLE_APPSCRIPT_API_URL, {
		method: "post",
		headers: {
			"content-type": "application/json",
		},
		body: JSON.stringify(b),
	});
	const t = await response.text();
	console.log(t);
	return new Response(t, {
		status: response.status,
	});
};
