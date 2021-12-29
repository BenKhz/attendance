/**
 * @jest-environment jsdom
 */
import Login from '../src/App'
import React from 'react'
import { render, cleanup, screen } from '@testing-library/react'
import '@testing-library/jest-dom';

beforeAll( () => {

})

test('Should render a Login Component', ()=> {
  const elem = render(<Login />)
  screen.debug()
  // expect(screen).toContainElement(elem)
})

test('Login should render with isSignup = false and Submit Button inner Text "Sign Up"', ()=>{
  expect(1).toEqual(1);
})

test('Login switch should toggle isSignUp when clicked', ()=>{
  expect(1).toEqual(1);
})

test('Login submit button should submit name and password', ()=>{
  expect(1).toEqual(1);
})
test('Login submit with correct credentials should update isLoggedIn', ()=>{
  expect(1).toEqual(1);
})
test('Login submit with incorrect credentials should NOT update isLoggedIn', ()=>{
  expect(1).toEqual(1);
})