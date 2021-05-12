export const fontSizeS: string = '12px';
export const fontSizeM: string = '14px';
export const fontSizeL: string = '20px';
export const fontSizeXL: string = '28px';
export const fontFamily: string = "'Montserrat', sans-serif";

export const primaryBlue: string = 'rgba(6, 91, 234, 1)';
export const primaryBlueHover: string = 'rgba(4, 81, 210, 1)';
export const primaryBlueActive: string = 'rgba(4, 81, 210, 1)';
export const primaryGrey: string = 'rgba(198, 208, 224, 1)';
export const primaryGreyHover: string = 'rgba(51, 51, 51, 1)';
export const primaryRed: string = '#FF4B26';
export const primaryGreen: string = 'rgba(111, 207, 151, 1)';
export const primaryTextBlack: string = 'rgba(51, 51, 51, 1)';
export const primaryTextGrey: string = 'rgba(117, 119, 122, 1)';

export const textStyleH1: string = `
    font-family: ${fontFamily};
    font-size: ${fontSizeXL};
    color: ${primaryTextBlack};
    font-weight: 700;
    line-height: 24px;
`;

export const textStyleH2: string = `
    font-family: ${fontFamily};
    font-size: ${fontSizeL};
    color: ${primaryTextBlack};
    font-weight: 600;
    line-height: 26px;
`;

export const textStyleSmall: string = `
    font-family: ${fontFamily};
    font-size: ${fontSizeM};
    color: ${primaryTextBlack};
    font-weight: 600;
    line-height: 24px;
`;

export const errorTextStyle: string = `
    font-family: ${fontFamily};
    font-size: ${fontSizeS};
    color: ${primaryRed};
    font-weight: 400;
    line-height: 14px;
`;
