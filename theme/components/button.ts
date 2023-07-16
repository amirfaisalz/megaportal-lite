import type { ComponentStyleConfig } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

const Button: ComponentStyleConfig = {
	variants: {
		primary: {
			bg: 'brand.400',
			color: '#fff',
			fontSize: '14px',
			lineHeight: '24px',
			borderRadius: '12px',
			width: 'auto',
			// height: '48px',
			padding: '12px 16px',
			gap: '8px',
			_hover: { bg: 'brand.300' },
			_focus: { bg: 'brand.300' },
			_active: { bg: 'brand.300' },
		},
		float: () => ({
			fontSize: '16px',
			bg: 'brand.400',
			color: '#F8F8F8',
			fontWeight: '600',
			lineHeight: '24px',
			borderRadius: '12px',
			width: 'auto',
			// height: 'auto',
			padding: '12px 16px',
			gap: '8px',
		}),
		navy: {
			fontSize: '10px',
			bg: 'navy.900',
			color: '#fff',
			_hover: { bg: 'navy.900' },
			_focus: { bg: 'navy.900' },
			_active: { bg: 'navy.900' },
		},
		'no-effects': {
			_hover: 'none',
			_active: 'none',
			_focus: 'none',
		},
		danger: () => ({
			fontSize: '12px',
			borderRadius: '12px',
			width: 'auto',
			// height: '48px',
			padding: '12px 16px',
			gap: '8px',
			color: 'white',
			bg: 'red.500',
			_hover: 'red.400',
			_focus: 'red.400',
			_active: 'red.400',
		}),
		outlined: (props) => ({
			color: mode('brand.400', 'white')(props),
			bg: 'transparent',
			fontSize: '16px',
			border: '1px solid',
			borderRadius: '12px',
			width: 'auto',
			// height: 'auto',
			padding: '12px 16px',
			gap: '8px',
			borderColor: { bg: mode('brand.400', 'white')(props) },
			_hover: { bg: mode('blue.50', 'transparent')(props) },
			_focus: { bg: mode('blue.50', 'transparent')(props) },
			_active: { bg: mode('blue.50', 'transparent')(props) },
		}),
		paginate: (props) => ({
			color: mode('text.200', 'white')(props),
			bg: 'transparent',
			fontSize: '14px',
			borderRadius: '8px',
			width: 'auto',
			height: 'auto',
			padding: '12px',
			gap: '12px',
			borderColor: { bg: mode('gray.400', 'navy.600')(props) },
			_hover: { bg: mode('blue.50', 'transparent')(props) },
			_focus: { bg: mode('blue.50', 'transparent')(props) },
			_active: { bg: mode('gray.200', 'navy.600')(props) },
		}),
		dark: (props) => ({
			color: 'white',
			fontSize: '12px',
			borderRadius: '12px',
			// width: 'auto',
			// height: '48px',
			padding: '12px 16px',
			gap: '8px',
			bg: mode('gray.700', 'brand.400')(props),
			_hover: { bg: mode('gray.700', 'blue.500')(props) },
			_focus: { bg: mode('gray.700', 'blue.600')(props) },
			_active: { bg: mode('gray.700', 'blue.400')(props) },
		}),
		light: (props) => ({
			color: mode('gray.700', 'gray.700')(props),
			bg: mode('gray.100', 'white')(props),
			fontSize: '10px',
			_hover: { bg: mode('gray.50', 'white')(props) },
			_focus: { bg: mode('gray.50', 'white')(props) },
			_active: { bg: mode('gray.50', 'white')(props) },
		}),
	},
	baseStyle: {
		fontWeight: 'bold',
		borderRadius: '8px',
		fontSize: '10px',
	},
};

export const buttonStyles = {
	components: {
		Button,
	},
};