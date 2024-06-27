import styled from 'styled-components';

const Container = styled.div`
	display: flex;
`;

const Pane = styled.div`
	flex: ${props =>props.weight};
`;

export const SplitScreen = ({
	childern ,
	leftWeigth = 1,
	rightWeight = 1,
}) => {
	const [left,right] = childern;
	return (
		<Container>
			<Pane weight = {leftWeigth}>
				{left}
			</Pane>
			<Pane weight = {rightWeight}>
				{right}
			</Pane>
		</Container>
	);
}