import { ValidatorFn, AbstractControl } from '@angular/forms';

export function matchPassword(): ValidatorFn {
  return (repeatedPass: AbstractControl): { [key: string]: any } => {
    const formGroup = repeatedPass.parent;
    if (formGroup) {
      const pass = formGroup.get('password');
      return pass.value !== repeatedPass.value
        ? { 'not-matching-pass': { value: repeatedPass.value } }
        : null;
    }
    return null;
  };
}
