import React, { Component } from 'react';
import stepOne from './steps/stepOne';
import stepTwo from './steps/stepTwo';
import stepThree from './steps/stepThree';


export const steps = [
  {
    url: '/app/courses/create/stepOne',
    component: <stepOne/>
  },
  {
    url: '/app/courses/create/stepTwo',
    component: <stepTwo/>
  },
  {
    url: '/app/courses/create/stepThree',
    component: <stepThree/>
  }
]
