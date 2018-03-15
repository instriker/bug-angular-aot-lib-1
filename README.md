# instriker demo - Sample Angular library built using ngx-library yeoman generator to demonstrate an AOT bug.

## Dependencies

* [Angular](https://angular.io) (*requires* Angular 5 or higher, tested with 5.0.0)

## Installation
Install above dependencies via *npm*.

Now install `demolibraryforaot` via:
```shell
npm install --save @instriker-demo/demolibraryforaot
```

## Usage

```typescript
import { SimpleCoreComponent } from '@instriker-demo/demolibraryforaot';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})
export class SampleComponent extends SimpleCoreComponent {
}
```

## License

Copyright (c) 2018 Alexandre Emond. Licensed under the MIT License (MIT)
