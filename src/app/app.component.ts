import {Component, OnInit} from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import {MyValidators} from './my.validators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  form: FormGroup;

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl('', [
        Validators.email,
        Validators.required,
        MyValidators.restrictedEmails,
      ], MyValidators.uniqEmail),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(6)
      ]),
      address: new FormGroup({
        country: new FormControl('ua'),
        city: new FormControl('', Validators.required)
      }),
      skills: new FormArray([]),
    });
  }

  submit(): void {
    console.log('Form', this.form);
    const formData = {...this.form.value};
    console.log(formData);

    this.form.reset();
  }

  getFormControlls(name: string): FormArray {
    return this.form.get(name) as FormArray;
  }

  setCapital(): void {
    const cityMap = {
      ru: 'Mockow',
      ua: 'Kiev',
      en: 'London',
    };
    const cityKey = this.form.get('address').get('country').value;
    const city = cityMap[`${cityKey}`];
    this.form.patchValue({
      address: {city}
    });
  }

  addSkill(): void {
    const control = new FormControl('', Validators.required);
    // (<FormArray> this.form.get('skills')).push;
    (this.form.get('skills') as FormArray).push(control);
  }
}
