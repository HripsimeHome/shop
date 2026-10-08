export async function GET() {
  return Response.json({
    message: "Products API",
  });
}

// Next.js должен увидеть функцию GET, чтобы понять:
// Если приходит GET-запрос на этот endpoint — нужно выполнить эту функцию.
// То есть мы не вызываем её вручную: GET(); Next.js сам вызовет её, когда придёт HTTP-запрос.
