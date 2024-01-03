import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'passwordCheck',
  standalone: true,
})
export class PasswordCheckPipe implements PipeTransform {
  transform(password: string): string[] {
    if (!password) return ['gray', 'gray', 'gray'];
    if (password.length < 8) return ['red', 'red', 'red'];

    const hasLetters = /[a-zA-Z]/.test(password);
    const hasDigits = /\d/.test(password);
    const hasSymbols = /[!@#$%^&*(),.?":{}|<>+_\-]/.test(password);

    const typesCount = [hasLetters, hasDigits, hasSymbols].filter(
      Boolean
    ).length;

    switch (typesCount) {
      case 1:
        return ['red', 'gray', 'gray'];
      case 2:
        return ['yellow', 'yellow', 'gray'];
      case 3:
        return ['green', 'green', 'green'];
      default:
        return ['gray', 'gray', 'gray'];
    }
  }
}
