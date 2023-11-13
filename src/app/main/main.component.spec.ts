import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MainComponent } from './main.component';
import { HeaderComponent } from '../shared/header/header.component';
import { PasswordStrengthComponent } from './password-strength/password-strength.component';
import { FooterComponent } from '../shared/footer/footer.component';

describe('MainComponent', () => {
  let component: MainComponent;
  let fixture: ComponentFixture<MainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MainComponent, HeaderComponent, PasswordStrengthComponent, FooterComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render HeaderComponent', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('app-header')).toBeTruthy();
  });

  it('should render PasswordStrengthComponent', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('app-password-strength')).toBeTruthy();
  });

  it('should render FooterComponent', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('app-footer')).toBeTruthy();
  });
});
