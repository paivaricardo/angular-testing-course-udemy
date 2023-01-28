import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {CoursesCardListComponent} from './courses-card-list.component';
import {CoursesModule} from '../courses.module';
import {MAT_DIALOG_DATA, MatDialog, MatDialogModule, MatDialogRef} from "@angular/material/dialog";
import {setupCourses} from "../common/setup-test-data";
import {DebugElement} from "@angular/core";
import {By} from "@angular/platform-browser";

class MatDialogMock {
  open() {
  }
}

describe('CoursesCardListComponent', () => {

  let component: CoursesCardListComponent;

  // The fixture type is a utility type that provides access to the component instance and its template. It provides a lot of functionality for testing components.
  let fixture: ComponentFixture<CoursesCardListComponent>;
  // This is a utility type that provides access to the component instance and its template. It provides a lot of functionality for testing components.
  //  This will allow us to query the DOM and find elements that we want to test.
  let el: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule(
      {
        imports: [CoursesModule],
        providers: [
          {provide: MatDialog, useClass: MatDialogMock},
          {provide: MatDialogRef, useValue: {}},
          {provide: MAT_DIALOG_DATA, useValue: {}},
        ]
      }
    ).compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(CoursesCardListComponent);
        component = fixture.componentInstance;
        el = fixture.debugElement;
      });
  }));

  it("should create the component", () => {
    expect(component).toBeTruthy();
    console.log(component);
  });


  it("should display the course list", () => {

    component.courses = setupCourses();

    // Now we need to trigger the component change detection mechanism, in order to notify Angular that the component has changed and that it needs to re-render the template.
    fixture.detectChanges();

    console.log(el.nativeElement.outerHTML);

    const cards = el.queryAll(By.css('.course-card'));

    expect(cards).withContext("Could not find cards").toBeTruthy();
    expect(cards.length).withContext("Unexpected number of courses").toBe(12);

  });


  it("should display the first course", () => {

    pending();

  });


});


