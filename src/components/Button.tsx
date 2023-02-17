import {
	Button as ChakraButton,
	ButtonProps as ChakraButtonProps,
} from '@chakra-ui/react';

interface ButtonProps extends ChakraButtonProps {
	text: string;
}

export function Button({ text, ...rest }: ButtonProps) {
	return (
		<ChakraButton
			fontSize={[12, 16, 18, 24]}
			bg="primary"
			color="text"
			h={[10, 12, 12, 14]}
			w={[100, 125, 130, 145]}
			_hover={{ filter: 'brightness(0.8)', transform: 'scale(1.05)' }}
			{...rest}
		>
			{text}
		</ChakraButton>
	);
}
