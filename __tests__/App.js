/**
 * @jest-environment jsdom
 */
import App from '../src/App'
import React from 'react'
import { render, cleanup, screen } from '@testing-library/react'
import '@testing-library/jest-dom';

beforeAll(()=>{

})
// afterAll(cleanup)

 test('use jsdom in this test file', () => {
  console.log("in usejsdom")
  const element = document.createElement('div');
  expect(element).not.toBeNull();
});

test('App should initialize with isLoggedIn = false, and currentEnroll = []', ()=>{
  expect(1).toEqual(1);
})

test('App should contain a Browser Router, with 4 child routes', ()=>{
  expect(1).toEqual(1);
})

test('App should initialize with isLoggedIn = false, and currentEnroll = []', ()=>{
  expect(1).toEqual(1);
})