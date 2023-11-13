import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PasswordStrengthComponent } from './password-strength.component';
import { ReactiveFormsModule } from '@angular/forms';

describe('PasswordStrengthComponent', () => {
  let component: PasswordStrengthComponent;
  let fixture: ComponentFixture<PasswordStrengthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PasswordStrengthComponent],
      imports: [ReactiveFormsModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PasswordStrengthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should update password strength to null when password is empty', () => {
    component.passwordControl.setValue('');
    component.updatePasswordStrength();
    expect(component.passwordStrength).toBeNull();
  });

  

  it('should update password strength to Weak when password length is less than minLength', () => {
    component.passwordControl.setValue('pass');
    component.updatePasswordStrength();
    expect(component.passwordStrength).toEqual('weak');
  });

  it('should update password strength to Strong when password is strong', () => {
    component.passwordControl.setValue('P@ssw0rd');
    component.updatePasswordStrength();
    expect(component.passwordStrength).toEqual('strong');
  });

  it('should update password strength to Easy when password length is greater than or equal to minLength and not medium', () => {
    component.passwordControl.setValue('PsssSssssssпвпвв');
    component.updatePasswordStrength();
    expect(component.passwordStrength).toEqual('easy');
  });

  it('should update password strength to Medium when password is medium', () => {
    component.passwordControl.setValue('P@ssssssssssss');
    component.updatePasswordStrength();
    expect(component.passwordStrength).toEqual('medium');
  });

  it('should toggle password visibility', () => {
    expect(component.showPassword).toBeFalsy();
    component.togglePasswordVisibility();
    expect(component.showPassword).toBeTruthy();
    component.togglePasswordVisibility();
    expect(component.showPassword).toBeFalsy();
  });
});
