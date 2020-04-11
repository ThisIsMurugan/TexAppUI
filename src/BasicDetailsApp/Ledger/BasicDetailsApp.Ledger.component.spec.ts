import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { LedgerComponent } from './BasicDetailsApp.Ledger.component';

describe('LedgerComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        LedgerComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(LedgerComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Tex ????'`, () => {
    const fixture = TestBed.createComponent(LedgerComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Tex ????');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(LedgerComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('Tex ???? app is running!');
  });
});
