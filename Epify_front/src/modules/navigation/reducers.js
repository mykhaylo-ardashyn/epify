import Navigator from '../../config/navigation';

export default (state, action) =>
  Navigator.router.getStateForAction(action, state) || state;
