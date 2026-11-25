const LINE = "One percent is still enough to say: I saw everything.";
const USAGE = "Usage: node main.ts [--shout] [--help]";

const args = process.argv.slice(2);

function hasFlag(flag: string): boolean {
  return args.includes(flag);
}

function renderLine(shout: boolean): string {
  return shout ? LINE.toUpperCase() : LINE;
}

function printUsage(): void {
  console.error(USAGE);
  console.error("");
  console.error("  --shout   Print the line in uppercase.");
  console.error("  --help    Show this help text.");
}

function main(): void {
  if (hasFlag("--help")) {
    printUsage();
    process.exit(0);
  }

  console.log(renderLine(hasFlag("--shout")));
}

main();
