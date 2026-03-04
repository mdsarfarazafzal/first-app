import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.css',
})
export class InputComponent {
  inputValue: string = '';
  @Output() valueChange = new EventEmitter<string>();
  
  onInputChange() {
    this.valueChange.emit(this.inputValue);
  }
}
