import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'newPipe'
})
export class NewPipePipe implements PipeTransform {

  transform(str: string): string {
    return `${str.trim()}!!!`;
  }

}
