// 使用pnpm管理依赖
if (!/pnpm/.test(process.env.npm_execpath || "")) {
  console.warn(`\u001b[33m请使用pnpm管理该项目，pnpm install.\u001b[39m\n`);
  process.exit(1);
}
