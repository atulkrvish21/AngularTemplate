import { Component } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common'; // Import CommonModule if necessary



@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterModule,CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  isMenuOpen: boolean = false; // Manage the menu state

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen; // Toggle the menu open state
  }
}
