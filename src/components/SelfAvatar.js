import React from 'react';
import Avatar from 'avataaars';

const SelfAvatar = ({ width }) => {
  return (
    <Avatar
      style={{
        height: width === 'sm' || width === 'xs' ? 125 : 150,
        position: 'relative',
        zIndex: 100,
      }}
      avatarStyle='Circle'
      topType='ShortHairShortFlat'
      accessoriesType='Blank'
      hairColor='BrownDark'
      facialHairType='Blank'
      clotheType='Hoodie'
      clotheColor='Heather'
      eyeType='Happy'
      eyebrowType='DefaultNatural'
      mouthType='Smile'
      skinColor='Light'
    />
  );
};

export default SelfAvatar;
