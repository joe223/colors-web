import ColorsFactory from "./factory";

export const logger = (...args) => {
  const styles = [];
  const strings = [];
  args.forEach((arg) => {
    if (typeof arg === "string") {
      strings.push("%c" + arg);
      styles.push("");
    } else if (arg && arg.type === "colors-web-instance") {
      const result = arg.result();
      strings.push("%c" + result.o);
      styles.push(result.style);
    } else {
      strings.push(arg);
    }
  });
  logger.source(strings.join(""), ...styles);
};

logger.source = window.console.log;

export const colors = () => {
  const instance = ColorsFactory.create();
  return instance;
};
