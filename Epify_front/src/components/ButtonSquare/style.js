import { StyleSheet } from 'react-native';
import colors from '../../theme/colors';

export default StyleSheet.create({
	squaresRow:{
		flexDirection:'row',
		justifyContent:'center',
		width:'100%',
	},
	squareContainer:{
		width: 120,

		marginBottom: 10,
		paddingTop:10,
		paddingBottom: 5,

		backgroundColor: colors.white,

		alignItems:'center',
		position: 'relative',
	},
	squareTitle:{
		width: '100%',

		alignItems: 'center',
		justifyContent: 'center',
	},
	squareTitleText:{
		color: colors.black,
		backgroundColor: 'rgba(0,0,0,0)',
	},
	squareIcon:{
		marginTop: 10,
	},
	playIcon:{
		position: 'absolute',
		left: 35,
		top: 35,
	},
});
