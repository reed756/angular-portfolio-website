export class Tag {
  static readonly ANGULAR = new Tag('Angular', 'red');
  static readonly TYPESCRIPT = new Tag('TypeScript', 'darkblue');
  static readonly NODEJS = new Tag('NodeJS', 'green');
  static readonly JAVASCRIPT = new Tag('JavaScript', 'gold');
  static readonly RXJS = new Tag('RxJS', 'purple');
  static readonly NGRX = new Tag('NgRx', 'darkpurple');
  static readonly JASMINE = new Tag('Jasmine', 'lightpurple');
  static readonly EXPRESS = new Tag('Express', 'black');
  static readonly IONIC = new Tag('Ionic', 'grey');
  static readonly FIREBASE = new Tag('Firebase', 'orange');
  static readonly REACT = new Tag('React', 'lightblue');
  static readonly MATERIAL = new Tag('Angular Material', 'cyan');

  private constructor(private readonly key: string, public readonly color: string) {

  }

  toString() {
    return this.key;
  }
}
