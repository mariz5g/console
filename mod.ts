// deno-lint-ignore-file no-explicit-any
class Console {
  stdin = Deno.stdin;
  stdout = Deno.stdout;
  buffer = new Uint8Array(1024)
  encoder = new TextEncoder()

  public Read(question: string): string {
    this.stdout.writeSync(this.encoder.encode(question));

    const answer: any = this.stdin.readSync(this.buffer);

    return new TextDecoder().decode(this.buffer.subarray(0, answer)).replace(/\r?\n|\r/g, '');
  }


  public WriteLine = (...args: any[]) =>  this.stdout.writeSync(this.encoder.encode(args + "\n"));

  public ChooseOption(option: any[], question: string) {
    const optionLength: number = option.length;

    for(let i = 0; i < optionLength; i++)
      this.stdout.writeSync(this.encoder.encode(`[${i+1}] ${option[i]}\n`));

    this.stdout.writeSync(this.encoder.encode(question + `[1..${optionLength}]: `));
    
    const answer: any = this.stdin.readSync(this.buffer);

    return Number(new TextDecoder().decode(this.buffer.subarray(0, answer))) - 1;

  }

  public KeyInYN(question: string): boolean {
    this.stdout.writeSync(this.encoder.encode(question));

    const answer: any = this.stdin.readSync(this.buffer);
    const value: string = new TextDecoder().decode(this.buffer.subarray(0, answer)).replace(/\r?\n|\r/g, '');

    if(value.toUpperCase() === 'Y') return true;

    return false;
  }
}

export const console: Console = new Console();