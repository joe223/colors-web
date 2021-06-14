import ColorsFactory from "./factory";

export const logger = (...args) => {
  const styles = [];
  const strings = [];
  args.forEach((arg) => {
    if (typeof arg === "string") {
      strings.push("%c" + arg);
      styles.push("");
    } else {
      const result = arg.result();
      strings.push("%c" + result.o);
      styles.push(result.style);
    }
  });
  console.log(strings.join(""), ...styles);
};

export const colors = () => {
  const instance = ColorsFactory.create();
  return instance;
};
