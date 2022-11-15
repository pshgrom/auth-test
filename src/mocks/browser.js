import { setupWorker, rest } from "msw";

export const worker = setupWorker(
  rest.post("/login", (req, res, ctx) => {
    const { email, password } = req.body;
    if (!email.includes("@") || password.length < 3) {
      return res(
        ctx.status(401),
        ctx.json({ message: "The email address or password is incorrect." })
      );
    }
    return res(
      ctx.status(200),
      ctx.json({
        token: Math.random().toString(36).substr(2),
        user: {
          name: "test user",
          date: "01.01.2022",
        },
      })
    );
  })
);
