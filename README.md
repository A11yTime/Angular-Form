## Accessibility Considerations of Form and Validation 
* Focus must be set to the error related field when error occur.
* Error message must be programmatically determined with the associated field to describe user in text.
* Form must have programmatically determiable label.
* Label should be always visible.
* Labels should be close proximity to their associated fields.
* Label should be meaningful.

## Terminologies: 
`import { FormBuilder, FormGroup, Validators } from '@angular/forms';`
* FormBuilder is a service provided by angular that makes it easier to create reactive form, instead of manually creating form controls and groups. It provides methods such as group(), control(), array() to create form structue more concisely.
* Form group is a class that represents a group of form controls. Its a way to manage the state and validation of multiple form controls as a single unit. It defines the structue of your form. Each form control within the group can be independently validated and accessed.
* Validators is a collection of built in validators provided by Angular to perform validation on form controls.
* `  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
    });
  } `
* *ngIf: Conditional rendering of form.
* `attr.aria-describedby`: Provide programmatic determination of error message.
* `role="alert"`: alert screen reader about the error message.
* `label for="id-lb"` and `id="id-lb" ` Providing label for form control.

  


