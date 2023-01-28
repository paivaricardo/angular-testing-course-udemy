import {CalculatorService} from "./calculator.service";
import {LoggerService} from "./logger.service";
import {TestBed} from "@angular/core/testing";

// You can disable tests by adding an x in front of the describe or it function

// You can focus on a single test suite by prepending the f letter.

describe('CalculatorService', () => {

  let calculator: CalculatorService, loggerSpy: any;

  // This is a setup method that will be called before each test, initializing the test variables and providing certain dependency injections.
  beforeEach(() => {
    console.log('Calling beforeEach... creating loggerSpy and calculator');
    loggerSpy = jasmine.createSpyObj('LoggerService', ['log']);

    // Use the test bed to create a single testing module with the CalculatorService and the LoggerService
    TestBed.configureTestingModule({
      providers: [
        CalculatorService,
        // Provide a dependency injection token for the logger service
        {provide: LoggerService, useValue: loggerSpy}
      ]
    });

    // We can use the test bed to get an instance of the CalculatorService, instead of using the constructor explicitly
    // Provide a unique dependency injection key.
    calculator = TestBed.get(CalculatorService);
  });

  it('should add two numbers', () => {
    console.log('Add test');

    // When
    const result = calculator.add(2, 2);

    // Then
    expect(result).toBe(4);
    expect(loggerSpy.log).toHaveBeenCalledTimes(1);
  });

  it('should subtract two numbers', () => {
    console.log('Subtract test');

    // When
    const result = calculator.subtract(2, 2);

    // Then
    expect(result).toBe(0, 'unexpected subtraction result');
  });
})
