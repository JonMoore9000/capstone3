import React from 'react';

export const SAVE_DATA = 'SAVE_DATA';
export const saveData = () => ({
  fetch('/logs/', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      firstParam: 'yourValue',
      secondParam: 'yourOtherValue',
    })
  })
})
