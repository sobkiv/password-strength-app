import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-password-strength',
  templateUrl: './password-strength.component.html',
  styleUrls: ['./password-strength.component.scss'],
})
export class PasswordStrengthComponent {
  public passwordControl = new FormControl('');
  public passwordStrength: 'week' | 'easy' | 'medium' | 'strong';
  public showPassword = false;

  private readonly minLength = 8;

  private readonly regex = {
    containsLetters: /[a-zA-Zа-яА-Я]/,
    containsNumbers: /[0-9]/,
    containsSpecialChars: /[!@#$%^&*(),.?":{}|<>_]/,
  };

  constructor() {
    this.passwordControl.valueChanges.pipe(debounceTime(100)).subscribe(() => {
      this.updatePasswordStrength();
    });
  }

  private updatePasswordStrength(): void {
    const password = this.passwordControl.value;
    const containsLetters = this.regex.containsLetters.test(password);
    const containsNumbers = this.regex.containsNumbers.test(password);
    const containsSpecialChars = this.regex.containsSpecialChars.test(password);
    const isStrong = containsLetters && containsNumbers && containsSpecialChars;
    const isMedium =
      (containsLetters && containsNumbers) ||
      (containsNumbers && containsSpecialChars) ||
      (containsLetters && containsSpecialChars);

    if (!password) {
      this.passwordStrength = null;
    } else if (password.length < this.minLength) {
      this.passwordStrength = 'week';
    } else if (isStrong) {
      this.passwordStrength = 'strong';
    } else if (password.length >= this.minLength && !isMedium) {
      this.passwordStrength = 'easy';
    } else {
      this.passwordStrength = 'medium';
    }
  }

  public togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }
}
