import { Component } from '@angular/core';
import { GreetingComponent } from '../greeting/greeting.component';
import { NameComponent } from '../name/name.component';
import { InputComponent } from '../input/input.component';
import { TabsComponent } from '../tabs/tabs.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [GreetingComponent, NameComponent, InputComponent, TabsComponent, RouterLink],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css',
})
export class ParentComponent  {
  sharedGreet: string = 'Hello,';

  changeGreet(value: string) {
    this.sharedGreet = value;
  }
}
