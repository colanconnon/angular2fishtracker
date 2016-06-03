
import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { Fishtrackerangular2AppComponent } from '../app/fishtrackerangular2.component';

beforeEachProviders(() => [Fishtrackerangular2AppComponent]);

describe('App: Fishtrackerangular2', () => {
  it('should create the app',
      inject([Fishtrackerangular2AppComponent], (app: Fishtrackerangular2AppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'fishtrackerangular2 works!\'',
      inject([Fishtrackerangular2AppComponent], (app: Fishtrackerangular2AppComponent) => {
    expect(app.title).toEqual('fishtrackerangular2 works!');
  }));
});