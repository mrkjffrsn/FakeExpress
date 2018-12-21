# FakeExpress

A fake express.js module that could be useful when mocking express objects within any test framework.
The module returns an object that resembles an `express` object.

### How to Use

The below example illustrates how the express double could be used for mocking within the jest framework

Test Code on a file called `snacksController`

```
const snackService = require('../../services/snacks');

const getSnacks = (req, res, next) => {

  return snackService.getSnacks().then((data) => {
      console.log( "On Success --- " )
      if (data != null)
      {
        res.status(200).json(data);
      }
      }, (error) => {
          res.status(400).json(error);
          console.log( "Service Promise error ", error );
        }
      );
  }

module.exports = { getSnacks };
```

A test suite for the above snacks controller

```

// { Request: {}, Response: {}, Router: {}, next: () => {} }
const express = require('fake-express`)

// Mock the response object
const response = jest.genMockFromModule('../../fakes/fakeExpress').Response;


test('get snacks positive test', async () => {
  // Set up
  let snacksData = { name: 'testName', id: 1 };

  snackService.getSnacks.mockResolvedValue(snacksData);
  response.status.mockReturnThis();
  response.json.mockReturnValue(snacksData);

  // Exercise
  await snacksController.getSnacks(null, response, null);

  // Verify
  expect(snackService.getSnacks.mock.calls.length).toBe(1);
  expect(response.status.mock.calls.length).toBe(1);
  expect(response.status.mock.calls[0][0]).toBe(200);
  expect(response.json.mock.calls.length).toBe(1);
  expect(response.json.mock.calls).toEqual([[snacksData]]);
});
```
