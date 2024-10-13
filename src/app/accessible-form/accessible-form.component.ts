import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-accessible-form',
  standalone: true,
  templateUrl: './accessible-form.component.html',
  styleUrls: ['./accessible-form.component.css'],
  imports: [ReactiveFormsModule, CommonModule],
})
export class AccessibleFormComponent {
  form: FormGroup;
  successMessage: string | null = null; // Variable for success message

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.form.valid) {
      console.log(this.form.value); // Handle the form submission (e.g., send to server)

      // Clear the form fields
      this.form.reset();

      // Set the success message
      this.successMessage = 'Your message has been sent successfully!';
      
      // Optionally, clear the success message after a few seconds
      setTimeout(() => {
        this.successMessage = null;
      }, 3000); // Clears the message after 3 seconds
    }
  }
}
