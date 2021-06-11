import cssColors from "./css-colors";

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
  const inst = function (o) {
    if (o) this.o = o;
    return this;
  };
  Object.assign(inst, {
    styles: [],
    o: "",
    log(o) {
      this.o = o;
      return this;
    },
    hexColor(hexColor) {
      this.styles.push(`color:${hexColor};`);
      return this;
    },
    color(color) {
      this.styles.push(`color:${color};`);
      return this;
    },
    bg(color) {
      this.styles.push(`background:${color};`);
      return this;
    },
    padding(size, sizeH) {
      if (sizeH) {
        this.styles.push(`padding:${size}px ${sizeH}px;`);
      } else {
        this.styles.push(`padding:${size}px;`);
      }
      return this;
    },
    bold(o) {
      this.styles.push(`font-weight:bold;`);
      if (o) this.o = o;
      return this;
    },
    underline(o) {
      this.styles.push(`font-style:underline;`);
      if (o) this.o = o;
      return this;
    },
    italic(o) {
      this.styles.push(`font-style:italic;`);
      if (o) this.o = o;
      return this;
    },
    result() {
      return {
        o: this.o,
        style: this.styles.join(""),
      };
    },
  });

  cssColors.forEach((color) => {
    Object.defineProperty(inst, color, {
      get() {
        this.styles.push(`color:${color};`);
        return this;
      },
    });
    Object.defineProperty(inst, color + "Bg", {
      get() {
        this.styles.push(`background:${color};`);
        return this;
      },
    });
  });
  return inst;
};
