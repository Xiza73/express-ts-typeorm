const ConsoleType = {
  log: "log",
  info: "info",
  warn: "warn",
  error: "error",
} as const;
type Console = (typeof ConsoleType)[keyof typeof ConsoleType];

export const logger = (message: string, type: Console = ConsoleType.log) => {
  // eslint-disable-next-line no-console
  console[type](message);
};
