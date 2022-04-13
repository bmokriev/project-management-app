import React from 'react';
import { MdPhotoCamera } from 'react-icons/md';
import './avatarForm.scss';

import ButtonPrimary from '../../components/ui/buttons/ButtonPrimary/ButtonPrimary';

const colors = [
  '#40BC86',
  '#1ABC9C',
  '#27AE60',
  '#00D717',
  '#F31D2F',
  '#EC555C',
  '#FC575E',
  '#9B0A10',
  '#FCB410',
  '#B17E22',
  '#F24D16',
  '#FF8600',
  '#0918EC',
  '#BF4ACC',
  '#DA2988',
  '#34495E',
  '#181D21',
  '#074354',
  '#03A2FD',
  '#7B68EE',
  '#EC6625',
  '#2980B9',
  '#3498DB',
  '#528CCB',
];

function AvatarForm() {
  return (
    <div id='avatar-form'>
      <h1>Upload your project avatar</h1>
      <div>
        <button id='upload-btn'>
          <MdPhotoCamera id='camera' />
        </button>
        <div id='radios'>
          {colors.map((color) => (
            <input type='radio' key={color} value={color} name='color' />
          ))}
        </div>
      </div>
      <div id='buttons'>
        <ButtonPrimary btnTitle='Next' />
        <a>Skip This</a>
      </div>
    </div>
  );
}

export default AvatarForm;
