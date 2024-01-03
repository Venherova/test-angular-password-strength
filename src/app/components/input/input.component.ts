import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PasswordCheckPipe } from '../../pipes/password-check.pipe';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [CommonModule, FormsModule, PasswordCheckPipe],
  templateUrl: './input.component.html',
  styleUrl: './input.component.css',
})
export class InputComponent {
  checkPassword: string = '';
  inputType: string = 'password';

  changeInputType() {
    this.inputType = this.inputType === 'password' ? 'text' : 'password';
  }
}
