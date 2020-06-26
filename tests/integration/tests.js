const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
const expect = chai.expect;

describe('calculator functionality', function() {
  beforeEach(function() {
    browser.ignoreSynchronization = true;
    browser.get('http://localhost:3000');
  });

  // write integration tests here in the form of "it should do something..."
  it('should have working number buttons', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number2')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('2')
  })

  it('should update the display with running total', function() {
    running_total = element(by.css('#running_total'))
    element(by.css('#number2')).click();
    element(by.css('#number2')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('22');
      })

  it('should have arithmetic operations update the display with the result of the operation', function() {
    running_total = element(by.css('#running_total'))
    element(by.css('#number2')).click();
    element(by.css('#operator_add')).click();
    element(by.css('#number2')).click();
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('4');
  })

it('should be able to chain multiple operations together', function() {
  running_total = element(by.css('#running_total'))
  element(by.css('#number2')).click();
  element(by.css('#operator_add')).click();
  element(by.css('#number2')).click();
  element(by.css('#operator_subtract')).click();
  element(by.css('#number1')).click();
  element(by.css('#operator_equals')).click();
  expect(running_total.getAttribute('value')).to.eventually.equal('3');
})

it('shoud output for a range of large numbers', function() {
  running_total = element(by.css('#running_total'))
  element(by.css('#number9')).click();
  element(by.css('#number9')).click();
  element(by.css('#operator_multiply')).click();
  element(by.css('#number5')).click();
  element(by.css('#number2')).click();
  element(by.css('#operator_multiply')).click();
  element(by.css('#number2')).click();
  element(by.css('#number2')).click();
  element(by.css('#operator_equals')).click();
  expect(running_total.getAttribute('value')).to.eventually.equal('113256');
})

it('should output for a range of negative numbers', function() {
  running_total = element(by.css('#running_total'))
  element(by.css('#number5')).click();
  element(by.css('#operator_subtract')).click();
  lement(by.css('#number3')).click();
  element(by.css('#number2')).click();
  element(by.css('#operator_equals')).click();
  expect(running_total.getAttribute('value')).to.eventually.equal('0');
})

it('should output for a range of decimal numbers', function() {
  running_total = element(by.css('#running_total'))
    element(by.css('#number5')).click();
    element(by.css('#operator_divide')).click();
    element(by.css('#number5')).click();
    element(by.css('#operator_equals')).click();
  expect(running_total.getAttribute('value')).to.eventually.equal('1');
})

it('what does the code do in exceptional circumstances', function() {
  running_total = element(by.css('#running_total'))
   element(by.css('#number3')).click();
     element(by.css('#operator_divide')).click();
       element(by.css('#number0')).click();
       element(by.css('#operator_equals')).click();
          expect(running_total.getAttribute('value')).to.eventually.equal('0')
})



});
