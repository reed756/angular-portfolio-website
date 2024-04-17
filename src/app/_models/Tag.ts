export class Tag {
  static readonly ANGULAR = new Tag('Angular', 'red');
  static readonly TYPESCRIPT = new Tag('TypeScript', 'darkblue');
  static readonly NODEJS = new Tag('Node.JS', 'green');
  static readonly JAVASCRIPT = new Tag('JavaScript', 'yellow');
  static readonly RXJS = new Tag('RxJS', 'purple');
  static readonly NGRX = new Tag('NgRx', 'darkpurple');

  private constructor(private readonly key: string, public readonly color: string) {

  }

  toString() {
    return this.key;
  }
}
