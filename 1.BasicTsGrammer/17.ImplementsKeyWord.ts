interface Person {
  id: number;
  name: string;
  play: () => void;
}

interface Person1 {
  gender: boolean;
}

class XiaoMing implements Person, Person1 {
  id: number;
  name: string;
  play: () => void;
  gender: boolean;
  age: number;
  constructor(a: number, b: string, c: () => void) {
    this.id = a;
    this.name = b;
    this.play;
  }
}
